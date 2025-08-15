// // SubtopicsGrid.jsx
// import React from 'react';

// const SubtopicsGrid = ({ chapterName, subtopics, onStartTest, onBack }) => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6">
//             <div className="max-w-5xl mx-auto">
//                 <button
//                     onClick={onBack}
//                     className="mb-6 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold"
//                 >
//                     ← Back to Chapters
//                 </button>
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//                         {chapterName} - Topics
//                     </h1>
//                     <p className="text-lg text-gray-600">
//                         Choose a topic to start the test
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {Object.entries(subtopics).map(([topicName, topicData]) => (
//                         <div
//                             key={topicName}
//                             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//                         >
//                             <div style={{ backgroundColor: topicData.color }} className="h-24 rounded-t-xl flex items-center justify-center text-white font-bold text-lg">
//                                 {topicName}
//                             </div>

//                             <div className="p-6">
//                                 <p className="text-gray-600 mb-4">
//                                     {topicData.questions.length} MCQs
//                                 </p>
//                                 <button
//                                     onClick={() => onStartTest(topicName)}
//                                     className={`w-full ${topicData.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}
//                                 >
//                                     Start Test
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SubtopicsGrid;
import React from 'react';
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
                <h1 className="fw-bold">{chapterName} - Topics</h1>
                <p className="text-muted fs-5">Choose a topic to start the test</p>
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
