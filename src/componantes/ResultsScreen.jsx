import { BarChart3 } from "lucide-react";

const ResultsScreen = ({ results, selectedTopic, onBackToTopics }) => {
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
