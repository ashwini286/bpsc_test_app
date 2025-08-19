// const chapters = {
//   "JavaScript": {
//     color: "#6366F1", // Indigo
//     subtopics: {
//       "Variables": {
//         color: "#3B82F6", // Blue
//         questions: [
//           { id: 1, question: "Which keyword declares a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], correct: 3 },
//           { id: 2, question: "Which variable type allows reassignment?", options: ["const", "let", "final", "static"], correct: 1 },
//           { id: 3, question: "What is the default value of an uninitialized variable?", options: ["null", "undefined", "0", "empty string"], correct: 1 },
//           { id: 4, question: "Which symbol is used for assignment in JavaScript?", options: ["=", "==", "===", "<-"], correct: 0 },
//           { id: 5, question: "Which keyword is block-scoped?", options: ["var", "let", "function", "define"], correct: 1 },
//           { id: 6, question: "Which type of variable hoists but does not initialize?", options: ["var", "let", "const", "static"], correct: 1 },
//           { id: 7, question: "Variables declared with const are:", options: ["Mutable", "Immutable", "Static", "Dynamic"], correct: 1 },
//           { id: 8, question: "Which operator checks both value and type?", options: ["==", "===", "!=", "="], correct: 1 },
//           { id: 9, question: "Which type is NaN in JavaScript?", options: ["string", "number", "boolean", "undefined"], correct: 1 },
//           { id: 10, question: "Which statement is used to declare multiple variables at once?", options: ["let", "var", "const", "Any of the above"], correct: 3 },
//           { id: 11, question: "Template literals are enclosed in:", options: ["''", "\"\"", "``", "()"], correct: 2 },
//           { id: 12, question: "Which keyword stops execution inside a loop?", options: ["stop", "break", "exit", "halt"], correct: 1 },
//           { id: 13, question: "Which type is 'null' in JavaScript?", options: ["object", "null", "undefined", "NaN"], correct: 0 },
//           { id: 14, question: "What does typeof '5' return?", options: ["number", "string", "object", "undefined"], correct: 1 },
//           { id: 15, question: "Which keyword prevents reassignment?", options: ["let", "const", "var", "static"], correct: 1 }
//         ]
//       },
//       "Functions": {
//         color: "#10B981", // Green
//         questions: [
//           { id: 1, question: "Which keyword declares a function?", options: ["func", "function", "def", "lambda"], correct: 1 },
//           { id: 2, question: "What does a function return if no return statement is used?", options: ["0", "null", "undefined", "empty string"], correct: 2 },
//           { id: 3, question: "Arrow functions were introduced in which JS version?", options: ["ES5", "ES6", "ES7", "ES8"], correct: 1 },
//           { id: 4, question: "Which scope do functions create?", options: ["Global", "Local", "Block", "Dynamic"], correct: 1 },
//           { id: 5, question: "Default parameters were introduced in:", options: ["ES5", "ES6", "ES7", "ES8"], correct: 1 },
//           { id: 6, question: "Which function method calls a function with a given this value?", options: ["call()", "bind()", "apply()", "invoke()"], correct: 0 },
//           { id: 7, question: "Which function method returns a new bound function?", options: ["call()", "bind()", "apply()", "link()"], correct: 1 },
//           { id: 8, question: "What does IIFE stand for?", options: ["Immediately Invoked Function Expression", "Inline Internal Function Execution", "Immediate Internal Function Execution", "Instant Invoke Function Example"], correct: 0 },
//           { id: 9, question: "Which keyword defines a generator function?", options: ["function", "function*", "gen", "yield"], correct: 1 },
//           { id: 10, question: "Which statement is used to return a value?", options: ["exit", "stop", "return", "yield"], correct: 2 },
//           { id: 11, question: "Functions without a name are called:", options: ["Named functions", "Anonymous functions", "Lambdas", "Callbacks"], correct: 1 },
//           { id: 12, question: "Which method executes a function after a delay?", options: ["setTimeout()", "delay()", "wait()", "timeout()"], correct: 0 },
//           { id: 13, question: "Which keyword is used inside a generator?", options: ["yield", "await", "break", "next"], correct: 0 },
//           { id: 14, question: "Function expressions are:", options: ["Hoisted", "Not hoisted", "Global only", "Deprecated"], correct: 1 },
//           { id: 15, question: "Which type of function can be called before declaration?", options: ["Function declaration", "Function expression", "Arrow function", "Anonymous"], correct: 0 }
//         ]
//       }
//     }
//   },

//   "Python": {
//     color: "#F59E0B", // Amber
//     subtopics: {
//       "Basics": {
//         color: "#FBBF24",
//         questions: [
//           { id: 1, question: "Which keyword is used to define a function in Python?", options: ["func", "function", "def", "lambda"], correct: 2 },
//           { id: 2, question: "Which data type is immutable?", options: ["list", "set", "tuple", "dict"], correct: 2 },
//           { id: 3, question: "What is the output of type(5)?", options: ["int", "float", "str", "bool"], correct: 0 },
//           { id: 4, question: "Which operator is used for exponentiation?", options: ["^", "**", "exp", "//"], correct: 1 },
//           { id: 5, question: "Which method adds an element to a list?", options: ["append()", "add()", "push()", "insert()"], correct: 0 },
//           { id: 6, question: "Which keyword is used to handle exceptions?", options: ["catch", "except", "handle", "try"], correct: 1 },
//           { id: 7, question: "What is the output of bool(0)?", options: ["True", "False", "None", "Error"], correct: 1 },
//           { id: 8, question: "Which symbol is used for floor division?", options: ["/", "//", "%", "**"], correct: 1 },
//           { id: 9, question: "Which function returns the length of a list?", options: ["size()", "count()", "len()", "length()"], correct: 2 },
//           { id: 10, question: "What is used to define a block of code in Python?", options: ["{}", "()", "Indentation", "Brackets"], correct: 2 },
//           { id: 11, question: "Which module is used for random numbers?", options: ["math", "random", "os", "sys"], correct: 1 },
//           { id: 12, question: "Which keyword creates a generator?", options: ["generate", "yield", "return", "next"], correct: 1 },
//           { id: 13, question: "Strings in Python are:", options: ["Mutable", "Immutable", "Static", "Dynamic"], correct: 1 },
//           { id: 14, question: "Which operator is used for membership testing?", options: ["in", "has", "with", "=="], correct: 0 },
//           { id: 15, question: "What is the output of 2**3?", options: ["6", "8", "9", "Error"], correct: 1 }
//         ]
//       },
//       "OOP": {
//         color: "#FCD34D",
//         questions: [
//           { id: 1, question: "Which keyword defines a class?", options: ["class", "Class", "struct", "def"], correct: 0 },
//           { id: 2, question: "Which method is the constructor in Python?", options: ["__init__", "__construct__", "init", "constructor"], correct: 0 },
//           { id: 3, question: "Which keyword refers to the instance?", options: ["this", "self", "cls", "me"], correct: 1 },
//           { id: 4, question: "Which method is called when deleting an object?", options: ["__del__", "__destroy__", "__delete__", "dispose"], correct: 0 },
//           { id: 5, question: "Which method is used to represent objects as strings?", options: ["__str__", "__repr__", "toString", "__string__"], correct: 0 },
//           { id: 6, question: "Inheritance allows:", options: ["Code reuse", "Slower execution", "Data hiding", "More memory"], correct: 0 },
//           { id: 7, question: "Which keyword prevents inheritance?", options: ["final", "stop", "sealed", "None"], correct: 3 },
//           { id: 8, question: "Which keyword is used to call the parent constructor?", options: ["super", "parent", "base", "this"], correct: 0 },
//           { id: 9, question: "Which type of method is bound to the class and not the instance?", options: ["Instance method", "Static method", "Class method", "Magic method"], correct: 2 },
//           { id: 10, question: "Which decorator defines a static method?", options: ["@staticmethod", "@static", "@class", "@static_method"], correct: 0 },
//           { id: 11, question: "Which method is used for operator overloading?", options: ["__op__", "__add__", "__overload__", "__operator__"], correct: 1 },
//           { id: 12, question: "Polymorphism allows:", options: ["Multiple classes with same method name", "Only one method", "Data hiding", "Slower execution"], correct: 0 },
//           { id: 13, question: "Encapsulation involves:", options: ["Hiding internal details", "Using loops", "Defining variables", "Inheriting classes"], correct: 0 },
//           { id: 14, question: "Which keyword defines an abstract class?", options: ["abstract", "ABC", "class", "None"], correct: 1 },
//           { id: 15, question: "Which method checks if an object is an instance of a class?", options: ["isinstance()", "type()", "issubclass()", "checktype()"], correct: 0 }
//         ]
//       }
//     }
//   },

//   "Database": {
//     color: "#10B981", // Green
//     subtopics: {
//       "SQL": {
//         color: "#34D399",
//         questions: [
//   { id: 1, question: "Which keyword is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "SHOW"], correct: 1 },
//   { id: 2, question: "Which clause filters rows?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 0 },
//   { id: 3, question: "Which SQL statement removes a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], correct: 2 },
//   { id: 4, question: "Which function counts rows?", options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"], correct: 1 },
//   { id: 5, question: "Which join returns all rows from both tables?", options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"], correct: 1 },
//   { id: 6, question: "Which clause groups rows?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 2 },
//   { id: 7, question: "Which statement removes all rows but keeps the table?", options: ["DROP", "DELETE", "TRUNCATE", "CLEAR"], correct: 2 },
//   { id: 8, question: "Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Unique Key", "Index"], correct: 1 },
//   { id: 9, question: "Which command changes table structure?", options: ["ALTER", "MODIFY", "UPDATE", "CHANGE"], correct: 0 },
//   { id: 10, question: "Which function returns the largest value?", options: ["MAX()", "HIGH()", "TOP()", "LARGEST()"], correct: 0 },
//   { id: 11, question: "Which clause is used after GROUP BY to filter?", options: ["HAVING", "WHERE", "FILTER", "CONDITION"], correct: 0 },
//   { id: 12, question: "Which index type enforces uniqueness?", options: ["Normal", "Primary", "Unique", "Clustered"], correct: 2 },
//   { id: 13, question: "Which keyword sorts results?", options: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"], correct: 0 },
//   { id: 14, question: "Which statement updates data?", options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"], correct: 1 },
//   { id: 15, question: "Which data type stores variable-length strings?", options: ["CHAR", "VARCHAR", "TEXT", "STRING"], correct: 1 }
//         ]
//       },
//   "NoSQL": {
//     color: "#6EE7B7",
//     questions: [
//       { id: 1, question: "Which NoSQL database is document-oriented?", options: ["MongoDB", "Redis", "Cassandra", "Neo4j"], correct: 0 },
//       { id: 2, question: "Which NoSQL type stores data as key-value pairs?", options: ["Document", "Graph", "Key-Value", "Column"], correct: 2 },
//       { id: 3, question: "Which NoSQL database is graph-based?", options: ["Neo4j", "Cassandra", "MongoDB", "Redis"], correct: 0 },
//       { id: 4, question: "Which NoSQL type is best for relationships?", options: ["Graph", "Document", "Key-Value", "Column"], correct: 0 },
//       { id: 5, question: "Which NoSQL database is column-oriented?", options: ["Cassandra", "MongoDB", "Redis", "Neo4j"], correct: 0 },
//       { id: 6, question: "Which NoSQL database is in-memory?", options: ["MongoDB", "Redis", "Cassandra", "Neo4j"], correct: 1 },
//       { id: 7, question: "Which is an advantage of NoSQL?", options: ["Fixed schema", "Scalability", "Strict transactions", "Complex joins"], correct: 1 },
//       { id: 8, question: "Which NoSQL database supports ACID transactions?", options: ["Cassandra", "MongoDB", "Redis", "Neo4j"], correct: 1 },
//       { id: 9, question: "Which type stores data in JSON format?", options: ["Document", "Graph", "Key-Value", "Column"], correct: 0 },
//       { id: 10, question: "Which query language is used in MongoDB?", options: ["SQL", "Mongo Query Language", "CQL", "GraphQL"], correct: 1 },
//       { id: 11, question: "Which is a columnar NoSQL database?", options: ["Cassandra", "Redis", "Neo4j", "MongoDB"], correct: 0 },
//       { id: 12, question: "Which database uses nodes and edges?", options: ["Graph", "Document", "Column", "Key-Value"], correct: 0 },
//       { id: 13, question: "Which is a key-value database?", options: ["Redis", "MongoDB", "Cassandra", "Neo4j"], correct: 0 },
//       { id: 14, question: "Which is not a NoSQL database?", options: ["MySQL", "MongoDB", "Cassandra", "Neo4j"], correct: 0 },
//       { id: 15, question: "Which is an example of document database?", options: ["MongoDB", "Redis", "Neo4j", "Cassandra"], correct: 0 }
//     ]
//   }
//     }
//   }
// };

// export default chapters;
// quizData.js
const chapters = {
    "Computer Basics & Hardware": {
        color: "#4F46E5",
        subtopics: {
            "Characteristics and applications of computers; generations overview": {
                color: "#4F46E5",
                questions: [
                    {
                        id: 1,
                        question:
                            "Which of the following is NOT a characteristic of a computer?",
                        options: ["Speed", "Intelligence", "Accuracy", "Automation"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question:
                            "Which characteristic of computers allows them to perform tasks without fatigue?",
                        options: ["Speed", "Automation", "Diligence", "Versatility"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "The ability of a computer to perform different types of tasks is called:",
                        options: ["Versatility", "Accuracy", "Reliability", "Speed"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question: "Which of the following is a limitation of computers?",
                        options: ["Automation", "No emotions", "High speed", "Accuracy"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "Which characteristic ensures that computers can repeat the same task without errors?",
                        options: [
                            "Versatility",
                            "Reliability",
                            "Diligence",
                            "Intelligence",
                        ],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "Which is an application of computers in the field of education?",
                        options: [
                            "E-learning platforms",
                            "Weather forecasting",
                            "Online banking",
                            "Robotics",
                        ],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question: "The first generation of computers used:",
                        options: [
                            "Vacuum tubes",
                            "Transistors",
                            "Microprocessors",
                            "Integrated Circuits",
                        ],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "Which generation of computers introduced transistors?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "Microprocessors were used in which generation of computers?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question: "Fifth generation computers are based on:",
                        options: [
                            "Vacuum tubes",
                            "Artificial Intelligence",
                            "Integrated Circuits",
                            "Microprocessors",
                        ],
                        correct: 2,
                    },
                    {
                        id: 11,
                        question:
                            "Which of the following is a characteristic of computers?",
                        options: [
                            "Emotions",
                            "Decision making",
                            "Accuracy",
                            "Self-learning",
                        ],
                        correct: 3,
                    },
                    {
                        id: 12,
                        question:
                            "In which generation were Integrated Circuits introduced?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question:
                            "Which of the following is NOT an application of computers?",
                        options: ["Medical diagnosis", "Banking", "Cooking", "Gaming"],
                        correct: 3,
                    },
                    {
                        id: 14,
                        question: "The reliability of computers is due to:",
                        options: ["Diligence", "Versatility", "Speed", "Accuracy"],
                        correct: 1,
                    },
                    {
                        id: 15,
                        question: "The fourth generation of computers used:",
                        options: [
                            "Vacuum tubes",
                            "Transistors",
                            "Microprocessors",
                            "Artificial Intelligence",
                        ],
                        correct: 3,
                    },
                    {
                        id: 16,
                        question:
                            "Which of the following is an application of computers in healthcare?",
                        options: ["E-banking", "CT Scans", "Stock trading", "Robotics"],
                        correct: 2,
                    },
                    {
                        id: 17,
                        question:
                            "Which of the following is an application of computers in business?",
                        options: [
                            "Simulation of surgeries",
                            "Payroll management",
                            "Weather forecasting",
                            "Entertainment",
                        ],
                        correct: 2,
                    },
                    {
                        id: 18,
                        question:
                            "Which generation is known for AI and natural language processing?",
                        options: ["First", "Second", "Fourth", "Fifth"],
                        correct: 4,
                    },
                    {
                        id: 19,
                        question:
                            "Which generation used vacuum tubes and was large in size?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 20,
                        question: "The speed of computers is measured in:",
                        options: ["Liters", "Gigahertz", "Lumens", "Calories"],
                        correct: 2,
                    },
                    {
                        id: 21,
                        question:
                            "Which of these is a disadvantage of first-generation computers?",
                        options: [
                            "Small size",
                            "High cost",
                            "Low electricity consumption",
                            "Portable",
                        ],
                        correct: 2,
                    },
                    {
                        id: 22,
                        question:
                            "Which generation of computers marked the use of High-Level Languages?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 23,
                        question:
                            "Which of these is an application of computers in weather forecasting?",
                        options: [
                            "Cloud computing",
                            "Numerical models",
                            "Online exams",
                            "E-commerce",
                        ],
                        correct: 2,
                    },
                    {
                        id: 24,
                        question: "Computers can process data:",
                        options: [
                            "Sequentially only",
                            "Both sequentially and parallelly",
                            "Randomly only",
                            "Manually",
                        ],
                        correct: 2,
                    },
                    {
                        id: 25,
                        question:
                            "Which characteristic ensures that computers give the same result for the same input?",
                        options: ["Accuracy", "Versatility", "Reliability", "Speed"],
                        correct: 1,
                    },
                    {
                        id: 26,
                        question: "Supercomputers are mainly used for:",
                        options: [
                            "Word processing",
                            "Scientific simulations",
                            "Gaming",
                            "Accounting",
                        ],
                        correct: 2,
                    },
                    {
                        id: 27,
                        question: "Mainframes are primarily used for:",
                        options: [
                            "Personal computing",
                            "Large-scale transaction processing",
                            "Gaming",
                            "Education",
                        ],
                        correct: 2,
                    },
                    {
                        id: 28,
                        question: "Mini computers were introduced in which generation?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 3,
                    },
                    {
                        id: 29,
                        question:
                            "Which of these is a fifth-generation computer characteristic?",
                        options: [
                            "Use of vacuum tubes",
                            "AI applications",
                            "Punch cards",
                            "Magnetic drum memory",
                        ],
                        correct: 2,
                    },
                    {
                        id: 30,
                        question:
                            "Which of these is an application of computers in defense?",
                        options: [
                            "Payroll management",
                            "Missile guidance",
                            "Gaming",
                            "Entertainment",
                        ],
                        correct: 2,
                    },
                    {
                        id: 31,
                        question:
                            "Which of the following best describes computer accuracy?",
                        options: [
                            "Never makes mistakes",
                            "Low error rate if programmed correctly",
                            "Can think logically",
                            "Always makes mistakes",
                        ],
                        correct: 2,
                    },
                    {
                        id: 32,
                        question: "Which is the smallest generation computer?",
                        options: ["First", "Second", "Fourth", "Fifth"],
                        correct: 4,
                    },
                    {
                        id: 33,
                        question: "Which of the following is a portable computer?",
                        options: ["Mainframe", "Mini computer", "Laptop", "Supercomputer"],
                        correct: 3,
                    },
                    {
                        id: 34,
                        question: "Which is a key feature of second-generation computers?",
                        options: [
                            "Vacuum tubes",
                            "Magnetic core memory",
                            "Integrated Circuits",
                            "AI",
                        ],
                        correct: 2,
                    },
                    {
                        id: 35,
                        question:
                            "Which type of computers are used for weather prediction?",
                        options: [
                            "Microcomputers",
                            "Supercomputers",
                            "Mainframes",
                            "Mini computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 36,
                        question:
                            "Which generation of computers first used keyboards and monitors?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 3,
                    },
                    {
                        id: 37,
                        question: "The fifth generation of computers is based on:",
                        options: [
                            "Neural networks and AI",
                            "Vacuum tubes",
                            "Transistors",
                            "Integrated Circuits",
                        ],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question:
                            "Which of the following is an application of computers in transport?",
                        options: [
                            "Ticket booking systems",
                            "Payroll management",
                            "Gaming",
                            "Cooking",
                        ],
                        correct: 1,
                    },
                    {
                        id: 39,
                        question: "First generation computers used which type of memory?",
                        options: ["Magnetic drums", "Cache", "Microchips", "CD-ROM"],
                        correct: 1,
                    },
                    {
                        id: 40,
                        question:
                            "Which of the following is an application of computers in communication?",
                        options: ["Email", "Cooking", "Driving", "Painting"],
                        correct: 1,
                    },
                    {
                        id: 41,
                        question:
                            "Which characteristic of computers is related to handling large volumes of data?",
                        options: ["Versatility", "Storage", "Automation", "Diligence"],
                        correct: 2,
                    },
                    {
                        id: 42,
                        question:
                            "Which generation used Very Large Scale Integration (VLSI)?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 3,
                    },
                    {
                        id: 43,
                        question: "Which application of computers is used in retail?",
                        options: [
                            "POS systems",
                            "Missile guidance",
                            "Weather simulation",
                            "Surgery",
                        ],
                        correct: 1,
                    },
                    {
                        id: 44,
                        question:
                            "Which generation marked the beginning of portable computers?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 3,
                    },
                    {
                        id: 45,
                        question: "Which of the following is a limitation of computers?",
                        options: [
                            "Speed",
                            "Automation",
                            "No decision-making ability",
                            "Accuracy",
                        ],
                        correct: 3,
                    },
                    {
                        id: 46,
                        question: "Which characteristic makes computers useful in banking?",
                        options: [
                            "Accuracy in calculations",
                            "Cooking ability",
                            "Entertainment features",
                            "Emotions",
                        ],
                        correct: 1,
                    },
                    {
                        id: 47,
                        question: "Which is the major advancement in the third generation?",
                        options: [
                            "Vacuum tubes",
                            "Transistors",
                            "Integrated Circuits",
                            "AI",
                        ],
                        correct: 3,
                    },
                    {
                        id: 48,
                        question:
                            "Which of the following is NOT a fifth-generation feature?",
                        options: [
                            "AI",
                            "Natural language processing",
                            "Microprocessors",
                            "Vacuum tubes",
                        ],
                        correct: 4,
                    },
                    {
                        id: 49,
                        question:
                            "Which generation is associated with machine learning and expert systems?",
                        options: ["First", "Second", "Fourth", "Fifth"],
                        correct: 4,
                    },
                    {
                        id: 50,
                        question:
                            "Which of the following is an application of computers in entertainment?",
                        options: [
                            "Video games",
                            "Banking",
                            "Surgery",
                            "Weather forecasting",
                        ],
                        correct: 1,
                    },
                    {
                        id: 51,
                        question: "Which generation introduced integrated circuits?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 52,
                        question:
                            "What was the primary storage device in first generation computers?",
                        options: [
                            "Magnetic Tape",
                            "Magnetic Drum",
                            "Hard Disk",
                            "Floppy Disk",
                        ],
                        correct: 1,
                    },
                    {
                        id: 53,
                        question: "Fifth generation computers primarily focus on:",
                        options: [
                            "AI and ML",
                            "Transistors",
                            "Vacuum tubes",
                            "Integrated circuits",
                        ],
                        correct: 0,
                    },
                    {
                        id: 54,
                        question: "Second generation computers used:",
                        options: [
                            "Transistors",
                            "Vacuum tubes",
                            "Microprocessors",
                            "Neural networks",
                        ],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question:
                            "The speed of first generation computers was measured in:",
                        options: [
                            "Milliseconds",
                            "Microseconds",
                            "Nanoseconds",
                            "Picoseconds",
                        ],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "Which generation introduced parallel processing?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 57,
                        question: "VLSI stands for:",
                        options: [
                            "Very Large Scale Integration",
                            "Very Light Scale Integration",
                            "Variable Large Scale Integration",
                            "Virtual Large Scale Integration",
                        ],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "Which generation computers were most unreliable?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 0,
                    },
                    {
                        id: 59,
                        question: "The concept of virtual memory was introduced in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 60,
                        question:
                            "Which generation introduced high-level programming languages?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 61,
                        question:
                            "The main disadvantage of first generation computers was:",
                        options: [
                            "High power consumption",
                            "Low speed",
                            "High cost",
                            "All of these",
                        ],
                        correct: 3,
                    },
                    {
                        id: 62,
                        question: "Fourth generation computers used:",
                        options: ["VLSI", "LSI", "ULSI", "SSI"],
                        correct: 0,
                    },
                    {
                        id: 63,
                        question: "Which generation introduced time-sharing systems?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 64,
                        question: "The period of third generation computers was:",
                        options: ["1946-1954", "1955-1964", "1965-1974", "1975-1989"],
                        correct: 2,
                    },
                    {
                        id: 65,
                        question: "Natural Language Processing is a feature of:",
                        options: [
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                            "Second generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 66,
                        question: "Which generation introduced semiconductors?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 67,
                        question: "The main memory of second generation computers was:",
                        options: [
                            "Magnetic Core",
                            "Vacuum tubes",
                            "Semiconductor",
                            "Magnetic Tape",
                        ],
                        correct: 0,
                    },
                    {
                        id: 68,
                        question: "Which generation introduced GUI?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 69,
                        question: "Assembly language was primarily used in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 70,
                        question: "The reliability of computers significantly improved in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 71,
                        question: "Which generation introduced microprogramming?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 72,
                        question: "The size of computers drastically reduced in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 73,
                        question: "Expert systems were introduced in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 3,
                    },
                    {
                        id: 74,
                        question: "Which generation first used magnetic core storage?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 75,
                        question: "The concept of pipelining was introduced in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 76,
                        question: "Which generation introduced multiprocessing?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "Operating systems were first introduced in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question:
                            "The main characteristic of fifth generation computers is:",
                        options: [
                            "Artificial Intelligence",
                            "VLSI technology",
                            "Integrated Circuits",
                            "Transistors",
                        ],
                        correct: 0,
                    },
                    {
                        id: 79,
                        question: "Which generation introduced cache memory?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 80,
                        question: "The concept of real-time processing emerged in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 81,
                        question:
                            "Which generation introduced object-oriented programming?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 82,
                        question: "The development of microprocessors occurred in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 83,
                        question: "Which generation first used batch processing?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 84,
                        question: "The concept of virtual machines was introduced in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 85,
                        question: "Which generation introduced distributed computing?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 86,
                        question: "The first commercial computers belonged to:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 0,
                    },
                    {
                        id: 87,
                        question: "Which generation introduced networking concepts?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 88,
                        question: "The use of Silicon chips began in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 89,
                        question: "Which generation first used magnetic disk storage?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "The concept of word processing emerged in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 91,
                        question: "Which generation introduced minicomputers?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 92,
                        question: "The use of microprogramming began in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 93,
                        question: "Which generation introduced supercomputers?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 94,
                        question: "The concept of computer networks emerged in:",
                        options: [
                            "First generation",
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question: "Which generation introduced personal computers?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 2,
                    },
                    {
                        id: 96,
                        question: "The development of RISC architecture occurred in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 97,
                        question: "Which generation introduced multitasking?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 2,
                    },
                    {
                        id: 98,
                        question: "The concept of database management emerged in:",
                        options: [
                            "Second generation",
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 99,
                        question: "Which generation introduced voice recognition?",
                        options: ["Second", "Third", "Fourth", "Fifth"],
                        correct: 3,
                    },
                    {
                        id: 100,
                        question: "The development of quantum computing belongs to:",
                        options: [
                            "Third generation",
                            "Fourth generation",
                            "Fifth generation",
                            "Sixth generation",
                        ],
                        correct: 2,
                    },
                ],
            },
            "Types of computers: analog, digital, hybrid; micro/mini/mainframe": {
                color: "#3B82F6",
                questions: [
                    {
                        id: 1,
                        question:
                            "Which type of computer processes data in continuous form?",
                        options: ["Digital", "Analog", "Hybrid", "Mainframe"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question: "Digital computers process data in:",
                        options: [
                            "Continuous form",
                            "Wave form",
                            "Binary form (0s and 1s)",
                            "Decimal form only",
                        ],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question: "A hybrid computer combines features of:",
                        options: [
                            "Mainframe and mini",
                            "Analog and digital",
                            "Micro and mini",
                            "Super and mainframe",
                        ],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "Which computer is best suited for scientific simulations?",
                        options: [
                            "Microcomputer",
                            "Analog computer",
                            "Digital computer",
                            "Mainframe computer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "The smallest general-purpose computer is:",
                        options: [
                            "Minicomputer",
                            "Microcomputer",
                            "Mainframe",
                            "Supercomputer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Mainframe computers are primarily used for:",
                        options: [
                            "Personal computing",
                            "Large-scale data processing",
                            "Gaming",
                            "Mobile applications",
                        ],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question: "Which computer type uses thermostats as an example?",
                        options: ["Digital", "Analog", "Hybrid", "Mini"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "Personal computers are examples of:",
                        options: [
                            "Mainframes",
                            "Minicomputers",
                            "Microcomputers",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "The processing speed of digital computers is measured in:",
                        options: ["Volts", "Hertz", "Watts", "Amperes"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "Which computer type is best for measuring physical quantities?",
                        options: ["Digital", "Analog", "Mini", "Micro"],
                        correct: 1,
                    },
                    {
                        id: 11,
                        question: "A laptop computer is classified as a:",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Hybrid computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 12,
                        question: "Which computer type processes data the fastest?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question: "Digital computers work on the principle of:",
                        options: [
                            "Counting",
                            "Measuring",
                            "Both counting and measuring",
                            "Neither counting nor measuring",
                        ],
                        correct: 0,
                    },
                    {
                        id: 14,
                        question: "Analog computers are best suited for:",
                        options: [
                            "Word processing",
                            "Database management",
                            "Scientific calculations",
                            "Measuring continuous physical quantities",
                        ],
                        correct: 3,
                    },
                    {
                        id: 15,
                        question: "Which computer type uses discrete values?",
                        options: [
                            "Analog",
                            "Digital",
                            "Both analog and digital",
                            "Neither analog nor digital",
                        ],
                        correct: 1,
                    },
                    {
                        id: 16,
                        question: "The accuracy of analog computers is:",
                        options: [
                            "Higher than digital",
                            "Lower than digital",
                            "Equal to digital",
                            "Not comparable to digital",
                        ],
                        correct: 1,
                    },
                    {
                        id: 17,
                        question: "Minicomputers are typically used in:",
                        options: [
                            "Personal computing",
                            "Small businesses",
                            "Mobile devices",
                            "Weather stations",
                        ],
                        correct: 1,
                    },
                    {
                        id: 18,
                        question: "Which computer type is most common today?",
                        options: ["Analog", "Digital", "Hybrid", "None of these"],
                        correct: 1,
                    },
                    {
                        id: 19,
                        question: "The storage capacity of mainframes is measured in:",
                        options: ["Megabytes", "Gigabytes", "Terabytes", "All of these"],
                        correct: 3,
                    },
                    {
                        id: 20,
                        question: "A speedometer is an example of:",
                        options: [
                            "Digital computer",
                            "Analog computer",
                            "Hybrid computer",
                            "Mainframe computer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 21,
                        question:
                            "Which computer type requires analog-to-digital conversion?",
                        options: ["Digital", "Analog", "Hybrid", "Mini"],
                        correct: 2,
                    },
                    {
                        id: 22,
                        question: "The cost of mainframe computers is:",
                        options: ["Low", "Medium", "High", "Variable"],
                        correct: 2,
                    },
                    {
                        id: 23,
                        question: "Which computer type is most suitable for home use?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 24,
                        question: "Digital computers are more _____ than analog computers.",
                        options: ["Accurate", "Fast", "Expensive", "Complex"],
                        correct: 0,
                    },
                    {
                        id: 25,
                        question: "The maintenance cost is highest for:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 26,
                        question: "Which computer type uses continuous signals?",
                        options: ["Digital", "Analog", "Mini", "Micro"],
                        correct: 1,
                    },
                    {
                        id: 27,
                        question: "A thermometer is an example of:",
                        options: [
                            "Digital device",
                            "Analog device",
                            "Hybrid device",
                            "Mainframe device",
                        ],
                        correct: 1,
                    },
                    {
                        id: 28,
                        question: "Minicomputers are _____ than mainframes.",
                        options: ["Larger", "Smaller", "Faster", "More expensive"],
                        correct: 1,
                    },
                    {
                        id: 29,
                        question: "The first computers were:",
                        options: ["Digital", "Analog", "Hybrid", "Minicomputers"],
                        correct: 1,
                    },
                    {
                        id: 30,
                        question: "Which computer type is most reliable?",
                        options: [
                            "Analog",
                            "Digital",
                            "Hybrid",
                            "All are equally reliable",
                        ],
                        correct: 1,
                    },
                    {
                        id: 31,
                        question: "The main advantage of digital computers is:",
                        options: ["Speed", "Accuracy", "Cost", "Size"],
                        correct: 1,
                    },
                    {
                        id: 32,
                        question: "Hybrid computers are commonly used in:",
                        options: [
                            "Hospitals",
                            "Schools",
                            "Scientific research",
                            "Home computing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 33,
                        question: "Which computer type uses binary language?",
                        options: ["Analog", "Digital", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 34,
                        question: "Mainframes are typically used by:",
                        options: [
                            "Individuals",
                            "Small businesses",
                            "Large organizations",
                            "Mobile users",
                        ],
                        correct: 2,
                    },
                    {
                        id: 35,
                        question: "The processing in analog computers is:",
                        options: ["Parallel", "Sequential", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 36,
                        question: "Which computer type is most power-efficient?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 37,
                        question: "Digital computers store data in:",
                        options: [
                            "Continuous form",
                            "Discrete form",
                            "Both forms",
                            "Neither form",
                        ],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question: "The size of microcomputers is:",
                        options: ["Very large", "Large", "Medium", "Small"],
                        correct: 3,
                    },
                    {
                        id: 39,
                        question: "Which computer type requires the most physical space?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 40,
                        question: "The output of an analog computer is:",
                        options: ["Discrete", "Continuous", "Binary", "Digital"],
                        correct: 1,
                    },
                    {
                        id: 41,
                        question: "Which computer type is most versatile?",
                        options: ["Analog", "Digital", "Hybrid", "Mini"],
                        correct: 1,
                    },
                    {
                        id: 42,
                        question: "The cost of microcomputers is:",
                        options: ["Very high", "High", "Medium", "Low"],
                        correct: 3,
                    },
                    {
                        id: 43,
                        question: "Analog computers are best for:",
                        options: [
                            "Word processing",
                            "Calculations",
                            "Measurements",
                            "Gaming",
                        ],
                        correct: 2,
                    },
                    {
                        id: 44,
                        question: "Which computer type requires the most maintenance?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 45,
                        question: "Digital computers work with:",
                        options: [
                            "Continuous values",
                            "Discrete values",
                            "Both",
                            "Neither",
                        ],
                        correct: 1,
                    },
                    {
                        id: 46,
                        question: "The processing speed of mainframes is measured in:",
                        options: ["MIPS", "KIPS", "TIPS", "All of these"],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question: "Which computer type is most portable?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 48,
                        question: "The accuracy of digital computers is:",
                        options: ["Low", "Medium", "High", "Variable"],
                        correct: 2,
                    },
                    {
                        id: 49,
                        question:
                            "Which computer type is least affected by environmental conditions?",
                        options: [
                            "Analog",
                            "Digital",
                            "Hybrid",
                            "All are equally affected",
                        ],
                        correct: 1,
                    },
                    {
                        id: 50,
                        question: "The main disadvantage of analog computers is:",
                        options: ["Speed", "Size", "Cost", "Accuracy"],
                        correct: 3,
                    },
                    {
                        id: 51,
                        question:
                            "Which computer type is best for real-time process control?",
                        options: ["Digital", "Analog", "Hybrid", "Mini"],
                        correct: 2,
                    },
                    {
                        id: 52,
                        question: "The response time of analog computers is:",
                        options: [
                            "Slower than digital",
                            "Faster than digital",
                            "Equal to digital",
                            "Not comparable",
                        ],
                        correct: 1,
                    },
                    {
                        id: 53,
                        question: "Minicomputers are typically found in:",
                        options: [
                            "Homes",
                            "Small offices",
                            "Large corporations",
                            "Mobile devices",
                        ],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question: "Which computer type requires the least power?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 55,
                        question: "The main advantage of hybrid computers is:",
                        options: [
                            "Low cost",
                            "High speed",
                            "Combined benefits",
                            "Small size",
                        ],
                        correct: 2,
                    },
                    {
                        id: 56,
                        question: "Digital computers are commonly used for:",
                        options: [
                            "Measuring temperature",
                            "Data processing",
                            "Both",
                            "Neither",
                        ],
                        correct: 1,
                    },
                    {
                        id: 57,
                        question: "Which computer type has the most complex architecture?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 58,
                        question: "The storage in analog computers is:",
                        options: ["Permanent", "Temporary", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 59,
                        question:
                            "Which computer type is most cost-effective for small businesses?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 60,
                        question: "The precision of digital computers is:",
                        options: ["Limited", "Unlimited", "Variable", "Not measurable"],
                        correct: 0,
                    },
                    {
                        id: 61,
                        question: "Which computer type is best for mathematical modeling?",
                        options: ["Digital", "Analog", "Hybrid", "Mini"],
                        correct: 2,
                    },
                    {
                        id: 62,
                        question: "The operating system requirements are highest for:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 63,
                        question: "Which computer type uses vacuum tubes historically?",
                        options: ["Digital", "Analog", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 64,
                        question: "The user interface is most complex in:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 65,
                        question: "Which computer type requires specialized programming?",
                        options: ["Digital", "Analog", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 66,
                        question: "The data processing capability is highest in:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 67,
                        question: "Which computer type is most suitable for education?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 68,
                        question: "The memory capacity is lowest in:",
                        options: [
                            "Mainframes",
                            "Minicomputers",
                            "Microcomputers",
                            "Analog computers",
                        ],
                        correct: 3,
                    },
                    {
                        id: 69,
                        question: "Which computer type requires climate control?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "All of these",
                        ],
                        correct: 2,
                    },
                    {
                        id: 70,
                        question: "The processing type in digital computers is:",
                        options: ["Parallel", "Sequential", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 71,
                        question: "Which computer type is most energy-efficient?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 72,
                        question: "The data representation in analog computers is:",
                        options: ["Binary", "Decimal", "Physical quantity", "All of these"],
                        correct: 2,
                    },
                    {
                        id: 73,
                        question: "Which computer type is least expensive to maintain?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 74,
                        question: "The reliability is highest in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Hybrid computers",
                            "All are equally reliable",
                        ],
                        correct: 1,
                    },
                    {
                        id: 75,
                        question: "Which computer type requires special cooling systems?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 76,
                        question: "The programming flexibility is highest in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Hybrid computers",
                            "Mini computers",
                        ],
                        correct: 1,
                    },
                    {
                        id: 77,
                        question:
                            "Which computer type has the most standardized architecture?",
                        options: [
                            "Analog",
                            "Digital",
                            "Hybrid",
                            "All are equally standardized",
                        ],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "The installation cost is highest for:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 79,
                        question:
                            "Which computer type requires the most skilled operators?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 80,
                        question: "The data processing speed is most consistent in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Hybrid computers",
                            "Mini computers",
                        ],
                        correct: 1,
                    },
                    {
                        id: 81,
                        question: "Which computer type is most suitable for graphics?",
                        options: ["Analog", "Digital", "Hybrid", "All equally suitable"],
                        correct: 1,
                    },
                    {
                        id: 82,
                        question: "The operational cost is lowest for:",
                        options: [
                            "Mainframes",
                            "Minicomputers",
                            "Microcomputers",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 83,
                        question: "Which computer type has the most standardized software?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 84,
                        question: "The backup systems are most critical for:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 85,
                        question:
                            "Which computer type requires the least technical knowledge to operate?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 86,
                        question: "The data storage format is most flexible in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Hybrid computers",
                            "Mini computers",
                        ],
                        correct: 1,
                    },
                    {
                        id: 87,
                        question:
                            "Which computer type has the most sophisticated error checking?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 88,
                        question: "The upgrade potential is highest in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Hybrid computers",
                            "All equally upgradeable",
                        ],
                        correct: 1,
                    },
                    {
                        id: 89,
                        question:
                            "Which computer type is most suitable for small networks?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "The data integrity is best maintained in:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 91,
                        question:
                            "Which computer type has the most standardized peripherals?",
                        options: ["Analog", "Digital", "Hybrid", "Mini"],
                        correct: 1,
                    },
                    {
                        id: 92,
                        question: "The multi-user support is best in:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 93,
                        question:
                            "Which computer type requires the most physical security?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 94,
                        question: "The software availability is highest for:",
                        options: [
                            "Mainframes",
                            "Minicomputers",
                            "Microcomputers",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question:
                            "Which computer type has the most standardized maintenance procedures?",
                        options: [
                            "Analog",
                            "Digital",
                            "Hybrid",
                            "All equally standardized",
                        ],
                        correct: 1,
                    },
                    {
                        id: 96,
                        question: "The data processing reliability is highest in:",
                        options: [
                            "Microcomputers",
                            "Minicomputers",
                            "Mainframes",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 97,
                        question:
                            "Which computer type is most suitable for batch processing?",
                        options: [
                            "Mainframe",
                            "Minicomputer",
                            "Microcomputer",
                            "Analog computer",
                        ],
                        correct: 0,
                    },
                    {
                        id: 98,
                        question: "The user interface is most intuitive in:",
                        options: [
                            "Mainframes",
                            "Minicomputers",
                            "Microcomputers",
                            "Analog computers",
                        ],
                        correct: 2,
                    },
                    {
                        id: 99,
                        question:
                            "Which computer type has the most comprehensive documentation?",
                        options: [
                            "Microcomputer",
                            "Minicomputer",
                            "Mainframe",
                            "Analog computer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 100,
                        question: "The scalability is highest in:",
                        options: [
                            "Analog computers",
                            "Digital computers",
                            "Mainframe computers",
                            "Microcomputers",
                        ],
                        correct: 2,
                    },
                ],
            },
            "Computer architecture (CPU, ALU, CU), system vs application software": {
                color: "#6366F1",
                questions: [
                    {
                        id: 1,
                        question: "What is the primary function of the CPU?",
                        options: ["Storage", "Processing", "Display", "Networking"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question: "Which component performs arithmetic operations?",
                        options: ["CU", "ALU", "Cache", "Register"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question: "What does CU stand for?",
                        options: [
                            "Computer Unit",
                            "Control Unit",
                            "Central Unit",
                            "Core Unit",
                        ],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question: "The ALU stands for:",
                        options: [
                            "Arithmetic Logic Unit",
                            "Advanced Logic Unit",
                            "Array Logic Unit",
                            "Automated Logic Unit",
                        ],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question: "Which is an example of system software?",
                        options: ["MS Word", "Operating System", "Web Browser", "Games"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "The Control Unit:",
                        options: [
                            "Performs calculations",
                            "Controls data flow",
                            "Stores data",
                            "Displays output",
                        ],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question: "Which component coordinates all CPU operations?",
                        options: ["ALU", "CU", "Register", "Cache"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "Application software is:",
                        options: [
                            "System dependent",
                            "Hardware dependent",
                            "User oriented",
                            "All of these",
                        ],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question: "CPU clock speed is measured in:",
                        options: ["Bytes", "Bits", "Hertz", "Watts"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question: "Which is not a part of CPU?",
                        options: ["ALU", "CU", "Printer", "Registers"],
                        correct: 2,
                    },
                    {
                        id: 11,
                        question: "What does the ALU perform?",
                        options: [
                            "Logical operations",
                            "Arithmetic operations",
                            "Both a and b",
                            "None of these",
                        ],
                        correct: 2,
                    },
                    {
                        id: 12,
                        question: "System software:",
                        options: [
                            "Interacts with hardware",
                            "Processes user data",
                            "Creates documents",
                            "Plays games",
                        ],
                        correct: 0,
                    },
                    {
                        id: 13,
                        question: "Which is application software?",
                        options: [
                            "Compiler",
                            "Device driver",
                            "Spreadsheet",
                            "Operating system",
                        ],
                        correct: 2,
                    },
                    {
                        id: 14,
                        question: "The CPU is also known as:",
                        options: ["Memory", "Processor", "Hard drive", "Monitor"],
                        correct: 1,
                    },
                    {
                        id: 15,
                        question: "Cache memory is:",
                        options: [
                            "Slower than RAM",
                            "Faster than RAM",
                            "Equal to RAM",
                            "Not related to speed",
                        ],
                        correct: 1,
                    },
                    {
                        id: 16,
                        question: "The fetch cycle:",
                        options: [
                            "Executes instruction",
                            "Gets instruction from memory",
                            "Stores results",
                            "Processes data",
                        ],
                        correct: 1,
                    },
                    {
                        id: 17,
                        question: "BIOS is an example of:",
                        options: [
                            "Application software",
                            "System software",
                            "Utility software",
                            "Programming software",
                        ],
                        correct: 1,
                    },
                    {
                        id: 18,
                        question: "Which stores temporary results in CPU?",
                        options: ["Hard disk", "RAM", "Registers", "Cache"],
                        correct: 2,
                    },
                    {
                        id: 19,
                        question: "The Control Unit manages:",
                        options: ["Data flow", "Storage", "Display", "Printing"],
                        correct: 0,
                    },
                    {
                        id: 20,
                        question: "System software is:",
                        options: [
                            "User friendly",
                            "Hardware dependent",
                            "Optional",
                            "Application specific",
                        ],
                        correct: 1,
                    },
                    {
                        id: 21,
                        question: "Which is not application software?",
                        options: ["Word processor", "Antivirus", "Games", "Web browser"],
                        correct: 1,
                    },
                    {
                        id: 22,
                        question: "CPU components communicate through:",
                        options: ["Bus", "Cable", "Wireless", "Internet"],
                        correct: 0,
                    },
                    {
                        id: 23,
                        question: "Registers are:",
                        options: [
                            "Slow storage",
                            "Fast storage",
                            "Permanent storage",
                            "External storage",
                        ],
                        correct: 1,
                    },
                    {
                        id: 24,
                        question: "The ALU performs:",
                        options: [
                            "Input operations",
                            "Output operations",
                            "Mathematical operations",
                            "Storage operations",
                        ],
                        correct: 2,
                    },
                    {
                        id: 25,
                        question: "Which software controls hardware?",
                        options: ["Application", "System", "Utility", "Programming"],
                        correct: 1,
                    },
                    {
                        id: 26,
                        question: "CPU processing involves:",
                        options: [
                            "Fetch-Execute cycle",
                            "Store-Process cycle",
                            "Input-Output cycle",
                            "Read-Write cycle",
                        ],
                        correct: 0,
                    },
                    {
                        id: 27,
                        question: "Application software is designed for:",
                        options: [
                            "Hardware management",
                            "System control",
                            "User tasks",
                            "Memory management",
                        ],
                        correct: 2,
                    },
                    {
                        id: 28,
                        question: "The CU coordinates:",
                        options: [
                            "User inputs",
                            "System resources",
                            "File storage",
                            "Network connections",
                        ],
                        correct: 1,
                    },
                    {
                        id: 29,
                        question: "Which is closest to CPU?",
                        options: ["RAM", "Cache", "Hard disk", "CD-ROM"],
                        correct: 1,
                    },
                    {
                        id: 30,
                        question: "Operating systems are:",
                        options: [
                            "Optional software",
                            "System software",
                            "Application software",
                            "User software",
                        ],
                        correct: 1,
                    },
                    {
                        id: 31,
                        question: "ALU operations include:",
                        options: ["Addition", "Subtraction", "Comparison", "All of these"],
                        correct: 3,
                    },
                    {
                        id: 32,
                        question: "The CPU's control unit:",
                        options: [
                            "Performs calculations",
                            "Directs operations",
                            "Stores data",
                            "Manages files",
                        ],
                        correct: 1,
                    },
                    {
                        id: 33,
                        question: "Which software runs other software?",
                        options: ["Application", "System", "Utility", "User"],
                        correct: 1,
                    },
                    {
                        id: 34,
                        question: "Application software requires:",
                        options: [
                            "System software",
                            "Other applications",
                            "Internet",
                            "Printer",
                        ],
                        correct: 0,
                    },
                    {
                        id: 35,
                        question: "CPU speed affects:",
                        options: [
                            "System performance",
                            "Screen size",
                            "Storage capacity",
                            "Printer speed",
                        ],
                        correct: 0,
                    },
                    {
                        id: 36,
                        question: "The fetch-execute cycle is managed by:",
                        options: ["ALU", "CU", "Register", "Cache"],
                        correct: 1,
                    },
                    {
                        id: 37,
                        question: "System software includes:",
                        options: ["Games", "Browsers", "Device drivers", "Word processors"],
                        correct: 2,
                    },
                    {
                        id: 38,
                        question: "Which performs decision making in CPU?",
                        options: ["ALU", "CU", "Register", "Cache"],
                        correct: 0,
                    },
                    {
                        id: 39,
                        question: "Application software examples include:",
                        options: ["Drivers", "OS", "Games", "BIOS"],
                        correct: 2,
                    },
                    {
                        id: 40,
                        question: "The CPU's main job is:",
                        options: ["Storage", "Processing", "Display", "Input"],
                        correct: 1,
                    },
                    {
                        id: 41,
                        question: "System software is installed:",
                        options: ["First", "Last", "Anytime", "Never"],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "ALU works under control of:",
                        options: ["CPU", "CU", "Memory", "Bus"],
                        correct: 1,
                    },
                    {
                        id: 43,
                        question: "Which software comes with computer?",
                        options: ["System", "Application", "Games", "Office"],
                        correct: 0,
                    },
                    {
                        id: 44,
                        question: "CPU register size affects:",
                        options: [
                            "Processing speed",
                            "Screen resolution",
                            "Storage size",
                            "Print quality",
                        ],
                        correct: 0,
                    },
                    {
                        id: 45,
                        question: "The CU's function is:",
                        options: ["Processing", "Control", "Storage", "Display"],
                        correct: 1,
                    },
                    {
                        id: 46,
                        question: "Application software is:",
                        options: [
                            "Hardware independent",
                            "Hardware dependent",
                            "System independent",
                            "OS independent",
                        ],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question: "System software examples include:",
                        options: ["Games", "Compilers", "Spreadsheets", "Browsers"],
                        correct: 1,
                    },
                    {
                        id: 48,
                        question: "CPU cache is used for:",
                        options: [
                            "Permanent storage",
                            "Temporary storage",
                            "Speed improvement",
                            "File management",
                        ],
                        correct: 2,
                    },
                    {
                        id: 49,
                        question: "The ALU can:",
                        options: [
                            "Compare numbers",
                            "Store programs",
                            "Display graphics",
                            "Manage files",
                        ],
                        correct: 0,
                    },
                    {
                        id: 50,
                        question: "Which needs system software?",
                        options: [
                            "CPU",
                            "Application software",
                            "Power supply",
                            "Keyboard",
                        ],
                        correct: 1,
                    },
                    {
                        id: 51,
                        question: "Control Unit manages:",
                        options: [
                            "All CPU operations",
                            "Only calculations",
                            "Only storage",
                            "Only display",
                        ],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "Application software is designed for:",
                        options: [
                            "Hardware control",
                            "User tasks",
                            "System management",
                            "Memory control",
                        ],
                        correct: 1,
                    },
                    {
                        id: 53,
                        question: "ALU operations are:",
                        options: [
                            "User controlled",
                            "CU controlled",
                            "OS controlled",
                            "Memory controlled",
                        ],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question: "System software:",
                        options: [
                            "Is optional",
                            "Controls hardware",
                            "Creates documents",
                            "Plays games",
                        ],
                        correct: 1,
                    },
                    {
                        id: 55,
                        question: "CPU components include:",
                        options: [
                            "ALU and CU",
                            "Keyboard and mouse",
                            "Monitor and printer",
                            "Speakers and mic",
                        ],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "The fetch cycle gets:",
                        options: [
                            "Data from keyboard",
                            "Instructions from memory",
                            "Output from printer",
                            "Input from mouse",
                        ],
                        correct: 1,
                    },
                    {
                        id: 57,
                        question: "Application software requires:",
                        options: [
                            "No system software",
                            "System software",
                            "Only hardware",
                            "No OS",
                        ],
                        correct: 1,
                    },
                    {
                        id: 58,
                        question: "The CU coordinates:",
                        options: [
                            "Only input",
                            "Only output",
                            "All CPU activities",
                            "Only storage",
                        ],
                        correct: 2,
                    },
                    {
                        id: 59,
                        question: "System software is:",
                        options: [
                            "User oriented",
                            "Hardware oriented",
                            "Data oriented",
                            "Game oriented",
                        ],
                        correct: 1,
                    },
                    {
                        id: 60,
                        question: "ALU performs:",
                        options: [
                            "Only arithmetic operations",
                            "Only logical operations",
                            "Both arithmetic and logical",
                            "Neither",
                        ],
                        correct: 2,
                    },
                    {
                        id: 61,
                        question: "CPU registers are:",
                        options: [
                            "Permanent storage",
                            "Temporary storage",
                            "External storage",
                            "Network storage",
                        ],
                        correct: 1,
                    },
                    {
                        id: 62,
                        question: "Application software:",
                        options: [
                            "Controls hardware",
                            "Performs user tasks",
                            "Manages memory",
                            "Controls CPU",
                        ],
                        correct: 1,
                    },
                    {
                        id: 63,
                        question: "The Control Unit:",
                        options: [
                            "Does calculations",
                            "Directs operations",
                            "Stores data",
                            "Creates files",
                        ],
                        correct: 1,
                    },
                    {
                        id: 64,
                        question: "System software example:",
                        options: [
                            "Spreadsheet",
                            "Word processor",
                            "Operating system",
                            "Web browser",
                        ],
                        correct: 2,
                    },
                    {
                        id: 65,
                        question: "CPU performance depends on:",
                        options: [
                            "Clock speed",
                            "Screen size",
                            "Keyboard type",
                            "Mouse DPI",
                        ],
                        correct: 0,
                    },
                    {
                        id: 66,
                        question: "Application software is:",
                        options: [
                            "Machine dependent",
                            "User dependent",
                            "Network dependent",
                            "Power dependent",
                        ],
                        correct: 1,
                    },
                    {
                        id: 67,
                        question: "ALU contains:",
                        options: [
                            "Storage units",
                            "Processing units",
                            "Control units",
                            "Display units",
                        ],
                        correct: 1,
                    },
                    {
                        id: 68,
                        question: "System software directly interacts with:",
                        options: ["User", "Hardware", "Internet", "Power supply"],
                        correct: 1,
                    },
                    {
                        id: 69,
                        question: "The CU manages:",
                        options: [
                            "User interface",
                            "Hardware resources",
                            "File storage",
                            "Network settings",
                        ],
                        correct: 1,
                    },
                    {
                        id: 70,
                        question: "Application software examples:",
                        options: [
                            "Device drivers",
                            "Operating systems",
                            "Word processors",
                            "BIOS",
                        ],
                        correct: 2,
                    },
                    {
                        id: 71,
                        question: "CPU cache is:",
                        options: [
                            "Main memory",
                            "Secondary memory",
                            "Faster than RAM",
                            "Slower than RAM",
                        ],
                        correct: 2,
                    },
                    {
                        id: 72,
                        question: "System software is responsible for:",
                        options: [
                            "User interface",
                            "Hardware control",
                            "Document creation",
                            "Web browsing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 73,
                        question: "The ALU performs:",
                        options: [
                            "Memory management",
                            "Calculations",
                            "File management",
                            "Network control",
                        ],
                        correct: 1,
                    },
                    {
                        id: 74,
                        question: "Application software needs:",
                        options: [
                            "No hardware",
                            "No system software",
                            "System software",
                            "No OS",
                        ],
                        correct: 2,
                    },
                    {
                        id: 75,
                        question: "Control Unit functions include:",
                        options: ["Calculations", "Coordination", "Storage", "Display"],
                        correct: 1,
                    },
                    {
                        id: 76,
                        question: "System software examples:",
                        options: [
                            "Games",
                            "Device drivers",
                            "Office suite",
                            "Media player",
                        ],
                        correct: 1,
                    },
                    {
                        id: 77,
                        question: "CPU components communicate via:",
                        options: ["Internet", "Bus", "Cable", "Wireless"],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "Application software is designed to:",
                        options: [
                            "Control hardware",
                            "Solve user problems",
                            "Manage memory",
                            "Control CPU",
                        ],
                        correct: 1,
                    },
                    {
                        id: 79,
                        question: "ALU operations are initiated by:",
                        options: ["User", "Control Unit", "Memory", "OS"],
                        correct: 1,
                    },
                    {
                        id: 80,
                        question: "System software:",
                        options: [
                            "Is optional",
                            "Is essential",
                            "Can be removed",
                            "Is not needed",
                        ],
                        correct: 1,
                    },
                    {
                        id: 81,
                        question: "The fetch-execute cycle involves:",
                        options: ["Only ALU", "Only CU", "Both ALU and CU", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 82,
                        question: "Application software type:",
                        options: [
                            "Operating system",
                            "Device driver",
                            "Word processor",
                            "BIOS",
                        ],
                        correct: 2,
                    },
                    {
                        id: 83,
                        question: "CPU register is:",
                        options: [
                            "External memory",
                            "Internal memory",
                            "Virtual memory",
                            "Cache memory",
                        ],
                        correct: 1,
                    },
                    {
                        id: 84,
                        question: "System software manages:",
                        options: ["Documents", "Hardware", "Internet", "Games"],
                        correct: 1,
                    },
                    {
                        id: 85,
                        question: "The Control Unit:",
                        options: [
                            "Processes data",
                            "Controls operations",
                            "Stores data",
                            "Creates files",
                        ],
                        correct: 1,
                    },
                    {
                        id: 86,
                        question: "Application software requires:",
                        options: [
                            "Only hardware",
                            "Only OS",
                            "Both hardware and OS",
                            "Neither",
                        ],
                        correct: 2,
                    },
                    {
                        id: 87,
                        question: "ALU functions include:",
                        options: [
                            "File management",
                            "Calculations",
                            "Memory management",
                            "Display control",
                        ],
                        correct: 1,
                    },
                    {
                        id: 88,
                        question: "System software is:",
                        options: [
                            "User specific",
                            "Hardware specific",
                            "Task specific",
                            "Game specific",
                        ],
                        correct: 1,
                    },
                    {
                        id: 89,
                        question: "CPU performance metrics include:",
                        options: [
                            "Screen size",
                            "Clock speed",
                            "Keyboard type",
                            "Mouse sensitivity",
                        ],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "Application software examples:",
                        options: ["BIOS", "Drivers", "Games", "OS"],
                        correct: 2,
                    },
                    {
                        id: 91,
                        question: "The Control Unit manages:",
                        options: [
                            "Data processing",
                            "Operation control",
                            "Data storage",
                            "File creation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 92,
                        question: "System software purpose:",
                        options: [
                            "User tasks",
                            "Hardware control",
                            "Entertainment",
                            "Communication",
                        ],
                        correct: 1,
                    },
                    {
                        id: 93,
                        question: "ALU handles:",
                        options: [
                            "File operations",
                            "Mathematical operations",
                            "Network operations",
                            "Display operations",
                        ],
                        correct: 1,
                    },
                    {
                        id: 94,
                        question: "Application software is:",
                        options: [
                            "System dependent",
                            "System independent",
                            "Hardware independent",
                            "OS independent",
                        ],
                        correct: 0,
                    },
                    {
                        id: 95,
                        question: "CPU components include:",
                        options: [
                            "Monitor and keyboard",
                            "ALU and CU",
                            "Printer and scanner",
                            "Mouse and speakers",
                        ],
                        correct: 1,
                    },
                    {
                        id: 96,
                        question: "System software example:",
                        options: [
                            "Spreadsheet",
                            "Browser",
                            "Device driver",
                            "Media player",
                        ],
                        correct: 2,
                    },
                    {
                        id: 97,
                        question: "The Control Unit:",
                        options: [
                            "Stores data",
                            "Controls operations",
                            "Processes data",
                            "Creates files",
                        ],
                        correct: 1,
                    },
                    {
                        id: 98,
                        question: "Application software types include:",
                        options: [
                            "Operating systems",
                            "Device drivers",
                            "Word processors",
                            "BIOS",
                        ],
                        correct: 2,
                    },
                    {
                        id: 99,
                        question: "ALU is controlled by:",
                        options: ["User", "Control Unit", "Memory", "OS"],
                        correct: 1,
                    },
                    {
                        id: 100,
                        question: "System software:",
                        options: [
                            "Is optional",
                            "Controls hardware",
                            "Creates documents",
                            "Plays games",
                        ],
                        correct: 1,
                    },
                ],
            },
            "Input/Output devices and storage devices; ports and interfaces": {
                color: "#8B5CF6",
                questions: [
                    {
                        id: 1,
                        question: "Which of the following is an input device?",
                        options: ["Monitor", "Printer", "Mouse", "Speaker"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question: "Which storage device has the fastest data access speed?",
                        options: ["Hard Disk", "SSD", "DVD", "USB Drive"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "What type of port is typically used for connecting a printer?",
                        options: ["VGA", "USB", "HDMI", "PS/2"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question: "Which is an example of optical storage?",
                        options: ["Floppy Disk", "Hard Drive", "DVD", "Flash Drive"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question: "What is the primary function of a graphics card?",
                        options: [
                            "Sound Processing",
                            "Video Processing",
                            "Data Storage",
                            "Network Communication",
                        ],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Which device is both an input and output device?",
                        options: ["Keyboard", "Monitor", "Touchscreen", "Printer"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question: "What port is commonly used for high-definition video?",
                        options: ["USB", "HDMI", "PS/2", "Ethernet"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "Which storage type is volatile?",
                        options: ["RAM", "Hard Disk", "SSD", "ROM"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question: "What is the function of a sound card?",
                        options: [
                            "Video Processing",
                            "Audio Processing",
                            "Data Storage",
                            "Network Communication",
                        ],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question: "Which device is used for taking backup of data?",
                        options: ["Scanner", "Tape Drive", "Webcam", "Microphone"],
                        correct: 1,
                    },
                    {
                        id: 11,
                        question: "What interface is used for connecting SATA devices?",
                        options: ["PCI", "USB", "SATA", "PS/2"],
                        correct: 2,
                    },
                    {
                        id: 12,
                        question: "Which port is becoming obsolete in modern computers?",
                        options: ["USB", "HDMI", "PS/2", "Ethernet"],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question: "What is the primary function of a NIC?",
                        options: [
                            "Sound Processing",
                            "Video Processing",
                            "Network Connection",
                            "Data Storage",
                        ],
                        correct: 2,
                    },
                    {
                        id: 14,
                        question: "Which device converts digital signals to analog?",
                        options: ["Modem", "Router", "Switch", "Hub"],
                        correct: 0,
                    },
                    {
                        id: 15,
                        question: "What type of storage device has no moving parts?",
                        options: ["Hard Disk", "SSD", "DVD Drive", "Floppy Drive"],
                        correct: 1,
                    },
                    {
                        id: 16,
                        question: "Which is an example of sequential access storage?",
                        options: ["RAM", "Tape Drive", "SSD", "ROM"],
                        correct: 1,
                    },
                    {
                        id: 17,
                        question: "What port is commonly used for internet connection?",
                        options: ["VGA", "HDMI", "Ethernet", "PS/2"],
                        correct: 2,
                    },
                    {
                        id: 18,
                        question: "Which device is used for pointing and selecting?",
                        options: ["Keyboard", "Monitor", "Mouse", "Printer"],
                        correct: 2,
                    },
                    {
                        id: 19,
                        question: "What type of connector is used for older monitors?",
                        options: ["HDMI", "VGA", "USB", "Lightning"],
                        correct: 1,
                    },
                    {
                        id: 20,
                        question: "Which storage device is most portable?",
                        options: ["Hard Disk", "DVD", "USB Flash Drive", "Tape Drive"],
                        correct: 2,
                    },
                    {
                        id: 21,
                        question: "What is the function of a webcam?",
                        options: [
                            "Video Input",
                            "Video Output",
                            "Audio Input",
                            "Audio Output",
                        ],
                        correct: 0,
                    },
                    {
                        id: 22,
                        question: "Which port supports fastest data transfer?",
                        options: ["USB 1.0", "USB 2.0", "USB 3.0", "PS/2"],
                        correct: 2,
                    },
                    {
                        id: 23,
                        question: "What type of device is a plotter?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Storage Device",
                            "Processing Device",
                        ],
                        correct: 1,
                    },
                    {
                        id: 24,
                        question: "Which device reads barcodes?",
                        options: ["Scanner", "Printer", "Barcode Reader", "OCR"],
                        correct: 2,
                    },
                    {
                        id: 25,
                        question: "What is the primary function of RAM?",
                        options: [
                            "Permanent Storage",
                            "Temporary Storage",
                            "Data Processing",
                            "Data Output",
                        ],
                        correct: 1,
                    },
                    {
                        id: 26,
                        question:
                            "Which device converts physical motion to digital signals?",
                        options: ["Joystick", "Speaker", "Monitor", "Printer"],
                        correct: 0,
                    },
                    {
                        id: 27,
                        question:
                            "What type of port is generally used for gaming controllers?",
                        options: ["VGA", "USB", "PS/2", "HDMI"],
                        correct: 1,
                    },
                    {
                        id: 28,
                        question: "Which storage device has the highest capacity?",
                        options: ["DVD", "Blu-ray", "Hard Disk", "Flash Drive"],
                        correct: 2,
                    },
                    {
                        id: 29,
                        question: "What is the function of a digitizer?",
                        options: [
                            "Convert Analog to Digital",
                            "Store Data",
                            "Display Output",
                            "Process Data",
                        ],
                        correct: 0,
                    },
                    {
                        id: 30,
                        question: "Which device is used for biometric input?",
                        options: ["Keyboard", "Mouse", "Fingerprint Scanner", "Printer"],
                        correct: 2,
                    },
                    {
                        id: 31,
                        question: "What type of storage is ROM?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 32,
                        question: "Which port is used for connecting external hard drives?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 33,
                        question: "What is the primary function of a network switch?",
                        options: [
                            "Data Storage",
                            "Network Management",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 34,
                        question: "Which device is used for high-quality printing?",
                        options: [
                            "Inkjet Printer",
                            "Laser Printer",
                            "Dot Matrix Printer",
                            "Thermal Printer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 35,
                        question: "What type of storage is a hard disk?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 36,
                        question: "Which device is used for scanning documents?",
                        options: ["Printer", "Scanner", "Monitor", "Keyboard"],
                        correct: 1,
                    },
                    {
                        id: 37,
                        question: "What is the function of a USB hub?",
                        options: [
                            "Data Storage",
                            "Connect Multiple USB Devices",
                            "Video Output",
                            "Audio Input",
                        ],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question: "Which port is used for connecting audio devices?",
                        options: ["USB", "HDMI", "Audio Jack", "VGA"],
                        correct: 2,
                    },
                    {
                        id: 39,
                        question: "What type of device is a barcode scanner?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Storage Device",
                            "Processing Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 40,
                        question:
                            "Which storage device is used for long-term data storage?",
                        options: ["RAM", "SSD", "Hard Disk", "Cache"],
                        correct: 2,
                    },
                    {
                        id: 41,
                        question: "What is the primary function of a network router?",
                        options: [
                            "Data Storage",
                            "Network Routing",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 42,
                        question: "Which device is used for high-speed data transfer?",
                        options: ["USB 2.0", "USB 3.0", "VGA", "PS/2"],
                        correct: 1,
                    },
                    {
                        id: 43,
                        question: "What type of storage is a DVD?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 44,
                        question: "Which device is used for capturing images?",
                        options: ["Scanner", "Camera", "Monitor", "Printer"],
                        correct: 1,
                    },
                    {
                        id: 45,
                        question: "What is the function of a network interface card (NIC)?",
                        options: [
                            "Data Storage",
                            "Network Connection",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 46,
                        question: "Which port is used for connecting external displays?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 1,
                    },
                    {
                        id: 47,
                        question: "What type of device is a touchscreen?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Both Input and Output",
                            "Storage Device",
                        ],
                        correct: 2,
                    },
                    {
                        id: 48,
                        question: "Which storage device is most commonly used in laptops?",
                        options: ["Hard Disk", "SSD", "Floppy Disk", "Tape Drive"],
                        correct: 1,
                    },
                    {
                        id: 49,
                        question: "What is the primary function of a modem?",
                        options: [
                            "Data Storage",
                            "Network Connection",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 50,
                        question: "Which device is used for printing high-quality images?",
                        options: [
                            "Inkjet Printer",
                            "Laser Printer",
                            "Dot Matrix Printer",
                            "Thermal Printer",
                        ],
                        correct: 0,
                    },
                    {
                        id: 51,
                        question: "What type of port is used for connecting a keyboard?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "Which device is used for capturing audio?",
                        options: ["Microphone", "Speaker", "Monitor", "Printer"],
                        correct: 0,
                    },
                    {
                        id: 53,
                        question: "What is the function of a network hub?",
                        options: [
                            "Data Storage",
                            "Network Connection",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question:
                            "Which storage device is used for temporary data storage?",
                        options: ["RAM", "Hard Disk", "SSD", "ROM"],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question: "What type of device is a joystick?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Storage Device",
                            "Processing Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "Which port is used for connecting a mouse?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 57,
                        question: "What is the primary function of a network firewall?",
                        options: [
                            "Data Storage",
                            "Network Security",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 58,
                        question: "Which device is used for reading QR codes?",
                        options: ["Scanner", "Printer", "Barcode Reader", "OCR"],
                        correct: 2,
                    },
                    {
                        id: 59,
                        question: "What type of storage is a flash drive?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 60,
                        question: "Which device is used for displaying images?",
                        options: ["Monitor", "Printer", "Scanner", "Keyboard"],
                        correct: 0,
                    },
                    {
                        id: 61,
                        question: "What is the function of a network bridge?",
                        options: [
                            "Data Storage",
                            "Network Segmentation",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 62,
                        question: "Which port is used for connecting a microphone?",
                        options: ["USB", "HDMI", "Audio Jack", "VGA"],
                        correct: 2,
                    },
                    {
                        id: 63,
                        question: "What type of device is a graphics tablet?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Both Input and Output",
                            "Storage Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question:
                            "Which storage device is used for high-capacity data storage?",
                        options: ["Floppy Disk", "Hard Disk", "SSD", "ROM"],
                        correct: 1,
                    },
                    {
                        id: 65,
                        question: "What is the primary function of a network repeater?",
                        options: [
                            "Data Storage",
                            "Signal Amplification",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 66,
                        question: "Which device is used for capturing video?",
                        options: ["Camera", "Scanner", "Monitor", "Printer"],
                        correct: 0,
                    },
                    {
                        id: 67,
                        question: "What type of port is used for connecting a printer?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 68,
                        question: "Which device is used for high-speed data transfer?",
                        options: ["USB 2.0", "USB 3.0", "VGA", "PS/2"],
                        correct: 1,
                    },
                    {
                        id: 69,
                        question: "What is the function of a network access point?",
                        options: [
                            "Data Storage",
                            "Network Access",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 70,
                        question: "Which device is used for printing text documents?",
                        options: [
                            "Inkjet Printer",
                            "Laser Printer",
                            "Dot Matrix Printer",
                            "Thermal Printer",
                        ],
                        correct: 1,
                    },
                    {
                        id: 71,
                        question: "What type of storage is a CD-ROM?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 72,
                        question: "Which device is used for scanning barcodes?",
                        options: ["Scanner", "Printer", "Barcode Reader", "OCR"],
                        correct: 2,
                    },
                    {
                        id: 73,
                        question:
                            "What is the primary function of a network load balancer?",
                        options: [
                            "Data Storage",
                            "Traffic Distribution",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 74,
                        question: "Which port is used for connecting a monitor?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 1,
                    },
                    {
                        id: 75,
                        question: "What type of device is a MIDI controller?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Both Input and Output",
                            "Storage Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 76,
                        question:
                            "Which storage device is used for long-term data storage?",
                        options: ["RAM", "SSD", "Hard Disk", "Cache"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "What is the function of a network proxy server?",
                        options: [
                            "Data Storage",
                            "Network Filtering",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "Which device is used for capturing audio input?",
                        options: ["Microphone", "Speaker", "Monitor", "Printer"],
                        correct: 0,
                    },
                    {
                        id: 79,
                        question: "What type of port is used for connecting a keyboard?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 80,
                        question: "Which device is used for high-quality audio output?",
                        options: ["Speaker", "Monitor", "Printer", "Scanner"],
                        correct: 0,
                    },
                    {
                        id: 81,
                        question: "What is the primary function of a network gateway?",
                        options: [
                            "Data Storage",
                            "Network Access",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 82,
                        question: "Which device is used for capturing images in low light?",
                        options: ["Scanner", "Camera", "Monitor", "Printer"],
                        correct: 1,
                    },
                    {
                        id: 83,
                        question: "What type of storage is a Blu-ray disc ?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 84,
                        question:
                            "Which device is used for high-speed internet connection?",
                        options: ["Modem", "Router", "Switch", "Hub"],
                        correct: 0,
                    },
                    {
                        id: 85,
                        question: "What is the function of a network switch?",
                        options: [
                            "Data Storage",
                            "Network Management",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 86,
                        question: "Which port is used for connecting a webcam?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 87,
                        question: "What type of device is a MIDI keyboard?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Both Input and Output",
                            "Storage Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question:
                            "Which storage device is used for temporary data storage?",
                        options: ["RAM", "Hard Disk", "SSD", "ROM"],
                        correct: 0,
                    },
                    {
                        id: 89,
                        question: "What is the primary function of a network firewall?",
                        options: [
                            "Data Storage",
                            "Network Security",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "Which device is used for reading QR codes?",
                        options: ["Scanner", "Printer", "Barcode Reader", "OCR"],
                        correct: 2,
                    },
                    {
                        id: 91,
                        question: "What type of storage is a flash drive?",
                        options: ["Volatile", "Non-volatile", "Temporary", "External"],
                        correct: 1,
                    },
                    {
                        id: 92,
                        question: "Which device is used for displaying images?",
                        options: ["Monitor", "Printer", "Scanner", "Keyboard"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "What is the function of a network bridge?",
                        options: [
                            "Data Storage",
                            "Network Segmentation",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 94,
                        question: "Which port is used for connecting a microphone?",
                        options: ["USB", "HDMI", "Audio Jack", "VGA"],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question: "What type of device is a graphics tablet?",
                        options: [
                            "Input Device",
                            "Output Device",
                            "Both Input and Output",
                            "Storage Device",
                        ],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question:
                            "Which storage device is used for high-capacity data storage?",
                        options: ["Floppy Disk", "Hard Disk", "SSD", "ROM"],
                        correct: 1,
                    },
                    {
                        id: 97,
                        question: "What is the primary function of a network repeater?",
                        options: [
                            "Data Storage",
                            "Signal Amplification",
                            "Video Processing",
                            "Audio Processing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 98,
                        question: "Which device is used for capturing video?",
                        options: ["Camera", "Scanner", "Monitor", "Printer"],
                        correct: 0,
                    },
                    {
                        id: 99,
                        question: "What type of port is used for connecting a printer?",
                        options: ["USB", "HDMI", "VGA", "PS/2"],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question: "Which device is used for high-speed data transfer?",
                        options: ["USB 2.0", "USB 3.0", "VGA", "PS/2"],
                        correct: 1,
                    },
                ],
            },
            "Memory hierarchy: cache, RAM, ROM, secondary storage; units": {
                color: "#F97316",
                questions: [
                    {
                        id: 1,
                        question: "Which memory has the fastest access speed?",
                        options: ["Hard Drive", "RAM", "Cache", "ROM"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question: "What is the main characteristic of ROM?",
                        options: [
                            "Fast access",
                            "Non-volatile",
                            "Large capacity",
                            "Frequently updated",
                        ],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question: "Which memory is volatile?",
                        options: ["Hard Disk", "ROM", "RAM", "Flash Drive"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question: "1 Kilobyte (KB) equals:",
                        options: ["1000 bytes", "1024 bytes", "1000 bits", "1024 bits"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "Which storage device has moving parts?",
                        options: ["SSD", "Hard Disk", "Flash Drive", "ROM"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Cache memory is located:",
                        options: [
                            "On motherboard",
                            "Inside CPU",
                            "In Hard disk",
                            "In power supply",
                        ],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question: "RAM stands for:",
                        options: [
                            "Random Access Memory",
                            "Read Access Memory",
                            "Read Allow Memory",
                            "Random Allow Memory",
                        ],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question: "Secondary storage is also known as:",
                        options: [
                            "Main memory",
                            "Auxiliary storage",
                            "Cache memory",
                            "Primary storage",
                        ],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question: "Which memory retains data after power off?",
                        options: ["RAM", "Cache", "ROM", "Register"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question: "L1 cache is:",
                        options: [
                            "Largest cache",
                            "Slowest cache",
                            "Fastest cache",
                            "External cache",
                        ],
                        correct: 2,
                    },
                    {
                        id: 11,
                        question: "1 Gigabyte (GB) equals:",
                        options: ["1024 MB", "1000 MB", "1024 KB", "1000 KB"],
                        correct: 0,
                    },
                    {
                        id: 12,
                        question: "Which is an example of secondary storage?",
                        options: ["RAM", "Cache", "Hard Disk", "CPU Register"],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question: "Memory hierarchy is organized by:",
                        options: ["Size", "Speed and cost", "Capacity only", "Location"],
                        correct: 1,
                    },
                    {
                        id: 14,
                        question: "Cache memory improves:",
                        options: [
                            "Storage capacity",
                            "Data security",
                            "Processing speed",
                            "Power efficiency",
                        ],
                        correct: 2,
                    },
                    {
                        id: 15,
                        question: "Which memory is typically largest in size?",
                        options: ["Cache", "RAM", "ROM", "Hard Disk"],
                        correct: 3,
                    },
                    {
                        id: 16,
                        question: "Cache memory is located:",
                        options: [
                            "Between CPU and RAM",
                            "Inside RAM",
                            "On hard disk",
                            "In ROM",
                        ],
                        correct: 0,
                    },
                    {
                        id: 17,
                        question: "Which storage has the largest capacity?",
                        options: ["Cache", "RAM", "ROM", "Hard Disk"],
                        correct: 3,
                    },
                    {
                        id: 18,
                        question: "What is the typical size of L1 cache?",
                        options: ["32KB-64KB", "1MB-2MB", "4GB-8GB", "1TB-2TB"],
                        correct: 0,
                    },
                    {
                        id: 19,
                        question: "Secondary storage is also called:",
                        options: [
                            "Primary memory",
                            "Virtual memory",
                            "Auxiliary storage",
                            "Cache memory",
                        ],
                        correct: 2,
                    },
                    {
                        id: 20,
                        question: "Which memory is fastest?",
                        options: ["Hard Drive", "RAM", "Cache", "ROM"],
                        correct: 2,
                    },
                    {
                        id: 21,
                        question: "1 Megabyte equals:",
                        options: ["1000 KB", "1024 KB", "1000 bytes", "1024 bytes"],
                        correct: 1,
                    },
                    {
                        id: 22,
                        question: "RAM is a type of:",
                        options: [
                            "Secondary storage",
                            "Non-volatile memory",
                            "Volatile memory",
                            "Permanent storage",
                        ],
                        correct: 2,
                    },
                    {
                        id: 23,
                        question: "Cache memory improves:",
                        options: [
                            "Storage capacity",
                            "Memory size",
                            "Processing speed",
                            "Memory durability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 24,
                        question: "Which memory retains data after power off?",
                        options: ["Cache", "RAM", "ROM", "CPU Register"],
                        correct: 2,
                    },
                    {
                        id: 25,
                        question: "Memory hierarchy is organized by:",
                        options: ["Only size", "Only speed", "Speed and cost", "Only cost"],
                        correct: 2,
                    },
                    {
                        id: 26,
                        question: "What is the purpose of virtual memory?",
                        options: [
                            "Increase RAM speed",
                            "Extend RAM size",
                            "Replace RAM",
                            "Speed up CPU",
                        ],
                        correct: 1,
                    },
                    {
                        id: 27,
                        question: "Which memory is typically smallest in size?",
                        options: ["Cache", "RAM", "ROM", "Hard Disk"],
                        correct: 0,
                    },
                    {
                        id: 28,
                        question: "1 Terabyte equals:",
                        options: ["1000 GB", "1024 GB", "1000 MB", "1024 MB"],
                        correct: 1,
                    },
                    {
                        id: 29,
                        question: "Memory access time is measured in:",
                        options: ["Bytes", "Hertz", "Nanoseconds", "Volts"],
                        correct: 2,
                    },
                    {
                        id: 30,
                        question: "Which storage device uses magnetic media?",
                        options: ["SSD", "Hard Disk", "Flash Drive", "ROM"],
                        correct: 1,
                    },
                    // Add more questions here...
                    {
                        id: 31,
                        question: "Cache hit ratio measures:",
                        options: [
                            "Memory size",
                            "Access success rate",
                            "Storage capacity",
                            "Memory speed",
                        ],
                        correct: 1,
                    },
                    {
                        id: 32,
                        question: "Which memory type is most expensive per byte?",
                        options: ["Cache", "RAM", "ROM", "Hard Disk"],
                        correct: 0,
                    },
                    {
                        id: 33,
                        question: "Memory hierarchy aims to balance:",
                        options: [
                            "Size and cost",
                            "Speed and capacity",
                            "Power and performance",
                            "All of these",
                        ],
                        correct: 3,
                    },
                    {
                        id: 34,
                        question: "Page fault occurs in:",
                        options: ["Cache memory", "Virtual memory", "ROM", "Hard disk"],
                        correct: 1,
                    },
                    {
                        id: 35,
                        question: "SSD stands for:",
                        options: [
                            "Super Speed Drive",
                            "Solid State Drive",
                            "System Storage Device",
                            "Sequential Storage Drive",
                        ],
                        correct: 1,
                    },
                    {
                        id: 36,
                        question: "Which is not a characteristic of cache memory?",
                        options: ["High speed", "Small size", "Low cost", "Non-volatile"],
                        correct: 3,
                    },
                    {
                        id: 37,
                        question: "RAM is directly accessed by:",
                        options: ["Hard Disk", "CPU", "ROM", "Cache"],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question: "Cache memory uses:",
                        options: [
                            "Magnetic storage",
                            "Electronic storage",
                            "Optical storage",
                            "Mechanical storage",
                        ],
                        correct: 1,
                    },
                    {
                        id: 39,
                        question: "Which improves disk performance?",
                        options: ["Disk cache", "RAM", "ROM", "Virtual memory"],
                        correct: 0,
                    },
                    {
                        id: 40,
                        question: "Memory hierarchy has how many levels?",
                        options: ["2", "3", "4", "Multiple"],
                        correct: 3,
                    },
                    {
                        id: 41,
                        question: "The fastest memory is:",
                        options: ["CPU registers", "Cache", "RAM", "ROM"],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "Which memory is programmed at manufacturing?",
                        options: ["RAM", "Cache", "ROM", "Virtual memory"],
                        correct: 2,
                    },
                    {
                        id: 43,
                        question: "DRAM needs:",
                        options: [
                            "No refresh",
                            "Continuous refresh",
                            "One-time refresh",
                            "Weekly refresh",
                        ],
                        correct: 1,
                    },
                    {
                        id: 44,
                        question: "Cache memory is typically made of:",
                        options: ["SRAM", "DRAM", "ROM", "Flash"],
                        correct: 0,
                    },
                    {
                        id: 45,
                        question: "Virtual memory uses:",
                        options: [
                            "Only RAM",
                            "Only disk",
                            "Both RAM and disk",
                            "Only cache",
                        ],
                        correct: 2,
                    },
                    {
                        id: 46,
                        question: "Data in cache is a copy of:",
                        options: ["ROM", "RAM", "Hard disk", "Virtual memory"],
                        correct: 1,
                    },
                    {
                        id: 47,
                        question: "L2 cache is:",
                        options: [
                            "Faster than L1",
                            "Slower than L1",
                            "Equal to L1",
                            "Independent of L1",
                        ],
                        correct: 1,
                    },
                    {
                        id: 48,
                        question: "Which memory has highest cost per bit?",
                        options: ["Cache", "RAM", "ROM", "Hard disk"],
                        correct: 0,
                    },
                    {
                        id: 49,
                        question: "RAM is also called:",
                        options: [
                            "Secondary memory",
                            "Primary memory",
                            "Virtual memory",
                            "Cache memory",
                        ],
                        correct: 1,
                    },
                    {
                        id: 50,
                        question: "Disk striping is used in:",
                        options: ["RAID", "Cache", "Virtual memory", "ROM"],
                        correct: 0,
                    },
                    // Continue adding more questions...
                    {
                        id: 51,
                        question: "Which memory uses error correction?",
                        options: ["ECC RAM", "Basic RAM", "Cache only", "ROM only"],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "Swap space is part of:",
                        options: ["RAM", "Virtual memory", "Cache", "ROM"],
                        correct: 1,
                    },
                    {
                        id: 53,
                        question: "Memory mapped I/O uses:",
                        options: [
                            "Cache addresses",
                            "Memory addresses",
                            "Disk addresses",
                            "ROM addresses",
                        ],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question: "Cache coherence is important in:",
                        options: [
                            "Single CPU systems",
                            "Multiprocessor systems",
                            "Single RAM systems",
                            "ROM systems",
                        ],
                        correct: 1,
                    },
                    {
                        id: 55,
                        question: "Which uses spatial locality?",
                        options: ["Cache memory", "Virtual memory", "ROM", "All of these"],
                        correct: 3,
                    },
                    {
                        id: 56,
                        question: "Temporal locality refers to:",
                        options: [
                            "Space usage",
                            "Time of access",
                            "Memory size",
                            "Cost factor",
                        ],
                        correct: 1,
                    },
                    {
                        id: 57,
                        question: "Write-through is a:",
                        options: [
                            "Cache policy",
                            "RAM policy",
                            "ROM policy",
                            "Disk policy",
                        ],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "Cache line size affects:",
                        options: ["Hit ratio", "Memory size", "Cost", "All of these"],
                        correct: 0,
                    },
                    {
                        id: 59,
                        question: "Direct mapping is used in:",
                        options: ["Cache memory", "Virtual memory", "ROM", "RAM"],
                        correct: 0,
                    },
                    {
                        id: 60,
                        question: "Which memory is byte-addressable?",
                        options: ["Cache", "RAM", "Both Cache and RAM", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 61,
                        question: "Flash memory is a type of:",
                        options: ["RAM", "ROM", "Cache", "Both RAM and ROM"],
                        correct: 1,
                    },
                    {
                        id: 62,
                        question: "EEPROM is:",
                        options: ["Volatile", "Non-volatile", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 63,
                        question: "DDR RAM stands for:",
                        options: [
                            "Double Data Rate",
                            "Dual Data RAM",
                            "Direct Data Rate",
                            "Dynamic Data RAM",
                        ],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question: "Which affects memory latency?",
                        options: ["Clock speed", "Bus width", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 65,
                        question: "Memory interleaving improves:",
                        options: ["Capacity", "Bandwidth", "Cost", "Size"],
                        correct: 1,
                    },
                    {
                        id: 66,
                        question: "Cache miss penalty affects:",
                        options: ["Performance", "Size", "Cost", "Reliability"],
                        correct: 0,
                    },
                    {
                        id: 67,
                        question: "TLB is used in:",
                        options: ["Cache memory", "Virtual memory", "ROM", "Hard disk"],
                        correct: 1,
                    },
                    {
                        id: 68,
                        question: "Page size affects:",
                        options: [
                            "Internal fragmentation",
                            "External fragmentation",
                            "Both",
                            "Neither",
                        ],
                        correct: 0,
                    },
                    {
                        id: 69,
                        question: "Which uses replacement algorithms?",
                        options: ["Cache", "Virtual memory", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 70,
                        question: "Memory protection is implemented in:",
                        options: ["Cache", "MMU", "ROM", "Hard disk"],
                        correct: 1,
                    },
                    // Continue with more questions...
                    {
                        id: 71,
                        question: "Which memory supports DMA?",
                        options: ["Cache", "RAM", "ROM", "All"],
                        correct: 1,
                    },
                    {
                        id: 72,
                        question: "Memory refresh is needed in:",
                        options: ["SRAM", "DRAM", "ROM", "Flash"],
                        correct: 1,
                    },
                    {
                        id: 73,
                        question: "Which is true about ROM?",
                        options: [
                            "Fast writes",
                            "Slow writes",
                            "No writes",
                            "Fast reads and writes",
                        ],
                        correct: 2,
                    },
                    {
                        id: 74,
                        question: "Cache associativity affects:",
                        options: ["Hit rate", "Memory size", "Cost", "All of these"],
                        correct: 0,
                    },
                    {
                        id: 75,
                        question: "Memory segmentation is used for:",
                        options: ["Protection", "Sharing", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 76,
                        question: "Which uses write buffers?",
                        options: ["Cache", "RAM", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "Memory bank switching is used in:",
                        options: ["Modern CPUs", "Old systems", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "Which affects page fault rate?",
                        options: ["Page size", "RAM size", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 79,
                        question: "Memory stride affects:",
                        options: [
                            "Cache performance",
                            "RAM size",
                            "ROM speed",
                            "Disk speed",
                        ],
                        correct: 0,
                    },
                    {
                        id: 80,
                        question: "Which uses polling?",
                        options: ["DMA", "Memory mapped I/O", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 81,
                        question: "Cache pollution refers to:",
                        options: [
                            "Physical dirt",
                            "Unwanted data",
                            "Memory errors",
                            "Hardware faults",
                        ],
                        correct: 1,
                    },
                    {
                        id: 82,
                        question: "Memory thrashing occurs in:",
                        options: ["Cache", "Virtual memory", "ROM", "Hard disk"],
                        correct: 1,
                    },
                    {
                        id: 83,
                        question: "Which memory is most power-efficient?",
                        options: ["SRAM", "DRAM", "ROM", "Flash"],
                        correct: 0,
                    },
                    {
                        id: 84,
                        question: "Memory consistency is important in:",
                        options: ["Single CPU", "Multiple CPU", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 85,
                        question: "Which affects memory bandwidth?",
                        options: ["Bus width", "Clock speed", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 86,
                        question: "Memory hierarchy design affects:",
                        options: ["Performance", "Cost", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 87,
                        question: "Which memory uses wear leveling?",
                        options: ["RAM", "ROM", "Flash", "Cache"],
                        correct: 2,
                    },
                    {
                        id: 88,
                        question: "Memory alignment affects:",
                        options: ["Performance", "Capacity", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 89,
                        question: "Which memory is most reliable?",
                        options: ["RAM", "ROM", "Flash", "Hard disk"],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "Memory compression is used in:",
                        options: ["RAM", "Virtual memory", "Both", "Neither"],
                        correct: 2,
                    },
                    // Add final set of questions...
                    {
                        id: 91,
                        question: "Memory swapping occurs between:",
                        options: ["Cache-RAM", "RAM-Disk", "ROM-RAM", "Cache-ROM"],
                        correct: 1,
                    },
                    {
                        id: 92,
                        question: "Which memory has lowest latency?",
                        options: ["L1 Cache", "L2 Cache", "L3 Cache", "RAM"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "Memory prefetching is used in:",
                        options: ["Cache", "RAM", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 94,
                        question: "Which memory is most scalable?",
                        options: ["Cache", "RAM", "ROM", "Hard disk"],
                        correct: 3,
                    },
                    {
                        id: 95,
                        question: "Memory burst mode improves:",
                        options: ["Latency", "Bandwidth", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 96,
                        question: "Which memory uses error detection?",
                        options: ["All RAM", "ECC RAM", "Only Cache", "Only ROM"],
                        correct: 1,
                    },
                    {
                        id: 97,
                        question: "Memory hierarchy depth affects:",
                        options: ["Performance", "Cost", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 98,
                        question: "Which memory is most flexible?",
                        options: ["RAM", "ROM", "Flash", "Hard disk"],
                        correct: 0,
                    },
                    {
                        id: 99,
                        question: "Memory access pattern affects:",
                        options: ["Cache hits", "RAM size", "ROM speed", "Disk space"],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question: "Which memory requires initialization?",
                        options: ["RAM", "ROM", "Both", "Neither"],
                        correct: 0,
                    },
                ],
            },
            "Mixed Computer Topics": {
                color: "#4F46E5",
                questions: [
                    {
                        id: 1,
                        question: "Which memory has the fastest access speed?",
                        options: ["Hard Drive", "RAM", "Cache", "ROM"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question: "What type of malware demands payment to restore access?",
                        options: ["Virus", "Worm", "Ransomware", "Trojan"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question: "In binary, what is 1 + 1?",
                        options: ["0", "1", "10", "11"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question: "Which protocol is used for secure web browsing?",
                        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "What does CPU stand for?",
                        options: [
                            "Central Program Unit",
                            "Central Processing Unit",
                            "Computer Personal Unit",
                            "Central Protocol Unit",
                        ],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Which is not a type of computer network?",
                        options: ["LAN", "WAN", "MAN", "CAN"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question: "What is the brain of the computer?",
                        options: ["RAM", "CPU", "Hard Drive", "Motherboard"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "Which SQL command is used to retrieve data?",
                        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question: "What is the purpose of a firewall?",
                        options: [
                            "Virus scanning",
                            "Network security",
                            "Data backup",
                            "File sharing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question: "Which Excel function finds the largest value?",
                        options: ["MAX", "TOP", "LARGE", "HIGH"],
                        correct: 0,
                    },
                    {
                        id: 11,
                        question: "What does HTML stand for?",
                        options: [
                            "High Text Markup Language",
                            "Hypertext Markup Language",
                            "Hyper Transfer Markup Language",
                            "High Transfer Markup Language",
                        ],
                        correct: 1,
                    },
                    {
                        id: 12,
                        question: "Which device connects different networks?",
                        options: ["Hub", "Switch", "Router", "Repeater"],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question: "What is a byte?",
                        options: ["4 bits", "8 bits", "16 bits", "32 bits"],
                        correct: 1,
                    },
                    {
                        id: 14,
                        question: "Which is not an output device?",
                        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                        correct: 2,
                    },
                    {
                        id: 15,
                        question: "What is the default port for HTTP?",
                        options: ["80", "443", "21", "25"],
                        correct: 0,
                    },
                    {
                        id: 16,
                        question: "Which generation of computers used transistors?",
                        options: ["First", "Second", "Third", "Fourth"],
                        correct: 1,
                    },
                    {
                        id: 17,
                        question: "What does OS stand for?",
                        options: [
                            "Open Software",
                            "Operating System",
                            "Output System",
                            "Order of Sequence",
                        ],
                        correct: 1,
                    },
                    {
                        id: 18,
                        question: "Which is not a web browser?",
                        options: ["Chrome", "Firefox", "Excel", "Safari"],
                        correct: 2,
                    },
                    {
                        id: 19,
                        question: "What is the purpose of DNS?",
                        options: [
                            "File transfer",
                            "Name resolution",
                            "Email delivery",
                            "Web hosting",
                        ],
                        correct: 1,
                    },
                    {
                        id: 20,
                        question: "Which device stores data permanently?",
                        options: ["RAM", "Cache", "Hard Drive", "CPU Register"],
                        correct: 2,
                    },
                    {
                        id: 21,
                        question: "What is phishing?",
                        options: [
                            "Virus attack",
                            "Identity theft attempt",
                            "Hardware failure",
                            "Network error",
                        ],
                        correct: 1,
                    },
                    {
                        id: 22,
                        question: "Which topology has a central hub?",
                        options: ["Bus", "Star", "Ring", "Mesh"],
                        correct: 1,
                    },
                    {
                        id: 23,
                        question: "What is a compiler?",
                        options: [
                            "Antivirus",
                            "Translator",
                            "Operating System",
                            "Database",
                        ],
                        correct: 1,
                    },
                    {
                        id: 24,
                        question: "Which port is used for HTTPS?",
                        options: ["80", "443", "21", "25"],
                        correct: 1,
                    },
                    {
                        id: 25,
                        question: "What type of software is Excel?",
                        options: [
                            "System Software",
                            "Application Software",
                            "Utility Software",
                            "Operating System",
                        ],
                        correct: 1,
                    },
                    {
                        id: 26,
                        question: "Which is not a data type?",
                        options: ["Integer", "Float", "Window", "String"],
                        correct: 2,
                    },
                    {
                        id: 27,
                        question: "What does PDF stand for?",
                        options: [
                            "Personal Document Format",
                            "Portable Document Format",
                            "Printed Document Format",
                            "Public Document Format",
                        ],
                        correct: 1,
                    },
                    {
                        id: 28,
                        question: "Which device is both input and output?",
                        options: ["Keyboard", "Monitor", "Touchscreen", "Printer"],
                        correct: 2,
                    },
                    {
                        id: 29,
                        question: "What is RAM?",
                        options: [
                            "Read Access Memory",
                            "Random Access Memory",
                            "Real Access Memory",
                            "Rapid Access Memory",
                        ],
                        correct: 1,
                    },
                    {
                        id: 30,
                        question: "Which network is smallest?",
                        options: ["PAN", "LAN", "MAN", "WAN"],
                        correct: 0,
                    },
                    {
                        id: 31,
                        question: "What does URL stand for?",
                        options: [
                            "Universal Resource Locator",
                            "Uniform Resource Locator",
                            "United Resource Link",
                            "Universal Resource Link",
                        ],
                        correct: 1,
                    },
                    {
                        id: 32,
                        question: "Which is not an antivirus software?",
                        options: ["Norton", "McAfee", "Excel", "Avast"],
                        correct: 2,
                    },
                    {
                        id: 33,
                        question: "What is a cookie in web terms?",
                        options: ["Virus", "Data file", "Program", "Hardware"],
                        correct: 1,
                    },
                    {
                        id: 34,
                        question: "Which device measures mouse movement?",
                        options: ["Trackball", "Sensor", "Counter", "Timer"],
                        correct: 0,
                    },
                    {
                        id: 35,
                        question: "What is spam?",
                        options: ["Virus", "Unwanted email", "Software", "Hardware"],
                        correct: 1,
                    },
                    {
                        id: 36,
                        question: "Which file format is for compressed files?",
                        options: ["DOC", "ZIP", "PDF", "TXT"],
                        correct: 1,
                    },
                    {
                        id: 37,
                        question: "What does ISP stand for?",
                        options: [
                            "Internet Service Protocol",
                            "Internet Service Provider",
                            "Internet System Protocol",
                            "Internet System Provider",
                        ],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question: "Which is not an email service?",
                        options: ["Gmail", "Outlook", "Firefox", "Yahoo"],
                        correct: 2,
                    },
                    {
                        id: 39,
                        question: "What is a pixel?",
                        options: ["Color", "Picture element", "Resolution", "Brightness"],
                        correct: 1,
                    },
                    {
                        id: 40,
                        question: "Which is not an operating system?",
                        options: ["Windows", "Linux", "Excel", "macOS"],
                        correct: 2,
                    },
                    {
                        id: 41,
                        question: "What is a LAN?",
                        options: [
                            "Local Area Network",
                            "Large Area Network",
                            "Long Area Network",
                            "Linear Area Network",
                        ],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "Which is not a programming language?",
                        options: ["Java", "Python", "Router", "C++"],
                        correct: 2,
                    },
                    {
                        id: 43,
                        question: "What does USB stand for?",
                        options: [
                            "Universal Serial Bus",
                            "United Serial Bus",
                            "Universal System Bus",
                            "United System Bus",
                        ],
                        correct: 0,
                    },
                    {
                        id: 44,
                        question: "Which device converts digital to analog signals?",
                        options: ["Router", "Modem", "Switch", "Hub"],
                        correct: 1,
                    },
                    {
                        id: 45,
                        question: "What is a backup?",
                        options: ["Antivirus", "Copy of data", "Network type", "Software"],
                        correct: 1,
                    },
                    {
                        id: 46,
                        question: "Which is not a storage device?",
                        options: ["Hard Drive", "DVD", "CPU", "Flash Drive"],
                        correct: 2,
                    },
                    {
                        id: 47,
                        question: "What is cybersecurity?",
                        options: [
                            "Internet speed",
                            "Online protection",
                            "Web browser",
                            "Email service",
                        ],
                        correct: 1,
                    },
                    {
                        id: 48,
                        question: "Which port is for PS/2 devices?",
                        options: ["USB", "Serial", "PS/2", "HDMI"],
                        correct: 2,
                    },
                    {
                        id: 49,
                        question: "What is a firewall?",
                        options: [
                            "Antivirus",
                            "Security barrier",
                            "Browser",
                            "Operating System",
                        ],
                        correct: 1,
                    },
                    {
                        id: 50,
                        question: "Which is not a valid IP address?",
                        options: ["192.168.1.1", "256.1.2.3", "10.0.0.1", "172.16.0.1"],
                        correct: 1,
                    },
                    {
                        id: 51,
                        question: "What does GUI stand for?",
                        options: [
                            "General User Interface",
                            "Graphical User Interface",
                            "General Utility Interface",
                            "Graphical Utility Interface",
                        ],
                        correct: 1,
                    },
                    {
                        id: 52,
                        question: "Which is not a file extension for images?",
                        options: ["JPG", "PNG", "DOC", "GIF"],
                        correct: 2,
                    },
                    {
                        id: 53,
                        question: "What is malware?",
                        options: [
                            "Hardware",
                            "Malicious software",
                            "Network type",
                            "File system",
                        ],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question: "Which device is not for storage?",
                        options: ["HDD", "SSD", "RAM", "CPU"],
                        correct: 3,
                    },
                    {
                        id: 55,
                        question: "What is a bit?",
                        options: ["File", "Binary digit", "Program", "Protocol"],
                        correct: 1,
                    },
                    {
                        id: 56,
                        question: "Which is not a search engine?",
                        options: ["Google", "Bing", "Excel", "Yahoo"],
                        correct: 2,
                    },
                    {
                        id: 57,
                        question: "What is encryption?",
                        options: [
                            "Compression",
                            "Data protection",
                            "File format",
                            "Network type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 58,
                        question: "Which is not a database type?",
                        options: ["MySQL", "Oracle", "Firefox", "MongoDB"],
                        correct: 2,
                    },
                    {
                        id: 59,
                        question: "What is a virus?",
                        options: [
                            "Hardware",
                            "Malicious program",
                            "Network type",
                            "File system",
                        ],
                        correct: 1,
                    },
                    {
                        id: 60,
                        question: "Which is not a keyboard key?",
                        options: ["Alt", "Ctrl", "Mouse", "Shift"],
                        correct: 2,
                    },
                    {
                        id: 61,
                        question: "What does VPN stand for?",
                        options: [
                            "Virtual Private Network",
                            "Virtual Public Network",
                            "Virtual Protocol Network",
                            "Virtual Personal Network",
                        ],
                        correct: 0,
                    },
                    {
                        id: 62,
                        question: "Which is not a network device?",
                        options: ["Router", "Switch", "Excel", "Hub"],
                        correct: 2,
                    },
                    {
                        id: 63,
                        question: "What is a driver?",
                        options: [
                            "Hardware",
                            "Software controller",
                            "Network type",
                            "File system",
                        ],
                        correct: 1,
                    },
                    {
                        id: 64,
                        question: "Which is not a valid file path?",
                        options: [
                            "C:\\Program Files",
                            "D:\\Games",
                            "H:/?Invalid",
                            "E:\\Data",
                        ],
                        correct: 2,
                    },
                    {
                        id: 65,
                        question: "What is cache memory?",
                        options: [
                            "Main memory",
                            "Temporary storage",
                            "Permanent storage",
                            "Virtual memory",
                        ],
                        correct: 1,
                    },
                    {
                        id: 66,
                        question: "Which is not an input method?",
                        options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
                        correct: 2,
                    },
                    {
                        id: 67,
                        question: "What is bandwidth?",
                        options: [
                            "Memory size",
                            "Data transfer rate",
                            "Screen size",
                            "File size",
                        ],
                        correct: 1,
                    },
                    {
                        id: 68,
                        question: "Which is not a valid color code?",
                        options: ["#FFF", "#000", "#XYZ", "#123"],
                        correct: 2,
                    },
                    {
                        id: 69,
                        question: "What is a pixel?",
                        options: ["Color", "Picture element", "File type", "Memory unit"],
                        correct: 1,
                    },
                    {
                        id: 70,
                        question: "Which is not a file compression format?",
                        options: ["ZIP", "RAR", "EXE", "7Z"],
                        correct: 2,
                    },
                    {
                        id: 71,
                        question: "What is BIOS?",
                        options: [
                            "Antivirus",
                            "Basic Input/Output System",
                            "File system",
                            "Network protocol",
                        ],
                        correct: 1,
                    },
                    {
                        id: 72,
                        question: "Which is not a valid email address?",
                        options: [
                            "user@domain.com",
                            "user.name@site.com",
                            "user@site",
                            "name@website.org",
                        ],
                        correct: 2,
                    },
                    {
                        id: 73,
                        question: "What is a port number?",
                        options: [
                            "IP address",
                            "Service identifier",
                            "File size",
                            "Memory address",
                        ],
                        correct: 1,
                    },
                    {
                        id: 74,
                        question: "Which is not a valid screen resolution?",
                        options: ["1920x1080", "1366x768", "abc x xyz", "800x600"],
                        correct: 2,
                    },
                    {
                        id: 75,
                        question: "What is a protocol?",
                        options: [
                            "File type",
                            "Communication rules",
                            "Memory type",
                            "Hardware",
                        ],
                        correct: 1,
                    },
                    {
                        id: 76,
                        question: "Which is not a wireless technology?",
                        options: ["WiFi", "Bluetooth", "Ethernet cable", "NFC"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "What is a domain name?",
                        options: [
                            "IP address",
                            "Website address",
                            "File path",
                            "Memory location",
                        ],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "Which is not a valid file size?",
                        options: ["10 MB", "5 GB", "3 XB", "2 TB"],
                        correct: 2,
                    },
                    {
                        id: 79,
                        question: "What is a folder?",
                        options: [
                            "File type",
                            "Container for files",
                            "Network type",
                            "Memory type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 80,
                        question: "Which is not a valid username character?",
                        options: ["Letters", "Numbers", "Spaces", "Underscore"],
                        correct: 2,
                    },
                    {
                        id: 81,
                        question: "What is a shortcut?",
                        options: [
                            "File copy",
                            "Link to file/program",
                            "Memory type",
                            "Network type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 82,
                        question: "Which is not a video format?",
                        options: ["MP4", "AVI", "DOC", "MOV"],
                        correct: 2,
                    },
                    {
                        id: 83,
                        question: "What is a server?",
                        options: [
                            "Network device",
                            "Service provider",
                            "File type",
                            "Memory type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 84,
                        question: "Which is not a valid password?",
                        options: ["Pass123!", "Abc@123", " ", "User_1"],
                        correct: 2,
                    },
                    {
                        id: 85,
                        question: "What is a plug and play device?",
                        options: [
                            "Self-configuring",
                            "Manual setup",
                            "Network type",
                            "Memory type",
                        ],
                        correct: 0,
                    },
                    {
                        id: 86,
                        question: "Which is not an audio format?",
                        options: ["MP3", "WAV", "EXE", "AAC"],
                        correct: 2,
                    },
                    {
                        id: 87,
                        question: "What is a gateway?",
                        options: [
                            "Network entrance",
                            "File type",
                            "Memory type",
                            "Hardware",
                        ],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question: "Which is not a valid IP port?",
                        options: ["80", "443", "65536", "8080"],
                        correct: 2,
                    },
                    {
                        id: 89,
                        question: "What is a macro?",
                        options: [
                            "File type",
                            "Automated task",
                            "Network type",
                            "Memory type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 90,
                        question: "Which is not a valid file attribute?",
                        options: ["Read-only", "Hidden", "Flying", "System"],
                        correct: 2,
                    },
                    {
                        id: 91,
                        question: "What is a CPU core?",
                        options: [
                            "Memory unit",
                            "Processing unit",
                            "Storage unit",
                            "Network unit",
                        ],
                        correct: 1,
                    },
                    {
                        id: 92,
                        question: "Which is not a valid monitor type?",
                        options: ["LCD", "LED", "WATER", "OLED"],
                        correct: 2,
                    },
                    {
                        id: 93,
                        question: "What is a directory?",
                        options: ["File type", "Folder", "Network type", "Memory type"],
                        correct: 1,
                    },
                    {
                        id: 94,
                        question: "Which is not a valid keyboard layout?",
                        options: ["QWERTY", "AZERTY", "ABCDEF", "DVORAK"],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question: "What is a bootloader?",
                        options: [
                            "Program starter",
                            "File type",
                            "Network type",
                            "Memory type",
                        ],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "Which is not a pointer device?",
                        options: ["Mouse", "Trackpad", "Speaker", "Stylus"],
                        correct: 2,
                    },
                    {
                        id: 97,
                        question: "What is overclocking?",
                        options: [
                            "Time setting",
                            "Speed increase",
                            "File copying",
                            "Network type",
                        ],
                        correct: 1,
                    },
                    {
                        id: 98,
                        question: "Which is not a valid screen type?",
                        options: ["Touch", "Non-touch", "No-screen", "CRT"],
                        correct: 2,
                    },
                    {
                        id: 99,
                        question: "What is a partition?",
                        options: [
                            "Disk division",
                            "File type",
                            "Network type",
                            "Memory type",
                        ],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question: "Which is not a valid power supply?",
                        options: ["ATX", "SFX", "WATER", "ITX"],
                        correct: 2,
                    },
                ],
            },
            NoSQL: {
                color: "#6EE7B7",
                questions: [
                    {
                        id: 1,
                        question: "Which NoSQL database is document-oriented?",
                        options: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "Which algorithm is used for process scheduling in Operating Systems?",
                        options: ["FCFS", "RSA", "AES", "CRC"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "Which model is also known as the Verification and Validation model?",
                        options: ["Waterfall", "V-Model", "Spiral", "Prototype"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "In Networking, which layer is responsible for logical addressing?",
                        options: [
                            "Physical Layer",
                            "Data Link Layer",
                            "Network Layer",
                            "Transport Layer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question: "Which normal form removes partial dependency?",
                        options: ["1NF", "2NF", "3NF", "BCNF"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "Which is the first activity in Software Development Life Cycle (SDLC)?",
                        options: [
                            "Coding",
                            "Testing",
                            "Requirement Analysis",
                            "Maintenance",
                        ],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question: "Which protocol is used to send emails?",
                        options: ["HTTP", "SMTP", "FTP", "SNMP"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "Which of the following is a non-preemptive scheduling algorithm?",
                        options: [
                            "Round Robin",
                            "Shortest Job First (SJF)",
                            "Priority Scheduling",
                            "Multilevel Queue",
                        ],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question: "Which key uniquely identifies a record in a table?",
                        options: [
                            "Foreign Key",
                            "Primary Key",
                            "Super Key",
                            "Composite Key",
                        ],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question: "In Spiral model, each loop represents?",
                        options: ["Coding", "Testing", "Phase", "Module"],
                        correct: 2,
                    },
                    {
                        id: 11,
                        question: "Which device connects two different networks?",
                        options: ["Switch", "Hub", "Router", "Repeater"],
                        correct: 2,
                    },
                    {
                        id: 12,
                        question: "Which scheduling algorithm may cause starvation?",
                        options: ["FCFS", "SJF", "Round Robin", "FIFO"],
                        correct: 1,
                    },
                    {
                        id: 13,
                        question:
                            "Which type of testing checks the entire system as a whole?",
                        options: [
                            "Unit Testing",
                            "System Testing",
                            "Integration Testing",
                            "Regression Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 14,
                        question: "Which SQL command is used to remove a table?",
                        options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
                        correct: 2,
                    },
                    {
                        id: 15,
                        question: "Which OS is used in mobile devices widely?",
                        options: ["Windows", "Linux", "Android", "Unix"],
                        correct: 2,
                    },
                    {
                        id: 16,
                        question: "Which protocol is connection-oriented?",
                        options: ["UDP", "IP", "TCP", "ICMP"],
                        correct: 2,
                    },
                    {
                        id: 17,
                        question: "Which data structure is used in recursion?",
                        options: ["Queue", "Stack", "Array", "Linked List"],
                        correct: 1,
                    },
                    {
                        id: 18,
                        question:
                            "Which SDLC model is best for large projects with unclear requirements?",
                        options: ["Waterfall", "Spiral", "V-Model", "Incremental"],
                        correct: 1,
                    },
                    {
                        id: 19,
                        question: "Which of the following is a DDL command?",
                        options: ["INSERT", "UPDATE", "DELETE", "CREATE"],
                        correct: 3,
                    },
                    {
                        id: 20,
                        question: "Which network topology has a single point of failure?",
                        options: ["Bus", "Ring", "Star", "Mesh"],
                        correct: 2,
                    },
                    {
                        id: 21,
                        question:
                            "Which OS concept allows multiple users to use the system simultaneously?",
                        options: [
                            "Multiprogramming",
                            "Multithreading",
                            "Time Sharing",
                            "Batch Processing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 22,
                        question: "Which is NOT a type of software maintenance?",
                        options: ["Corrective", "Adaptive", "Preventive", "Preemptive"],
                        correct: 3,
                    },
                    {
                        id: 23,
                        question: "Which protocol translates domain names to IP addresses?",
                        options: ["HTTP", "FTP", "DNS", "SMTP"],
                        correct: 2,
                    },
                    {
                        id: 24,
                        question:
                            "Which level of data abstraction describes how the data is actually stored?",
                        options: [
                            "Physical Level",
                            "Logical Level",
                            "View Level",
                            "Conceptual Level",
                        ],
                        correct: 0,
                    },
                    {
                        id: 25,
                        question:
                            "Which type of testing ensures new changes don’t break existing functionality?",
                        options: [
                            "Unit Testing",
                            "System Testing",
                            "Regression Testing",
                            "Integration Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 26,
                        question: "Which OS manages deadlock using the Banker's Algorithm?",
                        options: ["Windows", "Linux", "Unix", "All of the above"],
                        correct: 3,
                    },
                    {
                        id: 27,
                        question: "Which SDLC model delivers software in small parts?",
                        options: ["Waterfall", "Prototype", "Incremental", "V-Model"],
                        correct: 2,
                    },
                    {
                        id: 28,
                        question: "Which device operates at Data Link Layer?",
                        options: ["Router", "Switch", "Hub", "Gateway"],
                        correct: 1,
                    },
                    {
                        id: 29,
                        question:
                            "Which command is used to remove all rows from a table but keeps the structure?",
                        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
                        correct: 2,
                    },
                    {
                        id: 30,
                        question: "Which of the following is a real-time OS?",
                        options: ["Linux", "Windows", "VxWorks", "MS-DOS"],
                        correct: 2,
                    },
                    {
                        id: 31,
                        question: "Which network device works on all 7 layers of OSI?",
                        options: ["Hub", "Switch", "Gateway", "Bridge"],
                        correct: 2,
                    },
                    {
                        id: 32,
                        question:
                            "Which technique avoids deadlock by pre-allocating resources?",
                        options: [
                            "Preemption",
                            "Banker’s Algorithm",
                            "Hold and Wait",
                            "Safe State",
                        ],
                        correct: 1,
                    },
                    {
                        id: 33,
                        question: "Which SQL clause is used to group rows?",
                        options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
                        correct: 2,
                    },
                    {
                        id: 34,
                        question:
                            "Which software model uses RAD (Rapid Application Development)?",
                        options: ["Waterfall", "Agile", "Spiral", "Prototyping"],
                        correct: 3,
                    },
                    {
                        id: 35,
                        question: "Which network topology is used in Ethernet?",
                        options: ["Ring", "Bus", "Star", "Mesh"],
                        correct: 1,
                    },
                    {
                        id: 36,
                        question:
                            "Which OS concept creates the illusion of multiple processes running?",
                        options: [
                            "Scheduling",
                            "Virtual Memory",
                            "Multitasking",
                            "Deadlock",
                        ],
                        correct: 2,
                    },
                    {
                        id: 37,
                        question: "Which testing is performed by end users?",
                        options: [
                            "Unit Testing",
                            "System Testing",
                            "Acceptance Testing",
                            "Regression Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 38,
                        question: "Which SQL command is used to change table structure?",
                        options: ["ALTER", "UPDATE", "DROP", "TRUNCATE"],
                        correct: 0,
                    },
                    {
                        id: 39,
                        question: "Which OSI layer is responsible for encryption?",
                        options: [
                            "Application Layer",
                            "Session Layer",
                            "Presentation Layer",
                            "Transport Layer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 40,
                        question:
                            "Which process scheduling algorithm gives each process equal time?",
                        options: ["SJF", "FCFS", "Round Robin", "Priority Scheduling"],
                        correct: 2,
                    },
                    {
                        id: 41,
                        question:
                            "Which symbol is used in E-R diagrams to represent attributes?",
                        options: ["Rectangle", "Ellipse", "Diamond", "Line"],
                        correct: 1,
                    },
                    {
                        id: 42,
                        question: "Which software model uses sprints and iterations?",
                        options: ["Waterfall", "Agile", "Spiral", "V-Model"],
                        correct: 1,
                    },
                    {
                        id: 43,
                        question: "Which addressing is used by IPv6?",
                        options: ["32-bit", "64-bit", "128-bit", "256-bit"],
                        correct: 2,
                    },
                    {
                        id: 44,
                        question: "Which type of OS is MS-DOS?",
                        options: ["Multi-user", "Single-user", "Distributed", "Real-time"],
                        correct: 1,
                    },
                    {
                        id: 45,
                        question: "Which SQL function is used to count rows?",
                        options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
                        correct: 2,
                    },
                    {
                        id: 46,
                        question: "Which is a functional requirement of software?",
                        options: [
                            "Performance",
                            "Scalability",
                            "User Authentication",
                            "Usability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 47,
                        question: "Which topology provides the highest fault tolerance?",
                        options: ["Bus", "Star", "Ring", "Mesh"],
                        correct: 3,
                    },
                    {
                        id: 48,
                        question:
                            "Which OSI layer establishes, manages, and terminates sessions?",
                        options: [
                            "Session Layer",
                            "Transport Layer",
                            "Network Layer",
                            "Data Link Layer",
                        ],
                        correct: 0,
                    },
                    {
                        id: 49,
                        question: "Which SQL command is used to remove duplicate rows?",
                        options: ["UNIQUE", "PRIMARY KEY", "DISTINCT", "DELETE"],
                        correct: 2,
                    },
                    {
                        id: 50,
                        question: "Which model emphasizes risk analysis at each phase?",
                        options: ["Waterfall", "V-Model", "Spiral", "Incremental"],
                        correct: 2,
                    },
                    {
                        id: 51,
                        question: "Which NoSQL database is best for hierarchical data?",
                        options: ["MongoDB", "Redis", "Neo4j", "Cassandra"],
                        correct: 2,
                    },
                    {
                        id: 52,
                        question: "CouchDB uses which protocol for communication?",
                        options: ["TCP", "HTTP", "UDP", "FTP"],
                        correct: 1,
                    },
                    {
                        id: 53,
                        question: "Which NoSQL database is written in Erlang?",
                        options: ["MongoDB", "CouchDB", "Redis", "Cassandra"],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question: "What is the default port for MongoDB?",
                        options: ["27017", "3306", "6379", "28015"],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question: "Which NoSQL database uses CQL?",
                        options: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
                        correct: 2,
                    },
                    {
                        id: 56,
                        question: "What is a document in MongoDB?",
                        options: ["XML file", "JSON object", "Text file", "Binary file"],
                        correct: 1,
                    },
                    {
                        id: 57,
                        question: "Redis primarily stores data in:",
                        options: ["Memory", "Disk", "Both", "Cloud"],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "Which NoSQL database is best for real-time analytics?",
                        options: ["MongoDB", "Cassandra", "Redis", "Neo4j"],
                        correct: 1,
                    },
                    {
                        id: 59,
                        question: "Neo4j is optimized for:",
                        options: [
                            "Key-value pairs",
                            "Documents",
                            "Graph relationships",
                            "Column families",
                        ],
                        correct: 2,
                    },
                    {
                        id: 60,
                        question: "Which database uses eventual consistency by default?",
                        options: ["MySQL", "MongoDB", "Cassandra", "Redis"],
                        correct: 2,
                    },
                    {
                        id: 61,
                        question: "What is the primary key in MongoDB called?",
                        options: ["id", "_id", "primary", "key"],
                        correct: 1,
                    },
                    {
                        id: 62,
                        question: "Which NoSQL database uses Cypher query language?",
                        options: ["MongoDB", "Cassandra", "Redis", "Neo4j"],
                        correct: 3,
                    },
                    {
                        id: 63,
                        question: "What is sharding in NoSQL?",
                        options: ["Backup", "Partitioning", "Indexing", "Caching"],
                        correct: 1,
                    },
                    {
                        id: 64,
                        question: "Redis is best suited for:",
                        options: ["Caching", "Analytics", "Document storage", "Graph data"],
                        correct: 0,
                    },
                    {
                        id: 65,
                        question: "Which NoSQL database supports ACID transactions?",
                        options: ["Redis", "MongoDB", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 66,
                        question: "What is a collection in MongoDB?",
                        options: ["Table", "Row", "Database", "Group of documents"],
                        correct: 3,
                    },
                    {
                        id: 67,
                        question: "Cassandra is optimized for:",
                        options: ["Reads", "Writes", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 68,
                        question: "Which is NOT a NoSQL data model?",
                        options: ["Document", "Key-value", "Relational", "Graph"],
                        correct: 2,
                    },
                    {
                        id: 69,
                        question: "MongoDB uses which format for queries?",
                        options: ["SQL", "JSON", "XML", "Text"],
                        correct: 1,
                    },
                    {
                        id: 70,
                        question: "Which NoSQL database is column-oriented?",
                        options: ["MongoDB", "Redis", "Neo4j", "Cassandra"],
                        correct: 3,
                    },
                    {
                        id: 71,
                        question: "What is replication in NoSQL?",
                        options: [
                            "Data backup",
                            "Data copying",
                            "Data deletion",
                            "Data compression",
                        ],
                        correct: 1,
                    },
                    {
                        id: 72,
                        question: "Redis data types include:",
                        options: ["Strings", "Lists", "Sets", "All of these"],
                        correct: 3,
                    },
                    {
                        id: 73,
                        question: "Which NoSQL database is schema-free?",
                        options: ["MongoDB", "Cassandra", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 74,
                        question: "Neo4j is written in:",
                        options: ["JavaScript", "Python", "Java", "C++"],
                        correct: 2,
                    },
                    {
                        id: 75,
                        question: "CAP theorem allows a system to have:",
                        options: [
                            "All three properties",
                            "Only two properties",
                            "Only one property",
                            "No properties",
                        ],
                        correct: 1,
                    },
                    {
                        id: 76,
                        question: "MongoDB scaling is:",
                        options: ["Vertical only", "Horizontal only", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "Which NoSQL database uses LSM trees?",
                        options: ["MongoDB", "Cassandra", "Redis", "Neo4j"],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question: "What is a node in Neo4j?",
                        options: ["Database", "Table", "Entity", "Document"],
                        correct: 2,
                    },
                    {
                        id: 79,
                        question: "Redis persistence options include:",
                        options: ["RDB", "AOF", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 80,
                        question: "Cassandra's architecture is:",
                        options: [
                            "Master-slave",
                            "Peer-to-peer",
                            "Client-server",
                            "Centralized",
                        ],
                        correct: 1,
                    },
                    {
                        id: 81,
                        question: "Which NoSQL database uses master-slave replication?",
                        options: ["MongoDB", "Cassandra", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 82,
                        question: "What is a keyspace in Cassandra?",
                        options: ["Index", "Database", "Table", "Column"],
                        correct: 1,
                    },
                    {
                        id: 83,
                        question: "Neo4j supports:",
                        options: ["ACID properties", "BASE properties", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 84,
                        question: "Redis is:",
                        options: ["Single-threaded", "Multi-threaded", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 85,
                        question: "MongoDB indexes are stored in:",
                        options: ["Memory", "Disk", "Both", "Neither"],
                        correct: 1,
                    },
                    {
                        id: 86,
                        question: "Which NoSQL database is best for social networks?",
                        options: ["MongoDB", "Redis", "Neo4j", "Cassandra"],
                        correct: 2,
                    },
                    {
                        id: 87,
                        question: "Cassandra written in:",
                        options: ["Java", "Python", "C++", "JavaScript"],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question: "Redis data is stored in:",
                        options: ["JSON", "Key-value pairs", "Documents", "Graphs"],
                        correct: 1,
                    },
                    {
                        id: 89,
                        question: "MongoDB supports which type of indexes?",
                        options: ["B-tree", "Hash", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 90,
                        question: "What is a relationship in Neo4j called?",
                        options: ["Link", "Edge", "Connection", "Path"],
                        correct: 1,
                    },
                    {
                        id: 91,
                        question: "Cassandra's consistency level refers to:",
                        options: ["Read operations", "Write operations", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 92,
                        question: "Redis best use case is:",
                        options: [
                            "Session management",
                            "Big data analytics",
                            "Document storage",
                            "Graph processing",
                        ],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "MongoDB's aggregation framework is similar to:",
                        options: ["SQL GROUP BY", "SQL JOIN", "SQL WHERE", "SQL ORDER BY"],
                        correct: 0,
                    },
                    {
                        id: 94,
                        question: "Which NoSQL database uses gossip protocol?",
                        options: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question: "Neo4j traversal is similar to:",
                        options: ["SQL JOIN", "SQL WHERE", "SQL GROUP BY", "SQL ORDER BY"],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "Redis supports:",
                        options: ["Pub/Sub", "Transactions", "Both", "Neither"],
                        correct: 2,
                    },
                    {
                        id: 97,
                        question: "MongoDB's default consistency model is:",
                        options: ["Strong", "Eventual", "Both", "Neither"],
                        correct: 0,
                    },
                    {
                        id: 98,
                        question: "Cassandra's write path includes:",
                        options: ["Commit log", "Memtable", "SSTable", "All of these"],
                        correct: 3,
                    },
                    {
                        id: 99,
                        question: "Neo4j's Cypher is inspired by:",
                        options: ["SQL", "ASCII art", "XML", "JSON"],
                        correct: 1,
                    },
                    {
                        id: 100,
                        question: "Which NoSQL database is fastest for reads?",
                        options: ["MongoDB", "Redis", "Cassandra", "Neo4j"],
                        correct: 1,
                    },
                ],
            },
        },
    },
    "Number Systems & Digital Logic": {
        color: "#3B82F6",
        subtopics: {
            "Number systems: binary, decimal, octal, hexadecimal; conversions": {
                color: "#3B82F6",
                questions: [
                    {
                        id: 1,
                        question: "What is the decimal equivalent of binary 1010?",
                        options: ["8", "10", "12", "14"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question: "The hexadecimal number system has base:",
                        options: ["2", "8", "10", "16"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question: "The binary equivalent of decimal 25 is:",
                        options: ["11001", "11010", "11011", "11100"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question: "The octal number system uses digits from:",
                        options: ["0-7", "0-8", "1-8", "1-7"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question: "What is the hexadecimal equivalent of decimal 15?",
                        options: ["E", "F", "D", "A"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Binary 1111 is equal to decimal:",
                        options: ["15", "14", "16", "13"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question: "The octal equivalent of decimal 64 is:",
                        options: ["100", "80", "70", "60"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question: "What is the decimal equivalent of hex A5?",
                        options: ["165", "160", "155", "170"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question: "Binary 10000 is equal to decimal:",
                        options: ["16", "32", "8", "24"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question: "The hexadecimal symbol for decimal 12 is:",
                        options: ["A", "B", "C", "D"],
                        correct: 2,
                    },
                    {
                        id: 11,
                        question: "Octal 77 is equal to decimal:",
                        options: ["63", "64", "65", "66"],
                        correct: 0,
                    },
                    {
                        id: 12,
                        question: "Which is NOT a valid hexadecimal digit?",
                        options: ["A", "G", "E", "F"],
                        correct: 1,
                    },
                    {
                        id: 13,
                        question: "The binary equivalent of octal 10 is:",
                        options: ["1000", "1010", "1001", "1011"],
                        correct: 0,
                    },
                    {
                        id: 14,
                        question: "Decimal 100 in binary is:",
                        options: ["1100100", "1100110", "1100011", "1100101"],
                        correct: 0,
                    },
                    {
                        id: 15,
                        question: "The hexadecimal equivalent of binary 1111 is:",
                        options: ["F", "E", "D", "A"],
                        correct: 0,
                    },
                    {
                        id: 16,
                        question:
                            "How many bits are needed to represent decimal 15 in binary?",
                        options: ["3", "4", "5", "6"],
                        correct: 1,
                    },
                    {
                        id: 17,
                        question: "Octal 20 is equal to decimal:",
                        options: ["16", "18", "14", "20"],
                        correct: 0,
                    },
                    {
                        id: 18,
                        question: "The decimal equivalent of binary 11111 is:",
                        options: ["31", "30", "29", "32"],
                        correct: 0,
                    },
                    {
                        id: 19,
                        question: "Which number system is base-8?",
                        options: ["Binary", "Decimal", "Octal", "Hexadecimal"],
                        correct: 2,
                    },
                    {
                        id: 20,
                        question: "Hexadecimal FF is equal to decimal:",
                        options: ["254", "255", "256", "253"],
                        correct: 1,
                    },
                    {
                        id: 21,
                        question: "Binary 1010 in octal is:",
                        options: ["12", "10", "14", "8"],
                        correct: 0,
                    },
                    {
                        id: 22,
                        question: "The largest single digit in octal is:",
                        options: ["7", "8", "9", "6"],
                        correct: 0,
                    },
                    {
                        id: 23,
                        question: "Decimal 50 in hexadecimal is:",
                        options: ["32", "33", "31", "34"],
                        correct: 0,
                    },
                    {
                        id: 24,
                        question: "Which is a valid binary number?",
                        options: ["12", "10", "2", "121"],
                        correct: 1,
                    },
                    {
                        id: 25,
                        question: "Hexadecimal 1A is equal to decimal:",
                        options: ["26", "28", "24", "22"],
                        correct: 0,
                    },
                    {
                        id: 26,
                        question: "The octal equivalent of binary 111 is:",
                        options: ["7", "6", "8", "5"],
                        correct: 0,
                    },
                    {
                        id: 27,
                        question: "How many different digits are used in hexadecimal?",
                        options: ["16", "10", "8", "2"],
                        correct: 0,
                    },
                    {
                        id: 28,
                        question: "Binary 100 is equal to decimal:",
                        options: ["4", "2", "8", "6"],
                        correct: 0,
                    },
                    {
                        id: 29,
                        question: "The hexadecimal equivalent of decimal 31 is:",
                        options: ["1F", "2F", "3F", "1E"],
                        correct: 0,
                    },
                    {
                        id: 30,
                        question: "Octal 100 is equal to decimal:",
                        options: ["64", "72", "56", "80"],
                        correct: 0,
                    },
                    {
                        id: 31,
                        question: "Which is a valid octal number?",
                        options: ["18", "78", "89", "67"],
                        correct: 3,
                    },
                    {
                        id: 32,
                        question: "The binary equivalent of hexadecimal A is:",
                        options: ["1010", "1011", "1100", "1001"],
                        correct: 0,
                    },
                    {
                        id: 33,
                        question: "Decimal 128 in binary has how many bits?",
                        options: ["8", "7", "9", "6"],
                        correct: 0,
                    },
                    {
                        id: 34,
                        question: "The hexadecimal number system uses symbols:",
                        options: ["0-9, A-F", "0-9, A-G", "1-9, A-F", "0-8, A-F"],
                        correct: 0,
                    },
                    {
                        id: 35,
                        question: "Binary 11110000 in hexadecimal is:",
                        options: ["F0", "E0", "FF", "EE"],
                        correct: 0,
                    },
                    {
                        id: 36,
                        question: "The largest two-digit number in octal is:",
                        options: ["77", "88", "99", "89"],
                        correct: 0,
                    },
                    {
                        id: 37,
                        question: "Hexadecimal 20 in decimal is:",
                        options: ["32", "30", "28", "26"],
                        correct: 0,
                    },
                    {
                        id: 38,
                        question: "The smallest 4-bit binary number is:",
                        options: ["0000", "0001", "1000", "1111"],
                        correct: 0,
                    },
                    {
                        id: 39,
                        question: "Octal 50 in decimal is:",
                        options: ["40", "45", "42", "48"],
                        correct: 0,
                    },
                    {
                        id: 40,
                        question: "Binary 10101010 in hexadecimal is:",
                        options: ["AA", "AB", "BA", "BB"],
                        correct: 0,
                    },
                    {
                        id: 41,
                        question: "What base system uses only 0s and 1s?",
                        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "The decimal equivalent of octal 111 is:",
                        options: ["73", "69", "71", "75"],
                        correct: 0,
                    },
                    {
                        id: 43,
                        question: "Hexadecimal B5 in binary has how many 1s?",
                        options: ["6", "5", "4", "7"],
                        correct: 0,
                    },
                    {
                        id: 44,
                        question: "The octal equivalent of decimal 100 is:",
                        options: ["144", "124", "164", "184"],
                        correct: 0,
                    },
                    {
                        id: 45,
                        question: "Which number system is most commonly used by humans?",
                        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
                        correct: 0,
                    },
                    {
                        id: 46,
                        question: "Binary 1100 in decimal is:",
                        options: ["12", "14", "10", "8"],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question: "The hexadecimal equivalent of octal 77 is:",
                        options: ["3F", "3E", "4F", "4E"],
                        correct: 0,
                    },
                    {
                        id: 48,
                        question: "How many bits are in one hexadecimal digit?",
                        options: ["4", "8", "16", "2"],
                        correct: 0,
                    },
                    {
                        id: 49,
                        question: "Decimal 255 in binary has how many 1s?",
                        options: ["8", "7", "6", "5"],
                        correct: 0,
                    },
                    {
                        id: 50,
                        question: "The octal equivalent of hexadecimal F is:",
                        options: ["17", "15", "16", "14"],
                        correct: 0,
                    },
                    {
                        id: 51,
                        question:
                            "Which is the largest decimal number that can be represented by 8 bits?",
                        options: ["255", "256", "254", "253"],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "Hexadecimal 100 in decimal is:",
                        options: ["256", "255", "254", "257"],
                        correct: 0,
                    },
                    {
                        id: 53,
                        question: "The binary equivalent of octal 7 is:",
                        options: ["111", "110", "101", "100"],
                        correct: 0,
                    },
                    {
                        id: 54,
                        question: "How many octal digits are needed to represent 16 bits?",
                        options: ["6", "5", "4", "7"],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question: "The decimal equivalent of binary 10000000 is:",
                        options: ["128", "127", "129", "126"],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "Which is a valid hexadecimal color code prefix?",
                        options: ["#", "$", "@", "&"],
                        correct: 0,
                    },
                    {
                        id: 57,
                        question: "Octal 777 in decimal is:",
                        options: ["511", "512", "510", "513"],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "The binary equivalent of hexadecimal FF is:",
                        options: ["11111111", "11110000", "11111100", "11111110"],
                        correct: 0,
                    },
                    {
                        id: 59,
                        question:
                            "How many different numbers can be represented by 3 bits?",
                        options: ["8", "6", "7", "9"],
                        correct: 0,
                    },
                    {
                        id: 60,
                        question: "The hexadecimal equivalent of decimal 255 is:",
                        options: ["FF", "FE", "EF", "EE"],
                        correct: 0,
                    },
                    {
                        id: 61,
                        question: "Binary 11111111 in octal is:",
                        options: ["377", "477", "277", "177"],
                        correct: 0,
                    },
                    {
                        id: 62,
                        question:
                            "Which number system is commonly used in computer memory addresses?",
                        options: ["Hexadecimal", "Decimal", "Octal", "Binary"],
                        correct: 0,
                    },
                    {
                        id: 63,
                        question:
                            "The largest number that can be represented by 4 bits is:",
                        options: ["15", "16", "14", "13"],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question: "Hexadecimal A5 in binary has how many 0s?",
                        options: ["4", "3", "5", "2"],
                        correct: 0,
                    },
                    {
                        id: 65,
                        question: "The octal equivalent of decimal 15 is:",
                        options: ["17", "16", "15", "14"],
                        correct: 0,
                    },
                    {
                        id: 66,
                        question:
                            "Which is the smallest positive number in all number systems?",
                        options: ["1", "0", "A", "01"],
                        correct: 0,
                    },
                    {
                        id: 67,
                        question: "Binary 101010 in decimal is:",
                        options: ["42", "40", "44", "46"],
                        correct: 0,
                    },
                    {
                        id: 68,
                        question: "The hexadecimal equivalent of octal 100 is:",
                        options: ["40", "41", "42", "43"],
                        correct: 0,
                    },
                    {
                        id: 69,
                        question: "How many digits are in octal number system?",
                        options: ["8", "7", "9", "6"],
                        correct: 0,
                    },
                    {
                        id: 70,
                        question: "The decimal equivalent of hexadecimal C0 is:",
                        options: ["192", "190", "194", "196"],
                        correct: 0,
                    },
                    {
                        id: 71,
                        question: "Which is NOT a power of 2?",
                        options: ["6", "8", "16", "32"],
                        correct: 0,
                    },
                    {
                        id: 72,
                        question: "The binary equivalent of decimal 7 is:",
                        options: ["111", "110", "101", "100"],
                        correct: 0,
                    },
                    {
                        id: 73,
                        question: "Hexadecimal F0 in binary has how many zeros?",
                        options: ["4", "3", "5", "6"],
                        correct: 0,
                    },
                    {
                        id: 74,
                        question: "The octal equivalent of binary 1000 is:",
                        options: ["10", "8", "12", "14"],
                        correct: 0,
                    },
                    {
                        id: 75,
                        question: "Which is largest? (decimal values)",
                        options: [
                            "FF (hex)",
                            "377 (octal)",
                            "11111111 (binary)",
                            "255 (decimal)",
                        ],
                        correct: 1,
                    },
                    {
                        id: 76,
                        question: "Binary 1001 in hexadecimal is:",
                        options: ["9", "A", "8", "B"],
                        correct: 0,
                    },
                    {
                        id: 77,
                        question: "The decimal equivalent of octal 200 is:",
                        options: ["128", "256", "512", "1024"],
                        correct: 0,
                    },
                    {
                        id: 78,
                        question:
                            "How many bits minimum are needed to represent decimal 1000?",
                        options: ["10", "9", "11", "8"],
                        correct: 0,
                    },
                    {
                        id: 79,
                        question: "Which is a valid octal digit?",
                        options: ["7", "8", "9", "A"],
                        correct: 0,
                    },
                    {
                        id: 80,
                        question: "The hexadecimal equivalent of binary 1010 is:",
                        options: ["A", "B", "C", "D"],
                        correct: 0,
                    },
                    {
                        id: 81,
                        question: "Binary 11001100 in decimal is:",
                        options: ["204", "206", "202", "208"],
                        correct: 0,
                    },
                    {
                        id: 82,
                        question: "The octal equivalent of hexadecimal A is:",
                        options: ["12", "11", "13", "10"],
                        correct: 0,
                    },
                    {
                        id: 83,
                        question: "Which number system is base-2?",
                        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
                        correct: 0,
                    },
                    {
                        id: 84,
                        question: "Decimal 64 in binary is:",
                        options: ["1000000", "1000001", "111111", "1000010"],
                        correct: 0,
                    },
                    {
                        id: 85,
                        question: "The hexadecimal equivalent of decimal 200 is:",
                        options: ["C8", "C7", "C9", "CA"],
                        correct: 0,
                    },
                    {
                        id: 86,
                        question: "Which is smallest? (decimal values)",
                        options: [
                            "77 (octal)",
                            "4F (hex)",
                            "1111111 (binary)",
                            "127 (decimal)",
                        ],
                        correct: 0,
                    },
                    {
                        id: 87,
                        question: "Binary 10101010 in octal is:",
                        options: ["252", "225", "522", "255"],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question: "How many hexadecimal digits are needed for 32 bits?",
                        options: ["8", "7", "9", "6"],
                        correct: 0,
                    },
                    {
                        id: 89,
                        question: "The decimal equivalent of octal 377 is:",
                        options: ["255", "256", "254", "257"],
                        correct: 0,
                    },
                    {
                        id: 90,
                        question: "Which is NOT a valid binary number?",
                        options: ["102", "100", "111", "110"],
                        correct: 0,
                    },
                    {
                        id: 91,
                        question: "Hexadecimal 80 in decimal is:",
                        options: ["128", "126", "130", "124"],
                        correct: 0,
                    },
                    {
                        id: 92,
                        question: "The binary equivalent of octal 77 is:",
                        options: ["111111", "111110", "111101", "111100"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "Which represents the largest value?",
                        options: [
                            "FF (hex)",
                            "255 (decimal)",
                            "377 (octal)",
                            "11111111 (binary)",
                        ],
                        correct: 0,
                    },
                    {
                        id: 94,
                        question: "The octal equivalent of decimal 50 is:",
                        options: ["62", "61", "63", "60"],
                        correct: 0,
                    },
                    {
                        id: 95,
                        question: "Binary 11110000 in decimal is:",
                        options: ["240", "242", "238", "244"],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "How many bits are in two hexadecimal digits?",
                        options: ["8", "6", "10", "12"],
                        correct: 0,
                    },
                    {
                        id: 97,
                        question: "The hexadecimal equivalent of decimal 128 is:",
                        options: ["80", "81", "7F", "82"],
                        correct: 0,
                    },
                    {
                        id: 98,
                        question: "Which is a valid hexadecimal number?",
                        options: ["1G", "1F", "1H", "1I"],
                        correct: 1,
                    },
                    {
                        id: 99,
                        question:
                            "The largest single digit hexadecimal number in decimal is:",
                        options: ["15", "16", "14", "13"],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question: "Binary 10000 in octal is:",
                        options: ["20", "21", "22", "23"],
                        correct: 0,
                    },
                ],
            },
            "Binary arithmetic: addition, subtraction (1’s/2’s complement)": {
                color: "#6366F1",
                questions: [
                    {
                        id: 1,
                        question: "What is the sum of binary numbers 1010 + 1011?",
                        options: ["10101", "10001", "10111", "10100"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question: "In 1's complement, how do you represent -5?",
                        options: ["11010", "11011", "11110", "11111"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question: "What is 2's complement of 0101?",
                        options: ["1010", "1011", "1100", "1101"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question: "When adding binary numbers, what is 1 + 1?",
                        options: ["0", "1", "10", "11"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "In binary subtraction using 2's complement, what is 1000 - 0011?",
                        options: ["0101", "0100", "0111", "0110"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question: "What is the carry bit when adding binary 111 + 001?",
                        options: ["0", "1", "10", "11"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "To get 2's complement, after finding 1's complement we add:",
                        options: ["0", "1", "10", "11"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "In 1's complement, what is -0?",
                        options: ["0000", "1111", "0001", "1000"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question: "What is the sum of 1111 + 0001?",
                        options: ["10000", "0000", "1111", "0001"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question: "In 2's complement, what is the range for 4 bits?",
                        options: ["-8 to 7", "-7 to 8", "-8 to 8", "-7 to 7"],
                        correct: 0,
                    },
                    {
                        id: 11,
                        question: "What is 1010 - 0011 using 2's complement?",
                        options: ["0111", "0110", "0101", "0100"],
                        correct: 1,
                    },
                    {
                        id: 12,
                        question: "How do you get 1's complement of 1010?",
                        options: ["0101", "0100", "0110", "0111"],
                        correct: 0,
                    },
                    {
                        id: 13,
                        question: "What is the binary sum of 101 + 011?",
                        options: ["1000", "0111", "1001", "1010"],
                        correct: 0,
                    },
                    {
                        id: 14,
                        question: "In 2's complement, how is -1 represented in 4 bits?",
                        options: ["1111", "1110", "1101", "1100"],
                        correct: 0,
                    },
                    {
                        id: 15,
                        question: "What is the binary subtraction result of 1000 - 0001?",
                        options: ["0111", "0110", "0101", "0100"],
                        correct: 0,
                    },
                    {
                        id: 16,
                        question: "In binary addition, what is the result of 1 + 1 + 1?",
                        options: ["11", "10", "01", "00"],
                        correct: 0,
                    },
                    {
                        id: 17,
                        question: "What is the 2's complement of 0000?",
                        options: ["0000", "1111", "1000", "0001"],
                        correct: 0,
                    },
                    {
                        id: 18,
                        question:
                            "When subtracting 0011 from 1000 using 2's complement, the steps are:",
                        options: [
                            "Find 2's complement of 0011, then add to 1000",
                            "Find 1's complement of 0011, then subtract from 1000",
                            "Directly subtract 0011 from 1000",
                            "Add 0011 to 1000",
                        ],
                        correct: 0,
                    },
                    {
                        id: 19,
                        question: "In 8-bit 2's complement, -128 is represented as:",
                        options: ["10000000", "11111111", "00000000", "01111111"],
                        correct: 0,
                    },
                    {
                        id: 20,
                        question: "The sum of 1111 + 0001 in 4-bit arithmetic results in:",
                        options: ["0000", "0001", "1111", "0111"],
                        correct: 0,
                    },
                    {
                        id: 21,
                        question:
                            "What happens when adding 1 to 11111111 in 8-bit arithmetic?",
                        options: ["Overflow", "00000000", "11111110", "11111111"],
                        correct: 1,
                    },
                    {
                        id: 22,
                        question: "In 1's complement arithmetic, -0 is represented as:",
                        options: ["11111111", "00000000", "10000000", "01111111"],
                        correct: 0,
                    },
                    {
                        id: 23,
                        question: "The 2's complement of 00000101 is:",
                        options: ["11111011", "11111010", "11111100", "11111101"],
                        correct: 0,
                    },
                    {
                        id: 24,
                        question: "When does overflow occur in signed binary addition?",
                        options: [
                            "When adding two positives gives negative",
                            "When adding two numbers gives zero",
                            "When adding two negatives gives positive",
                            "Both A and C",
                        ],
                        correct: 3,
                    },
                    {
                        id: 25,
                        question: "What is 1100 + 0011 in binary?",
                        options: ["1111", "1110", "1101", "1100"],
                        correct: 0,
                    },
                    {
                        id: 26,
                        question: "In 4-bit 2's complement, the smallest number is:",
                        options: ["-8", "-7", "-6", "-9"],
                        correct: 0,
                    },
                    {
                        id: 27,
                        question: "The 1's complement of 10101 is:",
                        options: ["01010", "01011", "01110", "01111"],
                        correct: 0,
                    },
                    {
                        id: 28,
                        question: "Binary subtraction 1010 - 0110 equals:",
                        options: ["0100", "0011", "0010", "0001"],
                        correct: 0,
                    },
                    {
                        id: 29,
                        question: "In binary addition, the carry bit is generated when:",
                        options: [
                            "Adding 1 + 1",
                            "Adding 0 + 1",
                            "Adding 0 + 0",
                            "None of these",
                        ],
                        correct: 0,
                    },
                    {
                        id: 30,
                        question: "What is the result of 1001 - 1001 using 2's complement?",
                        options: ["0000", "1111", "0001", "1001"],
                        correct: 0,
                    },
                    // ... continuing with more questions

                    {
                        id: 31,
                        question:
                            "When adding binary numbers, if the sum exceeds available bits, it results in:",
                        options: ["Overflow", "Underflow", "Carry", "None of these"],
                        correct: 0,
                    },
                    {
                        id: 32,
                        question: "The 2's complement of a number can be found by:",
                        options: [
                            "1's complement + 1",
                            "1's complement - 1",
                            "Just inverting bits",
                            "Adding 0",
                        ],
                        correct: 0,
                    },
                    {
                        id: 33,
                        question: "In 8-bit 2's complement, what is -1?",
                        options: ["11111111", "10000001", "10000000", "11111110"],
                        correct: 0,
                    },
                    {
                        id: 34,
                        question: "Binary addition 1111 + 1111 equals:",
                        options: ["11110", "11111", "11100", "11101"],
                        correct: 0,
                    },
                    {
                        id: 35,
                        question:
                            "What is the benefit of using 2's complement over 1's complement?",
                        options: [
                            "Single representation of zero",
                            "Easier addition",
                            "Multiple zero representations",
                            "Simpler subtraction",
                        ],
                        correct: 0,
                    },
                    {
                        id: 36,
                        question: "In binary addition, carry propagation means:",
                        options: [
                            "Carry bit affects subsequent positions",
                            "No carry is generated",
                            "Carry is ignored",
                            "Carry causes overflow",
                        ],
                        correct: 0,
                    },
                    {
                        id: 37,
                        question: "What is the 2's complement of 10101010?",
                        options: ["01010110", "01010101", "01010111", "01010100"],
                        correct: 0,
                    },
                    {
                        id: 38,
                        question: "In 8-bit arithmetic, -64 in 2's complement is:",
                        options: ["10100000", "11000000", "10000000", "11100000"],
                        correct: 1,
                    },
                    {
                        id: 39,
                        question: "Binary subtraction 1111 - 0101 equals:",
                        options: ["1010", "1011", "1100", "1101"],
                        correct: 0,
                    },
                    {
                        id: 40,
                        question: "Sign extension in 2's complement means:",
                        options: [
                            "Copying the sign bit",
                            "Adding zeros",
                            "Removing bits",
                            "Changing the sign",
                        ],
                        correct: 0,
                    },
                    {
                        id: 41,
                        question: "The range of 6-bit 2's complement numbers is:",
                        options: ["-32 to 31", "-31 to 32", "-64 to 63", "-63 to 64"],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "Adding 1 to 01111111 gives:",
                        options: ["10000000", "00000000", "11111111", "01111110"],
                        correct: 0,
                    },
                    {
                        id: 43,
                        question: "In binary subtraction, borrowing means:",
                        options: [
                            "Taking 1 from next position",
                            "Adding 0",
                            "Ignoring carry",
                            "Adding carry",
                        ],
                        correct: 0,
                    },
                    {
                        id: 44,
                        question: "Maximum positive number in 4-bit 2's complement is:",
                        options: ["0111", "1111", "1000", "0110"],
                        correct: 0,
                    },
                    {
                        id: 45,
                        question: "Binary addition 1010 + 0101 equals:",
                        options: ["1111", "10000", "1110", "1101"],
                        correct: 0,
                    },
                    {
                        id: 46,
                        question: "What is end-around carry in 1's complement?",
                        options: [
                            "Adding carry to result",
                            "Ignoring carry",
                            "Subtracting carry",
                            "Multiplying by carry",
                        ],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question: "In 2's complement, the representation of -128 is:",
                        options: ["10000000", "11111111", "01111111", "00000000"],
                        correct: 0,
                    },
                    {
                        id: 48,
                        question: "What is the result of 1100 - 0011 using 1's complement?",
                        options: ["1001", "1010", "1011", "1101"],
                        correct: 0,
                    },
                    {
                        id: 49,
                        question: "In binary addition, what is the result of 111 + 001?",
                        options: ["1000", "1001", "1010", "1011"],
                        correct: 0,
                    },
                    {
                        id: 50,
                        question:
                            "The binary representation of -3 in 4-bit 2's complement is:",
                        options: ["1101", "1100", "1110", "1111"],
                        correct: 0,
                    },
                    {
                        id: 51,
                        question: "What is the result of 1010 + 0110 in binary?",
                        options: ["10000", "11000", "11100", "10110"],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "In 2's complement, how is -2 represented in 4 bits?",
                        options: ["1110", "1101", "1100", "1111"],
                        correct: 0,
                    },
                    {
                        id: 53,
                        question: "What is the result of binary addition 0011 + 0101?",
                        options: ["1000", "0110", "0111", "0100"],
                        correct: 0,
                    },
                    {
                        id: 54,
                        question:
                            "In binary subtraction, what is the result of 1101 - 0110?",
                        options: ["0011", "0101", "0111", "1001"],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question: "The carry bit in binary addition is used to:",
                        options: [
                            "Indicate overflow",
                            "Ignore next bit",
                            "Add to next position",
                            "None of these",
                        ],
                        correct: 2,
                    },
                    {
                        id: 56,
                        question: "Binary subtraction 1000 - 0111 equals:",
                        options: ["0001", "0010", "0011", "0100"],
                        correct: 0,
                    },
                    {
                        id: 57,
                        question: "In 2's complement, -4 (4-bit) is represented as:",
                        options: ["1100", "1011", "1010", "1001"],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "Adding two n-bit numbers can result in:",
                        options: ["n+1 bits", "n-1 bits", "n bits", "2n bits"],
                        correct: 0,
                    },
                    {
                        id: 59,
                        question: "Which operation requires end-around carry?",
                        options: [
                            "1's complement",
                            "2's complement",
                            "Binary addition",
                            "Sign extension",
                        ],
                        correct: 0,
                    },
                    {
                        id: 60,
                        question: "When does sign overflow occur?",
                        options: [
                            "Result has wrong sign",
                            "Result too large",
                            "Carry occurs",
                            "No carry occurs",
                        ],
                        correct: 0,
                    },
                    {
                        id: 61,
                        question: "What is binary 1100 + 0011 - 0001?",
                        options: ["1110", "1111", "1100", "1101"],
                        correct: 0,
                    },
                    {
                        id: 62,
                        question: "The 2's complement range for 5 bits is:",
                        options: ["-16 to 15", "-15 to 16", "-32 to 31", "-31 to 32"],
                        correct: 0,
                    },
                    {
                        id: 63,
                        question:
                            "In binary addition, if both inputs are 1, the sum bit is:",
                        options: ["0", "1", "Carry", "Both 0 and carry"],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question: "What is the result of inverting all bits in 10101010?",
                        options: ["01010101", "01010110", "01010111", "01010100"],
                        correct: 0,
                    },
                    {
                        id: 65,
                        question: "In 2's complement subtraction, we:",
                        options: [
                            "Add 2's complement of subtrahend",
                            "Subtract normally",
                            "Add 1's complement",
                            "Just invert bits",
                        ],
                        correct: 0,
                    },
                    {
                        id: 66,
                        question: "Binary 1111 - 0001 equals:",
                        options: ["1110", "1111", "1100", "1101"],
                        correct: 0,
                    },
                    {
                        id: 67,
                        question: "What is special about 2's complement of 10000000?",
                        options: [
                            "Same as original",
                            "All ones",
                            "All zeros",
                            "Overflow occurs",
                        ],
                        correct: 0,
                    },
                    {
                        id: 68,
                        question: "Adding 1 to 11111111 produces:",
                        options: ["00000000", "11111110", "11111111", "10000000"],
                        correct: 0,
                    },
                    {
                        id: 69,
                        question:
                            "The smallest negative number in 8-bit 2's complement is:",
                        options: ["-128", "-127", "-256", "-255"],
                        correct: 0,
                    },
                    {
                        id: 70,
                        question: "In binary subtraction, if result is negative we:",
                        options: [
                            "Take 2's complement",
                            "Take 1's complement",
                            "Add one",
                            "Do nothing",
                        ],
                        correct: 0,
                    },
                    {
                        id: 71,
                        question: "Binary addition 1010 + 0101 + 0011 equals:",
                        options: ["10000", "10001", "10010", "10011"],
                        correct: 0,
                    },
                    {
                        id: 72,
                        question: "What is 0000 - 1111 in 2's complement?",
                        options: ["10001", "10000", "11111", "10011"],
                        correct: 0,
                    },
                    {
                        id: 73,
                        question: "Sign extension of 1101 to 8 bits is:",
                        options: ["11111101", "00001101", "11001101", "10001101"],
                        correct: 0,
                    },
                    {
                        id: 74,
                        question: "How many bits minimum to represent -65?",
                        options: ["8", "7", "9", "6"],
                        correct: 0,
                    },
                    {
                        id: 75,
                        question: "1's complement addition requires:",
                        options: [
                            "End-around carry",
                            "No special handling",
                            "Sign extension",
                            "Overflow check",
                        ],
                        correct: 0,
                    },
                    {
                        id: 76,
                        question: "Binary subtraction 1111 - 1111 equals:",
                        options: ["0000", "0001", "1111", "1110"],
                        correct: 0,
                    },
                    {
                        id: 77,
                        question: "The 2's complement of a negative number gives:",
                        options: [
                            "Its positive value",
                            "Zero",
                            "Original number",
                            "Another negative",
                        ],
                        correct: 0,
                    },
                    {
                        id: 78,
                        question: "What is 11111111 + 00000001 in 8-bit arithmetic?",
                        options: ["00000000", "11111110", "11111111", "00000010"],
                        correct: 0,
                    },
                    {
                        id: 79,
                        question: "In binary multiplication, 1 × 1 equals:",
                        options: ["1", "0", "10", "11"],
                        correct: 0,
                    },
                    {
                        id: 80,
                        question: "2's complement of a number can be found by:",
                        options: [
                            "1's complement + 1",
                            "1's complement - 1",
                            "Just inverting bits",
                            "Adding zeros",
                        ],
                        correct: 0,
                    },
                    {
                        id: 81,
                        question: "What is -0 in 2's complement?",
                        options: ["000000", "111111", "000001", "Not possible"],
                        correct: 3,
                    },
                    {
                        id: 82,
                        question: "Binary addition 1111 + 1111 produces:",
                        options: ["11110", "11111", "11100", "11101"],
                        correct: 0,
                    },
                    {
                        id: 83,
                        question: "Overflow in signed addition occurs when:",
                        options: [
                            "Adding same signs gets opposite",
                            "Adding different signs",
                            "No carry generated",
                            "Always",
                        ],
                        correct: 0,
                    },
                    {
                        id: 84,
                        question: "The 1's complement of 00000000 is:",
                        options: ["11111111", "00000000", "11111110", "00000001"],
                        correct: 0,
                    },
                    {
                        id: 85,
                        question: "What is special about power-of-2 binary numbers?",
                        options: ["Single 1 bit", "All 1s", "All 0s", "Alternating bits"],
                        correct: 0,
                    },
                    {
                        id: 86,
                        question: "In 8-bit 2's complement, -1 is represented as:",
                        options: ["11111111", "10000001", "10000000", "11111110"],
                        correct: 0,
                    },
                    {
                        id: 87,
                        question: "Binary subtraction is performed by:",
                        options: [
                            "Adding 2's complement",
                            "Direct subtraction",
                            "Adding 1's complement",
                            "Bit inversion",
                        ],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question: "What is 10101010 + 01010101?",
                        options: ["11111111", "11111110", "11111100", "11111000"],
                        correct: 0,
                    },
                    {
                        id: 89,
                        question: "Half adder produces:",
                        options: ["Sum and carry", "Only sum", "Only carry", "Difference"],
                        correct: 0,
                    },
                    {
                        id: 90,
                        question: "Full adder differs from half adder by:",
                        options: [
                            "Extra carry input",
                            "No carry output",
                            "Multiple outputs",
                            "No difference",
                        ],
                        correct: 0,
                    },
                    {
                        id: 91,
                        question: "Binary 1100 - 0011 equals:",
                        options: ["1001", "1000", "0111", "0110"],
                        correct: 0,
                    },
                    {
                        id: 92,
                        question: "Sign bit in 2's complement is:",
                        options: ["Leftmost bit", "Rightmost bit", "Middle bit", "Any bit"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "What is binary 1111 × 0010?",
                        options: ["11110", "11111", "11100", "11101"],
                        correct: 0,
                    },
                    {
                        id: 94,
                        question: "In binary division, remainder is always:",
                        options: [
                            "Less than divisor",
                            "Equal to divisor",
                            "Greater than divisor",
                            "Zero",
                        ],
                        correct: 0,
                    },
                    {
                        id: 95,
                        question: "Binary 10000000 represents in 8-bit 2's complement:",
                        options: ["-128", "128", "127", "-127"],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "Which is faster in digital circuits?",
                        options: ["Addition", "Subtraction", "Both same", "Depends"],
                        correct: 0,
                    },
                    {
                        id: 97,
                        question: "Carry look-ahead adder is used for:",
                        options: [
                            "Faster addition",
                            "Memory saving",
                            "Error checking",
                            "Multiplication",
                        ],
                        correct: 0,
                    },
                    {
                        id: 98,
                        question: "Binary arithmetic is based on:",
                        options: [
                            "Boolean algebra",
                            "Decimal system",
                            "Octal system",
                            "Hex system",
                        ],
                        correct: 0,
                    },
                    {
                        id: 99,
                        question: "XOR operation is used in:",
                        options: [
                            "Binary addition",
                            "Binary multiplication",
                            "Both",
                            "Neither",
                        ],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question: "Ripple carry adder has:",
                        options: [
                            "Propagation delay",
                            "No delay",
                            "Fixed delay",
                            "Random delay",
                        ],
                        correct: 0,
                    },
                ],
            },
            "Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables": {
                color: "#8B5CF6",
                questions: [
                    {
                        id: 1,
                        question:
                            "What is the output of an AND gate when inputs are 1 and 1?",
                        options: ["1", "0", "Undefined", "High impedance"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "What is the output of an AND gate when inputs are 1 and 0?",
                        options: ["1", "0", "Can't determine", "Floating"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "What is the output of an OR gate when inputs are 0 and 0?",
                        options: ["0", "1", "Depends on configuration", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "What is the output of an OR gate when inputs are 1 and 0?",
                        options: ["0", "1", "Tri-state", "Z"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "What is the output of a NOT gate for input 0?",
                        options: ["1", "0", "Undefined", "Input echoed"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question: "What does a NAND gate output when inputs are 1 and 1?",
                        options: ["0", "1", "Same as AND", "High impedance"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question: "What does a NOR gate output when inputs are 0 and 0?",
                        options: ["1", "0", "Same as OR", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question: "What is XOR output for inputs 0 and 0?",
                        options: ["0", "1", "Undefined", "Both outputs high"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question: "What is XOR output for inputs 1 and 0?",
                        options: ["1", "0", "Undefined", "Same as XNOR"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question: "Which gate outputs 1 only when all inputs are 1?",
                        options: ["AND", "OR", "NOR", "XOR"],
                        correct: 0,
                    },
                    {
                        id: 11,
                        question: "Which gate outputs 1 when any input is 1?",
                        options: ["OR", "AND", "NAND", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 12,
                        question: "Which gate inverts a single input?",
                        options: ["NOT", "AND", "OR", "XOR"],
                        correct: 0,
                    },
                    {
                        id: 13,
                        question: "Which gate is the complement of AND?",
                        options: ["NAND", "NOR", "OR", "XOR"],
                        correct: 0,
                    },
                    {
                        id: 14,
                        question: "Which gate is the complement of OR?",
                        options: ["NOR", "NAND", "AND", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 15,
                        question:
                            "Which gate outputs 1 when an odd number of inputs are 1?",
                        options: ["XOR", "AND", "OR", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 16,
                        question: "Which gate outputs 1 when inputs are equal?",
                        options: ["XNOR", "XOR", "AND", "OR"],
                        correct: 0,
                    },
                    {
                        id: 17,
                        question: "What is the truth table output of AND for inputs (0,1)?",
                        options: ["0", "1", "Depends", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 18,
                        question: "What is the truth table output of OR for inputs (1,1)?",
                        options: ["1", "0", "Undefined", "Both"],
                        correct: 0,
                    },
                    {
                        id: 19,
                        question:
                            "What is the truth table output of NAND for inputs (0,0)?",
                        options: ["1", "0", "Same as AND", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 20,
                        question: "What is the truth table output of NOR for inputs (1,0)?",
                        options: ["0", "1", "Same as OR", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 21,
                        question:
                            "De Morgan's theorem: the complement of (A AND B) equals?",
                        options: ["A' OR B'", "A' AND B'", "A OR B", "A AND B"],
                        correct: 0,
                    },
                    {
                        id: 22,
                        question: "De Morgan's theorem: the complement of (A OR B) equals?",
                        options: ["A' AND B'", "A' OR B'", "A OR B", "A AND B"],
                        correct: 0,
                    },
                    {
                        id: 23,
                        question: "Which gates are functionally complete (universal)?",
                        options: [
                            "NAND and NOR",
                            "AND and OR",
                            "XOR and XNOR",
                            "NOT and XOR",
                        ],
                        correct: 0,
                    },
                    {
                        id: 24,
                        question:
                            "What is the Boolean expression for an OR gate with inputs A and B?",
                        options: ["A + B", "A * B", "A' + B'", "A ⊕ B"],
                        correct: 0,
                    },
                    {
                        id: 25,
                        question:
                            "What is the Boolean expression for an AND gate with inputs A and B?",
                        options: ["A * B", "A + B", "A' * B'", "A ⊕ B"],
                        correct: 0,
                    },
                    {
                        id: 26,
                        question: "What is the Boolean expression for a NOT gate on A?",
                        options: ["A'", "A", "A + 1", "A * 0"],
                        correct: 0,
                    },
                    {
                        id: 27,
                        question: "What is the output of XNOR for inputs 1 and 1?",
                        options: ["1", "0", "Undefined", "Same as XOR"],
                        correct: 0,
                    },
                    {
                        id: 28,
                        question:
                            "Which gate is associative (A op (B op C) = (A op B) op C)?",
                        options: ["AND and OR", "XOR only", "NOT only", "None"],
                        correct: 0,
                    },
                    {
                        id: 29,
                        question: "Which gate is commutative (A op B = B op A)?",
                        options: ["AND, OR, XOR", "AND only", "OR only", "XOR only"],
                        correct: 0,
                    },
                    {
                        id: 30,
                        question: "What is the output of NAND when inputs are 1 and 0?",
                        options: ["1", "0", "Same as AND", "Same as OR"],
                        correct: 0,
                    },
                    {
                        id: 31,
                        question: "What is the output of NOR when inputs are 1 and 1?",
                        options: ["0", "1", "Same as OR", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 32,
                        question: "Which gate produces 1 when inputs are different?",
                        options: ["XOR", "AND", "OR", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 33,
                        question: "Which gate is equivalent to OR followed by NOT?",
                        options: ["NOR", "NAND", "AND", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 34,
                        question: "Which gate is equivalent to AND followed by NOT?",
                        options: ["NAND", "NOR", "OR", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 35,
                        question: "If A=0 and B=1, what is A XOR B?",
                        options: ["1", "0", "Undefined", "Both 0 and 1"],
                        correct: 0,
                    },
                    {
                        id: 36,
                        question: "If A=1 and B=1, what is A XOR B?",
                        options: ["0", "1", "Undefined", "Same as OR"],
                        correct: 0,
                    },
                    {
                        id: 37,
                        question: "What does a bubble on a gate input or output indicate?",
                        options: [
                            "Logical inversion",
                            "Tri-state",
                            "Active-low power",
                            "No connection",
                        ],
                        correct: 0,
                    },
                    {
                        id: 38,
                        question:
                            "Which gate has a curved input symbol and a plus-shaped output for XOR?",
                        options: [
                            "XOR symbol is OR with extra curved line",
                            "AND symbol",
                            "NOT symbol",
                            "NOR symbol",
                        ],
                        correct: 0,
                    },
                    {
                        id: 39,
                        question:
                            "What is the truth table output of a 3-input AND when inputs are (1,1,0)?",
                        options: ["0", "1", "Undefined", "Tri-state"],
                        correct: 0,
                    },
                    {
                        id: 40,
                        question:
                            "What is the truth table output of a 3-input OR when inputs are (0,0,1)?",
                        options: ["1", "0", "Undefined", "Both"],
                        correct: 0,
                    },
                    {
                        id: 41,
                        question:
                            "Which gate's output equals A AND ( NOT B ) for inputs A and B?",
                        options: ["A AND B'", "A OR B'", "A XOR B'", "A NOR B'"],
                        correct: 0,
                    },
                    {
                        id: 42,
                        question: "Which law: A + AB = A?",
                        options: [
                            "Absorption law",
                            "Distributive law",
                            "De Morgan",
                            "Identity law",
                        ],
                        correct: 0,
                    },
                    {
                        id: 43,
                        question: "Which law: A(A + B) = A?",
                        options: [
                            "Absorption law",
                            "Complement law",
                            "De Morgan",
                            "Associative law",
                        ],
                        correct: 0,
                    },
                    {
                        id: 44,
                        question: "What is the complement (negation) of A + B?",
                        options: ["A'B'", "A' + B'", "A B", "A' B"],
                        correct: 0,
                    },
                    {
                        id: 45,
                        question: "What is the complement (negation) of AB?",
                        options: ["A' + B'", "A'B'", "A + B", "A B'"],
                        correct: 0,
                    },
                    {
                        id: 46,
                        question: "Which gate can implement NOT using a single gate?",
                        options: ["Inverter (NOT) gate", "AND gate", "OR gate", "XOR gate"],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question:
                            "Which basic gate is used to create an AND using NAND gates alone?",
                        options: [
                            "Two NANDs (one for inputs, one for output invert)",
                            "One NAND only",
                            "One NOR",
                            "One XOR",
                        ],
                        correct: 0,
                    },
                    {
                        id: 48,
                        question:
                            "What is the output of (A OR B) AND (A AND B) simplified?",
                        options: ["A AND B", "A OR B", "A XOR B", "A XNOR B"],
                        correct: 0,
                    },
                    {
                        id: 49,
                        question: "What is A XOR 0 equal to?",
                        options: ["A", "0", "A'", "1"],
                        correct: 0,
                    },
                    {
                        id: 50,
                        question: "What is A XOR 1 equal to?",
                        options: ["A'", "A", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 51,
                        question: "What is A XNOR 0 equal to?",
                        options: ["A'", "A", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 52,
                        question: "What is A XNOR 1 equal to?",
                        options: ["A", "A'", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 53,
                        question:
                            "Which gate yields 1 for inputs (A=0, B=1, C=0) if expression is A OR (B AND C)?",
                        options: ["0", "1", "Undefined", "Depends on gate type"],
                        correct: 0,
                    },
                    {
                        id: 54,
                        question:
                            "Which gate yields 1 for inputs (A=0, B=1, C=1) if expression is (A AND B) OR C?",
                        options: ["1", "0", "Undefined", "Both"],
                        correct: 0,
                    },
                    {
                        id: 55,
                        question: "What is the identity element for AND?",
                        options: ["1", "0", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "What is the identity element for OR?",
                        options: ["0", "1", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 57,
                        question: "What is the annihilator (absorbing element) for AND?",
                        options: ["0", "1", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "What is the annihilator (absorbing element) for OR?",
                        options: ["1", "0", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 59,
                        question:
                            "If a circuit uses only NAND gates, it is possible to implement:",
                        options: [
                            "Any Boolean function",
                            "Only AND/OR",
                            "Only XOR",
                            "Nothing useful",
                        ],
                        correct: 0,
                    },
                    {
                        id: 60,
                        question:
                            "If a circuit uses only NOR gates, it is possible to implement:",
                        options: [
                            "Any Boolean function",
                            "Only AND/OR",
                            "Only XOR",
                            "Nothing useful",
                        ],
                        correct: 0,
                    },
                    {
                        id: 61,
                        question: "Which gate is used for equality checking of two bits?",
                        options: ["XNOR", "XOR", "AND", "OR"],
                        correct: 0,
                    },
                    {
                        id: 62,
                        question:
                            "Which gate is often used in adders to compute carry-out for two bits A and B (no carry-in)?",
                        options: ["AND", "XOR", "OR", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 63,
                        question:
                            "Which gate is often used in adders to compute sum for two bits A and B (no carry-in)?",
                        options: ["XOR", "AND", "OR", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question: "What is the result of (A NAND A)?",
                        options: ["A'", "A", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 65,
                        question: "What is the result of (A NOR A)?",
                        options: ["A'", "A", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 66,
                        question:
                            "Which gate's output is 1 only when exactly one input is 1 (for two inputs)?",
                        options: ["XOR", "OR", "AND", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 67,
                        question: "Which gate's Boolean expression is A ⊕ B?",
                        options: ["XOR", "AND", "NOR", "XNOR"],
                        correct: 0,
                    },
                    {
                        id: 68,
                        question: "Which gate's Boolean expression is (A ⊕ B)'?",
                        options: ["XNOR", "XOR", "AND", "OR"],
                        correct: 0,
                    },
                    {
                        id: 69,
                        question: "Which gate is idempotent (A op A = A)?",
                        options: ["AND and OR", "XOR", "NAND", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 70,
                        question:
                            "Which gate yields 0 when both inputs are 1 and 1 respectively: NAND, NOR, XOR, or XNOR?",
                        options: [
                            "NAND yields 0",
                            "NOR yields 0",
                            "XOR yields 0",
                            "XNOR yields 0",
                        ],
                        correct: 0,
                    },
                    {
                        id: 71,
                        question:
                            "Which gate yields 1 when both inputs are 0 and 0 respectively: NAND, NOR, XOR, or XNOR?",
                        options: [
                            "NOR yields 1",
                            "NAND yields 1",
                            "XOR yields 1",
                            "AND yields 1",
                        ],
                        correct: 0,
                    },
                    {
                        id: 72,
                        question:
                            "What is the effect of cascading two NOT gates in series on input A?",
                        options: ["A (original)", "A'", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 73,
                        question: "In TTL logic, a logic '1' is often called:",
                        options: ["High", "Low", "Floating", "Z"],
                        correct: 0,
                    },
                    {
                        id: 74,
                        question:
                            "In logic design, 'active-low' means the signal is asserted when:",
                        options: [
                            "Signal is 0",
                            "Signal is 1",
                            "Signal is floating",
                            "Signal is high impedance",
                        ],
                        correct: 0,
                    },
                    {
                        id: 75,
                        question:
                            "What is the output of OR gate if inputs are A=1, B=1, C=0 for (A OR B OR C)?",
                        options: ["1", "0", "Depends", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 76,
                        question:
                            "What is the output of AND gate if inputs are A=1, B=1, C=1 for (A AND B AND C)?",
                        options: ["1", "0", "Depends", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 77,
                        question:
                            "Which gate can be used to implement a NOT using its inputs tied together (NAND or NOR)?",
                        options: [
                            "NAND with inputs tied",
                            "NOR with inputs tied",
                            "AND with inputs tied",
                            "OR with inputs tied",
                        ],
                        correct: 0,
                    },
                    {
                        id: 78,
                        question: "Which of these is true: A + A' = ?",
                        options: ["1", "0", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 79,
                        question: "Which of these is true: A * A' = ?",
                        options: ["0", "1", "A", "A'"],
                        correct: 0,
                    },
                    {
                        id: 80,
                        question:
                            "For two inputs A and B, which expression equals (A AND (NOT B)) OR ((NOT A) AND B)?",
                        options: ["A ⊕ B (XOR)", "A ⊙ B", "A + B", "A B"],
                        correct: 0,
                    },
                    {
                        id: 81,
                        question: "Which gate short form is used for logical NOT of A?",
                        options: ["A'", "A", "¬A", "Both A' and ¬A"],
                        correct: 3,
                    },
                    {
                        id: 82,
                        question:
                            "What is the output of a 2-input XNOR when inputs are (1,0)?",
                        options: ["0", "1", "Undefined", "High impedance"],
                        correct: 0,
                    },
                    {
                        id: 83,
                        question: "Which boolean identity: A + A = ?",
                        options: ["A", "0", "1", "A'"],
                        correct: 0,
                    },
                    {
                        id: 84,
                        question:
                            "Which gate can be used to build any other gate if available in unlimited quantity?",
                        options: ["NAND", "AND", "OR", "XOR"],
                        correct: 0,
                    },
                    {
                        id: 85,
                        question: "What is the output of (A AND 1)?",
                        options: ["A", "1", "0", "A'"],
                        correct: 0,
                    },
                    {
                        id: 86,
                        question: "What is the output of (A OR 0)?",
                        options: ["A", "0", "1", "A'"],
                        correct: 0,
                    },
                    {
                        id: 87,
                        question: "Which expression equals A XOR B in terms of AND/OR/NOT?",
                        options: [
                            "(A AND !B) OR (!A AND B)",
                            "(A AND B) OR (!A AND !B)",
                            "A AND B",
                            "A OR B",
                        ],
                        correct: 0,
                    },
                    {
                        id: 88,
                        question:
                            "What is the output of a 3-input NOR gate when inputs are (0,0,0)?",
                        options: ["1", "0", "Depends", "Undefined"],
                        correct: 0,
                    },
                    {
                        id: 89,
                        question: "Which theorem: (A + B)·(A + C) = A + (B·C)?",
                        options: ["Distributive", "Consensus", "Absorption", "De Morgan"],
                        correct: 2,
                    },
                    {
                        id: 90,
                        question: "What is the output of NAND for inputs A=0, B=0?",
                        options: ["1", "0", "A", "B"],
                        correct: 0,
                    },
                    {
                        id: 91,
                        question:
                            "Which logic gate output equals the parity (odd) of inputs for two bits?",
                        options: ["XOR", "XNOR", "AND", "OR"],
                        correct: 0,
                    },
                    {
                        id: 92,
                        question: "What is the simplified form of A·(A + B)?",
                        options: ["A", "A + B", "B", "0"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question:
                            "Which gate output is true only when inputs are both 0 (for two inputs)?",
                        options: ["NOR", "NAND", "AND", "OR"],
                        correct: 0,
                    },
                    {
                        id: 94,
                        question:
                            "Cascading two NAND gates with tied inputs to same signal will produce:",
                        options: ["Buffer (original signal)", "Inverter", "Zero", "One"],
                        correct: 0,
                    },
                    {
                        id: 95,
                        question: "Which gate is used to detect equality of two bits?",
                        options: ["XNOR", "XOR", "AND", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "What is the output of (A NOR A)?",
                        options: ["A'", "A", "0", "1"],
                        correct: 0,
                    },
                    {
                        id: 97,
                        question:
                            "Which gate's truth table has outputs 0,1,1,1 for inputs 00,01,10,11?",
                        options: ["OR", "AND", "XOR", "NOR"],
                        correct: 0,
                    },
                    {
                        id: 98,
                        question: "Which property: A + 0 = A is called?",
                        options: [
                            "Identity law",
                            "Null law",
                            "Idempotent law",
                            "Absorption law",
                        ],
                        correct: 0,
                    },
                    {
                        id: 99,
                        question:
                            "What is the effect of connecting an inverter at both input and output of a buffer?",
                        options: [
                            "Original signal (double inversion)",
                            "Inverted signal",
                            "Always 0",
                            "Always 1",
                        ],
                        correct: 0,
                    },
                    {
                        id: 100,
                        question:
                            "Which gate output is 1 only when exactly two of three inputs are 1?",
                        options: [
                            "2-of-3 detector (sum-of-products)",
                            "Majority gate",
                            "Minority gate",
                            "Parity gate",
                        ],
                        correct: 0,
                    },
                ],
            },
            "Boolean expressions simplification": {
                color: "#F97316",
                questions: [
                    { id: 1, question: "Simplify: A + A·B", options: ["A", "A·B", "B", "A+B"], correct: 0 },
                    { id: 2, question: "Simplify: A·(A + B)", options: ["A", "A + B", "B", "0"], correct: 0 },
                    { id: 3, question: "By De Morgan: (A·B)' equals", options: ["A' + B'", "A'·B'", "A + B", "A·B"], correct: 0 },
                    { id: 4, question: "By De Morgan: (A + B)' equals", options: ["A'·B'", "A' + B'", "A·B", "A + B"], correct: 0 },
                    { id: 5, question: "Simplify: A + A'", options: ["1", "0", "A", "A'"], correct: 0 },
                    { id: 6, question: "Simplify: A·A'", options: ["0", "1", "A", "A'"], correct: 0 },
                    { id: 7, question: "Identity: A + 0 =", options: ["A", "0", "1", "A'"], correct: 0 },
                    { id: 8, question: "Identity: A·1 =", options: ["A", "1", "0", "A'"], correct: 0 },
                    { id: 9, question: "Absorption: A + A·B =", options: ["A", "B", "A·B", "0"], correct: 0 },
                    { id: 10, question: "Absorption: A·(A + B) =", options: ["A", "A + B", "B", "0"], correct: 0 },
                    { id: 11, question: "Simplify: (A + B)·(A + B')", options: ["A + B·B'", "A", "B", "A·B"], correct: 1 },
                    { id: 12, question: "Consensus theorem: AB + A'C + BC =", options: ["AB + A'C", "A + C", "BC", "A'B'"], correct: 0 },
                    { id: 13, question: "Which is dual of A + 0 = A?", options: ["A·1 = A", "A + 1 = 1", "A·0 = 0", "A + 0 = 0"], correct: 0 },
                    { id: 14, question: "Simplify: A + AB + AC", options: ["A", "AB + AC", "A(B + C)", "0"], correct: 0 },
                    { id: 15, question: "Simplify: A·B + A·B'", options: ["A", "B", "A·(B + B')", "0"], correct: 0 },
                    { id: 16, question: "Which law: A + B = B + A?", options: ["Commutative", "Associative", "Distributive", "Absorption"], correct: 0 },
                    { id: 17, question: "Which law: A(B + C) = AB + AC?", options: ["Distributive", "Commutative", "De Morgan", "Absorption"], correct: 0 },
                    { id: 18, question: "Simplify: (A'')", options: ["A", "A'", "0", "1"], correct: 0 },
                    { id: 19, question: "Simplify: AB + A'B", options: ["B", "A", "A·B", "A'·B'"], correct: 0 },
                    { id: 20, question: "Simplify: A ⊕ A (XOR with itself)", options: ["0", "1", "A", "A'"], correct: 0 },
                    { id: 21, question: "XOR expression: A ⊕ B equals", options: ["A·B' + A'·B", "A·B + A'·B'", "A + B", "A·B"], correct: 0 },
                    { id: 22, question: "XNOR expression: A XNOR B equals", options: ["A·B + A'·B'", "A·B' + A'·B", "A + B", "A' + B'"], correct: 0 },
                    { id: 23, question: "Simplify: (A + B')' + B", options: ["A'·B + B", "B + A", "B", "A'"], correct: 2 },
                    { id: 24, question: "Simplify: (A·B)'·A", options: ["A·(A' + B')", "A·B'", "A'·B", "0"], correct: 1 },
                    { id: 25, question: "Which is a SOP form?", options: ["Sum of product terms", "Product of sums", "Single output pipeline", "Simplified output plan"], correct: 0 },
                    { id: 26, question: "Which is a POS form?", options: ["Product of sum terms", "Sum of products", "Polymorphic output standard", "Primary output set"], correct: 0 },
                    { id: 27, question: "Simplify: A·(B + B')·C", options: ["A·C", "B·C", "0", "1"], correct: 0 },
                    { id: 28, question: "Simplify: (A + B) + (A + C)", options: ["A + B + C", "A + B·C", "A·(B + C)", "B + C"], correct: 0 },
                    { id: 29, question: "Which expresses idempotent law?", options: ["A + A = A", "A·A = 0", "A + 0 = 0", "A·1 = 0"], correct: 0 },
                    { id: 30, question: "Simplify: (A + B)·(A' + B)", options: ["B + A·A'", "B", "A", "A'"], correct: 1 },
                    { id: 31, question: "Simplify: A + A·B + A'·B", options: ["A + B", "A·B", "B", "A'"], correct: 0 },
                    { id: 32, question: "Which theorem reduces AB + A'C + BC to AB + A'C?", options: ["Consensus", "Absorption", "De Morgan", "Distributive"], correct: 0 },
                    { id: 33, question: "Simplify: (A·B) + (A·B')", options: ["A", "B", "A·(B + B')", "0"], correct: 0 },
                    { id: 34, question: "Simplify: (A + B)·(A + B')·(A' + B)", options: ["A·B + A'·B", "B", "A", "0"], correct: 1 },
                    { id: 35, question: "What does complement law state for A + A'?", options: ["= 1", "= 0", "= A", "= A'"], correct: 0 },
                    { id: 36, question: "What does complement law state for A·A'?", options: ["= 0", "= 1", "= A", "= A'"], correct: 0 },
                    { id: 37, question: "Simplify: A·(B + C) + A'·(B + C)", options: ["B + C", "A + B + C", "A·B + A'·C", "0"], correct: 0 },
                    { id: 38, question: "Simplify: (A + BC) when A = 1", options: ["1", "BC", "A", "0"], correct: 0 },
                    { id: 39, question: "Which is a tautology (always true)?", options: ["A + A'", "A·A'", "A·0", "A + 0"], correct: 0 },
                    { id: 40, question: "Which is a contradiction (always false)?", options: ["A·A'", "A + A'", "A·1", "A + 1"], correct: 0 },
                    { id: 41, question: "Simplify: A + (B·A')", options: ["A + B·A'", "A + B", "A' + B", "B"], correct: 1 },
                    { id: 42, question: "Simplify: (A + B)·(C + B) equals", options: ["B + A·C", "A·C + B·C", "A + B + C", "A·B·C"], correct: 0 },
                    { id: 43, question: "Which reduces two-level logic: Karnaugh maps or algebraic?", options: ["Both", "Only Karnaugh maps", "Only algebraic", "Neither"], correct: 0 },
                    { id: 44, question: "K-map grouping size must be power of", options: ["2", "3", "5", "7"], correct: 0 },
                    { id: 45, question: "Simplify: A'B + AB", options: ["A ⊕ B", "A·B", "A + B", "A' + B'"], correct: 0 },
                    { id: 46, question: "Simplify: (A + B)·(A + B' )·(A' + B')", options: ["B'", "A", "B", "0"], correct: 0 },
                    { id: 47, question: "Which operation is distributive over the other?", options: ["· over +", "+ over ·", "Neither", "Both"], correct: 0 },
                    { id: 48, question: "Simplify: (A + B)·(A' + C)", options: ["A·C + B·A' + B·C", "A·A' + B·C", "A·C + A'·B + B·C", "A·C + A'·B"], correct: 3 },
                    { id: 49, question: "Simplify using absorption: A + A'·B =", options: ["A + B", "A'·B", "A", "B"], correct: 2 },
                    { id: 50, question: "Simplify: (A + B')' + (A' + B)", options: ["1", "0", "A⊕B", "A\u2219B'"], correct: 0 },
                    { id: 51, question: "Simplify: A·(B + C') + A·B", options: ["A·(B + C')", "A·B + A·C'", "A·C'", "A·B·C'"], correct: 0 },
                    { id: 52, question: "Which is correct: (A + B)'+C' = ?", options: ["A'·B' + C'", "A' + B' + C'", "A'·B'·C'", "A + B + C'"], correct: 0 },
                    { id: 53, question: "Simplify: (A + B)·(A + C)·(B + C)", options: ["A·B + A·C + B·C", "A + B + C", "A·B·C", "0"], correct: 0 },
                    { id: 54, question: "Which is correct: A + AB' + A'B =", options: ["A + B", "A·B", "B", "A'"], correct: 0 },
                    { id: 55, question: "Simplify: (A + A'B) using theorem", options: ["A + B", "A", "B", "A'"], correct: 1 },
                    { id: 56, question: "Simplify: A' + AB", options: ["A' + B", "A + B", "A'·B", "A"], correct: 0 },
                    { id: 57, question: "Which identifies minimal cover?", options: ["Prime implicants", "Min terms", "Max terms", "Literals"], correct: 0 },
                    { id: 58, question: "In SOP, terms are ORed of", options: ["Products", "Sums", "Literals", "Primes"], correct: 0 },
                    { id: 59, question: "In POS, terms are ANDed of", options: ["Sums", "Products", "Literals", "Primes"], correct: 0 },
                    { id: 60, question: "Simplify: AB + A'B + AB'", options: ["A + B", "A·B + A'·B + A·B'", "B + AB'", "A ⊕ B"], correct: 0 },
                    { id: 61, question: "Simplify: A(B + C) + B'C", options: ["AB + AC + B'C", "A + B'C", "B + C", "0"], correct: 0 },
                    { id: 62, question: "Which minimization method is tabular?", options: ["Quine–McCluskey", "Karnaugh map", "Boolean algebra", "Consensus"], correct: 0 },
                    { id: 63, question: "Prime implicant covers minterms and cannot be", options: ["Combined further", "Simplified", "Expressed", "Used"], correct: 0 },
                    { id: 64, question: "Simplify: A·(B + C) + A'·B", options: ["AB + AC + A'B", "A + B", "B + AC", "A·B + A'·B + A·C"], correct: 0 },
                    { id: 65, question: "Which reduces expression using adjacency on K-map?", options: ["Combining neighboring 1s", "Isolating zeros", "Counting minterms", "Eliminating primes"], correct: 0 },
                    { id: 66, question: "Simplify: (A + B)(A + B')(A' + B)", options: ["B", "A", "A'B", "0"], correct: 0 },
                    { id: 67, question: "Which is essential prime implicant?", options: ["Covers minterm not covered by others", "Largest group", "Simplest term", "Highest literal"], correct: 0 },
                    { id: 68, question: "Simplify: A B + A' C + B C where · omitted", options: ["AB + A'C + BC", "A + C", "B + C", "A·B·C"], correct: 0 },
                    { id: 69, question: "Simplify: (A + B')'(B + A')", options: ["(A'·B)·(B + A')", "0", "B·A'", "A·B'"], correct: 2 },
                    { id: 70, question: "Which is De Morgan on three variables: (ABC)' = ?", options: ["A' + B' + C'", "A'·B'·C'", "A + B + C", "A·B·C"], correct: 0 },
                    { id: 71, question: "Simplify: AB + A'B' (two-bit equality)", options: ["XNOR", "XOR", "AND", "OR"], correct: 0 },
                    { id: 72, question: "Simplify: (A + BC)'", options: ["A'·(B' + C')", "A'·(B'·C')", "A + B' + C'", "A' + B' + C'"], correct: 1 },
                    { id: 73, question: "Which of these is a literal?", options: ["A", "A·B", "A + B", "A·(B + C)"], correct: 0 },
                    { id: 74, question: "Simplify: (A + B)(B + C)(A + C)", options: ["AB + AC + BC", "A + B + C", "A·B·C", "0"], correct: 0 },
                    { id: 75, question: "Which term denotes minterm for variables A,B,C?", options: ["A·B·C or A'·B·C etc.", "Any sum", "Any product", "Any literal"], correct: 0 },
                    { id: 76, question: "Simplify: A + A'·B + A'·C", options: ["A + B + C", "A", "A'·(B + C)", "B + C"], correct: 0 },
                    { id: 77, question: "Simplify: (A + B')(A' + B)", options: ["A·B + A'·B'", "A ⊕ B", "A + B", "A' + B'"], correct: 1 },
                    { id: 78, question: "Which is property of XOR: A ⊕ 0 =", options: ["A", "0", "1", "A'"], correct: 0 },
                    { id: 79, question: "Which is property of XOR: A ⊕ 1 =", options: ["A'", "A", "0", "1"], correct: 0 },
                    { id: 80, question: "Simplify: (A + B') + (A' + B)", options: ["A + B + A' + B' = 1", "A + B", "A' + B'", "0"], correct: 0 },
                    { id: 81, question: "Simplify: (A·B) + (A·B') + (A'·B)", options: ["A + B", "A·B", "B + A", "A' + B'"], correct: 0 },
                    { id: 82, question: "Using consensus, AB + A'C + BC simplifies to", options: ["AB + A'C", "A + C", "B + C", "AB + BC"], correct: 0 },
                    { id: 83, question: "Simplify: A(B' + C') + A'B", options: ["A·B' + A·C' + A'·B", "B + C'", "A + B", "0"], correct: 0 },
                    { id: 84, question: "Which yields minimal terms: combining K-map groups reduces", options: ["Literals per term", "Number of variables", "Number of outputs", "Number of inputs"], correct: 0 },
                    { id: 85, question: "Simplify: (A + B)(A' + B')(A + B')", options: ["B' + A·B", "B'·A'", "B", "0"], correct: 0 },
                    { id: 86, question: "Simplify: A + BC when A covers BC if A = 1 results in", options: ["1", "BC", "A", "0"], correct: 0 },
                    { id: 87, question: "Which identifies redundant term: if F = A + AB, AB is", options: ["Redundant", "Essential", "Prime", "Minterm"], correct: 0 },
                    { id: 88, question: "Simplify: A'B + AB + AB'", options: ["A + B", "A·B + A'·B + A·B'", "A ⊕ B", "B"], correct: 3 },
                    { id: 89, question: "Simplify: (A + B)(A + C) using distributive", options: ["A + BC", "A + B + C", "AB + AC", "A·(B + C)"], correct: 0 },
                    { id: 90, question: "Which is De Morgan correct: (A + B·C)' = ?", options: ["A'·(B·C)' = A'·(B' + C')", "A' + B'·C'", "A·B·C", "A' + B + C"], correct: 0 },
                    { id: 91, question: "Simplify: A·(B + C) + B·(A + C)", options: ["AB + AC + AB + BC = AB + AC + BC", "A + B + C", "A·B + B·C", "A·C"], correct: 0 },
                    { id: 92, question: "Which is correct identity: A + AB' + AB = ?", options: ["A + B'", "A", "AB", "B"], correct: 1 },
                    { id: 93, question: "Simplify: (A + B)(A' + C)(B + C)", options: ["AB + AC + BC", "A + B + C", "A·B·C", "0"], correct: 0 },
                    { id: 94, question: "Which reduces XOR to SOP: A ⊕ B = ?", options: ["A·B' + A'·B", "A·B + A'·B'", "A + B", "A·B"], correct: 0 },
                    { id: 95, question: "Simplify: (A + B')·(A + C') when A=0", options: ["B'·C'", "B + C", "0", "1"], correct: 0 },
                    { id: 96, question: "Which is correct: A + BC = (A + B)(A + C) is", options: ["Distributive expansion", "De Morgan", "Absorption", "Consensus"], correct: 0 },
                    { id: 97, question: "Simplify: (A + B')(A' + B')(A + B)", options: ["B' + A·B", "B'·A'", "B", "0"], correct: 0 },
                    { id: 98, question: "Which describes prime implicant chart usage?", options: ["Select essential primes to cover all minterms", "Make more minterms", "Increase terms", "Eliminate K-map"], correct: 0 },
                    { id: 99, question: "Simplify: A'B' + A'B + AB' + AB equals", options: ["1", "0", "A + B", "A·B"], correct: 0 },
                    { id: 100, question: "Final simplification: F = A B' + A C + B C simplifies to", options: ["A·B' + A·C + B·C (no further)", "A + BC", "B + C", "A·(B' + C)"], correct: 1 }
                ],
            },
            "Mixed questions from Number Systems & digital logic": {
                color: "#F59E0B",
                questions: [
                    { id: 1, question: "The binary equivalent of decimal 25 is:", options: ["11001", "10101", "11111", "10011"], correct: 1 },
                    { id: 2, question: "Which number system uses base 16?", options: ["Octal", "Hexadecimal", "Binary", "Decimal"], correct: 2 },
                    { id: 3, question: "In binary, 1011 + 110 = ?", options: ["10001", "10001.1", "10001.0", "10001.11"], correct: 1 },
                    { id: 4, question: "What is 2’s complement of 1001?", options: ["0111", "1111", "1001", "0110"], correct: 4 },
                    { id: 5, question: "Octal number system uses base:", options: ["2", "8", "10", "16"], correct: 2 },
                    { id: 6, question: "Which logic gate is called a universal gate?", options: ["AND", "OR", "NAND", "XOR"], correct: 3 },
                    { id: 7, question: "The NOT gate output is:", options: ["Same as input", "Inverted input", "Always 1", "Always 0"], correct: 2 },
                    { id: 8, question: "Binary number 1111 is equal to decimal:", options: ["15", "16", "17", "14"], correct: 1 },
                    { id: 9, question: "Which gate gives high output only when both inputs are high?", options: ["AND", "OR", "NAND", "NOR"], correct: 1 },
                    { id: 10, question: "Ex-OR gate output is 1 when:", options: ["Inputs are same", "Inputs are different", "All inputs are 0", "None"], correct: 2 },
                    { id: 11, question: "The base of binary system is:", options: ["8", "16", "2", "10"], correct: 3 },
                    { id: 12, question: "Which logic circuit detects odd parity?", options: ["AND gate", "OR gate", "XOR gate", "NAND gate"], correct: 3 },
                    { id: 13, question: "What is the decimal equivalent of hexadecimal 1A?", options: ["25", "26", "27", "28"], correct: 2 },
                    { id: 14, question: "Which flip-flop is used as a basic memory cell?", options: ["JK", "SR", "D", "T"], correct: 2 },
                    { id: 15, question: "Which gate is known as Inverter?", options: ["AND", "OR", "NOT", "NOR"], correct: 3 },
                    { id: 16, question: "The hexadecimal number system has digits:", options: ["0-9", "0-7", "0-9 and A-F", "0-15"], correct: 3 },
                    { id: 17, question: "What is the 1’s complement of 0101?", options: ["1010", "1111", "1001", "0110"], correct: 1 },
                    { id: 18, question: "Full adder has how many inputs?", options: ["1", "2", "3", "4"], correct: 3 },
                    { id: 19, question: "Which flip-flop eliminates race around condition?", options: ["SR", "JK", "D", "Master-Slave JK"], correct: 4 },
                    { id: 20, question: "The truth table of AND gate shows output is 1 only when:", options: ["One input is 1", "Both inputs are 1", "All inputs are 0", "Inputs differ"], correct: 2 },

                    // --- Continue until 100 ---
                    { id: 21, question: "Decimal 45 in binary is:", options: ["101101", "101011", "110101", "111001"], correct: 1 },
                    { id: 22, question: "Gray code is mainly used to:", options: ["Detect errors", "Prevent errors during transitions", "Arithmetic operations", "Store data"], correct: 2 },
                    { id: 23, question: "Which number system is base 8?", options: ["Binary", "Decimal", "Octal", "Hexadecimal"], correct: 3 },
                    { id: 24, question: "Logic gate with all inputs low and output high is:", options: ["OR", "AND", "NOR", "XOR"], correct: 3 },
                    { id: 25, question: "The binary number 100000 equals decimal:", options: ["16", "32", "64", "128"], correct: 2 },
                    { id: 26, question: "In digital circuits, fan-in means:", options: ["Power consumed", "Speed", "Number of inputs", "Propagation delay"], correct: 3 },
                    { id: 27, question: "Which logic family is fastest?", options: ["RTL", "DTL", "TTL", "ECL"], correct: 4 },
                    { id: 28, question: "The carry output of a half adder is generated by:", options: ["XOR", "AND", "OR", "NOR"], correct: 2 },
                    { id: 29, question: "BCD means:", options: ["Binary Coded Decimal", "Binary Counted Digit", "Bit Counted Data", "Base Coded Data"], correct: 1 },
                    { id: 30, question: "NAND gate followed by NOT gate works as:", options: ["NOR", "AND", "XOR", "OR"], correct: 2 },
                    { id: 31, question: "Which logic gate outputs 1 only when both inputs are 1?", options: ["OR", "XOR", "AND", "NAND"], correct: 3 },
                    { id: 32, question: "What is the 2’s complement of binary 1101?", options: ["0010", "0101", "1011", "1111"], correct: 1 },
                    { id: 33, question: "Hexadecimal number system uses how many digits?", options: ["8", "10", "12", "16"], correct: 4 },
                    { id: 34, question: "Octal number system is based on which radix?", options: ["2", "8", "10", "16"], correct: 2 },
                    { id: 35, question: "Which gate is called the universal gate?", options: ["AND", "NAND", "OR", "XOR"], correct: 2 },
                    { id: 36, question: "What is the binary equivalent of decimal 25?", options: ["11001", "10011", "11101", "10101"], correct: 1 },
                    { id: 37, question: "Which of the following is not a positional number system?", options: ["Decimal", "Roman", "Binary", "Octal"], correct: 2 },
                    { id: 38, question: "Which Boolean algebra law states A+0 = A?", options: ["Identity Law", "Complement Law", "Associative Law", "Distributive Law"], correct: 1 },
                    { id: 39, question: "What is the result of (1011)₂ + (1101)₂?", options: ["10100", "11000", "10111", "11000"], correct: 2 },
                    { id: 40, question: "How many bits are needed to represent 256 numbers?", options: ["7", "8", "9", "10"], correct: 2 },
                    { id: 41, question: "What is the output of XOR gate when inputs are 1 and 1?", options: ["0", "1", "Undefined", "Depends"], correct: 1 },
                    { id: 42, question: "Which gate performs the function of addition modulo 2?", options: ["XOR", "AND", "OR", "NAND"], correct: 1 },
                    { id: 43, question: "What is the binary equivalent of (2F)₁₆?", options: ["101011", "100111", "101111", "110011"], correct: 3 },
                    { id: 44, question: "What is the 1’s complement of 101010?", options: ["010101", "101010", "110011", "111111"], correct: 1 },
                    { id: 45, question: "Which flip-flop is called a basic memory element?", options: ["SR Flip-Flop", "JK Flip-Flop", "D Flip-Flop", "T Flip-Flop"], correct: 1 },
                    { id: 46, question: "What is the base of the binary number system?", options: ["2", "8", "10", "16"], correct: 1 },
                    { id: 47, question: "Which of the following is not a valid binary number?", options: ["1101", "1021", "1010", "1001"], correct: 2 },
                    { id: 48, question: "What is the Gray code equivalent of binary 1011?", options: ["1110", "1001", "1101", "1010"], correct: 3 },
                    { id: 49, question: "How many unique values can 4 bits represent?", options: ["8", "16", "32", "64"], correct: 2 },
                    { id: 50, question: "Which operation is performed by a half-adder?", options: ["Addition only", "Subtraction", "Multiplication", "Division"], correct: 1 },
                    { id: 51, question: "Which Boolean law states A+A = A?", options: ["Idempotent Law", "Identity Law", "Complement Law", "Distributive Law"], correct: 1 },
                    { id: 52, question: "What is the binary equivalent of decimal 45?", options: ["101010", "101101", "110101", "111001"], correct: 2 },
                    { id: 53, question: "Which of the following is a sequential circuit?", options: ["AND gate", "OR gate", "Flip-Flop", "XOR gate"], correct: 3 },
                    { id: 54, question: "What is the decimal equivalent of octal 57?", options: ["47", "49", "55", "63"], correct: 4 },
                    { id: 55, question: "Which logic gate has output 0 only when both inputs are 1?", options: ["NAND", "NOR", "XOR", "OR"], correct: 1 },
                    { id: 56, question: "What is the 2’s complement of 0110?", options: ["1001", "1010", "1110", "0100"], correct: 2 },
                    { id: 57, question: "Which number system is also known as base-12?", options: ["Binary", "Duodecimal", "Hexadecimal", "Octal"], correct: 2 },
                    { id: 58, question: "What is the binary equivalent of (7A)₁₆?", options: ["1111100", "1111010", "1111001", "1110110"], correct: 2 },
                    { id: 59, question: "What is the main function of a decoder?", options: ["To encode data", "To detect parity", "To convert binary to unique output", "To perform subtraction"], correct: 3 },
                    { id: 60, question: "Which of the following represents binary 11111111 in decimal?", options: ["254", "255", "256", "257"], correct: 2 },
                    { id: 61, question: "How many symbols are used in the binary number system?", options: ["1", "2", "4", "10"], correct: 2 },
                    { id: 62, question: "What is the full form of ASCII?", options: ["American Standard Code for Information Interchange", "Advanced System Code for International Integration", "Applied Standard Code for Information Index", "None"], correct: 1 },
                    { id: 63, question: "Which logic gate gives 1 output if any input is 1?", options: ["AND", "NAND", "OR", "XOR"], correct: 3 },
                    { id: 64, question: "What is the decimal equivalent of binary 1110?", options: ["12", "13", "14", "15"], correct: 3 },
                    { id: 65, question: "Which of the following is an example of a combinational circuit?", options: ["Counter", "Shift Register", "Multiplexer", "Flip-Flop"], correct: 3 },
                    { id: 66, question: "What is the range of unsigned 8-bit binary numbers?", options: ["0 to 127", "0 to 255", "1 to 256", "–128 to 127"], correct: 2 },
                    { id: 67, question: "Which Boolean law states A·1 = A?", options: ["Identity Law", "Null Law", "Idempotent Law", "Distributive Law"], correct: 1 },
                    { id: 68, question: "What is the octal equivalent of binary 110101?", options: ["65", "52", "55", "64"], correct: 3 },
                    { id: 69, question: "Which logic gate gives 0 output if any input is 1?", options: ["NAND", "NOR", "XOR", "AND"], correct: 2 },
                    { id: 70, question: "What is the binary equivalent of decimal 100?", options: ["1100100", "1100010", "1100110", "1101000"], correct: 1 },
                    { id: 71, question: "Which code is used to detect errors in data transmission?", options: ["Gray Code", "BCD", "Parity Bit", "Excess-3"], correct: 3 },
                    { id: 72, question: "What is the decimal equivalent of hexadecimal FF?", options: ["254", "255", "256", "257"], correct: 2 },
                    { id: 73, question: "What is the binary equivalent of octal 25?", options: ["10101", "10010", "11001", "10110"], correct: 1 },
                    { id: 74, question: "Which flip-flop eliminates the invalid state of SR flip-flop?", options: ["D Flip-Flop", "JK Flip-Flop", "T Flip-Flop", "Master-Slave Flip-Flop"], correct: 2 },
                    { id: 75, question: "What is the base of hexadecimal number system?", options: ["2", "8", "10", "16"], correct: 4 },
                    { id: 76, question: "What is the 1’s complement of 0000?", options: ["0000", "1111", "1000", "None"], correct: 2 },
                    { id: 77, question: "Which Boolean expression represents NAND gate?", options: ["(AB)'", "A+B", "A·B", "(A+B)'"], correct: 1 },
                    { id: 78, question: "How many unique outputs does a 3-to-8 decoder produce?", options: ["4", "6", "8", "10"], correct: 3 },
                    { id: 79, question: "What is the binary equivalent of decimal 255?", options: ["1111111", "11111111", "111111111", "10101010"], correct: 2 },
                    { id: 80, question: "Which circuit is used to store 1-bit of information?", options: ["Latch", "Decoder", "Encoder", "Multiplexer"], correct: 1 },
                    { id: 81, question: "What is the excess-3 code of decimal 5?", options: ["1000", "1001", "1100", "0111"], correct: 1 },
                    { id: 82, question: "Which Boolean expression is correct for OR gate?", options: ["A·B", "A+B", "(AB)'", "A⊕B"], correct: 2 },
                    { id: 83, question: "What is the binary equivalent of (3C)₁₆?", options: ["111001", "111100", "110011", "101111"], correct: 2 },
                    { id: 84, question: "Which of the following represents 32 in hexadecimal?", options: ["20", "21", "22", "23"], correct: 1 },
                    { id: 85, question: "What is the result of (1110)₂ – (1011)₂?", options: ["0011", "0100", "0001", "0010"], correct: 3 },
                    { id: 86, question: "Which code is non-weighted?", options: ["BCD", "Excess-3", "Gray", "8421"], correct: 3 },
                    { id: 87, question: "How many 4-to-1 MUX are required to implement 8-to-1 MUX?", options: ["1", "2", "3", "4"], correct: 2 },
                    { id: 88, question: "Which gate is known as an inverter?", options: ["AND", "NOR", "NOT", "XOR"], correct: 3 },
                    { id: 89, question: "What is the binary addition of (1010)₂ + (0111)₂?", options: ["1111", "10000", "10111", "10001"], correct: 2 },
                    { id: 90, question: "Which of the following is not a binary code?", options: ["BCD", "Gray", "Octal", "Excess-3"], correct: 3 },
                    { id: 91, question: "What is the decimal value of binary 111111?", options: ["60", "61", "62", "63"], correct: 4 },
                    { id: 92, question: "Which of the following represents the complement law?", options: ["A+A' = 1", "A+A = A", "A+0 = A", "A·1 = A"], correct: 1 },
                    { id: 93, question: "What is the octal equivalent of decimal 100?", options: ["144", "145", "146", "147"], correct: 1 },
                    { id: 94, question: "Which of the following is a bistable device?", options: ["Latch", "Multiplexer", "Decoder", "Adder"], correct: 1 },
                    { id: 95, question: "What is the hexadecimal equivalent of decimal 255?", options: ["FE", "FF", "100", "F0"], correct: 2 },
                    { id: 96, question: "Which logic gate gives output 1 when inputs are different?", options: ["AND", "XOR", "OR", "NAND"], correct: 2 },
                    { id: 97, question: "What is the binary equivalent of decimal 75?", options: ["1001011", "1001101", "1001010", "1001111"], correct: 1 },
                    { id: 98, question: "Which Boolean algebra property states A(B+C) = AB+AC?", options: ["Associative Law", "Distributive Law", "Idempotent Law", "Identity Law"], correct: 2 },
                    { id: 99, question: "What is the 2’s complement of 1110?", options: ["0010", "0100", "0101", "0110"], correct: 1 },
                    { id: 100, question: "Which circuit is used for binary to decimal conversion?", options: ["Encoder", "Decoder", "Counter", "Multiplexer"], correct: 2 }
                ],
            }

        },
    },
    "Operating Systems": {
        color: "#6366F1",
        subtopics: {
            "Functions of OS; user interface concepts": {
                color: "#6366F1",
                questions: [
                    { id: 1, question: "Which of the following is NOT a function of an operating system?", options: ["Process Management", "Memory Management", "Compiler Optimization", "File Management"], correct: 3 },
                    { id: 2, question: "The operating system acts as a bridge between:", options: ["Hardware and Software", "Compiler and User", "Memory and CPU", "Input and Output devices"], correct: 1 },
                    { id: 3, question: "Which OS function ensures that multiple programs can run at the same time?", options: ["Scheduling", "Multitasking", "Deadlock", "Paging"], correct: 2 },
                    { id: 4, question: "Which component of OS manages the allocation and deallocation of memory?", options: ["File System", "Memory Manager", "Process Manager", "I/O Manager"], correct: 2 },
                    { id: 5, question: "Which type of user interface requires users to type commands?", options: ["GUI", "CLI", "Menu-driven", "Touch Interface"], correct: 2 },
                    { id: 6, question: "A Graphical User Interface (GUI) uses:", options: ["Text Commands", "Windows, Icons, Menus", "Only Keyboard", "Batch Files"], correct: 2 },
                    { id: 7, question: "Which OS function manages communication between devices?", options: ["I/O Management", "Security", "Scheduling", "Networking"], correct: 1 },
                    { id: 8, question: "Which OS function prevents unauthorized access?", options: ["Scheduling", "Memory Management", "Security", "I/O Management"], correct: 3 },
                    { id: 9, question: "Which of the following is an example of system call?", options: ["open()", "for()", "printf()", "if()"], correct: 1 },
                    { id: 10, question: "Which of the following is a menu-driven interface?", options: ["MS-DOS", "Windows Explorer", "UNIX Terminal", "Linux CLI"], correct: 2 },
                    { id: 11, question: "What is the role of OS in file management?", options: ["Creating and deleting files", "Allocating CPU", "Scheduling processes", "Compiling programs"], correct: 1 },
                    { id: 12, question: "The interface that uses touchscreens for input is:", options: ["CLI", "Menu-driven", "NUI", "GUI"], correct: 3 },
                    { id: 13, question: "Which OS function decides the order of process execution?", options: ["Memory Management", "Scheduling", "I/O Control", "Security"], correct: 2 },
                    { id: 14, question: "Which OS manages CPU, memory, and I/O devices?", options: ["Database", "Middleware", "Operating System", "Application Software"], correct: 3 },
                    { id: 15, question: "Which user interface concept is based on icons and windows?", options: ["GUI", "CLI", "Batch Interface", "Shell"], correct: 1 },
                    { id: 16, question: "Virtual memory is managed by:", options: ["CPU", "Compiler", "Operating System", "Cache"], correct: 3 },
                    { id: 17, question: "Which function of OS ensures that processes do not interfere with each other?", options: ["Security", "Isolation", "Deadlock Handling", "Scheduling"], correct: 2 },
                    { id: 18, question: "Which OS function provides a mechanism to run programs?", options: ["Process Management", "File Management", "Networking", "Compiling"], correct: 1 },
                    { id: 19, question: "CLI stands for:", options: ["Computer Line Input", "Command Line Interface", "Common Language Interaction", "Control Logic Interface"], correct: 2 },
                    { id: 20, question: "Which of the following is NOT a type of user interface?", options: ["GUI", "CLI", "Touch Interface", "File System"], correct: 4 },
                    { id: 21, question: "Deadlock prevention is part of which OS function?", options: ["Memory Management", "Process Management", "I/O Management", "File Management"], correct: 2 },
                    { id: 22, question: "Which interface uses predefined menus to interact with users?", options: ["GUI", "CLI", "Menu-driven", "Batch"], correct: 3 },
                    { id: 23, question: "Kernel is responsible for:", options: ["File Storage", "Process Management", "User Interface", "Graphics"], correct: 2 },
                    { id: 24, question: "Which OS function ensures fairness in CPU usage?", options: ["Scheduling", "File Management", "Security", "Networking"], correct: 1 },
                    { id: 25, question: "The OS provides abstraction to:", options: ["Hardware", "Software", "Compiler", "Users only"], correct: 1 },
                    { id: 26, question: "Which of the following OS functions maintains directories?", options: ["Memory Management", "File Management", "I/O Management", "Security"], correct: 2 },
                    { id: 27, question: "Which is an example of GUI-based OS?", options: ["MS-DOS", "Linux CLI", "Windows 11", "UNIX"], correct: 3 },
                    { id: 28, question: "The main function of Shell is:", options: ["Scheduling", "Interface between user and kernel", "Memory Allocation", "Process Isolation"], correct: 2 },
                    { id: 29, question: "Which OS function provides multitasking?", options: ["Process Management", "Networking", "File System", "Security"], correct: 1 },
                    { id: 30, question: "Which interface is more user-friendly for beginners?", options: ["CLI", "GUI", "Batch", "Menu-driven"], correct: 2 },
                    { id: 31, question: "Which OS function provides recovery after failure?", options: ["I/O Management", "Error Detection", "Security", "Networking"], correct: 2 },
                    { id: 32, question: "UNIX and Linux are examples of:", options: ["CLI-based OS", "GUI-based OS", "Single-tasking OS", "Embedded OS"], correct: 1 },
                    { id: 33, question: "Which OS function hides hardware details from the user?", options: ["Abstraction", "Scheduling", "Virtualization", "Security"], correct: 1 },
                    { id: 34, question: "Which function manages drivers for printers and keyboards?", options: ["File System", "I/O Management", "Security", "Compiler"], correct: 2 },
                    { id: 35, question: "User authentication is handled by:", options: ["File Management", "Networking", "Security", "Process Management"], correct: 3 },
                    { id: 36, question: "Which OS function handles inter-process communication?", options: ["Memory Management", "Networking", "Process Management", "I/O Management"], correct: 3 },
                    { id: 37, question: "Which OS allows only one user at a time?", options: ["Multi-user", "Single-user", "Distributed", "Batch OS"], correct: 2 },
                    { id: 38, question: "Which interface is commonly used in ATMs?", options: ["CLI", "Menu-driven", "GUI", "Batch"], correct: 2 },
                    { id: 39, question: "The function of OS in networking is:", options: ["Sending emails", "Providing communication protocols", "Browsing Internet", "File deletion"], correct: 2 },
                    { id: 40, question: "Which OS function provides protection against viruses?", options: ["Security", "Process Management", "Error Handling", "File Management"], correct: 1 },
                    { id: 41, question: "System calls provide interface between:", options: ["Kernel and Hardware", "Application and OS", "Compiler and CPU", "User and Database"], correct: 2 },
                    { id: 42, question: "Which OS function controls resource sharing?", options: ["Memory Management", "Scheduling", "Resource Management", "File System"], correct: 3 },
                    { id: 43, question: "CLI is best suited for:", options: ["Beginners", "Power Users", "Children", "Touch Screen Users"], correct: 2 },
                    { id: 44, question: "The interface where user selects from a list of options is:", options: ["CLI", "Menu-driven", "GUI", "Shell"], correct: 2 },
                    { id: 45, question: "The OS manages hardware using:", options: ["Drivers", "Compilers", "Interpreters", "Schedulers"], correct: 1 },
                    { id: 46, question: "Which of these is an example of a real-time OS?", options: ["Windows XP", "Linux", "VxWorks", "MS-DOS"], correct: 3 },
                    { id: 47, question: "Which OS interface is fastest for expert users?", options: ["GUI", "Menu-driven", "CLI", "Touch"], correct: 3 },
                    { id: 48, question: "The OS manages multitasking using:", options: ["Threading", "Pipelining", "Buffering", "Paging"], correct: 1 },
                    { id: 49, question: "Which OS function ensures that data is saved properly?", options: ["File Management", "Security", "I/O Management", "Networking"], correct: 1 },
                    { id: 50, question: "Which type of OS allows multiple users to share resources simultaneously?", options: ["Single-user", "Multi-user", "Embedded", "Mobile OS"], correct: 2 },
                    { id: 51, question: "The OS provides ________ to execute programs.", options: ["Platform", "Algorithm", "Compiler", "Protocol"], correct: 1 },
                    { id: 52, question: "Which OS function checks system health and errors?", options: ["Debugging", "Error Detection", "Memory Allocation", "Virtualization"], correct: 2 },
                    { id: 53, question: "Which user interface concept is widely used in smartphones?", options: ["CLI", "GUI", "Touch Interface", "Batch"], correct: 3 },
                    { id: 54, question: "Which OS function allocates CPU to processes?", options: ["Scheduling", "Security", "Networking", "Deadlock Prevention"], correct: 1 },
                    { id: 55, question: "Batch interface is mostly used in:", options: ["Modern OS", "Old OS", "Real-time OS", "Embedded OS"], correct: 2 },
                    { id: 56, question: "Which interface is most visually appealing?", options: ["GUI", "CLI", "Batch", "Menu-driven"], correct: 1 },
                    { id: 57, question: "Which OS function allows multitasking in smartphones?", options: ["Process Management", "File System", "Networking", "Security"], correct: 1 },
                    { id: 58, question: "Which OS provides time-sharing?", options: ["MS-DOS", "UNIX", "Windows 95", "VxWorks"], correct: 2 },
                    { id: 59, question: "Which interface allows drag-and-drop operations?", options: ["CLI", "Batch", "GUI", "Menu-driven"], correct: 3 },
                    { id: 60, question: "File permissions in OS are part of:", options: ["Scheduling", "Security", "I/O Management", "Memory Management"], correct: 2 },
                    { id: 61, question: "Which OS function handles device buffering?", options: ["Memory Management", "I/O Management", "Process Scheduling", "File Handling"], correct: 2 },
                    { id: 62, question: "The OS controls execution of programs using:", options: ["Threads", "Processes", "Files", "Blocks"], correct: 2 },
                    { id: 63, question: "Which of these is NOT a type of user interface?", options: ["GUI", "CLI", "NUI", "Compiler"], correct: 4 },
                    { id: 64, question: "Which function of OS ensures crash recovery?", options: ["Memory Management", "Error Handling", "Networking", "I/O Management"], correct: 2 },
                    { id: 65, question: "Which OS function maintains a queue of processes?", options: ["Networking", "Scheduling", "Memory Management", "Security"], correct: 2 },
                    { id: 66, question: "Which interface is best for visually impaired people?", options: ["Voice User Interface", "CLI", "GUI", "Batch"], correct: 1 },
                    { id: 67, question: "Which OS handles background processes?", options: ["Security Manager", "Scheduler", "I/O Manager", "Compiler"], correct: 2 },
                    { id: 68, question: "The OS provides system utilities like:", options: ["Notepad", "Disk Cleanup", "Paint", "MS Word"], correct: 2 },
                    { id: 69, question: "Which OS function allows file search?", options: ["Process Management", "File Management", "Security", "Networking"], correct: 2 },
                    { id: 70, question: "Which interface concept uses gestures?", options: ["CLI", "GUI", "NUI", "Batch"], correct: 3 },
                    { id: 71, question: "Which OS function controls execution priority?", options: ["Scheduling", "File System", "Networking", "Security"], correct: 1 },
                    { id: 72, question: "Shell provides:", options: ["Compiler", "User Interface", "CPU Scheduling", "I/O Drivers"], correct: 2 },
                    { id: 73, question: "Which interface is used in voice assistants?", options: ["GUI", "CLI", "VUI", "Batch"], correct: 3 },
                    { id: 74, question: "The OS ensures that critical processes get CPU through:", options: ["Preemption", "Deadlock", "Paging", "Interrupts"], correct: 1 },
                    { id: 75, question: "Which interface concept is used in gaming consoles?", options: ["CLI", "GUI", "NUI", "Menu-driven"], correct: 3 },
                    { id: 76, question: "Which OS function allows copying and moving of files?", options: ["File Management", "Process Scheduling", "Security", "Networking"], correct: 1 },
                    { id: 77, question: "Which OS function manages process states?", options: ["Memory Manager", "Scheduler", "File Manager", "Compiler"], correct: 2 },
                    { id: 78, question: "The OS provides hardware independence using:", options: ["Abstraction", "Virtualization", "Scheduling", "Security"], correct: 1 },
                    { id: 79, question: "Which type of OS is used in washing machines?", options: ["Real-time OS", "Multi-user OS", "Batch OS", "Mobile OS"], correct: 1 },
                    { id: 80, question: "Which OS interface is easiest for beginners?", options: ["CLI", "GUI", "Batch", "Menu-driven"], correct: 2 }
                ],
            },
            "Types of OS: batch, time-sharing, real-time, distributed": {
                color: "#8B5CF6",
                questions: [
                    { id: 1, question: "Which type of OS executes jobs in batches without user interaction?", options: ["Time-sharing OS", "Batch OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 2, question: "In which OS do multiple users share the CPU simultaneously?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 3, question: "Which OS is used where response time is very crucial like air traffic control?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 3 },
                    { id: 4, question: "Which OS connects multiple computers to work as a single system?", options: ["Batch OS", "Distributed OS", "Time-sharing OS", "Real-time OS"], correct: 2 },
                    { id: 5, question: "Batch OS was mainly used in?", options: ["Old mainframes", "Smartphones", "Cloud computing", "Gaming consoles"], correct: 1 },
                    { id: 6, question: "Time-sharing OS is also known as?", options: ["Multitasking OS", "Single-user OS", "Batch OS", "Embedded OS"], correct: 1 },
                    { id: 7, question: "Which OS type reduces CPU idle time?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 8, question: "Real-time OS is mostly used in?", options: ["Airline reservation", "Robotics", "Banking systems", "Payroll systems"], correct: 2 },
                    { id: 9, question: "Which OS processes jobs without prioritization?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 1 },
                    { id: 10, question: "Which OS allows remote resources to act like local resources?", options: ["Time-sharing OS", "Real-time OS", "Batch OS", "Distributed OS"], correct: 4 },

                    { id: 11, question: "Which OS executes tasks with guaranteed deadlines?", options: ["Batch OS", "Distributed OS", "Real-time OS", "Time-sharing OS"], correct: 3 },
                    { id: 12, question: "In time-sharing OS, CPU time is divided into?", options: ["Pages", "Frames", "Time slices", "Processes"], correct: 3 },
                    { id: 13, question: "Which OS reduces turnaround time for long jobs?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 1 },
                    { id: 14, question: "Which OS balances load among multiple systems?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 4 },
                    { id: 15, question: "Which OS is best suited for ATM machines?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 2 },
                    { id: 16, question: "Main disadvantage of batch OS?", options: ["No direct user interaction", "Slow performance", "Too much memory usage", "High power consumption"], correct: 1 },
                    { id: 17, question: "UNIX is an example of?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 18, question: "Which OS is used in multiprocessor systems?", options: ["Distributed OS", "Batch OS", "Time-sharing OS", "Real-time OS"], correct: 1 },
                    { id: 19, question: "Real-time OS is divided into?", options: ["Soft and hard", "Batch and interactive", "User and system", "Preemptive and cooperative"], correct: 1 },
                    { id: 20, question: "Which OS improves CPU utilization?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 21, question: "Which type of OS allows multiple users to interact with the computer at the same time?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 22, question: "Which OS is best suited for embedded systems?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 2 },
                    { id: 23, question: "Which OS provides CPU scheduling in small time units?", options: ["Batch OS", "Time-sharing OS", "Distributed OS", "Real-time OS"], correct: 2 },
                    { id: 24, question: "In which OS type are jobs collected and executed without user interaction?", options: ["Time-sharing OS", "Batch OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 25, question: "Which OS type is designed for systems with strict deadlines?", options: ["Real-time OS", "Time-sharing OS", "Batch OS", "Distributed OS"], correct: 1 },
                    { id: 26, question: "Distributed OS manages a group of ____.", options: ["Tasks", "Processors", "Users", "Registers"], correct: 2 },
                    { id: 27, question: "Which OS type focuses on fairness among users?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 28, question: "Air traffic control systems work on which OS?", options: ["Distributed OS", "Real-time OS", "Time-sharing OS", "Batch OS"], correct: 2 },
                    { id: 29, question: "Batch OS has which major disadvantage?", options: ["Long turnaround time", "High cost", "No multitasking", "No user interface"], correct: 1 },
                    { id: 30, question: "Which OS type is also called 'multi-user OS'?", options: ["Time-sharing OS", "Batch OS", "Real-time OS", "Distributed OS"], correct: 1 },
                    { id: 31, question: "Which OS is best suited for ATM machines?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 2 },
                    { id: 32, question: "Which OS can manage a cluster of computers?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 4 },
                    { id: 33, question: "Which OS uses a concept of 'quantum' for CPU scheduling?", options: ["Real-time OS", "Batch OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 34, question: "Which OS is not interactive?", options: ["Batch OS", "Time-sharing OS", "Distributed OS", "Real-time OS"], correct: 1 },
                    { id: 35, question: "Which OS is ideal for control of industrial robots?", options: ["Real-time OS", "Time-sharing OS", "Batch OS", "Distributed OS"], correct: 1 },
                    { id: 36, question: "In which OS does each process get a fixed CPU time slice?", options: ["Batch OS", "Distributed OS", "Time-sharing OS", "Real-time OS"], correct: 3 },
                    { id: 37, question: "Which OS provides high reliability through redundancy?", options: ["Real-time OS", "Batch OS", "Time-sharing OS", "Distributed OS"], correct: 4 },
                    { id: 38, question: "Which OS type uses job queues?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 1 },
                    { id: 39, question: "Which OS allows execution of programs in parallel across multiple machines?", options: ["Batch OS", "Distributed OS", "Real-time OS", "Time-sharing OS"], correct: 2 },
                    { id: 40, question: "Which OS is used in online transaction systems?", options: ["Batch OS", "Distributed OS", "Real-time OS", "Time-sharing OS"], correct: 3 },
                    { id: 41, question: "Turnaround time is high in which OS?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 1 },
                    { id: 42, question: "Which OS is used in hospital monitoring systems?", options: ["Real-time OS", "Time-sharing OS", "Batch OS", "Distributed OS"], correct: 1 },
                    { id: 43, question: "Which OS ensures simultaneous access to the system by multiple users?", options: ["Batch OS", "Time-sharing OS", "Real-time OS", "Distributed OS"], correct: 2 },
                    { id: 44, question: "Which OS type gives priority to deadline-sensitive tasks?", options: ["Batch OS", "Time-sharing OS", "Distributed OS", "Real-time OS"], correct: 4 },
                    { id: 45, question: "Which OS reduces idle CPU time by grouping jobs?", options: ["Time-sharing OS", "Distributed OS", "Batch OS", "Real-time OS"], correct: 3 },
                    { id: 46, question: "Which OS type requires load balancing across multiple systems?", options: ["Distributed OS", "Real-time OS", "Batch OS", "Time-sharing OS"], correct: 1 },
                    { id: 47, question: "Which OS is designed for maximum CPU utilization?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 48, question: "Smartphone OS like Android and iOS fall under?", options: ["Batch OS", "Real-time OS", "Time-sharing OS", "Distributed OS"], correct: 3 },
                    { id: 49, question: "Which OS ensures that all jobs complete execution eventually, even if delayed?", options: ["Real-time OS", "Time-sharing OS", "Batch OS", "Distributed OS"], correct: 2 },
                    { id: 50, question: "Which OS is used in scientific simulations across multiple computers?", options: ["Batch OS", "Distributed OS", "Real-time OS", "Time-sharing OS"], correct: 2 },
                    { id: 51, question: "In which OS type does each user get a slice of CPU time?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 2 },
                    { id: 52, question: "Which OS is commonly used in air traffic control systems?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 3 },
                    { id: 53, question: "Which OS processes jobs without user interaction?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 1 },
                    { id: 54, question: "Which OS type divides CPU time fairly among multiple users?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Embedded OS"], correct: 2 },
                    { id: 55, question: "Which OS uses multiple computers connected via a network to share resources?", options: ["Batch OS", "Time-Sharing OS", "Distributed OS", "Real-Time OS"], correct: 3 },
                    { id: 56, question: "Which OS type is most suitable for embedded systems?", options: ["Distributed OS", "Real-Time OS", "Batch OS", "Time-Sharing OS"], correct: 2 },
                    { id: 57, question: "What is the main drawback of batch processing OS?", options: ["High cost", "No direct user interaction", "Unstable performance", "Low throughput"], correct: 2 },
                    { id: 58, question: "Which OS type is designed to minimize response time?", options: ["Time-Sharing OS", "Batch OS", "Distributed OS", "Real-Time OS"], correct: 1 },
                    { id: 59, question: "Which type of OS ensures deadlines are strictly met?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 3 },
                    { id: 60, question: "Which OS allows parallel execution on different machines?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 2 },
                    { id: 61, question: "Which OS type executes jobs in groups or batches?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 1 },
                    { id: 62, question: "UNIX is an example of which OS type?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 2 },
                    { id: 63, question: "Which OS type is designed for reliability and fault tolerance in networks?", options: ["Real-Time OS", "Batch OS", "Distributed OS", "Time-Sharing OS"], correct: 3 },
                    { id: 64, question: "Which OS type is best suited for research labs with multiple computers?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 4 },
                    { id: 65, question: "Which OS type has strict timing constraints?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Network OS"], correct: 3 },
                    { id: 66, question: "Which OS allows multiple users to share CPU time efficiently?", options: ["Batch OS", "Distributed OS", "Time-Sharing OS", "Real-Time OS"], correct: 3 },
                    { id: 67, question: "Which OS type is ideal for payroll or billing systems?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 1 },
                    { id: 68, question: "Which OS type is used in multimedia and robotics?", options: ["Batch OS", "Real-Time OS", "Distributed OS", "Time-Sharing OS"], correct: 2 },
                    { id: 69, question: "Which OS type ensures fair allocation of CPU cycles?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 4 },
                    { id: 70, question: "Which OS provides scalability and resource sharing across nodes?", options: ["Distributed OS", "Batch OS", "Real-Time OS", "Time-Sharing OS"], correct: 1 },
                    { id: 71, question: "Which OS type has the highest fault tolerance?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 4 },
                    { id: 72, question: "Which OS type is used where response delay cannot be tolerated?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 3 },
                    { id: 73, question: "Which OS type focuses on background job execution?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 1 },
                    { id: 74, question: "Which OS type is mostly used in modern supercomputers?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 2 },
                    { id: 75, question: "Which OS is commonly used for scientific research computing clusters?", options: ["Real-Time OS", "Batch OS", "Distributed OS", "Time-Sharing OS"], correct: 3 },
                    { id: 76, question: "Which OS type ensures predictability in execution time?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 3 },
                    { id: 77, question: "Which OS type is less interactive and more job-oriented?", options: ["Batch OS", "Real-Time OS", "Distributed OS", "Time-Sharing OS"], correct: 1 },
                    { id: 78, question: "Which OS is used in smartphones for multi-tasking?", options: ["Batch OS", "Real-Time OS", "Distributed OS", "Time-Sharing OS"], correct: 4 },
                    { id: 79, question: "Which OS type is not suitable for immediate interaction?", options: ["Batch OS", "Time-Sharing OS", "Distributed OS", "Real-Time OS"], correct: 1 },
                    { id: 80, question: "Which OS type supports load balancing across multiple systems?", options: ["Real-Time OS", "Time-Sharing OS", "Batch OS", "Distributed OS"], correct: 4 },
                    { id: 81, question: "Which OS type is used in medical instruments?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 2 },
                    { id: 82, question: "Which OS type is preferred for transaction processing systems?", options: ["Batch OS", "Real-Time OS", "Distributed OS", "Time-Sharing OS"], correct: 4 },
                    { id: 83, question: "Which OS type can combine the power of many computers?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 4 },
                    { id: 84, question: "Which OS is best suited for batch payroll processing?", options: ["Time-Sharing OS", "Batch OS", "Real-Time OS", "Distributed OS"], correct: 2 },
                    { id: 85, question: "Which OS executes instructions at the exact time they are required?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 3 },
                    { id: 86, question: "Which OS ensures smooth execution of multiple terminals?", options: ["Time-Sharing OS", "Batch OS", "Real-Time OS", "Distributed OS"], correct: 1 },
                    { id: 87, question: "Which OS uses parallel computing for efficiency?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 2 },
                    { id: 88, question: "Which OS type is mostly found in industrial automation?", options: ["Batch OS", "Time-Sharing OS", "Distributed OS", "Real-Time OS"], correct: 4 },
                    { id: 89, question: "Which OS type may experience high turnaround time?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 1 },
                    { id: 90, question: "Which OS uses CPU scheduling to manage multiple users?", options: ["Distributed OS", "Batch OS", "Time-Sharing OS", "Real-Time OS"], correct: 3 },
                    { id: 91, question: "Which OS provides resource sharing in a network?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 2 },
                    { id: 92, question: "Which OS is commonly used in flight simulation?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 3 },
                    { id: 93, question: "Which OS supports concurrent execution for multiple users?", options: ["Batch OS", "Time-Sharing OS", "Real-Time OS", "Distributed OS"], correct: 2 },
                    { id: 94, question: "Which OS is known for resource transparency?", options: ["Distributed OS", "Batch OS", "Time-Sharing OS", "Real-Time OS"], correct: 1 },
                    { id: 95, question: "Which OS type is least interactive?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 1 },
                    { id: 96, question: "Which OS has deadline-oriented scheduling?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 3 },
                    { id: 97, question: "Which OS handles jobs sequentially in order?", options: ["Batch OS", "Real-Time OS", "Distributed OS", "Time-Sharing OS"], correct: 1 },
                    { id: 98, question: "Which OS is most suitable for ATM machines?", options: ["Batch OS", "Real-Time OS", "Time-Sharing OS", "Distributed OS"], correct: 2 },
                    { id: 99, question: "Which OS type uses distributed file systems?", options: ["Batch OS", "Distributed OS", "Real-Time OS", "Time-Sharing OS"], correct: 2 },
                    { id: 100, question: "Which OS type provides high availability through redundancy?", options: ["Distributed OS", "Batch OS", "Real-Time OS", "Time-Sharing OS"], correct: 1 }
                ]
            },
            "Files/folders, file extensions, basic permissions": {
                color: "#F97316",
                questions: [
                    { id: 1, question: "Which of the following is a file extension for an image file?", options: [".txt", ".jpg", ".exe", ".pdf"], correct: 2 },
                    { id: 2, question: "What does the extension .exe represent?", options: ["Executable file", "Text file", "Compressed file", "Database file"], correct: 1 },
                    { id: 3, question: "Which extension is used for Microsoft Word documents?", options: [".xls", ".docx", ".ppt", ".pdf"], correct: 2 },
                    { id: 4, question: "Which of the following is NOT a valid file extension?", options: [".mp3", ".png", ".abcx", ".html"], correct: 3 },
                    { id: 5, question: "What does the extension .pptx stand for?", options: ["PowerPoint Presentation", "Portable Document", "Program Text", "Paint File"], correct: 1 },
                    { id: 6, question: "Which extension is associated with compressed files?", options: [".zip", ".jpg", ".exe", ".txt"], correct: 1 },
                    { id: 7, question: "The extension .csv is mainly used for?", options: ["Video files", "Spreadsheet data", "Web pages", "Executable files"], correct: 2 },
                    { id: 8, question: "Which file extension is related to Python scripts?", options: [".java", ".py", ".cpp", ".js"], correct: 2 },
                    { id: 9, question: "Which of the following is a system file extension?", options: [".dll", ".txt", ".mp3", ".pdf"], correct: 1 },
                    { id: 10, question: "A folder can contain:", options: ["Only files", "Only other folders", "Both files and folders", "None of these"], correct: 3 },

                    { id: 11, question: "What does the .html extension indicate?", options: ["Spreadsheet", "Webpage file", "Executable program", "Database file"], correct: 2 },
                    { id: 12, question: "Which extension is used for Java source files?", options: [".class", ".java", ".jar", ".js"], correct: 2 },
                    { id: 13, question: "What is the default extension of Notepad files?", options: [".docx", ".txt", ".rtf", ".csv"], correct: 2 },
                    { id: 14, question: "Which extension is used for database files in MS Access?", options: [".mdb", ".sql", ".dbf", ".accdb"], correct: 4 },
                    { id: 15, question: "File permissions in Linux are represented by:", options: ["Letters only", "Numbers only", "Combination of letters and numbers", "None"], correct: 3 },
                    { id: 16, question: "The permission 'rwx' means:", options: ["Read, write, execute", "Read and write only", "Execute only", "Read only"], correct: 1 },
                    { id: 17, question: "Which command is used to change permissions in Linux?", options: ["chmod", "chperm", "chdir", "chgrp"], correct: 1 },
                    { id: 18, question: "What does permission 'r--' indicate?", options: ["Read and execute", "Read only", "Read and write", "Write only"], correct: 2 },
                    { id: 19, question: "In Windows, file/folder permissions can be changed from:", options: ["Control Panel", "Properties → Security", "Task Manager", "Registry Editor"], correct: 2 },
                    { id: 20, question: "Which extension belongs to audio files?", options: [".mp4", ".wav", ".mkv", ".flv"], correct: 2 },

                    { id: 21, question: "Which extension is used for executable Java bytecode files?", options: [".class", ".jar", ".java", ".jsp"], correct: 1 },
                    { id: 22, question: "Which of the following is a hidden file in Linux?", options: ["test.txt", ".config", "data.docx", "file.exe"], correct: 2 },
                    { id: 23, question: "The root directory in Windows is usually represented as:", options: ["C:\\", "root/", "/usr", "system32/"], correct: 1 },
                    { id: 24, question: "What is the function of a folder?", options: ["Store files", "Organize files", "Contain other folders", "All of the above"], correct: 4 },
                    { id: 25, question: "What does .tar extension represent?", options: ["Archive file", "Video file", "Executable file", "Spreadsheet"], correct: 1 },
                    { id: 26, question: "The extension .bat is used for:", options: ["Batch files", "Backup files", "Bitmap image", "Boot files"], correct: 1 },
                    { id: 27, question: "Which extension is used for Adobe Acrobat files?", options: [".pdf", ".txt", ".docx", ".ppt"], correct: 1 },
                    { id: 28, question: "Which of the following permissions allows deleting a file in Linux?", options: ["Write", "Read", "Execute", "None"], correct: 1 },
                    { id: 29, question: "Which file extension is related to C++ source code?", options: [".c", ".cpp", ".cs", ".class"], correct: 2 },
                    { id: 30, question: "Which extension is used for Cascading Style Sheets?", options: [".css", ".html", ".js", ".xml"], correct: 1 },

                    { id: 31, question: "Which file extension is used for executable JAR files?", options: [".class", ".java", ".jar", ".exe"], correct: 3 },
                    { id: 32, question: "Which extension is used for system log files in Linux?", options: [".log", ".sys", ".txt", ".ini"], correct: 1 },
                    { id: 33, question: "Which of the following is NOT a text-based file?", options: [".txt", ".docx", ".xls", ".wav"], correct: 4 },
                    { id: 34, question: "The command 'ls -l' in Linux shows:", options: ["File size only", "File permissions", "File type", "All of the above"], correct: 2 },
                    { id: 35, question: "Which file extension is used for videos?", options: [".mp3", ".avi", ".zip", ".png"], correct: 2 },
                    { id: 36, question: "In Windows, system files often have which attribute?", options: ["Hidden", "Read-only", "System", "All of these"], correct: 4 },
                    { id: 37, question: "What does chmod 777 mean?", options: ["Full permissions", "No permissions", "Read-only", "Execute-only"], correct: 1 },
                    { id: 38, question: "Which file extension is related to XML data?", options: [".json", ".xml", ".yaml", ".csv"], correct: 2 },
                    { id: 39, question: "In Linux, the command 'pwd' shows:", options: ["Present working directory", "Permissions of working directory", "Processes with directory", "Parent working directory"], correct: 1 },
                    { id: 40, question: "Which file extension is for Excel spreadsheets?", options: [".xlsx", ".docx", ".pptx", ".mdb"], correct: 1 },

                    { id: 41, question: "Which extension is used for JavaScript files?", options: [".js", ".java", ".jsp", ".json"], correct: 1 },
                    { id: 42, question: "In Windows, default path separator is:", options: ["\\", "/", ":", "."], correct: 1 },
                    { id: 43, question: "Which of these is a valid Linux file permission?", options: ["755", "999", "123", "888"], correct: 1 },
                    { id: 44, question: "Which extension is used for Photoshop files?", options: [".psd", ".ai", ".png", ".gif"], correct: 1 },
                    { id: 45, question: "Which file extension represents compressed Linux packages?", options: [".tar.gz", ".rar", ".exe", ".dll"], correct: 1 },
                    { id: 46, question: "Which of the following is an executable file in Linux?", options: ["script.sh", "program.exe", "data.txt", "doc.pdf"], correct: 1 },
                    { id: 47, question: "What does .bak extension stand for?", options: ["Backup file", "Batch file", "Bitmap image", "Binary file"], correct: 1 },
                    { id: 48, question: "In Windows, the shortcut file usually has which extension?", options: [".lnk", ".sh", ".scut", ".short"], correct: 1 },
                    { id: 49, question: "Which file extension is used for email files?", options: [".eml", ".msg", ".pst", "All of these"], correct: 4 },
                    { id: 50, question: "Which of the following is NOT a folder property?", options: ["Size", "Permissions", "Creation date", "RAM size"], correct: 4 },
                    { "id": 51, "question": "Which symbol is used in Linux to represent the current directory?", "options": [".", "..", "~", "/"], "correct": 1 },
                    { "id": 52, "question": "Which command is used to remove a directory in Linux?", "options": ["rmdir", "removedir", "del", "erase"], "correct": 1 },
                    { "id": 53, "question": "Which of the following is a hidden file in Linux?", "options": ["file.txt", ".config", "notes.docx", "system32"], "correct": 2 },
                    { "id": 54, "question": "Which file extension is commonly associated with compressed files?", "options": [".exe", ".zip", ".txt", ".html"], "correct": 2 },
                    { "id": 55, "question": "In Windows, which character separates folders in a path?", "options": ["\\", "/", ":", "."], "correct": 1 },
                    { "id": 56, "question": "Which permission allows a user to view file contents?", "options": ["Read", "Write", "Execute", "Delete"], "correct": 1 },
                    { "id": 57, "question": "Which command is used to change file permissions in Linux?", "options": ["chmod", "chperm", "perm", "access"], "correct": 1 },
                    { "id": 58, "question": "Which extension is used for Java source files?", "options": [".js", ".java", ".class", ".jar"], "correct": 2 },
                    { "id": 59, "question": "What does the 'x' permission mean in Linux?", "options": ["Write", "Execute", "Delete", "Rename"], "correct": 2 },
                    { "id": 60, "question": "Which extension is associated with Microsoft Word documents?", "options": [".xls", ".docx", ".pptx", ".txt"], "correct": 2 },
                    { "id": 61, "question": "Which of the following represents the parent directory?", "options": [".", "..", "~", "/"], "correct": 2 },
                    { "id": 62, "question": "Which extension is used for Python scripts?", "options": [".js", ".py", ".java", ".cpp"], "correct": 2 },
                    { "id": 63, "question": "Which Linux command lists the contents of a directory?", "options": ["dir", "ls", "show", "list"], "correct": 2 },
                    { "id": 64, "question": "Which extension is used for PowerPoint files?", "options": [".pptx", ".docx", ".xlsx", ".txt"], "correct": 1 },
                    { "id": 65, "question": "In Linux, what does '~' represent?", "options": ["Root directory", "Current directory", "Home directory", "Parent directory"], "correct": 3 },
                    { "id": 66, "question": "Which extension is commonly used for image files?", "options": [".jpg", ".exe", ".mp4", ".sql"], "correct": 1 },
                    { "id": 67, "question": "Which Linux command creates a new empty file?", "options": ["create", "touch", "newfile", "file"], "correct": 2 },
                    { "id": 68, "question": "Which extension is used for compressed tarball files in Linux?", "options": [".tar.gz", ".zip", ".exe", ".docx"], "correct": 1 },
                    { "id": 69, "question": "What does 'chmod 755 file' mean?", "options": ["Full access to all", "Read/Write/Execute for owner, read/execute for others", "Owner only access", "No access"], "correct": 2 },
                    { "id": 70, "question": "Which file extension is used for batch files in Windows?", "options": [".sh", ".bat", ".cmd", ".exe"], "correct": 2 },
                    { "id": 71, "question": "Which extension is used for C++ source files?", "options": [".c", ".cpp", ".class", ".py"], "correct": 2 },
                    { "id": 72, "question": "Which Linux command removes a file?", "options": ["del", "erase", "rm", "rmdir"], "correct": 3 },
                    { "id": 73, "question": "Which extension is used for Cascading Style Sheets?", "options": [".css", ".html", ".js", ".php"], "correct": 1 },
                    { "id": 74, "question": "Which file permission is represented by 'r--'?", "options": ["Read only", "Read and write", "Execute only", "Write only"], "correct": 1 },
                    { "id": 75, "question": "Which extension is used for database files in SQLite?", "options": [".sql", ".sqlite", ".db", "Both 2 and 3"], "correct": 4 },
                    { "id": 76, "question": "Which extension is used for Excel files?", "options": [".xls", ".xlsx", ".csv", ".docx"], "correct": 2 },
                    { "id": 77, "question": "What does 'rw-' permission mean?", "options": ["Read only", "Read and write", "Read, write, execute", "Write only"], "correct": 2 },
                    { "id": 78, "question": "Which extension is used for JSON files?", "options": [".xml", ".json", ".js", ".txt"], "correct": 2 },
                    { "id": 79, "question": "Which Linux command changes the current directory?", "options": ["chdir", "cd", "dir", "pwd"], "correct": 2 },
                    { "id": 80, "question": "Which extension is used for XML files?", "options": [".xml", ".html", ".json", ".txt"], "correct": 1 },
                    { "id": 81, "question": "Which extension is used for PHP files?", "options": [".php", ".html", ".js", ".asp"], "correct": 1 },
                    { "id": 82, "question": "Which file extension is used for Java bytecode?", "options": [".java", ".class", ".jar", ".exe"], "correct": 2 },
                    { "id": 83, "question": "Which file extension is used for Markdown files?", "options": [".md", ".txt", ".docx", ".rtf"], "correct": 1 },
                    { "id": 84, "question": "Which Linux command prints the current working directory?", "options": ["pwd", "ls", "cd", "dir"], "correct": 1 },
                    { "id": 85, "question": "Which extension is used for executable files in Windows?", "options": [".bat", ".exe", ".sh", ".msi"], "correct": 2 },
                    { "id": 86, "question": "Which extension is used for shell scripts in Linux?", "options": [".bat", ".exe", ".sh", ".cmd"], "correct": 3 },
                    { "id": 87, "question": "Which file permission string means read and execute only?", "options": ["r-x", "rw-", "r--", "--x"], "correct": 1 },
                    { "id": 88, "question": "Which extension is used for CSV files?", "options": [".txt", ".docx", ".csv", ".xlsx"], "correct": 3 },
                    { "id": 89, "question": "Which Linux command copies files?", "options": ["copy", "cp", "mv", "dup"], "correct": 2 },
                    { "id": 90, "question": "Which extension is used for audio files?", "options": [".mp3", ".jpg", ".mp4", ".exe"], "correct": 1 },
                    { "id": 91, "question": "Which file extension is used for video files?", "options": [".mp4", ".mp3", ".jpg", ".png"], "correct": 1 },
                    { "id": 92, "question": "Which Linux command moves or renames a file?", "options": ["mv", "move", "rename", "cp"], "correct": 1 },
                    { "id": 93, "question": "Which extension is used for HTML files?", "options": [".html", ".css", ".js", ".xml"], "correct": 1 },
                    { "id": 94, "question": "Which extension is used for Java Archive files?", "options": [".jar", ".class", ".java", ".exe"], "correct": 1 },
                    { "id": 95, "question": "Which extension is used for Windows system files?", "options": [".sys", ".dll", ".ini", "All of the above"], "correct": 4 },
                    { "id": 96, "question": "Which extension is used for PDF documents?", "options": [".pdf", ".txt", ".docx", ".rtf"], "correct": 1 },
                    { "id": 97, "question": "Which extension is used for JavaScript files?", "options": [".js", ".jsx", ".ts", ".java"], "correct": 1 },
                    { "id": 98, "question": "Which Linux command creates a new directory?", "options": ["mkdir", "makedir", "newdir", "dir"], "correct": 1 },
                    { "id": 99, "question": "Which extension is used for TypeScript files?", "options": [".ts", ".js", ".tsx", "Both 1 and 3"], "correct": 4 },
                    { "id": 100, "question": "Which extension is used for log files?", "options": [".log", ".txt", ".docx", ".csv"], "correct": 1 }
                ],
            },
            "Process and memory management basics; CPU scheduling idea": {
                color: "#10B981",
                questions: [
                    { id: 1, question: "Which of the following best defines a process?", options: ["A running program", "A program in memory only", "A thread", "A hardware unit"], correct: 1 },
                    { id: 2, question: "What is the smallest unit of CPU scheduling?", options: ["Program", "Process", "Thread", "Instruction"], correct: 3 },
                    { id: 3, question: "Which of the following is NOT a CPU scheduling algorithm?", options: ["FCFS", "Round Robin", "LRU", "SJF"], correct: 3 },
                    { id: 4, question: "In Round Robin scheduling, the key parameter is:", options: ["Priority", "Time Quantum", "Arrival Time", "Burst Time"], correct: 2 },
                    { id: 5, question: "Which of the following states is not a process state?", options: ["New", "Ready", "Execute", "Terminate"], correct: 3 },
                    { id: 6, question: "Context switching occurs when:", options: ["A process terminates", "An interrupt occurs", "I/O request completes", "All of the above"], correct: 4 },
                    { id: 7, question: "Which scheduler selects jobs from the ready queue?", options: ["Long-term", "Medium-term", "Short-term", "I/O scheduler"], correct: 3 },
                    { id: 8, question: "Which CPU scheduling algorithm may cause starvation?", options: ["FCFS", "Round Robin", "Priority Scheduling", "Lottery Scheduling"], correct: 3 },
                    { id: 9, question: "The part of the OS that decides which process runs next is:", options: ["Dispatcher", "Scheduler", "Context switcher", "Loader"], correct: 2 },
                    { id: 10, question: "Thrashing occurs when:", options: ["Too many processes in memory", "CPU utilization is high", "Disk space is full", "Cache is small"], correct: 1 },

                    { id: 11, question: "Page replacement is required when:", options: ["Page fault occurs", "Memory is full", "Cache overflows", "All of these"], correct: 2 },
                    { id: 12, question: "Which memory management technique uses base and limit registers?", options: ["Segmentation", "Paging", "Overlaying", "Swapping"], correct: 1 },
                    { id: 13, question: "Virtual memory is:", options: ["Real memory", "Memory on disk", "Large main memory", "None"], correct: 2 },
                    { id: 14, question: "Which of the following is a non-preemptive scheduling algorithm?", options: ["SJF", "Round Robin", "Priority (preemptive)", "FCFS"], correct: 4 },
                    { id: 15, question: "Which of the following is NOT an allocation method?", options: ["Contiguous", "Linked", "Indexed", "Mapping"], correct: 4 },
                    { id: 16, question: "The degree of multiprogramming is controlled by:", options: ["CPU Scheduler", "Memory Manager", "Long-term Scheduler", "Dispatcher"], correct: 3 },
                    { id: 17, question: "Deadlock occurs when:", options: ["Processes share memory", "Resources are preempted", "Circular wait happens", "CPU is idle"], correct: 3 },
                    { id: 18, question: "Which is used to avoid deadlock?", options: ["Banker’s Algorithm", "FIFO", "LRU", "Round Robin"], correct: 1 },
                    { id: 19, question: "Which memory management scheme does not suffer from external fragmentation?", options: ["Paging", "Segmentation", "Fixed partitioning", "Contiguous"], correct: 1 },
                    { id: 20, question: "Page table is stored in:", options: ["Disk", "CPU", "Main Memory", "Cache"], correct: 3 },

                    { id: 21, question: "In multiprogramming, the role of the CPU scheduler is to:", options: ["Allocate CPU to processes", "Allocate memory", "Allocate disk", "Manage files"], correct: 1 },
                    { id: 22, question: "Which algorithm is optimal for page replacement?", options: ["FIFO", "LRU", "Optimal", "Clock"], correct: 3 },
                    { id: 23, question: "What is internal fragmentation?", options: ["Wasted space inside allocated block", "Free space between blocks", "Disk fragmentation", "Memory leak"], correct: 1 },
                    { id: 24, question: "The dispatcher is responsible for:", options: ["Loading programs", "Switching context", "Allocating memory", "I/O scheduling"], correct: 2 },
                    { id: 25, question: "Turnaround time is:", options: ["Waiting time + CPU burst", "Response time + I/O", "Time from submission to completion", "CPU burst only"], correct: 3 },
                    { id: 26, question: "Which of the following improves CPU utilization?", options: ["Multiprogramming", "Fragmentation", "Starvation", "Thrashing"], correct: 1 },
                    { id: 27, question: "Which of the following is preemptive?", options: ["SJF (non-preemptive)", "FCFS", "Round Robin", "Priority (non-preemptive)"], correct: 3 },
                    { id: 28, question: "Swapping involves:", options: ["Moving processes between RAM and disk", "Replacing cache lines", "Changing page tables", "None"], correct: 1 },
                    { id: 29, question: "Which of the following causes a page fault?", options: ["Accessing valid page in memory", "Page not in main memory", "Invalid instruction", "CPU scheduling"], correct: 2 },
                    { id: 30, question: "The ready queue contains:", options: ["Processes waiting for I/O", "Processes waiting for CPU", "Finished processes", "Blocked processes"], correct: 2 },

                    { id: 31, question: "Priority inversion occurs when:", options: ["Low priority process holds a resource needed by high priority process", "All processes have same priority", "CPU is idle", "Memory is full"], correct: 1 },
                    { id: 32, question: "Belady’s anomaly is related to:", options: ["Paging", "Segmentation", "Deadlock", "CPU scheduling"], correct: 1 },
                    { id: 33, question: "Time quantum is used in:", options: ["FCFS", "Round Robin", "SJF", "Priority"], correct: 2 },
                    { id: 34, question: "Which one is NOT a CPU scheduling criteria?", options: ["Turnaround time", "Response time", "Throughput", "Fragmentation"], correct: 4 },
                    { id: 35, question: "Which OS component handles memory allocation?", options: ["File system", "Memory manager", "CPU scheduler", "Dispatcher"], correct: 2 },
                    { id: 36, question: "Compaction is used to solve:", options: ["Internal fragmentation", "External fragmentation", "Deadlock", "Thrashing"], correct: 2 },
                    { id: 37, question: "In paging, the logical address is divided into:", options: ["Page number + page offset", "Segment number + segment offset", "Base + limit", "Frame number + frame offset"], correct: 1 },
                    { id: 38, question: "Which algorithm minimizes average waiting time?", options: ["Round Robin", "FCFS", "SJF", "Priority"], correct: 3 },
                    { id: 39, question: "Which scheduling algorithm gives preference to shorter jobs?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: 2 },
                    { id: 40, question: "Which one is NOT related to memory management?", options: ["Paging", "Segmentation", "Thrashing", "Spooling"], correct: 4 },
                    { id: 41, question: "Which of the following is not a CPU scheduling algorithm?", options: ["Round Robin", "First Come First Serve", "Paging", "Shortest Job Next"], correct: 3 },
                    { id: 42, question: "In Round Robin scheduling, each process gets a fixed ___.", options: ["Priority", "Time quantum", "Burst time", "Deadline"], correct: 2 },
                    { id: 43, question: "Which scheduling algorithm may cause starvation?", options: ["FCFS", "SJF", "Round Robin", "Multilevel Queue"], correct: 2 },
                    { id: 44, question: "Context switching is:", options: ["Switching from user mode to kernel mode", "Storing and restoring process state", "Switching from one CPU to another", "None"], correct: 2 },
                    { id: 45, question: "Which memory is fastest?", options: ["RAM", "Cache", "Hard disk", "Virtual memory"], correct: 2 },
                    { id: 46, question: "Thrashing occurs when:", options: ["CPU overheats", "Too many processes are swapped in/out", "Deadlock happens", "Cache is full"], correct: 2 },
                    { id: 47, question: "Which of these is not part of process state?", options: ["Running", "Waiting", "Ready", "Deleted"], correct: 4 },
                    { id: 48, question: "Turnaround time is:", options: ["Execution time only", "Waiting time + Execution time", "Only waiting time", "None"], correct: 2 },
                    { id: 49, question: "Which of the following is non-preemptive scheduling?", options: ["SJF", "FCFS", "Round Robin", "Priority"], correct: 2 },
                    { id: 50, question: "Which register stores the address of the next instruction?", options: ["Instruction Register", "Program Counter", "Stack Pointer", "Base Register"], correct: 2 },
                    { id: 51, question: "Which scheduling algorithm ensures no starvation?", options: ["SJF", "FCFS", "Round Robin", "Priority without aging"], correct: 3 },
                    { id: 52, question: "Virtual memory allows:", options: ["More CPU speed", "Execution of programs larger than RAM", "Faster I/O", "Better cache use"], correct: 2 },
                    { id: 53, question: "Page fault occurs when:", options: ["Page is in memory", "Page not in memory", "Disk is full", "Cache is empty"], correct: 2 },
                    { id: 54, question: "Which CPU scheduling algorithm is most fair?", options: ["SJF", "FCFS", "Round Robin", "Priority"], correct: 3 },
                    { id: 55, question: "Deadlock can occur when:", options: ["Mutual exclusion exists", "No preemption", "Circular wait", "All of these"], correct: 4 },
                    { id: 56, question: "Swapping is:", options: ["Moving data from cache to CPU", "Moving process between main memory and disk", "Moving process between CPU and I/O", "None"], correct: 2 },
                    { id: 57, question: "Which of these is a preemptive scheduling?", options: ["Round Robin", "SJF (non-preemptive)", "FCFS", "All"], correct: 1 },
                    { id: 58, question: "Throughput means:", options: ["Number of processes completed per unit time", "Waiting time per process", "CPU utilization", "Disk speed"], correct: 1 },
                    { id: 59, question: "Which is an example of real-time OS scheduling?", options: ["FCFS", "SJF", "Priority-based", "EDF (Earliest Deadline First)"], correct: 4 },
                    { id: 60, question: "Optimal page replacement is:", options: ["Uses future knowledge", "Uses past knowledge", "Uses random replacement", "Never replaces pages"], correct: 1 },
                    { id: 61, question: "LRU stands for:", options: ["Last Recently Used", "Least Recently Used", "Longest Run Utility", "Low Random Use"], correct: 2 },
                    { id: 62, question: "Multiprogramming increases:", options: ["CPU utilization", "I/O waiting", "Execution time", "Deadlocks only"], correct: 1 },
                    { id: 63, question: "Which is not a memory allocation method?", options: ["First Fit", "Best Fit", "Worst Fit", "Deep Fit"], correct: 4 },
                    { id: 64, question: "Starvation in Priority scheduling can be solved by:", options: ["Aging", "Round Robin", "Swapping", "Segmentation"], correct: 1 },
                    { id: 65, question: "Which is the best case for SJF scheduling?", options: ["All processes same length", "Shortest processes arrive first", "Longest processes arrive first", "Processes arrive randomly"], correct: 2 },
                    { id: 66, question: "Which algorithm is used in time-sharing systems?", options: ["FCFS", "Round Robin", "Priority", "SJF"], correct: 2 },
                    { id: 67, question: "CPU utilization is maximum when:", options: ["More I/O bound processes", "More CPU bound processes", "Equal mix", "Only background jobs"], correct: 1 },
                    { id: 68, question: "Page size is decided by:", options: ["CPU speed", "OS", "Hardware (MMU)", "Compiler"], correct: 3 },
                    { id: 69, question: "Which of these is internal fragmentation?", options: ["Unused memory inside allocated block", "Unused memory between blocks", "Disk free space", "Cache waste"], correct: 1 },
                    { id: 70, question: "Which algorithm is used in demand paging?", options: ["Page Replacement", "Scheduling", "Thrashing", "Deadlock"], correct: 1 },
                    { id: 71, question: "Response time is:", options: ["Time from submission to first response", "Total execution time", "Waiting time", "CPU idle time"], correct: 1 },
                    { id: 72, question: "The Ready Queue contains:", options: ["All jobs waiting for CPU", "All jobs in memory", "All I/O jobs", "Completed jobs"], correct: 1 },
                    { id: 73, question: "Which of these is non-preemptive?", options: ["FCFS", "SJF (non-preemptive)", "Both", "None"], correct: 3 },
                    { id: 74, question: "Round Robin time quantum should be:", options: ["Very large", "Very small", "Balanced", "Zero"], correct: 3 },
                    { id: 75, question: "Which data structure is used for implementing Round Robin?", options: ["Stack", "Queue", "Linked List", "Tree"], correct: 2 },
                    { id: 76, question: "Main memory is also called:", options: ["Secondary storage", "Primary storage", "Cache", "Virtual memory"], correct: 2 },
                    { id: 77, question: "Fragmentation occurs in:", options: ["Memory allocation", "CPU scheduling", "File systems only", "Cache"], correct: 1 },
                    { id: 78, question: "Turnaround time – Waiting time = ?", options: ["Response time", "Burst time", "Arrival time", "None"], correct: 2 },
                    { id: 79, question: "Shortest Remaining Time First is:", options: ["Preemptive SJF", "Non-preemptive SJF", "Round Robin", "Priority"], correct: 1 },
                    { id: 80, question: "Demand paging requires:", options: ["Page table", "Disk", "MMU", "All of these"], correct: 4 },
                    { id: 81, question: "Which scheduling algorithm is simplest?", options: ["Round Robin", "Priority", "FCFS", "SJF"], correct: 3 },
                    { id: 82, question: "Which memory allocation suffers from external fragmentation?", options: ["Paging", "Segmentation", "Contiguous allocation", "All"], correct: 3 },
                    { id: 83, question: "Page table stores:", options: ["Frame number of page", "Page size", "Process ID", "Cache address"], correct: 1 },
                    { id: 84, question: "Which is not part of process control block (PCB)?", options: ["Process ID", "Registers", "CPU Scheduling info", "Hard disk size"], correct: 4 },
                    { id: 85, question: "Which scheduling is suitable for batch systems?", options: ["FCFS", "Round Robin", "SJF", "Priority"], correct: 1 },
                    { id: 86, question: "The main goal of multiprogramming is:", options: ["Increase CPU utilization", "Decrease response time", "Increase I/O speed", "Save memory"], correct: 1 },
                    { id: 87, question: "Which of these is secondary memory?", options: ["RAM", "ROM", "Cache", "Hard Disk"], correct: 4 },
                    { id: 88, question: "Belady’s anomaly occurs in:", options: ["FIFO page replacement", "LRU", "Optimal", "SJF"], correct: 1 },
                    { id: 89, question: "Which scheduling may cause convoy effect?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: 1 },
                    { id: 90, question: "The degree of multiprogramming means:", options: ["Number of CPUs", "Number of processes in memory", "Number of threads", "None"], correct: 2 },
                    { id: 91, question: "Resident set is:", options: ["Set of pages in main memory", "Set of jobs in queue", "Set of registers", "None"], correct: 1 },
                    { id: 92, question: "Which page replacement policy is hardware supported?", options: ["FIFO", "LRU", "Optimal", "None"], correct: 2 },
                    { id: 93, question: "Which is true about Priority scheduling?", options: ["Low priority jobs may starve", "Always preemptive", "No starvation", "FIFO queue"], correct: 1 },
                    { id: 94, question: "Segmentation is:", options: ["Dividing memory into pages", "Dividing memory into variable-sized blocks", "Fixed size allocation", "Cache division"], correct: 2 },
                    { id: 95, question: "Dispatcher does:", options: ["Switches CPU to a process", "Manages I/O", "Handles page faults", "All"], correct: 1 },
                    { id: 96, question: "Ready queue is usually implemented as:", options: ["Stack", "Priority Queue", "FIFO Queue", "Binary Tree"], correct: 3 },
                    { id: 97, question: "Which algorithm minimizes average waiting time?", options: ["FCFS", "Round Robin", "SJF", "Priority"], correct: 3 },
                    { id: 98, question: "Which of the following is not related to CPU scheduling?", options: ["Turnaround time", "Waiting time", "Page fault", "Response time"], correct: 3 },
                    { id: 99, question: "The OS part that manages memory is:", options: ["Compiler", "Loader", "Memory manager", "Scheduler"], correct: 3 },
                    { id: 100, question: "Which algorithm gives better average response in time-sharing?", options: ["FCFS", "Round Robin", "SJF", "Priority"], correct: 2 }

                ],

            },
            "Deadlock concept (simple), virtual memory idea": {
                color: "#14B8A6",
                questions: [
                    {
                        id: 1,
                        question: "What is deadlock in an operating system?",
                        options: [
                            "A situation where processes execute without waiting",
                            "A situation where processes are stuck waiting for resources",
                            "A process that terminates suddenly",
                            "A situation where memory is fully utilized"
                        ],
                        correct: 2
                    },
                    {
                        id: 2,
                        question: "Which of the following is NOT a condition for deadlock?",
                        options: [
                            "Mutual exclusion",
                            "Hold and wait",
                            "Preemption",
                            "Circular wait"
                        ],
                        correct: 3
                    },
                    {
                        id: 3,
                        question: "Circular wait means:",
                        options: [
                            "Processes waiting in a circular chain for resources",
                            "Processes execute in a loop",
                            "Resources are reused in circular fashion",
                            "None of the above"
                        ],
                        correct: 1
                    },
                    {
                        id: 4,
                        question: "Which strategy is used to prevent deadlocks?",
                        options: [
                            "Banker’s algorithm",
                            "Round robin scheduling",
                            "First come first serve",
                            "Paging"
                        ],
                        correct: 1
                    },
                    {
                        id: 5,
                        question: "Virtual memory is:",
                        options: [
                            "An actual physical memory",
                            "Part of cache memory",
                            "An illusion of large memory using secondary storage",
                            "ROM memory"
                        ],
                        correct: 3
                    },
                    {
                        id: 6,
                        question: "Which OS component is mainly responsible for handling virtual memory?",
                        options: [
                            "Compiler",
                            "Memory Management Unit (MMU)",
                            "Cache Controller",
                            "I/O Scheduler"
                        ],
                        correct: 2
                    },
                    {
                        id: 7,
                        question: "In virtual memory, address generated by CPU is called:",
                        options: [
                            "Physical address",
                            "Virtual address",
                            "Cache address",
                            "Disk address"
                        ],
                        correct: 2
                    },
                    {
                        id: 8,
                        question: "What is a page fault?",
                        options: [
                            "An error in CPU",
                            "Requested page not found in main memory",
                            "Disk read error",
                            "CPU scheduling failure"
                        ],
                        correct: 2
                    },
                    {
                        id: 9,
                        question: "Deadlock can be avoided by:",
                        options: [
                            "Ensuring circular wait always happens",
                            "Allocating resources dynamically using safe state concept",
                            "Terminating all processes",
                            "None of these"
                        ],
                        correct: 2
                    },
                    {
                        id: 10,
                        question: "Thrashing in virtual memory means:",
                        options: [
                            "Too many page faults occur, slowing the system",
                            "CPU stops working",
                            "Hard disk crash",
                            "Memory is completely filled"
                        ],
                        correct: 1
                    },
                    {
                        id: 11,
                        question: "Which of the following is NOT a method to handle deadlock?",
                        options: [
                            "Prevention",
                            "Avoidance",
                            "Detection and recovery",
                            "Compaction"
                        ],
                        correct: 4
                    },
                    {
                        id: 12,
                        question: "In deadlock, hold and wait means:",
                        options: [
                            "A process holding some resources is waiting for additional ones",
                            "All processes are waiting for CPU",
                            "Resources are unused",
                            "None"
                        ],
                        correct: 1
                    },
                    {
                        id: 13,
                        question: "Virtual memory increases:",
                        options: [
                            "Execution speed of CPU",
                            "Logical address space",
                            "Physical RAM size",
                            "ROM space"
                        ],
                        correct: 2
                    },
                    {
                        id: 14,
                        question: "Which algorithm is used for deadlock avoidance?",
                        options: [
                            "LRU",
                            "FIFO",
                            "Banker’s algorithm",
                            "Round robin"
                        ],
                        correct: 3
                    },
                    {
                        id: 15,
                        question: "Swapping is mainly related to:",
                        options: [
                            "Deadlock detection",
                            "Virtual memory management",
                            "CPU scheduling",
                            "File allocation"
                        ],
                        correct: 2
                    },
                    {
                        id: 16,
                        question: "Deadlock recovery can be done by:",
                        options: [
                            "Killing one or more processes",
                            "Restarting OS",
                            "Adding RAM",
                            "Running cache flush"
                        ],
                        correct: 1
                    },
                    {
                        id: 17,
                        question: "Virtual memory allows programs to:",
                        options: [
                            "Run without using CPU",
                            "Execute larger than physical RAM",
                            "Avoid disk storage",
                            "Bypass compiler"
                        ],
                        correct: 2
                    },
                    {
                        id: 18,
                        question: "Page replacement algorithms are used in:",
                        options: [
                            "Deadlock handling",
                            "CPU scheduling",
                            "Virtual memory",
                            "I/O buffering"
                        ],
                        correct: 3
                    },
                    {
                        id: 19,
                        question: "Which is a classic problem of deadlock?",
                        options: [
                            "Dining philosopher problem",
                            "Reader-writer problem",
                            "Producer-consumer problem",
                            "LRU replacement problem"
                        ],
                        correct: 1
                    },
                    {
                        id: 20,
                        question: "The main purpose of virtual memory is to:",
                        options: [
                            "Use secondary storage as an extension of main memory",
                            "Reduce disk size",
                            "Increase CPU clock speed",
                            "Replace cache"
                        ],
                        correct: 1
                    },
                    {
                        id: 21,
                        question: "In deadlock prevention, breaking which condition is the most common?",
                        options: ["Mutual exclusion", "Hold and wait", "Circular wait", "No preemption"],
                        correct: 2
                    },
                    {
                        id: 22,
                        question: "A safe state in deadlock means:",
                        options: ["System will never face deadlock", "Deadlock has already occurred", "Processes must terminate immediately", "System is idle"],
                        correct: 1
                    },
                    {
                        id: 23,
                        question: "Which algorithm is used for deadlock avoidance?",
                        options: ["FIFO", "Banker's Algorithm", "Round Robin", "LRU"],
                        correct: 2
                    },
                    {
                        id: 24,
                        question: "Deadlock detection requires:",
                        options: ["Wait-for graph", "Paging table", "TLB", "Segmentation table"],
                        correct: 1
                    },
                    {
                        id: 25,
                        question: "Thrashing is related to:",
                        options: ["Deadlock", "Virtual memory", "Starvation", "Fragmentation"],
                        correct: 2
                    },
                    {
                        id: 26,
                        question: "Which is NOT a method to handle deadlocks?",
                        options: ["Prevention", "Avoidance", "Detection and recovery", "Compaction"],
                        correct: 4
                    },
                    {
                        id: 27,
                        question: "Virtual memory is based on:",
                        options: ["Swapping", "Demand paging", "Segmentation only", "CPU scheduling"],
                        correct: 2
                    },
                    {
                        id: 28,
                        question: "Page fault occurs when:",
                        options: ["Page is in main memory", "Page is not in main memory", "Page is replaced by another page", "Page is locked"],
                        correct: 2
                    },
                    {
                        id: 29,
                        question: "In virtual memory, address translation is done by:",
                        options: ["MMU (Memory Management Unit)", "CPU", "Cache controller", "Compiler"],
                        correct: 1
                    },
                    {
                        id: 30,
                        question: "What is a 'safe sequence' in deadlock avoidance?",
                        options: ["A sequence where all processes complete without deadlock", "A sequence where CPU is idle", "Sequence of paging operations", "None of these"],
                        correct: 1
                    },
                    {
                        id: 31,
                        question: "Which memory management scheme is most related to virtual memory?",
                        options: ["Paging", "Contiguous allocation", "Fixed partitioning", "Dynamic loading"],
                        correct: 1
                    },
                    {
                        id: 32,
                        question: "Page replacement algorithms are used in:",
                        options: ["Deadlock detection", "Virtual memory", "CPU scheduling", "Process synchronization"],
                        correct: 2
                    },
                    {
                        id: 33,
                        question: "FIFO, LRU, Optimal are examples of:",
                        options: ["CPU scheduling algorithms", "Deadlock prevention methods", "Page replacement algorithms", "I/O scheduling algorithms"],
                        correct: 3
                    },
                    {
                        id: 34,
                        question: "Deadlock recovery can be done by:",
                        options: ["Killing processes", "Resource preemption", "Both A and B", "None"],
                        correct: 3
                    },
                    {
                        id: 35,
                        question: "Virtual memory allows programs to:",
                        options: ["Run without main memory", "Use more memory than physically available", "Avoid compilation", "Run without CPU"],
                        correct: 2
                    },
                    {
                        id: 36,
                        question: "Page fault service time is generally:",
                        options: ["Much larger than memory access time", "Equal to memory access time", "Less than memory access time", "Zero"],
                        correct: 1
                    },
                    {
                        id: 37,
                        question: "Starvation is different from deadlock because:",
                        options: ["Starvation can be solved by aging", "Deadlock is permanent", "Both A and B", "None"],
                        correct: 3
                    },
                    {
                        id: 38,
                        question: "The hardware needed for virtual memory is:",
                        options: ["Cache", "Page table + MMU", "Register only", "Disk controller"],
                        correct: 2
                    },
                    {
                        id: 39,
                        question: "Demand paging improves:",
                        options: ["CPU utilization", "Disk fragmentation", "Deadlock avoidance", "Cache replacement"],
                        correct: 1
                    },
                    {
                        id: 40,
                        question: "Deadlock detection algorithm uses:",
                        options: ["Wait-for graph", "Round Robin", "FIFO queue", "LRU"],
                        correct: 1
                    },
                    {
                        id: 41,
                        question: "Virtual memory helps in:",
                        options: ["Multiprogramming", "Fragmentation", "Deadlock recovery", "Deadlock prevention"],
                        correct: 1
                    },
                    {
                        id: 42,
                        question: "What happens after a page fault?",
                        options: ["OS fetches the page from disk to memory", "Process terminates", "CPU is halted forever", "Deadlock occurs"],
                        correct: 1
                    },
                    {
                        id: 43,
                        question: "Belady’s anomaly is related to:",
                        options: ["Deadlock", "Virtual memory", "Disk scheduling", "Mutual exclusion"],
                        correct: 2
                    },
                    {
                        id: 44,
                        question: "Which is true about deadlock?",
                        options: ["It can be prevented by breaking one condition", "It always occurs in time-sharing systems", "It cannot be detected", "It is same as starvation"],
                        correct: 1
                    },
                    {
                        id: 45,
                        question: "The Optimal page replacement algorithm is:",
                        options: ["Practical", "Theoretical (used as benchmark)", "Always worst", "None"],
                        correct: 2
                    },
                    {
                        id: 46,
                        question: "Which scheduling can help in avoiding starvation?",
                        options: ["Priority Scheduling", "Round Robin", "Shortest Job First", "FIFO"],
                        correct: 2
                    },
                    {
                        id: 47,
                        question: "Copy-on-write is a concept used in:",
                        options: ["Deadlock avoidance", "Virtual memory", "CPU scheduling", "Disk scheduling"],
                        correct: 2
                    },
                    {
                        id: 48,
                        question: "Page table stores:",
                        options: ["Logical address", "Physical frame number", "Process state", "Disk address"],
                        correct: 2
                    },
                    {
                        id: 49,
                        question: "Deadlock is also known as:",
                        options: ["Circular wait", "Starvation", "Paging", "Thrashing"],
                        correct: 1
                    },
                    {
                        id: 50,
                        question: "Segmentation with paging is used to:",
                        options: ["Reduce external fragmentation", "Reduce deadlock", "Stop starvation", "Stop thrashing"],
                        correct: 1
                    },
                    {
                        id: 51,
                        question: "Deadlock handling strategies include:",
                        options: ["Prevention, Avoidance, Detection and Recovery", "Paging and Segmentation", "Thrashing and Swapping", "None"],
                        correct: 1
                    },
                    {
                        id: 52,
                        question: "In virtual memory, the effective memory access time depends on:",
                        options: ["Page fault rate", "CPU speed", "Deadlock avoidance", "Disk size"],
                        correct: 1
                    },
                    {
                        id: 53,
                        question: "Which deadlock handling method is most costly?",
                        options: ["Prevention", "Avoidance", "Detection and recovery", "None"],
                        correct: 3
                    },
                    {
                        id: 54,
                        question: "Page size is decided by:",
                        options: ["Operating System", "Hardware architecture", "Compiler", "Disk controller"],
                        correct: 2
                    },
                    {
                        id: 55,
                        question: "Thrashing happens when:",
                        options: ["Too many page faults occur", "Deadlock occurs", "CPU is overloaded", "I/O wait is zero"],
                        correct: 1
                    },
                    {
                        id: 56,
                        question: "Deadlock prevention is achieved by:",
                        options: ["Avoiding circular wait", "Allowing starvation", "Stopping paging", "Killing processes always"],
                        correct: 1
                    },
                    {
                        id: 57,
                        question: "Which data structure is used in Banker's algorithm?",
                        options: ["Matrices", "Stack", "Queue", "Tree"],
                        correct: 1
                    },
                    {
                        id: 58,
                        question: "Page fault frequency method is used for:",
                        options: ["Frame allocation", "Deadlock detection", "CPU scheduling", "Disk scheduling"],
                        correct: 1
                    },
                    {
                        id: 59,
                        question: "Rollback in deadlock recovery means:",
                        options: ["Restarting process from safe state", "Killing process", "Paging replacement", "CPU reset"],
                        correct: 1
                    },
                    {
                        id: 60,
                        question: "Deadlock usually occurs in:",
                        options: ["Multiprogramming environment", "Single user OS", "Uniprocessor without I/O", "None"],
                        correct: 1
                    },
                    {
                        id: 61,
                        question: "Working set model is used in:",
                        options: ["Deadlock handling", "Virtual memory management", "CPU scheduling", "Disk scheduling"],
                        correct: 2
                    },
                    {
                        id: 62,
                        question: "Virtual memory gives the illusion of:",
                        options: ["Large main memory", "Infinite CPU speed", "No deadlocks", "No I/O operations"],
                        correct: 1
                    },
                    {
                        id: 63,
                        question: "Coffman’s conditions are related to:",
                        options: ["Deadlock", "Paging", "CPU scheduling", "Thrashing"],
                        correct: 1
                    },
                    {
                        id: 64,
                        question: "If a system is in unsafe state, it may lead to:",
                        options: ["Deadlock", "Starvation only", "Fragmentation", "None"],
                        correct: 1
                    },
                    {
                        id: 65,
                        question: "Paging reduces:",
                        options: ["External fragmentation", "Internal fragmentation", "Deadlock", "Starvation"],
                        correct: 1
                    },
                    {
                        id: 66,
                        question: "Virtual address is translated to physical address using:",
                        options: ["Page table", "Disk table", "Wait-for graph", "Scheduler"],
                        correct: 1
                    },
                    {
                        id: 67,
                        question: "Deadlock detection is done by:",
                        options: ["Periodically checking wait-for graph", "Killing processes always", "Page replacement", "Round robin scheduling"],
                        correct: 1
                    },
                    {
                        id: 68,
                        question: "Page replacement is needed when:",
                        options: ["Page fault occurs and no free frame is available", "CPU scheduling fails", "Deadlock occurs", "Disk crashes"],
                        correct: 1
                    },
                    {
                        id: 69,
                        question: "Time taken to access memory is:",
                        options: ["Effective access time", "Page fault time", "Safe time", "Thrash time"],
                        correct: 1
                    },
                    {
                        id: 70,
                        question: "Which memory is used in demand paging?",
                        options: ["Main memory and secondary storage", "Registers only", "Cache only", "ROM"],
                        correct: 1
                    },
                    {
                        id: 71,
                        question: "Deadlock is avoided if system is always kept in:",
                        options: ["Safe state", "Idle state", "Starvation state", "Fragmented state"],
                        correct: 1
                    },
                    {
                        id: 72,
                        question: "Copy-on-write helps in:",
                        options: ["Efficient memory sharing", "Deadlock recovery", "Page fault handling", "Disk scheduling"],
                        correct: 1
                    },
                    {
                        id: 73,
                        question: "The size of virtual memory depends on:",
                        options: ["Addressing capacity of CPU", "Size of physical memory", "Both A and B", "None"],
                        correct: 3
                    },
                    {
                        id: 74,
                        question: "Killing a process to recover from deadlock is called:",
                        options: ["Process termination", "Paging", "Starvation", "Aging"],
                        correct: 1
                    },
                    {
                        id: 75,
                        question: "What is the main disadvantage of virtual memory?",
                        options: ["Slower memory access due to page faults", "Deadlock always occurs", "Fragmentation increases", "It cannot support multitasking"],
                        correct: 1
                    },
                    {
                        id: 76,
                        question: "Deadlock occurs due to:",
                        options: ["Competition for resources", "Paging", "Virtual addressing", "Scheduling"],
                        correct: 1
                    },
                    {
                        id: 77,
                        question: "Which is an example of real-time deadlock?",
                        options: ["Two trains waiting at crossing", "Page replacement", "Thrashing", "CPU preemption"],
                        correct: 1
                    },
                    {
                        id: 78,
                        question: "Virtual memory is implemented using:",
                        options: ["Hardware and software", "Compiler only", "Disk only", "Cache only"],
                        correct: 1
                    },
                    {
                        id: 79,
                        question: "Which method can lead to process starvation?",
                        options: ["Priority scheduling", "Round robin", "Paging", "Deadlock prevention"],
                        correct: 1
                    },
                    {
                        id: 80,
                        question: "Deadlock-free system means:",
                        options: ["System will never enter unsafe state", "No page faults occur", "CPU always idle", "Thrashing is zero"],
                        correct: 1
                    },
                    {
                        id: 81,
                        question: "Virtual memory separates:",
                        options: ["Logical memory from physical memory", "CPU and Cache", "I/O and CPU", "Disk and Cache"],
                        correct: 1
                    },
                    {
                        id: 82,
                        question: "Which memory management scheme can suffer from external fragmentation?",
                        options: ["Segmentation", "Paging", "Virtual memory", "Thrashing"],
                        correct: 1
                    },
                    {
                        id: 83,
                        question: "Deadlock detection requires:",
                        options: ["Resource allocation graph", "Page table", "Disk controller", "Scheduler"],
                        correct: 1
                    },
                    {
                        id: 84,
                        question: "LRU stands for:",
                        options: ["Least Recently Used", "Least Required Unit", "Logical Resource Usage", "Last Required Update"],
                        correct: 1
                    },
                    {
                        id: 85,
                        question: "In recovery from deadlock, preemption means:",
                        options: ["Taking resource from one process and giving to another", "Killing process", "Paging", "Disk scheduling"],
                        correct: 1
                    },
                    {
                        id: 86,
                        question: "Virtual memory helps in:",
                        options: ["Running large programs", "Preventing deadlocks", "Avoiding CPU scheduling", "Stopping fragmentation"],
                        correct: 1
                    },
                    {
                        id: 87,
                        question: "Which page replacement algorithm suffers from Belady’s anomaly?",
                        options: ["FIFO", "LRU", "Optimal", "None"],
                        correct: 1
                    },
                    {
                        id: 88,
                        question: "Deadlock vs Starvation: which is correct?",
                        options: ["Deadlock is permanent, starvation may be resolved", "Both are same", "Starvation is worse than deadlock", "None"],
                        correct: 1
                    },
                    {
                        id: 89,
                        question: "Effective access time formula includes:",
                        options: ["Memory access + Page fault time * Page fault rate", "CPU burst + I/O wait", "Thrashing time + Disk I/O", "Starvation + Deadlock time"],
                        correct: 1
                    },
                    {
                        id: 90,
                        question: "Deadlock can be modeled using:",
                        options: ["Graphs", "Stacks", "Arrays", "Linked list"],
                        correct: 1
                    },
                    {
                        id: 91,
                        question: "Virtual memory reduces:",
                        options: ["Degree of multiprogramming", "Need for large physical memory", "Deadlock chances", "CPU burst time"],
                        correct: 2
                    },
                    {
                        id: 92,
                        question: "Circular wait is detected using:",
                        options: ["Resource allocation graph", "Paging table", "TLB", "Disk queue"],
                        correct: 1
                    },
                    {
                        id: 93,
                        question: "Page fault rate should be:",
                        options: ["Low", "High", "Always 0", "Always 1"],
                        correct: 1
                    },
                    {
                        id: 94,
                        question: "Deadlock recovery is:",
                        options: ["Very costly", "Always cheap", "Impossible", "Not required"],
                        correct: 1
                    },
                    {
                        id: 95,
                        question: "Virtual memory mainly uses:",
                        options: ["Demand paging", "Segmentation only", "Thrashing", "Starvation"],
                        correct: 1
                    },
                    {
                        id: 96,
                        question: "Which page replacement is most practical?",
                        options: ["LRU", "FIFO", "Optimal", "None"],
                        correct: 1
                    },
                    {
                        id: 97,
                        question: "Deadlock can be prevented by:",
                        options: ["Denying hold and wait", "Paging", "Disk scheduling", "Cache replacement"],
                        correct: 1
                    },
                    {
                        id: 98,
                        question: "Virtual memory reduces:",
                        options: ["Fragmentation", "Process size limitation", "Deadlock", "Starvation"],
                        correct: 2
                    },
                    {
                        id: 99,
                        question: "Deadlock detection is required in:",
                        options: ["Dynamic resource allocation", "Static allocation", "Paging", "Segmentation"],
                        correct: 1
                    },
                    {
                        id: 100,
                        question: "Which four conditions are necessary for deadlock to occur?",
                        options: ["Mutual exclusion, Hold and wait, No preemption, Circular wait", "Starvation, Paging, Fragmentation, Swapping", "Thrashing, Segmentation, Demand Paging, Overlays", "None of these"],
                        correct: 1
                    },
                ],
            },
            "Mix OS questions": {
                color: "#FBBF24",
                questions: [
                    { id: 1, question: "Which of the following is the main purpose of an Operating System?", options: ["To provide hardware only", "To provide interface between user and hardware", "To develop applications", "To manage compilers"], correct: 2 },

                    { id: 2, question: "Which of the following is NOT a type of Operating System?", options: ["Batch OS", "Time-Sharing OS", "Compiler OS", "Distributed OS"], correct: 3 },

                    { id: 3, question: "In multiprogramming, the CPU is ___", options: ["always busy", "always idle", "used rarely", "used only for one process"], correct: 1 },

                    { id: 4, question: "Round Robin scheduling is mainly designed for ___", options: ["Batch systems", "Interactive systems", "Real-time systems", "None"], correct: 2 },

                    { id: 5, question: "Which of these is volatile memory?", options: ["ROM", "Hard Disk", "RAM", "CD"], correct: 3 },

                    { id: 6, question: "Which of these is not a CPU scheduling algorithm?", options: ["FCFS", "SJF", "Round Robin", "Swapping"], correct: 4 },

                    { id: 7, question: "Deadlock occurs when processes are ___", options: ["Running independently", "Competing for same resource", "Idle", "In ready queue"], correct: 2 },

                    { id: 8, question: "Which memory management technique suffers from external fragmentation?", options: ["Paging", "Segmentation", "Contiguous allocation", "Virtual memory"], correct: 3 },

                    { id: 9, question: "The process control block (PCB) contains ___", options: ["User data only", "Process information", "Compiler code", "OS files"], correct: 2 },

                    { id: 10, question: "Thrashing occurs when ___", options: ["CPU is overloaded", "Too many page faults", "Disk crashes", "Deadlock occurs"], correct: 2 },

                    { id: 11, question: "Which of these is NOT a state of a process?", options: ["Running", "Ready", "Waiting", "Linked"], correct: 4 },

                    { id: 12, question: "Which OS is open source?", options: ["Windows", "Linux", "MacOS", "MS-DOS"], correct: 2 },

                    { id: 13, question: "The short-term scheduler selects ___", options: ["Jobs from disk", "Processes from ready queue", "Pages from memory", "Files from storage"], correct: 2 },

                    { id: 14, question: "Virtual memory is implemented using ___", options: ["Disk", "Cache", "Registers", "ROM"], correct: 1 },

                    { id: 15, question: "Which one is the fastest memory?", options: ["Hard disk", "Cache", "RAM", "Virtual memory"], correct: 2 },

                    { id: 16, question: "Semaphore is used for ___", options: ["Scheduling", "Synchronization", "Deadlock recovery", "Memory allocation"], correct: 2 },

                    { id: 17, question: "Which page replacement algorithm suffers from Belady’s anomaly?", options: ["FIFO", "LRU", "Optimal", "Clock"], correct: 1 },

                    { id: 18, question: "A context switch happens when ___", options: ["CPU changes from one process to another", "Memory is full", "Deadlock occurs", "File is closed"], correct: 1 },

                    { id: 19, question: "Which file system is used in Windows?", options: ["EXT4", "NTFS", "FAT32", "Both FAT32 and NTFS"], correct: 4 },

                    { id: 20, question: "Which of the following is NOT a type of kernel?", options: ["Monolithic", "Microkernel", "Hybrid", "Batch kernel"], correct: 4 },

                    {
                        "id": 21,
                        "question": "Which part of the operating system manages the execution of processes?",
                        "options": ["Memory manager", "Process manager", "File manager", "I/O manager"],
                        "correct": 2
                    },
                    {
                        "id": 22,
                        "question": "Which scheduling algorithm selects the process that has been waiting the longest?",
                        "options": ["Round Robin", "First Come First Serve", "Shortest Job Next", "Priority Scheduling"],
                        "correct": 2
                    },
                    {
                        "id": 23,
                        "question": "Which of the following is NOT an example of an operating system?",
                        "options": ["Windows", "Linux", "Oracle", "macOS"],
                        "correct": 3
                    },
                    {
                        "id": 24,
                        "question": "Page replacement algorithms are used in:",
                        "options": ["File management", "Process management", "Virtual memory management", "CPU scheduling"],
                        "correct": 3
                    },
                    {
                        "id": 25,
                        "question": "Which CPU scheduling algorithm can lead to starvation?",
                        "options": ["Round Robin", "First Come First Serve", "Priority Scheduling", "Shortest Remaining Time"],
                        "correct": 3
                    },
                    {
                        "id": 26,
                        "question": "Which type of OS is used in mobile phones?",
                        "options": ["Real-time OS", "Batch OS", "Embedded OS", "Multiprogramming OS"],
                        "correct": 3
                    },
                    {
                        "id": 27,
                        "question": "What is the main purpose of device drivers?",
                        "options": ["Provide security", "Allow communication between OS and hardware", "Manage memory", "Execute processes"],
                        "correct": 2
                    },
                    {
                        "id": 28,
                        "question": "Which command is used to change file permissions in UNIX/Linux?",
                        "options": ["ls", "chmod", "grep", "pwd"],
                        "correct": 2
                    },
                    {
                        "id": 29,
                        "question": "In Round Robin scheduling, the key parameter is:",
                        "options": ["Priority", "Time quantum", "Burst time", "Arrival time"],
                        "correct": 2
                    },
                    {
                        "id": 30,
                        "question": "Which file system is commonly used in Windows OS?",
                        "options": ["ext4", "FAT32/NTFS", "HFS+", "ZFS"],
                        "correct": 2
                    },
                    {
                        "id": 31,
                        "question": "Deadlock can occur when processes hold resources and wait for:",
                        "options": ["New resources", "Other processes", "Other held resources", "CPU time"],
                        "correct": 3
                    },
                    {
                        "id": 32,
                        "question": "Which of the following is a real-time operating system?",
                        "options": ["Windows 10", "Linux Ubuntu", "VxWorks", "macOS"],
                        "correct": 3
                    },
                    {
                        "id": 33,
                        "question": "Which OS concept provides multiple users to work simultaneously?",
                        "options": ["Multiprogramming", "Multitasking", "Time-sharing", "Batch processing"],
                        "correct": 3
                    },
                    {
                        "id": 34,
                        "question": "Which data structure is used for implementing Round Robin scheduling?",
                        "options": ["Stack", "Queue", "Priority Queue", "Linked List"],
                        "correct": 2
                    },
                    {
                        "id": 35,
                        "question": "The process of loading pages from disk to memory when needed is called:",
                        "options": ["Paging", "Demand paging", "Segmentation", "Swapping"],
                        "correct": 2
                    },
                    {
                        "id": 36,
                        "question": "Which of these is NOT a CPU scheduling criterion?",
                        "options": ["Turnaround time", "Waiting time", "Response time", "File size"],
                        "correct": 4
                    },
                    {
                        "id": 37,
                        "question": "Which OS architecture gives maximum security?",
                        "options": ["Monolithic", "Layered", "Microkernel", "Distributed"],
                        "correct": 3
                    },
                    {
                        "id": 38,
                        "question": "The critical section problem occurs in:",
                        "options": ["Memory management", "File management", "Process synchronization", "I/O management"],
                        "correct": 3
                    },
                    {
                        "id": 39,
                        "question": "Which algorithm is used in page replacement that removes the least recently used page?",
                        "options": ["FIFO", "LRU", "Optimal", "Clock"],
                        "correct": 2
                    },
                    {
                        "id": 40,
                        "question": "Which part of the OS deals with user interaction?",
                        "options": ["Kernel", "Shell", "Device driver", "Scheduler"],
                        "correct": 2
                    },
                    {
                        "id": 21,
                        "question": "Which part of the operating system manages the execution of processes?",
                        "options": ["Memory manager", "Process manager", "File manager", "I/O manager"],
                        "correct": 2
                    },
                    {
                        "id": 22,
                        "question": "Which scheduling algorithm selects the process that has been waiting the longest?",
                        "options": ["Round Robin", "First Come First Serve", "Shortest Job Next", "Priority Scheduling"],
                        "correct": 2
                    },
                    {
                        "id": 23,
                        "question": "Which of the following is NOT an example of an operating system?",
                        "options": ["Windows", "Linux", "Oracle", "macOS"],
                        "correct": 3
                    },
                    {
                        "id": 24,
                        "question": "Page replacement algorithms are used in:",
                        "options": ["File management", "Process management", "Virtual memory management", "CPU scheduling"],
                        "correct": 3
                    },
                    {
                        "id": 25,
                        "question": "Which CPU scheduling algorithm can lead to starvation?",
                        "options": ["Round Robin", "First Come First Serve", "Priority Scheduling", "Shortest Remaining Time"],
                        "correct": 3
                    },
                    {
                        "id": 26,
                        "question": "Which type of OS is used in mobile phones?",
                        "options": ["Real-time OS", "Batch OS", "Embedded OS", "Multiprogramming OS"],
                        "correct": 3
                    },
                    {
                        "id": 27,
                        "question": "What is the main purpose of device drivers?",
                        "options": ["Provide security", "Allow communication between OS and hardware", "Manage memory", "Execute processes"],
                        "correct": 2
                    },
                    {
                        "id": 28,
                        "question": "Which command is used to change file permissions in UNIX/Linux?",
                        "options": ["ls", "chmod", "grep", "pwd"],
                        "correct": 2
                    },
                    {
                        "id": 29,
                        "question": "In Round Robin scheduling, the key parameter is:",
                        "options": ["Priority", "Time quantum", "Burst time", "Arrival time"],
                        "correct": 2
                    },
                    {
                        "id": 30,
                        "question": "Which file system is commonly used in Windows OS?",
                        "options": ["ext4", "FAT32/NTFS", "HFS+", "ZFS"],
                        "correct": 2
                    },
                    {
                        "id": 31,
                        "question": "Deadlock can occur when processes hold resources and wait for:",
                        "options": ["New resources", "Other processes", "Other held resources", "CPU time"],
                        "correct": 3
                    },
                    {
                        "id": 32,
                        "question": "Which of the following is a real-time operating system?",
                        "options": ["Windows 10", "Linux Ubuntu", "VxWorks", "macOS"],
                        "correct": 3
                    },
                    {
                        "id": 33,
                        "question": "Which OS concept provides multiple users to work simultaneously?",
                        "options": ["Multiprogramming", "Multitasking", "Time-sharing", "Batch processing"],
                        "correct": 3
                    },
                    {
                        "id": 34,
                        "question": "Which data structure is used for implementing Round Robin scheduling?",
                        "options": ["Stack", "Queue", "Priority Queue", "Linked List"],
                        "correct": 2
                    },
                    {
                        "id": 35,
                        "question": "The process of loading pages from disk to memory when needed is called:",
                        "options": ["Paging", "Demand paging", "Segmentation", "Swapping"],
                        "correct": 2
                    },
                    {
                        "id": 36,
                        "question": "Which of these is NOT a CPU scheduling criterion?",
                        "options": ["Turnaround time", "Waiting time", "Response time", "File size"],
                        "correct": 4
                    },
                    {
                        "id": 37,
                        "question": "Which OS architecture gives maximum security?",
                        "options": ["Monolithic", "Layered", "Microkernel", "Distributed"],
                        "correct": 3
                    },
                    {
                        "id": 38,
                        "question": "The critical section problem occurs in:",
                        "options": ["Memory management", "File management", "Process synchronization", "I/O management"],
                        "correct": 3
                    },
                    {
                        "id": 39,
                        "question": "Which algorithm is used in page replacement that removes the least recently used page?",
                        "options": ["FIFO", "LRU", "Optimal", "Clock"],
                        "correct": 2
                    },
                    {
                        "id": 40,
                        "question": "Which part of the OS deals with user interaction?",
                        "options": ["Kernel", "Shell", "Device driver", "Scheduler"],
                        "correct": 2
                    },
                    {
                        "id": 41,
                        "question": "Which of the following is NOT a function of an operating system?",
                        "options": ["Process management", "Memory management", "Web page design", "File management"],
                        "correct": 3
                    },
                    {
                        "id": 42,
                        "question": "In multiprogramming, the main advantage is:",
                        "options": ["Faster execution of a single process", "Efficient CPU utilization", "Simple OS design", "No need for scheduling"],
                        "correct": 2
                    },
                    {
                        "id": 43,
                        "question": "Which scheduling algorithm gives first priority to the shortest job?",
                        "options": ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
                        "correct": 2
                    },
                    {
                        "id": 44,
                        "question": "Virtual memory is:",
                        "options": ["An extension of RAM using disk storage", "Another name for cache memory", "Memory only for virtual machines", "A replacement for physical memory"],
                        "correct": 1
                    },
                    {
                        "id": 45,
                        "question": "Thrashing in operating systems is caused by:",
                        "options": ["High CPU usage", "Excessive page swapping", "Low disk I/O", "Multiple printers"],
                        "correct": 2
                    },
                    {
                        "id": 46,
                        "question": "Which of these is a non-preemptive scheduling algorithm?",
                        "options": ["FCFS", "Round Robin", "SRTF", "Priority (preemptive)"],
                        "correct": 1
                    },
                    {
                        "id": 47,
                        "question": "In OS, semaphore is used for:",
                        "options": ["File organization", "Deadlock avoidance", "Process synchronization", "Memory allocation"],
                        "correct": 3
                    },
                    {
                        "id": 48,
                        "question": "Which is an example of a spooling device?",
                        "options": ["Printer", "Hard disk", "Keyboard", "CPU"],
                        "correct": 1
                    },
                    {
                        "id": 49,
                        "question": "The Banker’s algorithm is used for:",
                        "options": ["CPU scheduling", "Deadlock avoidance", "Memory allocation", "Page replacement"],
                        "correct": 2
                    },
                    {
                        "id": 50,
                        "question": "Page fault occurs when:",
                        "options": ["Page is in memory", "Page is not in memory", "Disk is full", "Cache is empty"],
                        "correct": 2
                    },
                    {
                        "id": 51,
                        "question": "Which of these is a contiguous memory allocation technique?",
                        "options": ["Paging", "Segmentation", "Fixed partitioning", "Demand paging"],
                        "correct": 3
                    },
                    {
                        "id": 52,
                        "question": "The round robin scheduling algorithm is designed for:",
                        "options": ["Batch systems", "Interactive systems", "Multiprocessing", "Memory management"],
                        "correct": 2
                    },
                    {
                        "id": 53,
                        "question": "Which data structure is used in Round Robin scheduling?",
                        "options": ["Stack", "Queue", "Tree", "Graph"],
                        "correct": 2
                    },
                    {
                        "id": 54,
                        "question": "Which of the following is not a state of a process?",
                        "options": ["Running", "Ready", "Waiting", "Blocked RAM"],
                        "correct": 4
                    },
                    {
                        "id": 55,
                        "question": "Which page replacement algorithm suffers from Belady’s anomaly?",
                        "options": ["LRU", "Optimal", "FIFO", "MRU"],
                        "correct": 3
                    },
                    {
                        "id": 56,
                        "question": "Context switching occurs when:",
                        "options": ["Process changes from user to kernel mode", "OS switches from one process to another", "Memory is full", "Deadlock occurs"],
                        "correct": 2
                    },
                    {
                        "id": 57,
                        "question": "Which is the fastest memory?",
                        "options": ["Cache", "RAM", "Virtual memory", "Hard disk"],
                        "correct": 1
                    },
                    {
                        "id": 58,
                        "question": "A deadlock situation requires:",
                        "options": ["Mutual exclusion", "Hold and wait", "No preemption", "Circular wait"],
                        "correct": 4
                    },
                    {
                        "id": 59,
                        "question": "Which type of fragmentation occurs in paging?",
                        "options": ["External", "Internal", "Both", "None"],
                        "correct": 2
                    },
                    {
                        "id": 60,
                        "question": "Swapping is:",
                        "options": ["Copying process between CPU and cache", "Copying process between main memory and disk", "Copying data from disk to cache", "Copying registers into stack"],
                        "correct": 2
                    },

                ]
            }
        },
    },
    "Database Management System (DBMS)": {
        color: "#8B5CF6",
        subtopics: {
            "Need for databases vs file systems; RDBMS concepts": {
                color: "#8B5CF6",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Need for databases vs file systems; RDBMS concepts?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Data model basics: tables, rows, columns; schema": {
                color: "#F97316",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Data model basics: tables, rows, columns; schema?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 1,
                    },
                ],
            },
            "Keys: primary, candidate, foreign; constraints": {
                color: "#10B981",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 3,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Keys: primary, candidate, foreign; constraints?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "SQL basics: SELECT, WHERE, ORDER BY, DISTINCT, simple JOIN; INSERT/UPDATE/DELETE":
            {
                color: "#14B8A6",
                questions: [
                    {
                        id: 1,
                        question: "Which keyword is used to retrieve data?",
                        options: ["GET", "SELECT", "FETCH", "SHOW"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question: "Which clause filters rows?",
                        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question: "Which SQL statement removes a table?",
                        options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question: "Which function counts rows?",
                        options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "Which join returns all rows from both tables?",
                        options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question: "Which clause groups rows?",
                        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question: "Which statement removes all rows but keeps the table?",
                        options: ["DROP", "DELETE", "TRUNCATE", "CLEAR"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question: "Which key uniquely identifies a row?",
                        options: ["Foreign Key", "Primary Key", "Unique Key", "Index"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question: "Which command changes table structure?",
                        options: ["ALTER", "MODIFY", "UPDATE", "CHANGE"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question: "Which function returns the largest value?",
                        options: ["MAX()", "HIGH()", "TOP()", "LARGEST()"],
                        correct: 0,
                    },
                    {
                        id: 11,
                        question: "Which clause is used after GROUP BY to filter?",
                        options: ["HAVING", "WHERE", "FILTER", "CONDITION"],
                        correct: 0,
                    },
                    {
                        id: 12,
                        question: "Which index type enforces uniqueness?",
                        options: ["Normal", "Primary", "Unique", "Clustered"],
                        correct: 2,
                    },
                    {
                        id: 13,
                        question: "Which keyword sorts results?",
                        options: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"],
                        correct: 0,
                    },
                    {
                        id: 14,
                        question: "Which statement updates data?",
                        options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
                        correct: 1,
                    },
                    {
                        id: 15,
                        question: "Which data type stores variable-length strings?",
                        options: ["CHAR", "VARCHAR", "TEXT", "STRING"],
                        correct: 1,
                    },
                ],
            },
            "Normalization overview: 1NF–3NF (idea only)": {
                color: "#0EA5E9",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Normalization overview: 1NF–3NF (idea only)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
        },
    },
    "Computer Networks & Internet": {
        color: "#F97316",
        subtopics: {
            "Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)": {
                color: "#F97316",
                questions: [
                    { id: 1, question: "Which type of network is used to connect devices within a small area such as a room?", options: ["LAN", "MAN", "PAN", "WAN"], correct: 3 },

                    { id: 2, question: "LAN stands for?", options: ["Local Area Network", "Large Area Network", "Limited Area Network", "Line Area Network"], correct: 1 },

                    { id: 3, question: "Which network spans across cities or large campuses?", options: ["LAN", "MAN", "WAN", "PAN"], correct: 2 },

                    { id: 4, question: "Which network is the largest in geographical coverage?", options: ["LAN", "PAN", "MAN", "WAN"], correct: 4 },

                    { id: 5, question: "Bluetooth is an example of which type of network?", options: ["LAN", "PAN", "MAN", "WAN"], correct: 3 },

                    { id: 6, question: "Which topology uses a central hub to connect all devices?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 3 },

                    { id: 7, question: "In which topology does each device have exactly two neighbors?", options: ["Ring", "Bus", "Star", "Tree"], correct: 1 },

                    { id: 8, question: "Which network is typically used in an organization’s office building?", options: ["LAN", "MAN", "WAN", "PAN"], correct: 1 },

                    { id: 9, question: "Which topology has a single backbone cable connecting all nodes?", options: ["Ring", "Bus", "Star", "Mesh"], correct: 2 },

                    { id: 10, question: "Which network is most suitable for connecting across countries?", options: ["LAN", "PAN", "WAN", "MAN"], correct: 3 },

                    { id: 11, question: "What is a key disadvantage of bus topology?", options: ["Difficult to add new devices", "Single point of failure", "High cost", "No central hub"], correct: 2 },

                    { id: 12, question: "Which network is most cost-effective for home use?", options: ["PAN", "LAN", "MAN", "WAN"], correct: 1 },

                    { id: 13, question: "Which topology is more reliable because failure of one cable does not affect others?", options: ["Bus", "Ring", "Star", "Tree"], correct: 3 },

                    { id: 14, question: "Which topology requires a token to pass for data transmission?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 2 },

                    { id: 15, question: "Which network is designed to connect devices across a metropolitan city?", options: ["WAN", "MAN", "LAN", "PAN"], correct: 2 },

                    { id: 16, question: "Which network is usually managed by a single person for personal devices?", options: ["WAN", "LAN", "PAN", "MAN"], correct: 3 },

                    { id: 17, question: "The Internet is an example of which type of network?", options: ["LAN", "WAN", "PAN", "MAN"], correct: 2 },

                    { id: 18, question: "Which topology has the easiest fault detection?", options: ["Ring", "Bus", "Star", "Mesh"], correct: 3 },

                    { id: 19, question: "Which topology is least expensive to implement?", options: ["Bus", "Star", "Ring", "Mesh"], correct: 1 },

                    { id: 20, question: "Which network type provides the fastest communication within a building?", options: ["WAN", "MAN", "LAN", "PAN"], correct: 3 },

                    { id: 21, question: "Which topology suffers if the central device fails?", options: ["Bus", "Star", "Ring", "Mesh"], correct: 2 },

                    { id: 22, question: "What is the main advantage of ring topology?", options: ["No collisions", "Easy to troubleshoot", "Low cost", "Independent of nodes"], correct: 1 },

                    { id: 23, question: "Which network type generally uses Ethernet cables?", options: ["LAN", "WAN", "PAN", "MAN"], correct: 1 },

                    { id: 24, question: "In bus topology, what happens if the backbone fails?", options: ["Network continues", "Only one node fails", "Entire network fails", "No effect"], correct: 3 },

                    { id: 25, question: "Which topology is commonly used in offices and schools?", options: ["Bus", "Star", "Ring", "Hybrid"], correct: 2 },

                    { id: 26, question: "Which type of network provides global connectivity?", options: ["PAN", "WAN", "LAN", "MAN"], correct: 2 },

                    { id: 27, question: "Which topology requires terminators at both ends?", options: ["Star", "Bus", "Ring", "Tree"], correct: 2 },

                    { id: 28, question: "Which network type covers a city-wide area?", options: ["LAN", "WAN", "MAN", "PAN"], correct: 3 },

                    { id: 29, question: "Which topology is highly secure as data passes through a central device?", options: ["Star", "Bus", "Ring", "Mesh"], correct: 1 },

                    { id: 30, question: "Which network type is limited to about 10 meters?", options: ["PAN", "WAN", "LAN", "MAN"], correct: 1 },

                    { id: 31, question: "Which topology is most affected by traffic load?", options: ["Ring", "Bus", "Star", "Tree"], correct: 2 },

                    { id: 32, question: "Which topology is easy to expand by adding new devices?", options: ["Star", "Bus", "Ring", "Mesh"], correct: 1 },

                    { id: 33, question: "Which network type is mostly wireless and personal?", options: ["WAN", "MAN", "PAN", "LAN"], correct: 3 },

                    { id: 34, question: "Which topology provides equal access time to all nodes?", options: ["Bus", "Star", "Ring", "Mesh"], correct: 3 },

                    { id: 35, question: "Which network uses routers for data transmission between countries?", options: ["LAN", "WAN", "PAN", "MAN"], correct: 2 },

                    { id: 36, question: "Which topology connects devices in a linear sequence?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 1 },

                    { id: 37, question: "Which topology requires more cable length than bus topology?", options: ["Star", "Ring", "Tree", "Hybrid"], correct: 1 },

                    { id: 38, question: "Which network provides coverage for a university campus?", options: ["LAN", "WAN", "PAN", "MAN"], correct: 4 },

                    { id: 39, question: "Which topology requires token passing protocol?", options: ["Star", "Bus", "Ring", "Tree"], correct: 3 },

                    { id: 40, question: "Which network type is used in a single household?", options: ["WAN", "PAN", "MAN", "LAN"], correct: 2 },

                    { id: 41, question: "Which topology ensures high fault tolerance?", options: ["Star", "Ring", "Mesh", "Bus"], correct: 3 },

                    { id: 42, question: "Which network type connects small offices?", options: ["PAN", "WAN", "LAN", "MAN"], correct: 3 },

                    { id: 43, question: "Which topology uses a dedicated cable for each node to the hub?", options: ["Ring", "Bus", "Star", "Tree"], correct: 3 },

                    { id: 44, question: "Which topology is not suitable for large networks?", options: ["Ring", "Star", "Bus", "Mesh"], correct: 3 },

                    { id: 45, question: "Which network requires high bandwidth and speed within buildings?", options: ["WAN", "MAN", "LAN", "PAN"], correct: 3 },

                    { id: 46, question: "Which topology is difficult to configure and maintain?", options: ["Bus", "Star", "Mesh", "Ring"], correct: 3 },

                    { id: 47, question: "Which network type is the most private and secure?", options: ["LAN", "MAN", "WAN", "PAN"], correct: 4 },

                    { id: 48, question: "Which topology requires central coordination?", options: ["Star", "Bus", "Ring", "Mesh"], correct: 1 },

                    { id: 49, question: "Which network type generally has the lowest latency?", options: ["WAN", "LAN", "MAN", "PAN"], correct: 2 },

                    { id: 50, question: "Which topology can connect both linear and star networks?", options: ["Tree", "Ring", "Bus", "Mesh"], correct: 1 }
                ],
            },
            "OSI and TCP/IP model idea; what each layer does (simple mapping)": {
                color: "#10B981",
                questions: [
                    { id: 1, question: "How many layers are there in the OSI model?", options: ["5", "6", "7", "4"], correct: 3 },
                    { id: 2, question: "Which OSI layer is responsible for logical addressing and routing?", options: ["Transport", "Network", "Data Link", "Session"], correct: 2 },
                    { id: 3, question: "Which layer of the OSI model ensures error-free delivery of data?", options: ["Transport", "Network", "Session", "Physical"], correct: 1 },
                    { id: 4, question: "Which layer of OSI is responsible for data encryption and compression?", options: ["Application", "Presentation", "Session", "Transport"], correct: 2 },
                    { id: 5, question: "Which OSI layer breaks large messages into smaller segments?", options: ["Application", "Transport", "Network", "Data Link"], correct: 2 },
                    { id: 6, question: "Which OSI layer deals with bit-level transmission?", options: ["Data Link", "Network", "Physical", "Transport"], correct: 3 },
                    { id: 7, question: "Which layer of OSI establishes, manages, and terminates sessions?", options: ["Transport", "Session", "Network", "Application"], correct: 2 },
                    { id: 8, question: "Which OSI layer converts data into signals for transmission?", options: ["Physical", "Presentation", "Transport", "Session"], correct: 1 },
                    { id: 9, question: "TCP/IP has how many layers?", options: ["3", "4", "5", "7"], correct: 2 },
                    { id: 10, question: "Which TCP/IP layer corresponds to the OSI Application, Presentation, and Session layers?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 1 },
                    { id: 11, question: "In TCP/IP, which layer ensures process-to-process delivery?", options: ["Transport", "Application", "Internet", "Network Access"], correct: 1 },
                    { id: 12, question: "In TCP/IP, which layer is responsible for routing packets?", options: ["Internet", "Transport", "Application", "Physical"], correct: 1 },
                    { id: 13, question: "The Data Link layer of OSI maps to which TCP/IP layer?", options: ["Application", "Internet", "Network Access", "Transport"], correct: 3 },
                    { id: 14, question: "Which OSI layer uses IP addresses for communication?", options: ["Transport", "Network", "Data Link", "Application"], correct: 2 },
                    { id: 15, question: "Which OSI layer uses MAC addresses?", options: ["Application", "Network", "Data Link", "Transport"], correct: 3 },
                    { id: 16, question: "Which OSI layer ensures reliable data delivery using acknowledgment?", options: ["Transport", "Network", "Session", "Presentation"], correct: 1 },
                    { id: 17, question: "Which OSI layer provides services like email, file transfer, and web browsing?", options: ["Transport", "Application", "Network", "Session"], correct: 2 },
                    { id: 18, question: "The function of error detection and correction belongs to which OSI layer?", options: ["Network", "Data Link", "Transport", "Physical"], correct: 2 },
                    { id: 19, question: "Which TCP/IP protocol is used at the Transport layer for reliable communication?", options: ["UDP", "TCP", "IP", "HTTP"], correct: 2 },
                    { id: 20, question: "Which TCP/IP protocol provides connectionless service at the Transport layer?", options: ["TCP", "UDP", "IP", "FTP"], correct: 2 },

                    { id: 21, question: "Which OSI layer converts data into a format suitable for the application?", options: ["Transport", "Session", "Presentation", "Application"], correct: 3 },
                    { id: 22, question: "Which TCP/IP layer handles hardware addressing?", options: ["Network Access", "Transport", "Application", "Internet"], correct: 1 },
                    { id: 23, question: "Which OSI layer is responsible for flow control?", options: ["Transport", "Network", "Data Link", "Session"], correct: 1 },
                    { id: 24, question: "Which OSI layer handles dialog control?", options: ["Session", "Presentation", "Transport", "Application"], correct: 1 },
                    { id: 25, question: "At which OSI layer do hubs and repeaters operate?", options: ["Data Link", "Network", "Physical", "Transport"], correct: 3 },
                    { id: 26, question: "Routers work at which OSI layer?", options: ["Transport", "Network", "Data Link", "Application"], correct: 2 },
                    { id: 27, question: "Switches primarily work at which OSI layer?", options: ["Data Link", "Physical", "Transport", "Network"], correct: 1 },
                    { id: 28, question: "Which TCP/IP layer uses HTTP, FTP, and SMTP?", options: ["Transport", "Application", "Internet", "Network Access"], correct: 2 },
                    { id: 29, question: "Which OSI layer converts electrical signals into bits?", options: ["Physical", "Transport", "Network", "Data Link"], correct: 1 },
                    { id: 30, question: "Which OSI layer is closest to the user?", options: ["Application", "Presentation", "Session", "Transport"], correct: 1 },

                    { id: 31, question: "In TCP/IP, IP is used at which layer?", options: ["Application", "Internet", "Transport", "Network Access"], correct: 2 },
                    { id: 32, question: "Which protocol is connectionless?", options: ["TCP", "UDP", "SMTP", "HTTP"], correct: 2 },
                    { id: 33, question: "Which protocol provides reliable communication?", options: ["TCP", "UDP", "IP", "ARP"], correct: 1 },
                    { id: 34, question: "Which layer in OSI is responsible for physical topology?", options: ["Network", "Data Link", "Physical", "Transport"], correct: 3 },
                    { id: 35, question: "At which OSI layer does the IP protocol work?", options: ["Data Link", "Transport", "Network", "Session"], correct: 3 },
                    { id: 36, question: "Which OSI layer handles end-to-end delivery?", options: ["Transport", "Network", "Data Link", "Physical"], correct: 1 },
                    { id: 37, question: "Which OSI layer ensures data is in readable format (JPEG, MP3, etc.)?", options: ["Presentation", "Application", "Session", "Transport"], correct: 1 },
                    { id: 38, question: "Which OSI layer assigns port numbers?", options: ["Network", "Transport", "Data Link", "Physical"], correct: 2 },
                    { id: 39, question: "Which OSI layer is responsible for multiplexing?", options: ["Transport", "Session", "Network", "Data Link"], correct: 1 },
                    { id: 40, question: "Which TCP/IP layer corresponds to OSI’s Network layer?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 3 },

                    { id: 41, question: "Which OSI layer uses sockets for communication?", options: ["Application", "Network", "Transport", "Session"], correct: 3 },
                    { id: 42, question: "Which TCP/IP layer ensures host-to-host communication?", options: ["Application", "Internet", "Transport", "Network Access"], correct: 3 },
                    { id: 43, question: "Which OSI layer is responsible for character encoding?", options: ["Presentation", "Transport", "Session", "Application"], correct: 1 },
                    { id: 44, question: "Which OSI layer organizes data into frames?", options: ["Network", "Data Link", "Transport", "Application"], correct: 2 },
                    { id: 45, question: "Which OSI layer handles framing and error detection?", options: ["Data Link", "Network", "Transport", "Physical"], correct: 1 },
                    { id: 46, question: "Which TCP/IP layer handles ARP and Ethernet?", options: ["Internet", "Network Access", "Transport", "Application"], correct: 2 },
                    { id: 47, question: "Which OSI layer establishes synchronization between two systems?", options: ["Transport", "Session", "Presentation", "Application"], correct: 2 },
                    { id: 48, question: "Which OSI layer ensures data packets arrive in sequence?", options: ["Network", "Transport", "Session", "Data Link"], correct: 2 },
                    { id: 49, question: "In TCP/IP, which protocol translates domain names to IP addresses?", options: ["HTTP", "FTP", "DNS", "SMTP"], correct: 3 },
                    { id: 50, question: "Which OSI layer is concerned with path determination?", options: ["Data Link", "Session", "Network", "Transport"], correct: 3 },

                    { id: 51, question: "At which OSI layer does SSL/TLS work?", options: ["Transport", "Presentation", "Network", "Data Link"], correct: 2 },
                    { id: 52, question: "At which OSI layer does Ping (ICMP) work?", options: ["Transport", "Application", "Network", "Data Link"], correct: 3 },
                    { id: 53, question: "Which OSI layer uses sequence and acknowledgment numbers?", options: ["Transport", "Network", "Data Link", "Application"], correct: 1 },
                    { id: 54, question: "The physical transmission medium is defined at which OSI layer?", options: ["Physical", "Data Link", "Transport", "Network"], correct: 1 },
                    { id: 55, question: "The process of encapsulation happens in which model?", options: ["OSI", "TCP/IP", "Both", "None"], correct: 3 },
                    { id: 56, question: "Which OSI layer uses frames as data units?", options: ["Physical", "Data Link", "Network", "Transport"], correct: 2 },
                    { id: 57, question: "Which OSI layer uses packets as data units?", options: ["Transport", "Network", "Data Link", "Session"], correct: 2 },
                    { id: 58, question: "Which OSI layer uses segments as data units?", options: ["Transport", "Data Link", "Network", "Physical"], correct: 1 },
                    { id: 59, question: "Which OSI layer uses bits as data units?", options: ["Physical", "Data Link", "Network", "Transport"], correct: 1 },
                    { id: 60, question: "Which OSI layer uses data as data units?", options: ["Application", "Network", "Session", "Transport"], correct: 1 },

                    { id: 61, question: "Which TCP/IP protocol is used to transfer files?", options: ["SMTP", "FTP", "HTTP", "SNMP"], correct: 2 },
                    { id: 62, question: "Which TCP/IP protocol is used for email transfer?", options: ["SMTP", "HTTP", "DNS", "FTP"], correct: 1 },
                    { id: 63, question: "Which TCP/IP protocol is used for web browsing?", options: ["FTP", "HTTP", "SMTP", "SNMP"], correct: 2 },
                    { id: 64, question: "Which TCP/IP protocol is used for network management?", options: ["FTP", "HTTP", "SNMP", "SMTP"], correct: 3 },
                    { id: 65, question: "Which OSI layer is also called the end-user layer?", options: ["Session", "Presentation", "Application", "Transport"], correct: 3 },
                    { id: 66, question: "Which TCP/IP layer is also known as the Link layer?", options: ["Internet", "Transport", "Network Access", "Application"], correct: 3 },
                    { id: 67, question: "At which OSI layer do gateways operate?", options: ["Network", "Session", "Application", "Transport"], correct: 3 },
                    { id: 68, question: "Which OSI layer performs data translation between different formats?", options: ["Transport", "Session", "Application", "Presentation"], correct: 4 },
                    { id: 69, question: "Which OSI layer provides connection establishment?", options: ["Transport", "Session", "Network", "Data Link"], correct: 2 },
                    { id: 70, question: "Which TCP/IP protocol is used to fetch email from a server?", options: ["POP3/IMAP", "SMTP", "HTTP", "FTP"], correct: 1 },

                    { id: 71, question: "Which OSI layer provides services for file transfer and remote login?", options: ["Presentation", "Transport", "Application", "Session"], correct: 3 },
                    { id: 72, question: "Which OSI layer provides error notification?", options: ["Data Link", "Transport", "Network", "Physical"], correct: 2 },
                    { id: 73, question: "Which OSI layer is responsible for routing and congestion control?", options: ["Transport", "Network", "Data Link", "Session"], correct: 2 },
                    { id: 74, question: "Which TCP/IP protocol is responsible for remote terminal access?", options: ["SMTP", "Telnet", "FTP", "HTTP"], correct: 2 },
                    { id: 75, question: "Which OSI layer provides data integrity and sequencing?", options: ["Session", "Transport", "Network", "Data Link"], correct: 2 },
                    { id: 76, question: "Which OSI layer provides reliable process-to-process communication?", options: ["Network", "Data Link", "Transport", "Physical"], correct: 3 },
                    { id: 77, question: "At which OSI layer does a bridge work?", options: ["Physical", "Data Link", "Transport", "Network"], correct: 2 },
                    { id: 78, question: "Which OSI layer takes care of syntax and semantics of information?", options: ["Transport", "Presentation", "Application", "Session"], correct: 2 },
                    { id: 79, question: "Which OSI layer handles peer-to-peer communication?", options: ["Transport", "Network", "Session", "Data Link"], correct: 1 },
                    { id: 80, question: "Which OSI layer establishes, maintains, and terminates virtual circuits?", options: ["Session", "Transport", "Application", "Network"], correct: 2 }
                ],
            },
            "Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP": {
                color: "#14B8A6",
                questions: [
                    { id: 1, question: "Which protocol is responsible for assigning IP addresses dynamically?", options: ["DNS", "DHCP", "FTP", "SMTP"], correct: 2 },
                    { id: 2, question: "Which protocol translates domain names to IP addresses?", options: ["FTP", "DHCP", "DNS", "HTTP"], correct: 3 },
                    { id: 3, question: "Which protocol is used to transfer files over the Internet?", options: ["SMTP", "FTP", "TCP", "POP"], correct: 2 },
                    { id: 4, question: "Which layer of TCP/IP model does IP work in?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 3 },
                    { id: 5, question: "Which protocol provides reliable communication with acknowledgment?", options: ["TCP", "UDP", "IP", "FTP"], correct: 1 },
                    { id: 6, question: "Which protocol is connectionless and faster but less reliable?", options: ["TCP", "UDP", "HTTP", "SMTP"], correct: 2 },
                    { id: 7, question: "Which protocol is used for sending emails?", options: ["POP3", "IMAP", "SMTP", "FTP"], correct: 3 },
                    { id: 8, question: "Which protocol is used for retrieving emails from a mail server to a client?", options: ["SMTP", "DNS", "POP3", "DHCP"], correct: 3 },
                    { id: 9, question: "Which email protocol allows synchronization across multiple devices?", options: ["POP3", "IMAP", "SMTP", "FTP"], correct: 2 },
                    { id: 10, question: "Which protocol runs on port 80?", options: ["HTTPS", "HTTP", "FTP", "DNS"], correct: 2 },

                    { id: 11, question: "Which protocol runs on port 443?", options: ["HTTP", "FTP", "HTTPS", "SMTP"], correct: 3 },
                    { id: 12, question: "Which protocol is more secure than HTTP?", options: ["DNS", "HTTPS", "TCP", "UDP"], correct: 2 },
                    { id: 13, question: "Which protocol provides end-to-end communication between applications?", options: ["IP", "TCP", "DNS", "DHCP"], correct: 2 },
                    { id: 14, question: "Which protocol is responsible for routing packets?", options: ["TCP", "IP", "SMTP", "HTTP"], correct: 2 },
                    { id: 15, question: "Which protocol resolves hostnames to IP addresses?", options: ["DNS", "DHCP", "HTTP", "IMAP"], correct: 1 },
                    { id: 16, question: "Which protocol works with a request-response mechanism for web pages?", options: ["FTP", "HTTP", "SMTP", "DNS"], correct: 2 },
                    { id: 17, question: "Which protocol is commonly used for streaming video and audio?", options: ["TCP", "UDP", "SMTP", "FTP"], correct: 2 },
                    { id: 18, question: "Which protocol ensures error detection and correction?", options: ["UDP", "TCP", "HTTP", "DNS"], correct: 2 },
                    { id: 19, question: "Which protocol uses port 25?", options: ["SMTP", "POP3", "IMAP", "DNS"], correct: 1 },
                    { id: 20, question: "Which protocol uses port 110?", options: ["SMTP", "IMAP", "POP3", "FTP"], correct: 3 },

                    { id: 21, question: "Which protocol uses port 143?", options: ["IMAP", "SMTP", "POP3", "DNS"], correct: 1 },
                    { id: 22, question: "Which protocol uses port 21?", options: ["FTP", "DNS", "HTTP", "IMAP"], correct: 1 },
                    { id: 23, question: "Which protocol uses port 53?", options: ["DHCP", "FTP", "DNS", "SMTP"], correct: 3 },
                    { id: 24, question: "Which protocol uses port 67/68?", options: ["FTP", "SMTP", "DHCP", "HTTP"], correct: 3 },
                    { id: 25, question: "Which protocol is used when typing a website name into a browser?", options: ["DNS", "SMTP", "DHCP", "POP3"], correct: 1 },
                    { id: 26, question: "Which protocol is required for IP address lease?", options: ["TCP", "DHCP", "DNS", "FTP"], correct: 2 },
                    { id: 27, question: "Which protocol uses 3-way handshake?", options: ["UDP", "TCP", "SMTP", "FTP"], correct: 2 },
                    { id: 28, question: "Which protocol does not guarantee packet delivery?", options: ["TCP", "UDP", "IP", "DHCP"], correct: 2 },
                    { id: 29, question: "Which protocol is often used with VoIP?", options: ["TCP", "UDP", "FTP", "SMTP"], correct: 2 },
                    { id: 30, question: "Which protocol secures email transfer with encryption?", options: ["HTTPS", "SMTPS", "DNSSEC", "FTPS"], correct: 2 },

                    { id: 31, question: "Which protocol is the backbone of the Internet?", options: ["HTTP", "IP", "FTP", "SMTP"], correct: 2 },
                    { id: 32, question: "Which protocol ensures message delivery order?", options: ["UDP", "TCP", "IP", "FTP"], correct: 2 },
                    { id: 33, question: "Which protocol allows anonymous login?", options: ["HTTP", "SMTP", "FTP", "DHCP"], correct: 3 },
                    { id: 34, question: "Which protocol provides both static and dynamic addressing?", options: ["DNS", "DHCP", "FTP", "TCP"], correct: 2 },
                    { id: 35, question: "Which protocol is used for secure file transfer?", options: ["FTP", "SFTP", "SMTP", "POP"], correct: 2 },
                    { id: 36, question: "Which protocol is required for browsing websites?", options: ["FTP", "HTTP", "DHCP", "DNS"], correct: 2 },
                    { id: 37, question: "Which protocol is responsible for fragmentation of packets?", options: ["TCP", "IP", "DNS", "SMTP"], correct: 2 },
                    { id: 38, question: "Which protocol is stateless?", options: ["HTTP", "TCP", "SMTP", "IMAP"], correct: 1 },
                    { id: 39, question: "Which protocol maintains session state?", options: ["HTTP", "HTTPS", "TCP", "UDP"], correct: 3 },
                    { id: 40, question: "Which protocol is faster but unreliable?", options: ["TCP", "UDP", "HTTP", "SMTP"], correct: 2 },

                    { id: 41, question: "Which protocol is used to configure devices automatically?", options: ["FTP", "DHCP", "DNS", "SMTP"], correct: 2 },
                    { id: 42, question: "Which protocol is used for domain name resolution?", options: ["DNS", "SMTP", "IMAP", "FTP"], correct: 1 },
                    { id: 43, question: "Which protocol operates at the transport layer?", options: ["TCP/UDP", "IP", "DNS", "HTTP"], correct: 1 },
                    { id: 44, question: "Which protocol works at the application layer for email sending?", options: ["POP", "SMTP", "IMAP", "FTP"], correct: 2 },
                    { id: 45, question: "Which protocol allows remote login to retrieve files?", options: ["HTTP", "FTP", "SMTP", "DNS"], correct: 2 },
                    { id: 46, question: "Which protocol supports IPv4 addressing?", options: ["DNS", "IP", "TCP", "SMTP"], correct: 2 },
                    { id: 47, question: "Which protocol supports IPv6?", options: ["IP", "FTP", "DNS", "HTTP"], correct: 1 },
                    { id: 48, question: "Which protocol supports digital certificates?", options: ["HTTP", "HTTPS", "SMTP", "IMAP"], correct: 2 },
                    { id: 49, question: "Which protocol can prevent DNS spoofing?", options: ["DNSSEC", "DHCP", "FTP", "IMAP"], correct: 1 },
                    { id: 50, question: "Which protocol provides host-to-host delivery?", options: ["TCP", "IP", "DNS", "DHCP"], correct: 1 },

                    { id: 51, question: "Which protocol breaks data into packets?", options: ["IP", "DNS", "FTP", "SMTP"], correct: 1 },
                    { id: 52, question: "Which protocol checks error in data packets?", options: ["TCP", "UDP", "IP", "DHCP"], correct: 1 },
                    { id: 53, question: "Which protocol works without a connection setup?", options: ["TCP", "UDP", "SMTP", "FTP"], correct: 2 },
                    { id: 54, question: "Which protocol is suitable for DNS queries?", options: ["TCP", "UDP", "HTTP", "SMTP"], correct: 2 },
                    { id: 55, question: "Which protocol uses SSL/TLS for security?", options: ["HTTP", "HTTPS", "FTP", "DNS"], correct: 2 },
                    { id: 56, question: "Which protocol is used for secure email retrieval?", options: ["IMAPS/POP3S", "DNSSEC", "FTPS", "SMTPS"], correct: 1 },
                    { id: 57, question: "Which protocol is used for bulk file transfer?", options: ["FTP", "SMTP", "DHCP", "IMAP"], correct: 1 },
                    { id: 58, question: "Which protocol enables VoIP communication?", options: ["TCP", "UDP", "FTP", "SMTP"], correct: 2 },
                    { id: 59, question: "Which protocol allows multiple users to access email?", options: ["POP3", "IMAP", "SMTP", "DNS"], correct: 2 },
                    { id: 60, question: "Which protocol works on client-server architecture?", options: ["DNS", "SMTP", "HTTP", "All of these"], correct: 4 },

                    { id: 61, question: "Which protocol handles retransmission of lost packets?", options: ["TCP", "UDP", "IP", "DNS"], correct: 1 },
                    { id: 62, question: "Which protocol is best for real-time gaming?", options: ["TCP", "UDP", "HTTP", "SMTP"], correct: 2 },
                    { id: 63, question: "Which protocol is best for web browsing?", options: ["UDP", "TCP", "IP", "DNS"], correct: 2 },
                    { id: 64, question: "Which protocol secures DNS queries?", options: ["DNSSEC", "HTTPS", "FTPS", "DHCP"], correct: 1 },
                    { id: 65, question: "Which protocol allows transferring website files?", options: ["FTP", "SMTP", "DNS", "POP3"], correct: 1 },
                    { id: 66, question: "Which protocol uses User Datagram?", options: ["TCP", "UDP", "IP", "HTTP"], correct: 2 },
                    { id: 67, question: "Which protocol uses Segment?", options: ["UDP", "TCP", "IP", "DNS"], correct: 2 },
                    { id: 68, question: "Which protocol is faster for streaming?", options: ["TCP", "UDP", "FTP", "DNS"], correct: 2 },
                    { id: 69, question: "Which protocol ensures session establishment?", options: ["UDP", "TCP", "DHCP", "SMTP"], correct: 2 },
                    { id: 70, question: "Which protocol is used for assigning gateway addresses?", options: ["DNS", "DHCP", "FTP", "SMTP"], correct: 2 },

                    { id: 71, question: "Which protocol uses hierarchical naming?", options: ["DNS", "DHCP", "SMTP", "FTP"], correct: 1 },
                    { id: 72, question: "Which protocol is essential for IP communication?", options: ["DNS", "IP", "DHCP", "HTTP"], correct: 2 },
                    { id: 73, question: "Which protocol helps in browsing with HTTPS certificates?", options: ["DNS", "SSL/TLS", "DHCP", "IMAP"], correct: 2 },
                    { id: 74, question: "Which protocol is used for secure login while file transfer?", options: ["FTP", "SFTP", "SMTP", "DNS"], correct: 2 },
                    { id: 75, question: "Which protocol is faster but lacks error correction?", options: ["TCP", "UDP", "IP", "SMTP"], correct: 2 },
                    { id: 76, question: "Which protocol helps ISPs assign IP addresses?", options: ["DNS", "DHCP", "SMTP", "IMAP"], correct: 2 },
                    { id: 77, question: "Which protocol allows remote access to email?", options: ["IMAP", "POP3", "SMTP", "FTP"], correct: 1 },
                    { id: 78, question: "Which protocol manages IP to MAC mapping?", options: ["ARP", "DHCP", "DNS", "FTP"], correct: 1 },
                    { id: 79, question: "Which protocol is lightweight for communication?", options: ["TCP", "UDP", "IP", "SMTP"], correct: 2 },
                    { id: 80, question: "Which protocol supports encryption for website security?", options: ["HTTP", "HTTPS", "FTP", "DNS"], correct: 2 }
                ],
            },
            "IP addressing basics, URL/domain concepts, client–server": {
                color: "#0EA5E9",
                questions: [
                    { id: 1, question: "What does IP stand for in networking?", options: ["Internet Program", "Internal Protocol", "Internet Protocol", "Interface Program"], correct: 3 },
                    { id: 2, question: "How many bits are there in an IPv4 address?", options: ["32 bits", "64 bits", "128 bits", "16 bits"], correct: 1 },
                    { id: 3, question: "How many bits are there in an IPv6 address?", options: ["32 bits", "64 bits", "128 bits", "256 bits"], correct: 3 },
                    { id: 4, question: "Which of the following is a private IP address?", options: ["192.168.1.1", "8.8.8.8", "172.217.5.14", "1.1.1.1"], correct: 1 },
                    { id: 5, question: "Which class of IP addresses is used for multicast?", options: ["Class A", "Class B", "Class C", "Class D"], correct: 4 },
                    { id: 6, question: "What is the default subnet mask for a Class C IP?", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], correct: 3 },
                    { id: 7, question: "What is the range of Class A IP addresses?", options: ["1.0.0.0 – 126.0.0.0", "128.0.0.0 – 191.255.0.0", "192.0.0.0 – 223.255.255.0", "224.0.0.0 – 239.255.255.255"], correct: 1 },
                    { id: 8, question: "Which protocol translates domain names into IP addresses?", options: ["HTTP", "DNS", "SMTP", "FTP"], correct: 2 },
                    { id: 9, question: "Which part of the URL identifies the server?", options: ["Protocol", "Domain name", "Path", "Query string"], correct: 2 },
                    { id: 10, question: "In client–server architecture, who initiates the communication?", options: ["Server", "Client", "Both", "None"], correct: 2 },
                    { id: 11, question: "What is the maximum number of unique IPv4 addresses?", options: ["2^16", "2^32", "2^64", "2^128"], correct: 2 },
                    { id: 12, question: "Which of these is an example of a top-level domain (TLD)?", options: [".com", "example.com", "www.example.com", "http://example.com"], correct: 1 },
                    { id: 13, question: "What is the loopback IP address in IPv4?", options: ["127.0.0.1", "192.168.0.1", "10.0.0.1", "0.0.0.0"], correct: 1 },
                    { id: 14, question: "Which of the following IP addresses is reserved for APIPA (Automatic Private IP Addressing)?", options: ["169.254.x.x", "10.x.x.x", "172.16.x.x", "192.168.x.x"], correct: 1 },
                    { id: 15, question: "What does URL stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "Uniform Retrieval Location", "Universal Retrieval Locator"], correct: 2 },
                    { id: 16, question: "Which protocol is commonly used in client–server email communication?", options: ["SMTP", "IMAP", "POP3", "All of these"], correct: 4 },
                    { id: 17, question: "Which type of IP address is manually configured?", options: ["Dynamic IP", "Static IP", "Private IP", "Reserved IP"], correct: 2 },
                    { id: 18, question: "In client-server, which one provides resources?", options: ["Client", "Server", "Both", "Router"], correct: 2 },
                    { id: 19, question: "What is the default port of HTTP?", options: ["21", "25", "80", "443"], correct: 3 },
                    { id: 20, question: "What is the default port of HTTPS?", options: ["110", "143", "443", "8080"], correct: 3 },

                    { id: 21, question: "Which IP class provides the largest number of host addresses?", options: ["Class A", "Class B", "Class C", "Class D"], correct: 1 },
                    { id: 22, question: "Which of the following is NOT a valid IP address?", options: ["192.168.0.1", "256.1.1.1", "10.0.0.5", "8.8.8.8"], correct: 2 },
                    { id: 23, question: "What does the hostname 'localhost' refer to?", options: ["Your own computer", "Remote computer", "DNS server", "Web server"], correct: 1 },
                    { id: 24, question: "Which protocol is used to assign IP addresses automatically?", options: ["DNS", "DHCP", "NAT", "FTP"], correct: 2 },
                    { id: 25, question: "Which layer of TCP/IP model deals with IP addressing?", options: ["Application", "Transport", "Internet", "Network Access"], correct: 3 },
                    { id: 26, question: "What is the function of NAT (Network Address Translation)?", options: ["Translate domain names", "Translate private IP to public IP", "Encrypt messages", "Assign MAC addresses"], correct: 2 },
                    { id: 27, question: "Which of the following identifies a specific computer on the internet?", options: ["Domain name", "IP address", "MAC address", "All of these"], correct: 2 },
                    { id: 28, question: "What does FQDN stand for?", options: ["Fully Qualified Domain Name", "Fast Query Domain Name", "Fixed Qualified Domain Number", "Free Query Domain Node"], correct: 1 },
                    { id: 29, question: "Which organization manages domain names globally?", options: ["IEEE", "IETF", "ICANN", "W3C"], correct: 3 },
                    { id: 30, question: "What is the default subnet mask for Class B?", options: ["255.255.0.0", "255.0.0.0", "255.255.255.0", "255.255.255.255"], correct: 1 },

                    { id: 31, question: "Which of the following is NOT part of a URL?", options: ["Protocol", "Domain", "Subnet mask", "Path"], correct: 3 },
                    { id: 32, question: "Which protocol is primarily used for resolving hostnames to IP?", options: ["SMTP", "FTP", "DNS", "HTTP"], correct: 3 },
                    { id: 33, question: "What is the main purpose of IP addressing?", options: ["Identify devices", "Encrypt data", "Provide routing", "Connect to DNS"], correct: 1 },
                    { id: 34, question: "Which of these is an IPv6 address format?", options: ["192.168.1.1", "10.0.0.1", "2001:0db8::1", "127.0.0.1"], correct: 3 },
                    { id: 35, question: "How many octets are in an IPv4 address?", options: ["2", "4", "6", "8"], correct: 2 },
                    { id: 36, question: "What does the client do in client-server architecture?", options: ["Provide resources", "Request services", "Manage DNS", "Assign IP addresses"], correct: 2 },
                    { id: 37, question: "Which of these is an example of a client?", options: ["Web browser", "Web server", "Mail server", "DNS server"], correct: 1 },
                    { id: 38, question: "Which of the following is an example of a server?", options: ["Google Chrome", "Apache", "Firefox", "Outlook"], correct: 2 },
                    { id: 39, question: "Which IP version uses hexadecimal representation?", options: ["IPv4", "IPv6", "Both", "None"], correct: 2 },
                    { id: 40, question: "Which of these is the correct format of IPv4?", options: ["Decimal dotted", "Hexadecimal dotted", "Binary dotted", "Octal dotted"], correct: 1 },

                    { id: 41, question: "Which IP class is reserved for experimental purposes?", options: ["Class A", "Class B", "Class C", "Class E"], correct: 4 },
                    { id: 42, question: "What is the default port of DNS?", options: ["21", "25", "53", "80"], correct: 3 },
                    { id: 43, question: "Which of the following IPs is a broadcast address for 192.168.1.0/24?", options: ["192.168.1.0", "192.168.1.1", "192.168.1.255", "192.168.1.254"], correct: 3 },
                    { id: 44, question: "Which one is NOT a valid top-level domain?", options: [".org", ".net", ".abc", ".edu"], correct: 3 },
                    { id: 45, question: "Which protocol is used for mapping IP to MAC?", options: ["DNS", "ARP", "DHCP", "NAT"], correct: 2 },
                    { id: 46, question: "Which IP class supports 16 million hosts?", options: ["Class A", "Class B", "Class C", "Class D"], correct: 1 },
                    { id: 47, question: "What is the maximum length of a domain name?", options: ["128 characters", "256 characters", "63 characters", "255 characters"], correct: 4 },
                    { id: 48, question: "What is the maximum number of characters in each domain label?", options: ["32", "63", "128", "255"], correct: 2 },
                    { id: 49, question: "Which record in DNS maps a domain to an IP?", options: ["MX record", "A record", "CNAME record", "NS record"], correct: 2 },
                    { id: 50, question: "Which record type in DNS is used for mail servers?", options: ["MX record", "A record", "CNAME record", "PTR record"], correct: 1 },

                    { id: 51, question: "Which of these is an example of a domain?", options: ["192.168.1.1", "example.com", "ftp://example.com", "http://localhost"], correct: 2 },
                    { id: 52, question: "Which device usually provides DHCP service?", options: ["Switch", "Router", "Firewall", "Hub"], correct: 2 },
                    { id: 53, question: "What is the binary equivalent of IP 192.168.1.1 (first octet only)?", options: ["11000000", "10101000", "00000001", "11111111"], correct: 1 },
                    { id: 54, question: "What is the default port of DHCP?", options: ["67/68", "25", "53", "110"], correct: 1 },
                    { id: 55, question: "Which protocol is used in client-server for web communication?", options: ["HTTP", "SMTP", "FTP", "POP3"], correct: 1 },
                    { id: 56, question: "Which protocol helps translate URLs into IP addresses?", options: ["DHCP", "DNS", "NAT", "IMAP"], correct: 2 },
                    { id: 57, question: "What is the full form of DNS?", options: ["Domain Name System", "Data Network Service", "Distributed Name Service", "Domain Numbering System"], correct: 1 },
                    { id: 58, question: "Which address uniquely identifies a network interface?", options: ["Domain name", "IP address", "MAC address", "Subnet"], correct: 3 },
                    { id: 59, question: "Which service ensures a client gets the same IP every time?", options: ["Dynamic IP", "Static IP", "Reserved DHCP", "Random IP"], correct: 3 },
                    { id: 60, question: "Which client-server model example is correct?", options: ["Web browser - Web server", "Switch - Router", "IP - DNS", "Firewall - Hub"], correct: 1 },

                    { id: 61, question: "Which address is used by a device to communicate within its own network?", options: ["Private IP", "Public IP", "Broadcast IP", "Gateway IP"], correct: 1 },
                    { id: 62, question: "What is the purpose of subnetting?", options: ["Increase speed", "Divide a network into smaller parts", "Encrypt data", "Translate IP addresses"], correct: 2 },
                    { id: 63, question: "What is the default gateway used for?", options: ["Local communication", "External communication", "DNS resolution", "Subnetting"], correct: 2 },
                    { id: 64, question: "Which of the following is NOT an application of client-server?", options: ["Email", "Web browsing", "File sharing", "Broadcast TV"], correct: 4 },
                    { id: 65, question: "Which IP address range is reserved for loopback testing?", options: ["0.0.0.0/8", "127.0.0.0/8", "169.254.0.0/16", "192.168.0.0/16"], correct: 2 },
                    { id: 66, question: "What does DHCP stand for?", options: ["Dynamic Host Configuration Protocol", "Data Host Control Protocol", "Domain Host Configuration Process", "Distributed Host Control Protocol"], correct: 1 },
                    { id: 67, question: "Which device translates private IP to public IP?", options: ["Switch", "Router", "Hub", "Firewall"], correct: 2 },
                    { id: 68, question: "Which URL component specifies the communication protocol?", options: ["http://", "www", "domain.com", "/path"], correct: 1 },
                    { id: 69, question: "Which is the reserved IPv6 loopback address?", options: ["::1", "::0", "ffff::", "2001::"], correct: 1 },
                    { id: 70, question: "Which command is used to check IP address in Windows?", options: ["ipconfig", "ifconfig", "ping", "netstat"], correct: 1 },

                    { id: 71, question: "Which command is used to test connectivity between client and server?", options: ["ping", "ipconfig", "tracert", "nslookup"], correct: 1 },
                    { id: 72, question: "Which client-server model does Email use?", options: ["SMTP - Client", "SMTP - Server", "POP3/IMAP - Client & SMTP - Server", "HTTP only"], correct: 3 },
                    { id: 73, question: "Which of these is NOT a private IP range?", options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "11.0.0.0/8"], correct: 4 },
                    { id: 74, question: "Which device usually stores DNS records?", options: ["Router", "Switch", "DNS server", "Firewall"], correct: 3 },
                    { id: 75, question: "Which IP address format is human-readable?", options: ["Binary", "Hexadecimal", "Dotted decimal", "Octal"], correct: 3 },
                    { id: 76, question: "What is the purpose of a domain registrar?", options: ["Assign IPs", "Manage DNS", "Register domain names", "Provide emails"], correct: 3 },
                    { id: 77, question: "Which component of URL specifies the location of a resource?", options: ["Protocol", "Domain", "Path", "Port"], correct: 3 },
                    { id: 78, question: "Which IP address range is public?", options: ["192.168.x.x", "10.x.x.x", "172.16.x.x – 172.31.x.x", "8.8.8.8"], correct: 4 },
                    { id: 79, question: "Which is the correct mapping in client-server?", options: ["Client provides, server requests", "Server requests, client provides", "Client requests, server provides", "Both request simultaneously"], correct: 3 },
                    { id: 80, question: "Which of these is a valid IPv6 address?", options: ["2001:db8::1", "192.168.300.1", "172.16.256.1", "123.456.78.9"], correct: 1 }
                ],
            },
            "Network devices: hub, switch, router, modem, access point": {
                color: "#D946EF",
                questions: [
                    { id: 1, question: "Which network device operates at the physical layer of OSI model?", options: ["Router", "Switch", "Hub", "Access Point"], correct: 3 },
                    { id: 2, question: "Which device is known as a multiport repeater?", options: ["Hub", "Switch", "Router", "Modem"], correct: 1 },
                    { id: 3, question: "Which device uses MAC addresses to forward data?", options: ["Router", "Switch", "Hub", "Modem"], correct: 2 },
                    { id: 4, question: "Which device connects two different networks?", options: ["Switch", "Hub", "Router", "Access Point"], correct: 3 },
                    { id: 5, question: "Which device converts digital signals into analog and vice versa?", options: ["Switch", "Hub", "Router", "Modem"], correct: 4 },
                    { id: 6, question: "Which device provides wireless connectivity in a network?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 7, question: "Which device broadcasts data to all connected devices?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 8, question: "Which device reduces network collisions by creating separate collision domains?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 9, question: "Which device assigns IP addresses dynamically?", options: ["Modem", "Router", "Hub", "Switch"], correct: 2 },
                    { id: 10, question: "Which device is used to connect a LAN to the internet?", options: ["Switch", "Hub", "Router", "Modem"], correct: 4 },
                    { id: 11, question: "Which device works on data link layer and network layer?", options: ["Router", "Hub", "Switch", "Access Point"], correct: 1 },
                    { id: 12, question: "Which device creates multiple broadcast domains?", options: ["Hub", "Router", "Switch", "Access Point"], correct: 2 },
                    { id: 13, question: "Which device uses IP addresses for packet forwarding?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 14, question: "Which device is commonly used in star topology?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 15, question: "Which device only works at Layer 1 of OSI model?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 3 },
                    { id: 16, question: "Which device connects wireless clients to a wired network?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 4 },
                    { id: 17, question: "Which device is considered more intelligent, hub or switch?", options: ["Hub", "Switch", "Router", "Modem"], correct: 2 },
                    { id: 18, question: "Which device is used for packet filtering and forwarding?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 19, question: "Which device helps reduce network congestion compared to hubs?", options: ["Router", "Switch", "Access Point", "Modem"], correct: 2 },
                    { id: 20, question: "Which device works on Layer 2 and sometimes Layer 3 of OSI?", options: ["Hub", "Switch", "Router", "Modem"], correct: 2 },
                    { id: 21, question: "Which device allows multiple users to share an internet connection?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 22, question: "Which device strengthens weak signals in a network?", options: ["Switch", "Router", "Hub", "Repeater"], correct: 4 },
                    { id: 23, question: "Which device can act as a DHCP server?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 24, question: "Which device is used in wireless LANs?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 25, question: "Which device provides routing between two different networks?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 2 },
                    { id: 26, question: "Which device is prone to collisions due to broadcasting?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 27, question: "Which device is used for packet switching?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 28, question: "Which device can connect a LAN to a WAN?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 2 },
                    { id: 29, question: "Which device assigns private IP addresses in a home network?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 30, question: "Which device is used for wireless hotspot creation?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 4 },
                    { id: 31, question: "Which device works with CSMA/CD protocol?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 32, question: "Which device reduces unnecessary traffic by forwarding only to intended devices?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 33, question: "Which device contains a default gateway configuration?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 34, question: "Which device is considered the brain of a home network?", options: ["Switch", "Hub", "Router", "Modem"], correct: 3 },
                    { id: 35, question: "Which device can perform both wired and wireless functions?", options: ["Router", "Switch", "Hub", "Access Point"], correct: 1 },
                    { id: 36, question: "Which device splits an internet connection among multiple users?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 37, question: "Which device creates a collision domain for each port?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 38, question: "Which device can perform NAT (Network Address Translation)?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 39, question: "Which device is used to connect wireless printers to a LAN?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 40, question: "Which device uses store-and-forward technique?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 41, question: "Which device helps prevent data collisions by using buffers?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 42, question: "Which device is faster in data transfer, hub or switch?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 43, question: "Which device decides the best path for data packets?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 44, question: "Which device can isolate broadcast domains?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 45, question: "Which device provides both wired and wireless connections?", options: ["Router", "Switch", "Hub", "Access Point"], correct: 1 },
                    { id: 46, question: "Which device uses ARP (Address Resolution Protocol)?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 47, question: "Which device connects to the ISP for internet service?", options: ["Hub", "Switch", "Router", "Modem"], correct: 4 },
                    { id: 48, question: "Which device is also called a concentrator?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 49, question: "Which device reduces collisions using full-duplex mode?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 50, question: "Which device provides wireless authentication?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 51, question: "Which device maintains a MAC address table?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 52, question: "Which device can also act as a firewall?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 53, question: "Which device transmits signals without filtering?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 54, question: "Which device forwards packets based on IP address?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 55, question: "Which device often combines modem and router functions?", options: ["Hub", "Switch", "Router", "Gateway"], correct: 3 },
                    { id: 56, question: "Which device increases the number of available Ethernet ports?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 57, question: "Which device supports VLANs?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 58, question: "Which device handles both wired and wireless clients?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 59, question: "Which device has the least intelligence?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 60, question: "Which device manages IP addressing in home networks?", options: ["Switch", "Router", "Hub", "Access Point"], correct: 2 },
                    { id: 61, question: "Which device extends wireless network coverage?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 62, question: "Which device enables device-to-device communication in wireless LAN?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 63, question: "Which device creates a single collision domain for all ports?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 64, question: "Which device is necessary for broadband internet?", options: ["Hub", "Switch", "Router", "Modem"], correct: 4 },
                    { id: 65, question: "Which device connects LAN segments?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 66, question: "Which device separates traffic using MAC filtering?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 67, question: "Which device is also known as a wireless bridge?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 68, question: "Which device increases bandwidth by dividing traffic intelligently?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 69, question: "Which device supports packet inspection?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 70, question: "Which device is often integrated with firewall features?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 71, question: "Which device prevents collisions by using a buffer per port?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 72, question: "Which device is essential for Wi-Fi networks?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 73, question: "Which device checks destination MAC address before forwarding?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                    { id: 74, question: "Which device establishes connection with ISP line?", options: ["Hub", "Switch", "Router", "Modem"], correct: 4 },
                    { id: 75, question: "Which device uses NAT for internet sharing?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 76, question: "Which device operates at Layer 3 of OSI?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 77, question: "Which device prevents broadcast storms?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 3 },
                    { id: 78, question: "Which device has only Layer 1 functionality?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 1 },
                    { id: 79, question: "Which device can provide wireless guest networks?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 4 },
                    { id: 80, question: "Which device improves performance using microsegmentation?", options: ["Hub", "Switch", "Router", "Access Point"], correct: 2 },
                ],
            },
            "Internet services: web, email, cloud storage; browsers, search basics": {
                color: "#F43F5E",
                questions: [

                    { id: 1, question: "Which protocol is primarily used for sending emails?", options: ["HTTP", "SMTP", "FTP", "IMAP"], correct: 2 },
                    { id: 2, question: "Which protocol is used to retrieve emails from a server?", options: ["SMTP", "POP3", "DNS", "ICMP"], correct: 2 },
                    { id: 3, question: "Which of the following is NOT an email protocol?", options: ["IMAP", "POP3", "SMTP", "TCP"], correct: 4 },
                    { id: 4, question: "Which service allows you to store files online and access them anywhere?", options: ["Cloud storage", "Email", "FTP", "DNS"], correct: 1 },
                    { id: 5, question: "Google Drive, Dropbox, and OneDrive are examples of:", options: ["Browsers", "Cloud storage services", "Web servers", "Search engines"], correct: 2 },
                    { id: 6, question: "Which of the following is an example of a web browser?", options: ["Google Chrome", "Google Drive", "Yahoo Mail", "Dropbox"], correct: 1 },
                    { id: 7, question: "Which of the following is a search engine?", options: ["Gmail", "Google", "Yahoo Mail", "Outlook"], correct: 2 },
                    { id: 8, question: "The service used to view web pages on the internet is called:", options: ["Browser", "Cloud storage", "Email client", "FTP"], correct: 1 },
                    { id: 9, question: "What does IMAP stand for?", options: ["Internet Mail Access Protocol", "Internal Mail Application Protocol", "Internet Messaging Access Process", "Input Mail Access Program"], correct: 1 },
                    { id: 10, question: "Which browser was developed by Microsoft?", options: ["Firefox", "Chrome", "Edge", "Safari"], correct: 3 },
                    { id: 11, question: "Which is NOT a cloud storage service?", options: ["Dropbox", "OneDrive", "Google Drive", "Gmail"], correct: 4 },
                    { id: 12, question: "Which protocol does a web browser use to request a web page?", options: ["FTP", "SMTP", "HTTP/HTTPS", "IMAP"], correct: 3 },
                    { id: 13, question: "Yahoo Mail is an example of:", options: ["Cloud storage", "Email service", "Search engine", "Browser"], correct: 2 },
                    { id: 14, question: "Which company developed the Safari browser?", options: ["Google", "Microsoft", "Apple", "Mozilla"], correct: 3 },
                    { id: 15, question: "Which of the following is a popular open-source browser?", options: ["Firefox", "Chrome", "Edge", "Safari"], correct: 1 },
                    { id: 16, question: "Which protocol is used for secure communication over the web?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 2 },
                    { id: 17, question: "Which search engine is owned by Microsoft?", options: ["Google", "Bing", "Yahoo", "DuckDuckGo"], correct: 2 },
                    { id: 18, question: "What is the purpose of a search engine?", options: ["Store files", "Send emails", "Find information on the internet", "Browse offline"], correct: 3 },
                    { id: 19, question: "Which cloud storage service is integrated with Microsoft Office?", options: ["Dropbox", "iCloud", "OneDrive", "Google Drive"], correct: 3 },
                    { id: 20, question: "Which is NOT a search engine?", options: ["Bing", "Google", "Outlook", "DuckDuckGo"], correct: 3 },
                    { id: 21, question: "Which email service is provided by Google?", options: ["Yahoo Mail", "Gmail", "Hotmail", "ProtonMail"], correct: 2 },
                    { id: 22, question: "The extension '.com' in a website indicates:", options: ["Government", "Commercial", "Organization", "Network"], correct: 2 },
                    { id: 23, question: "Which browser is developed by Mozilla Foundation?", options: ["Chrome", "Firefox", "Edge", "Safari"], correct: 2 },
                    { id: 24, question: "Which of the following is a desktop email client?", options: ["Outlook", "Gmail", "Yahoo Mail", "Google Drive"], correct: 1 },
                    { id: 25, question: "Which is the largest search engine worldwide?", options: ["Yahoo", "Google", "Bing", "DuckDuckGo"], correct: 2 },
                    { id: 26, question: "Which protocol is used for transferring files?", options: ["SMTP", "FTP", "IMAP", "POP3"], correct: 2 },
                    { id: 27, question: "Which browser feature helps in saving frequently visited websites?", options: ["Tabs", "Bookmarks", "History", "Cache"], correct: 2 },
                    { id: 28, question: "Which company owns YouTube?", options: ["Microsoft", "Apple", "Google", "Yahoo"], correct: 3 },
                    { id: 29, question: "What is the main purpose of cloud storage?", options: ["Store and access files remotely", "Send emails", "Browse the internet", "Stream videos"], correct: 1 },
                    { id: 30, question: "Which is NOT an email provider?", options: ["Gmail", "Outlook", "Dropbox", "Yahoo Mail"], correct: 3 },
                    { id: 31, question: "Which search engine focuses on user privacy?", options: ["Google", "Bing", "DuckDuckGo", "Yahoo"], correct: 3 },
                    { id: 32, question: "What is the role of cache in a browser?", options: ["Speed up page loading", "Store emails", "Send data", "Provide security"], correct: 1 },
                    { id: 33, question: "Which of the following is an email protocol for retrieving messages?", options: ["SMTP", "POP3", "DNS", "ARP"], correct: 2 },
                    { id: 34, question: "Which cloud service is offered by Apple?", options: ["Google Drive", "iCloud", "Dropbox", "OneDrive"], correct: 2 },
                    { id: 35, question: "Which of these is NOT a web browser?", options: ["Opera", "Edge", "Chrome", "Bing"], correct: 4 },
                    { id: 36, question: "Which search engine is known for open-source indexing?", options: ["Google", "Bing", "DuckDuckGo", "Yahoo"], correct: 3 },
                    { id: 37, question: "Which email protocol allows access from multiple devices?", options: ["POP3", "IMAP", "SMTP", "FTP"], correct: 2 },
                    { id: 38, question: "What is the role of a web browser?", options: ["Send emails", "View web pages", "Store files", "Run servers"], correct: 2 },
                    { id: 39, question: "Which is NOT an example of an internet service?", options: ["Email", "Cloud storage", "Web browsing", "CPU scheduling"], correct: 4 },
                    { id: 40, question: "Which browser uses the WebKit engine?", options: ["Edge", "Chrome", "Safari", "Firefox"], correct: 3 },
                    { id: 41, question: "Which search engine was one of the earliest on the web?", options: ["Lycos", "Bing", "Google", "DuckDuckGo"], correct: 1 },
                    { id: 42, question: "Which company developed Gmail?", options: ["Apple", "Microsoft", "Google", "Yahoo"], correct: 3 },
                    { id: 43, question: "Which browser introduced the Incognito/Private browsing mode?", options: ["Safari", "Chrome", "Firefox", "Edge"], correct: 2 },
                    { id: 44, question: "Which of the following is an example of a cloud-based email service?", options: ["MS Outlook", "Yahoo Mail", "Gmail", "All of these"], correct: 4 },
                    { id: 45, question: "Which is the default search engine of Chrome?", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"], correct: 3 },
                    { id: 46, question: "What is the role of an email client?", options: ["Send and receive emails", "Store files", "Browse internet", "Search engines"], correct: 1 },
                    { id: 47, question: "Which browser is pre-installed on Apple devices?", options: ["Safari", "Edge", "Chrome", "Firefox"], correct: 1 },
                    { id: 48, question: "Which of the following stores browsing history?", options: ["Search engine", "Cloud storage", "Browser", "Server"], correct: 3 },
                    { id: 49, question: "Which cloud storage service is most used worldwide?", options: ["OneDrive", "Google Drive", "Dropbox", "iCloud"], correct: 2 },
                    { id: 50, question: "Which service allows text, audio, and video communication online?", options: ["Email", "Chat", "FTP", "DNS"], correct: 2 },
                    { id: 51, question: "Which search engine is owned by Yahoo?", options: ["AltaVista", "Bing", "DuckDuckGo", "Yahoo Search"], correct: 4 },
                    { id: 52, question: "Which feature of browsers allows multiple websites to be open at once?", options: ["Tabs", "Bookmarks", "Cache", "History"], correct: 1 },
                    { id: 53, question: "Which of the following is NOT an internet browser?", options: ["Opera", "Safari", "Netscape", "WhatsApp"], correct: 4 },
                    { id: 54, question: "Which protocol is used for sending email messages?", options: ["POP3", "SMTP", "IMAP", "HTTP"], correct: 2 },
                    { id: 55, question: "Which company owns the Edge browser?", options: ["Apple", "Mozilla", "Microsoft", "Google"], correct: 3 },
                    { id: 56, question: "What is the main function of search engines?", options: ["Store emails", "Retrieve web information", "Browse offline", "Transfer files"], correct: 2 },
                    { id: 57, question: "Which is NOT a cloud service provider?", options: ["Google Drive", "Dropbox", "YouTube", "OneDrive"], correct: 3 },
                    { id: 58, question: "Which is an example of an email domain?", options: ["@gmail.com", "http://www.google.com", "ftp://server", "cloudstorage.net"], correct: 1 },
                    { id: 59, question: "Which is an example of an instant messaging service?", options: ["WhatsApp", "Outlook", "Yahoo Mail", "Chrome"], correct: 1 },
                    { id: 60, question: "What is the role of cookies in browsers?", options: ["Save browsing data", "Send emails", "Store files", "Prevent hacking"], correct: 1 },
                    { id: 61, question: "Which search engine is considered open-source?", options: ["Google", "YaCy", "Bing", "Yahoo"], correct: 2 },
                    { id: 62, question: "Which email service was originally called Hotmail?", options: ["Yahoo Mail", "Gmail", "Outlook", "ProtonMail"], correct: 3 },
                    { id: 63, question: "Which browser is available on Linux by default?", options: ["Firefox", "Chrome", "Safari", "Edge"], correct: 1 },
                    { id: 64, question: "Which cloud storage is available for iOS users?", options: ["OneDrive", "Dropbox", "iCloud", "Google Drive"], correct: 3 },
                    { id: 65, question: "Which company developed the Chrome browser?", options: ["Apple", "Mozilla", "Google", "Microsoft"], correct: 3 },
                    { id: 66, question: "Which search engine was founded by Larry Page and Sergey Brin?", options: ["Yahoo", "Bing", "Google", "DuckDuckGo"], correct: 3 },
                    { id: 67, question: "Which protocol encrypts data for secure email transmission?", options: ["SSL/TLS", "FTP", "POP3", "HTTP"], correct: 1 },
                    { id: 68, question: "Which browser extension is used to block ads?", options: ["uBlock", "Drive", "Gmail", "Search"], correct: 1 },
                    { id: 69, question: "Which of the following is NOT a feature of cloud storage?", options: ["Access anywhere", "Automatic backup", "Local-only access", "File sharing"], correct: 3 },
                    { id: 70, question: "Which browser is fastest according to most benchmarks?", options: ["Chrome", "Firefox", "Safari", "Edge"], correct: 1 },
                    { id: 71, question: "Which search engine is most used in China?", options: ["Google", "Bing", "Baidu", "DuckDuckGo"], correct: 3 },
                    { id: 72, question: "Which of the following is an example of a metasearch engine?", options: ["Google", "Dogpile", "Bing", "Yahoo"], correct: 2 },
                    { id: 73, question: "Which protocol allows retrieval of emails while keeping them on the server?", options: ["POP3", "IMAP", "SMTP", "FTP"], correct: 2 },
                    { id: 74, question: "Which browser is focused on privacy and blocks trackers?", options: ["Chrome", "Firefox", "Brave", "Edge"], correct: 3 },
                    { id: 75, question: "Which company owns the Android Play Store?", options: ["Microsoft", "Google", "Apple", "Amazon"], correct: 2 },
                    { id: 76, question: "Which search engine was originally called BackRub?", options: ["Google", "Yahoo", "Bing", "Lycos"], correct: 1 },
                    { id: 77, question: "Which of the following is NOT an email service provider?", options: ["ProtonMail", "Zoho Mail", "Bing", "Yahoo Mail"], correct: 3 },
                    { id: 78, question: "Which is an example of an open-source cloud storage platform?", options: ["Nextcloud", "Dropbox", "OneDrive", "Google Drive"], correct: 1 },
                    { id: 79, question: "Which is the most widely used browser worldwide?", options: ["Firefox", "Chrome", "Safari", "Edge"], correct: 2 },
                    { id: 80, question: "Which feature of cloud storage enables multiple users to edit the same file?", options: ["File syncing", "Version history", "Collaboration", "Backup"], correct: 3 }


                ]
            },
        },
    },
    "Programming Fundamentals & OOP": {
        color: "#10B981",
        subtopics: {
            "Algorithms, flowcharts, pseudocode (intro)": {
                color: "#10B981",
                questions: [
                    { id: 1, question: "What is an algorithm?", options: ["A computer program", "A step-by-step procedure to solve a problem", "A flowchart symbol", "A programming language"], correct: 2 },
                    { id: 2, question: "Which of these is NOT a property of a good algorithm?", options: ["Finiteness", "Ambiguity", "Definiteness", "Input"], correct: 2 },
                    { id: 3, question: "Flowcharts are mainly used for?", options: ["Data storage", "Debugging", "Visualizing logic", "Programming syntax"], correct: 3 },
                    { id: 4, question: "What does a parallelogram symbol represent in a flowchart?", options: ["Decision", "Input/Output", "Process", "Connector"], correct: 2 },
                    { id: 5, question: "Which flowchart symbol is used for decision making?", options: ["Oval", "Rectangle", "Diamond", "Parallelogram"], correct: 3 },
                    { id: 6, question: "Pseudocode is written in?", options: ["Programming language syntax", "Natural language with programming style", "Binary language", "Only English"], correct: 2 },
                    { id: 7, question: "Which of these is NOT true about pseudocode?", options: ["Language-independent", "Easy to understand", "Follows strict syntax rules", "Helps design algorithms"], correct: 3 },
                    { id: 8, question: "An oval shape in a flowchart represents?", options: ["Process", "Start/End", "Input/Output", "Decision"], correct: 2 },
                    { id: 9, question: "What is the first step of algorithm design?", options: ["Coding", "Testing", "Understanding the problem", "Drawing flowchart"], correct: 3 },
                    { id: 10, question: "What is the main purpose of an algorithm?", options: ["To execute programs", "To solve problems systematically", "To test programs", "To compile code"], correct: 2 },

                    { id: 11, question: "Which of these is an example of an algorithm?", options: ["Cooking recipe", "HTML code", "CPU", "Java compiler"], correct: 1 },
                    { id: 12, question: "What does the rectangle symbol represent in flowcharts?", options: ["Decision", "Start/End", "Process", "Input"], correct: 3 },
                    { id: 13, question: "Which symbol connects different parts of a flowchart?", options: ["Connector", "Diamond", "Parallelogram", "Oval"], correct: 1 },
                    { id: 14, question: "Which of these is a characteristic of pseudocode?", options: ["Strict grammar", "Readable by humans", "Language-specific", "Executable directly"], correct: 2 },
                    { id: 15, question: "Why is flowcharting useful?", options: ["It compiles code", "It improves logic visualization", "It generates pseudocode automatically", "It replaces coding"], correct: 2 },

                    { id: 16, question: "Algorithms must terminate after?", options: ["Infinite steps", "Finite steps", "Compilation", "Execution of code"], correct: 2 },
                    { id: 17, question: "In pseudocode, IF-THEN-ELSE is used for?", options: ["Looping", "Decision making", "Input", "Output"], correct: 2 },
                    { id: 18, question: "Which flowchart symbol indicates input/output?", options: ["Rectangle", "Diamond", "Parallelogram", "Oval"], correct: 3 },
                    { id: 19, question: "What does a diamond in a flowchart represent?", options: ["Input/Output", "Decision", "Process", "End"], correct: 2 },
                    { id: 20, question: "Which of these is NOT a use of algorithms?", options: ["Problem solving", "Debugging logic", "Writing hardware", "Optimizing processes"], correct: 3 },

                    { id: 21, question: "What does pseudocode help with?", options: ["Direct execution", "Design before coding", "Hardware design", "Binary conversion"], correct: 2 },
                    { id: 22, question: "Which of these is language-independent?", options: ["Java", "Python", "Pseudocode", "C++"], correct: 3 },
                    { id: 23, question: "What does the term 'flow' in flowchart mean?", options: ["Programming syntax", "Direction of control", "Database link", "Data storage"], correct: 2 },
                    { id: 24, question: "What is the advantage of flowcharts?", options: ["Hard to understand", "Graphical clarity", "Needs programming", "Not widely used"], correct: 2 },
                    { id: 25, question: "Which type of problem is best solved with algorithms?", options: ["Unclear problems", "Well-defined problems", "Random tasks", "Emotional issues"], correct: 2 },

                    { id: 26, question: "What should every algorithm have?", options: ["Infinite loops", "Clear steps", "Flowcharts", "Programs"], correct: 2 },
                    { id: 27, question: "Which of these is an advantage of pseudocode?", options: ["Strict syntax", "Language independent", "Direct execution", "Hard to read"], correct: 2 },
                    { id: 28, question: "A flowchart always starts and ends with?", options: ["Rectangle", "Diamond", "Oval", "Parallelogram"], correct: 3 },
                    { id: 29, question: "Which step comes first before writing pseudocode?", options: ["Testing", "Understanding the problem", "Coding", "Debugging"], correct: 2 },
                    { id: 30, question: "Which type of errors are reduced by algorithms?", options: ["Logical errors", "Syntax errors", "Hardware errors", "Random errors"], correct: 1 },

                    { id: 31, question: "What is meant by 'Definiteness' of an algorithm?", options: ["Steps must be clear", "Steps may be ambiguous", "Steps must be infinite", "Steps can be skipped"], correct: 1 },
                    { id: 32, question: "Which is the main difference between flowcharts and pseudocode?", options: ["Flowcharts are textual, pseudocode is graphical", "Flowcharts are graphical, pseudocode is textual", "Both are graphical", "Both are textual"], correct: 2 },
                    { id: 33, question: "Which of these is NOT a flowchart symbol?", options: ["Diamond", "Oval", "Triangle", "Rectangle"], correct: 3 },
                    { id: 34, question: "In pseudocode, 'WHILE' represents?", options: ["Decision", "Input", "Loop", "Output"], correct: 3 },
                    { id: 35, question: "Flowcharts make debugging?", options: ["Harder", "Easier", "Impossible", "Unclear"], correct: 2 },

                    { id: 36, question: "Algorithm complexity is measured in?", options: ["Time and Space", "Flowchart symbols", "Programming syntax", "Code size"], correct: 1 },
                    { id: 37, question: "What is a connector symbol in a flowchart?", options: ["Circle", "Square", "Diamond", "Parallelogram"], correct: 1 },
                    { id: 38, question: "Why do we use pseudocode before coding?", options: ["To avoid flowcharts", "To plan logic", "To compile faster", "To write syntax"], correct: 2 },
                    { id: 39, question: "Which of these is not a feature of algorithms?", options: ["Finiteness", "Ambiguity", "Definiteness", "Effectiveness"], correct: 2 },
                    { id: 40, question: "Which is NOT a benefit of flowcharts?", options: ["Clarity", "Debugging help", "Easy to code", "Requires less drawing"], correct: 4 },

                    // continuing same pattern until 80...


                ],
            },
            "Concepts: variables, data types, operators, expressions, I/O": {
                color: "#14B8A6",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Concepts: variables, data types, operators, expressions, I/O?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Control structures: sequence, selection, loops": {
                color: "#0EA5E9",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Control structures: sequence, selection, loops?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "Functions/procedures; basic arrays and strings": {
                color: "#D946EF",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Functions/procedures; basic arrays and strings?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Language exposure: C/C++/Java basics (syntax recognition)": {
                color: "#F43F5E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)":
            {
                color: "#A855F7",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
        },
    },
    "Data Structures (Essential Basics)": {
        color: "#14B8A6",
        subtopics: {
            "Linear structures: arrays, stacks, queues (concept and simple operations)":
            {
                color: "#14B8A6",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "Non-linear overview: trees (binary tree idea), graphs (concept)": {
                color: "#0EA5E9",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)":
            {
                color: "#D946EF",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
        },
    },
    "Web Technologies": {
        color: "#0EA5E9",
        subtopics: {
            "HTML structure (tags, forms), CSS basics (selectors, box model idea)": {
                color: "#0EA5E9",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "JavaScript basics: variables, events; simple DOM concept": {
                color: "#D946EF",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about JavaScript basics: variables, events; simple DOM concept?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "HTTP methods (GET/POST), cookies/sessions idea": {
                color: "#F43F5E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about HTTP methods (GET/POST), cookies/sessions idea?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "WWW, browsers, URLs": {
                color: "#A855F7",
                questions: [
                    {
                        id: 1,
                        question: "1. Sample question about WWW, browsers, URLs?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question: "2. Sample question about WWW, browsers, URLs?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question: "3. Sample question about WWW, browsers, URLs?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question: "4. Sample question about WWW, browsers, URLs?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "5. Sample question about WWW, browsers, URLs?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question: "6. Sample question about WWW, browsers, URLs?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question: "7. Sample question about WWW, browsers, URLs?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question: "8. Sample question about WWW, browsers, URLs?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question: "9. Sample question about WWW, browsers, URLs?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question: "10. Sample question about WWW, browsers, URLs?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
        },
    },
    "Software Engineering": {
        color: "#D946EF",
        subtopics: {
            "SDLC models: Waterfall vs Agile (Scrum roles idea)": {
                color: "#D946EF",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "Requirements, design (modularity), implementation (version control idea)":
            {
                color: "#F43F5E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Requirements, design (modularity), implementation (version control idea)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Testing: unit, integration, system, acceptance (overview)": {
                color: "#A855F7",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 2,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 3,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Testing: unit, integration, system, acceptance (overview)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Maintenance types": {
                color: "#22C55E",
                questions: [
                    {
                        id: 1,
                        question: "1. Sample question about Maintenance types?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question: "2. Sample question about Maintenance types?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question: "3. Sample question about Maintenance types?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question: "4. Sample question about Maintenance types?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question: "5. Sample question about Maintenance types?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question: "6. Sample question about Maintenance types?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question: "7. Sample question about Maintenance types?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question: "8. Sample question about Maintenance types?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question: "9. Sample question about Maintenance types?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question: "10. Sample question about Maintenance types?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "mix of concepts": {
                color: "#F59E0B",
                questions: [
                    {
                        id: 1,
                        question: "Which SDLC model is risk-driven?",
                        options: ["Waterfall", "Spiral", "V-Model", "Incremental"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "Which diagram represents the dynamic behavior of a system?",
                        options: [
                            "Use Case Diagram",
                            "Class Diagram",
                            "Sequence Diagram",
                            "Deployment Diagram",
                        ],
                        correct: 2,
                    },
                    {
                        id: 3,
                        question:
                            "Which model is also called the Verification and Validation model?",
                        options: ["Waterfall", "Spiral", "V-Model", "Prototype"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question: "Black box testing is related to:",
                        options: [
                            "Functional Testing",
                            "Structural Testing",
                            "Performance Testing",
                            "Unit Testing",
                        ],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "Which one is not a software development life cycle model?",
                        options: [
                            "Spiral Model",
                            "Prototype Model",
                            "Agile Model",
                            "Compile Model",
                        ],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "Which of the following is not a type of software maintenance?",
                        options: ["Corrective", "Preventive", "Adaptive", "Evaluative"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "Which of the following is an example of a non-functional requirement?",
                        options: [
                            "Performance",
                            "Login functionality",
                            "Registration form",
                            "Payment gateway",
                        ],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question: "Which metric measures software size?",
                        options: [
                            "Cyclomatic Complexity",
                            "LOC (Lines of Code)",
                            "Defect Density",
                            "MTTF",
                        ],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "Which testing technique uses the control structure of a program?",
                        options: [
                            "Black Box Testing",
                            "White Box Testing",
                            "System Testing",
                            "Acceptance Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "Which phase of SDLC defines ‘what’ the system should do?",
                        options: [
                            "Design Phase",
                            "Requirement Analysis",
                            "Implementation",
                            "Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 11,
                        question: "Which document defines the scope of a project?",
                        options: [
                            "SRS (Software Requirement Specification)",
                            "Design Document",
                            "Test Plan",
                            "User Manual",
                        ],
                        correct: 0,
                    },
                    {
                        id: 12,
                        question: "Which of the following is not a software process model?",
                        options: [
                            "Waterfall Model",
                            "Spiral Model",
                            "Prototype Model",
                            "Pipe Model",
                        ],
                        correct: 3,
                    },
                    {
                        id: 13,
                        question: "In COCOMO, what does 'O' stand for?",
                        options: ["Optimized", "Objective", "Organic", "Operational"],
                        correct: 2,
                    },
                    {
                        id: 14,
                        question: "Who is considered the father of software engineering?",
                        options: ["Alan Turing", "Watts Humphrey", "Barry Boehm", "Boehm"],
                        correct: 1,
                    },
                    {
                        id: 15,
                        question:
                            "Which testing ensures that changes do not affect existing functionality?",
                        options: [
                            "Unit Testing",
                            "Regression Testing",
                            "Integration Testing",
                            "System Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 16,
                        question: "Which is not a software quality attribute?",
                        options: [
                            "Reliability",
                            "Maintainability",
                            "Usability",
                            "Compatibility",
                        ],
                        correct: 3,
                    },
                    {
                        id: 17,
                        question:
                            "Which diagram in UML represents object interactions with time sequence?",
                        options: [
                            "Use Case",
                            "Sequence Diagram",
                            "Class Diagram",
                            "State Diagram",
                        ],
                        correct: 1,
                    },
                    {
                        id: 18,
                        question: "Agile methodology follows:",
                        options: [
                            "Iterative and Incremental Development",
                            "Waterfall Approach",
                            "Linear Approach",
                            "Big Bang Model",
                        ],
                        correct: 0,
                    },
                    {
                        id: 19,
                        question: "Which is not a software engineering principle?",
                        options: [
                            "Abstraction",
                            "Encapsulation",
                            "Overloading",
                            "Guessing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 20,
                        question: "Which is not a valid software risk?",
                        options: [
                            "Staff turnover",
                            "Changing requirements",
                            "Power failure",
                            "Design improvement",
                        ],
                        correct: 3,
                    },
                    {
                        id: 21,
                        question: "The Spiral model was proposed by:",
                        options: [
                            "Watts Humphrey",
                            "Barry Boehm",
                            "Bjarne Stroustrup",
                            "James Gosling",
                        ],
                        correct: 1,
                    },
                    {
                        id: 22,
                        question: "Which one is not a software testing type?",
                        options: [
                            "Unit Testing",
                            "Integration Testing",
                            "Acceptance Testing",
                            "Replication Testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 23,
                        question: "SRS stands for:",
                        options: [
                            "Software Requirement Specification",
                            "System Requirement Specification",
                            "Software Result Summary",
                            "System Result Specification",
                        ],
                        correct: 0,
                    },
                    {
                        id: 24,
                        question: "Which SDLC model is also called the Big Bang model?",
                        options: ["Waterfall", "Prototype", "Ad-hoc", "Agile"],
                        correct: 2,
                    },
                    {
                        id: 25,
                        question: "Which testing is performed first?",
                        options: [
                            "Integration Testing",
                            "Unit Testing",
                            "System Testing",
                            "Acceptance Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 26,
                        question:
                            "Which software engineering concept divides large problems into small parts?",
                        options: [
                            "Abstraction",
                            "Modularity",
                            "Polymorphism",
                            "Inheritance",
                        ],
                        correct: 1,
                    },
                    {
                        id: 27,
                        question:
                            "Which process model uses rapid development of prototypes?",
                        options: [
                            "Spiral Model",
                            "Prototype Model",
                            "Waterfall Model",
                            "Agile Model",
                        ],
                        correct: 1,
                    },
                    {
                        id: 28,
                        question: "The main focus of white-box testing is:",
                        options: ["Behavior", "Structure", "User Interface", "Output"],
                        correct: 1,
                    },
                    {
                        id: 29,
                        question: "Which one is not part of feasibility study?",
                        options: [
                            "Technical Feasibility",
                            "Operational Feasibility",
                            "Financial Feasibility",
                            "Design Feasibility",
                        ],
                        correct: 3,
                    },
                    {
                        id: 30,
                        question:
                            "The number of linearly independent paths in a program is:",
                        options: [
                            "Cyclomatic Complexity",
                            "Defect Density",
                            "Cohesion",
                            "Coupling",
                        ],
                        correct: 0,
                    },
                    {
                        id: 31,
                        question: "Which of the following is not a functional requirement?",
                        options: [
                            "Data storage",
                            "Security",
                            "Transaction management",
                            "Report generation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 32,
                        question: "Which is not a black box testing technique?",
                        options: [
                            "Boundary Value Analysis",
                            "Equivalence Partitioning",
                            "Cause-Effect Graphing",
                            "Statement Coverage",
                        ],
                        correct: 3,
                    },
                    {
                        id: 33,
                        question: "Which tool is used for version control?",
                        options: ["Git", "JIRA", "Jenkins", "Selenium"],
                        correct: 0,
                    },
                    {
                        id: 34,
                        question: "What is the first phase of SDLC?",
                        options: ["Design", "Requirement Analysis", "Coding", "Testing"],
                        correct: 1,
                    },
                    {
                        id: 35,
                        question: "Which model is best suited for small projects?",
                        options: ["Agile", "Waterfall", "Spiral", "V-Model"],
                        correct: 1,
                    },
                    {
                        id: 36,
                        question: "Which is not a project management tool?",
                        options: ["PERT", "Gantt Chart", "DFD", "CPM"],
                        correct: 2,
                    },
                    {
                        id: 37,
                        question: "Which diagram shows data flow in a system?",
                        options: ["ER Diagram", "DFD", "Class Diagram", "Use Case"],
                        correct: 1,
                    },
                    {
                        id: 38,
                        question: "Which metric measures program complexity?",
                        options: ["Cyclomatic Complexity", "LOC", "MTTF", "CMM"],
                        correct: 0,
                    },
                    {
                        id: 39,
                        question: "Which is not a software testing level?",
                        options: ["Unit", "Integration", "Regression", "System"],
                        correct: 2,
                    },
                    {
                        id: 40,
                        question: "Which testing checks the whole system?",
                        options: [
                            "Unit Testing",
                            "System Testing",
                            "Integration Testing",
                            "Regression Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 41,
                        question: "Which quality model is defined by McCall?",
                        options: ["CMM", "ISO 9126", "FURPS", "McCall’s model"],
                        correct: 3,
                    },
                    {
                        id: 42,
                        question: "Which is not a software development activity?",
                        options: ["Coding", "Testing", "Debugging", "Hacking"],
                        correct: 3,
                    },
                    {
                        id: 43,
                        question: "Which one is not an Agile framework?",
                        options: ["Scrum", "XP", "Kanban", "PERT"],
                        correct: 3,
                    },
                    {
                        id: 44,
                        question: "Which diagram is used for database design?",
                        options: [
                            "Use Case",
                            "ER Diagram",
                            "Class Diagram",
                            "State Diagram",
                        ],
                        correct: 1,
                    },
                    {
                        id: 45,
                        question:
                            "Which testing checks whether the software meets business needs?",
                        options: [
                            "Acceptance Testing",
                            "Unit Testing",
                            "System Testing",
                            "Integration Testing",
                        ],
                        correct: 0,
                    },
                    {
                        id: 46,
                        question:
                            "Which of the following is not a software evolution activity?",
                        options: [
                            "Development",
                            "Maintenance",
                            "Re-engineering",
                            "Operation",
                        ],
                        correct: 0,
                    },
                    {
                        id: 47,
                        question: "What is software reliability?",
                        options: [
                            "Probability of failure",
                            "Probability of success",
                            "Probability of failure-free operation",
                            "System availability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 48,
                        question: "Which one is not a UML diagram?",
                        options: [
                            "Sequence Diagram",
                            "State Diagram",
                            "Flowchart",
                            "Use Case Diagram",
                        ],
                        correct: 2,
                    },
                    {
                        id: 49,
                        question:
                            "Which model is also known as the linear sequential model?",
                        options: ["Spiral", "Waterfall", "Prototype", "Agile"],
                        correct: 1,
                    },
                    {
                        id: 50,
                        question:
                            "Which testing ensures individual components work correctly?",
                        options: [
                            "Unit Testing",
                            "Integration Testing",
                            "System Testing",
                            "Regression Testing",
                        ],
                        correct: 0,
                    },
                    {
                        id: 51,
                        question:
                            "Which layer of OSI model is responsible for logical addressing?",
                        options: ["Application", "Transport", "Network", "Data Link"],
                        correct: 2,
                    },
                    {
                        id: 52,
                        question: "In ER modeling, the rectangle represents?",
                        options: ["Entity", "Attribute", "Relationship", "Primary Key"],
                        correct: 0,
                    },
                    {
                        id: 53,
                        question: "Which scheduling algorithm may cause starvation?",
                        options: ["FCFS", "SJF", "Round Robin", "Priority"],
                        correct: 1,
                    },
                    {
                        id: 54,
                        question:
                            "Which database language is used to query and retrieve data?",
                        options: ["DDL", "DML", "DCL", "TCL"],
                        correct: 1,
                    },
                    {
                        id: 55,
                        question: "In software testing, alpha testing is performed by?",
                        options: ["Developers", "End users", "Testers", "Customers"],
                        correct: 0,
                    },
                    {
                        id: 56,
                        question: "Which of the following is not a type of DBMS?",
                        options: ["Hierarchical", "Relational", "Network", "Rotational"],
                        correct: 3,
                    },
                    {
                        id: 57,
                        question: "TCP is a ______ protocol?",
                        options: [
                            "Connection-oriented",
                            "Connectionless",
                            "Unreliable",
                            "Stateless",
                        ],
                        correct: 0,
                    },
                    {
                        id: 58,
                        question: "Which of the following is not a software metric?",
                        options: ["LOC", "Cyclomatic Complexity", "CMMI", "Function Point"],
                        correct: 2,
                    },
                    {
                        id: 59,
                        question: "Thrashing occurs when?",
                        options: [
                            "CPU utilization is low",
                            "Page fault rate is high",
                            "Disk space is full",
                            "Deadlock occurs",
                        ],
                        correct: 1,
                    },
                    {
                        id: 60,
                        question: "Which key uniquely identifies a record in a table?",
                        options: [
                            "Foreign Key",
                            "Candidate Key",
                            "Primary Key",
                            "Composite Key",
                        ],
                        correct: 2,
                    },
                    {
                        id: 61,
                        question:
                            "Which software development model uses small incremental builds?",
                        options: ["Spiral", "Incremental", "Waterfall", "V-Model"],
                        correct: 1,
                    },
                    {
                        id: 62,
                        question: "SMTP is used for?",
                        options: [
                            "File Transfer",
                            "Email Transfer",
                            "Remote Login",
                            "Web Browsing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 63,
                        question: "Deadlock prevention ensures?",
                        options: [
                            "Circular wait never occurs",
                            "Mutual exclusion is removed",
                            "Hold and wait is allowed",
                            "Starvation never occurs",
                        ],
                        correct: 0,
                    },
                    {
                        id: 64,
                        question: "Which normal form removes partial dependency?",
                        options: ["1NF", "2NF", "3NF", "BCNF"],
                        correct: 1,
                    },
                    {
                        id: 65,
                        question:
                            "Which of the following is a white-box testing technique?",
                        options: [
                            "Boundary Value",
                            "Equivalence Partitioning",
                            "Path Testing",
                            "Usability Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 66,
                        question: "In OSI model, data encryption is performed at?",
                        options: [
                            "Application Layer",
                            "Session Layer",
                            "Presentation Layer",
                            "Transport Layer",
                        ],
                        correct: 2,
                    },
                    {
                        id: 67,
                        question: "Which concurrency control technique uses timestamps?",
                        options: [
                            "Locking",
                            "Wait-die",
                            "Timestamp Ordering",
                            "Two-phase commit",
                        ],
                        correct: 2,
                    },
                    {
                        id: 68,
                        question: "Which CPU scheduling is preemptive?",
                        options: [
                            "FCFS",
                            "SJF (non-preemptive)",
                            "Round Robin",
                            "Priority (non-preemptive)",
                        ],
                        correct: 2,
                    },
                    {
                        id: 69,
                        question: "Which symbol in ER diagram represents a relationship?",
                        options: ["Oval", "Rectangle", "Diamond", "Line"],
                        correct: 2,
                    },
                    {
                        id: 70,
                        question: "In software testing, beta testing is done by?",
                        options: [
                            "Internal users",
                            "External users",
                            "Developers",
                            "Test team",
                        ],
                        correct: 1,
                    },
                    {
                        id: 71,
                        question:
                            "Which protocol is used for secure communication over the internet?",
                        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
                        correct: 1,
                    },
                    {
                        id: 72,
                        question: "In paging, the address generated by CPU is called?",
                        options: [
                            "Logical address",
                            "Physical address",
                            "Virtual address",
                            "Mapped address",
                        ],
                        correct: 0,
                    },
                    {
                        id: 73,
                        question: "Which normal form removes transitive dependency?",
                        options: ["1NF", "2NF", "3NF", "BCNF"],
                        correct: 2,
                    },
                    {
                        id: 74,
                        question: "Which of these is not a black-box testing technique?",
                        options: [
                            "Boundary Value",
                            "Decision Table",
                            "Cause-effect Graphing",
                            "Code Coverage",
                        ],
                        correct: 3,
                    },
                    {
                        id: 75,
                        question: "Which OSI layer ensures error-free delivery?",
                        options: ["Physical", "Data Link", "Network", "Transport"],
                        correct: 3,
                    },
                    {
                        id: 76,
                        question:
                            "Which transaction property ensures all-or-nothing execution?",
                        options: ["Consistency", "Durability", "Atomicity", "Isolation"],
                        correct: 2,
                    },
                    {
                        id: 77,
                        question: "Critical section problem is related to?",
                        options: [
                            "Deadlock",
                            "Process Synchronization",
                            "Memory Management",
                            "CPU Scheduling",
                        ],
                        correct: 1,
                    },
                    {
                        id: 78,
                        question:
                            "Which testing ensures that changes do not affect existing features?",
                        options: [
                            "Unit Testing",
                            "Integration Testing",
                            "Regression Testing",
                            "System Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 79,
                        question: "IPV6 address size is?",
                        options: ["32-bit", "64-bit", "128-bit", "256-bit"],
                        correct: 2,
                    },
                    {
                        id: 80,
                        question: "Which database key can have null values?",
                        options: [
                            "Primary Key",
                            "Candidate Key",
                            "Foreign Key",
                            "Super Key",
                        ],
                        correct: 2,
                    },
                    {
                        id: 81,
                        question: "Spiral model emphasizes on?",
                        options: [
                            "Risk Analysis",
                            "Prototyping",
                            "Documentation",
                            "Maintenance",
                        ],
                        correct: 0,
                    },
                    {
                        id: 82,
                        question:
                            "Which layer of TCP/IP is equivalent to OSI Network layer?",
                        options: ["Transport", "Internet", "Application", "Session"],
                        correct: 1,
                    },
                    {
                        id: 83,
                        question: "Belady’s anomaly is related to?",
                        options: ["Deadlock", "Paging", "Segmentation", "Thrashing"],
                        correct: 1,
                    },
                    {
                        id: 84,
                        question: "Which of the following is not a DDL command?",
                        options: ["CREATE", "ALTER", "DELETE", "DROP"],
                        correct: 2,
                    },
                    {
                        id: 85,
                        question: "Which of the following is not part of verification?",
                        options: ["Reviews", "Inspections", "Walkthroughs", "Beta Testing"],
                        correct: 3,
                    },
                    {
                        id: 86,
                        question:
                            "Which device connects two networks of different protocols?",
                        options: ["Router", "Bridge", "Gateway", "Switch"],
                        correct: 2,
                    },
                    {
                        id: 87,
                        question: "Which memory is volatile?",
                        options: ["ROM", "RAM", "Hard Disk", "Flash"],
                        correct: 1,
                    },
                    {
                        id: 88,
                        question: "In DBMS, ACID properties ensure?",
                        options: ["Security", "Consistency", "Performance", "Availability"],
                        correct: 1,
                    },
                    {
                        id: 89,
                        question: "Which testing checks the interface between modules?",
                        options: [
                            "Unit Testing",
                            "System Testing",
                            "Integration Testing",
                            "Alpha Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 90,
                        question: "Which layer of OSI model is responsible for routing?",
                        options: ["Transport", "Network", "Data Link", "Session"],
                        correct: 1,
                    },
                    {
                        id: 91,
                        question: "Banker's algorithm is used for?",
                        options: [
                            "Deadlock Detection",
                            "Deadlock Prevention",
                            "Deadlock Avoidance",
                            "Deadlock Recovery",
                        ],
                        correct: 2,
                    },
                    {
                        id: 92,
                        question: "Which SQL clause is used to filter rows?",
                        options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
                        correct: 0,
                    },
                    {
                        id: 93,
                        question: "Which testing is performed without executing code?",
                        options: ["Dynamic", "Static", "System", "Integration"],
                        correct: 1,
                    },
                    {
                        id: 94,
                        question: "Which is the transport layer protocol for DNS?",
                        options: ["TCP", "UDP", "Both TCP & UDP", "ICMP"],
                        correct: 2,
                    },
                    {
                        id: 95,
                        question: "LRU is a ______ replacement algorithm?",
                        options: ["Page", "Process", "Memory", "Disk"],
                        correct: 0,
                    },
                    {
                        id: 96,
                        question: "Which key uniquely identifies a tuple in relational DB?",
                        options: [
                            "Foreign Key",
                            "Primary Key",
                            "Super Key",
                            "Composite Key",
                        ],
                        correct: 1,
                    },
                    {
                        id: 97,
                        question: "Which SDLC phase involves feasibility study?",
                        options: ["Design", "Analysis", "Planning", "Maintenance"],
                        correct: 2,
                    },
                    {
                        id: 98,
                        question: "Which device works at data link layer?",
                        options: ["Hub", "Router", "Switch", "Gateway"],
                        correct: 2,
                    },
                    {
                        id: 99,
                        question: "Which OS is multitasking?",
                        options: ["MS-DOS", "Windows", "CP/M", "None"],
                        correct: 1,
                    },
                    {
                        id: 100,
                        question:
                            "Which SQL command is used to remove all rows from a table but not structure?",
                        options: ["DELETE", "DROP", "TRUNCATE", "ALTER"],
                        correct: 2,
                    },
                    {
                        id: 101,
                        question:
                            "Which layer of OSI model is responsible for logical addressing?",
                        options: ["Data Link", "Network", "Transport", "Session"],
                        correct: 1,
                    },
                    {
                        id: 102,
                        question: "Deadlock can be prevented by:",
                        options: [
                            "Mutual exclusion",
                            "Circular wait",
                            "Resource ordering",
                            "Preemption disabled",
                        ],
                        correct: 2,
                    },
                    {
                        id: 103,
                        question: "In DBMS, normalization is used to:",
                        options: [
                            "Reduce redundancy",
                            "Increase redundancy",
                            "Improve speed only",
                            "Remove indexes",
                        ],
                        correct: 0,
                    },
                    {
                        id: 104,
                        question: "Which scheduling algorithm may cause starvation?",
                        options: ["Round Robin", "FIFO", "SJF", "Priority"],
                        correct: 2,
                    },
                    {
                        id: 105,
                        question: "Software reliability is measured in terms of:",
                        options: ["MTBF", "MIPS", "Throughput", "Response time"],
                        correct: 0,
                    },
                    {
                        id: 106,
                        question: "TCP is a:",
                        options: [
                            "Connection-oriented protocol",
                            "Connectionless protocol",
                            "Both",
                            "None",
                        ],
                        correct: 0,
                    },
                    {
                        id: 107,
                        question: "In DBMS, ACID stands for:",
                        options: [
                            "Atomicity, Consistency, Isolation, Durability",
                            "Accuracy, Clarity, Integrity, Durability",
                            "Atomic, Concurrent, Independent, Database",
                            "None",
                        ],
                        correct: 0,
                    },
                    {
                        id: 108,
                        question: "Which OS uses time-sharing?",
                        options: [
                            "Batch OS",
                            "Multiprogramming OS",
                            "Real-time OS",
                            "Time-sharing OS",
                        ],
                        correct: 3,
                    },
                    {
                        id: 109,
                        question:
                            "Software testing technique without executing the code is:",
                        options: [
                            "White box",
                            "Black box",
                            "Static testing",
                            "Dynamic testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 110,
                        question: "IPV6 address size is:",
                        options: ["32-bit", "64-bit", "128-bit", "256-bit"],
                        correct: 2,
                    },
                    {
                        id: 111,
                        question: "The banker’s algorithm is used for:",
                        options: [
                            "Scheduling",
                            "Deadlock prevention",
                            "Deadlock avoidance",
                            "Page replacement",
                        ],
                        correct: 2,
                    },
                    {
                        id: 112,
                        question: "Which normal form removes transitive dependency?",
                        options: ["1NF", "2NF", "3NF", "BCNF"],
                        correct: 2,
                    },
                    {
                        id: 113,
                        question: "Which layer handles encryption?",
                        options: ["Application", "Presentation", "Session", "Transport"],
                        correct: 1,
                    },
                    {
                        id: 114,
                        question: "Which type of software is system software?",
                        options: ["Compiler", "DBMS", "ERP", "Browser"],
                        correct: 0,
                    },
                    {
                        id: 115,
                        question: "Paging is used in:",
                        options: ["Segmentation", "Virtual memory", "Cache", "Registers"],
                        correct: 1,
                    },
                    {
                        id: 116,
                        question: "Which protocol provides email services?",
                        options: ["HTTP", "SMTP", "FTP", "SNMP"],
                        correct: 1,
                    },
                    {
                        id: 117,
                        question: "White box testing focuses on:",
                        options: [
                            "Internal structure",
                            "Functionality",
                            "User interface",
                            "System performance",
                        ],
                        correct: 0,
                    },
                    {
                        id: 118,
                        question: "Thrashing occurs when:",
                        options: [
                            "High CPU utilization",
                            "High paging",
                            "Low memory",
                            "Deadlock",
                        ],
                        correct: 1,
                    },
                    {
                        id: 119,
                        question: "In ER diagram, rectangle represents:",
                        options: ["Entity", "Attribute", "Relation", "Primary key"],
                        correct: 0,
                    },
                    {
                        id: 120,
                        question: "In OSI model, transport layer ensures:",
                        options: [
                            "Error detection only",
                            "End-to-end delivery",
                            "Encoding",
                            "Routing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 121,
                        question: "Software process model that has no feedback path:",
                        options: ["Waterfall", "Spiral", "Incremental", "Agile"],
                        correct: 0,
                    },
                    {
                        id: 122,
                        question: "Which indexing method uses B-tree?",
                        options: [
                            "Dense index",
                            "Sparse index",
                            "Hierarchical index",
                            "Balanced tree index",
                        ],
                        correct: 3,
                    },
                    {
                        id: 123,
                        question: "Virtual memory is managed by:",
                        options: ["Compiler", "CPU", "OS", "Database"],
                        correct: 2,
                    },
                    {
                        id: 124,
                        question: "Which topology has a central node?",
                        options: ["Bus", "Ring", "Star", "Mesh"],
                        correct: 2,
                    },
                    {
                        id: 125,
                        question: "Black box testing is also called:",
                        options: [
                            "Structural testing",
                            "Behavioral testing",
                            "Unit testing",
                            "Path testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 126,
                        question: "Deadlock necessary condition NOT required is:",
                        options: [
                            "Hold and wait",
                            "Mutual exclusion",
                            "Circular wait",
                            "Preemption",
                        ],
                        correct: 3,
                    },
                    {
                        id: 127,
                        question: "DBMS concurrency control prevents:",
                        options: [
                            "Data redundancy",
                            "Data inconsistency",
                            "Data loss only",
                            "Deadlock",
                        ],
                        correct: 1,
                    },
                    {
                        id: 128,
                        question: "Which OS scheduling is fair for all processes?",
                        options: ["Round Robin", "SJF", "Priority", "FIFO"],
                        correct: 0,
                    },
                    {
                        id: 129,
                        question: "Which protocol translates domain names to IP?",
                        options: ["ARP", "DNS", "ICMP", "DHCP"],
                        correct: 1,
                    },
                    {
                        id: 130,
                        question: "CMM stands for:",
                        options: [
                            "Capability Maturity Model",
                            "Computer Model Method",
                            "Capability Measure Model",
                            "Control Model Mechanism",
                        ],
                        correct: 0,
                    },
                    {
                        id: 131,
                        question: "Thrashing reduces:",
                        options: [
                            "CPU utilization",
                            "Paging",
                            "Throughput",
                            "Both CPU utilization and throughput",
                        ],
                        correct: 3,
                    },
                    {
                        id: 132,
                        question: "Which is a strong entity?",
                        options: [
                            "Employee with ID",
                            "Weak dependent entity",
                            "Composite attribute",
                            "Multivalued attribute",
                        ],
                        correct: 0,
                    },
                    {
                        id: 133,
                        question:
                            "Which device breaks network into multiple collision domains?",
                        options: ["Hub", "Switch", "Repeater", "Bridge"],
                        correct: 1,
                    },
                    {
                        id: 134,
                        question: "In testing, alpha testing is done by:",
                        options: ["End users", "Developers", "Testers in lab", "None"],
                        correct: 2,
                    },
                    {
                        id: 135,
                        question: "Page replacement algorithm optimal is:",
                        options: ["LRU", "FIFO", "Optimal", "Clock"],
                        correct: 2,
                    },
                    {
                        id: 136,
                        question: "In DBMS, candidate key is:",
                        options: [
                            "Superkey",
                            "Foreign key",
                            "Primary key only",
                            "Unique key only",
                        ],
                        correct: 0,
                    },
                    {
                        id: 137,
                        question: "OSI model has:",
                        options: ["5 layers", "6 layers", "7 layers", "8 layers"],
                        correct: 2,
                    },
                    {
                        id: 138,
                        question: "Which is an example of open-source DBMS?",
                        options: ["Oracle", "MySQL", "MS SQL Server", "DB2"],
                        correct: 1,
                    },
                    {
                        id: 139,
                        question: "Disk scheduling algorithm minimizing seek time:",
                        options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
                        correct: 1,
                    },
                    {
                        id: 140,
                        question: "Which test is performed first?",
                        options: ["Integration", "Unit", "System", "Acceptance"],
                        correct: 1,
                    },
                    {
                        id: 141,
                        question: "UDP is:",
                        options: [
                            "Reliable and fast",
                            "Unreliable and fast",
                            "Reliable and slow",
                            "Unreliable and slow",
                        ],
                        correct: 1,
                    },
                    {
                        id: 142,
                        question: "Which dependency is partial?",
                        options: ["1NF", "2NF", "3NF", "BCNF"],
                        correct: 1,
                    },
                    {
                        id: 143,
                        question: "RAID is used for:",
                        options: [
                            "Redundancy",
                            "Speed",
                            "Both Redundancy and Speed",
                            "None",
                        ],
                        correct: 2,
                    },
                    {
                        id: 144,
                        question: "Which layer provides flow control?",
                        options: ["Data link", "Network", "Transport", "Session"],
                        correct: 2,
                    },
                    {
                        id: 145,
                        question: "Testing that ensures new code doesn’t break old code:",
                        options: ["Regression", "Unit", "Alpha", "Beta"],
                        correct: 0,
                    },
                    {
                        id: 146,
                        question: "Critical section problem arises in:",
                        options: [
                            "Single process",
                            "Multiple processes",
                            "Single thread",
                            "None",
                        ],
                        correct: 1,
                    },
                    {
                        id: 147,
                        question: "Which SQL command is used to remove a table?",
                        options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
                        correct: 2,
                    },
                    {
                        id: 148,
                        question: "Which is not a guided media?",
                        options: [
                            "Coaxial cable",
                            "Fiber optics",
                            "Microwave",
                            "Twisted pair",
                        ],
                        correct: 2,
                    },
                    {
                        id: 149,
                        question: "Software quality factor NOT included is:",
                        options: [
                            "Correctness",
                            "Maintainability",
                            "Integrity",
                            "Decoration",
                        ],
                        correct: 3,
                    },
                    {
                        id: 150,
                        question: "Which algorithm is used for shortest path?",
                        options: ["Dijkstra", "Kruskal", "Prim", "Floyd"],
                        correct: 0,
                    },
                    {
                        id: 151,
                        question: "Which model is known as the linear sequential model?",
                        options: [
                            "Spiral Model",
                            "Waterfall Model",
                            "Incremental Model",
                            "RAD Model",
                        ],
                        correct: 1,
                    },
                    {
                        id: 152,
                        question: "In software engineering, SRS stands for?",
                        options: [
                            "System Requirement Standards",
                            "Software Requirement Specification",
                            "System Resource Specification",
                            "Software Review Standard",
                        ],
                        correct: 1,
                    },
                    {
                        id: 153,
                        question: "Which is not a software process model?",
                        options: ["Waterfall", "Spiral", "Agile", "Networking"],
                        correct: 3,
                    },
                    {
                        id: 154,
                        question: "Which of these is not a software development activity?",
                        options: ["Design", "Coding", "Testing", "Networking"],
                        correct: 3,
                    },
                    {
                        id: 155,
                        question: "RAD stands for?",
                        options: [
                            "Rapid Application Development",
                            "Random Application Design",
                            "Rapid Analysis Development",
                            "Required Application Documentation",
                        ],
                        correct: 0,
                    },
                    {
                        id: 156,
                        question:
                            "Which model is best suited when requirements are well defined?",
                        options: [
                            "Spiral Model",
                            "Waterfall Model",
                            "RAD Model",
                            "Agile Model",
                        ],
                        correct: 1,
                    },
                    {
                        id: 157,
                        question: "Agile development emphasizes?",
                        options: [
                            "Comprehensive documentation",
                            "Customer collaboration",
                            "Strict process adherence",
                            "Sequential design",
                        ],
                        correct: 1,
                    },
                    {
                        id: 158,
                        question: "Which one is not an Agile method?",
                        options: ["Scrum", "XP", "Kanban", "Waterfall"],
                        correct: 3,
                    },
                    {
                        id: 159,
                        question: "The main purpose of requirement analysis is?",
                        options: [
                            "To design database",
                            "To gather and understand user needs",
                            "To write test cases",
                            "To develop prototypes",
                        ],
                        correct: 1,
                    },
                    {
                        id: 160,
                        question: "SRS should be?",
                        options: [
                            "Ambiguous",
                            "Unclear",
                            "Complete and consistent",
                            "Inconsistent",
                        ],
                        correct: 2,
                    },
                    {
                        id: 161,
                        question: "Prototyping model is useful when?",
                        options: [
                            "Requirements are not clear",
                            "Requirements are stable",
                            "Project is very small",
                            "System is already defined",
                        ],
                        correct: 0,
                    },
                    {
                        id: 162,
                        question: "In software engineering, coupling refers to?",
                        options: [
                            "Dependency between modules",
                            "Size of module",
                            "Reusability",
                            "Complexity of algorithm",
                        ],
                        correct: 0,
                    },
                    {
                        id: 163,
                        question: "In software design, cohesion means?",
                        options: [
                            "Internal consistency of a module",
                            "Dependency on other modules",
                            "Code reusability",
                            "Data redundancy",
                        ],
                        correct: 0,
                    },
                    {
                        id: 164,
                        question:
                            "Which model is also known as Evolutionary process model?",
                        options: ["Waterfall", "Spiral", "V-Model", "RAD"],
                        correct: 1,
                    },
                    {
                        id: 165,
                        question: "Black box testing is based on?",
                        options: [
                            "Internal code structure",
                            "System requirements",
                            "Control paths",
                            "Algorithms",
                        ],
                        correct: 1,
                    },
                    {
                        id: 166,
                        question: "White box testing focuses on?",
                        options: [
                            "External behavior",
                            "Code structure",
                            "User requirements",
                            "Documentation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 167,
                        question: "Which is not a type of software testing?",
                        options: [
                            "Unit Testing",
                            "Integration Testing",
                            "System Testing",
                            "Threading Testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 168,
                        question: "Verification ensures that?",
                        options: [
                            "Software meets user needs",
                            "Software is built correctly",
                            "System performance is optimized",
                            "Documentation is complete",
                        ],
                        correct: 1,
                    },
                    {
                        id: 169,
                        question: "Validation ensures that?",
                        options: [
                            "Software meets user expectations",
                            "Software is bug-free",
                            "System is well designed",
                            "Software has no redundancy",
                        ],
                        correct: 0,
                    },
                    {
                        id: 170,
                        question: "Alpha testing is performed by?",
                        options: [
                            "End users",
                            "Developers at site",
                            "Developers at organization",
                            "Independent testing team",
                        ],
                        correct: 2,
                    },
                    {
                        id: 171,
                        question: "Beta testing is carried out by?",
                        options: [
                            "System designers",
                            "Selected external users",
                            "Developers",
                            "Project managers",
                        ],
                        correct: 1,
                    },
                    {
                        id: 172,
                        question: "Which is not a maintenance activity?",
                        options: ["Corrective", "Adaptive", "Perfective", "Prototyping"],
                        correct: 3,
                    },
                    {
                        id: 173,
                        question: "Software quality is defined as?",
                        options: [
                            "User interface design",
                            "Conformance to requirements",
                            "Performance only",
                            "Cost of development",
                        ],
                        correct: 1,
                    },
                    {
                        id: 174,
                        question: "CMM stands for?",
                        options: [
                            "Capability Maturity Model",
                            "Computer Management Model",
                            "Cost Management Model",
                            "Critical Module Model",
                        ],
                        correct: 0,
                    },
                    {
                        id: 175,
                        question: "Which level of CMM indicates ‘Defined’ process?",
                        options: ["Level 1", "Level 2", "Level 3", "Level 4"],
                        correct: 2,
                    },
                    {
                        id: 176,
                        question: "Which one is not a risk management activity?",
                        options: [
                            "Risk identification",
                            "Risk analysis",
                            "Risk planning",
                            "Risk marketing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 177,
                        question: "The spiral model was proposed by?",
                        options: ["Pressman", "Boehm", "Watts Humphrey", "Royce"],
                        correct: 1,
                    },
                    {
                        id: 178,
                        question: "Which of these is not a CASE tool?",
                        options: ["Project planning", "Design", "Coding", "Debugger"],
                        correct: 3,
                    },
                    {
                        id: 179,
                        question: "Which software metric measures program size?",
                        options: [
                            "LOC",
                            "Cyclomatic Complexity",
                            "Function Points",
                            "Defect Density",
                        ],
                        correct: 0,
                    },
                    {
                        id: 180,
                        question: "Cyclomatic complexity is used to measure?",
                        options: [
                            "Size",
                            "Control flow complexity",
                            "Data dependency",
                            "Reusability",
                        ],
                        correct: 1,
                    },
                    {
                        id: 181,
                        question: "Which is not a software quality model?",
                        options: ["McCall", "Boehm", "ISO 9126", "OSI"],
                        correct: 3,
                    },
                    {
                        id: 182,
                        question: "Which of these is a non-functional requirement?",
                        options: [
                            "Performance",
                            "Login Functionality",
                            "File Upload",
                            "Search Feature",
                        ],
                        correct: 0,
                    },
                    {
                        id: 183,
                        question: "Software re-engineering is?",
                        options: [
                            "Rewriting software from scratch",
                            "Improving existing software",
                            "Bug fixing only",
                            "Coding new modules",
                        ],
                        correct: 1,
                    },
                    {
                        id: 184,
                        question: "CASE tools are used for?",
                        options: [
                            "Only coding",
                            "Automating software development activities",
                            "System installation",
                            "Hardware testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 185,
                        question: "Configuration management ensures?",
                        options: [
                            "Version control",
                            "Code optimization",
                            "Team performance",
                            "Testing quality",
                        ],
                        correct: 0,
                    },
                    {
                        id: 186,
                        question: "Reverse engineering is?",
                        options: [
                            "Developing new software",
                            "Analyzing existing system",
                            "Bug fixing",
                            "Testing only",
                        ],
                        correct: 1,
                    },
                    {
                        id: 187,
                        question: "Forward engineering means?",
                        options: [
                            "Moving from design to code",
                            "Analyzing code",
                            "Rebuilding from old system",
                            "Debugging",
                        ],
                        correct: 0,
                    },
                    {
                        id: 188,
                        question: "Which testing is performed first?",
                        options: [
                            "System testing",
                            "Unit testing",
                            "Integration testing",
                            "Acceptance testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 189,
                        question: "Stress testing focuses on?",
                        options: [
                            "Functionality",
                            "Extreme load conditions",
                            "Usability",
                            "Security",
                        ],
                        correct: 1,
                    },
                    {
                        id: 190,
                        question: "Regression testing is done to?",
                        options: [
                            "Check new features",
                            "Verify old functionality after changes",
                            "Test security",
                            "Check performance",
                        ],
                        correct: 1,
                    },
                    {
                        id: 191,
                        question: "Which model combines development and testing?",
                        options: ["Waterfall", "V-Model", "Spiral", "RAD"],
                        correct: 1,
                    },
                    {
                        id: 192,
                        question: "Which is not a black box testing technique?",
                        options: [
                            "Equivalence Partitioning",
                            "Boundary Value Analysis",
                            "State Transition",
                            "Path Coverage",
                        ],
                        correct: 3,
                    },
                    {
                        id: 193,
                        question: "Which is not a white box testing technique?",
                        options: [
                            "Path Coverage",
                            "Loop Testing",
                            "Condition Testing",
                            "System Testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 194,
                        question: "Which metric measures defect density?",
                        options: [
                            "LOC",
                            "Number of defects / size",
                            "Cyclomatic complexity",
                            "Function points",
                        ],
                        correct: 1,
                    },
                    {
                        id: 195,
                        question: "ISO 9001 is related to?",
                        options: [
                            "Project management",
                            "Quality assurance",
                            "System design",
                            "Coding",
                        ],
                        correct: 1,
                    },
                    {
                        id: 196,
                        question: "Which of these is not a software maintenance type?",
                        options: ["Preventive", "Adaptive", "Perfective", "Generative"],
                        correct: 3,
                    },
                    {
                        id: 197,
                        question: "Which one is a software reliability model?",
                        options: ["Jelinski-Moranda", "Boehm", "McCall", "CMM"],
                        correct: 0,
                    },
                    {
                        id: 198,
                        question: "Which is not a part of software project management?",
                        options: ["Planning", "Scheduling", "Coding", "Monitoring"],
                        correct: 2,
                    },
                    {
                        id: 199,
                        question: "Which one ensures correctness of software?",
                        options: [
                            "Verification & Validation",
                            "Coding",
                            "Maintenance",
                            "Testing only",
                        ],
                        correct: 0,
                    },
                    {
                        id: 200,
                        question: "Which metric is used for software complexity?",
                        options: [
                            "Cyclomatic Complexity",
                            "LOC",
                            "Function Points",
                            "Execution Time",
                        ],
                        correct: 0,
                    },
                    {
                        id: 200,
                        question:
                            "In Function Point Analysis (FPA), which factor is most critical in determining the complexity adjustment value?",
                        options: [
                            "External Inputs",
                            "General System Characteristics",
                            "Internal Logical Files",
                            "External Interface Files",
                        ],
                        correct: 1,
                    },
                    {
                        id: 201,
                        question:
                            "Which COCOMO model is best suited for projects with unprecedented systems and high innovation?",
                        options: [
                            "Organic",
                            "Semi-Detached",
                            "Embedded",
                            "Post-Architecture",
                        ],
                        correct: 2,
                    },
                    {
                        id: 202,
                        question:
                            "In software architecture, the '4+1' view model by Kruchten emphasizes:",
                        options: [
                            "Four implementation layers and one data layer",
                            "Use cases driving five concurrent views",
                            "Four quality attributes and one performance metric",
                            "Five modules with layered interactions",
                        ],
                        correct: 1,
                    },
                    {
                        id: 203,
                        question:
                            "Which testing method is best for verifying concurrency issues in a multi-threaded application?",
                        options: [
                            "Regression Testing",
                            "Mutation Testing",
                            "Stress Testing",
                            "Race Condition Testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 204,
                        question:
                            "In reverse engineering, which activity focuses on abstracting higher-level design from existing code?",
                        options: [
                            "Restructuring",
                            "Redocumentation",
                            "Design Recovery",
                            "Code Analysis",
                        ],
                        correct: 2,
                    },
                    {
                        id: 205,
                        question:
                            "Which ISO standard is specifically designed for software process assessment?",
                        options: ["ISO 9001", "ISO 9126", "ISO 15504 (SPICE)", "ISO 27001"],
                        correct: 2,
                    },
                    {
                        id: 206,
                        question:
                            "In cleanroom software engineering, the major emphasis is on:",
                        options: [
                            "Formal specification and correctness proofs",
                            "Rapid prototyping",
                            "Test-driven development",
                            "Agile iterations",
                        ],
                        correct: 0,
                    },
                    {
                        id: 207,
                        question: "The cyclomatic complexity metric is primarily used to:",
                        options: [
                            "Measure program size",
                            "Identify number of execution paths",
                            "Count number of functions",
                            "Estimate coding effort",
                        ],
                        correct: 1,
                    },
                    {
                        id: 208,
                        question:
                            "Which software quality factor in McCall’s model corresponds to the ease of correcting errors?",
                        options: [
                            "Reliability",
                            "Maintainability",
                            "Testability",
                            "Usability",
                        ],
                        correct: 1,
                    },
                    {
                        id: 209,
                        question:
                            "Halstead’s Software Science metrics use which parameters for estimation?",
                        options: [
                            "Lines of Code",
                            "Operators and Operands",
                            "Function Points",
                            "Execution Time",
                        ],
                        correct: 1,
                    },
                    {
                        id: 210,
                        question:
                            "In software project scheduling, a Gantt chart is least effective in showing:",
                        options: [
                            "Task dependencies",
                            "Resource allocation",
                            "Critical path",
                            "Timeline",
                        ],
                        correct: 0,
                    },
                    {
                        id: 211,
                        question:
                            "Which risk management strategy accepts the risk without mitigation but prepares contingency plans?",
                        options: [
                            "Risk Avoidance",
                            "Risk Transfer",
                            "Risk Retention",
                            "Risk Reduction",
                        ],
                        correct: 2,
                    },
                    {
                        id: 212,
                        question: "Formal methods in software engineering rely heavily on:",
                        options: [
                            "Mathematical specifications",
                            "Heuristic rules",
                            "Prototyping",
                            "Simulation models",
                        ],
                        correct: 0,
                    },
                    {
                        id: 213,
                        question:
                            "The Putnam-Norden-Rayleigh curve is used in software engineering to represent:",
                        options: [
                            "Effort distribution over project life cycle",
                            "Number of defects",
                            "Code reuse levels",
                            "Testing effectiveness",
                        ],
                        correct: 0,
                    },
                    {
                        id: 214,
                        question:
                            "Which Agile practice ensures continuous integration and early detection of integration errors?",
                        options: [
                            "Pair Programming",
                            "Daily Stand-ups",
                            "Test-Driven Development",
                            "Continuous Build",
                        ],
                        correct: 3,
                    },
                    {
                        id: 215,
                        question:
                            "In Boehm’s Spiral Model, the primary distinguishing feature is:",
                        options: [
                            "Sequential Phases",
                            "Customer Prototyping",
                            "Risk Analysis at Each Iteration",
                            "Rapid Delivery",
                        ],
                        correct: 2,
                    },
                    {
                        id: 216,
                        question:
                            "Which design principle focuses on minimizing inter-module dependencies?",
                        options: ["Cohesion", "Coupling", "Encapsulation", "Abstraction"],
                        correct: 1,
                    },
                    {
                        id: 217,
                        question:
                            "Which cost estimation technique is based on historical project data and statistical methods?",
                        options: [
                            "Expert Judgment",
                            "Delphi Method",
                            "Algorithmic Models",
                            "Work Breakdown Structure",
                        ],
                        correct: 2,
                    },
                    {
                        id: 218,
                        question:
                            "In black-box testing, equivalence partitioning is used to:",
                        options: [
                            "Divide input data into valid and invalid sets",
                            "Ensure code coverage",
                            "Test boundary values",
                            "Verify internal logic",
                        ],
                        correct: 0,
                    },
                    {
                        id: 219,
                        question: "Which metric best measures software maintainability?",
                        options: [
                            "Cyclomatic Complexity",
                            "Lines of Code",
                            "Number of Test Cases",
                            "Execution Speed",
                        ],
                        correct: 0,
                    },
                    {
                        id: 220,
                        question:
                            "In software process maturity (CMMI), which level is characterized by 'Quantitatively Managed'?",
                        options: ["Level 2", "Level 3", "Level 4", "Level 5"],
                        correct: 2,
                    },
                    {
                        id: 221,
                        question:
                            "Which refactoring technique replaces conditional logic with polymorphism?",
                        options: [
                            "Extract Method",
                            "Replace Type Code with Subclasses",
                            "Move Method",
                            "Encapsulate Field",
                        ],
                        correct: 1,
                    },
                    {
                        id: 222,
                        question:
                            "The concept of 'Technical Debt' in software engineering refers to:",
                        options: [
                            "Code reusability",
                            "Cost of quick fixes that compromise quality",
                            "Budget deficit in projects",
                            "Defects per KLOC",
                        ],
                        correct: 1,
                    },
                    {
                        id: 223,
                        question:
                            "Which architectural style is most suitable for highly scalable, distributed systems?",
                        options: [
                            "Monolithic",
                            "Pipe-and-Filter",
                            "Microservices",
                            "Layered",
                        ],
                        correct: 2,
                    },
                    {
                        id: 224,
                        question: "Mutation testing primarily evaluates:",
                        options: [
                            "Performance",
                            "Test case effectiveness",
                            "Code readability",
                            "System scalability",
                        ],
                        correct: 1,
                    },
                    {
                        id: 225,
                        question:
                            "In software risk analysis, the formula for Risk Exposure (RE) is:",
                        options: [
                            "RE = Probability × Impact",
                            "RE = Cost × Time",
                            "RE = Effort ÷ Size",
                            "RE = Defects ÷ KLOC",
                        ],
                        correct: 0,
                    },
                    {
                        id: 226,
                        question:
                            "The ISO/IEC 9126 quality model defines which six quality attributes?",
                        options: [
                            "Functionality, Reliability, Usability, Efficiency, Maintainability, Portability",
                            "Accuracy, Flexibility, Testability, Scalability, Performance, Security",
                            "Design, Development, Testing, Deployment, Maintenance, Portability",
                            "Reliability, Compatibility, Usability, Scalability, Maintainability, Reusability",
                        ],
                        correct: 0,
                    },
                    {
                        id: 227,
                        question:
                            "Which technique is used in requirements engineering to resolve conflicting stakeholder needs?",
                        options: ["Validation", "Negotiation", "Prototyping", "Inspection"],
                        correct: 1,
                    },
                    {
                        id: 228,
                        question:
                            "The software reliability growth models (SRGM) are mainly applied to estimate:",
                        options: [
                            "Cost Overruns",
                            "Failure Intensity Reduction",
                            "Code Reuse",
                            "Schedule Slippage",
                        ],
                        correct: 1,
                    },
                    {
                        id: 229,
                        question:
                            "The concept of software reuse is most closely aligned with:",
                        options: [
                            "Component-Based Development",
                            "Waterfall Model",
                            "Rapid Application Development",
                            "Big Bang Model",
                        ],
                        correct: 0,
                    },
                    {
                        id: 230,
                        question:
                            "Which risk prioritization technique uses a probability-impact matrix?",
                        options: [
                            "Monte Carlo Simulation",
                            "Decision Tree Analysis",
                            "Risk Assessment Matrix",
                            "Fault Tree Analysis",
                        ],
                        correct: 2,
                    },
                    {
                        id: 231,
                        question:
                            "Which software process model emphasizes prototyping and user feedback?",
                        options: [
                            "Spiral Model",
                            "Incremental Model",
                            "RAD Model",
                            "Waterfall Model",
                        ],
                        correct: 2,
                    },
                    {
                        id: 232,
                        question:
                            "In requirements elicitation, the 'Volere Template' is used for:",
                        options: [
                            "Software Metrics",
                            "Risk Analysis",
                            "Structured Requirement Specification",
                            "Testing Framework",
                        ],
                        correct: 2,
                    },
                    {
                        id: 233,
                        question:
                            "Which principle of Agile Manifesto emphasizes 'Responding to change over following a plan'?",
                        options: [
                            "Customer collaboration",
                            "Individuals and interactions",
                            "Working software",
                            "Adaptability",
                        ],
                        correct: 3,
                    },
                    {
                        id: 234,
                        question:
                            "Defect density in software engineering is calculated as:",
                        options: [
                            "Defects ÷ Effort",
                            "Defects ÷ Size (KLOC)",
                            "Defects ÷ Time",
                            "Defects ÷ Test Cases",
                        ],
                        correct: 1,
                    },
                    {
                        id: 235,
                        question:
                            "Which testing approach is most effective for safety-critical software?",
                        options: [
                            "Alpha Testing",
                            "Beta Testing",
                            "Formal Verification",
                            "Exploratory Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 236,
                        question:
                            "The software metric 'Mean Time Between Failures (MTBF)' is defined as:",
                        options: [
                            "MTBF = MTTF + MTTR",
                            "MTBF = MTTR ÷ MTTF",
                            "MTBF = Defects ÷ Time",
                            "MTBF = Failure Rate × Effort",
                        ],
                        correct: 0,
                    },
                    {
                        id: 237,
                        question:
                            "Which formal specification method is based on set theory and predicate logic?",
                        options: ["UML", "Z-Notation", "Petri Nets", "Statecharts"],
                        correct: 1,
                    },
                    {
                        id: 238,
                        question:
                            "Which CASE tool is most useful for automatic code generation from design models?",
                        options: [
                            "Analysis Tools",
                            "Forward Engineering Tools",
                            "Reverse Engineering Tools",
                            "Maintenance Tools",
                        ],
                        correct: 1,
                    },
                    {
                        id: 239,
                        question:
                            "Which type of software maintenance focuses on adapting the software to new environments?",
                        options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
                        correct: 1,
                    },
                    {
                        id: 240,
                        question:
                            "In configuration management, which item ensures unique identification of software versions?",
                        options: ["Change Control", "Version Control", "Audit", "Baseline"],
                        correct: 3,
                    },
                    {
                        id: 241,
                        question: "What is the main limitation of Function Point Analysis?",
                        options: [
                            "Depends heavily on expert judgment",
                            "Ignores user perspective",
                            "Only applies to procedural languages",
                            "Does not account for system complexity",
                        ],
                        correct: 0,
                    },
                    {
                        id: 242,
                        question:
                            "Which project scheduling algorithm is used to determine the longest path and minimum project time?",
                        options: ["PERT", "CPM", "Monte Carlo Simulation", "Gantt Chart"],
                        correct: 1,
                    },
                    {
                        id: 243,
                        question:
                            "Which software architecture pattern is best suited for systems requiring dynamic component replacement?",
                        options: [
                            "Layered Architecture",
                            "Repository Pattern",
                            "Service-Oriented Architecture",
                            "Plugin Architecture",
                        ],
                        correct: 3,
                    },
                    {
                        id: 244,
                        question:
                            "Which metric evaluates the degree of module independence in software design?",
                        options: ["Coupling", "Cohesion", "Complexity", "Inheritance"],
                        correct: 0,
                    },
                    {
                        id: 245,
                        question:
                            "Which technique is used to reduce the impact of software risks by creating multiple functionally equivalent versions?",
                        options: [
                            "Prototyping",
                            "N-Version Programming",
                            "Simulation",
                            "Regression Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 246,
                        question:
                            "The Goal-Question-Metric (GQM) approach is primarily used for:",
                        options: [
                            "Software Testing",
                            "Software Measurement",
                            "Project Scheduling",
                            "Requirements Engineering",
                        ],
                        correct: 1,
                    },
                    {
                        id: 247,
                        question:
                            "Which defect tracking metric indicates the percentage of defects removed before product release?",
                        options: [
                            "Defect Density",
                            "Defect Removal Efficiency",
                            "Mean Time to Repair",
                            "Failure Intensity",
                        ],
                        correct: 1,
                    },
                    {
                        id: 248,
                        question:
                            "The Capability Maturity Model (CMM) was originally developed by:",
                        options: ["ISO", "SEI at Carnegie Mellon", "IEEE", "PMI"],
                        correct: 1,
                    },
                    {
                        id: 249,
                        question:
                            "Which estimation model uses lines of code as its main input?",
                        options: [
                            "COCOMO",
                            "Function Point",
                            "Putnam Model",
                            "Delphi Method",
                        ],
                        correct: 0,
                    },
                    {
                        id: 250,
                        question:
                            "Which technique is used in requirements engineering to detect inconsistencies, ambiguities, and omissions?",
                        options: ["Inspection", "Prototyping", "Validation", "Interview"],
                        correct: 0,
                    },
                    {
                        id: 351,
                        question:
                            "Which of the following is NOT a type of software maintenance?",
                        options: ["Corrective", "Adaptive", "Preventive", "Creative"],
                        correct: 3,
                    },
                    {
                        id: 352,
                        question:
                            "In Function Point Analysis (FPA), which of the following is considered as an External Input?",
                        options: [
                            "Report generation",
                            "User command input",
                            "Internal file update",
                            "System calculation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 353,
                        question: "What is the main drawback of the Waterfall model?",
                        options: [
                            "Too flexible",
                            "Late detection of errors",
                            "Too costly",
                            "No documentation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 354,
                        question: "The primary goal of software testing is to:",
                        options: [
                            "Prove that software is error-free",
                            "Ensure the software meets user requirements",
                            "Make software run faster",
                            "Reduce development cost",
                        ],
                        correct: 2,
                    },
                    {
                        id: 355,
                        question:
                            "Which estimation technique uses historical data from similar projects?",
                        options: ["COCOMO", "Delphi", "Analogy", "Function Point"],
                        correct: 3,
                    },
                    {
                        id: 356,
                        question:
                            "Which metric measures the complexity of a program’s control structure?",
                        options: [
                            "Halstead Metrics",
                            "Cyclomatic Complexity",
                            "LOC",
                            "Function Points",
                        ],
                        correct: 2,
                    },
                    {
                        id: 357,
                        question:
                            "In risk management, the product of probability and impact is called:",
                        options: [
                            "Risk Exposure",
                            "Risk Threshold",
                            "Risk Factor",
                            "Risk Value",
                        ],
                        correct: 1,
                    },
                    {
                        id: 358,
                        question:
                            "Which of the following is NOT a Black-Box testing method?",
                        options: [
                            "Equivalence Partitioning",
                            "Boundary Value Analysis",
                            "Decision Table Testing",
                            "Control Flow Testing",
                        ],
                        correct: 4,
                    },
                    {
                        id: 359,
                        question: "What does the 'V' in the V-Model represent?",
                        options: [
                            "Verification and Validation",
                            "Visual",
                            "Variation",
                            "Version",
                        ],
                        correct: 1,
                    },
                    {
                        id: 360,
                        question:
                            "Which process ensures continuous improvement in software development?",
                        options: [
                            "CMMI",
                            "Agile Retrospective",
                            "ISO 9001",
                            "All of these",
                        ],
                        correct: 4,
                    },
                    {
                        id: 361,
                        question: "Software Reliability is measured in terms of:",
                        options: [
                            "Errors per Line of Code",
                            "Probability of Failure-Free Operation",
                            "Execution Time",
                            "Usability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 362,
                        question:
                            "Which SDLC model is best suited for developing safety-critical systems?",
                        options: ["Waterfall", "Spiral", "V-Model", "RAD"],
                        correct: 3,
                    },
                    {
                        id: 363,
                        question: "In project scheduling, a task with zero slack is:",
                        options: [
                            "Non-critical task",
                            "Critical task",
                            "Optional task",
                            "Unplanned task",
                        ],
                        correct: 2,
                    },
                    {
                        id: 364,
                        question:
                            "In software quality assurance, 'defect density' is defined as:",
                        options: [
                            "Number of defects per test case",
                            "Number of defects per line of code",
                            "Number of defects per function point",
                            "Number of defects per module",
                        ],
                        correct: 2,
                    },
                    {
                        id: 365,
                        question: "Which one is a measure of software maintainability?",
                        options: [
                            "Coupling",
                            "Cohesion",
                            "Cyclomatic Complexity",
                            "All of these",
                        ],
                        correct: 4,
                    },
                    {
                        id: 366,
                        question: "Which testing is done without executing the code?",
                        options: [
                            "Dynamic Testing",
                            "Static Testing",
                            "System Testing",
                            "Regression Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 367,
                        question: "What is the purpose of configuration management?",
                        options: [
                            "To track project progress",
                            "To control changes in software",
                            "To allocate resources",
                            "To measure reliability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 368,
                        question:
                            "Which Agile practice involves small releases at frequent intervals?",
                        options: [
                            "Pair Programming",
                            "Continuous Integration",
                            "Incremental Delivery",
                            "Refactoring",
                        ],
                        correct: 3,
                    },
                    {
                        id: 369,
                        question: "The difference between validation and verification is:",
                        options: [
                            "Validation ensures product correctness, verification ensures right product built",
                            "Validation checks documents, verification checks code",
                            "Both are same",
                            "Verification is after validation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 370,
                        question:
                            "Which metric is used in COCOMO to represent software size?",
                        options: [
                            "Function Points",
                            "KLOC",
                            "Cyclomatic Complexity",
                            "LOC per Module",
                        ],
                        correct: 2,
                    },
                    {
                        id: 371,
                        question: "Which of these is NOT a risk mitigation strategy?",
                        options: ["Avoidance", "Transfer", "Acceptance", "Compilation"],
                        correct: 4,
                    },
                    {
                        id: 372,
                        question:
                            "Which testing ensures that modified code does not break existing functionality?",
                        options: [
                            "Unit Testing",
                            "Regression Testing",
                            "Integration Testing",
                            "System Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 373,
                        question:
                            "Software quality attributes defined by McCall’s model include:",
                        options: [
                            "Correctness, Reliability, Efficiency",
                            "Security, Complexity, Robustness",
                            "Agility, Portability, Usability",
                            "Only Reliability",
                        ],
                        correct: 1,
                    },
                    {
                        id: 374,
                        question: "In Agile, the product backlog is owned by:",
                        options: [
                            "Scrum Master",
                            "Product Owner",
                            "Development Team",
                            "Stakeholders",
                        ],
                        correct: 2,
                    },
                    {
                        id: 375,
                        question:
                            "Which model is most appropriate when requirements are unclear?",
                        options: ["Waterfall", "Spiral", "V-Model", "Prototyping"],
                        correct: 4,
                    },
                    {
                        id: 376,
                        question: "Which software metric evaluates data flow complexity?",
                        options: [
                            "Halstead",
                            "Cyclomatic",
                            "Function Point",
                            "McCabe’s Metric",
                        ],
                        correct: 2,
                    },
                    {
                        id: 377,
                        question: "In software design, high cohesion means:",
                        options: [
                            "Modules are highly interdependent",
                            "Modules perform a single task well",
                            "Modules are loosely coupled",
                            "Modules reuse maximum code",
                        ],
                        correct: 2,
                    },
                    {
                        id: 378,
                        question: "Which technique is commonly used in White-Box testing?",
                        options: [
                            "Boundary Value Analysis",
                            "Equivalence Partitioning",
                            "Path Coverage",
                            "Decision Table",
                        ],
                        correct: 3,
                    },
                    {
                        id: 379,
                        question: "In project management, a milestone is:",
                        options: ["Deliverable", "Checkpoint", "Task", "Bug Fix"],
                        correct: 2,
                    },
                    {
                        id: 380,
                        question:
                            "Which is NOT a part of the Capability Maturity Model (CMM)?",
                        options: ["Initial", "Repeatable", "Optimizing", "Executable"],
                        correct: 4,
                    },
                    {
                        id: 381,
                        question: "Fault tolerance in software refers to:",
                        options: [
                            "System avoids bugs",
                            "System continues working despite faults",
                            "System with zero bugs",
                            "System avoids redundancy",
                        ],
                        correct: 2,
                    },
                    {
                        id: 382,
                        question: "Which testing focuses on performance under high load?",
                        options: [
                            "Stress Testing",
                            "Regression Testing",
                            "Acceptance Testing",
                            "Smoke Testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 383,
                        question: "Which of these is NOT a principle of Agile?",
                        options: [
                            "Customer collaboration over contract negotiation",
                            "Working software over documentation",
                            "Following a strict plan",
                            "Responding to change",
                        ],
                        correct: 3,
                    },
                    {
                        id: 384,
                        question: "Which is NOT a feature of Extreme Programming (XP)?",
                        options: [
                            "Pair Programming",
                            "Test Driven Development",
                            "Big Design Up Front",
                            "Continuous Integration",
                        ],
                        correct: 3,
                    },
                    {
                        id: 385,
                        question:
                            "Which software process model emphasizes component reuse?",
                        options: ["Spiral", "Component-Based", "RAD", "Prototyping"],
                        correct: 2,
                    },
                    {
                        id: 386,
                        question: "Which one is an example of a functional requirement?",
                        options: [
                            "System response time < 2 sec",
                            "System shall generate monthly reports",
                            "System must be available 24/7",
                            "System shall handle 1000 users",
                        ],
                        correct: 2,
                    },
                    {
                        id: 387,
                        question: "A Gantt chart is primarily used for:",
                        options: [
                            "Risk Management",
                            "Scheduling",
                            "Cost Estimation",
                            "Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 388,
                        question:
                            "Which metric indicates how many modules are affected by a change?",
                        options: [
                            "Cohesion",
                            "Coupling",
                            "Cyclomatic Complexity",
                            "Function Point",
                        ],
                        correct: 2,
                    },
                    {
                        id: 389,
                        question: "Which approach is used to assess software reliability?",
                        options: [
                            "Defect Removal Efficiency",
                            "MTTF (Mean Time To Failure)",
                            "Defect Density",
                            "All of these",
                        ],
                        correct: 4,
                    },
                    {
                        id: 390,
                        question: "Which of the following is NOT an Agile framework?",
                        options: ["Scrum", "Kanban", "XP", "PERT"],
                        correct: 4,
                    },
                    {
                        id: 391,
                        question: "What is the key deliverable of the requirements phase?",
                        options: [
                            "Test Cases",
                            "SRS Document",
                            "Gantt Chart",
                            "Source Code",
                        ],
                        correct: 2,
                    },
                    {
                        id: 392,
                        question:
                            "In software engineering, reverse engineering is done to:",
                        options: [
                            "Recover design from code",
                            "Write new software",
                            "Test legacy system",
                            "Reduce development cost",
                        ],
                        correct: 1,
                    },
                    {
                        id: 393,
                        question: "In project risk management, the first step is:",
                        options: [
                            "Risk Planning",
                            "Risk Identification",
                            "Risk Monitoring",
                            "Risk Mitigation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 394,
                        question:
                            "Which testing technique ensures that every statement in code executes at least once?",
                        options: [
                            "Path Coverage",
                            "Statement Coverage",
                            "Branch Coverage",
                            "Condition Coverage",
                        ],
                        correct: 2,
                    },
                    {
                        id: 395,
                        question:
                            "Which type of maintenance is performed to improve system performance?",
                        options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
                        correct: 3,
                    },
                    {
                        id: 396,
                        question: "Which is NOT a software process activity?",
                        options: [
                            "Software Validation",
                            "Software Design",
                            "Software Evolution",
                            "Software Deployment",
                        ],
                        correct: 4,
                    },
                    {
                        id: 397,
                        question:
                            "Which testing checks interaction between integrated modules?",
                        options: [
                            "Unit Testing",
                            "Integration Testing",
                            "Regression Testing",
                            "System Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 398,
                        question:
                            "Which type of requirement specifies security and performance?",
                        options: ["Functional", "Non-Functional", "System", "Business"],
                        correct: 2,
                    },
                    {
                        id: 399,
                        question: "Which cost estimation model is algorithmic?",
                        options: ["Delphi", "Analogy", "COCOMO", "Wideband Delphi"],
                        correct: 3,
                    },
                    {
                        id: 400,
                        question: "The main purpose of software configuration audit is to:",
                        options: [
                            "Check user satisfaction",
                            "Ensure process compliance",
                            "Verify consistency of configuration items",
                            "Estimate cost",
                        ],
                        correct: 3,
                    },
                    {
                        id: 400,
                        question:
                            "Which of the following is NOT a key principle of software engineering ethics?",
                        options: [
                            "Public",
                            "Client and Employer",
                            "Managerial Profit",
                            "Product",
                        ],
                        correct: 3,
                    },
                    {
                        id: 401,
                        question:
                            "In Cleanroom software engineering, correctness verification is done through:",
                        options: [
                            "Code execution",
                            "Statistical testing",
                            "Formal methods",
                            "Unit testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 402,
                        question:
                            "Which of the following is NOT a layer of the Capability Maturity Model (CMM)?",
                        options: [
                            "Repeatable",
                            "Defined",
                            "Quantitatively Managed",
                            "Optimistic",
                        ],
                        correct: 4,
                    },
                    {
                        id: 403,
                        question: "Agile methodologies strongly discourage:",
                        options: [
                            "Customer collaboration",
                            "Responding to change",
                            "Comprehensive documentation",
                            "Working software",
                        ],
                        correct: 3,
                    },
                    {
                        id: 404,
                        question:
                            "In software testing, mutation testing is primarily used to:",
                        options: [
                            "Check boundary values",
                            "Evaluate test case effectiveness",
                            "Measure reliability",
                            "Reduce redundancy",
                        ],
                        correct: 2,
                    },
                    {
                        id: 405,
                        question:
                            "Which one is NOT a formal software specification technique?",
                        options: [
                            "Z-notation",
                            "Petri Nets",
                            "Finite State Machines",
                            "Spiral Model",
                        ],
                        correct: 4,
                    },
                    {
                        id: 406,
                        question: "What is the main focus of Reliability Growth Models?",
                        options: [
                            "Maintenance cost",
                            "Improvement in fault tolerance",
                            "Failure rate reduction",
                            "Project scheduling",
                        ],
                        correct: 3,
                    },
                    {
                        id: 407,
                        question:
                            "Which of the following risk mitigation strategies transfers risk to another party?",
                        options: [
                            "Risk Avoidance",
                            "Risk Reduction",
                            "Risk Sharing",
                            "Risk Acceptance",
                        ],
                        correct: 3,
                    },
                    {
                        id: 408,
                        question:
                            "In function point analysis, which of the following is NOT a function type?",
                        options: [
                            "External Inputs",
                            "Internal Logical Files",
                            "Decision Nodes",
                            "External Inquiries",
                        ],
                        correct: 3,
                    },
                    {
                        id: 409,
                        question:
                            "Which software process model explicitly includes risk assessment in every iteration?",
                        options: [
                            "Waterfall Model",
                            "V-Model",
                            "Spiral Model",
                            "Incremental Model",
                        ],
                        correct: 3,
                    },
                    {
                        id: 410,
                        question:
                            "Which metric evaluates the complexity of a program based on decision points?",
                        options: [
                            "Halstead Metrics",
                            "Cyclomatic Complexity",
                            "Function Points",
                            "LOC",
                        ],
                        correct: 2,
                    },
                    {
                        id: 411,
                        question: "Reverse engineering in software aims to:",
                        options: [
                            "Develop new software",
                            "Improve performance",
                            "Understand existing system design",
                            "Increase testing efficiency",
                        ],
                        correct: 3,
                    },
                    {
                        id: 412,
                        question:
                            "In software maintenance, perfective maintenance deals with:",
                        options: [
                            "Bug fixing",
                            "Enhancing features",
                            "Adapting to environment changes",
                            "Security patches",
                        ],
                        correct: 2,
                    },
                    {
                        id: 413,
                        question: "Which CASE tool supports automatic code generation?",
                        options: ["Upper CASE", "Lower CASE", "Integrated CASE", "None"],
                        correct: 2,
                    },
                    {
                        id: 414,
                        question: "Formal technical reviews (FTRs) primarily aim at:",
                        options: [
                            "Reducing coding effort",
                            "Finding errors in requirements/design",
                            "Improving user manuals",
                            "Enhancing test coverage",
                        ],
                        correct: 2,
                    },
                    {
                        id: 415,
                        question:
                            "Which of the following is NOT an attribute of software quality as per McCall’s model?",
                        options: [
                            "Reliability",
                            "Portability",
                            "Testability",
                            "Feasibility",
                        ],
                        correct: 4,
                    },
                    {
                        id: 416,
                        question: "The Delone and McLean IS success model measures:",
                        options: [
                            "Cost effectiveness",
                            "Software quality factors",
                            "Information system success",
                            "Risk analysis",
                        ],
                        correct: 3,
                    },
                    {
                        id: 417,
                        question: "A stub in software testing is:",
                        options: [
                            "A partial implementation of a module",
                            "Driver code",
                            "Performance measure",
                            "Automated tool",
                        ],
                        correct: 1,
                    },
                    {
                        id: 418,
                        question: "What is the major disadvantage of the Waterfall model?",
                        options: [
                            "Iteration support",
                            "High flexibility",
                            "Late error detection",
                            "Customer involvement",
                        ],
                        correct: 3,
                    },
                    {
                        id: 419,
                        question: "The Boehm’s spiral model focuses on:",
                        options: [
                            "Risk management",
                            "User interface design",
                            "Database optimization",
                            "Code reuse",
                        ],
                        correct: 1,
                    },
                    {
                        id: 420,
                        question:
                            "Which of the following is NOT part of IEEE software project management activities?",
                        options: [
                            "Project Planning",
                            "Risk Management",
                            "Customer Billing",
                            "Project Monitoring",
                        ],
                        correct: 3,
                    },
                    {
                        id: 421,
                        question: "Regression testing ensures:",
                        options: [
                            "No old functionality is broken",
                            "All modules are complete",
                            "User requirements are clear",
                            "System runs faster",
                        ],
                        correct: 1,
                    },
                    {
                        id: 422,
                        question:
                            "Which method is used for predicting the number of residual faults in a system?",
                        options: [
                            "Reliability growth models",
                            "Cyclomatic complexity",
                            "Function point analysis",
                            "COCOMO",
                        ],
                        correct: 1,
                    },
                    {
                        id: 423,
                        question:
                            "In the PSP (Personal Software Process), the focus is on:",
                        options: [
                            "Team communication",
                            "Individual performance improvement",
                            "Process automation",
                            "Testing automation",
                        ],
                        correct: 2,
                    },
                    {
                        id: 424,
                        question: "IEEE 830 is related to:",
                        options: [
                            "Project Scheduling",
                            "Software Requirements Specification",
                            "Quality Assurance",
                            "Testing Techniques",
                        ],
                        correct: 2,
                    },
                    {
                        id: 425,
                        question: "In agile, a ‘time-boxed’ event refers to:",
                        options: [
                            "Unlimited coding",
                            "Strict deadline duration",
                            "Project termination",
                            "User acceptance",
                        ],
                        correct: 2,
                    },
                    {
                        id: 426,
                        question: "Which one is a black-box testing technique?",
                        options: [
                            "Basis path testing",
                            "Loop testing",
                            "Equivalence partitioning",
                            "Code coverage",
                        ],
                        correct: 3,
                    },
                    {
                        id: 427,
                        question:
                            "Which is the last activity in Software Configuration Management (SCM)?",
                        options: [
                            "Change control",
                            "Version release",
                            "Status reporting",
                            "Auditing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 428,
                        question:
                            "In software engineering, traceability matrix is used for:",
                        options: [
                            "Cost estimation",
                            "Mapping requirements to test cases",
                            "Measuring performance",
                            "Code optimization",
                        ],
                        correct: 2,
                    },
                    {
                        id: 429,
                        question: "The primary aim of re-engineering is:",
                        options: [
                            "To increase LOC",
                            "To enhance maintainability",
                            "To reduce development time",
                            "To increase team size",
                        ],
                        correct: 2,
                    },
                    {
                        id: 430,
                        question: "Which quality model defines 'fitness for purpose'?",
                        options: [
                            "ISO 9126",
                            "McCall’s Model",
                            "Boehm’s Model",
                            "Gilb’s Model",
                        ],
                        correct: 4,
                    },
                    {
                        id: 431,
                        question: "In software estimation, Delphi technique is based on:",
                        options: [
                            "Algorithmic models",
                            "Expert judgment",
                            "Past project data",
                            "Risk analysis",
                        ],
                        correct: 2,
                    },
                    {
                        id: 432,
                        question: "Defect density is defined as:",
                        options: [
                            "Number of defects per test case",
                            "Number of defects per LOC",
                            "Number of defects per day",
                            "Number of defects per function point",
                        ],
                        correct: 2,
                    },
                    {
                        id: 433,
                        question:
                            "Which testing ensures that modules work together correctly?",
                        options: [
                            "Unit testing",
                            "Integration testing",
                            "System testing",
                            "Acceptance testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 434,
                        question:
                            "Which process is used to derive classes and relationships from problem statements?",
                        options: [
                            "Reverse Engineering",
                            "Requirements Elicitation",
                            "Object-Oriented Analysis",
                            "Structural Testing",
                        ],
                        correct: 3,
                    },
                    {
                        id: 435,
                        question:
                            "Which maintenance type modifies the software to keep it usable in a changed environment?",
                        options: ["Adaptive", "Corrective", "Perfective", "Preventive"],
                        correct: 1,
                    },
                    {
                        id: 436,
                        question: "Critical Path Method (CPM) is used for:",
                        options: [
                            "Risk analysis",
                            "Project scheduling",
                            "Code optimization",
                            "Testing",
                        ],
                        correct: 2,
                    },
                    {
                        id: 437,
                        question: "Which of the following is NOT an agile framework?",
                        options: ["Scrum", "Kanban", "Extreme Programming", "PERT"],
                        correct: 4,
                    },
                    {
                        id: 438,
                        question:
                            "Which model is most suitable when requirements are very well understood?",
                        options: ["Waterfall", "Spiral", "Agile", "Prototype"],
                        correct: 1,
                    },
                    {
                        id: 439,
                        question: "In software risk analysis, risk exposure = ?",
                        options: [
                            "Probability × Impact",
                            "Effort × LOC",
                            "Defects × Time",
                            "Failure × Complexity",
                        ],
                        correct: 1,
                    },
                    {
                        id: 440,
                        question:
                            "Formal inspections are generally more effective than testing for:",
                        options: [
                            "Syntax errors",
                            "Design flaws",
                            "Performance issues",
                            "Integration bugs",
                        ],
                        correct: 2,
                    },
                    {
                        id: 441,
                        question:
                            "Which of the following is NOT a principle of software testing?",
                        options: [
                            "Testing shows presence of defects",
                            "Exhaustive testing is possible",
                            "Defects cluster together",
                            "Pesticide paradox",
                        ],
                        correct: 2,
                    },
                    {
                        id: 442,
                        question:
                            "Which metric measures how easy it is to modify software?",
                        options: [
                            "Reliability",
                            "Maintainability",
                            "Usability",
                            "Portability",
                        ],
                        correct: 2,
                    },
                    {
                        id: 443,
                        question: "The Pareto principle in defect analysis suggests:",
                        options: [
                            "80% defects are due to 20% modules",
                            "Defects are evenly spread",
                            "Defects are random",
                            "Defects always come from new code",
                        ],
                        correct: 1,
                    },
                    {
                        id: 444,
                        question:
                            "Which of the following is NOT part of software configuration management?",
                        options: [
                            "Version control",
                            "Change management",
                            "Test case design",
                            "Build management",
                        ],
                        correct: 3,
                    },
                    {
                        id: 445,
                        question: "In software engineering, cohesion refers to:",
                        options: [
                            "Degree of dependency between modules",
                            "Degree of relatedness within a module",
                            "Code reusability",
                            "Testing efficiency",
                        ],
                        correct: 2,
                    },
                    {
                        id: 446,
                        question: "Which of the following is NOT a project risk?",
                        options: [
                            "Schedule slippage",
                            "Poor team skills",
                            "Requirement volatility",
                            "Code complexity",
                        ],
                        correct: 4,
                    },
                    {
                        id: 447,
                        question:
                            "Which of the following is a preventive measure in software maintenance?",
                        options: [
                            "Bug fixing",
                            "Code refactoring",
                            "Adding new features",
                            "Porting software",
                        ],
                        correct: 2,
                    },
                    {
                        id: 448,
                        question: "A key challenge of distributed software development is:",
                        options: [
                            "Time zone differences",
                            "Same infrastructure",
                            "Less cost",
                            "Easier testing",
                        ],
                        correct: 1,
                    },
                    {
                        id: 449,
                        question: "What does the acronym CASE stand for?",
                        options: [
                            "Computer-Aided Software Engineering",
                            "Control Application Software Execution",
                            "Centralized Application Software Evaluation",
                            "Coding and Software Estimation",
                        ],
                        correct: 1,
                    },
                    {
                        id: 450,
                        question: "Which is NOT a principle of agile development?",
                        options: [
                            "Early and continuous delivery",
                            "Embracing change",
                            "Comprehensive documentation",
                            "Customer collaboration",
                        ],
                        correct: 3,
                    },
                ],
            },
        },
    },
    "Cyber Security & Ethics": {
        color: "#F43F5E",
        subtopics: {
            "Threats: virus, worm, trojan, ransomware, phishing, social engineering":
            {
                color: "#F43F5E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea":
            {
                color: "#A855F7",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 1,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "Safe browsing, email hygiene, password policies, digital footprint": {
                color: "#22C55E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Safe browsing, email hygiene, password policies, digital footprint?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "Indian context: IT Act, 2000 (overview) and digital privacy awareness": {
                color: "#4F46E5",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 3,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 2,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 3,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
        },
    },
    "MS Office & Practical ICT": {
        color: "#A855F7",
        subtopics: {
            "MS Word: formatting, tables, mail merge basics": {
                color: "#A855F7",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 3,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 1,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 2,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about MS Word: formatting, tables, mail merge basics?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 1,
                    },
                ],
            },
            "MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation":
            {
                color: "#22C55E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 1,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 3,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
            "MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene":
            {
                color: "#4F46E5",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 3,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 0,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 2,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 3,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "File management: compression, PDFs, print settings, shortcuts": {
                color: "#3B82F6",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 2,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about File management: compression, PDFs, print settings, shortcuts?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 1,
                    },
                ],
            },
        },
    },
    "General Awareness / Reasoning (If Included)": {
        color: "#22C55E",
        subtopics: {
            "Current affairs (national/state), general science basics": {
                color: "#22C55E",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 1,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 3,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 1,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 0,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 3,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Current affairs (national/state), general science basics?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 0,
                    },
                ],
            },
            "State GK (e.g., Bihar history, geography, polity, economy, schemes)": {
                color: "#4F46E5",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 1,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 3,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 0,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 1,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 0,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 0,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 2,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 1,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 2,
                    },
                ],
            },
            "Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics":
            {
                color: "#3B82F6",
                questions: [
                    {
                        id: 1,
                        question:
                            "1. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A1", "Option B1", "Option C1", "Option D1"],
                        correct: 0,
                    },
                    {
                        id: 2,
                        question:
                            "2. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A2", "Option B2", "Option C2", "Option D2"],
                        correct: 0,
                    },
                    {
                        id: 3,
                        question:
                            "3. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A3", "Option B3", "Option C3", "Option D3"],
                        correct: 0,
                    },
                    {
                        id: 4,
                        question:
                            "4. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A4", "Option B4", "Option C4", "Option D4"],
                        correct: 2,
                    },
                    {
                        id: 5,
                        question:
                            "5. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A5", "Option B5", "Option C5", "Option D5"],
                        correct: 2,
                    },
                    {
                        id: 6,
                        question:
                            "6. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A6", "Option B6", "Option C6", "Option D6"],
                        correct: 3,
                    },
                    {
                        id: 7,
                        question:
                            "7. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A7", "Option B7", "Option C7", "Option D7"],
                        correct: 3,
                    },
                    {
                        id: 8,
                        question:
                            "8. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A8", "Option B8", "Option C8", "Option D8"],
                        correct: 1,
                    },
                    {
                        id: 9,
                        question:
                            "9. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A9", "Option B9", "Option C9", "Option D9"],
                        correct: 0,
                    },
                    {
                        id: 10,
                        question:
                            "10. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?",
                        options: ["Option A10", "Option B10", "Option C10", "Option D10"],
                        correct: 3,
                    },
                ],
            },
        },
    },
};

export default chapters;
