// src/data/subtopics.js
export const subtopics = {
  'JavaScript Fundamentals': {
    color: 'bg-blue-500',
    topics: {
      'Variables & Data Types': {
        questions: [
          { question: "What keyword declares a variable?", options: ["var", "let", "const", "all of these"], correct: 3 },
          { question: "Which is a primitive type?", options: ["Object", "Array", "Number", "Function"], correct: 2 }
        ]
      },
      'Functions': {
        questions: [
          { question: "Which keyword declares a function?", options: ["func", "def", "function", "method"], correct: 2 }
        ]
      }
    }
  },
  'React Development': {
    color: 'bg-green-500',
    topics: {
      'Components': {
        questions: [
          { question: "What are React components?", options: ["JS functions", "CSS files", "HTML templates", "JSON data"], correct: 0 }
        ]
      },
      'Hooks': {
        questions: [
          { question: "Which hook is used for state?", options: ["useState", "useEffect", "useRef", "useMemo"], correct: 0 }
        ]
      }
    }
  }
};
