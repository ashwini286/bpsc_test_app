import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider, QuizRouter } from './core';

const App: React.FC = () => {
  return (
    <Router>
      <QuizProvider>
        <QuizRouter />
      </QuizProvider>
    </Router>
  );
};

export default App;
