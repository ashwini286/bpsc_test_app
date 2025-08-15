import React from 'react';

const ChapterTopicsPage = ({ chapterName, chapterData, onStartTest, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          ← Back to Chapters
        </button>

        <h1 className="text-3xl font-bold mb-4">{chapterName} Topics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(chapterData.topics).map(([topicName, topicData]) => (
            <div key={topicName} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{topicName}</h3>
              <p className="mb-4">{topicData.questions.length} Questions</p>
              <button
                onClick={() => onStartTest(chapterName, topicName)}
                className={`${chapterData.color} text-white px-4 py-2 rounded-lg`}
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterTopicsPage;
