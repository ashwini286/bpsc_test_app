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
                    { id: 1, question: "Which of the following is NOT a characteristic of a computer?", options: ["Speed", "Intelligence", "Accuracy", "Automation"], correct: 2 },
  { id: 2, question: "Which characteristic of computers allows them to perform tasks without fatigue?", options: ["Speed", "Automation", "Diligence", "Versatility"], correct: 3 },
  { id: 3, question: "The ability of a computer to perform different types of tasks is called:", options: ["Versatility", "Accuracy", "Reliability", "Speed"], correct: 1 },
  { id: 4, question: "Which of the following is a limitation of computers?", options: ["Automation", "No emotions", "High speed", "Accuracy"], correct: 2 },
  { id: 5, question: "Which characteristic ensures that computers can repeat the same task without errors?", options: ["Versatility", "Reliability", "Diligence", "Intelligence"], correct: 3 },
  { id: 6, question: "Which is an application of computers in the field of education?", options: ["E-learning platforms", "Weather forecasting", "Online banking", "Robotics"], correct: 1 },
  { id: 7, question: "The first generation of computers used:", options: ["Vacuum tubes", "Transistors", "Microprocessors", "Integrated Circuits"], correct: 1 },
  { id: 8, question: "Which generation of computers introduced transistors?", options: ["First", "Second", "Third", "Fourth"], correct: 2 },
  { id: 9, question: "Microprocessors were used in which generation of computers?", options: ["Second", "Third", "Fourth", "Fifth"], correct: 3 },
  { id: 10, question: "Fifth generation computers are based on:", options: ["Vacuum tubes", "Artificial Intelligence", "Integrated Circuits", "Microprocessors"], correct: 2 },
  { id: 11, question: "Which of the following is a characteristic of computers?", options: ["Emotions", "Decision making", "Accuracy", "Self-learning"], correct: 3 },
  { id: 12, question: "In which generation were Integrated Circuits introduced?", options: ["Second", "Third", "Fourth", "Fifth"], correct: 2 },
  { id: 13, question: "Which of the following is NOT an application of computers?", options: ["Medical diagnosis", "Banking", "Cooking", "Gaming"], correct: 3 },
  { id: 14, question: "The reliability of computers is due to:", options: ["Diligence", "Versatility", "Speed", "Accuracy"], correct: 1 },
  { id: 15, question: "The fourth generation of computers used:", options: ["Vacuum tubes", "Transistors", "Microprocessors", "Artificial Intelligence"], correct: 3 },
  { id: 16, question: "Which of the following is an application of computers in healthcare?", options: ["E-banking", "CT Scans", "Stock trading", "Robotics"], correct: 2 },
  { id: 17, question: "Which of the following is an application of computers in business?", options: ["Simulation of surgeries", "Payroll management", "Weather forecasting", "Entertainment"], correct: 2 },
  { id: 18, question: "Which generation is known for AI and natural language processing?", options: ["First", "Second", "Fourth", "Fifth"], correct: 4 },
  { id: 19, question: "Which generation used vacuum tubes and was large in size?", options: ["First", "Second", "Third", "Fourth"], correct: 1 },
  { id: 20, question: "The speed of computers is measured in:", options: ["Liters", "Gigahertz", "Lumens", "Calories"], correct: 2 },
  { id: 21, question: "Which of these is a disadvantage of first-generation computers?", options: ["Small size", "High cost", "Low electricity consumption", "Portable"], correct: 2 },
  { id: 22, question: "Which generation of computers marked the use of High-Level Languages?", options: ["First", "Second", "Third", "Fourth"], correct: 2 },
  { id: 23, question: "Which of these is an application of computers in weather forecasting?", options: ["Cloud computing", "Numerical models", "Online exams", "E-commerce"], correct: 2 },
  { id: 24, question: "Computers can process data:", options: ["Sequentially only", "Both sequentially and parallelly", "Randomly only", "Manually"], correct: 2 },
  { id: 25, question: "Which characteristic ensures that computers give the same result for the same input?", options: ["Accuracy", "Versatility", "Reliability", "Speed"], correct: 1 },
  { id: 26, question: "Supercomputers are mainly used for:", options: ["Word processing", "Scientific simulations", "Gaming", "Accounting"], correct: 2 },
  { id: 27, question: "Mainframes are primarily used for:", options: ["Personal computing", "Large-scale transaction processing", "Gaming", "Education"], correct: 2 },
  { id: 28, question: "Mini computers were introduced in which generation?", options: ["First", "Second", "Third", "Fourth"], correct: 3 },
  { id: 29, question: "Which of these is a fifth-generation computer characteristic?", options: ["Use of vacuum tubes", "AI applications", "Punch cards", "Magnetic drum memory"], correct: 2 },
  { id: 30, question: "Which of these is an application of computers in defense?", options: ["Payroll management", "Missile guidance", "Gaming", "Entertainment"], correct: 2 },
  { id: 31, question: "Which of the following best describes computer accuracy?", options: ["Never makes mistakes", "Low error rate if programmed correctly", "Can think logically", "Always makes mistakes"], correct: 2 },
  { id: 32, question: "Which is the smallest generation computer?", options: ["First", "Second", "Fourth", "Fifth"], correct: 4 },
  { id: 33, question: "Which of the following is a portable computer?", options: ["Mainframe", "Mini computer", "Laptop", "Supercomputer"], correct: 3 },
  { id: 34, question: "Which is a key feature of second-generation computers?", options: ["Vacuum tubes", "Magnetic core memory", "Integrated Circuits", "AI"], correct: 2 },
  { id: 35, question: "Which type of computers are used for weather prediction?", options: ["Microcomputers", "Supercomputers", "Mainframes", "Mini computers"], correct: 2 },
  { id: 36, question: "Which generation of computers first used keyboards and monitors?", options: ["First", "Second", "Third", "Fourth"], correct: 3 },
  { id: 37, question: "The fifth generation of computers is based on:", options: ["Neural networks and AI", "Vacuum tubes", "Transistors", "Integrated Circuits"], correct: 1 },
  { id: 38, question: "Which of the following is an application of computers in transport?", options: ["Ticket booking systems", "Payroll management", "Gaming", "Cooking"], correct: 1 },
  { id: 39, question: "First generation computers used which type of memory?", options: ["Magnetic drums", "Cache", "Microchips", "CD-ROM"], correct: 1 },
  { id: 40, question: "Which of the following is an application of computers in communication?", options: ["Email", "Cooking", "Driving", "Painting"], correct: 1 },
  { id: 41, question: "Which characteristic of computers is related to handling large volumes of data?", options: ["Versatility", "Storage", "Automation", "Diligence"], correct: 2 },
  { id: 42, question: "Which generation used Very Large Scale Integration (VLSI)?", options: ["Second", "Third", "Fourth", "Fifth"], correct: 3 },
  { id: 43, question: "Which application of computers is used in retail?", options: ["POS systems", "Missile guidance", "Weather simulation", "Surgery"], correct: 1 },
  { id: 44, question: "Which generation marked the beginning of portable computers?", options: ["Second", "Third", "Fourth", "Fifth"], correct: 3 },
  { id: 45, question: "Which of the following is a limitation of computers?", options: ["Speed", "Automation", "No decision-making ability", "Accuracy"], correct: 3 },
  { id: 46, question: "Which characteristic makes computers useful in banking?", options: ["Accuracy in calculations", "Cooking ability", "Entertainment features", "Emotions"], correct: 1 },
  { id: 47, question: "Which is the major advancement in the third generation?", options: ["Vacuum tubes", "Transistors", "Integrated Circuits", "AI"], correct: 3 },
  { id: 48, question: "Which of the following is NOT a fifth-generation feature?", options: ["AI", "Natural language processing", "Microprocessors", "Vacuum tubes"], correct: 4 },
  { id: 49, question: "Which generation is associated with machine learning and expert systems?", options: ["First", "Second", "Fourth", "Fifth"], correct: 4 },
  { id: 50, question: "Which of the following is an application of computers in entertainment?", options: ["Video games", "Banking", "Surgery", "Weather forecasting"], correct: 1 },
                ],
            },
            "Types of computers: analog, digital, hybrid; micro/mini/mainframe": {
                color: "#3B82F6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Types of computers: analog, digital, hybrid; micro/mini/mainframe?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Computer architecture (CPU, ALU, CU), system vs application software": {
                color: "#6366F1",
                questions: [{ 'id': 1, 'question': '1. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Computer architecture (CPU, ALU, CU), system vs application software?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Input/Output devices and storage devices; ports and interfaces": {
                color: "#8B5CF6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Input/Output devices and storage devices; ports and interfaces?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)": {
                color: "#F97316",
                questions: [{ 'id': 1, 'question': '1. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Memory hierarchy: cache, RAM, ROM, secondary storage; units (bit–GB)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
            "NoSQL": {
                color: "#6EE7B7",
                questions :[
                    { id: 1, question: "Which NoSQL database is document-oriented?", options: ["MongoDB", "Redis", "Cassandra", "Neo4j"], correct: 0 },
                    { id: 2, question: "Which algorithm is used for process scheduling in Operating Systems?", options: ["FCFS", "RSA", "AES", "CRC"], correct: 0 },
                    { id: 3, question: "Which model is also known as the Verification and Validation model?", options: ["Waterfall", "V-Model", "Spiral", "Prototype"], correct: 1 },
                    { id: 4, question: "In Networking, which layer is responsible for logical addressing?", options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], correct: 2 },
                    { id: 5, question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
                    { id: 6, question: "Which is the first activity in Software Development Life Cycle (SDLC)?", options: ["Coding", "Testing", "Requirement Analysis", "Maintenance"], correct: 2 },
                    { id: 7, question: "Which protocol is used to send emails?", options: ["HTTP", "SMTP", "FTP", "SNMP"], correct: 1 },
                    { id: 8, question: "Which of the following is a non-preemptive scheduling algorithm?", options: ["Round Robin", "Shortest Job First (SJF)", "Priority Scheduling", "Multilevel Queue"], correct: 1 },
                    { id: 9, question: "Which key uniquely identifies a record in a table?", options: ["Foreign Key", "Primary Key", "Super Key", "Composite Key"], correct: 1 },
                    { id: 10, question: "In Spiral model, each loop represents?", options: ["Coding", "Testing", "Phase", "Module"], correct: 2 },
                    { id: 11, question: "Which device connects two different networks?", options: ["Switch", "Hub", "Router", "Repeater"], correct: 2 },
                    { id: 12, question: "Which scheduling algorithm may cause starvation?", options: ["FCFS", "SJF", "Round Robin", "FIFO"], correct: 1 },
                    { id: 13, question: "Which type of testing checks the entire system as a whole?", options: ["Unit Testing", "System Testing", "Integration Testing", "Regression Testing"], correct: 1 },
                    { id: 14, question: "Which SQL command is used to remove a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], correct: 2 },
                    { id: 15, question: "Which OS is used in mobile devices widely?", options: ["Windows", "Linux", "Android", "Unix"], correct: 2 },
                    { id: 16, question: "Which protocol is connection-oriented?", options: ["UDP", "IP", "TCP", "ICMP"], correct: 2 },
                    { id: 17, question: "Which data structure is used in recursion?", options: ["Queue", "Stack", "Array", "Linked List"], correct: 1 },
                    { id: 18, question: "Which SDLC model is best for large projects with unclear requirements?", options: ["Waterfall", "Spiral", "V-Model", "Incremental"], correct: 1 },
                    { id: 19, question: "Which of the following is a DDL command?", options: ["INSERT", "UPDATE", "DELETE", "CREATE"], correct: 3 },
                    { id: 20, question: "Which network topology has a single point of failure?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 2 },
                    { id: 21, question: "Which OS concept allows multiple users to use the system simultaneously?", options: ["Multiprogramming", "Multithreading", "Time Sharing", "Batch Processing"], correct: 2 },
                    { id: 22, question: "Which is NOT a type of software maintenance?", options: ["Corrective", "Adaptive", "Preventive", "Preemptive"], correct: 3 },
                    { id: 23, question: "Which protocol translates domain names to IP addresses?", options: ["HTTP", "FTP", "DNS", "SMTP"], correct: 2 },
                    { id: 24, question: "Which level of data abstraction describes how the data is actually stored?", options: ["Physical Level", "Logical Level", "View Level", "Conceptual Level"], correct: 0 },
                    { id: 25, question: "Which type of testing ensures new changes don’t break existing functionality?", options: ["Unit Testing", "System Testing", "Regression Testing", "Integration Testing"], correct: 2 },
                    { id: 26, question: "Which OS manages deadlock using the Banker's Algorithm?", options: ["Windows", "Linux", "Unix", "All of the above"], correct: 3 },
                    { id: 27, question: "Which SDLC model delivers software in small parts?", options: ["Waterfall", "Prototype", "Incremental", "V-Model"], correct: 2 },
                    { id: 28, question: "Which device operates at Data Link Layer?", options: ["Router", "Switch", "Hub", "Gateway"], correct: 1 },
                    { id: 29, question: "Which command is used to remove all rows from a table but keeps the structure?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correct: 2 },
                    { id: 30, question: "Which of the following is a real-time OS?", options: ["Linux", "Windows", "VxWorks", "MS-DOS"], correct: 2 },
                    { id: 31, question: "Which network device works on all 7 layers of OSI?", options: ["Hub", "Switch", "Gateway", "Bridge"], correct: 2 },
                    { id: 32, question: "Which technique avoids deadlock by pre-allocating resources?", options: ["Preemption", "Banker’s Algorithm", "Hold and Wait", "Safe State"], correct: 1 },
                    { id: 33, question: "Which SQL clause is used to group rows?", options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"], correct: 2 },
                    { id: 34, question: "Which software model uses RAD (Rapid Application Development)?", options: ["Waterfall", "Agile", "Spiral", "Prototyping"], correct: 3 },
                    { id: 35, question: "Which network topology is used in Ethernet?", options: ["Ring", "Bus", "Star", "Mesh"], correct: 1 },
                    { id: 36, question: "Which OS concept creates the illusion of multiple processes running?", options: ["Scheduling", "Virtual Memory", "Multitasking", "Deadlock"], correct: 2 },
                    { id: 37, question: "Which testing is performed by end users?", options: ["Unit Testing", "System Testing", "Acceptance Testing", "Regression Testing"], correct: 2 },
                    { id: 38, question: "Which SQL command is used to change table structure?", options: ["ALTER", "UPDATE", "DROP", "TRUNCATE"], correct: 0 },
                    { id: 39, question: "Which OSI layer is responsible for encryption?", options: ["Application Layer", "Session Layer", "Presentation Layer", "Transport Layer"], correct: 2 },
                    { id: 40, question: "Which process scheduling algorithm gives each process equal time?", options: ["SJF", "FCFS", "Round Robin", "Priority Scheduling"], correct: 2 },
                    { id: 41, question: "Which symbol is used in E-R diagrams to represent attributes?", options: ["Rectangle", "Ellipse", "Diamond", "Line"], correct: 1 },
                    { id: 42, question: "Which software model uses sprints and iterations?", options: ["Waterfall", "Agile", "Spiral", "V-Model"], correct: 1 },
                    { id: 43, question: "Which addressing is used by IPv6?", options: ["32-bit", "64-bit", "128-bit", "256-bit"], correct: 2 },
                    { id: 44, question: "Which type of OS is MS-DOS?", options: ["Multi-user", "Single-user", "Distributed", "Real-time"], correct: 1 },
                    { id: 45, question: "Which SQL function is used to count rows?", options: ["SUM()", "AVG()", "COUNT()", "MAX()"], correct: 2 },
                    { id: 46, question: "Which is a functional requirement of software?", options: ["Performance", "Scalability", "User Authentication", "Usability"], correct: 2 },
                    { id: 47, question: "Which topology provides the highest fault tolerance?", options: ["Bus", "Star", "Ring", "Mesh"], correct: 3 },
                    { id: 48, question: "Which OSI layer establishes, manages, and terminates sessions?", options: ["Session Layer", "Transport Layer", "Network Layer", "Data Link Layer"], correct: 0 },
                    { id: 49, question: "Which SQL command is used to remove duplicate rows?", options: ["UNIQUE", "PRIMARY KEY", "DISTINCT", "DELETE"], correct: 2 },
                    { id: 50, question: "Which model emphasizes risk analysis at each phase?", options: ["Waterfall", "V-Model", "Spiral", "Incremental"], correct: 2 }
                ],

            }
        }
    },
    "Number Systems & Digital Logic": {
        color: "#3B82F6",
        subtopics: {
            "Number systems: binary, decimal, octal, hexadecimal; conversions": {
                color: "#3B82F6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Number systems: binary, decimal, octal, hexadecimal; conversions?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Binary arithmetic: addition, subtraction (1’s/2’s complement basics)": {
                color: "#6366F1",
                questions: [{ 'id': 1, 'question': '1. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Binary arithmetic: addition, subtraction (1’s/2’s complement basics)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables": {
                color: "#8B5CF6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Logic gates: AND, OR, NOT, NAND, NOR, XOR; truth tables?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Boolean expressions simplification idea (intro level)": {
                color: "#F97316",
                questions: [{ 'id': 1, 'question': '1. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Boolean expressions simplification idea (intro level)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
        }
    },
    "Operating Systems": {
        color: "#6366F1",
        subtopics: {
            "Functions of OS; user interface concepts": {
                color: "#6366F1",
                questions: [{ 'id': 1, 'question': '1. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Functions of OS; user interface concepts?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Types of OS: batch, time-sharing, real-time, distributed (overview)": {
                color: "#8B5CF6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Types of OS: batch, time-sharing, real-time, distributed (overview)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Files/folders, file extensions, basic permissions": {
                color: "#F97316",
                questions: [{ 'id': 1, 'question': '1. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Files/folders, file extensions, basic permissions?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Process and memory management basics; CPU scheduling idea": {
                color: "#10B981",
                questions: [{ 'id': 1, 'question': '1. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Process and memory management basics; CPU scheduling idea?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Deadlock concept (simple), virtual memory idea": {
                color: "#14B8A6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Deadlock concept (simple), virtual memory idea?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 1 }],
            },
        }
    },
    "Database Management System (DBMS)": {
        color: "#8B5CF6",
        subtopics: {
            "Need for databases vs file systems; RDBMS concepts": {
                color: "#8B5CF6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Need for databases vs file systems; RDBMS concepts?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Data model basics: tables, rows, columns; schema": {
                color: "#F97316",
                questions: [{ 'id': 1, 'question': '1. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Data model basics: tables, rows, columns; schema?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 1 }],
            },
            "Keys: primary, candidate, foreign; constraints": {
                color: "#10B981",
                questions: [{ 'id': 1, 'question': '1. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Keys: primary, candidate, foreign; constraints?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "SQL basics: SELECT, WHERE, ORDER BY, DISTINCT, simple JOIN; INSERT/UPDATE/DELETE": {
                color: "#14B8A6",
                questions: [
                    { id: 1, question: "Which keyword is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "SHOW"], correct: 1 },
                    { id: 2, question: "Which clause filters rows?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 0 },
                    { id: 3, question: "Which SQL statement removes a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], correct: 2 },
                    { id: 4, question: "Which function counts rows?", options: ["SUM()", "COUNT()", "TOTAL()", "ROWS()"], correct: 1 },
                    { id: 5, question: "Which join returns all rows from both tables?", options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "RIGHT JOIN"], correct: 1 },
                    { id: 6, question: "Which clause groups rows?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 2 },
                    { id: 7, question: "Which statement removes all rows but keeps the table?", options: ["DROP", "DELETE", "TRUNCATE", "CLEAR"], correct: 2 },
                    { id: 8, question: "Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Unique Key", "Index"], correct: 1 },
                    { id: 9, question: "Which command changes table structure?", options: ["ALTER", "MODIFY", "UPDATE", "CHANGE"], correct: 0 },
                    { id: 10, question: "Which function returns the largest value?", options: ["MAX()", "HIGH()", "TOP()", "LARGEST()"], correct: 0 },
                    { id: 11, question: "Which clause is used after GROUP BY to filter?", options: ["HAVING", "WHERE", "FILTER", "CONDITION"], correct: 0 },
                    { id: 12, question: "Which index type enforces uniqueness?", options: ["Normal", "Primary", "Unique", "Clustered"], correct: 2 },
                    { id: 13, question: "Which keyword sorts results?", options: ["ORDER BY", "SORT", "GROUP BY", "ARRANGE"], correct: 0 },
                    { id: 14, question: "Which statement updates data?", options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"], correct: 1 },
                    { id: 15, question: "Which data type stores variable-length strings?", options: ["CHAR", "VARCHAR", "TEXT", "STRING"], correct: 1 }

                ],
            },
            "Normalization overview: 1NF–3NF (idea only)": {
                color: "#0EA5E9",
                questions: [{ 'id': 1, 'question': '1. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Normalization overview: 1NF–3NF (idea only)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
        }
    },
    "Computer Networks & Internet": {
        color: "#F97316",
        subtopics: {
            "Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)": {
                color: "#F97316",
                questions: [{ 'id': 1, 'question': '1. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Types: PAN, LAN, MAN, WAN; topologies (bus, star, ring)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "OSI and TCP/IP model idea; what each layer does (simple mapping)": {
                color: "#10B981",
                questions: [{ 'id': 1, 'question': '1. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about OSI and TCP/IP model idea; what each layer does (simple mapping)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP": {
                color: "#14B8A6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Protocols: IP, TCP/UDP, HTTP/HTTPS, FTP, SMTP/POP/IMAP, DNS, DHCP?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
            "IP addressing basics, URL/domain concepts, client–server": {
                color: "#0EA5E9",
                questions: [{ 'id': 1, 'question': '1. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about IP addressing basics, URL/domain concepts, client–server?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
            "Network devices: hub, switch, router, modem, access point": {
                color: "#D946EF",
                questions: [{ 'id': 1, 'question': '1. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Network devices: hub, switch, router, modem, access point?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 1 }],
            },
            "Internet services: web, email, cloud storage; browsers, search basics": {
                color: "#F43F5E",
                questions: [{ 'id': 1, 'question': '1. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Internet services: web, email, cloud storage; browsers, search basics?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
        }
    },
    "Programming Fundamentals & OOP": {
        color: "#10B981",
        subtopics: {
            "Algorithms, flowcharts, pseudocode (intro)": {
                color: "#10B981",
                questions: [{ 'id': 1, 'question': '1. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Algorithms, flowcharts, pseudocode (intro)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Concepts: variables, data types, operators, expressions, I/O": {
                color: "#14B8A6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Concepts: variables, data types, operators, expressions, I/O?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Control structures: sequence, selection, loops": {
                color: "#0EA5E9",
                questions: [{ 'id': 1, 'question': '1. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Control structures: sequence, selection, loops?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Functions/procedures; basic arrays and strings": {
                color: "#D946EF",
                questions: [{ 'id': 1, 'question': '1. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Functions/procedures; basic arrays and strings?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Language exposure: C/C++/Java basics (syntax recognition)": {
                color: "#F43F5E",
                questions: [{ 'id': 1, 'question': '1. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Language exposure: C/C++/Java basics (syntax recognition)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)": {
                color: "#A855F7",
                questions: [{ 'id': 1, 'question': '1. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about OOP basics: class, object, encapsulation, inheritance, polymorphism (examples)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
        }
    },
    "Data Structures (Essential Basics)": {
        color: "#14B8A6",
        subtopics: {
            "Linear structures: arrays, stacks, queues (concept and simple operations)": {
                color: "#14B8A6",
                questions: [{ 'id': 1, 'question': '1. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Linear structures: arrays, stacks, queues (concept and simple operations)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Non-linear overview: trees (binary tree idea), graphs (concept)": {
                color: "#0EA5E9",
                questions: [{ 'id': 1, 'question': '1. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Non-linear overview: trees (binary tree idea), graphs (concept)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)": {
                color: "#D946EF",
                questions: [{ 'id': 1, 'question': '1. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about Searching and sorting: linear, binary search; bubble/insertion/selection (concepts)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
        }
    },
    "Web Technologies": {
        color: "#0EA5E9",
        subtopics: {
            "HTML structure (tags, forms), CSS basics (selectors, box model idea)": {
                color: "#0EA5E9",
                questions: [{ 'id': 1, 'question': '1. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about HTML structure (tags, forms), CSS basics (selectors, box model idea)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
            "JavaScript basics: variables, events; simple DOM concept": {
                color: "#D946EF",
                questions: [{ 'id': 1, 'question': '1. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about JavaScript basics: variables, events; simple DOM concept?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "HTTP methods (GET/POST), cookies/sessions idea": {
                color: "#F43F5E",
                questions: [{ 'id': 1, 'question': '1. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about HTTP methods (GET/POST), cookies/sessions idea?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
            },
            "WWW, browsers, URLs": {
                color: "#A855F7",
                questions: [{ 'id': 1, 'question': '1. Sample question about WWW, browsers, URLs?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about WWW, browsers, URLs?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about WWW, browsers, URLs?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about WWW, browsers, URLs?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about WWW, browsers, URLs?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about WWW, browsers, URLs?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about WWW, browsers, URLs?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about WWW, browsers, URLs?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about WWW, browsers, URLs?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about WWW, browsers, URLs?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
        }
    },
    "Software Engineering": {
        color: "#D946EF",
        subtopics: {
            "SDLC models: Waterfall vs Agile (Scrum roles idea)": {
                color: "#D946EF",
                questions: [{ 'id': 1, 'question': '1. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about SDLC models: Waterfall vs Agile (Scrum roles idea)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "Requirements, design (modularity), implementation (version control idea)": {
                color: "#F43F5E",
                questions: [{ 'id': 1, 'question': '1. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Requirements, design (modularity), implementation (version control idea)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Testing: unit, integration, system, acceptance (overview)": {
                color: "#A855F7",
                questions: [{ 'id': 1, 'question': '1. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 2 }, { 'id': 2, 'question': '2. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Testing: unit, integration, system, acceptance (overview)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
            },
            "Maintenance types": {
                color: "#22C55E",
                questions: [{ 'id': 1, 'question': '1. Sample question about Maintenance types?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Maintenance types?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 2 }, { 'id': 3, 'question': '3. Sample question about Maintenance types?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about Maintenance types?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Maintenance types?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Maintenance types?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about Maintenance types?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Maintenance types?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Maintenance types?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Maintenance types?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
            },
            "mix of concepts": {
                color: "#F59E0B",
                questions: [
                    { id: 1, question: "Which SDLC model is risk-driven?", options: ["Waterfall", "Spiral", "V-Model", "Incremental"], correct: 1 },
                    { id: 2, question: "Which diagram represents the dynamic behavior of a system?", options: ["Use Case Diagram", "Class Diagram", "Sequence Diagram", "Deployment Diagram"], correct: 2 },
                    { id: 3, question: "Which model is also called the Verification and Validation model?", options: ["Waterfall", "Spiral", "V-Model", "Prototype"], correct: 2 },
                    { id: 4, question: "Black box testing is related to:", options: ["Functional Testing", "Structural Testing", "Performance Testing", "Unit Testing"], correct: 0 },
                    { id: 5, question: "Which one is not a software development life cycle model?", options: ["Spiral Model", "Prototype Model", "Agile Model", "Compile Model"], correct: 3 },
                    { id: 6, question: "Which of the following is not a type of software maintenance?", options: ["Corrective", "Preventive", "Adaptive", "Evaluative"], correct: 3 },
                    { id: 7, question: "Which of the following is an example of a non-functional requirement?", options: ["Performance", "Login functionality", "Registration form", "Payment gateway"], correct: 0 },
                    { id: 8, question: "Which metric measures software size?", options: ["Cyclomatic Complexity", "LOC (Lines of Code)", "Defect Density", "MTTF"], correct: 1 },
                    { id: 9, question: "Which testing technique uses the control structure of a program?", options: ["Black Box Testing", "White Box Testing", "System Testing", "Acceptance Testing"], correct: 1 },
                    { id: 10, question: "Which phase of SDLC defines ‘what’ the system should do?", options: ["Design Phase", "Requirement Analysis", "Implementation", "Testing"], correct: 1 },
                    { id: 11, question: "Which document defines the scope of a project?", options: ["SRS (Software Requirement Specification)", "Design Document", "Test Plan", "User Manual"], correct: 0 },
                    { id: 12, question: "Which of the following is not a software process model?", options: ["Waterfall Model", "Spiral Model", "Prototype Model", "Pipe Model"], correct: 3 },
                    { id: 13, question: "In COCOMO, what does 'O' stand for?", options: ["Optimized", "Objective", "Organic", "Operational"], correct: 2 },
                    { id: 14, question: "Who is considered the father of software engineering?", options: ["Alan Turing", "Watts Humphrey", "Barry Boehm", "Boehm"], correct: 1 },
                    { id: 15, question: "Which testing ensures that changes do not affect existing functionality?", options: ["Unit Testing", "Regression Testing", "Integration Testing", "System Testing"], correct: 1 },
                    { id: 16, question: "Which is not a software quality attribute?", options: ["Reliability", "Maintainability", "Usability", "Compatibility"], correct: 3 },
                    { id: 17, question: "Which diagram in UML represents object interactions with time sequence?", options: ["Use Case", "Sequence Diagram", "Class Diagram", "State Diagram"], correct: 1 },
                    { id: 18, question: "Agile methodology follows:", options: ["Iterative and Incremental Development", "Waterfall Approach", "Linear Approach", "Big Bang Model"], correct: 0 },
                    { id: 19, question: "Which is not a software engineering principle?", options: ["Abstraction", "Encapsulation", "Overloading", "Guessing"], correct: 3 },
                    { id: 20, question: "Which is not a valid software risk?", options: ["Staff turnover", "Changing requirements", "Power failure", "Design improvement"], correct: 3 },
                    { id: 21, question: "The Spiral model was proposed by:", options: ["Watts Humphrey", "Barry Boehm", "Bjarne Stroustrup", "James Gosling"], correct: 1 },
                    { id: 22, question: "Which one is not a software testing type?", options: ["Unit Testing", "Integration Testing", "Acceptance Testing", "Replication Testing"], correct: 3 },
                    { id: 23, question: "SRS stands for:", options: ["Software Requirement Specification", "System Requirement Specification", "Software Result Summary", "System Result Specification"], correct: 0 },
                    { id: 24, question: "Which SDLC model is also called the Big Bang model?", options: ["Waterfall", "Prototype", "Ad-hoc", "Agile"], correct: 2 },
                    { id: 25, question: "Which testing is performed first?", options: ["Integration Testing", "Unit Testing", "System Testing", "Acceptance Testing"], correct: 1 },
                    { id: 26, question: "Which software engineering concept divides large problems into small parts?", options: ["Abstraction", "Modularity", "Polymorphism", "Inheritance"], correct: 1 },
                    { id: 27, question: "Which process model uses rapid development of prototypes?", options: ["Spiral Model", "Prototype Model", "Waterfall Model", "Agile Model"], correct: 1 },
                    { id: 28, question: "The main focus of white-box testing is:", options: ["Behavior", "Structure", "User Interface", "Output"], correct: 1 },
                    { id: 29, question: "Which one is not part of feasibility study?", options: ["Technical Feasibility", "Operational Feasibility", "Financial Feasibility", "Design Feasibility"], correct: 3 },
                    { id: 30, question: "The number of linearly independent paths in a program is:", options: ["Cyclomatic Complexity", "Defect Density", "Cohesion", "Coupling"], correct: 0 },
                    { id: 31, question: "Which of the following is not a functional requirement?", options: ["Data storage", "Security", "Transaction management", "Report generation"], correct: 1 },
                    { id: 32, question: "Which is not a black box testing technique?", options: ["Boundary Value Analysis", "Equivalence Partitioning", "Cause-Effect Graphing", "Statement Coverage"], correct: 3 },
                    { id: 33, question: "Which tool is used for version control?", options: ["Git", "JIRA", "Jenkins", "Selenium"], correct: 0 },
                    { id: 34, question: "What is the first phase of SDLC?", options: ["Design", "Requirement Analysis", "Coding", "Testing"], correct: 1 },
                    { id: 35, question: "Which model is best suited for small projects?", options: ["Agile", "Waterfall", "Spiral", "V-Model"], correct: 1 },
                    { id: 36, question: "Which is not a project management tool?", options: ["PERT", "Gantt Chart", "DFD", "CPM"], correct: 2 },
                    { id: 37, question: "Which diagram shows data flow in a system?", options: ["ER Diagram", "DFD", "Class Diagram", "Use Case"], correct: 1 },
                    { id: 38, question: "Which metric measures program complexity?", options: ["Cyclomatic Complexity", "LOC", "MTTF", "CMM"], correct: 0 },
                    { id: 39, question: "Which is not a software testing level?", options: ["Unit", "Integration", "Regression", "System"], correct: 2 },
                    { id: 40, question: "Which testing checks the whole system?", options: ["Unit Testing", "System Testing", "Integration Testing", "Regression Testing"], correct: 1 },
                    { id: 41, question: "Which quality model is defined by McCall?", options: ["CMM", "ISO 9126", "FURPS", "McCall’s model"], correct: 3 },
                    { id: 42, question: "Which is not a software development activity?", options: ["Coding", "Testing", "Debugging", "Hacking"], correct: 3 },
                    { id: 43, question: "Which one is not an Agile framework?", options: ["Scrum", "XP", "Kanban", "PERT"], correct: 3 },
                    { id: 44, question: "Which diagram is used for database design?", options: ["Use Case", "ER Diagram", "Class Diagram", "State Diagram"], correct: 1 },
                    { id: 45, question: "Which testing checks whether the software meets business needs?", options: ["Acceptance Testing", "Unit Testing", "System Testing", "Integration Testing"], correct: 0 },
                    { id: 46, question: "Which of the following is not a software evolution activity?", options: ["Development", "Maintenance", "Re-engineering", "Operation"], correct: 0 },
                    { id: 47, question: "What is software reliability?", options: ["Probability of failure", "Probability of success", "Probability of failure-free operation", "System availability"], correct: 2 },
                    { id: 48, question: "Which one is not a UML diagram?", options: ["Sequence Diagram", "State Diagram", "Flowchart", "Use Case Diagram"], correct: 2 },
                    { id: 49, question: "Which model is also known as the linear sequential model?", options: ["Spiral", "Waterfall", "Prototype", "Agile"], correct: 1 },
                    { id: 50, question: "Which testing ensures individual components work correctly?", options: ["Unit Testing", "Integration Testing", "System Testing", "Regression Testing"], correct: 0 },
                    { id: 51, question: "Which layer of OSI model is responsible for logical addressing?", options: ["Application", "Transport", "Network", "Data Link"], correct: 2 },
                    { id: 52, question: "In ER modeling, the rectangle represents?", options: ["Entity", "Attribute", "Relationship", "Primary Key"], correct: 0 },
                    { id: 53, question: "Which scheduling algorithm may cause starvation?", options: ["FCFS", "SJF", "Round Robin", "Priority"], correct: 1 },
                    { id: 54, question: "Which database language is used to query and retrieve data?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                    { id: 55, question: "In software testing, alpha testing is performed by?", options: ["Developers", "End users", "Testers", "Customers"], correct: 0 },
                    { id: 56, question: "Which of the following is not a type of DBMS?", options: ["Hierarchical", "Relational", "Network", "Rotational"], correct: 3 },
                    { id: 57, question: "TCP is a ______ protocol?", options: ["Connection-oriented", "Connectionless", "Unreliable", "Stateless"], correct: 0 },
                    { id: 58, question: "Which of the following is not a software metric?", options: ["LOC", "Cyclomatic Complexity", "CMMI", "Function Point"], correct: 2 },
                    { id: 59, question: "Thrashing occurs when?", options: ["CPU utilization is low", "Page fault rate is high", "Disk space is full", "Deadlock occurs"], correct: 1 },
                    { id: 60, question: "Which key uniquely identifies a record in a table?", options: ["Foreign Key", "Candidate Key", "Primary Key", "Composite Key"], correct: 2 },
                    { id: 61, question: "Which software development model uses small incremental builds?", options: ["Spiral", "Incremental", "Waterfall", "V-Model"], correct: 1 },
                    { id: 62, question: "SMTP is used for?", options: ["File Transfer", "Email Transfer", "Remote Login", "Web Browsing"], correct: 1 },
                    { id: 63, question: "Deadlock prevention ensures?", options: ["Circular wait never occurs", "Mutual exclusion is removed", "Hold and wait is allowed", "Starvation never occurs"], correct: 0 },
                    { id: 64, question: "Which normal form removes partial dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
                    { id: 65, question: "Which of the following is a white-box testing technique?", options: ["Boundary Value", "Equivalence Partitioning", "Path Testing", "Usability Testing"], correct: 2 },
                    { id: 66, question: "In OSI model, data encryption is performed at?", options: ["Application Layer", "Session Layer", "Presentation Layer", "Transport Layer"], correct: 2 },
                    { id: 67, question: "Which concurrency control technique uses timestamps?", options: ["Locking", "Wait-die", "Timestamp Ordering", "Two-phase commit"], correct: 2 },
                    { id: 68, question: "Which CPU scheduling is preemptive?", options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "Priority (non-preemptive)"], correct: 2 },
                    { id: 69, question: "Which symbol in ER diagram represents a relationship?", options: ["Oval", "Rectangle", "Diamond", "Line"], correct: 2 },
                    { id: 70, question: "In software testing, beta testing is done by?", options: ["Internal users", "External users", "Developers", "Test team"], correct: 1 },
                    { id: 71, question: "Which protocol is used for secure communication over the internet?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correct: 1 },
                    { id: 72, question: "In paging, the address generated by CPU is called?", options: ["Logical address", "Physical address", "Virtual address", "Mapped address"], correct: 0 },
                    { id: 73, question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 2 },
                    { id: 74, question: "Which of these is not a black-box testing technique?", options: ["Boundary Value", "Decision Table", "Cause-effect Graphing", "Code Coverage"], correct: 3 },
                    { id: 75, question: "Which OSI layer ensures error-free delivery?", options: ["Physical", "Data Link", "Network", "Transport"], correct: 3 },
                    { id: 76, question: "Which transaction property ensures all-or-nothing execution?", options: ["Consistency", "Durability", "Atomicity", "Isolation"], correct: 2 },
                    { id: 77, question: "Critical section problem is related to?", options: ["Deadlock", "Process Synchronization", "Memory Management", "CPU Scheduling"], correct: 1 },
                    { id: 78, question: "Which testing ensures that changes do not affect existing features?", options: ["Unit Testing", "Integration Testing", "Regression Testing", "System Testing"], correct: 2 },
                    { id: 79, question: "IPV6 address size is?", options: ["32-bit", "64-bit", "128-bit", "256-bit"], correct: 2 },
                    { id: 80, question: "Which database key can have null values?", options: ["Primary Key", "Candidate Key", "Foreign Key", "Super Key"], correct: 2 },
                    { id: 81, question: "Spiral model emphasizes on?", options: ["Risk Analysis", "Prototyping", "Documentation", "Maintenance"], correct: 0 },
                    { id: 82, question: "Which layer of TCP/IP is equivalent to OSI Network layer?", options: ["Transport", "Internet", "Application", "Session"], correct: 1 },
                    { id: 83, question: "Belady’s anomaly is related to?", options: ["Deadlock", "Paging", "Segmentation", "Thrashing"], correct: 1 },
                    { id: 84, question: "Which of the following is not a DDL command?", options: ["CREATE", "ALTER", "DELETE", "DROP"], correct: 2 },
                    { id: 85, question: "Which of the following is not part of verification?", options: ["Reviews", "Inspections", "Walkthroughs", "Beta Testing"], correct: 3 },
                    { id: 86, question: "Which device connects two networks of different protocols?", options: ["Router", "Bridge", "Gateway", "Switch"], correct: 2 },
                    { id: 87, question: "Which memory is volatile?", options: ["ROM", "RAM", "Hard Disk", "Flash"], correct: 1 },
                    { id: 88, question: "In DBMS, ACID properties ensure?", options: ["Security", "Consistency", "Performance", "Availability"], correct: 1 },
                    { id: 89, question: "Which testing checks the interface between modules?", options: ["Unit Testing", "System Testing", "Integration Testing", "Alpha Testing"], correct: 2 },
                    { id: 90, question: "Which layer of OSI model is responsible for routing?", options: ["Transport", "Network", "Data Link", "Session"], correct: 1 },
                    { id: 91, question: "Banker's algorithm is used for?", options: ["Deadlock Detection", "Deadlock Prevention", "Deadlock Avoidance", "Deadlock Recovery"], correct: 2 },
                    { id: 92, question: "Which SQL clause is used to filter rows?", options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"], correct: 0 },
                    { id: 93, question: "Which testing is performed without executing code?", options: ["Dynamic", "Static", "System", "Integration"], correct: 1 },
                    { id: 94, question: "Which is the transport layer protocol for DNS?", options: ["TCP", "UDP", "Both TCP & UDP", "ICMP"], correct: 2 },
                    { id: 95, question: "LRU is a ______ replacement algorithm?", options: ["Page", "Process", "Memory", "Disk"], correct: 0 },
                    { id: 96, question: "Which key uniquely identifies a tuple in relational DB?", options: ["Foreign Key", "Primary Key", "Super Key", "Composite Key"], correct: 1 },
                    { id: 97, question: "Which SDLC phase involves feasibility study?", options: ["Design", "Analysis", "Planning", "Maintenance"], correct: 2 },
                    { id: 98, question: "Which device works at data link layer?", options: ["Hub", "Router", "Switch", "Gateway"], correct: 2 },
                    { id: 99, question: "Which OS is multitasking?", options: ["MS-DOS", "Windows", "CP/M", "None"], correct: 1 },
                    { id: 100, question: "Which SQL command is used to remove all rows from a table but not structure?", options: ["DELETE", "DROP", "TRUNCATE", "ALTER"], correct: 2 },
                    { id: 101, question: "Which layer of OSI model is responsible for logical addressing?", options: ["Data Link", "Network", "Transport", "Session"], correct: 1 },
                    { id: 102, question: "Deadlock can be prevented by:", options: ["Mutual exclusion", "Circular wait", "Resource ordering", "Preemption disabled"], correct: 2 },
                    { id: 103, question: "In DBMS, normalization is used to:", options: ["Reduce redundancy", "Increase redundancy", "Improve speed only", "Remove indexes"], correct: 0 },
                    { id: 104, question: "Which scheduling algorithm may cause starvation?", options: ["Round Robin", "FIFO", "SJF", "Priority"], correct: 2 },
                    { id: 105, question: "Software reliability is measured in terms of:", options: ["MTBF", "MIPS", "Throughput", "Response time"], correct: 0 },
                    { id: 106, question: "TCP is a:", options: ["Connection-oriented protocol", "Connectionless protocol", "Both", "None"], correct: 0 },
                    { id: 107, question: "In DBMS, ACID stands for:", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Clarity, Integrity, Durability", "Atomic, Concurrent, Independent, Database", "None"], correct: 0 },
                    { id: 108, question: "Which OS uses time-sharing?", options: ["Batch OS", "Multiprogramming OS", "Real-time OS", "Time-sharing OS"], correct: 3 },
                    { id: 109, question: "Software testing technique without executing the code is:", options: ["White box", "Black box", "Static testing", "Dynamic testing"], correct: 2 },
                    { id: 110, question: "IPV6 address size is:", options: ["32-bit", "64-bit", "128-bit", "256-bit"], correct: 2 },
                    { id: 111, question: "The banker’s algorithm is used for:", options: ["Scheduling", "Deadlock prevention", "Deadlock avoidance", "Page replacement"], correct: 2 },
                    { id: 112, question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 2 },
                    { id: 113, question: "Which layer handles encryption?", options: ["Application", "Presentation", "Session", "Transport"], correct: 1 },
                    { id: 114, question: "Which type of software is system software?", options: ["Compiler", "DBMS", "ERP", "Browser"], correct: 0 },
                    { id: 115, question: "Paging is used in:", options: ["Segmentation", "Virtual memory", "Cache", "Registers"], correct: 1 },
                    { id: 116, question: "Which protocol provides email services?", options: ["HTTP", "SMTP", "FTP", "SNMP"], correct: 1 },
                    { id: 117, question: "White box testing focuses on:", options: ["Internal structure", "Functionality", "User interface", "System performance"], correct: 0 },
                    { id: 118, question: "Thrashing occurs when:", options: ["High CPU utilization", "High paging", "Low memory", "Deadlock"], correct: 1 },
                    { id: 119, question: "In ER diagram, rectangle represents:", options: ["Entity", "Attribute", "Relation", "Primary key"], correct: 0 },
                    { id: 120, question: "In OSI model, transport layer ensures:", options: ["Error detection only", "End-to-end delivery", "Encoding", "Routing"], correct: 1 },
                    { id: 121, question: "Software process model that has no feedback path:", options: ["Waterfall", "Spiral", "Incremental", "Agile"], correct: 0 },
                    { id: 122, question: "Which indexing method uses B-tree?", options: ["Dense index", "Sparse index", "Hierarchical index", "Balanced tree index"], correct: 3 },
                    { id: 123, question: "Virtual memory is managed by:", options: ["Compiler", "CPU", "OS", "Database"], correct: 2 },
                    { id: 124, question: "Which topology has a central node?", options: ["Bus", "Ring", "Star", "Mesh"], correct: 2 },
                    { id: 125, question: "Black box testing is also called:", options: ["Structural testing", "Behavioral testing", "Unit testing", "Path testing"], correct: 1 },
                    { id: 126, question: "Deadlock necessary condition NOT required is:", options: ["Hold and wait", "Mutual exclusion", "Circular wait", "Preemption"], correct: 3 },
                    { id: 127, question: "DBMS concurrency control prevents:", options: ["Data redundancy", "Data inconsistency", "Data loss only", "Deadlock"], correct: 1 },
                    { id: 128, question: "Which OS scheduling is fair for all processes?", options: ["Round Robin", "SJF", "Priority", "FIFO"], correct: 0 },
                    { id: 129, question: "Which protocol translates domain names to IP?", options: ["ARP", "DNS", "ICMP", "DHCP"], correct: 1 },
                    { id: 130, question: "CMM stands for:", options: ["Capability Maturity Model", "Computer Model Method", "Capability Measure Model", "Control Model Mechanism"], correct: 0 },
                    { id: 131, question: "Thrashing reduces:", options: ["CPU utilization", "Paging", "Throughput", "Both CPU utilization and throughput"], correct: 3 },
                    { id: 132, question: "Which is a strong entity?", options: ["Employee with ID", "Weak dependent entity", "Composite attribute", "Multivalued attribute"], correct: 0 },
                    { id: 133, question: "Which device breaks network into multiple collision domains?", options: ["Hub", "Switch", "Repeater", "Bridge"], correct: 1 },
                    { id: 134, question: "In testing, alpha testing is done by:", options: ["End users", "Developers", "Testers in lab", "None"], correct: 2 },
                    { id: 135, question: "Page replacement algorithm optimal is:", options: ["LRU", "FIFO", "Optimal", "Clock"], correct: 2 },
                    { id: 136, question: "In DBMS, candidate key is:", options: ["Superkey", "Foreign key", "Primary key only", "Unique key only"], correct: 0 },
                    { id: 137, question: "OSI model has:", options: ["5 layers", "6 layers", "7 layers", "8 layers"], correct: 2 },
                    { id: 138, question: "Which is an example of open-source DBMS?", options: ["Oracle", "MySQL", "MS SQL Server", "DB2"], correct: 1 },
                    { id: 139, question: "Disk scheduling algorithm minimizing seek time:", options: ["FCFS", "SSTF", "SCAN", "C-SCAN"], correct: 1 },
                    { id: 140, question: "Which test is performed first?", options: ["Integration", "Unit", "System", "Acceptance"], correct: 1 },
                    { id: 141, question: "UDP is:", options: ["Reliable and fast", "Unreliable and fast", "Reliable and slow", "Unreliable and slow"], correct: 1 },
                    { id: 142, question: "Which dependency is partial?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 1 },
                    { id: 143, question: "RAID is used for:", options: ["Redundancy", "Speed", "Both Redundancy and Speed", "None"], correct: 2 },
                    { id: 144, question: "Which layer provides flow control?", options: ["Data link", "Network", "Transport", "Session"], correct: 2 },
                    { id: 145, question: "Testing that ensures new code doesn’t break old code:", options: ["Regression", "Unit", "Alpha", "Beta"], correct: 0 },
                    { id: 146, question: "Critical section problem arises in:", options: ["Single process", "Multiple processes", "Single thread", "None"], correct: 1 },
                    { id: 147, question: "Which SQL command is used to remove a table?", options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], correct: 2 },
                    { id: 148, question: "Which is not a guided media?", options: ["Coaxial cable", "Fiber optics", "Microwave", "Twisted pair"], correct: 2 },
                    { id: 149, question: "Software quality factor NOT included is:", options: ["Correctness", "Maintainability", "Integrity", "Decoration"], correct: 3 },
                    { id: 150, question: "Which algorithm is used for shortest path?", options: ["Dijkstra", "Kruskal", "Prim", "Floyd"], correct: 0 },
                    { id: 151, question: "Which model is known as the linear sequential model?", options: ["Spiral Model", "Waterfall Model", "Incremental Model", "RAD Model"], correct: 1 },
                    { id: 152, question: "In software engineering, SRS stands for?", options: ["System Requirement Standards", "Software Requirement Specification", "System Resource Specification", "Software Review Standard"], correct: 1 },
                    { id: 153, question: "Which is not a software process model?", options: ["Waterfall", "Spiral", "Agile", "Networking"], correct: 3 },
                    { id: 154, question: "Which of these is not a software development activity?", options: ["Design", "Coding", "Testing", "Networking"], correct: 3 },
                    { id: 155, question: "RAD stands for?", options: ["Rapid Application Development", "Random Application Design", "Rapid Analysis Development", "Required Application Documentation"], correct: 0 },
                    { id: 156, question: "Which model is best suited when requirements are well defined?", options: ["Spiral Model", "Waterfall Model", "RAD Model", "Agile Model"], correct: 1 },
                    { id: 157, question: "Agile development emphasizes?", options: ["Comprehensive documentation", "Customer collaboration", "Strict process adherence", "Sequential design"], correct: 1 },
                    { id: 158, question: "Which one is not an Agile method?", options: ["Scrum", "XP", "Kanban", "Waterfall"], correct: 3 },
                    { id: 159, question: "The main purpose of requirement analysis is?", options: ["To design database", "To gather and understand user needs", "To write test cases", "To develop prototypes"], correct: 1 },
                    { id: 160, question: "SRS should be?", options: ["Ambiguous", "Unclear", "Complete and consistent", "Inconsistent"], correct: 2 },
                    { id: 161, question: "Prototyping model is useful when?", options: ["Requirements are not clear", "Requirements are stable", "Project is very small", "System is already defined"], correct: 0 },
                    { id: 162, question: "In software engineering, coupling refers to?", options: ["Dependency between modules", "Size of module", "Reusability", "Complexity of algorithm"], correct: 0 },
                    { id: 163, question: "In software design, cohesion means?", options: ["Internal consistency of a module", "Dependency on other modules", "Code reusability", "Data redundancy"], correct: 0 },
                    { id: 164, question: "Which model is also known as Evolutionary process model?", options: ["Waterfall", "Spiral", "V-Model", "RAD"], correct: 1 },
                    { id: 165, question: "Black box testing is based on?", options: ["Internal code structure", "System requirements", "Control paths", "Algorithms"], correct: 1 },
                    { id: 166, question: "White box testing focuses on?", options: ["External behavior", "Code structure", "User requirements", "Documentation"], correct: 1 },
                    { id: 167, question: "Which is not a type of software testing?", options: ["Unit Testing", "Integration Testing", "System Testing", "Threading Testing"], correct: 3 },
                    { id: 168, question: "Verification ensures that?", options: ["Software meets user needs", "Software is built correctly", "System performance is optimized", "Documentation is complete"], correct: 1 },
                    { id: 169, question: "Validation ensures that?", options: ["Software meets user expectations", "Software is bug-free", "System is well designed", "Software has no redundancy"], correct: 0 },
                    { id: 170, question: "Alpha testing is performed by?", options: ["End users", "Developers at site", "Developers at organization", "Independent testing team"], correct: 2 },
                    { id: 171, question: "Beta testing is carried out by?", options: ["System designers", "Selected external users", "Developers", "Project managers"], correct: 1 },
                    { id: 172, question: "Which is not a maintenance activity?", options: ["Corrective", "Adaptive", "Perfective", "Prototyping"], correct: 3 },
                    { id: 173, question: "Software quality is defined as?", options: ["User interface design", "Conformance to requirements", "Performance only", "Cost of development"], correct: 1 },
                    { id: 174, question: "CMM stands for?", options: ["Capability Maturity Model", "Computer Management Model", "Cost Management Model", "Critical Module Model"], correct: 0 },
                    { id: 175, question: "Which level of CMM indicates ‘Defined’ process?", options: ["Level 1", "Level 2", "Level 3", "Level 4"], correct: 2 },
                    { id: 176, question: "Which one is not a risk management activity?", options: ["Risk identification", "Risk analysis", "Risk planning", "Risk marketing"], correct: 3 },
                    { id: 177, question: "The spiral model was proposed by?", options: ["Pressman", "Boehm", "Watts Humphrey", "Royce"], correct: 1 },
                    { id: 178, question: "Which of these is not a CASE tool?", options: ["Project planning", "Design", "Coding", "Debugger"], correct: 3 },
                    { id: 179, question: "Which software metric measures program size?", options: ["LOC", "Cyclomatic Complexity", "Function Points", "Defect Density"], correct: 0 },
                    { id: 180, question: "Cyclomatic complexity is used to measure?", options: ["Size", "Control flow complexity", "Data dependency", "Reusability"], correct: 1 },
                    { id: 181, question: "Which is not a software quality model?", options: ["McCall", "Boehm", "ISO 9126", "OSI"], correct: 3 },
                    { id: 182, question: "Which of these is a non-functional requirement?", options: ["Performance", "Login Functionality", "File Upload", "Search Feature"], correct: 0 },
                    { id: 183, question: "Software re-engineering is?", options: ["Rewriting software from scratch", "Improving existing software", "Bug fixing only", "Coding new modules"], correct: 1 },
                    { id: 184, question: "CASE tools are used for?", options: ["Only coding", "Automating software development activities", "System installation", "Hardware testing"], correct: 1 },
                    { id: 185, question: "Configuration management ensures?", options: ["Version control", "Code optimization", "Team performance", "Testing quality"], correct: 0 },
                    { id: 186, question: "Reverse engineering is?", options: ["Developing new software", "Analyzing existing system", "Bug fixing", "Testing only"], correct: 1 },
                    { id: 187, question: "Forward engineering means?", options: ["Moving from design to code", "Analyzing code", "Rebuilding from old system", "Debugging"], correct: 0 },
                    { id: 188, question: "Which testing is performed first?", options: ["System testing", "Unit testing", "Integration testing", "Acceptance testing"], correct: 1 },
                    { id: 189, question: "Stress testing focuses on?", options: ["Functionality", "Extreme load conditions", "Usability", "Security"], correct: 1 },
                    { id: 190, question: "Regression testing is done to?", options: ["Check new features", "Verify old functionality after changes", "Test security", "Check performance"], correct: 1 },
                    { id: 191, question: "Which model combines development and testing?", options: ["Waterfall", "V-Model", "Spiral", "RAD"], correct: 1 },
                    { id: 192, question: "Which is not a black box testing technique?", options: ["Equivalence Partitioning", "Boundary Value Analysis", "State Transition", "Path Coverage"], correct: 3 },
                    { id: 193, question: "Which is not a white box testing technique?", options: ["Path Coverage", "Loop Testing", "Condition Testing", "System Testing"], correct: 3 },
                    { id: 194, question: "Which metric measures defect density?", options: ["LOC", "Number of defects / size", "Cyclomatic complexity", "Function points"], correct: 1 },
                    { id: 195, question: "ISO 9001 is related to?", options: ["Project management", "Quality assurance", "System design", "Coding"], correct: 1 },
                    { id: 196, question: "Which of these is not a software maintenance type?", options: ["Preventive", "Adaptive", "Perfective", "Generative"], correct: 3 },
                    { id: 197, question: "Which one is a software reliability model?", options: ["Jelinski-Moranda", "Boehm", "McCall", "CMM"], correct: 0 },
                    { id: 198, question: "Which is not a part of software project management?", options: ["Planning", "Scheduling", "Coding", "Monitoring"], correct: 2 },
                    { id: 199, question: "Which one ensures correctness of software?", options: ["Verification & Validation", "Coding", "Maintenance", "Testing only"], correct: 0 },
                    { id: 200, question: "Which metric is used for software complexity?", options: ["Cyclomatic Complexity", "LOC", "Function Points", "Execution Time"], correct: 0 },
                    {
                        id: 200,
                        question: "In Function Point Analysis (FPA), which factor is most critical in determining the complexity adjustment value?",
                        options: ["External Inputs", "General System Characteristics", "Internal Logical Files", "External Interface Files"],
                        correct: 1
                    },
                    {
                        id: 201,
                        question: "Which COCOMO model is best suited for projects with unprecedented systems and high innovation?",
                        options: ["Organic", "Semi-Detached", "Embedded", "Post-Architecture"],
                        correct: 2
                    },
                    {
                        id: 202,
                        question: "In software architecture, the '4+1' view model by Kruchten emphasizes:",
                        options: ["Four implementation layers and one data layer", "Use cases driving five concurrent views", "Four quality attributes and one performance metric", "Five modules with layered interactions"],
                        correct: 1
                    },
                    {
                        id: 203,
                        question: "Which testing method is best for verifying concurrency issues in a multi-threaded application?",
                        options: ["Regression Testing", "Mutation Testing", "Stress Testing", "Race Condition Testing"],
                        correct: 3
                    },
                    {
                        id: 204,
                        question: "In reverse engineering, which activity focuses on abstracting higher-level design from existing code?",
                        options: ["Restructuring", "Redocumentation", "Design Recovery", "Code Analysis"],
                        correct: 2
                    },
                    {
                        id: 205,
                        question: "Which ISO standard is specifically designed for software process assessment?",
                        options: ["ISO 9001", "ISO 9126", "ISO 15504 (SPICE)", "ISO 27001"],
                        correct: 2
                    },
                    {
                        id: 206,
                        question: "In cleanroom software engineering, the major emphasis is on:",
                        options: ["Formal specification and correctness proofs", "Rapid prototyping", "Test-driven development", "Agile iterations"],
                        correct: 0
                    },
                    {
                        id: 207,
                        question: "The cyclomatic complexity metric is primarily used to:",
                        options: ["Measure program size", "Identify number of execution paths", "Count number of functions", "Estimate coding effort"],
                        correct: 1
                    },
                    {
                        id: 208,
                        question: "Which software quality factor in McCall’s model corresponds to the ease of correcting errors?",
                        options: ["Reliability", "Maintainability", "Testability", "Usability"],
                        correct: 1
                    },
                    {
                        id: 209,
                        question: "Halstead’s Software Science metrics use which parameters for estimation?",
                        options: ["Lines of Code", "Operators and Operands", "Function Points", "Execution Time"],
                        correct: 1
                    },
                    {
                        id: 210,
                        question: "In software project scheduling, a Gantt chart is least effective in showing:",
                        options: ["Task dependencies", "Resource allocation", "Critical path", "Timeline"],
                        correct: 0
                    },
                    {
                        id: 211,
                        question: "Which risk management strategy accepts the risk without mitigation but prepares contingency plans?",
                        options: ["Risk Avoidance", "Risk Transfer", "Risk Retention", "Risk Reduction"],
                        correct: 2
                    },
                    {
                        id: 212,
                        question: "Formal methods in software engineering rely heavily on:",
                        options: ["Mathematical specifications", "Heuristic rules", "Prototyping", "Simulation models"],
                        correct: 0
                    },
                    {
                        id: 213,
                        question: "The Putnam-Norden-Rayleigh curve is used in software engineering to represent:",
                        options: ["Effort distribution over project life cycle", "Number of defects", "Code reuse levels", "Testing effectiveness"],
                        correct: 0
                    },
                    {
                        id: 214,
                        question: "Which Agile practice ensures continuous integration and early detection of integration errors?",
                        options: ["Pair Programming", "Daily Stand-ups", "Test-Driven Development", "Continuous Build"],
                        correct: 3
                    },
                    {
                        id: 215,
                        question: "In Boehm’s Spiral Model, the primary distinguishing feature is:",
                        options: ["Sequential Phases", "Customer Prototyping", "Risk Analysis at Each Iteration", "Rapid Delivery"],
                        correct: 2
                    },
                    {
                        id: 216,
                        question: "Which design principle focuses on minimizing inter-module dependencies?",
                        options: ["Cohesion", "Coupling", "Encapsulation", "Abstraction"],
                        correct: 1
                    },
                    {
                        id: 217,
                        question: "Which cost estimation technique is based on historical project data and statistical methods?",
                        options: ["Expert Judgment", "Delphi Method", "Algorithmic Models", "Work Breakdown Structure"],
                        correct: 2
                    },
                    {
                        id: 218,
                        question: "In black-box testing, equivalence partitioning is used to:",
                        options: ["Divide input data into valid and invalid sets", "Ensure code coverage", "Test boundary values", "Verify internal logic"],
                        correct: 0
                    },
                    {
                        id: 219,
                        question: "Which metric best measures software maintainability?",
                        options: ["Cyclomatic Complexity", "Lines of Code", "Number of Test Cases", "Execution Speed"],
                        correct: 0
                    },
                    {
                        id: 220,
                        question: "In software process maturity (CMMI), which level is characterized by 'Quantitatively Managed'?",
                        options: ["Level 2", "Level 3", "Level 4", "Level 5"],
                        correct: 2
                    },
                    {
                        id: 221,
                        question: "Which refactoring technique replaces conditional logic with polymorphism?",
                        options: ["Extract Method", "Replace Type Code with Subclasses", "Move Method", "Encapsulate Field"],
                        correct: 1
                    },
                    {
                        id: 222,
                        question: "The concept of 'Technical Debt' in software engineering refers to:",
                        options: ["Code reusability", "Cost of quick fixes that compromise quality", "Budget deficit in projects", "Defects per KLOC"],
                        correct: 1
                    },
                    {
                        id: 223,
                        question: "Which architectural style is most suitable for highly scalable, distributed systems?",
                        options: ["Monolithic", "Pipe-and-Filter", "Microservices", "Layered"],
                        correct: 2
                    },
                    {
                        id: 224,
                        question: "Mutation testing primarily evaluates:",
                        options: ["Performance", "Test case effectiveness", "Code readability", "System scalability"],
                        correct: 1
                    },
                    {
                        id: 225,
                        question: "In software risk analysis, the formula for Risk Exposure (RE) is:",
                        options: ["RE = Probability × Impact", "RE = Cost × Time", "RE = Effort ÷ Size", "RE = Defects ÷ KLOC"],
                        correct: 0
                    },
                    {
                        id: 226,
                        question: "The ISO/IEC 9126 quality model defines which six quality attributes?",
                        options: ["Functionality, Reliability, Usability, Efficiency, Maintainability, Portability", "Accuracy, Flexibility, Testability, Scalability, Performance, Security", "Design, Development, Testing, Deployment, Maintenance, Portability", "Reliability, Compatibility, Usability, Scalability, Maintainability, Reusability"],
                        correct: 0
                    },
                    {
                        id: 227,
                        question: "Which technique is used in requirements engineering to resolve conflicting stakeholder needs?",
                        options: ["Validation", "Negotiation", "Prototyping", "Inspection"],
                        correct: 1
                    },
                    {
                        id: 228,
                        question: "The software reliability growth models (SRGM) are mainly applied to estimate:",
                        options: ["Cost Overruns", "Failure Intensity Reduction", "Code Reuse", "Schedule Slippage"],
                        correct: 1
                    },
                    {
                        id: 229,
                        question: "The concept of software reuse is most closely aligned with:",
                        options: ["Component-Based Development", "Waterfall Model", "Rapid Application Development", "Big Bang Model"],
                        correct: 0
                    },
                    {
                        id: 230,
                        question: "Which risk prioritization technique uses a probability-impact matrix?",
                        options: ["Monte Carlo Simulation", "Decision Tree Analysis", "Risk Assessment Matrix", "Fault Tree Analysis"],
                        correct: 2
                    },
                    {
                        id: 231,
                        question: "Which software process model emphasizes prototyping and user feedback?",
                        options: ["Spiral Model", "Incremental Model", "RAD Model", "Waterfall Model"],
                        correct: 2
                    },
                    {
                        id: 232,
                        question: "In requirements elicitation, the 'Volere Template' is used for:",
                        options: ["Software Metrics", "Risk Analysis", "Structured Requirement Specification", "Testing Framework"],
                        correct: 2
                    },
                    {
                        id: 233,
                        question: "Which principle of Agile Manifesto emphasizes 'Responding to change over following a plan'?",
                        options: ["Customer collaboration", "Individuals and interactions", "Working software", "Adaptability"],
                        correct: 3
                    },
                    {
                        id: 234,
                        question: "Defect density in software engineering is calculated as:",
                        options: ["Defects ÷ Effort", "Defects ÷ Size (KLOC)", "Defects ÷ Time", "Defects ÷ Test Cases"],
                        correct: 1
                    },
                    {
                        id: 235,
                        question: "Which testing approach is most effective for safety-critical software?",
                        options: ["Alpha Testing", "Beta Testing", "Formal Verification", "Exploratory Testing"],
                        correct: 2
                    },
                    {
                        id: 236,
                        question: "The software metric 'Mean Time Between Failures (MTBF)' is defined as:",
                        options: ["MTBF = MTTF + MTTR", "MTBF = MTTR ÷ MTTF", "MTBF = Defects ÷ Time", "MTBF = Failure Rate × Effort"],
                        correct: 0
                    },
                    {
                        id: 237,
                        question: "Which formal specification method is based on set theory and predicate logic?",
                        options: ["UML", "Z-Notation", "Petri Nets", "Statecharts"],
                        correct: 1
                    },
                    {
                        id: 238,
                        question: "Which CASE tool is most useful for automatic code generation from design models?",
                        options: ["Analysis Tools", "Forward Engineering Tools", "Reverse Engineering Tools", "Maintenance Tools"],
                        correct: 1
                    },
                    {
                        id: 239,
                        question: "Which type of software maintenance focuses on adapting the software to new environments?",
                        options: ["Corrective", "Adaptive", "Perfective", "Preventive"],
                        correct: 1
                    },
                    {
                        id: 240,
                        question: "In configuration management, which item ensures unique identification of software versions?",
                        options: ["Change Control", "Version Control", "Audit", "Baseline"],
                        correct: 3
                    },
                    {
                        id: 241,
                        question: "What is the main limitation of Function Point Analysis?",
                        options: ["Depends heavily on expert judgment", "Ignores user perspective", "Only applies to procedural languages", "Does not account for system complexity"],
                        correct: 0
                    },
                    {
                        id: 242,
                        question: "Which project scheduling algorithm is used to determine the longest path and minimum project time?",
                        options: ["PERT", "CPM", "Monte Carlo Simulation", "Gantt Chart"],
                        correct: 1
                    },
                    {
                        id: 243,
                        question: "Which software architecture pattern is best suited for systems requiring dynamic component replacement?",
                        options: ["Layered Architecture", "Repository Pattern", "Service-Oriented Architecture", "Plugin Architecture"],
                        correct: 3
                    },
                    {
                        id: 244,
                        question: "Which metric evaluates the degree of module independence in software design?",
                        options: ["Coupling", "Cohesion", "Complexity", "Inheritance"],
                        correct: 0
                    },
                    {
                        id: 245,
                        question: "Which technique is used to reduce the impact of software risks by creating multiple functionally equivalent versions?",
                        options: ["Prototyping", "N-Version Programming", "Simulation", "Regression Testing"],
                        correct: 1
                    },
                    {
                        id: 246,
                        question: "The Goal-Question-Metric (GQM) approach is primarily used for:",
                        options: ["Software Testing", "Software Measurement", "Project Scheduling", "Requirements Engineering"],
                        correct: 1
                    },
                    {
                        id: 247,
                        question: "Which defect tracking metric indicates the percentage of defects removed before product release?",
                        options: ["Defect Density", "Defect Removal Efficiency", "Mean Time to Repair", "Failure Intensity"],
                        correct: 1
                    },
                    {
                        id: 248,
                        question: "The Capability Maturity Model (CMM) was originally developed by:",
                        options: ["ISO", "SEI at Carnegie Mellon", "IEEE", "PMI"],
                        correct: 1
                    },
                    {
                        id: 249,
                        question: "Which estimation model uses lines of code as its main input?",
                        options: ["COCOMO", "Function Point", "Putnam Model", "Delphi Method"],
                        correct: 0
                    },
                    {
                        id: 250,
                        question: "Which technique is used in requirements engineering to detect inconsistencies, ambiguities, and omissions?",
                        options: ["Inspection", "Prototyping", "Validation", "Interview"],
                        correct: 0
                    },
                     { id: 351, question: "Which of the following is NOT a type of software maintenance?", options: ["Corrective", "Adaptive", "Preventive", "Creative"], correct: 3 },
  { id: 352, question: "In Function Point Analysis (FPA), which of the following is considered as an External Input?", options: ["Report generation", "User command input", "Internal file update", "System calculation"], correct: 1 },
  { id: 353, question: "What is the main drawback of the Waterfall model?", options: ["Too flexible", "Late detection of errors", "Too costly", "No documentation"], correct: 2 },
  { id: 354, question: "The primary goal of software testing is to:", options: ["Prove that software is error-free", "Ensure the software meets user requirements", "Make software run faster", "Reduce development cost"], correct: 2 },
  { id: 355, question: "Which estimation technique uses historical data from similar projects?", options: ["COCOMO", "Delphi", "Analogy", "Function Point"], correct: 3 },
  { id: 356, question: "Which metric measures the complexity of a program’s control structure?", options: ["Halstead Metrics", "Cyclomatic Complexity", "LOC", "Function Points"], correct: 2 },
  { id: 357, question: "In risk management, the product of probability and impact is called:", options: ["Risk Exposure", "Risk Threshold", "Risk Factor", "Risk Value"], correct: 1 },
  { id: 358, question: "Which of the following is NOT a Black-Box testing method?", options: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Table Testing", "Control Flow Testing"], correct: 4 },
  { id: 359, question: "What does the 'V' in the V-Model represent?", options: ["Verification and Validation", "Visual", "Variation", "Version"], correct: 1 },
  { id: 360, question: "Which process ensures continuous improvement in software development?", options: ["CMMI", "Agile Retrospective", "ISO 9001", "All of these"], correct: 4 },
  { id: 361, question: "Software Reliability is measured in terms of:", options: ["Errors per Line of Code", "Probability of Failure-Free Operation", "Execution Time", "Usability"], correct: 2 },
  { id: 362, question: "Which SDLC model is best suited for developing safety-critical systems?", options: ["Waterfall", "Spiral", "V-Model", "RAD"], correct: 3 },
  { id: 363, question: "In project scheduling, a task with zero slack is:", options: ["Non-critical task", "Critical task", "Optional task", "Unplanned task"], correct: 2 },
  { id: 364, question: "In software quality assurance, 'defect density' is defined as:", options: ["Number of defects per test case", "Number of defects per line of code", "Number of defects per function point", "Number of defects per module"], correct: 2 },
  { id: 365, question: "Which one is a measure of software maintainability?", options: ["Coupling", "Cohesion", "Cyclomatic Complexity", "All of these"], correct: 4 },
  { id: 366, question: "Which testing is done without executing the code?", options: ["Dynamic Testing", "Static Testing", "System Testing", "Regression Testing"], correct: 2 },
  { id: 367, question: "What is the purpose of configuration management?", options: ["To track project progress", "To control changes in software", "To allocate resources", "To measure reliability"], correct: 2 },
  { id: 368, question: "Which Agile practice involves small releases at frequent intervals?", options: ["Pair Programming", "Continuous Integration", "Incremental Delivery", "Refactoring"], correct: 3 },
  { id: 369, question: "The difference between validation and verification is:", options: ["Validation ensures product correctness, verification ensures right product built", "Validation checks documents, verification checks code", "Both are same", "Verification is after validation"], correct: 1 },
  { id: 370, question: "Which metric is used in COCOMO to represent software size?", options: ["Function Points", "KLOC", "Cyclomatic Complexity", "LOC per Module"], correct: 2 },
  { id: 371, question: "Which of these is NOT a risk mitigation strategy?", options: ["Avoidance", "Transfer", "Acceptance", "Compilation"], correct: 4 },
  { id: 372, question: "Which testing ensures that modified code does not break existing functionality?", options: ["Unit Testing", "Regression Testing", "Integration Testing", "System Testing"], correct: 2 },
  { id: 373, question: "Software quality attributes defined by McCall’s model include:", options: ["Correctness, Reliability, Efficiency", "Security, Complexity, Robustness", "Agility, Portability, Usability", "Only Reliability"], correct: 1 },
  { id: 374, question: "In Agile, the product backlog is owned by:", options: ["Scrum Master", "Product Owner", "Development Team", "Stakeholders"], correct: 2 },
  { id: 375, question: "Which model is most appropriate when requirements are unclear?", options: ["Waterfall", "Spiral", "V-Model", "Prototyping"], correct: 4 },
  { id: 376, question: "Which software metric evaluates data flow complexity?", options: ["Halstead", "Cyclomatic", "Function Point", "McCabe’s Metric"], correct: 2 },
  { id: 377, question: "In software design, high cohesion means:", options: ["Modules are highly interdependent", "Modules perform a single task well", "Modules are loosely coupled", "Modules reuse maximum code"], correct: 2 },
  { id: 378, question: "Which technique is commonly used in White-Box testing?", options: ["Boundary Value Analysis", "Equivalence Partitioning", "Path Coverage", "Decision Table"], correct: 3 },
  { id: 379, question: "In project management, a milestone is:", options: ["Deliverable", "Checkpoint", "Task", "Bug Fix"], correct: 2 },
  { id: 380, question: "Which is NOT a part of the Capability Maturity Model (CMM)?", options: ["Initial", "Repeatable", "Optimizing", "Executable"], correct: 4 },
  { id: 381, question: "Fault tolerance in software refers to:", options: ["System avoids bugs", "System continues working despite faults", "System with zero bugs", "System avoids redundancy"], correct: 2 },
  { id: 382, question: "Which testing focuses on performance under high load?", options: ["Stress Testing", "Regression Testing", "Acceptance Testing", "Smoke Testing"], correct: 1 },
  { id: 383, question: "Which of these is NOT a principle of Agile?", options: ["Customer collaboration over contract negotiation", "Working software over documentation", "Following a strict plan", "Responding to change"], correct: 3 },
  { id: 384, question: "Which is NOT a feature of Extreme Programming (XP)?", options: ["Pair Programming", "Test Driven Development", "Big Design Up Front", "Continuous Integration"], correct: 3 },
  { id: 385, question: "Which software process model emphasizes component reuse?", options: ["Spiral", "Component-Based", "RAD", "Prototyping"], correct: 2 },
  { id: 386, question: "Which one is an example of a functional requirement?", options: ["System response time < 2 sec", "System shall generate monthly reports", "System must be available 24/7", "System shall handle 1000 users"], correct: 2 },
  { id: 387, question: "A Gantt chart is primarily used for:", options: ["Risk Management", "Scheduling", "Cost Estimation", "Testing"], correct: 2 },
  { id: 388, question: "Which metric indicates how many modules are affected by a change?", options: ["Cohesion", "Coupling", "Cyclomatic Complexity", "Function Point"], correct: 2 },
  { id: 389, question: "Which approach is used to assess software reliability?", options: ["Defect Removal Efficiency", "MTTF (Mean Time To Failure)", "Defect Density", "All of these"], correct: 4 },
  { id: 390, question: "Which of the following is NOT an Agile framework?", options: ["Scrum", "Kanban", "XP", "PERT"], correct: 4 },
  { id: 391, question: "What is the key deliverable of the requirements phase?", options: ["Test Cases", "SRS Document", "Gantt Chart", "Source Code"], correct: 2 },
  { id: 392, question: "In software engineering, reverse engineering is done to:", options: ["Recover design from code", "Write new software", "Test legacy system", "Reduce development cost"], correct: 1 },
  { id: 393, question: "In project risk management, the first step is:", options: ["Risk Planning", "Risk Identification", "Risk Monitoring", "Risk Mitigation"], correct: 2 },
  { id: 394, question: "Which testing technique ensures that every statement in code executes at least once?", options: ["Path Coverage", "Statement Coverage", "Branch Coverage", "Condition Coverage"], correct: 2 },
  { id: 395, question: "Which type of maintenance is performed to improve system performance?", options: ["Corrective", "Adaptive", "Perfective", "Preventive"], correct: 3 },
  { id: 396, question: "Which is NOT a software process activity?", options: ["Software Validation", "Software Design", "Software Evolution", "Software Deployment"], correct: 4 },
  { id: 397, question: "Which testing checks interaction between integrated modules?", options: ["Unit Testing", "Integration Testing", "Regression Testing", "System Testing"], correct: 2 },
  { id: 398, question: "Which type of requirement specifies security and performance?", options: ["Functional", "Non-Functional", "System", "Business"], correct: 2 },
  { id: 399, question: "Which cost estimation model is algorithmic?", options: ["Delphi", "Analogy", "COCOMO", "Wideband Delphi"], correct: 3 },
  { id: 400, question: "The main purpose of software configuration audit is to:", options: ["Check user satisfaction", "Ensure process compliance", "Verify consistency of configuration items", "Estimate cost"], correct: 3 },
{ id: 400, question: "Which of the following is NOT a key principle of software engineering ethics?", options: ["Public", "Client and Employer", "Managerial Profit", "Product"], correct: 3 },
  { id: 401, question: "In Cleanroom software engineering, correctness verification is done through:", options: ["Code execution", "Statistical testing", "Formal methods", "Unit testing"], correct: 3 },
  { id: 402, question: "Which of the following is NOT a layer of the Capability Maturity Model (CMM)?", options: ["Repeatable", "Defined", "Quantitatively Managed", "Optimistic"], correct: 4 },
  { id: 403, question: "Agile methodologies strongly discourage:", options: ["Customer collaboration", "Responding to change", "Comprehensive documentation", "Working software"], correct: 3 },
  { id: 404, question: "In software testing, mutation testing is primarily used to:", options: ["Check boundary values", "Evaluate test case effectiveness", "Measure reliability", "Reduce redundancy"], correct: 2 },
  { id: 405, question: "Which one is NOT a formal software specification technique?", options: ["Z-notation", "Petri Nets", "Finite State Machines", "Spiral Model"], correct: 4 },
  { id: 406, question: "What is the main focus of Reliability Growth Models?", options: ["Maintenance cost", "Improvement in fault tolerance", "Failure rate reduction", "Project scheduling"], correct: 3 },
  { id: 407, question: "Which of the following risk mitigation strategies transfers risk to another party?", options: ["Risk Avoidance", "Risk Reduction", "Risk Sharing", "Risk Acceptance"], correct: 3 },
  { id: 408, question: "In function point analysis, which of the following is NOT a function type?", options: ["External Inputs", "Internal Logical Files", "Decision Nodes", "External Inquiries"], correct: 3 },
  { id: 409, question: "Which software process model explicitly includes risk assessment in every iteration?", options: ["Waterfall Model", "V-Model", "Spiral Model", "Incremental Model"], correct: 3 },
  { id: 410, question: "Which metric evaluates the complexity of a program based on decision points?", options: ["Halstead Metrics", "Cyclomatic Complexity", "Function Points", "LOC"], correct: 2 },
  { id: 411, question: "Reverse engineering in software aims to:", options: ["Develop new software", "Improve performance", "Understand existing system design", "Increase testing efficiency"], correct: 3 },
  { id: 412, question: "In software maintenance, perfective maintenance deals with:", options: ["Bug fixing", "Enhancing features", "Adapting to environment changes", "Security patches"], correct: 2 },
  { id: 413, question: "Which CASE tool supports automatic code generation?", options: ["Upper CASE", "Lower CASE", "Integrated CASE", "None"], correct: 2 },
  { id: 414, question: "Formal technical reviews (FTRs) primarily aim at:", options: ["Reducing coding effort", "Finding errors in requirements/design", "Improving user manuals", "Enhancing test coverage"], correct: 2 },
  { id: 415, question: "Which of the following is NOT an attribute of software quality as per McCall’s model?", options: ["Reliability", "Portability", "Testability", "Feasibility"], correct: 4 },
  { id: 416, question: "The Delone and McLean IS success model measures:", options: ["Cost effectiveness", "Software quality factors", "Information system success", "Risk analysis"], correct: 3 },
  { id: 417, question: "A stub in software testing is:", options: ["A partial implementation of a module", "Driver code", "Performance measure", "Automated tool"], correct: 1 },
  { id: 418, question: "What is the major disadvantage of the Waterfall model?", options: ["Iteration support", "High flexibility", "Late error detection", "Customer involvement"], correct: 3 },
  { id: 419, question: "The Boehm’s spiral model focuses on:", options: ["Risk management", "User interface design", "Database optimization", "Code reuse"], correct: 1 },
  { id: 420, question: "Which of the following is NOT part of IEEE software project management activities?", options: ["Project Planning", "Risk Management", "Customer Billing", "Project Monitoring"], correct: 3 },
  { id: 421, question: "Regression testing ensures:", options: ["No old functionality is broken", "All modules are complete", "User requirements are clear", "System runs faster"], correct: 1 },
  { id: 422, question: "Which method is used for predicting the number of residual faults in a system?", options: ["Reliability growth models", "Cyclomatic complexity", "Function point analysis", "COCOMO"], correct: 1 },
  { id: 423, question: "In the PSP (Personal Software Process), the focus is on:", options: ["Team communication", "Individual performance improvement", "Process automation", "Testing automation"], correct: 2 },
  { id: 424, question: "IEEE 830 is related to:", options: ["Project Scheduling", "Software Requirements Specification", "Quality Assurance", "Testing Techniques"], correct: 2 },
  { id: 425, question: "In agile, a ‘time-boxed’ event refers to:", options: ["Unlimited coding", "Strict deadline duration", "Project termination", "User acceptance"], correct: 2 },
  { id: 426, question: "Which one is a black-box testing technique?", options: ["Basis path testing", "Loop testing", "Equivalence partitioning", "Code coverage"], correct: 3 },
  { id: 427, question: "Which is the last activity in Software Configuration Management (SCM)?", options: ["Change control", "Version release", "Status reporting", "Auditing"], correct: 2 },
  { id: 428, question: "In software engineering, traceability matrix is used for:", options: ["Cost estimation", "Mapping requirements to test cases", "Measuring performance", "Code optimization"], correct: 2 },
  { id: 429, question: "The primary aim of re-engineering is:", options: ["To increase LOC", "To enhance maintainability", "To reduce development time", "To increase team size"], correct: 2 },
  { id: 430, question: "Which quality model defines 'fitness for purpose'?", options: ["ISO 9126", "McCall’s Model", "Boehm’s Model", "Gilb’s Model"], correct: 4 },
  { id: 431, question: "In software estimation, Delphi technique is based on:", options: ["Algorithmic models", "Expert judgment", "Past project data", "Risk analysis"], correct: 2 },
  { id: 432, question: "Defect density is defined as:", options: ["Number of defects per test case", "Number of defects per LOC", "Number of defects per day", "Number of defects per function point"], correct: 2 },
  { id: 433, question: "Which testing ensures that modules work together correctly?", options: ["Unit testing", "Integration testing", "System testing", "Acceptance testing"], correct: 2 },
  { id: 434, question: "Which process is used to derive classes and relationships from problem statements?", options: ["Reverse Engineering", "Requirements Elicitation", "Object-Oriented Analysis", "Structural Testing"], correct: 3 },
  { id: 435, question: "Which maintenance type modifies the software to keep it usable in a changed environment?", options: ["Adaptive", "Corrective", "Perfective", "Preventive"], correct: 1 },
  { id: 436, question: "Critical Path Method (CPM) is used for:", options: ["Risk analysis", "Project scheduling", "Code optimization", "Testing"], correct: 2 },
  { id: 437, question: "Which of the following is NOT an agile framework?", options: ["Scrum", "Kanban", "Extreme Programming", "PERT"], correct: 4 },
  { id: 438, question: "Which model is most suitable when requirements are very well understood?", options: ["Waterfall", "Spiral", "Agile", "Prototype"], correct: 1 },
  { id: 439, question: "In software risk analysis, risk exposure = ?", options: ["Probability × Impact", "Effort × LOC", "Defects × Time", "Failure × Complexity"], correct: 1 },
  { id: 440, question: "Formal inspections are generally more effective than testing for:", options: ["Syntax errors", "Design flaws", "Performance issues", "Integration bugs"], correct: 2 },
  { id: 441, question: "Which of the following is NOT a principle of software testing?", options: ["Testing shows presence of defects", "Exhaustive testing is possible", "Defects cluster together", "Pesticide paradox"], correct: 2 },
  { id: 442, question: "Which metric measures how easy it is to modify software?", options: ["Reliability", "Maintainability", "Usability", "Portability"], correct: 2 },
  { id: 443, question: "The Pareto principle in defect analysis suggests:", options: ["80% defects are due to 20% modules", "Defects are evenly spread", "Defects are random", "Defects always come from new code"], correct: 1 },
  { id: 444, question: "Which of the following is NOT part of software configuration management?", options: ["Version control", "Change management", "Test case design", "Build management"], correct: 3 },
  { id: 445, question: "In software engineering, cohesion refers to:", options: ["Degree of dependency between modules", "Degree of relatedness within a module", "Code reusability", "Testing efficiency"], correct: 2 },
  { id: 446, question: "Which of the following is NOT a project risk?", options: ["Schedule slippage", "Poor team skills", "Requirement volatility", "Code complexity"], correct: 4 },
  { id: 447, question: "Which of the following is a preventive measure in software maintenance?", options: ["Bug fixing", "Code refactoring", "Adding new features", "Porting software"], correct: 2 },
  { id: 448, question: "A key challenge of distributed software development is:", options: ["Time zone differences", "Same infrastructure", "Less cost", "Easier testing"], correct: 1 },
  { id: 449, question: "What does the acronym CASE stand for?", options: ["Computer-Aided Software Engineering", "Control Application Software Execution", "Centralized Application Software Evaluation", "Coding and Software Estimation"], correct: 1 },
  { id: 450, question: "Which is NOT a principle of agile development?", options: ["Early and continuous delivery", "Embracing change", "Comprehensive documentation", "Customer collaboration"], correct: 3 }
                ]
            }
            }
        },
        "Cyber Security & Ethics": {
            color: "#F43F5E",
            subtopics: {
                "Threats: virus, worm, trojan, ransomware, phishing, social engineering": {
                    color: "#F43F5E",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Threats: virus, worm, trojan, ransomware, phishing, social engineering?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
                },
                "Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea": {
                    color: "#A855F7",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 1 }, { 'id': 7, 'question': '7. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Controls: antivirus, firewall, updates/patching, backup, MFA; basics of encryption idea?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
                },
                "Safe browsing, email hygiene, password policies, digital footprint": {
                    color: "#22C55E",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about Safe browsing, email hygiene, password policies, digital footprint?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
                },
                "Indian context: IT Act, 2000 (overview) and digital privacy awareness": {
                    color: "#4F46E5",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 3 }, { 'id': 2, 'question': '2. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 2 }, { 'id': 4, 'question': '4. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Indian context: IT Act, 2000 (overview) and digital privacy awareness?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
                },
            }
        },
        "MS Office & Practical ICT": {
            color: "#A855F7",
            subtopics: {
                "MS Word: formatting, tables, mail merge basics": {
                    color: "#A855F7",
                    questions: [{ 'id': 1, 'question': '1. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 3 }, { 'id': 6, 'question': '6. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 1 }, { 'id': 8, 'question': '8. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 2 }, { 'id': 10, 'question': '10. Sample question about MS Word: formatting, tables, mail merge basics?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 1 }],
                },
                "MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation": {
                    color: "#22C55E",
                    questions: [{ 'id': 1, 'question': '1. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 1 }, { 'id': 4, 'question': '4. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about MS Excel: cell references, formatting, formulas (SUM, AVERAGE, COUNT, MIN/MAX, IF, VLOOKUP/XLOOKUP idea), charts, data validation?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
                },
                "MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene": {
                    color: "#4F46E5",
                    questions: [{ 'id': 1, 'question': '1. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 3 }, { 'id': 5, 'question': '5. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 0 }, { 'id': 6, 'question': '6. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 2 }, { 'id': 7, 'question': '7. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 3 }, { 'id': 9, 'question': '9. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about MS PowerPoint: slide layouts, master, transitions/animations, presentation hygiene?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
                },
                "File management: compression, PDFs, print settings, shortcuts": {
                    color: "#3B82F6",
                    questions: [{ 'id': 1, 'question': '1. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 2 }, { 'id': 8, 'question': '8. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about File management: compression, PDFs, print settings, shortcuts?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 1 }],
                },
            }
        },
        "General Awareness / Reasoning (If Included)": {
            color: "#22C55E",
            subtopics: {
                "Current affairs (national/state), general science basics": {
                    color: "#22C55E",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 1 }, { 'id': 2, 'question': '2. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 3 }, { 'id': 3, 'question': '3. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 1 }, { 'id': 5, 'question': '5. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 0 }, { 'id': 9, 'question': '9. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 3 }, { 'id': 10, 'question': '10. Sample question about Current affairs (national/state), general science basics?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 0 }],
                },
                "State GK (e.g., Bihar history, geography, polity, economy, schemes)": {
                    color: "#4F46E5",
                    questions: [{ 'id': 1, 'question': '1. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 1 }, { 'id': 3, 'question': '3. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 3 }, { 'id': 4, 'question': '4. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 0 }, { 'id': 5, 'question': '5. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 1 }, { 'id': 6, 'question': '6. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 0 }, { 'id': 7, 'question': '7. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 0 }, { 'id': 8, 'question': '8. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 2 }, { 'id': 9, 'question': '9. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 1 }, { 'id': 10, 'question': '10. Sample question about State GK (e.g., Bihar history, geography, polity, economy, schemes)?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 2 }],
                },
                "Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics": {
                    color: "#3B82F6",
                    questions: [{ 'id': 1, 'question': '1. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A1', 'Option B1', 'Option C1', 'Option D1'], 'correct': 0 }, { 'id': 2, 'question': '2. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A2', 'Option B2', 'Option C2', 'Option D2'], 'correct': 0 }, { 'id': 3, 'question': '3. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A3', 'Option B3', 'Option C3', 'Option D3'], 'correct': 0 }, { 'id': 4, 'question': '4. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A4', 'Option B4', 'Option C4', 'Option D4'], 'correct': 2 }, { 'id': 5, 'question': '5. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A5', 'Option B5', 'Option C5', 'Option D5'], 'correct': 2 }, { 'id': 6, 'question': '6. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A6', 'Option B6', 'Option C6', 'Option D6'], 'correct': 3 }, { 'id': 7, 'question': '7. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A7', 'Option B7', 'Option C7', 'Option D7'], 'correct': 3 }, { 'id': 8, 'question': '8. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A8', 'Option B8', 'Option C8', 'Option D8'], 'correct': 1 }, { 'id': 9, 'question': '9. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A9', 'Option B9', 'Option C9', 'Option D9'], 'correct': 0 }, { 'id': 10, 'question': '10. Sample question about Logical reasoning: analogies, series, syllogisms, directions, Venn diagrams, DI basics?', 'options': ['Option A10', 'Option B10', 'Option C10', 'Option D10'], 'correct': 3 }],
                },
            }
        },
    };

    export default chapters;