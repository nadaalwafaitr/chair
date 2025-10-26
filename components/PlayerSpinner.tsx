import React, { useState, useEffect, useMemo } from 'react';
import { Member } from '../types';
import { AVATARS, WHEEL_COLORS } from '../constants';

interface PlayerSpinnerProps {
  members: Member[];
  onSpinComplete: (selectedMember: Member) => void;
}

export const PlayerSpinner: React.FC<PlayerSpinnerProps> = ({ members, onSpinComplete }) => {
  const [rotation, setRotation] = useState(0);
  const memberCount = members.length;
  
  useEffect(() => {
    if (memberCount < 2) {
      if(memberCount === 1) {
         setTimeout(() => onSpinComplete(members[0]), 1000);
      }
      return;
    }

    const spinDuration = 4000;
    const winnerIndex = Math.floor(Math.random() * memberCount);
    const sliceAngle = 360 / memberCount;
    
    const fullSpins = 5;
    const finalAngle = (fullSpins * 360) - (winnerIndex * sliceAngle);
    const randomOffset = (Math.random() - 0.5) * (sliceAngle * 0.8);
    
    setRotation(finalAngle + randomOffset);

    const timer = setTimeout(() => {
      onSpinComplete(members[winnerIndex]);
    }, spinDuration + 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberCount]);

  const wheelStyle = useMemo(() => {
    if (memberCount === 0) return {};
    
    const sliceAngle = 360 / memberCount;
    const gradientParts = members.map((_, index) => {
        const color = WHEEL_COLORS[index % WHEEL_COLORS.length];
        const startAngle = index * sliceAngle;
        const endAngle = (index + 1) * sliceAngle;
        return `${color} ${startAngle}deg ${endAngle}deg`;
    });
    
    // Start the gradient from the top (-90deg) but offset it so the pointer
    // aims at the middle of a slice, not the border.
    const gradient = `conic-gradient(from ${-sliceAngle / 2 - 90}deg, ${gradientParts.join(', ')})`;
    
    return { backgroundImage: gradient };
  }, [memberCount, members]);


  if (memberCount === 0) return null;

  if (memberCount === 1) {
    const AvatarComponent = AVATARS[members[0].avatar];
    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-2xl text-center flex flex-col items-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">اللاعب الوحيد</h2>
            <AvatarComponent className="w-32 h-32 animate-bounce" />
            <p className="font-bold text-2xl text-purple-800 mt-4">{members[0].name}</p>
        </div>
    )
  }

  const wheelRadius = memberCount > 5 ? 140 : 120;

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-2xl text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-8">والآن... من سعيد الحظ؟</h2>
      <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
        {/* Pointer */}
        <div 
          className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-0 h-0 
                     border-t-[15px] border-t-transparent
                     border-b-[15px] border-b-transparent
                     border-l-[25px] border-l-red-500 z-20"
          style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.2))' }}
        ></div>
        
        {/* Spinning Wheel Container */}
        <div 
          className="w-full h-full rounded-full border-8 border-purple-200 shadow-xl relative transition-transform duration-[4000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)`, ...wheelStyle }}
        >
          {/* Members placed around the wheel */}
          {members.map((member, index) => {
            const AvatarComponent = AVATARS[member.avatar];
            const angle = (360 / memberCount) * index;
            const transform = `rotate(${angle}deg) translate(${wheelRadius}px) rotate(${-angle}deg)`;
            
            return (
              <div
                key={member.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ transform }}
              >
                <AvatarComponent className="w-20 h-20 md:w-24 md:h-24" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};