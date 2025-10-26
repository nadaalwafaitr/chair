import React from 'react';
import { Member, GameMode } from '../types';
import { ActionButton } from './ActionButton';
import { AVATARS } from '../constants';

interface LobbyProps {
  members: Member[];
  onStartGame: (mode: GameMode) => void;
  onGoBack: () => void;
}

const gameModes = [
  { mode: GameMode.CLASSIC, description: "لاعب عشوائي وسؤال عشوائي، النمط التقليدي والممتع.", color: "purple" },
  { mode: GameMode.COMPASSION, description: "أسئلة تركز على المشاعر والتعاطف لتعميق الروابط.", color: "green" },
  { mode: GameMode.LAUGHTER, description: "أسئلة خفيفة ومضحكة لجلسة مليئة بالضحك والمرح.", color: "yellow" },
];

export const Lobby: React.FC<LobbyProps> = ({ members, onStartGame, onGoBack }) => {
  const [selectedMode, setSelectedMode] = React.useState<GameMode>(GameMode.CLASSIC);

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-2xl text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-2">جاهزون للمرح؟</h2>
      <p className="text-gray-600 mb-8">هذه هي عائلتكم الرائعة!</p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {members.map(member => {
          const AvatarComponent = AVATARS[member.avatar];
          return (
            <div key={member.id} className="flex flex-col items-center text-center w-24">
              <AvatarComponent className="w-24 h-24 mb-2" />
              <span className="font-bold text-lg text-gray-800 truncate w-full">{member.name}</span>
              <span className="text-sm text-gray-500">({member.age} سنة)</span>
            </div>
          );
        })}
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">اختروا وضع اللعب</h3>
        <div className="space-y-3">
          {gameModes.map(({ mode, description }) => (
            <button
              key={mode}
              onClick={() => setSelectedMode(mode)}
              className={`w-full text-right p-4 rounded-xl border-4 transition-all ${selectedMode === mode ? 'border-purple-500 bg-purple-50' : 'border-transparent bg-gray-100 hover:bg-gray-200'}`}
            >
              <h4 className="font-bold text-lg text-purple-800">{mode}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </button>
          ))}
        </div>
      </div>
      
       <div className="mt-8 flex flex-col sm:flex-row-reverse gap-4">
        <ActionButton onClick={() => onStartGame(selectedMode)} className="w-full text-xl py-4">
            ابدأ الجلسة
        </ActionButton>
        <ActionButton onClick={onGoBack} variant="ghost" className="w-full sm:w-auto">
            العودة وتعديل العائلة
        </ActionButton>
      </div>
    </div>
  );
};