// import React, { useState, useEffect } from 'react';
// import { Clock, Play, Pause, Square, BarChart3 } from 'lucide-react';

// // 1. TopicCard Component
// const TopicCard = ({ topicName, topicData, onStartTest }) => {
//     return (
//         <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//             <div className={`${topicData.color} h-32 rounded-t-xl flex items-center justify-center`}>
//                 <BarChart3 className="text-white w-12 h-12" />
//             </div>
//             <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                     {topicName}
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                     {topicData.questions.length} Multiple Choice Questions
//                 </p>
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
//                     <span>⏱️ {topicData.timeLimit || "No time limit"}</span>
//                     <span>🏆 {topicData.pointsPerQuestion || 2} points per question</span>

//                 </div>
//                 <button
//                     aria-label={`Start test for ${topicName}`}
//                     onClick={() => onStartTest(topicName)}
//                     className={`w-full ${topicData.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}
//                 >
//                     Start Test
//                 </button>

//             </div>
//         </div>
//     );
// };
// export default TopicCard;

import { BarChart3 } from 'lucide-react';

const TopicCard = ({ topicName, topicData, onStartTest }) => {
  console.log("TopicCard rendered with:", topicData.color);
  return (
    <div
      className="card shadow border-0 h-100"
      style={{ borderRadius: '0.75rem', overflow: 'hidden' }}
    >
      {/* Top colored icon section */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: topicData.color, // Default to blue-600 if no color provided
          height: '8rem',
        }}
      >
        <BarChart3 size={48} color="#fff" />
      </div>

      {/* Card body */}
      <div className="card-body">
        <h5 className="fw-bold mb-2" style={{ color: '#1f2937' }}>
          {topicName}
        </h5>
        <p className="text-muted mb-3">
          {Array.isArray(topicData.questions) ? topicData.questions.length : 0} Multiple Choice Questions
        </p>
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
          Start Test
        </button>
      </div>
    </div>
  );
};

export default TopicCard;
