const QuestionCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onBackToTopics,
  isLastQuestion,
  onSkip,  
  onClearResponse
}) => {
  console.log("QuestionCard rendered with question:", question);
  console.log("QuestionCard rendered with selectedAnswer:", selectedAnswer);
  
  return (
     <div className="bg-white rounded-3 shadow p-4">
      <div className="mb-4">
        <h3 className="h5 fw-semibold text-dark mb-4">{question.question}</h3>

        <div className="d-flex flex-column gap-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-100 text-start p-3 rounded-3 border border-2 ${
                  isSelected
                    ? "border-primary bg-primary-subtle text-primary fw-medium"
                    : "border-secondary-subtle bg-light"
                }`}
              >
                <div className="d-flex align-items-center">
                  <div
                    className={`rounded-circle border border-2 me-3 d-flex align-items-center justify-content-center`}
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: isSelected ? "#0d6efd" : "transparent",
                      borderColor: isSelected ? "#0d6efd" : "#ccc"
                    }}
                  >
                    {isSelected && (
                      <div
                        className="rounded-circle"
                        style={{
                          width: "0.5rem",
                          height: "0.5rem",
                          backgroundColor: "white"
                        }}
                      ></div>
                    )}
                  </div>
                  <span className="fw-medium">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={onBackToTopics}
          className="btn btn-secondary px-4 py-2 fw-semibold"
        >
          Back to Topics
        </button>

        <div className="d-flex gap-2">
          {/* ✅ Clear Response Button */}
          <button
            onClick={onClearResponse}
            disabled={selectedAnswer === undefined}
            className="btn btn-warning px-4 py-2 fw-semibold"
          >
            Clear Response
          </button>

          {/* ✅ Skip button */}
          <button
            onClick={onSkip}
            className="btn btn-outline-secondary px-4 py-2 fw-semibold"
          >
            Skip
          </button>

          <button
            onClick={onNext}
            disabled={selectedAnswer === undefined}
            className={`btn px-4 py-2 fw-semibold ${
              selectedAnswer !== undefined
                ? "btn-primary"
                : "btn-secondary disabled"
            }`}
          >
            {isLastQuestion ? "Finish Test" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;
