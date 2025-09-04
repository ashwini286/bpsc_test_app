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
  onBackToTopics,
  onClearResponse
}) => {
  const currentQ = questions[currentQuestion];

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
