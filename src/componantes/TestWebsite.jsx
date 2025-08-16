import React, { useState, useEffect } from 'react';
import TopicsGrid from './TopicsGrid';       // Main Chapters Grid
import SubtopicsGrid from './SubtopicsGrid'; // New Subtopics Grid
import TestInterface from './TestInterface';
import chapters from './quizData';

const TestWebsite = () => {
  const [currentView, setCurrentView] = useState('chapters'); // chapters, subtopics, test
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState(null);

  // Timer logic
  useEffect(() => {
    let interval;
    if (currentView === 'test' && !isPaused && !testCompleted) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentView, isPaused, testCompleted]);

  // Navigate to subtopics
  const goToSubtopics = (chapterName) => {
    setSelectedChapter(chapterName);
    setCurrentView('subtopics');
  };

  // Start test for selected topic
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
    const questions = chapters[selectedChapter].subtopics[selectedTopic].questions;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      endTest();
    }
  };

  const endTest = () => {
    const questions = chapters[selectedChapter].subtopics[selectedTopic].questions;
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

  // Navigation back to chapters
  const goBackToChapters = () => {
    setCurrentView('chapters');
    setSelectedChapter('');
    setSelectedTopic('');
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setIsPaused(false);
    setTestCompleted(false);
    setResults(null);
  };

  // Navigation back to subtopics
  const goBackToSubtopics = () => {
    setCurrentView('subtopics');
    setSelectedTopic('');
    setCurrentQuestion(0);
    setAnswers({});
    setTimeElapsed(0);
    setIsPaused(false);
    setTestCompleted(false);
    setResults(null);
  };

  // Render views
  if (currentView === 'chapters') {
    return (
      <TopicsGrid
        topics={Object.keys(chapters).reduce((acc, chapterName) => {
          const chapterData = chapters[chapterName]; // ✅ get chapter object
          acc[chapterName] = {
            color: chapterData.color,  // ✅ use correct color
            questions: []
          };
          return acc;
        }, {})}
        onStartTest={goToSubtopics}
      />

    );
  }

  if (currentView === 'subtopics') {
    return (
      <SubtopicsGrid
        chapterName={selectedChapter}
        subtopics={chapters[selectedChapter].subtopics}
        onStartTest={startTest}
        onBack={goBackToChapters}
      />
    );
  }

  if (currentView === 'test') {
    return (
      <TestInterface
        selectedTopic={selectedTopic}
        questions={chapters[selectedChapter].subtopics[selectedTopic].questions}
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
        onBackToTopics={goBackToSubtopics}
      />
    );
  }

  return null;
};

export default TestWebsite;
