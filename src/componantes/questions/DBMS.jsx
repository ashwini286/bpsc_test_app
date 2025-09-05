const DBMS = {
        color: "#8B5CF6",
        subtopics: {
            "Need for databases vs file systems; RDBMS concepts": {
                color: "#8B5CF6",
                questions: [
                    { id: 1, question: "Which of the following is a limitation of traditional file systems?", options: ["Data redundancy", "High consistency", "Easy access control", "Data independence"], correct: 1 },

                    { id: 2, question: "In databases, 'data independence' refers to:", options: ["Storing redundant data", "Changing data structure without affecting applications", "Eliminating primary keys", "Ability to store unstructured files"], correct: 2 },

                    { id: 3, question: "Which of the following best describes a database management system (DBMS)?", options: ["A collection of unrelated files", "Software to manage, store, and retrieve data", "An operating system", "A file compression tool"], correct: 2 },

                    { id: 4, question: "File systems suffer from which major drawback compared to databases?", options: ["Complex queries support", "Lack of data redundancy", "Easy transaction handling", "Strong security structure"], correct: 1 },

                    { id: 5, question: "Which factor leads to inconsistency in file-based systems?", options: ["Centralized storage", "Data redundancy", "Normalization", "Use of SQL"], correct: 2 },

                    { id: 6, question: "The capability of handling simultaneous data access is better in:", options: ["File systems", "Databases", "Operating systems", "Compilers"], correct: 2 },

                    { id: 7, question: "Which of the following is NOT an advantage of databases over file systems?", options: ["Reduced redundancy", "Easier backup & recovery", "Data independence", "Increased redundancy"], correct: 4 },

                    { id: 8, question: "The primary purpose of a DBMS is:", options: ["Editing images", "Managing data efficiently", "Operating hardware", "Compiling code"], correct: 2 },

                    { id: 9, question: "Which system uses indexes for faster searching of data?", options: ["File system", "Database system", "Assembler", "Cache memory"], correct: 2 },

                    { id: 10, question: "Which of the following operations is difficult in file systems but easier in RDBMS?", options: ["Data backup", "Data compression", "Complex queries", "File storage"], correct: 3 },

                    { id: 11, question: "RDBMS stands for:", options: ["Relational Data Base Management System", "Reduced Database Management System", "Regular Data Backup Management System", "Relatable Database Measuring Standard"], correct: 1 },

                    { id: 12, question: "In an RDBMS, data is stored in:", options: ["XML trees", "Tables", "Flat files", "Hierarchies"], correct: 2 },

                    { id: 13, question: "Which of the following uniquely identifies a record in a table?", options: ["Foreign key", "Primary key", "Composite attribute", "Candidate key"], correct: 2 },

                    { id: 14, question: "Which language is primarily used for querying RDBMS?", options: ["C++", "Java", "SQL", "Python"], correct: 3 },

                    { id: 15, question: "The concept of normalization is introduced to:", options: ["Speed up execution", "Reduce redundancy", "Increase redundancy", "Create duplicate records"], correct: 2 },

                    { id: 16, question: "Which of the following is NOT a relational operator in SQL?", options: ["SELECT", "JOIN", "DELETE", "COMPILE"], correct: 4 },

                    { id: 17, question: "The process of ensuring data accuracy and consistency is called:", options: ["Integrity", "Redundancy", "Duplication", "Volatility"], correct: 1 },

                    { id: 18, question: "A foreign key is used to:", options: ["Ensure uniqueness", "Connect two tables", "Delete records", "Create indexes"], correct: 2 },

                    { id: 19, question: "Which of the following ensures that no two rows have the same value in a specific column?", options: ["NOT NULL", "UNIQUE", "CHECK", "DEFAULT"], correct: 2 },

                    { id: 20, question: "Which database property ensures that either all operations succeed or none do?", options: ["Durability", "Atomicity", "Isolation", "Consistency"], correct: 2 },

                    { id: 21, question: "Which of the following is part of ACID properties?", options: ["Atomicity", "Concurrency", "Dependency", "Iteration"], correct: 1 },

                    { id: 22, question: "The consistency property in ACID ensures:", options: ["Database always in valid state", "Transactions happen instantly", "Data is redundant", "Rollback never occurs"], correct: 1 },

                    { id: 23, question: "Isolation in RDBMS transactions means:", options: ["Multiple transactions interfere", "Transactions execute independently", "No rollback is possible", "Only a single transaction is allowed forever"], correct: 2 },

                    { id: 24, question: "Durability in ACID ensures:", options: ["Changes are temporary", "Changes are permanent after commit", "Transactions will not execute", "Data stored in cache only"], correct: 2 },

                    { id: 25, question: "In RDBMS, which key can accept NULL values?", options: ["Primary key", "Foreign key", "Unique key", "Super key"], correct: 2 },

                    { id: 26, question: "A set of attributes that can uniquely identify a row but not the minimal set is called:", options: ["Candidate key", "Super key", "Composite key", "Foreign key"], correct: 2 },

                    { id: 27, question: "Which SQL command is used to remove a table from a database?", options: ["DELETE", "REMOVE", "DROP", "CLEAR"], correct: 3 },

                    { id: 28, question: "Which SQL clause is used to filter results?", options: ["ORDER BY", "HAVING", "WHERE", "GROUP BY"], correct: 3 },

                    { id: 29, question: "The 'JOIN' operation in SQL is used to:", options: ["Add new rows", "Combine data from multiple tables", "Delete duplicates", "Rename attributes"], correct: 2 },

                    { id: 30, question: "Which SQL statement is used to insert new data?", options: ["ADD INTO", "INSERT INTO", "CREATE DATA", "PUT INTO"], correct: 2 },

                    { id: 31, question: "In RDBMS, normalization is often carried out to achieve:", options: ["Data redundancy", "Data inconsistency", "Data integrity", "Data complexity"], correct: 3 },

                    { id: 32, question: "The most basic normal form in normalization is:", options: ["2NF", "3NF", "BCNF", "1NF"], correct: 4 },

                    { id: 33, question: "Which normal form eliminates transitive dependencies?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 3 },

                    { id: 34, question: "Which level of database architecture provides the physical storage details?", options: ["Logical", "Conceptual", "Internal", "External"], correct: 3 },

                    { id: 35, question: "In ER diagrams, relationships are represented as:", options: ["Ovals", "Rectangles", "Diamonds", "Lines"], correct: 3 },

                    { id: 36, question: "Which part of SQL is used to change the data definition (like creating tables)?", options: ["DML", "DCL", "TCL", "DDL"], correct: 4 },

                    { id: 37, question: "Which part of SQL deals with granting and revoking privileges?", options: ["DDL", "DML", "DCL", "TCL"], correct: 3 },

                    { id: 38, question: "Which of these operations belongs to DML in SQL?", options: ["CREATE", "GRANT", "SELECT", "COMMIT"], correct: 3 },

                    { id: 39, question: "Indexes in databases are mainly used to:", options: ["Reduce redundancy", "Speed up searches", "Ensure ACID", "Maintain normalization"], correct: 2 },

                    { id: 40, question: "Which constraint ensures that a column must have a value?", options: ["DEFAULT", "CHECK", "UNIQUE", "NOT NULL"], correct: 4 },

                    { id: 41, question: "In RDBMS, a transaction rollback is used to:", options: ["Save changes permanently", "Undo changes", "Increase consistency", "Improve indexing"], correct: 2 },

                    { id: 42, question: "Which one of the following is a TCL command?", options: ["ROLLBACK", "CREATE", "UPDATE", "GRANT"], correct: 1 },

                    { id: 43, question: "The SQL command SAVEPOINT is used to:", options: ["Exit session", "Define a point to rollback to", "Backup database", "Update data"], correct: 2 },

                    { id: 44, question: "Which of the following is NOT a benefit of database indexes?", options: ["Fast retrieval", "Slower updates", "Efficient querying", "Sorted data"], correct: 2 },

                    { id: 45, question: "The relational model was proposed by:", options: ["Charles Babbage", "E. F. Codd", "Von Neumann", "Michael Stonebraker"], correct: 2 },

                    { id: 46, question: "Which of the following ensures no duplicate rows in SQL output?", options: ["DISTINCT", "ORDER BY", "GROUP BY", "CHECK"], correct: 1 },

                    { id: 47, question: "Which of the following is used for data analysis in RDBMS?", options: ["Transaction logs", "OLAP", "Rollback", "Normalization"], correct: 2 },

                    { id: 48, question: "The GROUP BY clause is used with:", options: ["Constraints", "Aggregate functions", "Transactions", "Normalization"], correct: 2 },

                    { id: 49, question: "Which SQL keyword is used to sort query results?", options: ["SORT", "ORDER BY", "ARRANGE", "GROUP BY"], correct: 2 },

                    { id: 50, question: "What does the term 'referential integrity' mean?", options: ["Foreign key must match primary key", "Data must not be null", "Each tuple must be unique", "Data retrieval must be fast"], correct: 1 },

                    { id: 51, question: "Which of the following is not part of the DBMS architecture?", options: ["External level", "Conceptual level", "Internal level", "Functional level"], correct: 4 },

                    { id: 52, question: "Which of the following is most critical for RDBMS transactions?", options: ["ACID properties", "Compilation", "Data compression", "Indexing only"], correct: 1 },

                    { id: 53, question: "A composite key is:", options: ["Multiple fields together acting as a primary key", "A candidate key with a foreign key", "A key created from hashing", "An automatically generated key"], correct: 1 },

                    { id: 54, question: "Which SQL command is used to modify an existing table structure?", options: ["UPDATE", "ALTER", "MODIFY", "CHANGE"], correct: 2 },

                    { id: 55, question: "In databases, 'schema' defines:", options: ["The data itself", "The structure of the database", "Only primary keys", "Backup format"], correct: 2 },

                    { id: 56, question: "An unnormalized form may contain:", options: ["Atomic values only", "Repeating groups and redundancy", "No transitive dependency", "Fully reduced redundancy"], correct: 2 },

                    { id: 57, question: "Which SQL clause is used with aggregate functions to filter groups?", options: ["WHERE", "FROM", "HAVING", "ORDER BY"], correct: 3 },

                    { id: 58, question: "Which of these ensures strong security in RDBMS?", options: ["File duplication", "User authentication & authorization", "Redundancy", "Indexes"], correct: 2 },

                    { id: 59, question: "Which of these anomalies is resolved by normalization?", options: ["Update anomalies", "Download errors", "Deadlocks", "Indexing delay"], correct: 1 },

                    { id: 60, question: "BCNF stands for:", options: ["Boyce Codd Normal Form", "Basic Code Normal Form", "Binary Consistent Normal Form", "Best Common Normal Form"], correct: 1 },

                    { id: 61, question: "Which of these is not a valid SQL data type?", options: ["VARCHAR", "NUMBER", "DATE", "FLOATING"], correct: 4 },

                    { id: 62, question: "Which SQL statement permanently saves a transaction?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "UNDO"], correct: 3 },

                    { id: 63, question: "Which RDBMS feature ensures fault tolerance?", options: ["Data structures", "Backup & recovery", "Normalization", "Join operations"], correct: 2 },

                    { id: 64, question: "Which key constraint prevents two rows from having the same value in a column?", options: ["DEFAULT", "NOT NULL", "CHECK", "UNIQUE"], correct: 4 },

                    { id: 65, question: "Which SQL keyword is used to define conditions on groups?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER"], correct: 2 },

                    { id: 66, question: "Which RDBMS operation combines rows based on common columns?", options: ["Union", "Join", "Intersect", "Minus"], correct: 2 },

                    { id: 67, question: "Which SQL keyword removes duplicate records when retrieving data?", options: ["DISTINCT", "UNIQUE", "FILTER", "CHECK"], correct: 1 },

                    { id: 68, question: "Which SQL operator is used for pattern matching?", options: ["IN", "LIKE", "BETWEEN", "HAVING"], correct: 2 },

                    { id: 69, question: "Which type of join returns all rows when there is a match in one table and missing rows from another?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 2 },

                    { id: 70, question: "Which SQL statement retrieves all records from a table?", options: ["SELECT *", "FIND ALL", "SHOW TABLE", "GET *"], correct: 1 },

                    { id: 71, question: "The relational algebra operation that combines tuples from two relations is:", options: ["Union", "Join", "Product", "Select"], correct: 2 },

                    { id: 72, question: "Which anomaly occurs when the same data is duplicated unnecessarily?", options: ["Insertion anomaly", "Deletion anomaly", "Update anomaly", "Duplication anomaly"], correct: 3 },

                    { id: 73, question: "In RDBMS, a 'view' is:", options: ["Physical table", "Virtual table", "Index", "Schema"], correct: 2 },

                    { id: 74, question: "Which command is used to remove all the records from a table but keeps the structure?", options: ["DROP", "TRUNCATE", "DELETE", "REMOVE"], correct: 2 },

                    { id: 75, question: "Which SQL operator retrieves rows from two queries without duplicates?", options: ["UNION", "UNION ALL", "INTERSECT", "JOIN"], correct: 1 },

                    { id: 76, question: "Which RDBMS concept ensures minimum duplication across tables?", options: ["Normalization", "Denormalization", "Indexing", "View"], correct: 1 },

                    { id: 77, question: "Which indexing method is commonly used in RDBMS?", options: ["Hashing", "Binary search", "B+ Tree", "Linked list"], correct: 3 },

                    { id: 78, question: "Which command is used to change a record in a table?", options: ["CHANGE", "ALTER", "UPDATE", "MODIFY"], correct: 3 },

                    { id: 79, question: "Which SQL operator is used to combine results of two queries and includes duplicates?", options: ["UNION", "UNION ALL", "INTERSECT", "EXCEPT"], correct: 2 },

                    { id: 80, question: "Which RDBMS feature provides abstracted representation of data for users?", options: ["Schema", "View", "Index", "Join"], correct: 2 },
                    { id: 81, question: "Which SQL command is used to define a new database?", options: ["INSERT", "CREATE DATABASE", "DEFINE DB", "MAKE DATABASE"], correct: 2 },

                    { id: 82, question: "Which type of join returns only rows where there is a match in both tables?", options: ["FULL OUTER JOIN", "LEFT JOIN", "RIGHT JOIN", "INNER JOIN"], correct: 4 },

                    { id: 83, question: "In RDBMS, the attribute domain refers to:", options: ["Set of allowed values", "Set of tables", "Keys in a schema", "Data dictionary"], correct: 1 },

                    { id: 84, question: "Which SQL function is used to count the number of rows?", options: ["SUM()", "AVG()", "COUNT()", "ROWS()"], correct: 3 },

                    { id: 85, question: "Which is NOT a goal of database normalization?", options: ["Reduce redundancy", "Ensure integrity", "Optimize storage", "Increase data duplication"], correct: 4 },

                    { id: 86, question: "Which of these is a data control language (DCL) command?", options: ["GRANT", "SELECT", "DELETE", "CREATE"], correct: 1 },

                    { id: 87, question: "When a transaction fails, the operation of restoring the database to a previous state is:", options: ["Commit", "Rollback", "Savepoint", "Checkpoint"], correct: 2 },

                    { id: 88, question: "An update anomaly occurs when:", options: ["Data cannot be inserted", "Data must be changed in multiple places", "Data is missing", "Keys are null"], correct: 2 },

                    { id: 89, question: "Which of the following best explains 'entity integrity'?", options: ["Every table must have a unique key", "Every foreign key must be null", "Entities should always have duplicates", "Tables cannot exist without attributes"], correct: 1 },

                    { id: 90, question: "Which SQL keyword is used to remove duplicates and return only unique values?", options: ["DISTINCT", "UNIQUE", "FILTER", "NODUP"], correct: 1 },

                    { id: 91, question: "Which part of database system manages data dictionary?", options: ["Application layer", "DBMS", "Compiler", "Network"], correct: 2 },

                    { id: 92, question: "In SQL, which keyword is used to rename columns or tables in queries?", options: ["CHANGE", "AS", "RENAME", "MODIFY"], correct: 2 },

                    { id: 93, question: "Which of these anomalies is resolved by ensuring referential integrity?", options: ["Update anomaly", "Insertion anomaly", "Deletion anomaly", "Relationship anomaly"], correct: 2 },

                    { id: 94, question: "Which of the following is a disadvantage of file systems compared to DBMS?", options: ["Data isolation", "Data independence", "Controlled access", "Transaction support"], correct: 1 },

                    { id: 95, question: "Which level of abstraction describes how data is stored physically?", options: ["Physical level", "External level", "Logical level", "Conceptual level"], correct: 1 },

                    { id: 96, question: "Which SQL function is used to find the highest value in a column?", options: ["MIN()", "MAX()", "TOP()", "HIGH()"], correct: 2 },

                    { id: 97, question: "Which join returns all rows when there is a match in one of the tables?", options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN"], correct: 1 },

                    { id: 98, question: "A view in SQL is:", options: ["Virtual table", "Physical table", "Index", "Schema"], correct: 1 },

                    { id: 99, question: "Which SQL operator checks set membership?", options: ["IN", "LIKE", "BETWEEN", "ANY"], correct: 1 },

                    { id: 100, question: "Which SQL statement is used to change data already in a table?", options: ["MODIFY", "ALTER", "UPDATE", "CHANGE"], correct: 3 },

                    { id: 101, question: "Which is NOT a function of DBMS?", options: ["Data backup", "Data manipulation", "Automatic operating system updates", "Transaction handling"], correct: 3 },

                    { id: 102, question: "Which of the following allows combining multiple SQL conditions?", options: ["WHERE ONLY", "AND/OR", "IF-ELSE", "DO-WHILE"], correct: 2 },

                    { id: 103, question: "Which SQL keyword is used to specify conditions on aggregate results?", options: ["HAVING", "WHERE", "FROM", "ORDER"], correct: 1 },

                    { id: 104, question: "In RDBMS, ACID property 'Atomicity' ensures:", options: ["All or nothing execution of a transaction", "Immediate execution", "Data recovery", "Data redundancy"], correct: 1 },

                    { id: 105, question: "Which SQL clause is used to group rows that have the same values?", options: ["ORDER BY", "DISTINCT", "GROUP BY", "HAVING"], correct: 3 },

                    { id: 106, question: "Which database object improves search performance but requires extra space?", options: ["Index", "View", "Schema", "Sequence"], correct: 1 },

                    { id: 107, question: "Which form of normalization removes partial dependency?", options: ["1NF", "2NF", "3NF", "4NF"], correct: 2 },

                    { id: 108, question: "In a relation, columns are also referred to as:", options: ["Attributes", "Entities", "Tuples", "Keys"], correct: 1 },

                    { id: 109, question: "Which SQL function returns the average value of a numeric column?", options: ["SUM()", "AVG()", "COUNT()", "MEAN()"], correct: 2 },

                    { id: 110, question: "Which anomaly occurs when certain facts cannot be inserted into tables?", options: ["Update anomaly", "Insertion anomaly", "Deletion anomaly", "Duplication anomaly"], correct: 2 },

                    { id: 111, question: "Which SQL constraint allows a column to take null values unless specified otherwise?", options: ["DEFAULT", "CHECK", "NULL allowed", "NOT NULL"], correct: 3 },

                    { id: 112, question: "Which file system drawback is avoided in RDBMS?", options: ["Redundancy", "Relationships", "Transactions", "Indexes"], correct: 1 },

                    { id: 113, question: "Which type of join returns all rows from both tables matching or not?", options: ["INNER JOIN", "FULL OUTER JOIN", "LEFT JOIN", "RIGHT JOIN"], correct: 2 },

                    { id: 114, question: "Which of the following depicts logical structure of database?", options: ["Index", "Schema", "View", "Tuple"], correct: 2 },

                    { id: 115, question: "Referential integrity is achieved through:", options: ["CHECK constraint", "Foreign key constraint", "Primary key", "View"], correct: 2 },

                    { id: 116, question: "Which of these is NOT a valid SQL aggregate function?", options: ["SUM()", "COUNT()", "AVERAGE()", "MAX()"], correct: 3 },

                    { id: 117, question: "Which file system property makes queries across multiple files difficult?", options: ["Isolation", "Program dependence", "Normalization", "Integrity"], correct: 2 },

                    { id: 118, question: "What does SQL ‘BETWEEN’ operator do?", options: ["Pattern match", "Range check", "Join check", "Sort records"], correct: 2 },

                    { id: 119, question: "Which language defines the structure of a database?", options: ["DML", "DDL", "DCL", "TCL"], correct: 2 },

                    { id: 120, question: "Which SQL keyword returns rows that match at least one condition?", options: ["AND", "OR", "ALL", "ANY"], correct: 2 },

                    { id: 121, question: "Who is considered the father of the relational database?", options: ["Alan Turing", "E. F. Codd", "Charles Babbage", "Tim Berners-Lee"], correct: 2 },

                    { id: 122, question: "Which feature of DBMS improves security compared to file systems?", options: ["Central storage", "Authentication & authorization", "Redundancy elimination", "Schema enforcement"], correct: 2 },

                    { id: 123, question: "Which join combines every row of one table with every row of another?", options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "FULL JOIN"], correct: 2 },

                    { id: 124, question: "The internal schema describes:", options: ["How data is viewed by users", "Physical storage of data", "Logical relationships", "Security policies"], correct: 2 },

                    { id: 125, question: "Which SQL clause restricts the rows returned by a query?", options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"], correct: 1 },

                    { id: 126, question: "Which SQL keyword is used to combine results of queries including duplicates?", options: ["UNION", "UNION ALL", "INTERSECT", "JOIN"], correct: 2 },

                    { id: 127, question: "Data consistency in DBMS means:", options: ["Data is always redundant", "Data remains valid before and after a transaction", "Data can’t be changed", "Data is indexed automatically"], correct: 2 },

                    { id: 128, question: "A table without a primary key suffers from:", options: ["Insertion anomaly", "No indexing", "Entity integrity issues", "All of the above"], correct: 4 },

                    { id: 129, question: "Which type of dependency is removed by 2NF?", options: ["Transitive dependency", "Partial dependency", "Multivalued dependency", "Functional dependency"], correct: 2 },

                    { id: 130, question: "Which SQL statement deletes data without removing table structure?", options: ["REMOVE", "DROP", "DELETE", "TRUNCATE"], correct: 3 },

                    { id: 131, question: "Which SQL operator is used with wildcards?", options: ["LIKE", "IN", "EXISTS", "HAS"], correct: 1 },

                    { id: 132, question: "Which of the following ensures rollback capability in transactions?", options: ["Savepoints", "Indexes", "Constraints", "Triggers"], correct: 1 },

                    { id: 133, question: "Which SQL command modifies existing schema structures?", options: ["ALTER", "UPDATE", "MODIFY DATA", "REDEFINE"], correct: 1 },

                    { id: 134, question: "An entity in ER model is represented as:", options: ["Oval", "Rectangle", "Diamond", "Line"], correct: 2 },

                    { id: 135, question: "The ACID property ‘Isolation’ ensures:", options: ["Transactions execute sequentially without interference", "Transactions always rollback", "Transactions cannot fail", "Indexes are always maintained"], correct: 1 },

                    { id: 136, question: "Which of these ensures long-term persistence of committed data?", options: ["Durability", "Atomicity", "Isolation", "Consistency"], correct: 1 },

                    { id: 137, question: "Which SQL command is used to assign a new name to a database object?", options: ["AS", "RENAME", "ALTER", "CHANGE"], correct: 2 },

                    { id: 138, question: "Which of these file system issues is avoided by relational databases?", options: ["Program-data dependence", "Normalization", "Entity relationships", "Indexing"], correct: 1 },

                    { id: 139, question: "Which SQL clause is used to sort result sets?", options: ["ORDER BY", "SORT", "ARRANGE", "GROUP"], correct: 1 },

                    { id: 140, question: "Which of these ensures minimum duplication of data?", options: ["Data independence", "Normalization", "Redundancy", "Indexes"], correct: 2 },

                    { id: 141, question: "Which logical operation does the INTERSECT keyword perform?", options: ["Union of queries", "Common rows between queries", "Difference between queries", "Duplicate rows"], correct: 2 },

                    { id: 142, question: "Which SQL operator compares each value of a column with a subquery?", options: ["ANY", "ALL", "EXISTS", "IN"], correct: 1 },

                    { id: 143, question: "Which normal form removes transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 3 },

                    { id: 144, question: "Which SQL command is a part of DML?", options: ["GRANT", "COMMIT", "INSERT", "CREATE"], correct: 3 },

                    { id: 145, question: "Which SQL clause is used after GROUP BY to filter groups?", options: ["WHERE", "HAVING", "ORDER BY", "ALL"], correct: 2 },

                    { id: 146, question: "CHECK constraint is used to:", options: ["Guarantee foreign key", "Restrict values in a column", "Drop duplicate rows", "Control privileges"], correct: 2 },

                    { id: 147, question: "Which SQL operator is used to test for existence of rows in a subquery?", options: ["EXISTS", "BETWEEN", "INSIDE", "ALL"], correct: 1 },

                    { id: 148, question: "Which of the following enforces rules automatically on data?", options: ["Constraints", "Triggers", "Views", "Indexes"], correct: 2 },

                    { id: 149, question: "Which SQL clause displays records within a range?", options: ["LIKE", "BETWEEN", "EXISTS", "ORDER BY"], correct: 2 },

                    { id: 150, question: "Which SQL command is used to delete all rows and free space?", options: ["DELETE", "DROP", "TRUNCATE", "CLEAR"], correct: 3 }

                ],

            },
            "Data model basics: tables, rows, columns; schema": {
                color: "#F97316",
                questions: [
  { id: 1, question: "In a relational database, a table is also called?", options: ["Tuple", "Attribute", "Relation", "Field"], correct: 2 },
  { id: 2, question: "A row in a database table represents?", options: ["Field", "Tuple", "Attribute", "Schema"], correct: 1 },
  { id: 3, question: "A column in a database table is also known as?", options: ["Tuple", "Attribute", "Relation", "Instance"], correct: 1 },
  { id: 4, question: "Which of the following defines the structure of a database?", options: ["Table", "Schema", "Tuple", "Row"], correct: 1 },
  { id: 5, question: "What uniquely identifies a row in a table?", options: ["Primary Key", "Schema", "Column", "Foreign Key"], correct: 0 },
  { id: 6, question: "What is another name for a record in a table?", options: ["Row", "Schema", "Attribute", "Column"], correct: 0 },
  { id: 7, question: "Which one is a collection of attributes in a database?", options: ["Row", "Tuple", "Schema", "Relation"], correct: 3 },
  { id: 8, question: "A database schema describes?", options: ["Values of attributes", "Structure of database", "Queries", "Indexes"], correct: 1 },
  { id: 9, question: "Which represents a single data value in a table?", options: ["Row", "Cell", "Tuple", "Schema"], correct: 1 },
  { id: 10, question: "What do multiple rows together form in a table?", options: ["Schema", "Relation", "Attribute", "Field"], correct: 1 },
  { id: 11, question: "Which term is used for the horizontal entries in a table?", options: ["Attributes", "Fields", "Rows", "Columns"], correct: 2 },
  { id: 12, question: "Which term is used for the vertical entries in a table?", options: ["Attributes", "Rows", "Tuples", "Instances"], correct: 0 },
  { id: 13, question: "What is the purpose of schema?", options: ["Store data", "Define structure", "Execute queries", "Provide security"], correct: 1 },
  { id: 14, question: "What is another name for schema in relational databases?", options: ["Table", "Meta-data", "Tuple", "Instance"], correct: 1 },
  { id: 15, question: "What describes how data is organized and how relations are associated?", options: ["Schema", "Instance", "Attribute", "Cell"], correct: 0 },
  { id: 16, question: "Which of the following changes frequently in a database?", options: ["Schema", "Instance", "Meta-data", "Primary key"], correct: 1 },
  { id: 17, question: "Which of the following rarely changes in a database?", options: ["Schema", "Instance", "Tuple", "Row"], correct: 0 },
  { id: 18, question: "A table without rows is still defined by?", options: ["Instance", "Tuple", "Schema", "Attribute"], correct: 2 },
  { id: 19, question: "Which represents the current state of the database?", options: ["Schema", "Instance", "Relation", "Meta-data"], correct: 1 },
  { id: 20, question: "Which represents the design of the database?", options: ["Instance", "Tuple", "Schema", "Cell"], correct: 2 },
  { id: 21, question: "Each column in a table has a?", options: ["Domain", "Tuple", "Row", "Relation"], correct: 0 },
  { id: 22, question: "Domain in a relational model refers to?", options: ["Set of possible values", "Tuple", "Schema", "Instance"], correct: 0 },
  { id: 23, question: "Which is a set of rows in a table?", options: ["Relation", "Schema", "Column", "Domain"], correct: 0 },
  { id: 24, question: "What is another name for a table in relational database?", options: ["Instance", "Relation", "Tuple", "Attribute"], correct: 1 },
  { id: 25, question: "What is a complete collection of related data in tabular form?", options: ["Tuple", "Relation", "Instance", "Schema"], correct: 1 },
  { id: 26, question: "What uniquely defines the structure but not the data of a database?", options: ["Tuple", "Instance", "Schema", "Column"], correct: 2 },
  { id: 27, question: "The actual data in the database at a given time is called?", options: ["Schema", "Domain", "Instance", "Meta-data"], correct: 2 },
  { id: 28, question: "Which consists of multiple tables linked together?", options: ["Row", "Tuple", "Relational Database", "Attribute"], correct: 2 },
  { id: 29, question: "What is the relationship between schema and instance?", options: ["Schema is variable, instance is constant", "Schema is constant, instance is variable", "Both change frequently", "Both are constant"], correct: 1 },
  { id: 30, question: "Which is a property of a relation?", options: ["No duplicate rows", "No duplicate columns", "Both A and B", "None"], correct: 2 },
  { id: 31, question: "Each row in a table corresponds to?", options: ["Relation", "Entity", "Attribute", "Schema"], correct: 1 },
  { id: 32, question: "Each column in a table corresponds to?", options: ["Entity", "Attribute", "Tuple", "Schema"], correct: 1 },
  { id: 33, question: "Which represents meta-data?", options: ["Schema", "Row", "Column", "Tuple"], correct: 0 },
  { id: 34, question: "What is the main advantage of schema?", options: ["Defines storage", "Defines constraints and structure", "Defines primary key", "Defines values"], correct: 1 },
  { id: 35, question: "Which ensures data consistency?", options: ["Schema", "Tuple", "Row", "Attribute"], correct: 0 },
  { id: 36, question: "Which represents a single fact in a relation?", options: ["Row", "Column", "Cell", "Schema"], correct: 2 },
  { id: 37, question: "An attribute value must come from?", options: ["Tuple", "Domain", "Relation", "Row"], correct: 1 },
  { id: 38, question: "The set of all possible rows of a table is called?", options: ["Relation", "Schema", "Instance", "Domain"], correct: 0 },
  { id: 39, question: "Which defines logical view of data?", options: ["Schema", "Index", "Row", "Tuple"], correct: 0 },
  { id: 40, question: "Which term describes the snapshot of data at a moment?", options: ["Domain", "Instance", "Schema", "Tuple"], correct: 1 },
  { id: 41, question: "Which represents the columns and types in a table?", options: ["Schema", "Tuple", "Instance", "Relation"], correct: 0 },
  { id: 42, question: "Which is not a property of a relational table?", options: ["Unique rows", "Duplicate columns allowed", "Atomic values", "Column order irrelevant"], correct: 1 },
  { id: 43, question: "Which is used to define structure without storing data?", options: ["Schema", "Instance", "Row", "Cell"], correct: 0 },
  { id: 44, question: "Which is called the blueprint of the database?", options: ["Instance", "Tuple", "Schema", "Column"], correct: 2 },
  { id: 45, question: "Which is a collection of rows sharing the same attributes?", options: ["Relation", "Schema", "Domain", "Tuple"], correct: 0 },
  { id: 46, question: "Which provides a logical description of the entire database?", options: ["Instance", "Schema", "Tuple", "Attribute"], correct: 1 },
  { id: 47, question: "What describes allowed operations on data?", options: ["Schema", "Row", "Column", "Tuple"], correct: 0 },
  { id: 48, question: "Which is temporary and changes with operations?", options: ["Schema", "Instance", "Attribute", "Relation"], correct: 1 },
  { id: 49, question: "Which is permanent until altered explicitly?", options: ["Instance", "Schema", "Row", "Domain"], correct: 1 },
  { id: 50, question: "Which is smallest unit of storage in a table?", options: ["Tuple", "Row", "Cell", "Attribute"], correct: 2 },
  { id: 51, question: "Which key is used to uniquely identify each row in a table?", options: ["Foreign Key", "Candidate Key", "Primary Key", "Composite Key"], correct: 2 },
  { id: 52, question: "Which of the following is an example of schema?", options: ["Student table definition", "A row of student table", "Data in student table", "A single attribute"], correct: 0 },
  { id: 53, question: "What is the term for multiple tables connected by relationships?", options: ["Schema", "Database", "Tuple", "Domain"], correct: 1 },
  { id: 54, question: "Which part of the relational model describes column names and data types?", options: ["Row", "Tuple", "Schema", "Instance"], correct: 2 },
  { id: 55, question: "Each cell in a relational table must contain?", options: ["Multiple values", "Single atomic value", "Primary key", "Foreign key"], correct: 1 },
  { id: 56, question: "Which term represents a complete set of attributes for one entity?", options: ["Schema", "Tuple", "Column", "Domain"], correct: 1 },
  { id: 57, question: "What is another name for an entity instance?", options: ["Tuple", "Attribute", "Relation", "Schema"], correct: 0 },
  { id: 58, question: "Which is permanent unless explicitly altered?", options: ["Instance", "Schema", "Row", "Tuple"], correct: 1 },
  { id: 59, question: "Which changes frequently with insert, update, and delete?", options: ["Schema", "Domain", "Instance", "Primary key"], correct: 2 },
  { id: 60, question: "What is the cross product of all domains of a relation called?", options: ["Tuple set", "Cartesian product", "Schema", "Instance"], correct: 1 },
  { id: 61, question: "Which defines constraints on data?", options: ["Schema", "Row", "Instance", "Tuple"], correct: 0 },
  { id: 62, question: "What ensures each attribute has a defined domain?", options: ["Tuple", "Schema", "Row", "Relation"], correct: 1 },
  { id: 63, question: "A database system stores schema in?", options: ["Data dictionary", "Tuple", "Row", "Relation"], correct: 0 },
  { id: 64, question: "What is called a snapshot of the database?", options: ["Schema", "Tuple", "Instance", "Domain"], correct: 2 },
  { id: 65, question: "Which of the following is NOT true about relations?", options: ["Each row is unique", "Each column has a name", "Order of rows matters", "Values are atomic"], correct: 2 },
  { id: 66, question: "Which is used to group logically related tables?", options: ["Schema", "Domain", "Row", "Tuple"], correct: 0 },
  { id: 67, question: "Which uniquely identifies each attribute?", options: ["Row name", "Column name", "Tuple name", "Domain name"], correct: 1 },
  { id: 68, question: "Which is another term for field in a table?", options: ["Row", "Column", "Schema", "Tuple"], correct: 1 },
  { id: 69, question: "In relational model, the term relation is equivalent to?", options: ["Table", "Schema", "Row", "Column"], correct: 0 },
  { id: 70, question: "Which contains information about data in the database?", options: ["Tuple", "Meta-data", "Instance", "Row"], correct: 1 },
  { id: 71, question: "Which determines how data is stored physically?", options: ["Logical schema", "Physical schema", "Instance", "Tuple"], correct: 1 },
  { id: 72, question: "Which determines how data is viewed logically?", options: ["Logical schema", "Physical schema", "Instance", "Domain"], correct: 0 },
  { id: 73, question: "Which describes the columns and their types for a table?", options: ["Schema", "Instance", "Domain", "Row"], correct: 0 },
  { id: 74, question: "Which represents the allowed values for an attribute?", options: ["Row", "Schema", "Domain", "Instance"], correct: 2 },
  { id: 75, question: "The relation between schema and instance is like?", options: ["Blueprint and building", "Data and values", "Tuple and column", "Domain and schema"], correct: 0 },
  { id: 76, question: "Which property ensures that all attribute values are indivisible?", options: ["Atomicity", "Uniqueness", "Normalization", "Integrity"], correct: 0 },
  { id: 77, question: "Which ensures no duplicate tuples?", options: ["Row order", "Relation property", "Schema design", "Domain definition"], correct: 1 },
  { id: 78, question: "Which represents the number of tuples in a relation?", options: ["Cardinality", "Degree", "Schema", "Instance"], correct: 0 },
  { id: 79, question: "Which represents the number of attributes in a relation?", options: ["Cardinality", "Degree", "Domain", "Row"], correct: 1 },
  { id: 80, question: "Which is a logical collection of related tables?", options: ["Tuple", "Schema", "Instance", "Row"], correct: 1 },
  { id: 81, question: "Which is a property of columns in relational model?", options: ["Each has unique name", "Each has duplicate name", "Order matters", "They have no domain"], correct: 0 },
  { id: 82, question: "What is the role of a foreign key?", options: ["Uniquely identify row", "Refer to another table", "Define schema", "Define domain"], correct: 1 },
  { id: 83, question: "Which represents current content of the database?", options: ["Schema", "Row", "Instance", "Attribute"], correct: 2 },
  { id: 84, question: "Which is the permanent definition of structure?", options: ["Instance", "Schema", "Row", "Tuple"], correct: 1 },
  { id: 85, question: "A collection of attributes describing an entity is?", options: ["Tuple", "Schema", "Column", "Instance"], correct: 0 },
  { id: 86, question: "Which can be changed only by altering the database definition?", options: ["Schema", "Instance", "Tuple", "Domain"], correct: 0 },
  { id: 87, question: "Which changes by performing DML operations?", options: ["Schema", "Tuple", "Instance", "Domain"], correct: 2 },
  { id: 88, question: "Which uniquely defines how data is structured logically?", options: ["Instance", "Schema", "Tuple", "Attribute"], correct: 1 },
  { id: 89, question: "Which is NOT part of a schema?", options: ["Table names", "Column definitions", "Data values", "Constraints"], correct: 2 },
  { id: 90, question: "What is the degree of a table with 5 columns?", options: ["5", "Depends on rows", "Infinite", "Cannot be defined"], correct: 0 },
  { id: 91, question: "What is the cardinality of a table with 100 rows?", options: ["Depends on columns", "100", "Schema", "Domain"], correct: 1 },
  { id: 92, question: "Which is an example of meta-data?", options: ["Data in rows", "Column data types", "Primary key values", "Tuple instances"], correct: 1 },
  { id: 93, question: "Which ensures integrity of schema design?", options: ["Constraints", "Instances", "Domains", "Rows"], correct: 0 },
  { id: 94, question: "Which organizes data into rows and columns?", options: ["Tuple", "Relation", "Domain", "Instance"], correct: 1 },
  { id: 95, question: "Which defines the overall logical structure of a database?", options: ["Schema", "Row", "Instance", "Attribute"], correct: 0 },
  { id: 96, question: "Which defines the valid values for a column?", options: ["Domain", "Schema", "Row", "Instance"], correct: 0 },
  { id: 97, question: "Which is a set of relations with the same schema?", options: ["Instance", "Domain", "Tuple", "Attribute"], correct: 0 },
  { id: 98, question: "Which forms the building blocks of a relational database?", options: ["Tables", "Rows", "Columns", "All of these"], correct: 3 },
  { id: 99, question: "Which is called a 2D representation of data?", options: ["Schema", "Tuple", "Table", "Domain"], correct: 2 },
  { id: 100, question: "Which is also known as a data structure definition?", options: ["Instance", "Schema", "Tuple", "Row"], correct: 1 }
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
    
}
export default DBMS;