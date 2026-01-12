import React from "react";
import TestHeader from "./TestHeader";
import QuestionCard from "./QuestionCard";
import PauseScreen from "./PauseScreen";
import ResultsScreen from "./ResultsScreen";

const TestInterface = ({
  selectedTopic,
  questions,
  currentQuestion,
  answers,
  isPaused,
  testCompleted,
  results,
  timeElapsed,
  onAnswerSelect,
  onNextQuestion,
  onPause,
  onEndTest,
  onSkip,
  onPrev,
  onBackToTopics,
  onClearResponse
}) => {
  const currentQ = questions[currentQuestion];

  // Show loading if questions aren't loaded yet
  if (!questions || questions.length === 0) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Show error if current question is not found
  if (!currentQ) {
    return (
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="text-center">
          <p className="text-danger">Error: Question not found</p>
          <button onClick={onBackToTopics} className="btn btn-primary mt-3">
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <TestHeader
        selectedTopic={selectedTopic}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        timeElapsed={timeElapsed}
        isPaused={isPaused}
        onPause={onPause}
        onEndTest={onEndTest}
      />

      {/* Main Content */}
      <div className="container py-4">
        {isPaused && !testCompleted ? (
          <PauseScreen />
        ) : testCompleted && results ? (
          <ResultsScreen
            results={results}
            selectedTopic={selectedTopic}
            onBackToTopics={onBackToTopics}
            questions={questions}
            answers={answers}
          />
        ) : (
          <QuestionCard
            question={currentQ}
            selectedAnswer={answers[currentQuestion]}
            onAnswerSelect={onAnswerSelect}
            onNext={onNextQuestion}
            onSkip={onSkip}
            onPrev ={onPrev}
            onBackToTopics={onBackToTopics}
            onClearResponse={onClearResponse}
            isLastQuestion={currentQuestion === questions.length - 1}
          />
        )}
      </div>
    </div>
  );
};

export default TestInterface;
