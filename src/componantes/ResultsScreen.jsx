import { BarChart3 } from "lucide-react";

const ResultsScreen = ({ results, selectedTopic, onBackToTopics, questions = [],
  answers = {},
}) => {

  return (
    <div className="bg-white rounded-3 shadow p-4">
      <div className="text-center mb-4">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
          style={{
            width: "4rem",
            height: "4rem",
            backgroundColor: "#d1fae5" // green-100 equivalent
          }}
        >
          <BarChart3
            style={{ width: "2rem", height: "2rem", color: "#16a34a" }} // green-600
          />
        </div>
        <h2 className="h4 fw-bold text-dark mb-2">Test Completed!</h2>
        <p className="text-secondary">
          Here are your results for {selectedTopic}
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3 text-center p-3 rounded-3" style={{ backgroundColor: "#ecfdf5" }}>
          <div className="fs-4 fw-bold text-success">{results.correct}</div>
          <div className="small text-secondary">Correct</div>
        </div>
        <div className="col-6 col-md-3 text-center p-3 rounded-3" style={{ backgroundColor: "#fef2f2" }}>
          <div className="fs-4 fw-bold text-danger">{results.wrong}</div>
          <div className="small text-secondary">Wrong</div>
        </div>
        <div className="col-6 col-md-3 text-center p-3 rounded-3" style={{ backgroundColor: "#f9fafb" }}>
          <div className="fs-4 fw-bold text-secondary">
            {results.unanswered}
          </div>
          <div className="small text-secondary">Unanswered</div>
        </div>
        <div className="col-6 col-md-3 text-center p-3 rounded-3" style={{ backgroundColor: "#eff6ff" }}>
          <div className="fs-4 fw-bold text-primary">
            {results.percentage}%
          </div>
          <div className="small text-secondary">Score</div>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="fs-3 fw-bold text-dark mb-2">
          {results.totalScore} / {results.maxScore} Points
        </div>
        <div className="progress" style={{ height: "0.75rem" }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{
              width: `${results.percentage}%`,
              transition: "width 0.5s ease"
            }}
            aria-valuenow={results.percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>

    <div className="mt-5">
        <h4 className="fw-bold mb-3">Review Answers</h4>
        {Array.isArray(questions) && questions.length > 0 ? (
          questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === q.correct;
            return (
              <div key={idx} className="mb-4 p-3 border rounded-3">
                <div className="fw-semibold mb-2">{idx + 1}. {q.question}</div>
                <div>
                  {q.options.map((opt, optIdx) => {
                    let optionStyle = {};
                    if (userAnswer === optIdx) {
                      optionStyle.backgroundColor = isCorrect
                        ? "#d1fae5" // green for correct
                        : "#fee2e2"; // red for wrong
                    }
                    if (!isCorrect && optIdx === q.correct) {
                      optionStyle.backgroundColor = "#dbeafe"; // blue for correct answer if user was wrong
                    }
                    return (
                      <div
                        key={optIdx}
                        className="p-2 mb-1 rounded"
                        style={optionStyle}
                      >
                        <span className="me-2">{String.fromCharCode(65 + optIdx)}.</span>
                        {opt}
                        {userAnswer === optIdx && (
                          <strong className="ms-2">
                            (Your answer)
                          </strong>
                        )}
                        {!isCorrect && optIdx === q.correct && (
                          <strong className="ms-2 text-primary">
                            (Correct answer)
                          </strong>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-muted">No questions to review.</div>
        )}
      </div>

  <div className="text-center">
        <button
          onClick={onBackToTopics}
          className="btn btn-primary px-4 py-2 fw-semibold"
        >
          Back to Topics
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;
