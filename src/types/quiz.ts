// Core Quiz Data Types
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number; // Index of correct answer (0-based)
}

export interface Subtopic {
  color: string;
  questions: Question[];
}

export interface Chapter {
  color: string;
  subtopics: Record<string, Subtopic>; // subtopicName -> Subtopic
}

export interface ChaptersData {
  [chapterName: string]: Chapter;
}

// Question Loading Types
export interface QuestionLoaderResult {
  success: boolean;
  data?: Chapter;
  error?: string;
}

export interface QuestionLoader {
  loadChapter(chapterName: string): Promise<QuestionLoaderResult>;
  loadSubtopic(chapterName: string, subtopicName: string): Promise<QuestionLoaderResult>;
  preloadChapter(chapterName: string): Promise<void>;
  isLoaded(chapterName: string): boolean;
}

// Answer and Results Types
export interface UserAnswers {
  [questionIndex: number]: number; // questionIndex -> selectedOptionIndex
}

export interface QuizResults {
  correct: number;
  wrong: number;
  unanswered: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
}

// Navigation Types
export type ViewType = 'chapters' | 'subtopics' | 'test';

// Validation Types
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface QuestionValidation extends ValidationResult {
  questionIndex?: number;
}

// Constants and Enums
export const QUESTION_POINTS = {
  CORRECT: 2,
  WRONG: 0,
  UNANSWERED: 0,
} as const;

export const COLORS = {
  PRIMARY: '#3b82f6',
  SUCCESS: '#22c55e',
  WARNING: '#f59e0b',
  DANGER: '#ef4444',
  SECONDARY: '#64748b',
} as const;
