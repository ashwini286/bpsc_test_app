import React, { useState, useEffect } from 'react';
import TopicsGrid from './TopicsGrid';
import TestInterface from './TestInterface';
import Dbms from './questions/dbms';

const TestWebsite = () => {
  // Generate dummy questions for each topic
  function generateQuestions(topic, count) {
    const questions = [];
    const questionTemplates = [
      {
        question: `What is the primary concept in ${topic}?`,
        options: ['Concept A', 'Concept B', 'Concept C', 'Concept D'],
        correct: 0
      },
      {
        question: `Which method is commonly used in ${topic}?`,
        options: ['Method 1', 'Method 2', 'Method 3', 'Method 4'],
        correct: 1
      },
      {
        question: `How do you implement basic functionality in ${topic}?`,
        options: ['Approach A', 'Approach B', 'Approach C', 'Approach D'],
        correct: 2
      },
      {
        question: `What is the best practice for ${topic}?`,
        options: ['Practice 1', 'Practice 2', 'Practice 3', 'Practice 4'],
        correct: 3
      }
    ];

    for (let i = 0; i < count; i++) {
      const template = questionTemplates[i % questionTemplates.length];
      questions.push({
        id: i + 1,
        question: `${i + 1}. ${template.question}`,
        options: template.options,
        correct: template.correct
      });
    }
    return questions;
  }

  // Sample topics with dummy questions
 const topics = {
  'JavaScript Fundamentals': {
    color: '#0d6efd', // Bootstrap Primary
    questions: generateQuestions('JavaScript', 500)
  },
  'React Development': {
    color: '#198754', // Bootstrap Success
    questions: generateQuestions('React', 500)
  },
  'Python Programming': {
    color: '#ffc107', // Bootstrap Warning
    questions: generateQuestions('Python', 500)
  },
  'Data Structures': {
    color: '#0dcaf0', // Bootstrap Info
    questions: generateQuestions('Data Structures', 500)
  },
  'Web Development': {
    color: '#dc3545', // Bootstrap Danger
    questions: generateQuestions('Web Development', 500)
  },
  'Database Management': {
    color: '#6c757d', // Bootstrap Secondary
    questions: Dbms
  }
};


  const [currentView, setCurrentView] = useState('topics');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState(null);

  // Timer effect
  useEffect(() => {
    let interval;
    if (currentView === 'test' && !isPaused && !testCompleted) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentView, isPaused, testCompleted]);

  const startTest = (topicName) => {
    setSelectedTopic(topicName);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setIsPaused(false);
    setTestCompleted(false);
    setResults(null);
    setCurrentView('test');
  };

  const handleAnswer = (optionIndex) => {
    if (!isPaused && !testCompleted) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion]: optionIndex
      }));
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < topics[selectedTopic].questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      endTest();
    }
  };

  const endTest = () => {
    const questions = topics[selectedTopic].questions;
    let correctCount = 0;
    let wrongCount = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correctCount++;
      } else if (answers[index] !== undefined) {
        wrongCount++;
      }
    });

    const totalScore = correctCount * 2;
    const unanswered = questions.length - correctCount - wrongCount;

    setResults({
      correct: correctCount,
      wrong: wrongCount,
      unanswered: unanswered,
      totalScore: totalScore,
      maxScore: questions.length * 2,
      percentage: ((correctCount / questions.length) * 100).toFixed(1)
    });

    setTestCompleted(true);
  };

  const pauseTest = () => {
    setIsPaused(!isPaused);
  };

  const goBackToTopics = () => {
    setCurrentView('topics');
    setSelectedTopic('');
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setIsPaused(false);
    setTestCompleted(false);
    setResults(null);
  };

  if (currentView === 'topics') {
    return (
      <TopicsGrid
        topics={topics}
        onStartTest={startTest}
      />
    );
  }

  if (currentView === 'test') {
    return (
      <TestInterface
        selectedTopic={selectedTopic}
        questions={topics[selectedTopic].questions}
        currentQuestion={currentQuestion}
        answers={answers}
        isPaused={isPaused}
        testCompleted={testCompleted}
        results={results}
        timeElapsed={timeElapsed}
        onAnswerSelect={handleAnswer}
        onNextQuestion={nextQuestion}
        onPause={pauseTest}
        onEndTest={endTest}
        onBackToTopics={goBackToTopics}
      />
    );
  }

  return null;
};

export default TestWebsite;