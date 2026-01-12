import React, { useEffect } from 'react';
import { useNavigation } from '../hooks';
import { useQuizStore } from '../stores';

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  // Auto-scroll to top on navigation changes
  const { currentView } = useNavigation();
  const { currentQuestion } = useQuizStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, currentQuestion]);

  return <>{children}</>;
};
