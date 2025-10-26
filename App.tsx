import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Member, Question, GameState, GameMode } from './types';
import { QUESTIONS } from './constants';
import { FamilySetup } from './components/FamilySetup';
import { Lobby } from './components/Lobby';
import { GameScreen } from './components/GameScreen';
import { PlayerSpinner } from './components/PlayerSpinner';
import { SplashScreen } from './components/SplashScreen';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { AdBanner } from './components/AdBanner';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SPLASH);
  const [previousGameState, setPreviousGameState] = useState<GameState>(GameState.SPLASH);
  const [gameMode, setGameMode] = useState<GameMode>(GameMode.CLASSIC);
  const [members, setMembers] = useState<Member[]>([]);
  const [activePlayer, setActivePlayer] = useState<Member | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [askedQuestionIds, setAskedQuestionIds] = useState<Set<number>>(new Set());

  const navigateTo = (newGameState: GameState) => {
    setPreviousGameState(gameState);
    setGameState(newGameState);
  };

  const navigateBack = () => {
    setGameState(previousGameState);
  };

  const availableQuestions = useMemo(() => {
    if (!activePlayer) return [];
    const age = activePlayer.age;
    return QUESTIONS.filter(q => {
      const isAgeAppropriate = q.age_min <= age;
      const isUnasked = !askedQuestionIds.has(q.id);
      let isModeAppropriate = true;
      if (gameMode === GameMode.COMPASSION) {
        isModeAppropriate = q.category === 'حنان' || q.depth > 1;
      } else if (gameMode === GameMode.LAUGHTER) {
        isModeAppropriate = q.category === 'فكاهي' || q.depth === 1;
      }
      return isAgeAppropriate && isUnasked && isModeAppropriate;
    });
  }, [activePlayer, askedQuestionIds, gameMode]);

  const handleStartApp = () => {
    navigateTo(GameState.SETUP);
  };

  const handleFamilyCreated = (familyMembers: Member[]) => {
    setMembers(familyMembers);
    navigateTo(GameState.LOBBY);
  };

  const handleGoBackToSetup = () => {
    navigateTo(GameState.SETUP);
  };

  const handleStartGame = (mode: GameMode) => {
    setGameMode(mode);
    setAskedQuestionIds(new Set());
    navigateTo(GameState.PLAYER_SELECTION);
  };

  const handlePlayerSelected = useCallback((player: Member) => {
    setActivePlayer(player);
    navigateTo(GameState.GAME);
  }, []);

  const handleNextTurn = useCallback(() => {
    setCurrentQuestion(null); // Clear question to show loading state
    navigateTo(GameState.PLAYER_SELECTION);
  }, []);

  const handleNewGame = () => {
    navigateTo(GameState.LOBBY);
    setAskedQuestionIds(new Set());
    setActivePlayer(null);
    setCurrentQuestion(null);
  }

  useEffect(() => {
    if (gameState !== GameState.GAME || !activePlayer || currentQuestion) {
      return;
    }
    if (availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const newQuestion = availableQuestions[randomIndex];
      setCurrentQuestion(newQuestion);
      setAskedQuestionIds(prev => new Set(prev).add(newQuestion.id));
    } else { 
      if (askedQuestionIds.size > 0) {
        console.warn("No more available questions. Resetting the list and picking a new one.");
        const allEligibleQuestions = QUESTIONS.filter(q => {
            const isAgeAppropriate = q.age_min <= activePlayer.age;
            let isModeAppropriate = true;
            if (gameMode === GameMode.COMPASSION) {
                isModeAppropriate = q.category === 'حنان' || q.depth > 1;
            } else if (gameMode === GameMode.LAUGHTER) {
                isModeAppropriate = q.category === 'فكاهي' || q.depth === 1;
            }
            return isAgeAppropriate && isModeAppropriate;
        });
        
        if (allEligibleQuestions.length === 0) {
             setCurrentQuestion({ id: -1, text: "عذراً، لا توجد أسئلة متاحة.", category: "error", depth: 1, age_min: 0 });
             return;
        }

        const randomIndex = Math.floor(Math.random() * allEligibleQuestions.length);
        const newQuestion = allEligibleQuestions[randomIndex];
        
        setCurrentQuestion(newQuestion);
        setAskedQuestionIds(new Set([newQuestion.id]));

      } else {
        console.error(`No questions found for player age ${activePlayer.age} and mode ${gameMode}.`);
        setCurrentQuestion({
            id: -1,
            text: "عذراً، لا توجد أسئلة متاحة تطابق هذه الاختيارات. حاول تغيير وضع اللعب.",
            category: "error",
            depth: 1,
            age_min: 0,
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, activePlayer, gameMode]);

  const renderGameState = () => {
    switch (gameState) {
      case GameState.SPLASH:
        return <SplashScreen onStart={handleStartApp} />;
      case GameState.SETUP:
        return <FamilySetup initialMembers={members} onFamilyCreated={handleFamilyCreated} />;
      case GameState.LOBBY:
        return (
          <>
            <Lobby members={members} onStartGame={handleStartGame} onGoBack={handleGoBackToSetup} />
            <AdBanner />
          </>
        );
      case GameState.PLAYER_SELECTION:
        if (members.length === 0) return <FamilySetup initialMembers={[]} onFamilyCreated={handleFamilyCreated} />;
        return <PlayerSpinner members={members} onSpinComplete={handlePlayerSelected} />;
      case GameState.GAME:
        if (activePlayer && currentQuestion) {
          return <GameScreen activePlayer={activePlayer} question={currentQuestion} onNextQuestion={handleNextTurn} onNewGame={handleNewGame} />;
        }
        return <div className="text-center text-purple-700 font-bold text-2xl p-8">...يتم اختيار سؤال</div>;
      case GameState.PRIVACY_POLICY:
        return <PrivacyPolicy onBack={navigateBack} />;
      case GameState.TERMS_OF_SERVICE:
        return <TermsOfService onBack={navigateBack} />;
      default:
        return <SplashScreen onStart={handleStartApp} />;
    }
  };

  return (
    <main className="bg-gradient-to-br from-cream-100 to-purple-100 min-h-screen flex items-center justify-center p-4">
       <style>{`
          :root {
            --tw-color-cream-100: #fdfbf7;
            --tw-color-purple-100: #f3e8ff;
          }
          .bg-gradient-to-br.from-cream-100 {
              background-image: linear-gradient(to bottom right, var(--tw-color-cream-100), var(--tw-color-purple-100));
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
       `}</style>
      <div className="w-full">
        {renderGameState()}

        {gameState !== GameState.PRIVACY_POLICY && gameState !== GameState.TERMS_OF_SERVICE && (
           <footer className="text-center mt-6 text-gray-500">
             <button onClick={() => navigateTo(GameState.TERMS_OF_SERVICE)} className="hover:underline mx-2">شروط الاستخدام</button>
             &bull;
             <button onClick={() => navigateTo(GameState.PRIVACY_POLICY)} className="hover:underline mx-2">سياسة الخصوصية</button>
             <p className="text-sm mt-2">&copy; 2024 كرسي الاعتراف. جميع الحقوق محفوظة.</p>
           </footer>
        )}
      </div>
    </main>
  );
};

export default App;
