import React, { useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
import { useQuiz, useTimer } from '../hooks';
import { useQuizStore } from '../stores';
import TopicsGrid from '../components/TopicsGrid';
import SubtopicsGrid from '../components/SubtopicsGrid';
import TestInterface from '../components/TestInterface';
import chapters from '../components/quizData';

const QuizRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ChaptersView />} />
      <Route path="/chapter/:chapterName" element={<SubtopicsView />} />
      <Route path="/test/:chapterName/:topicName" element={<TestView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

// Chapters View Component
const ChaptersView: React.FC = () => {
  const navigate = useNavigate();

  // Prepare topics data for chapters view
  const chaptersData = Object.keys(chapters).reduce((acc, chapterName) => {
    const chapterData = (chapters as any)[chapterName];
    acc[chapterName] = {
      color: chapterData.color,
      questions: []
    };
    return acc;
  }, {} as Record<string, { color: string; questions: any[] }>);

  const handleGoToSubtopics = useCallback((chapterName: string) => {
    navigate(`/chapter/${encodeURIComponent(chapterName)}`);
  }, [navigate]);

  return (
    <TopicsGrid
      topics={chaptersData}
      onStartTest={handleGoToSubtopics}
    />
  );
};

// Subtopics View Component
const SubtopicsView: React.FC = () => {
  const navigate = useNavigate();
  const { chapterName } = useParams<{ chapterName: string }>();
  const decodedChapterName = chapterName ? decodeURIComponent(chapterName) : '';

  const handleStartTest = useCallback((topicName: string) => {
    navigate(`/test/${encodeURIComponent(decodedChapterName)}/${encodeURIComponent(topicName)}`);
  }, [navigate, decodedChapterName]);

  const handleBackToChapters = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const chapterData = (chapters as any)[decodedChapterName];

  // If chapter doesn't exist, redirect to home
  if (!chapterData) {
    return <Navigate to="/" replace />;
  }

  return (
    <SubtopicsGrid
      chapterName={decodedChapterName}
      subtopics={chapterData.subtopics}
      onStartTest={handleStartTest}
      onBack={handleBackToChapters}
    />
  );
};

// Test View Component
const TestView: React.FC = () => {
  const navigate = useNavigate();
  const { chapterName, topicName } = useParams<{ chapterName: string; topicName: string }>();
  const decodedChapterName = chapterName ? decodeURIComponent(chapterName) : '';
  const decodedTopicName = topicName ? decodeURIComponent(topicName) : '';

  const {
    questions,
    currentQuestion,
    answers,
    isPaused,
    testCompleted,
    results,
    setPaused,
    setQuestions,
    resetQuiz
  } = useQuizStore();

  const { start, pause, reset: resetTimer, timeElapsed: timerElapsed } = useTimer();
  const quiz = useQuiz();

  // Handle pause/resume
  const handlePause = useCallback(() => {
    if (isPaused) {
      start();
    } else {
      pause();
    }
    setPaused(!isPaused);
  }, [isPaused, start, pause, setPaused]);

  // Handle back to subtopics
  const handleBackToSubtopics = useCallback(() => {
    resetQuiz();
    resetTimer();
    navigate(`/chapter/${encodeURIComponent(decodedChapterName)}`);
  }, [resetQuiz, resetTimer, navigate, decodedChapterName]);

  // Load questions when component mounts or when chapter/topic changes
  useEffect(() => {
    const chapterData = (chapters as any)[decodedChapterName];
    if (chapterData && chapterData.subtopics[decodedTopicName]) {
      const questionsData = chapterData.subtopics[decodedTopicName].questions;
      setQuestions(questionsData);
      // Start timer when test begins
      start();
    } else {
      // Invalid chapter/topic combination, redirect to home
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [decodedChapterName, decodedTopicName]); // Only depend on the route parameters

  // If no valid chapter/topic, redirect
  const chapterData = (chapters as any)[decodedChapterName];
  if (!chapterData || !chapterData.subtopics[decodedTopicName]) {
    return <Navigate to="/" replace />;
  }

  // Show loading while questions are being loaded
  if (!questions || questions.length === 0) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="text-dark">Loading Questions...</h4>
          <p className="text-muted">Please wait while we prepare your test</p>
        </div>
      </div>
    );
  }

  return (
    <TestInterface
      selectedTopic={decodedTopicName}
      questions={questions}
      currentQuestion={currentQuestion}
      answers={answers}
      isPaused={isPaused}
      testCompleted={testCompleted}
      results={results}
      timeElapsed={timerElapsed}
      onPrev={quiz.previousQuestion}
      onAnswerSelect={(index: number) => quiz.submitAnswer(index)}
      onNextQuestion={quiz.nextQuestion}
      onSkip={quiz.nextQuestion}
      onClearResponse={quiz.clearCurrentAnswer}
      onPause={handlePause}
      onEndTest={quiz.endQuiz}
      onBackToTopics={handleBackToSubtopics}
    />
  );
};

export default QuizRouter;
