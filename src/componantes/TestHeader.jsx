import { Clock, Play, Pause, Square } from "lucide-react";

const TestHeader = ({
  selectedTopic,
  currentQuestion,
  totalQuestions,
  timeElapsed,
  isPaused,
  onPause,
  onEndTest
}) => {
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="bg-white border-bottom shadow-sm">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div>
            <h2 className="h5 fw-semibold text-dark mb-1">{selectedTopic}</h2>
            <p className="small text-secondary mb-0">
              Question {currentQuestion + 1} of {totalQuestions}
            </p>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-4">
            {/* Timer */}
            <div className="d-flex align-items-center text-secondary gap-2">
              <Clock style={{ width: "1rem", height: "1rem" }} />
              <span>{formatTime(timeElapsed)}</span>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <button
                onClick={onPause}
                className={`btn d-flex align-items-center gap-2 fw-medium ${
                  isPaused ? "btn-success" : "btn-warning"
                }`}
              >
                {isPaused ? (
                  <Play style={{ width: "1rem", height: "1rem" }} />
                ) : (
                  <Pause style={{ width: "1rem", height: "1rem" }} />
                )}
                {isPaused ? "Resume" : "Pause"}
              </button>
              <button
                onClick={onEndTest}
                className="btn btn-danger d-flex align-items-center gap-2 fw-medium"
              >
                <Square style={{ width: "1rem", height: "1rem" }} />
                End Test
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="progress" style={{ height: "0.5rem" }}>
            <div
              className="progress-bar bg-primary"
              style={{
                width: `${progress}%`,
                transition: "width 0.3s ease"
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHeader;
