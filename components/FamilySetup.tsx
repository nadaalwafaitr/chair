import React, { useState } from 'react';
import { Member } from '../types';
import { AVATARS } from '../constants';
import { PlusIcon } from './icons/PlusIcon';
import { UserIcon } from './icons/UserIcon';
import { ActionButton } from './ActionButton';

interface FamilySetupProps {
  initialMembers: Member[];
  onFamilyCreated: (members: Member[]) => void;
}

export const FamilySetup: React.FC<FamilySetupProps> = ({ initialMembers, onFamilyCreated }) => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [avatarIndex, setAvatarIndex] = useState(0);

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && age && age > 0) {
      setMembers([...members, { id: Date.now(), name: name.trim(), avatar: avatarIndex, age: Number(age) }]);
      setName('');
      setAge('');
      setAvatarIndex((prevIndex) => (prevIndex + 1) % AVATARS.length);
    }
  };

  const handleDeleteMember = (idToDelete: number) => {
    setMembers(members.filter(member => member.id !== idToDelete));
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-2xl text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-2">تكوين العائلة</h2>
      <p className="text-gray-600 mb-8">أضف أو أزل أفراد العائلة لبدء اللعبة</p>

      <div className="mb-8 min-h-[100px]">
        {members.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {members.map(member => {
              const AvatarComponent = AVATARS[member.avatar];
              return (
                <div key={member.id} className="relative flex flex-col items-center p-2 bg-purple-50 rounded-xl w-24">
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors z-10"
                    aria-label={`حذف ${member.name}`}
                  >
                    X
                  </button>
                  <AvatarComponent className="w-16 h-16" />
                  <span className="font-semibold text-gray-700 truncate w-full">{member.name}</span>
                  <span className="text-xs text-gray-500">({member.age} سنة)</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-400 flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-xl">
            <UserIcon className="w-12 h-12 mb-2" />
            <p>لم تتم إضافة أي أفراد بعد</p>
          </div>
        )}
      </div>

      <form onSubmit={handleAddMember} className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative w-full">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="اسم العضو"
              className="w-full p-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="العمر"
            className="w-24 p-3 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            min="1"
          />
        </div>

        <div className="p-2 bg-gray-100 rounded-full">
          <p className="font-semibold text-gray-600 mb-2">اختر شخصية رمزية</p>
          <div className="flex justify-center flex-wrap gap-2">
            {AVATARS.map((AvatarComponent, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setAvatarIndex(index)}
                className={`p-1 rounded-full transition-all duration-200 ${avatarIndex === index ? 'ring-4 ring-purple-400' : 'hover:scale-110'}`}
              >
                <AvatarComponent className="w-12 h-12" />
              </button>
            ))}
          </div>
        </div>

        <ActionButton type="submit" variant="secondary" className="w-full">
          <PlusIcon />
          إضافة عضو
        </ActionButton>
      </form>

      {members.length >= 2 && (
        <ActionButton onClick={() => onFamilyCreated(members)} className="w-full mt-6">
          تأكيد ومتابعة
        </ActionButton>
      )}
    </div>
  );
};