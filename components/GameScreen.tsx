import React, { useState, useEffect } from 'react';
import { Member, Question } from '../types';
import { generateFollowUpQuestion } from '../services/geminiService';
import { ActionButton } from './ActionButton';
import { ArrowPathIcon } from './icons/ArrowPathIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { AVATARS } from '../constants';

interface GameScreenProps {
  activePlayer: Member;
  question: Question;
  onNextQuestion: () => void;
  onNewGame: () => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ activePlayer, question, onNextQuestion, onNewGame }) => {
  const [answer, setAnswer] = useState('');
  const [followUp, setFollowUp] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);

  const AvatarComponent = AVATARS[activePlayer.avatar];

  useEffect(() => {
    setAnswer('');
    setFollowUp('');
    setShowFollowUp(false);
  }, [question, activePlayer]);

  const handleGenerateFollowUp = async () => {
    if (!answer.trim()) return;
    setIsGenerating(true);
    setShowFollowUp(true);
    const generatedQuestion = await generateFollowUpQuestion(question.text, answer);
    setFollowUp(generatedQuestion);
    setIsGenerating(false);
  };
  
  const handleNext = () => {
    setShowFollowUp(false);
    onNextQuestion();
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-2xl flex flex-col items-center text-center">
      <div className="mb-6">
        <div className="inline-block animate-bounce">
            <AvatarComponent className="w-32 h-32" />
        </div>
        <h2 className="text-3xl font-bold text-purple-800">دور <span className="text-green-500">{activePlayer.name}</span>!</h2>
      </div>

      <div className="w-full p-6 bg-purple-50 rounded-2xl mb-6 min-h-[100px]">
        <p className="text-2xl font-semibold text-gray-800 leading-relaxed">{question.text}</p>
      </div>

      <div className="w-full mb-6">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={`اكتب إجابتك هنا يا ${activePlayer.name}...`}
          className="w-full h-32 p-4 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
        />
      </div>
      
      {showFollowUp && (
        <div className="w-full p-4 bg-green-50 rounded-2xl mb-6 animate-fade-in">
          <h4 className="font-bold text-green-700 mb-2">سؤال متابعة ذكي:</h4>
          {isGenerating ? (
            <div className="flex items-center justify-center text-gray-600">
                <SparklesIcon className="w-5 h-5 mr-2 animate-spin" />
                <p>لحظة إبداع...</p>
            </div>
          ) : (
            <p className="text-xl font-semibold text-green-800">{followUp}</p>
          )}
        </div>
      )}

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <ActionButton onClick={onNextQuestion} variant="ghost">
          <ArrowPathIcon />
          سؤال آخر
        </ActionButton>
        <ActionButton onClick={handleGenerateFollowUp} disabled={!answer.trim() || isGenerating} variant="secondary">
          <SparklesIcon />
          سؤال متابعة ذكي
        </ActionButton>
      </div>
      
       <div className="w-full flex flex-col sm:flex-row gap-4">
        <ActionButton onClick={handleNext} className="w-full">
          اللاعب التالي
        </ActionButton>
         <ActionButton onClick={onNewGame} variant="ghost" className="w-full sm:w-auto">
          إنهاء اللعبة
        </ActionButton>
      </div>
    </div>
  );
};