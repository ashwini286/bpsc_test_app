// import { BarChart3 } from 'lucide-react';

// const TopicCard = ({ topicName, topicData, onStartTest,subtopics }) => {

//   return (
//     <div
//       className="card shadow border-0 h-100"
//       style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
//     >
//       {/* Top colored icon section */}
//       <div
//         className="d-flex align-items-center justify-content-center"
//         style={{
//           backgroundColor: topicData.color, // Default to blue-600 if no color provided
//           height: '8rem',
//         }}
//       >
//         <BarChart3 size={48} color="#fff" />
//       </div>

//       {/* Card body */}
//       <div className="card-body">
//         <h5 className="fw-bold mb-2" style={{ color: '#1f2937' }}>
//           {topicName}
//         </h5>
//         <p className="text-muted mb-3">
//         500+ Multiple Choice Questions
//         </p>
//         {/* Info Row */}
//         <div className="d-flex justify-content-between text-muted small mb-4">
//           <span>⏱️ {topicData.timeLimit || 'No time limit'}</span>
//           <span>🏆 {topicData.pointsPerQuestion || 2} points per question</span>
//         </div>

//         {/* Start Button */}
//         <button
//           onClick={() => onStartTest(topicName)}
//           className="btn w-100 text-white fw-semibold"
//           style={{
//             backgroundColor: topicData.color || '#3b82f6',
//             borderRadius: '0.5rem',
//             padding: '0.75rem',
//           }}
//         >
//           Start Test
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopicCard;


import { BarChart3, CheckCircle, Star, Zap } from 'lucide-react';

const TopicCard = ({ topicName, topicData, onStartTest }) => {
  return (
    <div
      className="card shadow border-0 h-100"
      style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
    >
      {/* Top colored icon section */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: topicData.color || '#3b82f6',
          height: '8rem',
        }}
      >
        <BarChart3 size={48} color="#fff" />
      </div>

      {/* Card body */}
      <div className="card-body">
        <h5 className="fw-bold mb-3" style={{ color: '#1f2937' }}>
          {topicName}
        </h5>

        {/* ✅ Replaced boring line with interactive feature highlights */}
        <div className="d-flex flex-column gap-2 mb-3 text-muted small">
          <span className="d-flex align-items-center gap-2">
            <CheckCircle size={16} color="#10b981" /> Covers all key concepts
          </span>
          <span className="d-flex align-items-center gap-2">
            <Star size={16} color="#f59e0b" /> Practice with expert-designed MCQs
          </span>
          <span className="d-flex align-items-center gap-2">
            <Zap size={16} color="#3b82f6" /> Interactive test experience
          </span>
        </div>

        {/* Info Row */}
        <div className="d-flex justify-content-between text-muted small mb-4">
          <span>⏱️ {topicData.timeLimit || 'No time limit'}</span>
          <span>🏆 {topicData.pointsPerQuestion || 2} points per question</span>
        </div>

        {/* Start Button */}
        <button
          onClick={() => onStartTest(topicName)}
          className="btn w-100 text-white fw-semibold"
          style={{
            backgroundColor: topicData.color || '#3b82f6',
            borderRadius: '0.5rem',
            padding: '0.75rem',
          }}
        >
          🚀 Start Test
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
