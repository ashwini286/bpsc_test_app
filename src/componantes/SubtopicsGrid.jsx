
import 'bootstrap/dist/css/bootstrap.min.css';

const SubtopicsGrid = ({ chapterName, subtopics, onStartTest, onBack }) => {

    return (
        <div className="container py-5">
            {/* Back Button */}
            <button
                onClick={onBack}
                className="btn btn-secondary mb-4 fw-semibold"
            >
                ← Back to Chapters
            </button>

            {/* Page Header */}
            <div className="text-center mb-5">
                <h1
                    className="fw-bold mb-3"
                    style={{
                        fontSize: "2.3rem",
                        color: "#1f2937",
                        letterSpacing: "0.5px",
                        background: "linear-gradient(90deg, #10b981, #3b82f6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {chapterName} – Topics
                </h1>

                <p
                    className="fs-5"
                    style={{
                        color: "#4b5563",
                        fontWeight: "500",
                        marginBottom: "1rem",
                    }}
                >
                    🎯 Choose a topic below to begin your test
                </p>


            </div>


            {/* Grid of Subtopic Cards */}
            <div className="row g-4">
                {Object.entries(subtopics).map(([topicName, topicData]) => (
                    <div key={topicName} className="col-12 col-md-6 col-lg-4">
                        <div className="card shadow border-0 h-100">

                            {/* Top Colored Bar */}
                            <div
                                style={{
                                    backgroundColor: topicData.color,
                                    height: '100px',
                                    borderTopLeftRadius: '0.5rem',
                                    borderTopRightRadius: '0.5rem'
                                }}
                                className="d-flex align-items-center justify-content-center"
                            >
                                {/* Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="white"
                                    width="40"
                                    height="40"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            {/* Card Content */}
                            <div className="card-body text-center">
                                <h5 className="fw-bold">{topicName}</h5>
                                <p className="text-muted mb-2">
                                    {topicData.questions.length} Multiple Choice Questions
                                </p>
                                <div className="d-flex justify-content-center text-muted small mb-3">
                                    <span className="me-3">⏱ No time limit</span>
                                    <span>🏆 2 points per question</span>
                                </div>
                                <button
                                    onClick={() => onStartTest(topicName)}
                                    style={{ backgroundColor: topicData.color }}
                                    className="btn w-100 text-white fw-semibold"
                                >
                                    Start Test
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubtopicsGrid;
