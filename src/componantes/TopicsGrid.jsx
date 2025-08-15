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
          <h1 className="fw-bold mb-3" style={{ fontSize: "2.5rem", color: "#1f2937" }}>
           Online MCQ Test Portal for BPSC & STET
          </h1>
          <p className="fs-5" style={{ color: "#4b5563" }}>
           Challenge yourself, track progress, and prepare smarter with 500+ questions.
          </p>
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
