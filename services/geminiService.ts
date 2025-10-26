
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  // This is a placeholder check. In a real environment, the key would be set.
  // For this web-only build, we'll mock the API if the key is missing.
  console.warn("API_KEY environment variable not set. Gemini API will be mocked.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const mockFollowUpQuestions = [
    "هل يمكنك أن تعطي مثالاً على ذلك؟",
    "ما الذي جعلك تفكر في هذه الإجابة تحديدًا؟",
    "كيف شعرت عندما حدث ذلك؟",
    "هل تغير رأيك حول هذا الموضوع بمرور الوقت؟",
    "من تود أن يشاركك في هذا الأمر؟",
];

export const generateFollowUpQuestion = async (originalQuestion: string, answer: string): Promise<string> => {
  if (!process.env.API_KEY) {
    // Mock API call
    return new Promise(resolve => {
        setTimeout(() => {
            // FIX: Corrected typo in variable name from `mockFollow-upQuestions` to `mockFollowUpQuestions`.
            const randomIndex = Math.floor(Math.random() * mockFollowUpQuestions.length);
            resolve(mockFollowUpQuestions[randomIndex]);
        }, 1000);
    });
  }

  try {
    const prompt = `
    You are an empathetic and curious family game assistant.
    The original question in Arabic was: "${originalQuestion}"
    The player's answer in Arabic was: "${answer}"
    Based on their answer, generate one single, gentle, and open-ended follow-up question in Arabic to encourage them to share a little more.
    The question should be short, respectful, and suitable for a family setting.
    Do not add any preamble like "Here is a follow-up question:". Just provide the question text itself.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    const text = response.text.trim();
    return text;
  } catch (error) {
    console.error("Error generating follow-up question:", error);
    return "ما هو أجمل شيء في إجابتك؟"; // Fallback question
  }
};