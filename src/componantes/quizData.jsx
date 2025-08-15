// quizData.js
function generateQuestions(topic, count) {
  const questions = [];
  const templates = [
    {
      question: `What is the primary concept in ${topic}?`,
      options: ['A', 'B', 'C', 'D'],
      correct: 0
    },
    {
      question: `Which method is used in ${topic}?`,
      options: ['Method 1', 'Method 2', 'Method 3', 'Method 4'],
      correct: 1
    }
  ];

  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length];
    questions.push({
      id: i + 1,
      question: `${i + 1}. ${template.question}`,
      options: template.options,
      correct: template.correct
    });
  }
  return questions;
}

const chapters = {
  "JavaScript": {
    color: "#6366F1", // Indigo
    subtopics: {
      "Variables": {
        color: "#3B82F6", // Blue
        questions: generateQuestions("JavaScript Variables", 10)
      },
      "Functions": {
        color: "#10B981", // Green
        questions: generateQuestions("JavaScript Functions", 10)
      }
    }
  },
  "React": {
    color: "#8B5CF6", // Purple
    subtopics: {
      "Hooks": {
        color: "#8B5CF6",
        questions: generateQuestions("React Hooks", 10)
      },
      "Props & State": {
        color: "#F97316", // Orange
        questions: generateQuestions("React Props & State", 10)
      }
    }
  }
};

export default chapters;
