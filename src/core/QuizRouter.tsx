import React, { useCallback, useEffect } from 'react';
import { useNavigation, useQuiz, useTimer } from '../hooks';
import { useQuizStore } from '../stores';
import TopicsGrid from '../components/TopicsGrid';
import SubtopicsGrid from '../components/SubtopicsGrid';
import TestInterface from '../components/TestInterface';
import chapters from '../components/quizData';

const QuizRouter: React.FC = () => {
  const { currentView, goToSubtopics, goToTest, goToChapters } = useNavigation();
  const { 
    selectedChapter, 
    selectedTopic,
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

  // Load questions when test starts
  useEffect(() => {
    if (currentView === 'test' && selectedChapter && selectedTopic) {
      const chapterData = (chapters as any)[selectedChapter];
      if (chapterData && chapterData.subtopics[selectedTopic]) {
        const questionsData = chapterData.subtopics[selectedTopic].questions;
        setQuestions(questionsData);
      }
    }
  }, [currentView, selectedChapter, selectedTopic, setQuestions]);

  // Handle navigation to subtopics
  const handleGoToSubtopics = useCallback((chapterName: string) => {
    goToSubtopics(chapterName);
  }, [goToSubtopics]);

  // Handle starting a test
  const handleStartTest = useCallback((topicName: string) => {
    goToTest(topicName);
    // Start timer when test begins
    start();
  }, [goToTest, start]);

  // Handle pause/resume
  const handlePause = useCallback(() => {
    if (isPaused) {
      start();
    } else {
      pause();
    }
    setPaused(!isPaused);
  }, [isPaused, start, pause, setPaused]);

  // Handle back to chapters
  const handleBackToChapters = useCallback(() => {
    resetQuiz();
    resetTimer();
    goToChapters();
  }, [resetQuiz, resetTimer, goToChapters]);

  // Handle back to subtopics
  const handleBackToSubtopics = useCallback(() => {
    resetQuiz();
    resetTimer();
    goToSubtopics(selectedChapter);
  }, [resetQuiz, resetTimer, goToSubtopics, selectedChapter]);

  // Prepare topics data for chapters view
  const chaptersData = Object.keys(chapters).reduce((acc, chapterName) => {
    const chapterData = (chapters as any)[chapterName];
    acc[chapterName] = {
      color: chapterData.color,
      questions: []
    };
    return acc;
  }, {} as Record<string, { color: string; questions: any[] }>);

  // Render appropriate view based on current state
  if (currentView === 'chapters') {
    return (
      <TopicsGrid
        topics={chaptersData}
        onStartTest={handleGoToSubtopics}
      />
    );
  }

  if (currentView === 'subtopics') {
    const chapterData = (chapters as any)[selectedChapter];
    if (!chapterData) {
      return <div>Chapter not found</div>;
    }

    return (
      <SubtopicsGrid
        chapterName={selectedChapter}
        subtopics={chapterData.subtopics}
        onStartTest={handleStartTest}
        onBack={handleBackToChapters}
      />
    );
  }

  if (currentView === 'test') {
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
        selectedTopic={selectedTopic}
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
  }

  return null;
};

export default QuizRouter;
