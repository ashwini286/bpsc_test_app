// src/questions/dbms.js
// 500 DBMS MCQs (suitable for STET / BPSC style prep)
// Each item: { id, question, options: [4], correct: <index 0-3> }

const templates = [
  {
    question: "Which of the following is NOT a DBMS function?",
    options: [
      "Data storage management",
      "Transaction management",
      "Network packet routing",
      "Concurrency control"
    ],
    correct: 2
  },
  {
    question: "In the relational model, a tuple is equivalent to a:",
    options: ["Row", "Column", "Domain", "Attribute"],
    correct: 0
  },
  {
    question: "Which SQL command is used to remove a table and its data permanently?",
    options: ["DELETE TABLE table_name", "DROP TABLE table_name", "TRUNCATE table_name", "REMOVE TABLE table_name"],
    correct: 1
  },
  {
    question: "A PRIMARY KEY must be:",
    options: ["Unique and not null", "Nullable", "Non-unique", "Allowed to repeat"],
    correct: 0
  },
  {
    question: "Which normal form removes partial dependency (i.e., every non-prime attribute fully functionally depends on primary key)?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 1
  },
  {
    question: "A foreign key in a relation refers to:",
    options: ["An attribute in the same relation", "A primary key in another relation", "A constraint type not related to keys", "A view definition"],
    correct: 1
  },
  {
    question: "Which of the following is a DDL command?",
    options: ["SELECT", "INSERT", "ALTER", "GRANT"],
    correct: 2
  },
  {
    question: "Which isolation level can allow dirty reads?",
    options: ["SERIALIZABLE", "READ COMMITTED", "READ UNCOMMITTED", "REPEATABLE READ"],
    correct: 2
  },
  {
    question: "ACID property that ensures either all operations of a transaction are done or none are done is:",
    options: ["Atomicity", "Consistency", "Isolation", "Durability"],
    correct: 0
  },
  {
    question: "Which join returns rows when there is a match in both tables?",
    options: ["LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN", "INNER JOIN"],
    correct: 3
  },
  {
    question: "A clustered index determines the physical order of data in the table. True or False?",
    options: ["True", "False", "Only for NoSQL", "Only in memory databases"],
    correct: 0
  },
  {
    question: "Which of these is NOT a relational algebra operator?",
    options: ["Selection (σ)", "Projection (π)", "Concatenation (⊕)", "Join (⋈)"],
    correct: 2
  },
  {
    question: "Normalization primarily aims to:",
    options: ["Increase redundancy", "Reduce redundancy and avoid anomalies", "Improve UI of application", "Encrypt data"],
    correct: 1
  },
  {
    question: "Which SQL clause is used to group rows sharing a property?",
    options: ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
    correct: 1
  },
  {
    question: "Which of the following logs is essential for recovery after crash using ARIES-like methods?",
    options: ["Audit log only", "Redo/undo log (write-ahead log)", "Web server log", "OS syslog"],
    correct: 1
  },
  {
    question: "A superkey is:",
    options: ["A key that uniquely identifies a tuple", "A minimal key", "Always the primary key", "An encryption key"],
    correct: 0
  },
  {
    question: "Which of these is NOT a transaction state?",
    options: ["Active", "Partially committed", "Aborted", "Synchronized"],
    correct: 3
  },
  {
    question: "The SQL clause used to remove duplicate rows is:",
    options: ["UNIQUE", "DISTINCT", "REDUCE", "DIFFERENT"],
    correct: 1
  },
  {
    question: "In a relation, an attribute's domain refers to:",
    options: ["Allowed set of values", "Number of rows", "Type of constraints", "Primary key value"],
    correct: 0
  },
  {
    question: "Which index type is best for range queries?",
    options: ["Hash index", "B-Tree index", "Bitmap index", "Inverted index"],
    correct: 1
  },
  {
    question: "TRUNCATE TABLE differs from DELETE in that TRUNCATE:",
    options: ["Removes rows one by one", "Is slower", "Resets storage and is usually non-transactional", "Invokes triggers for each row"],
    correct: 2
  },
  {
    question: "Which constraint ensures that two attributes are not equal across rows?",
    options: ["CHECK", "UNIQUE", "NOT NULL", "FOREIGN KEY"],
    correct: 1
  },
  {
    question: "A view in SQL is:",
    options: ["A physical copy of data", "A virtual table based on query", "A type of index", "A backup file"],
    correct: 1
  },
  {
    question: "Which of the following causes a 'lost update' problem in concurrent transactions?",
    options: ["Two transactions read and write same data without synchronization", "Transactions are serialized", "Use of locks", "Two-phase commit"],
    correct: 0
  },
  {
    question: "Relational algebra's projection (π) removes:",
    options: ["Rows", "Columns", "Keys", "Indexes"],
    correct: 1
  },
  {
    question: "Which SQL clause filters groups after aggregation?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    correct: 2
  },
  {
    question: "In ER modeling, a weak entity depends on:",
    options: ["Nothing", "A strong entity for identification", "Only attributes", "A view"],
    correct: 1
  },
  {
    question: "Which normal form removes transitive dependency?",
    options: ["2NF", "3NF", "BCNF", "1NF"],
    correct: 1
  },
  {
    question: "When a transaction commits, which property ensures changes persist even after crash?",
    options: ["Atomicity", "Durability", "Consistency", "Isolation"],
    correct: 1
  },
  {
    question: "A composite key is:",
    options: ["A key made of multiple attributes", "A key with composite data type", "A hashed key", "An encryption key"],
    correct: 0
  },
  {
    question: "Which SQL statement is used to grant permissions to a user?",
    options: ["GRANT", "ALLOW", "GIVE", "PERMIT"],
    correct: 0
  },
  {
    question: "SELECT * FROM A CROSS JOIN B returns:",
    options: ["Intersection of A and B", "Cartesian product of A and B", "Only matching rows", "Only non-matching rows"],
    correct: 1
  },
  {
    question: "Which is used to enforce referential integrity automatically on delete?",
    options: ["ON DELETE CASCADE", "ON DELETE IGNORE", "ON DELETE SET NULLABLE", "ON DELETE DROP"],
    correct: 0
  },
  {
    question: "Which of the following is true about primary key?",
    options: ["Can accept NULL", "Must be unique and non-null", "Can have duplicates", "Is optional for relational tables"],
    correct: 1
  },
  {
    question: "Which SQL command is used to change table structure (add column)?",
    options: ["UPDATE TABLE", "ALTER TABLE", "MODIFY TABLE", "CHANGE TABLE"],
    correct: 1
  },
  {
    question: "An index that uses bitmaps is especially useful for:",
    options: ["High-cardinality columns", "Low-cardinality columns", "Text search", "Binary data storage"],
    correct: 1
  },
  {
    question: "Which recovery technique rolls back uncommitted transactions after crash?",
    options: ["Redo-only", "Undo-only", "Undo + Redo", "No recovery needed"],
    correct: 2
  },
  {
    question: "In SQL, aggregate function that returns number of rows is:",
    options: ["SUM()", "COUNT()", "AVG()", "ROWNUM()"],
    correct: 1
  },
  {
    question: "A candidate key is:",
    options: ["A minimal superkey", "An attribute storing candidate names", "Always composite", "Same as foreign key"],
    correct: 0
  },
  {
    question: "Which operator in SQL is used for pattern matching?",
    options: ["LIKE", "MATCH", "PATTERN", "SIMILAR"],
    correct: 0
  },
  {
    question: "Which command creates a new table with a structure defined?",
    options: ["INSERT INTO", "CREATE TABLE", "MAKE TABLE", "NEW TABLE"],
    correct: 1
  },
  {
    question: "In DBMS, buffering is used for:",
    options: ["Network optimization", "Temporary storage of pages in memory", "Permanent storage", "Query parsing"],
    correct: 1
  },
  {
    question: "Which join returns all rows from left table and matching rows from right table?",
    options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN"],
    correct: 1
  },
  {
    question: "Which SQL keyword is used to remove duplicate rows from the result set?",
    options: ["UNIQUE", "DISTINCT", "NODUP", "UNIQ"],
    correct: 1
  },
  {
    question: "Which of the following is a TCL (Transaction Control Language) command?",
    options: ["CREATE", "COMMIT", "SELECT", "DROP"],
    correct: 1
  },
  {
    question: "Which is NOT a type of anomaly in database normalization?",
    options: ["Insertion anomaly", "Update anomaly", "Deletion anomaly", "Indexing anomaly"],
    correct: 3
  },
  {
    question: "Which technique is used by query optimizer to find cheapest join order?",
    options: ["Exhaustive search always", "Heuristics and cost-based optimization", "Only nested loops", "No optimization"],
    correct: 1
  },
  {
    question: "In two-phase locking, the growing phase is when:",
    options: ["Locks are released", "Locks are acquired and not released", "Transactions are aborted", "Checkpointing occurs"],
    correct: 1
  },
  {
    question: "Which type of dependency causes 3NF violation (transitive dependency)?",
    options: ["A -> B and B -> C causing A -> C", "Partial dependency", "Multi-valued dependency", "Join dependency"],
    correct: 0
  },
  {
    question: "Which SQL clause specifies a condition for rows to be returned?",
    options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    correct: 1
  },
  {
    question: "A materialized view:",
    options: ["Is a virtual view computed on demand", "Stores computed results physically for faster reads", "Is same as a normal view", "Is not supported by any DBMS"],
    correct: 1
  },
  {
    question: "Which of the following is true for BCNF (Boyce-Codd Normal Form)?",
    options: [
      "Every determinant is a candidate key",
      "Every relation has exactly one key",
      "Transitive dependencies are allowed",
      "It is weaker than 3NF"
    ],
    correct: 0
  },
  {
    question: "Which SQL function returns average of a numeric column?",
    options: ["AVG()", "MEAN()", "SUM()/COUNT()", "AVERAGE()"],
    correct: 0
  },
  {
    question: "Which of the following is NOT an index access method?",
    options: ["B+ tree", "Hashing", "Sequential scan", "Bitmap index"],
    correct: 2
  },
  {
    question: "What does the OLTP system emphasize?",
    options: ["Large-scale analytical queries", "Transaction processing and concurrency", "Data warehousing", "Batch processing"],
    correct: 1
  },
  {
    question: "Which SQL clause limits the number of rows returned?",
    options: ["LIMIT / FETCH", "GROUP BY", "WHERE", "HAVING"],
    correct: 0
  },
  {
    question: "In DBMS, a checkpoint is used to:",
    options: ["Improve query speed", "Reduce recovery time by flushing dirty pages", "Encrypt logs", "Delete old records"],
    correct: 1
  },
  {
    question: "Which dependency type is needed to define BCNF violations often?",
    options: ["Functional dependency", "Multivalued dependency", "Join dependency", "Foreign dependency"],
    correct: 0
  },
  {
    question: "Which SQL statement changes existing rows in a table?",
    options: ["UPDATE", "ALTER", "MODIFY", "CHANGE"],
    correct: 0
  },
  {
    question: "Which of these ensures that transactions are isolated from each other?",
    options: ["Indexes", "Isolation levels and concurrency control", "Normalization", "Views"],
    correct: 1
  },
  {
"question": "What is the main purpose of normalization in databases?",
"options": ["To reduce memory usage", "To increase data redundancy", "To eliminate data anomalies", "To make queries faster"],
"correct": null
},
{
"question": "Which of the following is a correct example of a primary key?",
"options": ["Employee name", "Email ID", "Department name", "Address"],
"correct": null
},
{
"question": "What is a foreign key used for?",
"options": ["To uniquely identify a record", "To establish a relationship between tables", "To index a table", "To enforce domain constraints"],
"correct": null
},
{
"question": "The data about data is called:",
"options": ["Tuple", "Metadata", "Record", "Schema"],
"correct": null
},
{
"question": "In which normal form does no partial dependency exist?",
"options": ["1NF", "2NF", "3NF", "BCNF"],
"correct": null
},
{
"question": "A table in 2NF is also in:",
"options": ["1NF", "3NF", "4NF", "5NF"],
"correct": null
},
{
"question": "In a relational database, what is a tuple?",
"options": ["Column", "Row", "Schema", "Index"],
"correct": null
},
{
"question": "Which key can be NULL and not unique?",
"options": ["Primary Key", "Foreign Key", "Unique Key", "Super Key"],
"correct": null
},
{
"question": "Which of the following anomalies is not handled by 1NF?",
"options": ["Repeating groups", "Insertion anomaly", "Atomicity", "Update anomaly"],
"correct": null
},
{
"question": "Which constraint is used to ensure a column must always have a value?",
"options": ["Default", "Check", "Not Null", "Unique"],
"correct": null
},
{
"question": "What is the degree of a relation?",
"options": ["Number of rows", "Number of columns", "Number of unique keys", "Number of tables"],
"correct": null
},
{
"question": "Which type of functional dependency violates 2NF?",
"options": ["Full FD", "Transitive FD", "Partial FD", "Trivial FD"],
"correct": null
},
{
"question": "What is a candidate key?",
"options": ["A key that is not a super key", "A primary key in another table", "A set of fields that can uniquely identify a row", "A redundant key"],
"correct": null
},
{
"question": "Which constraint prevents duplication of values in a column?",
"options": ["Check", "Unique", "Not Null", "Default"],
"correct": null
},
{
"question": "Which is not a type of knowledge?",
"options": ["Tacit", "Explicit", "Structured", "None of the above"],
"correct": null
},
{
"question": "The process of combining entities into a higher-level entity is:",
"options": ["Specialization", "Aggregation", "Generalization", "Normalization"],
"correct": null
},
{
"question": "What is the cardinality of a relation?",
"options": ["Number of tables", "Number of columns", "Number of rows", "Number of constraints"],
"correct": null
},
{
"question": "Which of the following is an example of aggregation?",
"options": ["Manager is an employee", "Project assigned to department", "Treating a relationship as an entity", "Department is part of company"],
"correct": null
},
{
"question": "What is transitive dependency?",
"options": ["A → B and B → C implies A → C", "A → B only", "B → C only", "A = B"],
"correct": null
},
{
"question": "What does the default constraint do?",
"options": ["Ensures value is not NULL", "Assigns default value if no input", "Checks condition", "Prevents duplicate"],
"correct": null
},
{
"question": "Which key may have duplicate values?",
"options": ["Primary Key", "Unique Key", "Foreign Key", "Candidate Key"],
"correct": null
},
{
"question": "A table is said to be in 1NF if:",
"options": ["It has a primary key", "All values are atomic", "No partial dependencies", "No foreign keys"],
"correct": null
},
{
"question": "Which key uniquely identifies every record in a table?",
"options": ["Foreign Key", "Primary Key", "Super Key", "Candidate Key"],
"correct": null
},
{
"question": "When a record in one table depends on a record in another, what is this called?",
"options": ["Self-dependency", "Referential integrity", "Logical dependency", "Unique relation"],
"correct": null
},
{
"question": "What is a super key?",
"options": ["A minimal key", "A primary key", "Any set of attributes that uniquely identifies a tuple", "A key that can't be null"],
"correct": null
},
{
"question": "Which normal form eliminates transitive dependency?",
"options": ["1NF", "2NF", "3NF", "BCNF"],
"correct": null
},
{
"question": "Which of the following can be a composite key?",
"options": ["A single column with unique values", "Multiple columns combined to identify a record", "Foreign key", "Check key"],
"correct": null
},
{
"question": "In relational databases, each row is known as:",
"options": ["Attribute", "Field", "Tuple", "Domain"],
"correct": null
},
{
"question": "Which of the following constraints can be used to check a condition on values?",
"options": ["Check", "Primary Key", "Foreign Key", "Unique"],
"correct": null
},
{
"question": "Which normal form is the highest commonly used in practice?",
"options": ["1NF", "2NF", "3NF", "5NF"],
"correct": null
},
{
"question": "Which key uniquely identifies a record and can never be NULL?",
"options": ["Foreign Key", "Unique Key", "Primary Key", "Composite Key"],
"correct": null
},
{
"question": "Which one of these ensures referential integrity?",
"options": ["Check constraint", "Foreign key constraint", "Default constraint", "Not null constraint"],
"correct": null
},
{
"question": "What type of dependency is violated if a non-prime attribute depends on another non-prime attribute?",
"options": ["Trivial", "Full", "Partial", "Transitive"],
"correct": null
},
{
"question": "What does BCNF stand for?",
"options": ["Basic Common Normal Form", "Binary Code Normal Form", "Boyce-Codd Normal Form", "Boolean-Coded Normal Form"],
"correct": null
},
{
"question": "If a relation is in BCNF, it is also in:",
"options": ["1NF only", "1NF, 2NF and 3NF", "2NF and 3NF only", "4NF"],
"correct": null
},
{
"question": "Which of these is a functional dependency?",
"options": ["A = B", "A → B", "A ∩ B", "A + B"],
"correct": null
},
{
"question": "Which of these anomalies is solved by 3NF?",
"options": ["Transitive dependency", "Partial dependency", "Insertion anomaly", "Repeating group"],
"correct": null
},
{
"question": "What is an attribute?",
"options": ["A row in a table", "A column in a table", "A unique key", "A tuple"],
"correct": null
},
{
"question": "A relation is in 4NF if it is in BCNF and:",
"options": ["Has no partial dependency", "Has no transitive dependency", "Has no multivalued dependency", "Has no key dependency"],
"correct": null
},
{
"question": "Which of the following is not a type of constraint?",
"options": ["Unique", "Default", "Identifier", "Not Null"],
"correct": null
},
{
"question": "When a key refers to itself in the same table, it is called:",
"options": ["Composite Key", "Candidate Key", "Self-referencing Foreign Key", "Unique Key"],
"correct": null
},
{
"question": "The domain of an attribute is:",
"options": ["The number of rows", "The number of columns", "The data type and range of values", "The primary key"],
"correct": null
},
{
"question": "In which case is a relation not in 2NF?",
"options": ["If it has a composite key", "If a non-prime attribute depends on part of the primary key", "If it has repeating groups", "If every determinant is a candidate key"],
"correct": null
},
{
"question": "Which constraint allows setting a column with an initial value when no value is provided?",
"options": ["Unique", "Default", "Foreign", "Check"],
"correct": null
},
{
"question": "What is the purpose of the index in DBMS?",
"options": ["To store metadata", "To ensure security", "To speed up searching and queries", "To delete duplicate records"],
"correct": null
},
{
"question": "Which of the following can be violated in absence of normalization?",
"options": ["Data redundancy", "Query processing", "Indexing", "Data encryption"],
"correct": null
},
{
"question": "Which of the following is not part of the data model?",
"options": ["Structure of data", "Constraints on data", "Index on data", "Operations on data"],
"correct": null
},
{
"question": "Which of the following best defines a relation?",
"options": ["A table with columns and rows", "A schema", "A data dictionary", "A constraint"],
"correct": null
},
{
"question": "What is the main goal of BCNF?",
"options": ["Reduce memory usage", "Remove partial and transitive dependencies", "Eliminate redundancy caused by functional dependencies", "Increase anomalies"],
"correct": null
},
{
"question": "Which type of FD is X → Y where Y ⊆ X?",
"options": ["Transitive", "Trivial", "Non-trivial", "Partial"],
"correct": null
},
{
    "question": "Which statement is used to delete all rows from a table without removing the table?",
    "options": ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
    "correct": null
  },
  {
    "question": "Which SQL clause is used to filter records?",
    "options": ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
    "correct": null
  },
  {
    "question": "Which of the following commands is used to modify the structure of a table?",
    "options": ["ALTER", "UPDATE", "MODIFY", "CHANGE"],
    "correct": null
  },
  {
    "question": "Which SQL function returns the number of rows in a table?",
    "options": ["COUNT()", "SUM()", "MAX()", "ROWS()"],
    "correct": null
  },
  {
    "question": "In SQL, which keyword is used to sort the results in ascending order by default?",
    "options": ["SORT", "ORDER BY", "GROUP BY", "ASCENDING"],
    "correct": null
  },
  {
    "question": "Which of these is a valid SQL aggregate function?",
    "options": ["ADD()", "MAX()", "AVERAGE()", "INCREMENT()"],
    "correct": null
  },
  {
    "question": "What will the SELECT * statement do?",
    "options": ["Select all columns from a table", "Select rows containing *", "Select only numeric values", "Select primary keys"],
    "correct": null
  },
  {
    "question": "Which SQL keyword is used to combine rows from two or more tables?",
    "options": ["MERGE", "JOIN", "COMBINE", "LINK"],
    "correct": null
  },
  {
    "question": "Which type of JOIN returns all rows from the left table and matched rows from the right table?",
    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
    "correct": null
  },
  {
    "question": "In SQL, what does the GROUP BY clause do?",
    "options": ["Sort the data", "Group rows with the same values in specified columns", "Filter out rows", "Combine two queries"],
    "correct": null
  },
];

// We'll create 500 questions by repeating templates in sequence and numbering them.
const dbmsQuestions = Array.from({ length: 500 }, (_, i) => {
  const t = templates[i % templates.length];
  return {
    id: i + 1,
    question: `${i + 1}. ${t.question}`,
    options: t.options,
    correct: t.correct
  };
});

export default dbmsQuestions;
