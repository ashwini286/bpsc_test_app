import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Question } from '../types/quiz';

// Quiz Store Types
export interface QuizState {
  // Navigation state
  currentView: 'chapters' | 'subtopics' | 'test';
  selectedChapter: string;
  selectedTopic: string;

  // Test state
  currentQuestion: number;
  answers: Record<number, number>;
  questions: Question[] | null;
  isPaused: boolean;
  testCompleted: boolean;
  results: QuizResults | null;
  timeElapsed: number;

  // Actions
  setCurrentView: (view: 'chapters' | 'subtopics' | 'test') => void;
  setSelectedChapter: (chapter: string) => void;
  setSelectedTopic: (topic: string) => void;
  setCurrentQuestion: (question: number) => void;
  setAnswer: (questionIndex: number, answerIndex: number) => void;
  clearAnswer: (questionIndex: number) => void;
  setQuestions: (questions: Question[] | null) => void;
  setAnswers: (answers: Record<number, number>) => void;
  setPaused: (paused: boolean) => void;
  setTimeElapsed: (time: number) => void;
  setTestCompleted: (completed: boolean) => void;
  setResults: (results: QuizResults | null) => void;

  // Reset functions
  resetQuiz: () => void;
  resetToChapters: () => void;
  resetToSubtopics: () => void;
}

export interface QuizResults {
  correct: number;
  wrong: number;
  unanswered: number;
  totalScore: number;
  maxScore: number;
  percentage: number;
}

// Initial state
const initialState = {
  currentView: 'chapters' as const,
  selectedChapter: '',
  selectedTopic: '',
  currentQuestion: 0,
  answers: {},
  questions: null,
  isPaused: false,
  testCompleted: false,
  results: null,
  timeElapsed: 0,
};

export const useQuizStore = create<QuizState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      setCurrentView: (view) => set({ currentView: view }, false, 'setCurrentView'),

      setSelectedChapter: (chapter) => set({ selectedChapter: chapter }, false, 'setSelectedChapter'),

      setSelectedTopic: (topic) => set({ selectedTopic: topic }, false, 'setSelectedTopic'),

      setCurrentQuestion: (question) => set({ currentQuestion: question }, false, 'setCurrentQuestion'),

      setAnswer: (questionIndex, answerIndex) =>
        set(
          (state) => ({
            answers: { ...state.answers, [questionIndex]: answerIndex }
          }),
          false,
          'setAnswer'
        ),

      clearAnswer: (questionIndex) =>
        set(
          (state) => {
            const newAnswers = { ...state.answers };
            delete newAnswers[questionIndex];
            return { answers: newAnswers };
          },
          false,
          'clearAnswer'
        ),

      setQuestions: (questions) => set({ questions }, false, 'setQuestions'),

      setAnswers: (answers) => set({ answers }, false, 'setAnswers'),

      setPaused: (paused) => set({ isPaused: paused }, false, 'setPaused'),

      setTimeElapsed: (time) => set({ timeElapsed: time }, false, 'setTimeElapsed'),

      setTestCompleted: (completed) => set({ testCompleted: completed }, false, 'setTestCompleted'),

      setResults: (results) => set({ results }, false, 'setResults'),

      resetQuiz: () =>
        set({
          currentQuestion: 0,
          answers: {},
          questions: null,
          isPaused: false,
          testCompleted: false,
          results: null,
          timeElapsed: 0,
        }, false, 'resetQuiz'),

      resetToChapters: () =>
        set({
          currentView: 'chapters',
          selectedChapter: '',
          selectedTopic: '',
          currentQuestion: 0,
          answers: {},
          questions: null,
          isPaused: false,
          testCompleted: false,
          results: null,
          timeElapsed: 0,
        }, false, 'resetToChapters'),

      resetToSubtopics: () =>
        set({
          currentView: 'subtopics',
          selectedTopic: '',
          currentQuestion: 0,
          answers: {},
          questions: null,
          isPaused: false,
          testCompleted: false,
          results: null,
          timeElapsed: 0,
        }, false, 'resetToSubtopics'),
    }),
    {
      name: 'quiz-store',
    }
  )
);
