import { useCallback, useMemo } from 'react';
import { useQuizStore } from '../stores';
import { QuizResults, Question, QUESTION_POINTS } from '../types/quiz';

/**
 * Custom hook for quiz operations
 * Provides methods for answer management, scoring, and quiz state
 */
export function useQuiz() {
  const {
    answers,
    currentQuestion,
    selectedChapter,
    selectedTopic,
    testCompleted,
    questions,
    setAnswer,
    clearAnswer,
    setCurrentQuestion,
    setTestCompleted,
    setResults,
    resetQuiz,
  } = useQuizStore();

  // Get current question data
  const currentQuestionData = useMemo(() => {
    if (!questions || !questions[currentQuestion]) return null;
    return questions[currentQuestion];
  }, [questions, currentQuestion]);

  // Get selected answer for current question
  const currentAnswer = useMemo(() => {
    return answers[currentQuestion] ?? null;
  }, [answers, currentQuestion]);

  // Check if current question has an answer
  const hasCurrentAnswer = useMemo(() => {
    return currentAnswer !== null;
  }, [currentAnswer]);

  // Calculate results
  const calculateResults = useCallback((): QuizResults => {
    if (!questions) {
      return {
        correct: 0,
        wrong: 0,
        unanswered: 0,
        totalScore: 0,
        maxScore: 0,
        percentage: 0,
      };
    }

    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((question: Question, index: number) => {
      const userAnswer = answers[index];

      if (userAnswer === undefined) {
        unanswered++;
      } else if (userAnswer === question.correct) {
        correct++;
      } else {
        wrong++;
      }
    });

    const totalScore = correct * QUESTION_POINTS.CORRECT;
    const maxScore = questions.length * QUESTION_POINTS.CORRECT;
    const percentage = questions.length > 0 ? ((correct / questions.length) * 100) : 0;

    return {
      correct,
      wrong,
      unanswered,
      totalScore,
      maxScore,
      percentage: Number(percentage.toFixed(1)),
    };
  }, [questions, answers]);

  // Submit answer for current question
  const submitAnswer = useCallback((answerIndex: number) => {
    if (testCompleted || answerIndex < 0) return;
    setAnswer(currentQuestion, answerIndex);
  }, [currentQuestion, testCompleted, setAnswer]);

  // Clear answer for current question
  const clearCurrentAnswer = useCallback(() => {
    clearAnswer(currentQuestion);
  }, [currentQuestion, clearAnswer]);

  // End quiz and calculate results
  const endQuiz = useCallback(() => {
    if (testCompleted) return;

    const results = calculateResults();
    setResults(results);
    setTestCompleted(true);
  }, [testCompleted, calculateResults, setResults, setTestCompleted]);

  // Navigate to next question
  const nextQuestion = useCallback(() => {
    if (!questions || currentQuestion >= questions.length - 1) {
      endQuiz();
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
  }, [questions, currentQuestion, setCurrentQuestion, endQuiz]);

  // Navigate to previous question
  const previousQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion, setCurrentQuestion]);

  // Check if can go to next question
  const canGoNext = useMemo(() => {
    return !testCompleted && questions && currentQuestion < questions.length - 1;
  }, [testCompleted, questions, currentQuestion]);

  // Check if can go to previous question
  const canGoPrevious = useMemo(() => {
    return currentQuestion > 0 && !testCompleted;
  }, [currentQuestion, testCompleted]);

  // Check if can end quiz
  const canEndQuiz = useMemo(() => {
    return !testCompleted && questions && questions.length > 0;
  }, [testCompleted, questions]);

  // Reset quiz state
  const resetQuizState = useCallback(() => {
    resetQuiz();
  }, [resetQuiz]);

  // Get question progress
  const progress = useMemo(() => {
    if (!questions) return { current: 0, total: 0, percentage: 0 };

    return {
      current: currentQuestion + 1,
      total: questions.length,
      percentage: questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0,
    };
  }, [currentQuestion, questions]);

  // Get answer statistics
  const answerStats = useMemo(() => {
    if (!questions) return { answered: 0, unanswered: 0 };

    const answered = Object.keys(answers).length;
    const unanswered = questions.length - answered;

    return { answered, unanswered };
  }, [questions, answers]);

  return {
    // Current question state
    currentQuestionData,
    currentAnswer,
    hasCurrentAnswer,
    questionIndex: currentQuestion,

    // Navigation
    nextQuestion,
    previousQuestion,
    canGoNext,
    canGoPrevious,

    // Answer management
    submitAnswer,
    clearCurrentAnswer,

    // Quiz control
    endQuiz,
    canEndQuiz,
    resetQuizState,

    // Progress and stats
    progress,
    answerStats,

    // Quiz metadata
    selectedChapter,
    selectedTopic,
    isCompleted: testCompleted,
    totalQuestions: questions?.length || 0,
  };
}
