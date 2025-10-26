
import React from 'react';
import { ActionButton } from './ActionButton';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-3xl shadow-2xl text-center flex flex-col items-center">
      <div className="text-8xl mb-4 animate-bounce">🪑</div>
      <h1 className="text-5xl font-bold text-purple-700 mb-2">
        كرسي الاعتراف
      </h1>
      <p className="text-xl text-gray-600 mb-8">Family Truth Chair</p>
      <p className="text-lg text-gray-500 mb-12 max-w-md">
        لعبة عائلية ممتعة لتعميق الروابط وتقوية المحبة بين أفراد الأسرة.
      </p>
      <ActionButton onClick={onStart} className="w-full text-2xl py-4">
        ابدأ اللعب
      </ActionButton>
    </div>
  );
};
