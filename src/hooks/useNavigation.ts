import { useCallback } from 'react';
import { useNavigationStore, useQuizStore } from '../stores';

/**
 * Custom hook for navigation management
 * Provides navigation state and transition logic
 */
export function useNavigation() {
  const {
    currentView,
    navigationHistory,
    navigateTo,
    goBack,
    canGoBack,
    resetNavigation,
  } = useNavigationStore();

  const {
    setSelectedChapter,
    setSelectedTopic,
    setCurrentQuestion,
    setAnswers,
    setTimeElapsed,
    setPaused,
    setTestCompleted,
    setResults,
  } = useQuizStore();

  // Navigate to chapters view
  const goToChapters = useCallback(() => {
    navigateTo('chapters');
  }, [navigateTo]);

  // Navigate to subtopics view
  const goToSubtopics = useCallback((chapterName: string) => {
    setSelectedChapter(chapterName);
    navigateTo('subtopics');
  }, [setSelectedChapter, navigateTo]);

  // Navigate to test view
  const goToTest = useCallback((topicName: string) => {
    setSelectedTopic(topicName);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setPaused(false);
    setTestCompleted(false);
    setResults(null);
    navigateTo('test');
  }, [
    setSelectedTopic,
    setCurrentQuestion,
    setAnswers,
    setTimeElapsed,
    setPaused,
    setTestCompleted,
    setResults,
    navigateTo,
  ]);

  // Go back to previous view
  const goBackView = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [goBack, canGoBack]);

  // Reset all navigation and quiz state
  const resetAll = useCallback(() => {
    resetNavigation();
    setSelectedChapter('');
    setSelectedTopic('');
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setPaused(false);
    setTestCompleted(false);
    setResults(null);
  }, [
    resetNavigation,
    setSelectedChapter,
    setSelectedTopic,
    setCurrentQuestion,
    setAnswers,
    setTimeElapsed,
    setPaused,
    setTestCompleted,
    setResults,
  ]);

  // Navigation guards
  const canNavigateToTest = useCallback((topicName: string) => {
    return topicName && topicName.trim().length > 0;
  }, []);

  const canNavigateToSubtopics = useCallback((chapterName: string) => {
    return chapterName && chapterName.trim().length > 0;
  }, []);

  // Get navigation context
  const navigationContext = {
    currentView,
    previousView: navigationHistory.length > 1 ? navigationHistory[navigationHistory.length - 2] : null,
    canGoBack: canGoBack(),
    historyLength: navigationHistory.length,
  };

  // View-specific helpers
  const isOnChaptersView = currentView === 'chapters';
  const isOnSubtopicsView = currentView === 'subtopics';
  const isOnTestView = currentView === 'test';

  return {
    // Current state
    currentView,
    navigationContext,

    // View checks
    isOnChaptersView,
    isOnSubtopicsView,
    isOnTestView,

    // Navigation actions
    goToChapters,
    goToSubtopics,
    goToTest,
    goBack: goBackView,

    // Guards
    canNavigateToTest,
    canNavigateToSubtopics,
    canGoBack: canGoBack(),

    // Reset
    resetAll,
  };
}
