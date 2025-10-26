import React from 'react';
import { ActionButton } from './ActionButton';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-2xl text-right">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">شروط الاستخدام</h1>
      <div className="space-y-4 text-gray-700 leading-loose">
        <h2 className="text-2xl font-semibold text-gray-800">1. القبول بالشروط</h2>
        <p>
          باستخدامك لتطبيق "كرسي الاعتراف"، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من الشروط، فلا يجوز لك استخدام التطبيق.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">2. استخدام التطبيق</h2>
        <p>
          يجب استخدام التطبيق للأغراض العائلية والترفيهية فقط. يُحظر استخدام التطبيق لأي أغراض غير قانونية أو ضارة. أنت مسؤول عن الحفاظ على بيئة محترمة وآمنة أثناء اللعب.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800">3. المحتوى</h2>
        <p>
          الأسئلة المقدمة في التطبيق هي لأغراض التوجيه والترفيه. نحن غير مسؤولين عن أي إجابات أو مناقشات تنشأ أثناء استخدام اللعبة.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">4. تحديد المسؤولية</h2>
        <p>
          يتم توفير التطبيق "كما هو". نحن لا نتحمل أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدامك للتطبيق.
        </p>
      </div>
       <ActionButton onClick={onBack} variant="ghost" className="w-full mt-10">
        العودة
      </ActionButton>
    </div>
  );
};