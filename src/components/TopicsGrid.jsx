import TopicCard from "./TopicCard";

const TopicsGrid = ({ topics, onStartTest }) => {
  return (
    <div
      className="min-vh-100 p-4"
      style={{
        background: "linear-gradient(to bottom right, #eff6ff, #e0e7ff)",
      }}
    >
      <div className="container">
        {/* Title Section */}
        <div className="text-center mb-5">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "2.8rem",
              color: "#1f2937",
              background: "linear-gradient(90deg, #2563eb, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Online MCQ Test Portal for BPSC & STET
          </h1>

          <p
            className="fs-5 mt-3"
            style={{
              color: "#374151",
              fontWeight: "500",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Each topic includes <span style={{ color: "#2563eb", fontWeight: "600" }}>500+</span> MCQ questions —
            challenge yourself, track progress, and prepare smarter.
          </p>

          <div className="mt-4">
            <button
              className="btn btn-primary px-4 py-2 fw-semibold shadow-sm"
              style={{ borderRadius: "12px" }}
            >
              🚀 Start Your Preparation
            </button>
          </div>
        </div>


        {/* Grid Section */}
        <div className="row g-4">
          {Object.entries(topics).map(([topicName, topicData]) => (
            <div key={topicName} className="col-12 col-md-6 col-lg-4">
              <TopicCard
                topicName={topicName}
                topicData={topicData}
                onStartTest={onStartTest}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsGrid;
