import { Question } from './types';
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8 } from './components/avatars';

export const AVATARS = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar8];

// Vibrant color palette for the spinning wheel segments
export const WHEEL_COLORS = [
  '#fb923c', // orange-400
  '#facc15', // yellow-400
  '#4ade80', // green-400
  '#2dd4bf', // teal-400
  '#60a5fa', // blue-400
  '#c084fc', // purple-400
  '#f472b6', // pink-400
  '#ef4444', // red-500
];


export const QUESTIONS: Question[] = [
  // A. شخصية فكاهية (خفيفة)
  { id: 1, text: "لو كان عندك ريموت حياة، على أي لحظة بتضغط زر الإعادة؟ ولماذا؟", category: "فكاهي", depth: 1, age_min: 6 },
  { id: 2, text: "اختر لقبًا طريفًا لنفسك يصف عادة مضحكة فيك.", category: "فكاهي", depth: 1, age_min: 6 },
  { id: 3, text: "اختراع سخيف تتمنّى وجوده في البيت؟", category: "فكاهي", depth: 1, age_min: 6 },
  { id: 4, text: "أطرف موقف صار معنا بالعيلة وبتحب نحكيه للضيوف؟", category: "فكاهي", depth: 2, age_min: 10 },
  { id: 5, text: "لو كنت بطل خارق ليوم واحد، ما هي قوتك الخارقة وماذا ستفعل بها؟", category: "فكاهي", depth: 1, age_min: 6 },
  { id: 6, text: "ما هو أغرب حلم حلمت به وتتذكره؟", category: "فكاهي", depth: 2, age_min: 10 },

  // B. شخصية عن التعلّم
  { id: 10, text: "شيء تعلّمته مؤخرًا وغيّر نظرتك؟ احكِ المثال.", category: "تعلّم", depth: 2, age_min: 13 },
  { id: 11, text: "ما الأسلوب الذي يساعدك تتذكر المعلومات؟ جرّب أن تشرح مثالًا.", category: "تعلّم", depth: 2, age_min: 13 },
  { id: 12, text: "لو تدرّس فكرة واحدة لإخوتك، شو بتختار وليش؟", category: "تعلّم", depth: 2, age_min: 13 },
  { id: 13, text: "مهارة تتمنّى نتعلّمها سوا خلال شهر؟ خطّة بسيطة؟", category: "تعلّم", depth: 2, age_min: 10 },
  { id: 14, text: "ما هو الكتاب أو الفيلم الذي أثر فيك كثيراً ولماذا؟", category: "تعلّم", depth: 3, age_min: 16 },

  // C. الحياة والأهداف والقيم والرؤية
  { id: 20, text: "ما القيمة اللي ما بتساوم عليها؟ احكِ موقفاً ثبتّ فيها عليها.", category: "قيم", depth: 3, age_min: 16 },
  { id: 21, text: "لو كتبت رؤية لحياتك بعد 5 سنوات، شو أول 3 سطور؟", category: "قيم", depth: 3, age_min: 18 },
  { id: 22, text: "ثلاث كلمات توصف الشخص اللي تتمنى تكونه بعد سنتين.", category: "قيم", depth: 2, age_min: 13 },
  { id: 23, text: "موقف عادي عملته بقيمة كبيرة بالنسبة إلك—شو هو؟", category: "قيم", depth: 3, age_min: 16 },
  { id: 24, text: "ما هو الشيء الذي تفعله ويجعلك تشعر بالفخر بنفسك؟", category: "قيم", depth: 2, age_min: 10 },
  
  // D. الذكريات والروابط العائلية
  { id: 30, text: "ذكرى جميلة مع العائلة تتكرر ببالك كثير—شو هي؟ وليش؟", category: "ذكريات", depth: 2, age_min: 6 },
  { id: 31, text: "ريحة/أغنية/مكان يرجّعلك ذكرى بتضحك؟ احكيلنا.", category: "ذكريات", depth: 1, age_min: 6 },
  { id: 32, text: "ما هي أفضل نصيحة تلقيتها من أحد أفراد العائلة؟", category: "ذكريات", depth: 2, age_min: 13 },
  { id: 33, text: "ما هو التقليد العائلي المفضل لديك؟", category: "ذكريات", depth: 1, age_min: 6 },
  { id: 34, text: "صف يومًا مثالياً تقضيه مع العائلة.", category: "ذكريات", depth: 2, age_min: 10 },

  // E. التعاطف والمشاعر (نمط الحنان)
  { id: 40, text: "متى حسّيت إنك مفهوم ومسموع؟ شو ساعد بهاللحظة؟", category: "حنان", depth: 3, age_min: 13 },
  { id: 41, text: "جملة لو سمعتها اليوم ترفع معنوياتك؟", category: "حنان", depth: 2, age_min: 10 },
  { id: 42, text: "وقت بتضايق، شو بتفضّل من العيلة: نصيحة ولا حضن ولا بس يسمعوك؟", category: "حنان", depth: 3, age_min: 10 },
  { id: 43, text: "ما هو الشيء الذي تقدره في الشخص الجالس على يمينك؟", category: "حنان", depth: 2, age_min: 6 },
  { id: 44, text: "كيف يمكننا كعائلة أن ندعم بعضنا البعض بشكل أفضل؟", category: "حنان", depth: 3, age_min: 13 },

  // F. الإبداع والخيال
  { id: 50, text: "لو تألّفت قصة عن عيلتنا، شو عنوانها؟", category: "خيال", depth: 2, age_min: 10 },
  { id: 51, text: "لو كان بإمكانك السفر إلى أي مكان في العالم، إلى أين ستذهب ولماذا؟", category: "خيال", depth: 1, age_min: 6 },
  { id: 52, text: "لو كان لديك أي موهبة فنية، ماذا ستكون؟", category: "خيال", depth: 1, age_min: 6 },
  { id: 53, text: "اخترع طبق طعام جديد وغريب، ما هي مكوناته؟", category: "خيال", depth: 1, age_min: 6 },

  // G. مواقف لو… (سيناريو/اختيارات)
  { id: 60, text: "لو صرت مسؤول يوم كامل، شو أول قرار بتاخده لصالح العيلة؟", category: "سيناريو", depth: 2, age_min: 10 },
  { id: 61, text: "لو في زرّ يضيف عادة نافعة لعيلتنا فورًا—أي عادة؟", category: "سيناريو", depth: 2, age_min: 13 },
  { id: 62, text: "لو قابلت نسخة منك عمرها 10 سنوات، ما هي النصيحة التي ستقدمها لها؟", category: "سيناريو", depth: 3, age_min: 16 },

  // H. “تفضّل/ولا” تربوية خفيفة
  { id: 70, text: "تفضّل نخطط نزهة أسبوعية قصيرة ولا رحلة طويلة شهرية؟ ليش؟", category: "تفضّل", depth: 1, age_min: 6 },
  { id: 71, text: "تفضل أن تكون قادراً على التحدث مع الحيوانات أو التحدث بجميع اللغات البشرية؟", category: "تفضّل", depth: 1, age_min: 6 },
  { id: 72, text: "تفضل قضاء يوم بدون كهرباء أو يوم بدون الخروج من المنزل؟", category: "تفضّل", depth: 1, age_min: 10 },

  // I. تقدير الذات والعادات
  { id: 80, text: "عادة صغيرة تبغى تضيفها لأسبوعك وليش؟", category: "عادات", depth: 2, age_min: 13 },
  { id: 81, text: "ما هو الشيء الذي تفعله لتهدئة نفسك عندما تكون متوتراً؟", category: "عادات", depth: 2, age_min: 13 },
  { id: 82, text: "ما هو الإنجاز الصغير الذي حققته هذا الأسبوع وتفخر به؟", category: "عادات", depth: 1, age_min: 10 },
];
