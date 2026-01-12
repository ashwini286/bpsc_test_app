import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuizStore } from '../stores';

interface QuizProviderProps {
  children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const location = useLocation();
  const { currentQuestion } = useQuizStore();

  // Auto-scroll to top on route changes and question changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, currentQuestion]);

  return <>{children}</>;
};
