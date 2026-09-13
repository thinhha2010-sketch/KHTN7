export type Discipline = 'all' | 'method' | 'chemistry' | 'physics' | 'biology';

export type GameModeId = 
  | 'speed_arena'
  | 'challenge_ladder'
  | 'adventure'
  | 'visual_quiz'
  | 'match_pairs'
  | 'true_false'
  | 'crossword'
  | 'lab_challenge'
  | 'boss_scientist'
  | 'team_battle';

export type GameModeType = GameModeId;

export type MainView = 'map' | 'games' | 'battle' | 'lab' | 'quiz_bank' | 'teacher' | 'profile';

export interface ExerciseItem {
  id: string;
  source: 'SGK' | 'SBT';
  code: string; // e.g. "Bài 1.1", "Bài 8.1"
  question: string;
  type: 'multiple_choice' | 'essay' | 'fill_in' | 'true_false';
  options?: string[];
  correctAnswer?: string | string[];
  explanation: string;
  imageHint?: string;
}

export interface Lesson {
  id: number;
  chapterId: number;
  lessonNumber: number;
  title: string;
  pageSGK: number;
  pageSBT: number;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
  summary: string[];
  keyFormulas?: { label: string; formula: string; note: string }[];
  coreTakeaways: string[]; // "Em đã học"
  canApply: string[]; // "Em có thể"
  exercises: ExerciseItem[];
  interactiveSimType?: 'atom' | 'formula' | 'speed' | 'sound' | 'light' | 'magnet' | 'biology';
}

export interface Chapter {
  id: number;
  romanNumber: string;
  title: string;
  description: string;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
  color: string;
  badge: string;
  iconName: string;
  lessons: Lesson[];
  requiredScore?: number;
  stationName?: string;
  subtitle?: string;
}

export interface GlossaryTerm {
  term: string;
  page: number;
  definition: string;
  discipline: 'chemistry' | 'physics' | 'biology' | 'method';
  example?: string;
}

export interface Flashcard {
  id: string;
  chapterId: number;
  lessonId: number;
  front: string;
  back: string;
  category: string;
  hint?: string;
}

export interface QuizQuestion {
  id: string;
  chapterId: number;
  lessonId: number;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  imageHint?: string;
  bloomLevel?: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng';
}

export interface StudyNote {
  id: string;
  lessonId: number;
  title: string;
  content: string;
  createdAt: string;
  tags: string[];
}

export interface MatchPairItem {
  id: string;
  chapterId: number;
  leftText: string;
  rightText: string;
  category: string;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
}

export interface VisualQuizItem {
  id: string;
  chapterId: number;
  title: string;
  imageSvgType: 'atom_structure' | 'photosynthesis' | 'speed_graph' | 'reflection_ray' | 'magnetic_lines' | 'sound_waveform' | 'stomata_cell' | 'plant_growth';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
}

export interface CrosswordClue {
  number: number;
  answer: string;
  clue: string;
  chapterId: number;
  direction: 'across' | 'down';
  discipline: string;
}

export interface ScientistBoss {
  id: string;
  name: string;
  title: string;
  avatar: string;
  era: string;
  quote: string;
  field: string;
  dialogueIntro: string;
  dialogueWin: string;
  dialogueLose: string;
  questions: QuizQuestion[];
}

export interface AdventureMission {
  id: string;
  title: string;
  chapterId: number;
  location: string;
  story: string;
  objective: string;
  discipline: 'method' | 'chemistry' | 'physics' | 'biology';
  rewardExp: number;
  steps: {
    prompt: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface PlayerStats {
  exp: number;
  level: number;
  rankTitle: string;
  stars: number;
  streak: number;
  totalAnswered: number;
  totalCorrect: number;
  unlockedChapters: number[];
  chapterStars: Record<number, number>; // chapterId -> stars (0-3)
  completedGameModes: Record<string, number>; // gameId -> high score
  badges: string[];
  recentActivity: {
    timestamp: number;
    title: string;
    score: number;
    type: string;
  }[];
}

export interface BadgeInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'accuracy' | 'mastery' | 'streak' | 'lab';
}

export interface TeamBattleState {
  teams: {
    id: string;
    name: string;
    color: string;
    score: number;
    members: string[];
    buzzedAt?: number;
  }[];
  currentRound: number;
  totalRounds: number;
  currentQuestionIndex: number;
  questionList: QuizQuestion[];
  state: 'setup' | 'playing' | 'buzzer_active' | 'evaluating' | 'round_result' | 'game_over';
  timePerQuestion: number;
  buzzedTeamId: string | null;
}

export interface TestPaperConfig {
  title: string;
  grade: string;
  timeMinutes: number;
  selectedChapters: number[];
  selectedDisciplines: Discipline[];
  difficultyDistribution: {
    easy: number;
    medium: number;
    hard: number;
  };
  totalQuestions: number;
}

