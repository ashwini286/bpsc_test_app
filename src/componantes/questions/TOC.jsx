const TOC = {
        color: "#27F5F5",
        subtopics: {
            "Mix all questions": {
                color: "#27F5F5",
                questions: [
                    { id: 1, question: "Which of the following is a type of automata?", options: ["Finite Automata", "Pushdown Automata", "Turing Machine", "All of the above"], correct: 3 },
                    { id: 2, question: "Finite automata is mainly used to recognize?", options: ["Regular Languages", "Context-Free Languages", "Recursive Languages", "All Languages"], correct: 0 },
                    { id: 3, question: "Which automata uses a stack as memory?", options: ["Finite Automata", "Pushdown Automata", "Turing Machine", "None"], correct: 1 },
                    { id: 4, question: "Which model is considered the most powerful computational model?", options: ["Finite Automata", "Pushdown Automata", "Turing Machine", "Regular Expression"], correct: 2 },
                    { id: 5, question: "Regular expressions are used to represent?", options: ["Context-Free Languages", "Regular Languages", "Context-Sensitive Languages", "Unrestricted Languages"], correct: 1 },
                    { id: 6, question: "The pumping lemma is used for?", options: ["Proving language is regular", "Proving language is not regular", "Proving CFG", "None"], correct: 1 },
                    { id: 7, question: "A DFA is?", options: ["Deterministic Finite Automata", "Dynamic Function Automata", "Data Flow Automata", "None"], correct: 0 },
                    { id: 8, question: "NFA can be converted to?", options: ["CFG", "DFA", "TM", "All of the above"], correct: 1 },
                    { id: 9, question: "CFG stands for?", options: ["Context Free Grammar", "Context Flow Graph", "Constant Flow Grammar", "Control Function Graph"], correct: 0 },
                    { id: 10, question: "Which machine decides all recursive languages?", options: ["FA", "PDA", "TM", "NFA"], correct: 2 },

                    { id: 11, question: "Which grammar type is most general in Chomsky hierarchy?", options: ["Type 3", "Type 2", "Type 1", "Type 0"], correct: 3 },
                    { id: 12, question: "Regular languages are closed under?", options: ["Union", "Intersection", "Complement", "All of the above"], correct: 3 },
                    { id: 13, question: "Which language is accepted by PDA?", options: ["Regular", "Context-Free", "Context-Sensitive", "Recursive"], correct: 1 },
                    { id: 14, question: "Which of the following is undecidable?", options: ["Halting Problem", "DFA Equivalence", "CFG Emptiness", "NFA to DFA"], correct: 0 },
                    { id: 15, question: "ε-transition is used in?", options: ["DFA", "NFA", "PDA", "TM"], correct: 1 },
                    { id: 16, question: "Which automata is memoryless?", options: ["FA", "PDA", "TM", "CFG"], correct: 0 },
                    { id: 17, question: "Chomsky hierarchy has how many types?", options: ["2", "3", "4", "5"], correct: 2 },
                    { id: 18, question: "Which machine is used as a mathematical model of computers?", options: ["Finite Automata", "Pushdown Automata", "Turing Machine", "None"], correct: 2 },
                    { id: 19, question: "Context-sensitive grammar is type?", options: ["0", "1", "2", "3"], correct: 1 },
                    { id: 20, question: "Which of the following is regular?", options: ["a^n b^n", "a^n b^m", "a^n b^n c^n", "0^n 1^n"], correct: 1 },

                    { id: 21, question: "The complement of a regular language is?", options: ["Not regular", "Always regular", "Sometimes regular", "Undecidable"], correct: 1 },
                    { id: 22, question: "Which parsing technique is used for CFG?", options: ["Top-Down", "Bottom-Up", "Both", "None"], correct: 2 },
                    { id: 23, question: "Recursively enumerable languages are recognized by?", options: ["FA", "PDA", "TM", "NFA"], correct: 2 },
                    { id: 24, question: "Which problem is undecidable?", options: ["Halting", "CFG Membership", "DFA Minimization", "NFA Conversion"], correct: 0 },
                    { id: 25, question: "DFA has how many moves for each input symbol?", options: ["0", "1", "More than 1", "Infinite"], correct: 1 },
                    { id: 26, question: "Which automata can use unbounded memory?", options: ["FA", "PDA", "TM", "None"], correct: 2 },
                    { id: 27, question: "A language is regular if and only if it can be represented by?", options: ["CFG", "RE", "TM", "PDA"], correct: 1 },
                    { id: 28, question: "Which machine accepts a^n b^n?", options: ["FA", "PDA", "TM", "RE"], correct: 1 },
                    { id: 29, question: "Which closure property does not hold for CFLs?", options: ["Union", "Intersection", "Concatenation", "Kleene Star"], correct: 1 },
                    { id: 30, question: "Which automata cannot accept palindromes?", options: ["FA", "PDA", "TM", "NFA"], correct: 0 },

                    { id: 31, question: "Minimization of DFA is done to?", options: ["Reduce states", "Increase states", "Add ε-moves", "None"], correct: 0 },
                    { id: 32, question: "Which language is not context-free?", options: ["a^n b^n", "a^n b^n c^n", "a^n b^m", "All"], correct: 1 },
                    { id: 33, question: "A Turing machine has?", options: ["Finite tape", "Infinite tape", "Stack", "No memory"], correct: 1 },
                    { id: 34, question: "Which of the following is decidable?", options: ["DFA Acceptance", "Halting Problem", "Post Correspondence", "TM Equivalence"], correct: 0 },
                    { id: 35, question: "Chomsky Normal Form is for?", options: ["Regular Grammar", "CFG", "CSG", "Unrestricted Grammar"], correct: 1 },
                    { id: 36, question: "Ambiguity in grammar means?", options: ["Multiple leftmost derivations", "Multiple parse trees", "Both", "None"], correct: 2 },
                    { id: 37, question: "Which automata can recognize palindromes?", options: ["FA", "PDA", "TM", "None"], correct: 1 },
                    { id: 38, question: "Every DFA is also?", options: ["NFA", "PDA", "TM", "RE"], correct: 0 },
                    { id: 39, question: "Which one is more powerful?", options: ["DFA", "NFA", "Both equal", "None"], correct: 2 },
                    { id: 40, question: "Which type of grammar generates programming languages?", options: ["Regular", "CFG", "CSG", "Unrestricted"], correct: 1 },

                    { id: 41, question: "Regular languages can be represented by?", options: ["Finite Automata", "Regular Expression", "Both", "None"], correct: 2 },
                    { id: 42, question: "Which machine halts on every input?", options: ["Decider TM", "Recognizer TM", "NFA", "PDA"], correct: 0 },
                    { id: 43, question: "Which machine may go into infinite loop?", options: ["Decider", "Recognizer", "FA", "DFA"], correct: 1 },
                    { id: 44, question: "Subset construction is used to convert?", options: ["NFA to DFA", "DFA to NFA", "PDA to FA", "CFG to CNF"], correct: 0 },
                    { id: 45, question: "The Post Correspondence Problem is?", options: ["Decidable", "Undecidable", "Regular", "Context-Free"], correct: 1 },
                    { id: 46, question: "Which automata is equivalent to regular expressions?", options: ["DFA", "NFA", "Both", "None"], correct: 2 },
                    { id: 47, question: "Which of the following generates linear languages?", options: ["Linear Grammar", "Regular Grammar", "Context-Sensitive Grammar", "CFG"], correct: 0 },
                    { id: 48, question: "CFG to PDA conversion is?", options: ["Always possible", "Not possible", "Sometimes possible", "Undecidable"], correct: 0 },
                    { id: 49, question: "Which automata is nondeterministic by nature?", options: ["FA", "NFA", "TM", "PDA"], correct: 1 },
                    { id: 50, question: "Which of the following is false?", options: ["All regular languages are CFLs", "All CFLs are regular", "Every DFA is an NFA", "Every NFA is a DFA"], correct: 1 },

                    { id: 51, question: "Which automata is less powerful than PDA?", options: ["DFA", "NFA", "Both", "None"], correct: 2 },
                    { id: 52, question: "Ambiguous grammar causes?", options: ["Parsing difficulty", "Compilation error", "Syntax error", "None"], correct: 0 },
                    { id: 53, question: "Which normal form is used in parsing?", options: ["CNF", "GNF", "Both", "None"], correct: 2 },
                    { id: 54, question: "Which grammar cannot be parsed by LL(1)?", options: ["Left recursive", "Right recursive", "Unambiguous", "Regular"], correct: 0 },
                    { id: 55, question: "Every context-sensitive language is?", options: ["Regular", "Recursive", "CFL", "None"], correct: 1 },
                    { id: 56, question: "Which machine halts on some inputs?", options: ["Decider", "Recognizer", "Both", "None"], correct: 1 },
                    { id: 57, question: "Which type of automata is used in lexical analysis?", options: ["FA", "PDA", "TM", "CFG"], correct: 0 },
                    { id: 58, question: "Which of the following is not a closure property of CFL?", options: ["Union", "Concatenation", "Complement", "Kleene Star"], correct: 2 },
                    { id: 59, question: "CFG ambiguity is?", options: ["Decidable", "Undecidable", "Regular", "Recursive"], correct: 1 },
                    { id: 60, question: "The halting problem is?", options: ["Decidable", "Undecidable", "Regular", "Recursive"], correct: 1 },

                    { id: 61, question: "Which of these is not part of Chomsky hierarchy?", options: ["Type-0", "Type-1", "Type-2", "Type-4"], correct: 3 },
                    { id: 62, question: "Which automata accepts only regular languages?", options: ["DFA", "PDA", "TM", "CFG"], correct: 0 },
                    { id: 63, question: "Pushdown automata uses?", options: ["Queue", "Stack", "Tape", "Register"], correct: 1 },
                    { id: 64, question: "Turing machine tape is?", options: ["Finite", "Infinite", "Fixed", "Dynamic"], correct: 1 },
                    { id: 65, question: "Which of the following is not context-free?", options: ["a^n b^n", "a^n b^m", "a^n b^n c^n", "a*b*"], correct: 2 },
                    { id: 66, question: "CFG can be ambiguous when?", options: ["Multiple parse trees", "Multiple languages", "Single derivation", "None"], correct: 0 },
                    { id: 67, question: "Regular expressions cannot handle?", options: ["Finite repetition", "Nested structures", "Union", "Concatenation"], correct: 1 },
                    { id: 68, question: "Recursive enumerable languages are closed under?", options: ["Union", "Concatenation", "Intersection", "All"], correct: 3 },
                    { id: 69, question: "Which one is more general?", options: ["Recursive", "RE", "Regular", "CFL"], correct: 1 },
                    { id: 70, question: "DFA minimization algorithm?", options: ["Subset", "Hopcroft", "CYK", "LL(1)"], correct: 1 },

                    { id: 71, question: "CFG to CNF conversion increases?", options: ["Non-terminals", "Terminals", "Tape", "None"], correct: 0 },
                    { id: 72, question: "Which is true?", options: ["Every RE is regular", "Every CFG is regular", "Every RE is CFG", "All"], correct: 2 },
                    { id: 73, question: "Which machine is used for decision problems?", options: ["FA", "PDA", "TM", "NFA"], correct: 2 },
                    { id: 74, question: "Which is false?", options: ["DFA accepts RE", "PDA accepts CFL", "TM accepts recursive", "FA accepts CSL"], correct: 3 },
                    { id: 75, question: "Which one is decidable?", options: ["CFG Ambiguity", "DFA Acceptance", "Halting Problem", "Post Problem"], correct: 1 },
                    { id: 76, question: "Which of the following is semi-decidable?", options: ["RE Language", "Regular Language", "CFG", "Recursive"], correct: 0 },
                    { id: 77, question: "PDA is more powerful than?", options: ["FA", "TM", "CFG", "None"], correct: 0 },
                    { id: 78, question: "CYK algorithm is used for?", options: ["Regular parsing", "CFL parsing", "TM simulation", "DFA minimization"], correct: 1 },
                    { id: 79, question: "Regular grammar generates?", options: ["RE", "FA", "Both", "None"], correct: 2 },
                    { id: 80, question: "Which automata models recursion?", options: ["FA", "PDA", "TM", "NFA"], correct: 1 },
                    {
                        "id": 81,
                        "question": "Which of the following is not a type of grammar in Chomsky hierarchy?",
                        "options": ["Regular", "Context-Free", "Context-Sensitive", "Non-Deterministic"],
                        "answer": "Non-Deterministic"
                    },
                    {
                        "id": 82,
                        "question": "Which machine is the most powerful in the Chomsky hierarchy?",
                        "options": ["Finite Automata", "Pushdown Automata", "Linear Bounded Automata", "Turing Machine"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 83,
                        "question": "Regular expressions can be converted into?",
                        "options": ["Grammar", "NFA", "PDA", "Turing Machine"],
                        "answer": "NFA"
                    },
                    {
                        "id": 84,
                        "question": "CFG stands for?",
                        "options": ["Context-Free Grammar", "Computer Function Grammar", "Control Flow Graph", "Context-Free Generator"],
                        "answer": "Context-Free Grammar"
                    },
                    {
                        "id": 85,
                        "question": "Which language is not regular?",
                        "options": ["a*b*", "(ab)*", "a^n b^n", "a*"],
                        "answer": "a^n b^n"
                    },
                    {
                        "id": 86,
                        "question": "Which of the following is accepted by a PDA?",
                        "options": ["Regular Languages", "Context-Free Languages", "Context-Sensitive Languages", "Recursively Enumerable"],
                        "answer": "Context-Free Languages"
                    },
                    {
                        "id": 87,
                        "question": "Turing machines are used to recognize?",
                        "options": ["Regular Languages", "CFL", "Recursive & RE Languages", "None"],
                        "answer": "Recursive & RE Languages"
                    },
                    {
                        "id": 88,
                        "question": "Which of the following is true about FA?",
                        "options": ["Finite memory", "Stack memory", "Tape memory", "Infinite memory"],
                        "answer": "Finite memory"
                    },
                    {
                        "id": 89,
                        "question": "CFG is used to describe?",
                        "options": ["Lexical structure", "Syntax of programming languages", "Semantics", "Machine Code"],
                        "answer": "Syntax of programming languages"
                    },
                    {
                        "id": 90,
                        "question": "Which problem is undecidable?",
                        "options": ["Halting problem", "String matching", "Sorting", "Searching"],
                        "answer": "Halting problem"
                    },
                    {
                        "id": 91,
                        "question": "DFA and NFA are?",
                        "options": ["Different in power", "Equal in power", "NFA is stronger", "DFA is stronger"],
                        "answer": "Equal in power"
                    },
                    {
                        "id": 92,
                        "question": "Which grammar type generates regular languages?",
                        "options": ["Type 0", "Type 1", "Type 2", "Type 3"],
                        "answer": "Type 3"
                    },
                    {
                        "id": 93,
                        "question": "Closure properties of CFL include?",
                        "options": ["Union, Concatenation", "Intersection, Complement", "Both A & B", "None"],
                        "answer": "Union, Concatenation"
                    },
                    {
                        "id": 94,
                        "question": "Which automata can be represented by state transition diagrams?",
                        "options": ["Turing Machine", "Finite Automata", "PDA", "All of these"],
                        "answer": "Finite Automata"
                    },
                    {
                        "id": 95,
                        "question": "Pumping lemma is used for?",
                        "options": ["Proving a language is regular", "Proving CFL", "Syntax checking", "All of these"],
                        "answer": "Proving a language is regular"
                    },
                    {
                        "id": 96,
                        "question": "Which machine uses a stack as memory?",
                        "options": ["FA", "PDA", "LBA", "TM"],
                        "answer": "PDA"
                    },
                    {
                        "id": 97,
                        "question": "Every regular language is also?",
                        "options": ["CFL", "Context-sensitive", "Recursive", "None"],
                        "answer": "CFL"
                    },
                    {
                        "id": 98,
                        "question": "Which of these is decidable?",
                        "options": ["Halting problem", "Checking DFA emptiness", "Post correspondence problem", "All are undecidable"],
                        "answer": "Checking DFA emptiness"
                    },
                    {
                        "id": 99,
                        "question": "Which problem is semi-decidable?",
                        "options": ["Sorting", "Searching", "Halting", "String concatenation"],
                        "answer": "Halting"
                    },
                    {
                        "id": 100,
                        "question": "Which of these is not context-free?",
                        "options": ["a^n b^n", "a^n b^n c^n", "(ab)*", "a*b*"],
                        "answer": "a^n b^n c^n"
                    },
                    {
                        "id": 101,
                        "question": "Which automata has more computational power?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "TM"
                    },
                    {
                        "id": 102,
                        "question": "Which of these can recognize palindromes?",
                        "options": ["FA", "NFA", "PDA", "None"],
                        "answer": "PDA"
                    },
                    {
                        "id": 103,
                        "question": "Which of these is a non-regular language?",
                        "options": ["a*b*", "(01)*", "a^n b^n", "ε"],
                        "answer": "a^n b^n"
                    },
                    {
                        "id": 104,
                        "question": "Which automata is used in lexical analysis?",
                        "options": ["FA", "PDA", "TM", "LBA"],
                        "answer": "FA"
                    },
                    {
                        "id": 105,
                        "question": "Which of these is context-sensitive?",
                        "options": ["a^n b^n", "a^n b^n c^n", "(ab)*", "a*"],
                        "answer": "a^n b^n c^n"
                    },
                    {
                        "id": 106,
                        "question": "The Post Correspondence Problem is?",
                        "options": ["Decidable", "Undecidable", "Both", "None"],
                        "answer": "Undecidable"
                    },
                    {
                        "id": 107,
                        "question": "Which of these has linear bounded tape?",
                        "options": ["FA", "PDA", "LBA", "TM"],
                        "answer": "LBA"
                    },
                    {
                        "id": 108,
                        "question": "CFLs are closed under?",
                        "options": ["Union", "Concatenation", "Kleene star", "All"],
                        "answer": "All"
                    },
                    {
                        "id": 109,
                        "question": "Which one is not closed for CFL?",
                        "options": ["Union", "Concatenation", "Intersection", "Kleene star"],
                        "answer": "Intersection"
                    },
                    {
                        "id": 110,
                        "question": "Which machine can simulate all others?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "TM"
                    },
                    {
                        "id": 111,
                        "question": "Which one is a decidable problem?",
                        "options": ["DFA equivalence", "TM halting", "PCP", "All undecidable"],
                        "answer": "DFA equivalence"
                    },
                    {
                        "id": 112,
                        "question": "Ambiguity in CFG means?",
                        "options": ["One parse tree", "Multiple parse trees", "No parse tree", "None"],
                        "answer": "Multiple parse trees"
                    },
                    {
                        "id": 113,
                        "question": "Which automata is deterministic?",
                        "options": ["DFA", "NFA", "Both", "None"],
                        "answer": "DFA"
                    },
                    {
                        "id": 114,
                        "question": "Which machine is equivalent to unrestricted grammar?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "TM"
                    },
                    {
                        "id": 115,
                        "question": "CFGs are used in?",
                        "options": ["Compiler design", "Database", "Networking", "OS"],
                        "answer": "Compiler design"
                    },
                    {
                        "id": 116,
                        "question": "Which one is recursive?",
                        "options": ["Sorting", "Halting problem", "PCP", "All undecidable"],
                        "answer": "Sorting"
                    },
                    {
                        "id": 117,
                        "question": "Regular languages are closed under?",
                        "options": ["Union", "Complement", "Intersection", "All"],
                        "answer": "All"
                    },
                    {
                        "id": 118,
                        "question": "Which of these cannot be recognized by FA?",
                        "options": ["Even number of 0s", "Odd number of 1s", "Palindrome", "Divisible by 3"],
                        "answer": "Palindrome"
                    },
                    {
                        "id": 119,
                        "question": "Which automata recognizes balanced parentheses?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "PDA"
                    },
                    {
                        "id": 120,
                        "question": "Every CFL is?",
                        "options": ["Regular", "Recursive", "Context-sensitive", "Decidable"],
                        "answer": "Decidable"
                    },
                    {
                        "id": 121,
                        "question": "Which type of automata uses stack memory?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "PDA"
                    },
                    {
                        "id": 122,
                        "question": "Which machine has infinite tape?",
                        "options": ["FA", "PDA", "TM", "NFA"],
                        "answer": "TM"
                    },
                    {
                        "id": 123,
                        "question": "Which of these is not CFL?",
                        "options": ["{a^n b^n}", "{a^n b^n c^n}", "{a^m b^n}", "{(ab)*}"],
                        "answer": "{a^n b^n c^n}"
                    },
                    {
                        "id": 124,
                        "question": "The complement of CFL is always?",
                        "options": ["CFL", "Regular", "Not necessarily CFL", "Recursive"],
                        "answer": "Not necessarily CFL"
                    },
                    {
                        "id": 125,
                        "question": "Which of these describes Type 0 grammar?",
                        "options": ["Regular", "Context-Free", "Context-Sensitive", "Unrestricted"],
                        "answer": "Unrestricted"
                    },
                    {
                        "id": 126,
                        "question": "CFG is accepted by?",
                        "options": ["FA", "PDA", "TM", "LBA"],
                        "answer": "PDA"
                    },
                    {
                        "id": 127,
                        "question": "Which grammar type is used for programming language syntax?",
                        "options": ["Regular", "CFG", "Context-sensitive", "Unrestricted"],
                        "answer": "CFG"
                    },
                    {
                        "id": 128,
                        "question": "The universal Turing Machine is?",
                        "options": ["A special TM", "Simulates any TM", "Undecidable", "All"],
                        "answer": "Simulates any TM"
                    },
                    {
                        "id": 129,
                        "question": "Which is not true for Regular Languages?",
                        "options": ["Closed under union", "Closed under intersection", "Closed under complement", "Closed under CFG"],
                        "answer": "Closed under CFG"
                    },
                    {
                        "id": 130,
                        "question": "Which model describes computation in simple states?",
                        "options": ["FA", "PDA", "TM", "LBA"],
                        "answer": "FA"
                    },
                    {
                        "id": 131,
                        "question": "CFG ambiguity occurs when?",
                        "options": ["Multiple derivations exist", "No derivation", "Invalid grammar", "Infinite loops"],
                        "answer": "Multiple derivations exist"
                    },
                    {
                        "id": 132,
                        "question": "Recursive languages are?",
                        "options": ["Decidable", "Undecidable", "CFL", "Regular"],
                        "answer": "Decidable"
                    },
                    {
                        "id": 133,
                        "question": "Halting problem is?",
                        "options": ["Decidable", "Undecidable", "Semi-decidable", "Recursive"],
                        "answer": "Undecidable"
                    },
                    {
                        "id": 134,
                        "question": "Which automata is least powerful?",
                        "options": ["FA", "PDA", "TM", "LBA"],
                        "answer": "FA"
                    },
                    {
                        "id": 135,
                        "question": "Regular sets are closed under?",
                        "options": ["Union", "Kleene star", "Concatenation", "All"],
                        "answer": "All"
                    },
                    {
                        "id": 136,
                        "question": "Which of these is true about CFG?",
                        "options": ["Recognized by FA", "Recognized by PDA", "Recognized by TM only", "None"],
                        "answer": "Recognized by PDA"
                    },
                    {
                        "id": 137,
                        "question": "Languages accepted by LBA are?",
                        "options": ["Regular", "CFL", "Context-sensitive", "Recursive"],
                        "answer": "Context-sensitive"
                    },
                    {
                        "id": 138,
                        "question": "Which one can generate infinite languages?",
                        "options": ["Finite grammar", "Regular grammar", "CFG", "All"],
                        "answer": "All"
                    },
                    {
                        "id": 139,
                        "question": "Which of these is not recursive?",
                        "options": ["Sorting problem", "Halting problem", "String reversal", "Multiplication"],
                        "answer": "Halting problem"
                    },
                    {
                        "id": 140,
                        "question": "A language is recursively enumerable if?",
                        "options": ["TM always halts", "TM may or may not halt", "No TM exists", "Only FA exists"],
                        "answer": "TM may or may not halt"
                    },
                    {
                        "id": 141,
                        "question": "Which class is the smallest in hierarchy?",
                        "options": ["Regular", "CFL", "Context-sensitive", "RE"],
                        "answer": "Regular"
                    },
                    {
                        "id": 142,
                        "question": "Which is not closed for Regular languages?",
                        "options": ["Union", "Concatenation", "Complement", "Subsequence"],
                        "answer": "Subsequence"
                    },
                    {
                        "id": 143,
                        "question": "Which automata accepts deterministic CFL?",
                        "options": ["DFA", "DPDA", "NFA", "LBA"],
                        "answer": "DPDA"
                    },
                    {
                        "id": 144,
                        "question": "Chomsky hierarchy has how many levels?",
                        "options": ["2", "3", "4", "5"],
                        "answer": "4"
                    },
                    {
                        "id": 145,
                        "question": "Which of these is not a property of CFL?",
                        "options": ["Closed under union", "Closed under concatenation", "Closed under complement", "Closed under Kleene star"],
                        "answer": "Closed under complement"
                    },
                    {
                        "id": 146,
                        "question": "Which is not recognized by FA?",
                        "options": ["Even number of 0s", "Odd number of 1s", "a^n b^n", "Divisible by 2"],
                        "answer": "a^n b^n"
                    },
                    {
                        "id": 147,
                        "question": "Which problem is decidable?",
                        "options": ["DFA acceptance", "TM halting", "PCP", "All undecidable"],
                        "answer": "DFA acceptance"
                    },
                    {
                        "id": 148,
                        "question": "Which automata can recognize more languages?",
                        "options": ["FA", "NFA", "PDA", "TM"],
                        "answer": "TM"
                    },
                    {
                        "id": 149,
                        "question": "Which machine has finite states but no memory stack?",
                        "options": ["FA", "PDA", "TM", "LBA"],
                        "answer": "FA"
                    },
                    {
                        "id": 150,
                        "question": "The Church-Turing thesis relates to?",
                        "options": ["Limits of computation", "Programming languages", "Networking", "Compiler design"],
                        "answer": "Limits of computation"
                    },
                    {
                        "id": 151,
                        "question": "Which of the following is TRUE for regular languages?",
                        "options": ["Closed under union", "Closed under intersection", "Closed under complementation", "All of the above"],
                        "answer": "All of the above"
                    },
                    {
                        "id": 152,
                        "question": "Which automaton is more powerful?",
                        "options": ["NFA", "DFA", "Both are equally powerful", "DFA with ε-moves"],
                        "answer": "Both are equally powerful"
                    },
                    {
                        "id": 153,
                        "question": "Which problem is undecidable?",
                        "options": ["Halting problem", "Union of regular languages", "Minimization of DFA", "Subset checking of DFAs"],
                        "answer": "Halting problem"
                    },
                    {
                        "id": 154,
                        "question": "CFG is used to describe?",
                        "options": ["Lexical structure", "Syntax of programming languages", "Semantics of languages", "Machine code"],
                        "answer": "Syntax of programming languages"
                    },
                    {
                        "id": 155,
                        "question": "The pumping lemma is used to prove?",
                        "options": ["Language is regular", "Language is not regular", "Language is context-free", "Language is finite"],
                        "answer": "Language is not regular"
                    },
                    {
                        "id": 156,
                        "question": "Which of the following machines has the highest computational power?",
                        "options": ["NFA", "DFA", "PDA", "Turing Machine"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 157,
                        "question": "In DFA, the number of transitions from each state is?",
                        "options": ["Equal to alphabet size", "At least 1", "At most 1", "Any number"],
                        "answer": "Equal to alphabet size"
                    },
                    {
                        "id": 158,
                        "question": "A language accepted by PDA but not by DFA is?",
                        "options": ["Regular", "Non-regular but context-free", "Context-sensitive", "Recursive"],
                        "answer": "Non-regular but context-free"
                    },
                    {
                        "id": 159,
                        "question": "Which of the following problems is decidable?",
                        "options": ["Whether a DFA accepts a string", "Halting problem", "Equivalence of Turing machines", "Ambiguity of CFG"],
                        "answer": "Whether a DFA accepts a string"
                    },
                    {
                        "id": 160,
                        "question": "The class of recursive enumerable languages is?",
                        "options": ["Closed under union", "Closed under concatenation", "Closed under Kleene star", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 161,
                        "question": "Which of the following is NOT true for regular languages?",
                        "options": ["Closed under union", "Closed under intersection", "Closed under reversal", "Closed under homomorphism"],
                        "answer": "Closed under intersection"
                    },
                    {
                        "id": 162,
                        "question": "Which grammar generates the language {a^n b^n | n ≥ 0}?",
                        "options": ["Regular grammar", "Context-free grammar", "Context-sensitive grammar", "Unrestricted grammar"],
                        "answer": "Context-free grammar"
                    },
                    {
                        "id": 163,
                        "question": "The set of all palindromes over {a,b} is?",
                        "options": ["Regular", "Context-free", "Context-sensitive", "Recursive"],
                        "answer": "Context-free"
                    },
                    {
                        "id": 164,
                        "question": "Which is more powerful than CFG?",
                        "options": ["Regular grammar", "Context-sensitive grammar", "Finite automata", "NFA"],
                        "answer": "Context-sensitive grammar"
                    },
                    {
                        "id": 165,
                        "question": "A pushdown automaton with two stacks is equivalent to?",
                        "options": ["DFA", "CFG", "Turing machine", "NFA"],
                        "answer": "Turing machine"
                    },
                    {
                        "id": 166,
                        "question": "Which type of automaton is used in compilers for parsing?",
                        "options": ["DFA", "PDA", "Turing machine", "Moore machine"],
                        "answer": "PDA"
                    },
                    {
                        "id": 167,
                        "question": "CFG ambiguity means?",
                        "options": ["String has multiple leftmost derivations", "String has multiple rightmost derivations", "String has multiple parse trees", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 168,
                        "question": "Which of the following languages is not regular?",
                        "options": ["a*b*", "(ab)*", "{a^n b^n | n ≥ 0}", "Σ*"],
                        "answer": "{a^n b^n | n ≥ 0}"
                    },
                    {
                        "id": 169,
                        "question": "Turing machines can recognize?",
                        "options": ["Only regular languages", "Only context-free languages", "Recursively enumerable languages", "Context-sensitive languages only"],
                        "answer": "Recursively enumerable languages"
                    },
                    {
                        "id": 170,
                        "question": "Which operation is NOT closed in context-free languages?",
                        "options": ["Union", "Concatenation", "Intersection", "Kleene star"],
                        "answer": "Intersection"
                    },
                    {
                        "id": 171,
                        "question": "Which automaton is used to recognize lexical tokens?",
                        "options": ["DFA", "PDA", "Turing Machine", "CFG"],
                        "answer": "DFA"
                    },
                    {
                        "id": 172,
                        "question": "The language accepted by a DFA is always?",
                        "options": ["Regular", "Context-free", "Context-sensitive", "Recursive"],
                        "answer": "Regular"
                    },
                    {
                        "id": 173,
                        "question": "Which machine halts on all inputs?",
                        "options": ["Recursive enumerable TM", "Recursive TM", "NFA", "DFA"],
                        "answer": "Recursive TM"
                    },
                    {
                        "id": 174,
                        "question": "Which of the following is undecidable?",
                        "options": ["Ambiguity problem of CFG", "Membership problem for DFA", "Membership problem for CFG", "Minimization of DFA"],
                        "answer": "Ambiguity problem of CFG"
                    },
                    {
                        "id": 175,
                        "question": "Myhill-Nerode theorem is used for?",
                        "options": ["Minimization of DFA", "Construction of PDA", "Parsing CFG", "Designing TM"],
                        "answer": "Minimization of DFA"
                    },
                    {
                        "id": 176,
                        "question": "The Chomsky hierarchy has how many levels?",
                        "options": ["2", "3", "4", "5"],
                        "answer": "4"
                    },
                    {
                        "id": 177,
                        "question": "Which type of grammar is regular?",
                        "options": ["Type 0", "Type 1", "Type 2", "Type 3"],
                        "answer": "Type 3"
                    },
                    {
                        "id": 178,
                        "question": "Which type of grammar is context-sensitive?",
                        "options": ["Type 0", "Type 1", "Type 2", "Type 3"],
                        "answer": "Type 1"
                    },
                    {
                        "id": 179,
                        "question": "Which type of grammar is unrestricted?",
                        "options": ["Type 0", "Type 1", "Type 2", "Type 3"],
                        "answer": "Type 0"
                    },
                    {
                        "id": 180,
                        "question": "Which type of grammar is context-free?",
                        "options": ["Type 0", "Type 1", "Type 2", "Type 3"],
                        "answer": "Type 2"
                    },
                    {
                        "id": 181,
                        "question": "Finite automata cannot recognize?",
                        "options": ["a*b*", "(ab)*", "{a^n b^n}", "Strings with even number of 0s"],
                        "answer": "{a^n b^n}"
                    },
                    {
                        "id": 182,
                        "question": "CFG can be converted into?",
                        "options": ["DFA", "PDA", "Moore machine", "Mealy machine"],
                        "answer": "PDA"
                    },
                    {
                        "id": 183,
                        "question": "Which parsing is used in bottom-up parsers?",
                        "options": ["Leftmost derivation", "Rightmost derivation in reverse", "Both", "None"],
                        "answer": "Rightmost derivation in reverse"
                    },
                    {
                        "id": 184,
                        "question": "Which language is inherently ambiguous?",
                        "options": ["a^n b^n", "a^n b^n c^n", "ww^R", "a^i b^j c^k | i = j or j = k"],
                        "answer": "a^i b^j c^k | i = j or j = k"
                    },
                    {
                        "id": 185,
                        "question": "Which machine is equivalent to unrestricted grammar?",
                        "options": ["NFA", "DFA", "PDA", "Turing Machine"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 186,
                        "question": "Subset construction is used to convert?",
                        "options": ["DFA to NFA", "NFA to DFA", "PDA to CFG", "CFG to PDA"],
                        "answer": "NFA to DFA"
                    },
                    {
                        "id": 187,
                        "question": "Every DFA is also?",
                        "options": ["NFA", "PDA", "TM", "CFG"],
                        "answer": "NFA"
                    },
                    {
                        "id": 188,
                        "question": "Which is TRUE about Moore and Mealy machines?",
                        "options": ["Moore more powerful", "Mealy more powerful", "Both equivalent", "Mealy weaker"],
                        "answer": "Both equivalent"
                    },
                    {
                        "id": 189,
                        "question": "Which of the following problems is decidable?",
                        "options": ["Emptiness problem for DFA", "Halting problem", "Ambiguity problem for CFG", "Equivalence of TM"],
                        "answer": "Emptiness problem for DFA"
                    },
                    {
                        "id": 190,
                        "question": "The set of recursive languages is?",
                        "options": ["Closed under union", "Closed under intersection", "Closed under complementation", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 191,
                        "question": "Which operation is not closed in context-free languages?",
                        "options": ["Union", "Concatenation", "Kleene star", "Complementation"],
                        "answer": "Complementation"
                    },
                    {
                        "id": 192,
                        "question": "The complement of a recursive enumerable language is?",
                        "options": ["Always recursive enumerable", "Not necessarily recursive enumerable", "Always recursive", "None"],
                        "answer": "Not necessarily recursive enumerable"
                    },
                    {
                        "id": 193,
                        "question": "Which normal form is used in CFG for parsing?",
                        "options": ["CNF", "GNF", "Both", "None"],
                        "answer": "Both"
                    },
                    {
                        "id": 194,
                        "question": "Which of the following is TRUE?",
                        "options": ["Every regular language is context-free", "Every CFG is regular", "Every TM language is context-free", "All CFG are regular"],
                        "answer": "Every regular language is context-free"
                    },
                    {
                        "id": 195,
                        "question": "The halting problem was proved undecidable by?",
                        "options": ["Alan Turing", "Noam Chomsky", "Kleene", "Cook"],
                        "answer": "Alan Turing"
                    },
                    {
                        "id": 196,
                        "question": "Which parsing technique is top-down?",
                        "options": ["LL(1)", "LR(0)", "SLR", "LALR"],
                        "answer": "LL(1)"
                    },
                    {
                        "id": 197,
                        "question": "Which parsing technique is bottom-up?",
                        "options": ["LL(1)", "LR(1)", "Recursive descent", "Predictive"],
                        "answer": "LR(1)"
                    },
                    {
                        "id": 198,
                        "question": "Language accepted by PDA is?",
                        "options": ["Regular", "Context-free", "Recursive", "Unrestricted"],
                        "answer": "Context-free"
                    },
                    {
                        "id": 199,
                        "question": "Which machine cannot handle memory beyond finite states?",
                        "options": ["DFA", "NFA", "Moore", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 200,
                        "question": "Turing machine can simulate?",
                        "options": ["DFA", "NFA", "PDA", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 201,
                        "question": "CFG without left recursion is useful for?",
                        "options": ["Top-down parsing", "Bottom-up parsing", "DFA", "TM"],
                        "answer": "Top-down parsing"
                    },
                    {
                        "id": 202,
                        "question": "LR parsers are?",
                        "options": ["Top-down", "Bottom-up", "Both", "None"],
                        "answer": "Bottom-up"
                    },
                    {
                        "id": 203,
                        "question": "Which problem is decidable for CFG?",
                        "options": ["Membership problem", "Ambiguity problem", "Equivalence problem", "Inclusion problem"],
                        "answer": "Membership problem"
                    },
                    {
                        "id": 204,
                        "question": "The acceptance by PDA is by?",
                        "options": ["Final state", "Empty stack", "Both", "None"],
                        "answer": "Both"
                    },
                    {
                        "id": 205,
                        "question": "What is a Universal Turing Machine?",
                        "options": ["A TM that simulates any other TM", "A DFA that simulates PDA", "A TM with finite input", "A special PDA"],
                        "answer": "A TM that simulates any other TM"
                    },
                    {
                        "id": 206,
                        "question": "Regular expression (a|b)* represents?",
                        "options": ["Only a’s", "Only b’s", "All strings of a and b", "Empty string only"],
                        "answer": "All strings of a and b"
                    },
                    {
                        "id": 207,
                        "question": "Which problem is undecidable?",
                        "options": ["Halting problem", "Membership of DFA", "Minimization of DFA", "Construction of PDA"],
                        "answer": "Halting problem"
                    },
                    {
                        "id": 208,
                        "question": "Every regular expression can be converted into?",
                        "options": ["CFG", "DFA", "TM", "PDA"],
                        "answer": "DFA"
                    },
                    {
                        "id": 209,
                        "question": "Which one is not part of Chomsky hierarchy?",
                        "options": ["Type 0", "Type 1", "Type 4", "Type 3"],
                        "answer": "Type 4"
                    },
                    {
                        "id": 210,
                        "question": "A context-sensitive grammar can be recognized by?",
                        "options": ["DFA", "PDA", "Linear bounded automata", "TM"],
                        "answer": "Linear bounded automata"
                    },
                    {
                        "id": 211,
                        "question": "Which language is not context-free?",
                        "options": ["a^n b^n", "a^n b^n c^n", "(ab)*", "Palindrome"],
                        "answer": "a^n b^n c^n"
                    },
                    {
                        "id": 212,
                        "question": "Turing machine with k tapes is?",
                        "options": ["More powerful than 1-tape TM", "Less powerful", "Equivalent in power", "Not possible"],
                        "answer": "Equivalent in power"
                    },
                    {
                        "id": 213,
                        "question": "Recursive languages are?",
                        "options": ["Decidable", "Undecidable", "Not RE", "Uncomputable"],
                        "answer": "Decidable"
                    },
                    {
                        "id": 214,
                        "question": "The closure property of regular languages includes?",
                        "options": ["Union", "Concatenation", "Kleene star", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 215,
                        "question": "A DFA can be minimized using?",
                        "options": ["Equivalence theorem", "Subset construction", "Pumping lemma", "Parse tree"],
                        "answer": "Equivalence theorem"
                    },
                    {
                        "id": 216,
                        "question": "Regular languages are?",
                        "options": ["Finite memory languages", "Infinite memory languages", "Context-sensitive", "Unrestricted"],
                        "answer": "Finite memory languages"
                    },
                    {
                        "id": 217,
                        "question": "Which automaton uses stack as memory?",
                        "options": ["DFA", "NFA", "PDA", "TM"],
                        "answer": "PDA"
                    },
                    {
                        "id": 218,
                        "question": "The set {ww | w ∈ {a, b}*} is?",
                        "options": ["Regular", "Context-free", "Context-sensitive", "Unrestricted"],
                        "answer": "Context-sensitive"
                    },
                    {
                        "id": 219,
                        "question": "Turing machines are equivalent to?",
                        "options": ["Finite automata", "Recursive enumerable languages", "Regular expressions", "None"],
                        "answer": "Recursive enumerable languages"
                    },
                    {
                        "id": 220,
                        "question": "Every regular language is also?",
                        "options": ["Recursive", "Context-free", "Both", "None"],
                        "answer": "Both"
                    },
                    {
                        "id": 221,
                        "question": "The pumping lemma is used to prove:",
                        "options": ["A language is regular", "A language is context-free", "A language is not regular", "A grammar is ambiguous"],
                        "answer": "A language is not regular"
                    },
                    {
                        "id": 222,
                        "question": "Which grammar generates programming languages more commonly?",
                        "options": ["Regular grammar", "Context-free grammar", "Unrestricted grammar", "Context-sensitive grammar"],
                        "answer": "Context-free grammar"
                    },
                    {
                        "id": 223,
                        "question": "What does DFA have that NFA does not?",
                        "options": ["Epsilon transitions", "Unique next state", "Multiple start states", "Multiple accepting states"],
                        "answer": "Unique next state"
                    },
                    {
                        "id": 224,
                        "question": "Which machine is most powerful?",
                        "options": ["Finite Automata", "Pushdown Automata", "Turing Machine", "DFA"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 225,
                        "question": "Chomsky hierarchy type-0 corresponds to:",
                        "options": ["Regular", "Context-free", "Context-sensitive", "Unrestricted grammar"],
                        "answer": "Unrestricted grammar"
                    },
                    {
                        "id": 226,
                        "question": "Which of the following languages is not regular?",
                        "options": ["a*b*", "(ab)*", "{a^n b^n | n ≥ 0}", "a*"],
                        "answer": "{a^n b^n | n ≥ 0}"
                    },
                    {
                        "id": 227,
                        "question": "A left-recursive grammar is problematic for:",
                        "options": ["Bottom-up parser", "Top-down parser", "Shift-reduce parser", "LR parser"],
                        "answer": "Top-down parser"
                    },
                    {
                        "id": 228,
                        "question": "In PDA, the stack is used to handle:",
                        "options": ["Memory allocation", "Nesting and recursion", "Scheduling", "Registers"],
                        "answer": "Nesting and recursion"
                    },
                    {
                        "id": 229,
                        "question": "Which of the following is decidable?",
                        "options": ["Halting problem", "Membership problem for DFA", "Ambiguity of CFG", "Equivalence of CFG"],
                        "answer": "Membership problem for DFA"
                    },
                    {
                        "id": 230,
                        "question": "CYK algorithm is used for:",
                        "options": ["Lexical analysis", "Parsing context-free grammar", "Code optimization", "Turing machines"],
                        "answer": "Parsing context-free grammar"
                    },
                    {
                        "id": 231,
                        "question": "If a language is context-free, then it is always:",
                        "options": ["Regular", "Recursive enumerable", "Context-sensitive", "Finite"],
                        "answer": "Recursive enumerable"
                    },
                    {
                        "id": 232,
                        "question": "Which automata is best suited for lexical analysis?",
                        "options": ["NFA", "DFA", "PDA", "TM"],
                        "answer": "DFA"
                    },
                    {
                        "id": 233,
                        "question": "Which of the following is not true about Turing Machines?",
                        "options": ["They can simulate any algorithm", "They have finite memory", "They use infinite tape", "They are universal models of computation"],
                        "answer": "They have finite memory"
                    },
                    {
                        "id": 234,
                        "question": "Which grammar allows unrestricted productions?",
                        "options": ["Type-0", "Type-1", "Type-2", "Type-3"],
                        "answer": "Type-0"
                    },
                    {
                        "id": 235,
                        "question": "Which parsing method is most powerful?",
                        "options": ["LL(1)", "LR(1)", "SLR", "LALR"],
                        "answer": "LR(1)"
                    },
                    {
                        "id": 236,
                        "question": "Which machine is weaker than PDA?",
                        "options": ["Finite Automata", "Turing Machine", "Multi-tape Turing Machine", "Universal Turing Machine"],
                        "answer": "Finite Automata"
                    },
                    {
                        "id": 237,
                        "question": "Closure properties of regular languages include:",
                        "options": ["Union", "Concatenation", "Kleene star", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 238,
                        "question": "Context-sensitive languages are accepted by:",
                        "options": ["DFA", "PDA", "Linear Bounded Automata", "Turing Machine"],
                        "answer": "Linear Bounded Automata"
                    },
                    {
                        "id": 239,
                        "question": "Which automata model is nondeterminism equal to determinism?",
                        "options": ["Finite Automata", "Pushdown Automata", "Turing Machine", "LBA"],
                        "answer": "Finite Automata"
                    },
                    {
                        "id": 240,
                        "question": "Ambiguous grammars allow:",
                        "options": ["Multiple parse trees for same string", "Single parse tree always", "No derivation", "Only left derivations"],
                        "answer": "Multiple parse trees for same string"
                    },
                    {
                        "id": 241,
                        "question": "Which machine can recognize recursively enumerable languages?",
                        "options": ["DFA", "NFA", "PDA", "Turing Machine"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 242,
                        "question": "Subset construction is used for:",
                        "options": ["NFA to DFA conversion", "Minimization of DFA", "CFG simplification", "Parsing"],
                        "answer": "NFA to DFA conversion"
                    },
                    {
                        "id": 243,
                        "question": "Which algorithm is used for DFA minimization?",
                        "options": ["Hopcroft’s algorithm", "CYK algorithm", "KMP algorithm", "Prim’s algorithm"],
                        "answer": "Hopcroft’s algorithm"
                    },
                    {
                        "id": 244,
                        "question": "Chomsky Normal Form applies to:",
                        "options": ["DFA", "CFG", "PDA", "TM"],
                        "answer": "CFG"
                    },
                    {
                        "id": 245,
                        "question": "Which property is undecidable?",
                        "options": ["Membership of DFA", "Ambiguity of CFG", "Emptiness of DFA", "Finiteness of DFA"],
                        "answer": "Ambiguity of CFG"
                    },
                    {
                        "id": 246,
                        "question": "A PDA with two stacks is equivalent to:",
                        "options": ["Finite Automata", "CFG", "Turing Machine", "DFA"],
                        "answer": "Turing Machine"
                    },
                    {
                        "id": 247,
                        "question": "Regular expressions cannot represent:",
                        "options": ["Union", "Kleene star", "Concatenation", "{a^n b^n | n ≥ 0}"],
                        "answer": "{a^n b^n | n ≥ 0}"
                    },
                    {
                        "id": 248,
                        "question": "Which of these is not part of Chomsky hierarchy?",
                        "options": ["Regular", "Context-free", "Recursive enumerable", "Context-sensitive"],
                        "answer": "Recursive enumerable"
                    },
                    {
                        "id": 249,
                        "question": "Which automaton cannot handle nested structures like balanced parentheses?",
                        "options": ["DFA", "NFA", "PDA", "TM"],
                        "answer": "DFA"
                    },
                    {
                        "id": 250,
                        "question": "Which of the following is true?",
                        "options": ["Every regular language is context-free", "Every context-free language is regular", "Every recursive language is context-free", "Every context-sensitive language is regular"],
                        "answer": "Every regular language is context-free"
                    },
                    {
                        "id": 251,
                        "question": "Which machine decides context-sensitive languages?",
                        "options": ["PDA", "DFA", "Linear Bounded Automata", "Universal Turing Machine"],
                        "answer": "Linear Bounded Automata"
                    },
                    {
                        "id": 252,
                        "question": "Recursive enumerable languages are closed under:",
                        "options": ["Union", "Concatenation", "Intersection", "All of these"],
                        "answer": "All of these"
                    },
                    {
                        "id": 253,
                        "question": "Which parsing method uses stack explicitly?",
                        "options": ["LL parser", "LR parser", "Both", "None"],
                        "answer": "Both"
                    },
                    {
                        "id": 254,
                        "question": "Which among these is the most restricted class of grammar?",
                        "options": ["Regular", "Context-free", "Context-sensitive", "Unrestricted"],
                        "answer": "Regular"
                    },
                    {
                        "id": 255,
                        "question": "The halting problem is:",
                        "options": ["Decidable", "Undecidable", "Context-free", "Regular"],
                        "answer": "Undecidable"
                    },
                    {
                        "id": 256,
                        "question": "Which of the following has memory in terms of stack?",
                        "options": ["DFA", "NFA", "PDA", "TM"],
                        "answer": "PDA"
                    },
                    {
                        "id": 257,
                        "question": "Deterministic PDA is less powerful than:",
                        "options": ["DFA", "NFA", "Non-deterministic PDA", "TM"],
                        "answer": "Non-deterministic PDA"
                    },
                    {
                        "id": 258,
                        "question": "Which normal form eliminates useless symbols?",
                        "options": ["Chomsky Normal Form", "Greibach Normal Form", "Reduced Grammar", "Left Factored Grammar"],
                        "answer": "Reduced Grammar"
                    },
                    {
                        "id": 259,
                        "question": "Which algorithm is used for string matching?",
                        "options": ["Hopcroft", "CYK", "KMP", "LR"],
                        "answer": "KMP"
                    },
                    {
                        "id": 260,
                        "question": "Languages accepted by DFA are:",
                        "options": ["Finite", "Infinite", "Regular", "Context-free"],
                        "answer": "Regular"
                    },
                    {
                        "id": 261,
                        "question": "Which parser handles ambiguous grammar?",
                        "options": ["LL parser", "LR parser", "GLR parser", "SLR parser"],
                        "answer": "GLR parser"
                    },
                    {
                        "id": 262,
                        "question": "The Myhill-Nerode theorem is used for:",
                        "options": ["DFA minimization", "CFG simplification", "PDA design", "TM design"],
                        "answer": "DFA minimization"
                    },
                    {
                        "id": 263,
                        "question": "Which language is not context-free?",
                        "options": ["{a^n b^n | n ≥ 0}", "{a^n b^n c^n | n ≥ 0}", "(ab)*", "a* b*"],
                        "answer": "{a^n b^n c^n | n ≥ 0}"
                    },
                    {
                        "id": 264,
                        "question": "Parsing is done at which phase of compilation?",
                        "options": ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
                        "answer": "Syntax Analysis"
                    },
                    {
                        "id": 265,
                        "question": "Which is not a closure property of CFL?",
                        "options": ["Union", "Concatenation", "Intersection", "Kleene Star"],
                        "answer": "Intersection"
                    },
                    {
                        "id": 266,
                        "question": "If a PDA has no stack, it becomes:",
                        "options": ["DFA", "TM", "CFG", "LBA"],
                        "answer": "DFA"
                    },
                    {
                        "id": 267,
                        "question": "Which grammar form starts with terminals?",
                        "options": ["Greibach Normal Form", "Chomsky Normal Form", "Reduced Grammar", "Left Factored"],
                        "answer": "Greibach Normal Form"
                    },
                    {
                        "id": 268,
                        "question": "Which machine model is equivalent to RAM?",
                        "options": ["DFA", "TM", "PDA", "LBA"],
                        "answer": "TM"
                    },
                    {
                        "id": 269,
                        "question": "CFG ambiguity can be resolved using:",
                        "options": ["CNF", "GNF", "Left factoring", "Subset construction"],
                        "answer": "Left factoring"
                    },
                    {
                        "id": 270,
                        "question": "Which languages can be recognized but not decided?",
                        "options": ["Recursive enumerable", "Recursive", "Context-free", "Regular"],
                        "answer": "Recursive enumerable"
                    },
                    {
                        "id": 271,
                        "question": "What is the worst-case time complexity of CYK algorithm?",
                        "options": ["O(n^2)", "O(n^3)", "O(n log n)", "O(n^4)"],
                        "answer": "O(n^3)"
                    },
                    {
                        "id": 272,
                        "question": "Which theorem proves non-regularity?",
                        "options": ["Rice’s theorem", "Pumping lemma", "Myhill-Nerode", "Halting theorem"],
                        "answer": "Pumping lemma"
                    },
                    {
                        "id": 273,
                        "question": "Which machine is used for decision problems?",
                        "options": ["DFA", "PDA", "TM", "LBA"],
                        "answer": "TM"
                    },
                    {
                        "id": 274,
                        "question": "CFG in CNF has productions of form:",
                        "options": ["A → BC or A → a", "A → aB", "A → ε always", "A → ABB"],
                        "answer": "A → BC or A → a"
                    },
                    {
                        "id": 275,
                        "question": "Which of these is true?",
                        "options": ["All recursive languages are recursive enumerable", "All recursive enumerable languages are recursive", "All regular languages are undecidable", "All CFGs are recursive"],
                        "answer": "All recursive languages are recursive enumerable"
                    },
                    {
                        "id": 276,
                        "question": "A universal Turing machine simulates:",
                        "options": ["Finite Automata", "Any other Turing Machine", "Only DFA", "Only PDA"],
                        "answer": "Any other Turing Machine"
                    },
                    {
                        "id": 277,
                        "question": "Rice’s theorem applies to:",
                        "options": ["Properties of languages", "Properties of recursive enumerable languages", "Parsing", "Optimization"],
                        "answer": "Properties of recursive enumerable languages"
                    },
                    {
                        "id": 278,
                        "question": "Which machine decides emptiness of DFA?",
                        "options": ["DFA", "PDA", "TM", "All"],
                        "answer": "TM"
                    },
                    {
                        "id": 279,
                        "question": "Which of these is not a CFL?",
                        "options": ["{a^n b^n | n ≥ 0}", "a*b*", "{a^n b^n c^n | n ≥ 0}", "(ab)*"],
                        "answer": "{a^n b^n c^n | n ≥ 0}"
                    },
                    {
                        "id": 280,
                        "question": "CFG is useful in describing:",
                        "options": ["Syntax of programming languages", "Semantics", "Optimization", "Machine instructions"],
                        "answer": "Syntax of programming languages"
                    },
                    {
                        "id": 281,
                        "question": "Which among these is recursive?",
                        "options": ["DFA membership problem", "CFG ambiguity problem", "Halting problem", "Equivalence problem for CFG"],
                        "answer": "DFA membership problem"
                    },
                    {
                        "id": 282,
                        "question": "Which parser is efficient for deterministic context-free languages?",
                        "options": ["LL(1)", "LR(1)", "Both", "None"],
                        "answer": "LR(1)"
                    },
                    {
                        "id": 283,
                        "question": "A Turing Machine with a tape bounded by input length is:",
                        "options": ["DFA", "PDA", "LBA", "TM"],
                        "answer": "LBA"
                    },
                    {
                        "id": 284,
                        "question": "What is the closure property of regular languages under reversal?",
                        "options": ["Closed", "Not closed", "Sometimes closed", "Depends on DFA"],
                        "answer": "Closed"
                    },
                    {
                        "id": 285,
                        "question": "Which grammar generates palindrome language?",
                        "options": ["Regular grammar", "CFG", "Type-0 grammar", "None"],
                        "answer": "CFG"
                    },
                    {
                        "id": 286,
                        "question": "Non-determinism in PDA is:",
                        "options": ["More powerful than deterministic PDA", "Less powerful", "Same power", "No relation"],
                        "answer": "More powerful than deterministic PDA"
                    },
                    {
                        "id": 287,
                        "question": "Which of these languages is regular?",
                        "options": ["{ww | w ∈ {a,b}*}", "{a^n b^n}", "(ab)*", "{a^n b^n c^n}"],
                        "answer": "(ab)*"
                    },
                    {
                        "id": 288,
                        "question": "Which problem is undecidable for Turing Machine?",
                        "options": ["Halting problem", "DFA membership", "CFG membership", "DFA equivalence"],
                        "answer": "Halting problem"
                    },

                ]


            }
        }
}
export default TOC;