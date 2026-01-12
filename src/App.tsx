import React from 'react';
import { QuizProvider, QuizRouter } from './core';

const App: React.FC = () => {
  return (
    <QuizProvider>
      <QuizRouter />
    </QuizProvider>
  );
};

export default App;
