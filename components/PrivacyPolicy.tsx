import React from 'react';
import { ActionButton } from './ActionButton';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-white rounded-3xl shadow-2xl text-right">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">سياسة الخصوصية</h1>
      <div className="space-y-4 text-gray-700 leading-loose">
        <h2 className="text-2xl font-semibold text-gray-800">مقدمة</h2>
        <p>
          نحن في "كرسي الاعتراف" نحترم خصوصيتك ونلتزم بحمايتها. توضح سياسة الخصوصية هذه كيفية تعاملنا مع معلوماتك.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">المعلومات التي نجمعها</h2>
        <p>
          التطبيق لا يجمع أو يخزن أي بيانات شخصية أو إجابات على الأسئلة على خوادمنا. جميع المعلومات التي تدخلها، مثل أسماء أفراد العائلة وأعمارهم، يتم تخزينها محليًا على جهازك فقط ولا يمكننا الوصول إليها.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">الإعلانات</h2>
        <p>
          قد يستخدم هذا التطبيق شبكات إعلانية تابعة لجهات خارجية (مثل Google AdSense) لعرض الإعلانات. قد تستخدم هذه الشركات معلومات حول زياراتك لهذا التطبيق والتطبيقات الأخرى من أجل توفير إعلانات حول السلع والخدمات التي تهمك.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800">التغييرات على سياسة الخصوصية</h2>
        <p>
          قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنقوم بإعلامك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800">اتصل بنا</h2>
        <p>
          إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك الاتصال بنا عبر البريد الإلكتروني: bookalendar@gmail.com
        </p>
      </div>
      <ActionButton onClick={onBack} variant="ghost" className="w-full mt-10">
        العودة
      </ActionButton>
    </div>
  );
};