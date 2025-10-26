export interface Member {
  id: number;
  name: string;
  avatar: number; // Changed from string to number to store avatar index
  age: number;
}

export interface Question {
  id: number;
  text: string;
  category: string;
  depth: 1 | 2 | 3;
  age_min: number;
}

export enum GameState {
  SPLASH,
  SETUP,
  LOBBY,
  PLAYER_SELECTION,
  GAME,
  SUMMARY,
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
}

export enum GameMode {
  CLASSIC = "كلاسيكي",
  COMPASSION = "نمط الحنان",
  LAUGHTER = "نمط الضحك",
}