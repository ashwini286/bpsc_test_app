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
        "Data model": {
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
        "Keys": {
            color: "#10B981",
            questions: [
                { id: 1, question: "Which key uniquely identifies each row in a table?", options: ["Candidate Key", "Primary Key", "Foreign Key", "Super Key"], correct: 1 },
                { id: 2, question: "Which of the following can be a candidate key?", options: ["A column with unique values", "A duplicate column", "A column with nulls only", "None"], correct: 0 },
                { id: 3, question: "A primary key must be?", options: ["Unique and not null", "Unique but can be null", "May contain duplicates", "Optional"], correct: 0 },
                { id: 4, question: "A foreign key is used to?", options: ["Identify a row uniquely", "Refer to primary key of another table", "Define schema", "Store duplicate values"], correct: 1 },
                { id: 5, question: "Which of these can serve as a primary key?", options: ["Name", "Email ID", "Address", "Any nullable column"], correct: 1 },
                { id: 6, question: "A table can have how many primary keys?", options: ["One", "Two", "Many", "None"], correct: 0 },
                { id: 7, question: "A table can have how many candidate keys?", options: ["Only one", "Multiple", "Zero", "Exactly two"], correct: 1 },
                { id: 8, question: "Which key can act as a primary key?", options: ["Super key", "Foreign key", "Candidate key", "Alternate key"], correct: 2 },
                { id: 9, question: "An alternate key is?", options: ["Another name for foreign key", "A candidate key not chosen as primary key", "A duplicate column", "A composite key"], correct: 1 },
                { id: 10, question: "Which key is a minimal super key?", options: ["Primary key", "Candidate key", "Foreign key", "Composite key"], correct: 1 },
                { id: 11, question: "The constraint that prevents nulls in primary key column is?", options: ["NOT NULL", "CHECK", "UNIQUE", "DEFAULT"], correct: 0 },
                { id: 12, question: "Which constraint ensures no two rows have the same value?", options: ["PRIMARY KEY", "UNIQUE", "FOREIGN KEY", "DEFAULT"], correct: 1 },
                { id: 13, question: "Which constraint enforces referential integrity?", options: ["CHECK", "FOREIGN KEY", "UNIQUE", "PRIMARY KEY"], correct: 1 },
                { id: 14, question: "A primary key is always a?", options: ["Super key", "Foreign key", "Composite key", "Alternate key"], correct: 0 },
                { id: 15, question: "Which constraint can accept null values?", options: ["UNIQUE", "PRIMARY KEY", "FOREIGN KEY", "NOT NULL"], correct: 0 },
                { id: 16, question: "Which key can be composite?", options: ["Primary key", "Candidate key", "Foreign key", "All of these"], correct: 3 },
                { id: 17, question: "Which key is defined across multiple tables?", options: ["Candidate key", "Foreign key", "Primary key", "Alternate key"], correct: 1 },
                { id: 18, question: "Which ensures entity integrity?", options: ["Primary key", "Foreign key", "Candidate key", "Check constraint"], correct: 0 },
                { id: 19, question: "Which ensures referential integrity?", options: ["Foreign key", "Primary key", "Unique key", "Check"], correct: 0 },
                { id: 20, question: "Which constraint is used to define a default value?", options: ["CHECK", "DEFAULT", "PRIMARY KEY", "UNIQUE"], correct: 1 },
                { id: 21, question: "A super key is?", options: ["Set of attributes uniquely identifying rows", "Always minimal", "Always candidate key", "Always primary key"], correct: 0 },
                { id: 22, question: "Every primary key is also a?", options: ["Candidate key", "Foreign key", "Composite key", "None"], correct: 0 },
                { id: 23, question: "A foreign key must reference?", options: ["Any attribute", "Primary key or unique key", "Candidate key only", "Composite key only"], correct: 1 },
                { id: 24, question: "Which constraint restricts values to a condition?", options: ["DEFAULT", "UNIQUE", "CHECK", "PRIMARY KEY"], correct: 2 },
                { id: 25, question: "What happens if foreign key constraint is violated?", options: ["Error", "Warning only", "Ignored", "Updated automatically"], correct: 0 },
                { id: 26, question: "Which key can contain duplicate values?", options: ["Foreign key", "Primary key", "Candidate key", "Unique key"], correct: 0 },
                { id: 27, question: "A primary key can be?", options: ["Single attribute", "Composite", "Candidate key", "All of these"], correct: 3 },
                { id: 28, question: "Which is another name for primary key candidate?", options: ["Super key", "Alternate key", "Composite key", "Secondary key"], correct: 1 },
                { id: 29, question: "A unique key differs from primary key because?", options: ["Allows nulls", "Does not allow nulls", "Always foreign key", "None"], correct: 0 },
                { id: 30, question: "Which ensures that entered value must exist in another table?", options: ["Primary key", "Foreign key", "Candidate key", "Check"], correct: 1 },
                { id: 31, question: "Which type of key may be more than one in a table?", options: ["Primary key", "Foreign key", "Candidate key", "Composite key"], correct: 2 },
                { id: 32, question: "Which is a non-prime attribute?", options: ["Part of candidate key", "Not part of any candidate key", "Primary key attribute", "Composite key attribute"], correct: 1 },
                { id: 33, question: "Entity integrity constraint applies to?", options: ["Primary key", "Foreign key", "Unique key", "Check"], correct: 0 },
                { id: 34, question: "Referential integrity constraint applies to?", options: ["Foreign key", "Primary key", "Check", "Unique"], correct: 0 },
                { id: 35, question: "Which can serve as foreign key?", options: ["Any attribute", "Attribute referencing primary key", "Candidate key only", "Composite key only"], correct: 1 },
                { id: 36, question: "If a table has multiple candidate keys, one is chosen as?", options: ["Alternate key", "Foreign key", "Primary key", "Super key"], correct: 2 },
                { id: 37, question: "Which is an attribute that can uniquely identify rows but not minimal?", options: ["Super key", "Candidate key", "Primary key", "Foreign key"], correct: 0 },
                { id: 38, question: "A table can have multiple?", options: ["Primary keys", "Candidate keys", "Composite keys", "None"], correct: 1 },
                { id: 39, question: "Which prevents duplicate values in a column?", options: ["UNIQUE constraint", "DEFAULT", "CHECK", "FOREIGN KEY"], correct: 0 },
                { id: 40, question: "Which prevents null values in a column?", options: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "CHECK"], correct: 1 },
                { id: 41, question: "Which is both a super key and candidate key?", options: ["Primary key", "Foreign key", "Composite key", "Alternate key"], correct: 0 },
                { id: 42, question: "Which maintains relationship between two tables?", options: ["Foreign key", "Primary key", "Candidate key", "Alternate key"], correct: 0 },
                { id: 43, question: "A column declared as PRIMARY KEY is automatically?", options: ["Unique and Not Null", "Unique but Nullable", "Foreign key", "Optional"], correct: 0 },
                { id: 44, question: "Which constraint is used for conditions like age > 18?", options: ["CHECK", "UNIQUE", "DEFAULT", "FOREIGN KEY"], correct: 0 },
                { id: 45, question: "What happens when a primary key is composite?", options: ["Uses multiple attributes", "Allows nulls", "Duplicates allowed", "None"], correct: 0 },
                { id: 46, question: "If two candidate keys exist, one not chosen as primary is called?", options: ["Alternate key", "Foreign key", "Composite key", "Super key"], correct: 0 },
                { id: 47, question: "Which type of constraint prevents orphan records?", options: ["Foreign key constraint", "Primary key constraint", "Unique constraint", "Check constraint"], correct: 0 },
                { id: 48, question: "Which key can reference another table’s candidate key?", options: ["Primary key", "Foreign key", "Composite key", "Alternate key"], correct: 1 },
                { id: 49, question: "Which constraint applies at column level and table level?", options: ["NOT NULL", "CHECK", "DEFAULT", "All of these"], correct: 3 },
                { id: 50, question: "Which ensures each record is unique?", options: ["Primary key", "Candidate key", "Unique constraint", "All of these"], correct: 3 },
                { id: 51, question: "Which of the following is true about candidate keys?", options: ["Only one candidate key exists", "There can be multiple candidate keys", "Candidate key must be foreign key", "Candidate key is same as composite key"], correct: 1 },
                { id: 52, question: "Which key is selected from candidate keys to uniquely identify rows?", options: ["Foreign key", "Primary key", "Alternate key", "Super key"], correct: 1 },
                { id: 53, question: "Which constraint is used to enforce business rules?", options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "DEFAULT"], correct: 2 },
                { id: 54, question: "If a primary key consists of more than one attribute, it is called?", options: ["Composite key", "Candidate key", "Foreign key", "Alternate key"], correct: 0 },
                { id: 55, question: "Which key can be duplicated across rows?", options: ["Primary key", "Candidate key", "Foreign key", "Alternate key"], correct: 2 },
                { id: 56, question: "Which ensures that a column cannot have NULL values?", options: ["NOT NULL", "CHECK", "DEFAULT", "UNIQUE"], correct: 0 },
                { id: 57, question: "Which of the following always enforces uniqueness and non-null?", options: ["Primary key", "Candidate key", "Foreign key", "Default"], correct: 0 },
                { id: 58, question: "A foreign key in one table points to?", options: ["Primary key of same table", "Primary key in another table", "Candidate key in same table", "Schema"], correct: 1 },
                { id: 59, question: "Which constraint can ensure valid range of values like salary > 0?", options: ["CHECK", "DEFAULT", "UNIQUE", "PRIMARY KEY"], correct: 0 },
                { id: 60, question: "Which of the following constraints is column-level only?", options: ["NOT NULL", "CHECK", "DEFAULT", "All of these"], correct: 3 },
                { id: 61, question: "Which constraint sets a predefined value when no value is supplied?", options: ["UNIQUE", "PRIMARY KEY", "CHECK", "DEFAULT"], correct: 3 },
                { id: 62, question: "Which ensures that every tuple in a relation is unique?", options: ["Foreign key", "Primary key", "Super key", "Both Primary and Candidate keys"], correct: 3 },
                { id: 63, question: "Which key may consist of one or more attributes that uniquely identify a row?", options: ["Candidate key", "Foreign key", "Composite key", "Both A and C"], correct: 3 },
                { id: 64, question: "A table can have many?", options: ["Primary keys", "Candidate keys", "Foreign keys", "Both B and C"], correct: 3 },
                { id: 65, question: "Which of these is minimal and unique?", options: ["Super key", "Candidate key", "Composite key", "Foreign key"], correct: 1 },
                { id: 66, question: "Which of the following is always subset of super key?", options: ["Candidate key", "Foreign key", "Composite key", "Alternate key"], correct: 0 },
                { id: 67, question: "Which constraint prevents entering a value if it doesn’t match a condition?", options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"], correct: 2 },
                { id: 68, question: "If a foreign key references a non-existent row, it violates?", options: ["Entity integrity", "Referential integrity", "Domain constraint", "Key constraint"], correct: 1 },
                { id: 69, question: "Primary key attributes are always?", options: ["Nullable", "Not Null", "Duplicate allowed", "Foreign key"], correct: 1 },
                { id: 70, question: "Which constraint prevents duplicate records in a column?", options: ["NOT NULL", "UNIQUE", "DEFAULT", "CHECK"], correct: 1 },
                { id: 71, question: "Which is a collection of attributes uniquely identifying rows?", options: ["Foreign key", "Super key", "Composite key", "Schema"], correct: 1 },
                { id: 72, question: "Which integrity is ensured by NOT NULL constraint?", options: ["Referential integrity", "Entity integrity", "Domain integrity", "Key integrity"], correct: 1 },
                { id: 73, question: "Which constraint is applied to ensure valid domain values?", options: ["Domain constraint", "Primary key", "Check", "Unique"], correct: 0 },
                { id: 74, question: "Which of these is NOT allowed for a primary key column?", options: ["NULL", "Unique value", "Composite value", "Integer type"], correct: 0 },
                { id: 75, question: "Which type of key can be used as a foreign key in another table?", options: ["Candidate key", "Alternate key", "Primary key", "All of these"], correct: 3 },
                { id: 76, question: "Which maintains consistency between parent and child tables?", options: ["Primary key", "Foreign key", "Check constraint", "Default"], correct: 1 },
                { id: 77, question: "Which key is not minimal but still uniquely identifies rows?", options: ["Super key", "Candidate key", "Primary key", "Foreign key"], correct: 0 },
                { id: 78, question: "Which key acts as reference between two relations?", options: ["Candidate key", "Foreign key", "Super key", "Composite key"], correct: 1 },
                { id: 79, question: "Which ensures that each record can be retrieved uniquely?", options: ["Primary key", "Candidate key", "Super key", "All of these"], correct: 3 },
                { id: 80, question: "Which constraint is violated if NULL is inserted in primary key column?", options: ["Entity integrity", "Referential integrity", "Domain integrity", "Key integrity"], correct: 0 },
                { id: 81, question: "Which constraint allows multiple NULLs but no duplicate values?", options: ["UNIQUE", "PRIMARY KEY", "CHECK", "FOREIGN KEY"], correct: 0 },
                { id: 82, question: "Which ensures consistency of relationships?", options: ["Referential integrity", "Entity integrity", "Domain integrity", "Super key"], correct: 0 },
                { id: 83, question: "Which key can be defined at table level only?", options: ["Composite key", "Primary key", "Foreign key", "All of these"], correct: 3 },
                { id: 84, question: "If a foreign key in child table references parent table, parent row deletion may cause?", options: ["Orphan records", "Entity integrity", "Super key", "Schema violation"], correct: 0 },
                { id: 85, question: "Which of these can a table have multiple of?", options: ["Primary keys", "Unique keys", "Composite keys", "Foreign keys"], correct: 3 },
                { id: 86, question: "Which can be enforced by defining relationships between keys?", options: ["Referential integrity", "Domain integrity", "Entity integrity", "Super key integrity"], correct: 0 },
                { id: 87, question: "Which is NOT a valid property of primary key?", options: ["Unique", "Not Null", "Composite allowed", "Nullable"], correct: 3 },
                { id: 88, question: "Which constraint automatically checks validity of entered data?", options: ["Check", "Unique", "Primary", "Not Null"], correct: 0 },
                { id: 89, question: "Which of the following always acts as a superset of candidate keys?", options: ["Super key", "Primary key", "Foreign key", "Alternate key"], correct: 0 },
                { id: 90, question: "Which ensures that values in a column follow business rules?", options: ["Check", "Primary", "Foreign", "Default"], correct: 0 },
                { id: 91, question: "Which constraint automatically assigns a value if none is provided?", options: ["Check", "Default", "Unique", "Foreign"], correct: 1 },
                { id: 92, question: "Which constraint ensures no orphan tuples are created?", options: ["Primary key", "Unique", "Foreign key", "Check"], correct: 2 },
                { id: 93, question: "Which is minimal among keys?", options: ["Candidate key", "Super key", "Composite key", "Foreign key"], correct: 0 },
                { id: 94, question: "If a column is both unique and not null, it can serve as?", options: ["Foreign key", "Candidate key", "Alternate key", "Composite key"], correct: 1 },
                { id: 95, question: "Which is a key constraint violation?", options: ["Duplicate primary key value", "Null in non-key column", "Default value not set", "Check not used"], correct: 0 },
                { id: 96, question: "Which type of key is not necessarily unique?", options: ["Primary key", "Candidate key", "Foreign key", "Super key"], correct: 2 },
                { id: 97, question: "Which is also called secondary key?", options: ["Foreign key", "Alternate key", "Composite key", "Super key"], correct: 1 },
                { id: 98, question: "Which defines relationships between attributes of two tables?", options: ["Foreign key", "Candidate key", "Super key", "Primary key"], correct: 0 },
                { id: 99, question: "Which of the following enforces uniqueness automatically?", options: ["Primary key", "Candidate key", "Unique constraint", "All of these"], correct: 3 },
                { id: 100, question: "Which of the following can be null in a table?", options: ["Primary key column", "Candidate key column", "Foreign key column", "Unique key column"], correct: 2 }

            ],
        },
        "SQL basics":
        {
            color: "#14B8A6",
            questions: [
                { id: 1, question: "Which SQL command is used to retrieve data from a table?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correct: 0 },
                { id: 2, question: "Which SQL keyword is used to remove duplicate values?", options: ["UNIQUE", "DISTINCT", "ORDER BY", "ALL"], correct: 1 },
                { id: 3, question: "Which SQL clause is used to filter rows?", options: ["WHERE", "SELECT", "DISTINCT", "ORDER BY"], correct: 0 },
                { id: 4, question: "Which SQL clause is used to sort results?", options: ["ORDER BY", "DISTINCT", "WHERE", "LIMIT"], correct: 0 },
                { id: 5, question: "Which keyword sorts data in descending order?", options: ["ASC", "DESC", "DOWN", "DSC"], correct: 1 },
                { id: 6, question: "What is the default sorting order in ORDER BY clause?", options: ["DESC", "ASC", "Random", "None"], correct: 1 },
                { id: 7, question: "Which clause is used to filter groups in SQL?", options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"], correct: 2 },
                { id: 8, question: "Which SQL command is used to insert new rows?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correct: 1 },
                { id: 9, question: "Which SQL command is used to modify existing rows?", options: ["INSERT", "UPDATE", "ALTER", "SELECT"], correct: 1 },
                { id: 10, question: "Which SQL command is used to delete rows?", options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"], correct: 1 },
                { id: 11, question: "Which SQL command removes all rows but keeps structure?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correct: 2 },
                { id: 12, question: "Which command removes table structure permanently?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correct: 1 },
                { id: 13, question: "Which keyword is used to select all columns?", options: ["ALL", "*", "SELECT ALL", "COLUMNS"], correct: 1 },
                { id: 14, question: "Which SQL clause is used with SELECT to group rows?", options: ["ORDER BY", "GROUP BY", "HAVING", "DISTINCT"], correct: 1 },
                { id: 15, question: "Which statement updates salary column for all rows?", options: ["UPDATE employees SET salary=5000", "ALTER employees salary=5000", "INSERT salary=5000", "SELECT salary=5000"], correct: 0 },
                { id: 16, question: "Which statement deletes all rows in table?", options: ["DELETE * FROM table", "REMOVE FROM table", "DELETE FROM table", "DROP table"], correct: 2 },
                { id: 17, question: "Which command is used to rename a column?", options: ["UPDATE", "ALTER TABLE", "RENAME COLUMN", "MODIFY"], correct: 1 },
                { id: 18, question: "Which operator is used with WHERE to select range?", options: ["BETWEEN", "LIKE", "IN", "RANGE"], correct: 0 },
                { id: 19, question: "Which operator is used with WHERE to match pattern?", options: ["LIKE", "MATCH", "PATTERN", "BETWEEN"], correct: 0 },
                { id: 20, question: "Which operator is used with WHERE to match multiple values?", options: ["BETWEEN", "LIKE", "IN", "ANY"], correct: 2 },
                { id: 21, question: "Which SQL statement retrieves all records from table employees?", options: ["GET * FROM employees", "SELECT * FROM employees", "SHOW employees", "EXTRACT employees"], correct: 1 },
                { id: 22, question: "Which clause restricts the number of rows returned?", options: ["WHERE", "LIMIT", "HAVING", "DISTINCT"], correct: 1 },
                { id: 23, question: "Which keyword removes duplicate rows in output?", options: ["DISTINCT", "UNIQUE", "FILTER", "ALL"], correct: 0 },
                { id: 24, question: "Which keyword includes duplicates in result?", options: ["ALL", "DISTINCT", "UNIQUE", "NONE"], correct: 0 },
                { id: 25, question: "Which clause specifies conditions for row selection?", options: ["HAVING", "WHERE", "ORDER BY", "LIMIT"], correct: 1 },
                { id: 26, question: "Which operator is used to combine multiple conditions in WHERE?", options: ["AND/OR", "IN", "BETWEEN", "LIKE"], correct: 0 },
                { id: 27, question: "Which keyword is used to join tables?", options: ["JOIN", "MERGE", "CONNECT", "LINK"], correct: 0 },
                { id: 28, question: "Which join returns matching rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 0 },
                { id: 29, question: "Which join returns all rows from left table and matching from right?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 1 },
                { id: 30, question: "Which join returns all rows from right table and matching from left?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 2 },
                { id: 31, question: "Which join returns all rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 3 },
                { id: 32, question: "Which clause is used after GROUP BY to filter grouped data?", options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"], correct: 1 },
                { id: 33, question: "Which SQL statement adds a new column to table?", options: ["INSERT", "ALTER TABLE ADD", "UPDATE", "CREATE"], correct: 1 },
                { id: 34, question: "Which keyword is used to modify values in table?", options: ["INSERT", "UPDATE", "ALTER", "REPLACE"], correct: 1 },
                { id: 35, question: "Which operator is used for pattern matching with LIKE?", options: ["% and _", "* and ?", "# and @", "! and ~"], correct: 0 },
                { id: 36, question: "Which function is used to count rows?", options: ["SUM()", "COUNT()", "AVG()", "MAX()"], correct: 1 },
                { id: 37, question: "Which function gives average of column values?", options: ["SUM()", "COUNT()", "AVG()", "MIN()"], correct: 2 },
                { id: 38, question: "Which function finds highest value in column?", options: ["MAX()", "SUM()", "TOP()", "HIGHEST()"], correct: 0 },
                { id: 39, question: "Which function finds lowest value in column?", options: ["LOW()", "MIN()", "SMALL()", "LEAST()"], correct: 1 },
                { id: 40, question: "Which SQL command is used to remove duplicates automatically?", options: ["DISTINCT", "GROUP BY", "UNIQUE", "ALL"], correct: 0 },
                { id: 41, question: "Which SQL statement adds data into employees table?", options: ["INSERT INTO employees VALUES(...)", "UPDATE employees", "SELECT employees", "ALTER employees"], correct: 0 },
                { id: 42, question: "Which SQL statement modifies employee salary where id=10?", options: ["UPDATE employees SET salary=5000 WHERE id=10", "INSERT salary=5000", "ALTER salary=5000", "CHANGE salary=5000"], correct: 0 },
                { id: 43, question: "Which SQL deletes employee record where id=5?", options: ["REMOVE * FROM employees WHERE id=5", "DELETE FROM employees WHERE id=5", "DROP employees WHERE id=5", "CLEAR employees WHERE id=5"], correct: 1 },
                { id: 44, question: "Which clause is used to remove duplicates with aggregation?", options: ["GROUP BY", "DISTINCT", "ORDER BY", "HAVING"], correct: 0 },
                { id: 45, question: "Which SQL operator checks for NULL values?", options: ["= NULL", "IS NULL", "== NULL", "CHECK NULL"], correct: 1 },
                { id: 46, question: "Which operator is used to combine results of two SELECT statements?", options: ["JOIN", "UNION", "CONNECT", "COMBINE"], correct: 1 },
                { id: 47, question: "Which keyword shows all records including duplicates in UNION?", options: ["UNION ALL", "UNION", "JOIN", "CONNECT"], correct: 0 },
                { id: 48, question: "Which SQL clause is used to rename a column in result?", options: ["AS", "RENAME", "CHANGE", "ALTER"], correct: 0 },
                { id: 49, question: "Which SQL keyword is used to change column alias?", options: ["AS", "ALTER", "RENAME", "MODIFY"], correct: 0 },
                { id: 50, question: "Which SQL statement selects employees with salary > 3000?", options: ["SELECT * FROM employees WHERE salary>3000", "SELECT employees salary>3000", "SHOW employees WHERE salary>3000", "GET employees salary>3000"], correct: 0 },
                { id: 51, question: "Which SQL keyword is used to remove a table completely?", options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], correct: 2 },
                { id: 52, question: "Which SQL statement deletes all data but keeps the table structure?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correct: 2 },
                { id: 53, question: "Which command is used to modify table structure?", options: ["UPDATE", "ALTER TABLE", "INSERT", "RENAME"], correct: 1 },
                { id: 54, question: "Which SQL statement retrieves distinct department names?", options: ["SELECT UNIQUE department FROM employees", "SELECT DISTINCT department FROM employees", "SELECT department FROM employees UNIQUE", "SELECT department UNIQUE"], correct: 1 },
                { id: 55, question: "Which operator is used for pattern 'starts with A'?", options: ["LIKE 'A%'", "LIKE '%A'", "IN 'A'", "BETWEEN 'A'"], correct: 0 },
                { id: 56, question: "Which operator is used for pattern 'ends with Z'?", options: ["LIKE 'Z%'", "LIKE '%Z'", "LIKE '_Z%'", "LIKE 'Z_'"], correct: 1 },
                { id: 57, question: "Which operator is used for pattern 'contains 123'?", options: ["LIKE '123%'", "LIKE '%123%'", "LIKE '_123'", "IN 123"], correct: 1 },
                { id: 58, question: "Which operator is used to check membership in a list?", options: ["BETWEEN", "IN", "LIKE", "ANY"], correct: 1 },
                { id: 59, question: "Which SQL statement returns employees with salary between 2000 and 5000?", options: ["SELECT * FROM employees WHERE salary BETWEEN 2000 AND 5000", "SELECT * FROM employees WHERE salary=2000 TO 5000", "SELECT * FROM employees WHERE salary RANGE 2000 5000", "SELECT salary 2000-5000"], correct: 0 },
                { id: 60, question: "Which SQL statement retrieves employees whose department is IT or HR?", options: ["SELECT * FROM employees WHERE department IN ('IT','HR')", "SELECT * FROM employees WHERE department LIKE ('IT','HR')", "SELECT * FROM employees WHERE department='IT','HR'", "SELECT employees department=IT,HR"], correct: 0 },
                { id: 61, question: "Which clause is used to give another name to a column?", options: ["AS", "RENAME", "ALTER", "CHANGE"], correct: 0 },
                { id: 62, question: "Which SQL command is used to add multiple rows?", options: ["INSERT INTO ... VALUES (...), (...)", "ADD ROWS", "APPEND", "INSERT MANY"], correct: 0 },
                { id: 63, question: "Which SQL clause arranges result in ascending order?", options: ["ORDER BY ASC", "SORT ASC", "GROUP ASC", "ARRANGE ASC"], correct: 0 },
                { id: 64, question: "Which SQL clause arranges result in descending order?", options: ["ORDER BY DESC", "SORT DESC", "ARRANGE DESC", "GROUP DESC"], correct: 0 },
                { id: 65, question: "Which statement updates department for employee id=101?", options: ["UPDATE employees SET department='HR' WHERE id=101", "MODIFY employees department=HR WHERE id=101", "ALTER employees department=HR WHERE id=101", "CHANGE employees department=HR WHERE id=101"], correct: 0 },
                { id: 66, question: "Which SQL statement deletes employee where name='John'?", options: ["DELETE FROM employees WHERE name='John'", "REMOVE FROM employees name='John'", "DROP employees WHERE name='John'", "CLEAR employees WHERE name='John'"], correct: 0 },
                { id: 67, question: "Which SQL statement inserts employee with id=1 and name='Alice'?", options: ["INSERT INTO employees(id,name) VALUES(1,'Alice')", "ADD employees VALUES(1,'Alice')", "INSERT VALUES employees(1,'Alice')", "PUT employees(1,'Alice')"], correct: 0 },
                { id: 68, question: "Which function counts distinct values?", options: ["COUNT(DISTINCT column)", "COUNT UNIQUE(column)", "COUNT ALL(column)", "COUNT FILTER(column)"], correct: 0 },
                { id: 69, question: "Which function calculates total salary?", options: ["SUM(salary)", "TOTAL(salary)", "COUNT(salary)", "MAX(salary)"], correct: 0 },
                { id: 70, question: "Which SQL keyword is used to combine results of two queries and remove duplicates?", options: ["JOIN", "UNION", "CONNECT", "INTERSECT"], correct: 1 },
                { id: 71, question: "Which SQL clause is used to eliminate null values in a condition?", options: ["IS NOT NULL", "NOT NULL", "!= NULL", "CHECK NOT NULL"], correct: 0 },
                { id: 72, question: "Which SQL join returns rows even if no match in right table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 1 },
                { id: 73, question: "Which SQL join returns rows even if no match in left table?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 2 },
                { id: 74, question: "Which SQL join returns only matching rows?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 0 },
                { id: 75, question: "Which SQL keyword shows only different values?", options: ["DISTINCT", "UNIQUE", "DIFFERENT", "FILTER"], correct: 0 },
                { id: 76, question: "Which SQL command deletes all rows where condition matches?", options: ["REMOVE WHERE", "DELETE WHERE", "DROP WHERE", "CLEAR WHERE"], correct: 1 },
                { id: 77, question: "Which SQL clause combines rows from two tables?", options: ["JOIN", "UNION", "CONNECT", "INTERSECT"], correct: 0 },
                { id: 78, question: "Which SQL operator checks multiple conditions?", options: ["AND / OR", "LIKE", "BETWEEN", "IN"], correct: 0 },
                { id: 79, question: "Which SQL operator checks if a value exists in a subquery?", options: ["IN", "ANY", "ALL", "EXISTS"], correct: 3 },
                { id: 80, question: "Which SQL operator returns true if all values satisfy condition?", options: ["ALL", "ANY", "EXISTS", "BETWEEN"], correct: 0 },
                { id: 81, question: "Which SQL operator returns true if any value satisfies condition?", options: ["ALL", "ANY", "EXISTS", "IN"], correct: 1 },
                { id: 82, question: "Which keyword is used to display table structure?", options: ["SHOW", "DESCRIBE", "SCHEMA", "DETAILS"], correct: 1 },
                { id: 83, question: "Which SQL function returns current system date?", options: ["NOW()", "DATE()", "SYSDATE()", "CURDATE()"], correct: 3 },
                { id: 84, question: "Which SQL clause limits the number of rows fetched?", options: ["WHERE", "LIMIT", "ORDER BY", "DISTINCT"], correct: 1 },
                { id: 85, question: "Which SQL clause is used to sort results alphabetically?", options: ["ORDER BY column ASC", "ORDER column", "SORT BY column", "ARRANGE BY column"], correct: 0 },
                { id: 86, question: "Which SQL statement deletes all rows quickly?", options: ["TRUNCATE TABLE employees", "DROP employees", "DELETE employees", "REMOVE employees"], correct: 0 },
                { id: 87, question: "Which SQL command removes only table structure?", options: ["DROP TABLE employees", "TRUNCATE employees", "DELETE employees", "CLEAR employees"], correct: 0 },
                { id: 88, question: "Which SQL operator selects values between two numbers?", options: ["RANGE", "BETWEEN", "IN", "LIMIT"], correct: 1 },
                { id: 89, question: "Which SQL statement finds employees whose name contains 'a'?", options: ["SELECT * FROM employees WHERE name LIKE '%a%'", "SELECT employees name='a'", "FIND employees name='a'", "SEARCH employees name '%a%'"], correct: 0 },
                { id: 90, question: "Which SQL clause is used to filter aggregate results?", options: ["HAVING", "WHERE", "ORDER BY", "DISTINCT"], correct: 0 },
                { id: 91, question: "Which SQL function gives total number of rows?", options: ["COUNT()", "SUM()", "MAX()", "TOTAL()"], correct: 0 },
                { id: 92, question: "Which SQL keyword is used to remove duplicate rows?", options: ["DISTINCT", "UNIQUE", "REMOVE DUPLICATE", "ALL"], correct: 0 },
                { id: 93, question: "Which SQL command is used to modify column type?", options: ["ALTER TABLE MODIFY", "CHANGE COLUMN TYPE", "UPDATE COLUMN TYPE", "MODIFY TABLE"], correct: 0 },
                { id: 94, question: "Which SQL clause renames a column in output?", options: ["AS", "RENAME", "CHANGE", "MODIFY"], correct: 0 },
                { id: 95, question: "Which SQL statement deletes duplicate rows?", options: ["SELECT DISTINCT", "DELETE DUPLICATES", "REMOVE DUPLICATES", "DROP DUPLICATES"], correct: 0 },
                { id: 96, question: "Which SQL join is default when JOIN is written without keyword?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correct: 0 },
                { id: 97, question: "Which SQL keyword is used to combine rows from two queries including duplicates?", options: ["UNION ALL", "JOIN", "INTERSECT", "MERGE"], correct: 0 },
                { id: 98, question: "Which SQL operator is used to match exact value?", options: ["=", "LIKE", "IN", "BETWEEN"], correct: 0 },
                { id: 99, question: "Which SQL operator is used to avoid NULL results?", options: ["COALESCE()", "NVL()", "IS NOT NULL", "ALL of these"], correct: 3 },
                { id: 100, question: "Which SQL statement fetches all rows from students table?", options: ["SELECT * FROM students", "GET ALL FROM students", "SHOW students", "EXTRACT students"], correct: 0 },
            ],
        },
        "Database Languages & Transactions": {
            color: "#0EA5E9",
            questions: [
                { id: 1, question: "Which SQL command is used to create a new table?", options: ["INSERT", "CREATE", "UPDATE", "ALTER"], correct: 1 },
                { id: 2, question: "Which category of SQL is CREATE part of?", options: ["DML", "DDL", "DCL", "TCL"], correct: 1 },
                { id: 3, question: "Which SQL command modifies existing table structure?", options: ["UPDATE", "ALTER", "MODIFY", "CHANGE"], correct: 1 },
                { id: 4, question: "Which SQL command deletes a table permanently?", options: ["REMOVE", "DELETE", "DROP", "TRUNCATE"], correct: 2 },
                { id: 5, question: "Which SQL command is used to delete rows but not table structure?", options: ["DROP", "TRUNCATE", "DELETE", "REMOVE"], correct: 2 },
                { id: 6, question: "Which SQL language is used to insert new data?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                { id: 7, question: "Which command is used to change existing data in a table?", options: ["INSERT", "UPDATE", "MODIFY", "ALTER"], correct: 1 },
                { id: 8, question: "Which SQL command removes all rows from a table quickly?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correct: 2 },
                { id: 9, question: "Which SQL language is SELECT part of?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                { id: 10, question: "Which SQL command is used to give privileges to users?", options: ["GRANT", "REVOKE", "COMMIT", "ALTER"], correct: 0 },
                { id: 11, question: "Which SQL command is used to remove user privileges?", options: ["DELETE", "DROP", "REVOKE", "REMOVE"], correct: 2 },
                { id: 12, question: "Which language category includes GRANT and REVOKE?", options: ["DDL", "DML", "DCL", "TCL"], correct: 2 },
                { id: 13, question: "Which SQL command is used to save changes permanently?", options: ["SAVEPOINT", "COMMIT", "ROLLBACK", "GRANT"], correct: 1 },
                { id: 14, question: "Which SQL command cancels changes before commit?", options: ["DELETE", "ROLLBACK", "SAVEPOINT", "DROP"], correct: 1 },
                { id: 15, question: "Which command creates a savepoint within a transaction?", options: ["SAVEPOINT", "COMMIT", "ROLLBACK", "CHECKPOINT"], correct: 0 },
                { id: 16, question: "Which SQL language includes COMMIT and ROLLBACK?", options: ["DDL", "DML", "DCL", "TCL"], correct: 3 },
                { id: 17, question: "Which is a DDL command?", options: ["INSERT", "CREATE", "UPDATE", "DELETE"], correct: 1 },
                { id: 18, question: "Which is a DML command?", options: ["CREATE", "ALTER", "INSERT", "DROP"], correct: 2 },
                { id: 19, question: "Which command adds a new column to an existing table?", options: ["MODIFY", "UPDATE", "ALTER TABLE ADD", "CHANGE"], correct: 2 },
                { id: 20, question: "Which command removes a column from table?", options: ["UPDATE", "ALTER TABLE DROP COLUMN", "DELETE", "REMOVE"], correct: 1 },
                { id: 21, question: "Which category of SQL modifies data inside tables?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                { id: 22, question: "Which category of SQL manages database schema?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
                { id: 23, question: "Which command permanently deletes a database?", options: ["TRUNCATE DATABASE", "DROP DATABASE", "DELETE DATABASE", "REMOVE DATABASE"], correct: 1 },
                { id: 24, question: "Which command restores database to a previous savepoint?", options: ["ROLLBACK TO", "COMMIT", "UNDO", "DROP"], correct: 0 },
                { id: 25, question: "Which command is used to rename a table?", options: ["RENAME", "ALTER TABLE RENAME", "CHANGE", "MODIFY"], correct: 1 },
                { id: 26, question: "Which command is used to delete specific rows?", options: ["DROP", "DELETE", "TRUNCATE", "ALTER"], correct: 1 },
                { id: 27, question: "Which command is used to add constraints in table?", options: ["ALTER TABLE ADD CONSTRAINT", "INSERT CONSTRAINT", "CREATE CONSTRAINT", "DEFINE"], correct: 0 },
                { id: 28, question: "Which command is used to undo last transaction?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "REVOKE"], correct: 1 },
                { id: 29, question: "Which command is used to assign roles to users?", options: ["COMMIT", "GRANT", "ROLLBACK", "ALTER"], correct: 1 },
                { id: 30, question: "Which is not a DML command?", options: ["INSERT", "UPDATE", "DELETE", "ALTER"], correct: 3 },
                { id: 31, question: "Which of these is not part of TCL?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "DELETE"], correct: 3 },
                { id: 32, question: "Which DCL command is used to take away permissions?", options: ["DELETE", "REVOKE", "REMOVE", "ROLLBACK"], correct: 1 },
                { id: 33, question: "Which command makes changes permanent?", options: ["ROLLBACK", "COMMIT", "DELETE", "DROP"], correct: 1 },
                { id: 34, question: "Which command is used to create a new schema?", options: ["CREATE SCHEMA", "ALTER SCHEMA", "NEW SCHEMA", "INSERT SCHEMA"], correct: 0 },
                { id: 35, question: "Which command changes table name?", options: ["ALTER TABLE RENAME", "UPDATE TABLE", "CHANGE TABLE", "MODIFY TABLE"], correct: 0 },
                { id: 36, question: "Which command removes all records but can’t be rolled back?", options: ["DELETE", "TRUNCATE", "DROP", "ALTER"], correct: 1 },
                { id: 37, question: "Which DML command adds new rows to table?", options: ["INSERT", "CREATE", "UPDATE", "ADD"], correct: 0 },
                { id: 38, question: "Which SQL category handles transaction control?", options: ["DDL", "DML", "DCL", "TCL"], correct: 3 },
                { id: 39, question: "Which SQL category controls access rights?", options: ["DDL", "DML", "DCL", "TCL"], correct: 2 },
                { id: 40, question: "Which SQL command is used to delete all rows where dept='IT'?", options: ["DROP FROM employees WHERE dept='IT'", "DELETE FROM employees WHERE dept='IT'", "TRUNCATE employees WHERE dept='IT'", "REMOVE dept='IT'"], correct: 1 },
                { id: 41, question: "Which SQL command is used to restore last committed state?", options: ["COMMIT", "ROLLBACK", "UNDO", "RESET"], correct: 1 },
                { id: 42, question: "Which SQL command ensures only authorized access?", options: ["GRANT/REVOKE", "COMMIT", "ROLLBACK", "ALTER"], correct: 0 },
                { id: 43, question: "Which SQL command is used to create a view?", options: ["CREATE VIEW", "ALTER VIEW", "NEW VIEW", "DEFINE VIEW"], correct: 0 },
                { id: 44, question: "Which SQL command is used to delete a view?", options: ["REMOVE VIEW", "DROP VIEW", "DELETE VIEW", "TRUNCATE VIEW"], correct: 1 },
                { id: 45, question: "Which command creates backup of database?", options: ["BACKUP DATABASE", "SAVE DATABASE", "DUMP DATABASE", "COPY DATABASE"], correct: 0 },
                { id: 46, question: "Which command restores database from backup?", options: ["RESTORE DATABASE", "ROLLBACK DATABASE", "RESET DATABASE", "IMPORT DATABASE"], correct: 0 },
                { id: 47, question: "Which TCL command defines intermediate points?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "CHECKPOINT"], correct: 0 },
                { id: 48, question: "Which DCL command is used to remove permissions?", options: ["GRANT", "REVOKE", "REMOVE", "ROLLBACK"], correct: 1 },
                { id: 49, question: "Which DML command retrieves data from tables?", options: ["INSERT", "SELECT", "UPDATE", "DELETE"], correct: 1 },
                { id: 50, question: "Which SQL command is used to define structure of objects?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
                { id: 51, question: "Which command is used to modify an existing view?", options: ["ALTER VIEW", "UPDATE VIEW", "MODIFY VIEW", "CHANGE VIEW"], correct: 0 },
                { id: 52, question: "Which DML command is used to remove specific rows?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correct: 0 },
                { id: 53, question: "Which command removes database objects permanently?", options: ["DROP", "DELETE", "TRUNCATE", "ALTER"], correct: 0 },
                { id: 54, question: "Which SQL language allows defining constraints?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
                { id: 55, question: "Which command removes a table including all rows?", options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], correct: 2 },
                { id: 56, question: "Which SQL category controls transactions?", options: ["DDL", "DML", "DCL", "TCL"], correct: 3 },
                { id: 57, question: "Which command is used to change column type?", options: ["ALTER TABLE MODIFY", "UPDATE", "RENAME", "SET"], correct: 0 },
                { id: 58, question: "Which SQL command is used to assign privileges?", options: ["GRANT", "REVOKE", "PERMIT", "ALLOW"], correct: 0 },
                { id: 59, question: "Which SQL command is used to withdraw privileges?", options: ["DELETE", "REVOKE", "ROLLBACK", "DENY"], correct: 1 },
                { id: 60, question: "Which TCL command is used to end a transaction?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "STOP"], correct: 2 },
                { id: 61, question: "Which SQL command can remove only data but not structure?", options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"], correct: 0 },
                { id: 62, question: "Which command can’t be rolled back?", options: ["DELETE", "TRUNCATE", "ROLLBACK", "UPDATE"], correct: 1 },
                { id: 63, question: "Which command is used to rename a database?", options: ["ALTER DATABASE RENAME", "RENAME DATABASE", "UPDATE DATABASE", "CHANGE DATABASE"], correct: 0 },
                { id: 64, question: "Which DML command modifies existing records?", options: ["INSERT", "ALTER", "UPDATE", "CREATE"], correct: 2 },
                { id: 65, question: "Which command removes duplicate rows automatically?", options: ["DISTINCT", "TRUNCATE", "DROP", "DELETE"], correct: 0 },
                { id: 66, question: "Which is an example of DCL?", options: ["GRANT", "CREATE", "INSERT", "ALTER"], correct: 0 },
                { id: 67, question: "Which SQL language is responsible for schema definition?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
                { id: 68, question: "Which SQL language is responsible for data retrieval?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                { id: 69, question: "Which SQL command sets intermediate markers in a transaction?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "GRANT"], correct: 0 },
                { id: 70, question: "Which SQL command cancels all uncommitted changes?", options: ["SAVEPOINT", "ROLLBACK", "UNDO", "STOP"], correct: 1 },
                { id: 71, question: "Which SQL statement creates a new database?", options: ["CREATE DATABASE db_name", "NEW DATABASE db_name", "MAKE DATABASE db_name", "ADD DATABASE db_name"], correct: 0 },
                { id: 72, question: "Which SQL command is used to add constraints later?", options: ["ALTER TABLE ADD CONSTRAINT", "UPDATE CONSTRAINT", "INSERT CONSTRAINT", "DEFINE"], correct: 0 },
                { id: 73, question: "Which DML command can add multiple rows at once?", options: ["MULTI INSERT", "INSERT INTO ... VALUES (...), (...)", "APPEND", "INSERT MANY"], correct: 1 },
                { id: 74, question: "Which command removes a specific constraint?", options: ["ALTER TABLE DROP CONSTRAINT", "DELETE CONSTRAINT", "REMOVE CONSTRAINT", "RESET CONSTRAINT"], correct: 0 },
                { id: 75, question: "Which TCL command defines multiple checkpoints?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "LOCK"], correct: 0 },
                { id: 76, question: "Which SQL command deletes specific rows permanently after COMMIT?", options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"], correct: 0 },
                { id: 77, question: "Which SQL command can undo to a specific point?", options: ["ROLLBACK TO SAVEPOINT", "RESET TO", "UNDO TO", "STOP TO"], correct: 0 },
                { id: 78, question: "Which DML command retrieves all rows from a table?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correct: 0 },
                { id: 79, question: "Which DCL command gives users privileges to query data?", options: ["GRANT SELECT", "REVOKE SELECT", "ALLOW SELECT", "CREATE SELECT"], correct: 0 },
                { id: 80, question: "Which DCL command revokes update privilege?", options: ["REVOKE UPDATE", "REMOVE UPDATE", "DELETE UPDATE", "DROP UPDATE"], correct: 0 },
                { id: 81, question: "Which SQL command drops only the data but retains the table?", options: ["TRUNCATE", "DELETE", "DROP", "CLEAR"], correct: 0 },
                { id: 82, question: "Which SQL command is irreversible?", options: ["ROLLBACK", "COMMIT", "DROP", "SAVEPOINT"], correct: 2 },
                { id: 83, question: "Which SQL command removes duplicate rows in SELECT?", options: ["DISTINCT", "UNIQUE", "ONLY", "FILTER"], correct: 0 },
                { id: 84, question: "Which command is used to undo last transaction permanently committed?", options: ["ROLLBACK", "UNDO", "Not possible", "SAVEPOINT"], correct: 2 },
                { id: 85, question: "Which SQL command is used to delete schema?", options: ["DROP SCHEMA", "DELETE SCHEMA", "REMOVE SCHEMA", "CLEAR SCHEMA"], correct: 0 },
                { id: 86, question: "Which DDL command can rename schema objects?", options: ["ALTER", "UPDATE", "RENAME", "MODIFY"], correct: 0 },
                { id: 87, question: "Which SQL command grants all privileges to user?", options: ["GRANT ALL", "PERMIT ALL", "ALLOW ALL", "SET ALL"], correct: 0 },
                { id: 88, question: "Which SQL command removes all privileges from user?", options: ["REVOKE ALL", "DELETE ALL", "REMOVE ALL", "DROP ALL"], correct: 0 },
                { id: 89, question: "Which SQL command is used to start a transaction?", options: ["BEGIN TRANSACTION", "START TRANSACTION", "OPEN TRANSACTION", "INIT TRANSACTION"], correct: 1 },
                { id: 90, question: "Which SQL language allows managing security access?", options: ["DDL", "DML", "DCL", "TCL"], correct: 2 },
                { id: 91, question: "Which SQL command modifies default value of column?", options: ["ALTER TABLE MODIFY DEFAULT", "UPDATE DEFAULT", "CHANGE DEFAULT", "RESET DEFAULT"], correct: 0 },
                { id: 92, question: "Which SQL command is used to delete specific records with condition?", options: ["DELETE FROM table WHERE condition", "REMOVE WHERE", "TRUNCATE WHERE", "DROP WHERE"], correct: 0 },
                { id: 93, question: "Which SQL command removes an index?", options: ["DROP INDEX", "DELETE INDEX", "REMOVE INDEX", "CLEAR INDEX"], correct: 0 },
                { id: 94, question: "Which SQL command creates an index?", options: ["CREATE INDEX", "MAKE INDEX", "NEW INDEX", "ADD INDEX"], correct: 0 },
                { id: 95, question: "Which SQL command is used to delete view permanently?", options: ["DROP VIEW", "REMOVE VIEW", "DELETE VIEW", "CLEAR VIEW"], correct: 0 },
                { id: 96, question: "Which SQL command adds NOT NULL constraint?", options: ["ALTER TABLE MODIFY NOT NULL", "SET NOT NULL", "ADD NOT NULL", "CREATE NOT NULL"], correct: 0 },
                { id: 97, question: "Which SQL language includes schema modification?", options: ["DDL", "DML", "DCL", "TCL"], correct: 0 },
                { id: 98, question: "Which SQL language is SELECT classified under?", options: ["DDL", "DML", "DCL", "TCL"], correct: 1 },
                { id: 99, question: "Which command resets table identity counter?", options: ["TRUNCATE", "DELETE", "ALTER", "RESET"], correct: 0 },
                { id: 100, question: "Which SQL command is used to rollback to last savepoint?", options: ["ROLLBACK TO SAVEPOINT", "UNDO SAVEPOINT", "RESET TO SAVEPOINT", "RETURN TO SAVEPOINT"], correct: 0 },
                { id: 101, question: "Which SQL command can add a new column with default value?", options: ["ALTER TABLE ADD COLUMN ... DEFAULT", "UPDATE DEFAULT", "INSERT DEFAULT", "SET DEFAULT"], correct: 0 },
                { id: 102, question: "Which SQL command is used to change table storage engine?", options: ["ALTER TABLE ENGINE", "SET ENGINE", "UPDATE ENGINE", "MODIFY ENGINE"], correct: 0 },
                { id: 103, question: "Which SQL command ensures transaction durability?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "GRANT"], correct: 0 },
                { id: 104, question: "Which SQL command is used to delete all rows faster without logging each row?", options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"], correct: 0 },
                { id: 105, question: "Which SQL command ensures no partial transactions?", options: ["COMMIT", "ROLLBACK", "TCL commands", "ACID"], correct: 2 },
                { id: 106, question: "Which command resets auto-increment counter?", options: ["TRUNCATE", "RESET", "ALTER", "DELETE"], correct: 0 },
                { id: 107, question: "Which DML command is used with WHERE clause?", options: ["INSERT", "DELETE", "CREATE", "DROP"], correct: 1 },
                { id: 108, question: "Which command is used to give a user read-only access?", options: ["GRANT SELECT", "GRANT UPDATE", "GRANT ALL", "GRANT DELETE"], correct: 0 },
                { id: 109, question: "Which SQL command revokes insert privilege?", options: ["REVOKE INSERT", "DROP INSERT", "REMOVE INSERT", "DELETE INSERT"], correct: 0 },
                { id: 110, question: "Which SQL command ends a transaction successfully?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "GRANT"], correct: 1 },
                { id: 111, question: "Which SQL command removes all rows from employee table permanently?", options: ["DROP employee", "TRUNCATE employee", "DELETE employee", "REMOVE employee"], correct: 1 },
                { id: 112, question: "Which SQL command creates a new user?", options: ["CREATE USER", "NEW USER", "ADD USER", "INSERT USER"], correct: 0 },
                { id: 113, question: "Which SQL command is used to change password of a user?", options: ["ALTER USER", "UPDATE PASSWORD", "SET PASSWORD", "CHANGE USER"], correct: 0 },
                { id: 114, question: "Which SQL command gives permission to drop a table?", options: ["GRANT DROP", "REVOKE DROP", "PERMIT DROP", "ALLOW DROP"], correct: 0 },
                { id: 115, question: "Which SQL command removes permission from user?", options: ["GRANT", "REVOKE", "DELETE", "ROLLBACK"], correct: 1 },
                { id: 116, question: "Which SQL command is used to stop a running transaction?", options: ["ROLLBACK", "COMMIT", "CANCEL", "STOP"], correct: 0 },
                { id: 117, question: "Which SQL command creates a temporary table?", options: ["CREATE TEMPORARY TABLE", "NEW TEMP TABLE", "TEMP TABLE CREATE", "ADD TEMP"], correct: 0 },
                { id: 118, question: "Which SQL command is used to rename a column?", options: ["ALTER TABLE RENAME COLUMN", "CHANGE COLUMN", "UPDATE COLUMN", "MODIFY COLUMN"], correct: 0 },
                { id: 119, question: "Which SQL command checks transaction consistency?", options: ["COMMIT", "ROLLBACK", "CHECKPOINT", "SAVEPOINT"], correct: 2 },
                { id: 120, question: "Which SQL command deletes database completely?", options: ["DELETE DATABASE", "DROP DATABASE", "REMOVE DATABASE", "TRUNCATE DATABASE"], correct: 1 },
                { id: 121, question: "Which SQL language deals with granting access?", options: ["DDL", "DML", "DCL", "TCL"], correct: 2 },
                { id: 122, question: "Which SQL command is used to restrict access?", options: ["REVOKE", "ROLLBACK", "DELETE", "DROP"], correct: 0 },
                { id: 123, question: "Which SQL command makes a transaction permanent?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "UNDO"], correct: 1 },
                { id: 124, question: "Which SQL command is used to add a check constraint?", options: ["ALTER TABLE ADD CHECK", "SET CHECK", "UPDATE CHECK", "DEFINE CHECK"], correct: 0 },
                { id: 125, question: "Which SQL command removes a check constraint?", options: ["ALTER TABLE DROP CHECK", "DELETE CHECK", "REMOVE CHECK", "CLEAR CHECK"], correct: 0 },
                { id: 126, question: "Which SQL command starts transaction explicitly?", options: ["START TRANSACTION", "BEGIN TRANSACTION", "OPEN TRANSACTION", "INIT TRANSACTION"], correct: 1 },
                { id: 127, question: "Which SQL command rolls back to beginning of transaction?", options: ["ROLLBACK", "RESET", "UNDO", "STOP"], correct: 0 },
                { id: 128, question: "Which SQL command adds a default value to column?", options: ["ALTER TABLE MODIFY DEFAULT", "UPDATE DEFAULT", "SET DEFAULT", "ADD DEFAULT"], correct: 0 },
                { id: 129, question: "Which SQL command changes null property of a column?", options: ["ALTER TABLE MODIFY NULL/NOT NULL", "UPDATE NULL", "SET NULL", "REMOVE NULL"], correct: 0 },
                { id: 130, question: "Which SQL command drops an index from a table?", options: ["DROP INDEX", "DELETE INDEX", "REMOVE INDEX", "CLEAR INDEX"], correct: 0 },
                { id: 131, question: "Which SQL command is used to lock a table?", options: ["LOCK TABLE", "HOLD TABLE", "SET LOCK", "BLOCK TABLE"], correct: 0 },
                { id: 132, question: "Which SQL command is used to unlock a table?", options: ["UNLOCK TABLE", "RELEASE LOCK", "DROP LOCK", "RESET LOCK"], correct: 0 },
                { id: 133, question: "Which SQL command changes table owner?", options: ["ALTER TABLE OWNER", "UPDATE OWNER", "SET OWNER", "CHANGE OWNER"], correct: 0 },
                { id: 134, question: "Which SQL command checks privileges of a user?", options: ["SHOW GRANTS", "CHECK PRIVILEGES", "SHOW PERMISSIONS", "LIST GRANTS"], correct: 0 },
                { id: 135, question: "Which SQL command deletes specific columns?", options: ["ALTER TABLE DROP COLUMN", "DELETE COLUMN", "REMOVE COLUMN", "TRUNCATE COLUMN"], correct: 0 },
                { id: 136, question: "Which SQL command modifies existing constraints?", options: ["ALTER TABLE MODIFY CONSTRAINT", "UPDATE CONSTRAINT", "RESET CONSTRAINT", "CHANGE CONSTRAINT"], correct: 0 },
                { id: 137, question: "Which SQL command removes a foreign key?", options: ["ALTER TABLE DROP FOREIGN KEY", "DELETE FOREIGN KEY", "REMOVE FOREIGN KEY", "CLEAR FOREIGN KEY"], correct: 0 },
                { id: 138, question: "Which SQL command creates a foreign key?", options: ["ALTER TABLE ADD FOREIGN KEY", "CREATE FOREIGN KEY", "NEW FOREIGN KEY", "INSERT FOREIGN KEY"], correct: 0 },
                { id: 139, question: "Which SQL command is used to backup database?", options: ["BACKUP DATABASE", "SAVE DATABASE", "EXPORT DATABASE", "DUMP DATABASE"], correct: 0 },
                { id: 140, question: "Which SQL command imports database backup?", options: ["RESTORE DATABASE", "IMPORT DATABASE", "LOAD DATABASE", "RELOAD DATABASE"], correct: 1 },
                { id: 141, question: "Which SQL command modifies transaction isolation?", options: ["SET TRANSACTION ISOLATION LEVEL", "CHANGE ISOLATION", "UPDATE ISOLATION", "ALTER ISOLATION"], correct: 0 },
                { id: 142, question: "Which SQL command grants all privileges on a database?", options: ["GRANT ALL ON db_name", "ALLOW ALL ON db_name", "PERMIT ALL ON db_name", "SET ALL ON db_name"], correct: 0 },
                { id: 143, question: "Which SQL command revokes all privileges on a table?", options: ["REVOKE ALL ON table", "REMOVE ALL ON table", "DROP ALL ON table", "DELETE ALL ON table"], correct: 0 },
                { id: 144, question: "Which SQL command creates synonym for a table?", options: ["CREATE SYNONYM", "NEW SYNONYM", "ADD SYNONYM", "DEFINE SYNONYM"], correct: 0 },
                { id: 145, question: "Which SQL command removes synonym?", options: ["DROP SYNONYM", "DELETE SYNONYM", "REMOVE SYNONYM", "CLEAR SYNONYM"], correct: 0 },
                { id: 146, question: "Which SQL command changes session settings?", options: ["SET SESSION", "ALTER SESSION", "UPDATE SESSION", "MODIFY SESSION"], correct: 1 },
                { id: 147, question: "Which SQL command shows current database?", options: ["SELECT DATABASE()", "SHOW DATABASE", "GET DATABASE", "LIST DATABASE"], correct: 0 },
                { id: 148, question: "Which SQL command displays all tables?", options: ["SHOW TABLES", "LIST TABLES", "DISPLAY TABLES", "GET TABLES"], correct: 0 },
                { id: 149, question: "Which SQL command shows structure of a table?", options: ["DESCRIBE table_name", "SHOW STRUCTURE", "GET STRUCTURE", "LIST STRUCTURE"], correct: 0 },
                { id: 150, question: "Which SQL command shows current user privileges?", options: ["SHOW GRANTS FOR user", "SHOW PRIVILEGES FOR user", "LIST PRIVILEGES", "GET PRIVILEGES"], correct: 0 },
                { id: 151, question: "Which SQL command is used to drop a user?", options: ["DROP USER", "DELETE USER", "REMOVE USER", "CLEAR USER"], correct: 0 },
                { id: 152, question: "Which SQL command is used to alter user properties?", options: ["ALTER USER", "UPDATE USER", "CHANGE USER", "SET USER"], correct: 0 },
                { id: 153, question: "Which SQL command sets transaction read-only?", options: ["SET TRANSACTION READ ONLY", "TRANSACTION READ ONLY", "SET READ MODE", "SET ISOLATION READ ONLY"], correct: 0 },
                { id: 154, question: "Which SQL command allows multiple savepoints?", options: ["SAVEPOINT", "MULTI SAVEPOINT", "SET SAVEPOINT", "NEW SAVEPOINT"], correct: 0 },
                { id: 155, question: "Which SQL command creates a sequence?", options: ["CREATE SEQUENCE", "NEW SEQUENCE", "ADD SEQUENCE", "MAKE SEQUENCE"], correct: 0 },
                { id: 156, question: "Which SQL command deletes a sequence?", options: ["DROP SEQUENCE", "DELETE SEQUENCE", "REMOVE SEQUENCE", "CLEAR SEQUENCE"], correct: 0 },
                { id: 157, question: "Which SQL command changes sequence values?", options: ["ALTER SEQUENCE", "UPDATE SEQUENCE", "RESET SEQUENCE", "MODIFY SEQUENCE"], correct: 0 },
                { id: 158, question: "Which SQL command retrieves current sequence value?", options: ["CURRVAL", "GETVAL", "SHOWVAL", "NOWVAL"], correct: 0 },
                { id: 159, question: "Which SQL command retrieves next sequence value?", options: ["NEXTVAL", "GETNEXT", "NEXTSEQ", "SEQNEXT"], correct: 0 },
                { id: 160, question: "Which SQL command creates a synonym in Oracle?", options: ["CREATE SYNONYM", "MAKE SYNONYM", "NEW SYNONYM", "DEFINE SYNONYM"], correct: 0 },
                { id: 161, question: "Which SQL command removes a synonym in Oracle?", options: ["DROP SYNONYM", "DELETE SYNONYM", "REMOVE SYNONYM", "CLEAR SYNONYM"], correct: 0 },
                { id: 162, question: "Which SQL command is used to lock specific rows?", options: ["SELECT ... FOR UPDATE", "LOCK ROWS", "BLOCK ROWS", "HOLD ROWS"], correct: 0 },
                { id: 163, question: "Which SQL command assigns quota on tablespace?", options: ["ALTER USER QUOTA", "SET QUOTA", "GRANT QUOTA", "ALLOCATE QUOTA"], correct: 0 },
                { id: 164, question: "Which SQL command creates a role?", options: ["CREATE ROLE", "NEW ROLE", "ADD ROLE", "MAKE ROLE"], correct: 0 },
                { id: 165, question: "Which SQL command removes a role?", options: ["DROP ROLE", "DELETE ROLE", "REMOVE ROLE", "CLEAR ROLE"], correct: 0 },
                { id: 166, question: "Which SQL command grants a role to user?", options: ["GRANT role TO user", "ASSIGN role TO user", "SET role TO user", "ALLOCATE role TO user"], correct: 0 },
                { id: 167, question: "Which SQL command removes a role from user?", options: ["REVOKE role FROM user", "REMOVE role FROM user", "DELETE role FROM user", "DROP role FROM user"], correct: 0 },
                { id: 168, question: "Which SQL command switches user role?", options: ["SET ROLE", "CHANGE ROLE", "UPDATE ROLE", "ALTER ROLE"], correct: 0 },
                { id: 169, question: "Which SQL command lists all roles?", options: ["SHOW ROLES", "LIST ROLES", "GET ROLES", "DISPLAY ROLES"], correct: 0 },
                { id: 170, question: "Which SQL command lists privileges of a role?", options: ["SHOW GRANTS FOR role", "LIST PRIVILEGES", "GET PRIVILEGES", "DISPLAY PRIVILEGES"], correct: 0 },
                { id: 171, question: "Which SQL command is used to create a trigger?", options: ["CREATE TRIGGER", "NEW TRIGGER", "MAKE TRIGGER", "ADD TRIGGER"], correct: 0 },
                { id: 172, question: "Which SQL command is used to drop a trigger?", options: ["DROP TRIGGER", "DELETE TRIGGER", "REMOVE TRIGGER", "CLEAR TRIGGER"], correct: 0 },
                { id: 173, question: "Which SQL command modifies a trigger?", options: ["ALTER TRIGGER", "UPDATE TRIGGER", "CHANGE TRIGGER", "RESET TRIGGER"], correct: 0 },
                { id: 174, question: "Which SQL command disables a trigger?", options: ["ALTER TRIGGER DISABLE", "DISABLE TRIGGER", "STOP TRIGGER", "OFF TRIGGER"], correct: 0 },
                { id: 175, question: "Which SQL command enables a trigger?", options: ["ALTER TRIGGER ENABLE", "ENABLE TRIGGER", "START TRIGGER", "ON TRIGGER"], correct: 0 },
                { id: 176, question: "Which SQL command is used to list triggers?", options: ["SHOW TRIGGERS", "LIST TRIGGERS", "GET TRIGGERS", "DISPLAY TRIGGERS"], correct: 0 },
                { id: 177, question: "Which SQL command creates a procedure?", options: ["CREATE PROCEDURE", "NEW PROCEDURE", "MAKE PROCEDURE", "ADD PROCEDURE"], correct: 0 },
                { id: 178, question: "Which SQL command deletes a procedure?", options: ["DROP PROCEDURE", "DELETE PROCEDURE", "REMOVE PROCEDURE", "CLEAR PROCEDURE"], correct: 0 },
                { id: 179, question: "Which SQL command modifies a procedure?", options: ["ALTER PROCEDURE", "UPDATE PROCEDURE", "CHANGE PROCEDURE", "RESET PROCEDURE"], correct: 0 },
                { id: 180, question: "Which SQL command executes a procedure?", options: ["EXECUTE procedure", "RUN procedure", "CALL procedure", "DO procedure"], correct: 2 },
                { id: 181, question: "Which SQL command creates a function?", options: ["CREATE FUNCTION", "NEW FUNCTION", "MAKE FUNCTION", "ADD FUNCTION"], correct: 0 },
                { id: 182, question: "Which SQL command deletes a function?", options: ["DROP FUNCTION", "DELETE FUNCTION", "REMOVE FUNCTION", "CLEAR FUNCTION"], correct: 0 },
                { id: 183, question: "Which SQL command modifies a function?", options: ["ALTER FUNCTION", "UPDATE FUNCTION", "CHANGE FUNCTION", "RESET FUNCTION"], correct: 0 },
                { id: 184, question: "Which SQL command executes a function?", options: ["SELECT function()", "RUN function()", "CALL function()", "EXEC function()"], correct: 0 },
                { id: 185, question: "Which SQL command is used to schedule jobs?", options: ["CREATE JOB", "NEW JOB", "ADD JOB", "MAKE JOB"], correct: 0 },
                { id: 186, question: "Which SQL command deletes a job?", options: ["DROP JOB", "DELETE JOB", "REMOVE JOB", "CLEAR JOB"], correct: 0 },
                { id: 187, question: "Which SQL command modifies a job?", options: ["ALTER JOB", "UPDATE JOB", "CHANGE JOB", "RESET JOB"], correct: 0 },
                { id: 188, question: "Which SQL command shows all jobs?", options: ["SHOW JOBS", "LIST JOBS", "GET JOBS", "DISPLAY JOBS"], correct: 0 },
                { id: 189, question: "Which SQL command creates a materialized view?", options: ["CREATE MATERIALIZED VIEW", "NEW MVIEW", "MAKE MVIEW", "ADD MVIEW"], correct: 0 },
                { id: 190, question: "Which SQL command refreshes a materialized view?", options: ["REFRESH MATERIALIZED VIEW", "UPDATE MVIEW", "RESET MVIEW", "RENEW MVIEW"], correct: 0 },
                { id: 191, question: "Which SQL command deletes a materialized view?", options: ["DROP MATERIALIZED VIEW", "REMOVE MVIEW", "DELETE MVIEW", "CLEAR MVIEW"], correct: 0 },
                { id: 192, question: "Which SQL command modifies a materialized view?", options: ["ALTER MATERIALIZED VIEW", "CHANGE MVIEW", "UPDATE MVIEW", "RESET MVIEW"], correct: 0 },
                { id: 193, question: "Which SQL command lists all materialized views?", options: ["SHOW MATERIALIZED VIEWS", "LIST MVIEW", "GET MVIEW", "DISPLAY MVIEW"], correct: 0 },
                { id: 194, question: "Which SQL command is used to create a cluster?", options: ["CREATE CLUSTER", "NEW CLUSTER", "MAKE CLUSTER", "ADD CLUSTER"], correct: 0 },
                { id: 195, question: "Which SQL command deletes a cluster?", options: ["DROP CLUSTER", "REMOVE CLUSTER", "DELETE CLUSTER", "CLEAR CLUSTER"], correct: 0 },
                { id: 196, question: "Which SQL command modifies a cluster?", options: ["ALTER CLUSTER", "UPDATE CLUSTER", "CHANGE CLUSTER", "RESET CLUSTER"], correct: 0 },
                { id: 197, question: "Which SQL command adds a table to cluster?", options: ["ALTER CLUSTER ADD TABLE", "INSERT INTO CLUSTER", "JOIN CLUSTER", "SET CLUSTER"], correct: 0 },
                { id: 198, question: "Which SQL command lists all clusters?", options: ["SHOW CLUSTERS", "LIST CLUSTERS", "GET CLUSTERS", "DISPLAY CLUSTERS"], correct: 0 },
                { id: 199, question: "Which SQL command creates a database link?", options: ["CREATE DATABASE LINK", "NEW DBLINK", "MAKE DBLINK", "ADD DBLINK"], correct: 0 },
                { id: 200, question: "Which SQL command deletes a database link?", options: ["DROP DATABASE LINK", "REMOVE DBLINK", "DELETE DBLINK", "CLEAR DBLINK"], correct: 0 }

            ],
        },
        "Advanced SQL & Data Grouping": {
            color: "#10B981",
            questions: [
                { id: 1, question: "Which clause is used to group rows in SQL?", options: ["ORDER BY", "GROUP BY", "HAVING", "DISTINCT"], correct: 1 },
                { id: 2, question: "Which clause filters groups after aggregation?", options: ["WHERE", "HAVING", "GROUP BY", "DISTINCT"], correct: 1 },
                { id: 3, question: "Which function is often used with GROUP BY?", options: ["COUNT()", "CREATE()", "DELETE()", "INSERT()"], correct: 0 },
                { id: 4, question: "Which SQL statement counts employees per department?", options: ["SELECT dept, COUNT(*) FROM employees GROUP BY dept", "SELECT COUNT(dept) FROM employees", "SELECT dept FROM employees WHERE COUNT(*)", "SELECT dept, SUM(*) FROM employees"], correct: 0 },
                { id: 5, question: "Which clause cannot be used without GROUP BY?", options: ["WHERE", "HAVING", "DISTINCT", "ORDER BY"], correct: 1 },
                { id: 6, question: "What is the difference between WHERE and HAVING?", options: ["WHERE filters groups, HAVING filters rows", "WHERE filters rows, HAVING filters groups", "Both filter groups", "Both filter rows"], correct: 1 },
                { id: 7, question: "Which SQL query finds departments with more than 5 employees?", options: ["SELECT dept FROM employees HAVING COUNT(*) > 5", "SELECT dept FROM employees GROUP BY dept HAVING COUNT(*) > 5", "SELECT dept FROM employees WHERE COUNT(*) > 5", "SELECT dept FROM employees ORDER BY COUNT(*) > 5"], correct: 1 },
                { id: 8, question: "Which aggregate function returns the average salary?", options: ["SUM()", "AVG()", "COUNT()", "MAX()"], correct: 1 },
                { id: 9, question: "Which SQL clause sorts grouped results?", options: ["GROUP BY", "ORDER BY", "HAVING", "DISTINCT"], correct: 1 },
                { id: 10, question: "Which query shows maximum salary per department?", options: ["SELECT dept, MAX(salary) FROM employees GROUP BY dept", "SELECT dept, salary FROM employees WHERE salary=MAX()", "SELECT MAX(salary) GROUP BY dept", "SELECT dept, MAX FROM employees"], correct: 0 },
                { id: 11, question: "Which SQL keyword removes duplicates?", options: ["ORDER BY", "UNIQUE", "DISTINCT", "HAVING"], correct: 2 },
                { id: 12, question: "Which SQL query counts unique departments?", options: ["SELECT COUNT(dept) FROM employees", "SELECT DISTINCT COUNT(dept) FROM employees", "SELECT COUNT(DISTINCT dept) FROM employees", "SELECT COUNT(ALL dept) FROM employees"], correct: 2 },
                { id: 13, question: "Which SQL query calculates average salary by job?", options: ["SELECT job, AVG(salary) FROM employees GROUP BY job", "SELECT job, salary FROM employees AVG()", "SELECT AVG(salary) GROUP BY job", "SELECT job AVG(salary) employees"], correct: 0 },
                { id: 14, question: "Which SQL function finds smallest value?", options: ["MIN()", "SMALL()", "LOW()", "LEAST()"], correct: 0 },
                { id: 15, question: "Which SQL query finds jobs with avg salary > 5000?", options: ["SELECT job FROM employees WHERE AVG(salary) > 5000", "SELECT job FROM employees GROUP BY job HAVING AVG(salary) > 5000", "SELECT job HAVING AVG(salary) > 5000", "SELECT job, AVG(salary) FROM employees WHERE AVG(salary) > 5000"], correct: 1 },
                { id: 16, question: "Which clause combines rows with same values into summary?", options: ["ORDER BY", "GROUP BY", "DISTINCT", "HAVING"], correct: 1 },
                { id: 17, question: "Which SQL query finds highest salary in company?", options: ["SELECT salary FROM employees WHERE salary=MAX()", "SELECT MAX(salary) FROM employees", "SELECT salary FROM employees ORDER BY salary DESC LIMIT 1", "Both B and C"], correct: 3 },
                { id: 18, question: "Which SQL query finds number of managers?", options: ["SELECT COUNT(job) FROM employees WHERE job='Manager'", "SELECT job, COUNT(*) FROM employees GROUP BY job", "SELECT COUNT(*) FROM employees WHERE job='Manager'", "Both A and C"], correct: 3 },
                { id: 19, question: "Which SQL aggregate function returns total salary?", options: ["SUM()", "AVG()", "MAX()", "MIN()"], correct: 0 },
                { id: 20, question: "Which SQL query finds departments with avg salary < 3000?", options: ["SELECT dept FROM employees WHERE AVG(salary)<3000", "SELECT dept FROM employees GROUP BY dept HAVING AVG(salary)<3000", "SELECT dept, AVG(salary)<3000 FROM employees", "SELECT dept HAVING AVG(salary)<3000"], correct: 1 },
                { id: 21, question: "Which SQL keyword is used with GROUP BY to filter aggregated results?", options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"], correct: 1 },
                { id: 22, question: "Which SQL query finds department and total employees?", options: ["SELECT dept, COUNT(*) FROM employees GROUP BY dept", "SELECT dept, SUM(*) FROM employees", "SELECT dept, COUNT(dept) FROM employees GROUP BY dept", "Both A and C"], correct: 3 },
                { id: 23, question: "Which SQL query finds max salary per job?", options: ["SELECT job, MAX(salary) FROM employees GROUP BY job", "SELECT job, salary FROM employees WHERE salary=MAX()", "SELECT MAX(salary) GROUP BY job", "SELECT job, MAX FROM employees"], correct: 0 },
                { id: 24, question: "Which SQL clause groups data with same values?", options: ["GROUP BY", "HAVING", "WHERE", "DISTINCT"], correct: 0 },
                { id: 25, question: "Which SQL query finds min salary per department?", options: ["SELECT dept, MIN(salary) FROM employees GROUP BY dept", "SELECT dept, salary FROM employees WHERE MIN(salary)", "SELECT dept, MIN FROM employees", "SELECT MIN(salary) GROUP BY dept"], correct: 0 },
                { id: 26, question: "Which aggregate function counts non-null values?", options: ["COUNT(*)", "COUNT(column)", "SUM()", "AVG()"], correct: 1 },
                { id: 27, question: "Which SQL query counts total rows in employees table?", options: ["SELECT COUNT(*) FROM employees", "SELECT COUNT(ALL) FROM employees", "SELECT COUNT(rows) FROM employees", "SELECT COUNT(dept) FROM employees"], correct: 0 },
                { id: 28, question: "Which SQL function finds largest value?", options: ["MAX()", "HIGH()", "BIG()", "LARGE()"], correct: 0 },
                { id: 29, question: "Which SQL query finds avg salary in IT department?", options: ["SELECT AVG(salary) FROM employees WHERE dept='IT'", "SELECT dept, AVG(salary) FROM employees GROUP BY dept", "SELECT AVG(salary) FROM employees GROUP BY dept='IT'", "SELECT dept AVG(salary) employees"], correct: 0 },
                { id: 30, question: "Which SQL query counts departments having more than 2 employees?", options: ["SELECT dept FROM employees WHERE COUNT(*)>2", "SELECT dept FROM employees GROUP BY dept HAVING COUNT(*)>2", "SELECT COUNT(*) FROM employees GROUP BY dept WHERE COUNT(*)>2", "SELECT dept HAVING COUNT(*)>2"], correct: 1 },
                { id: 31, question: "Which SQL clause ensures aggregated rows meet condition?", options: ["WHERE", "HAVING", "GROUP BY", "DISTINCT"], correct: 1 },
                { id: 32, question: "Which SQL query counts jobs with more than 10 employees?", options: ["SELECT job FROM employees WHERE COUNT(*)>10", "SELECT job FROM employees GROUP BY job HAVING COUNT(*)>10", "SELECT COUNT(*) FROM employees WHERE job>10", "SELECT job HAVING COUNT(*)>10"], correct: 1 },
                { id: 33, question: "Which SQL query shows sum of salaries per dept?", options: ["SELECT dept, SUM(salary) FROM employees GROUP BY dept", "SELECT SUM(salary) GROUP BY dept", "SELECT dept, salary FROM employees SUM()", "SELECT SUM(salary) FROM employees"], correct: 0 },
                { id: 34, question: "Which SQL function counts all rows including null?", options: ["COUNT(column)", "COUNT(*)", "COUNT(NULL)", "COUNT(ALL)"], correct: 1 },
                { id: 35, question: "Which SQL query finds employees grouped by hire_year?", options: ["SELECT YEAR(hire_date), COUNT(*) FROM employees GROUP BY YEAR(hire_date)", "SELECT hire_date, COUNT(*) FROM employees", "SELECT hire_date GROUP BY YEAR", "SELECT hire_date, YEAR GROUP BY"], correct: 0 },
                { id: 36, question: "Which SQL query shows avg salary for each dept ordered?", options: ["SELECT dept, AVG(salary) FROM employees GROUP BY dept ORDER BY AVG(salary)", "SELECT dept, AVG(salary) FROM employees HAVING dept", "SELECT dept, salary FROM employees ORDER BY dept AVG()", "SELECT AVG(salary) GROUP BY dept"], correct: 0 },
                { id: 37, question: "Which SQL query counts unique job titles?", options: ["SELECT COUNT(DISTINCT job) FROM employees", "SELECT job, COUNT(*) FROM employees", "SELECT DISTINCT COUNT(job) FROM employees", "SELECT job COUNT(*) employees"], correct: 0 },
                { id: 38, question: "Which SQL query finds total salary where dept='Sales'?", options: ["SELECT SUM(salary) FROM employees WHERE dept='Sales'", "SELECT dept, SUM(salary) FROM employees GROUP BY dept='Sales'", "SELECT SUM(salary) GROUP BY dept", "SELECT dept, SUM(salary) employees"], correct: 0 },
                { id: 39, question: "Which SQL function returns average ignoring nulls?", options: ["AVG()", "SUM()", "COUNT()", "MEAN()"], correct: 0 },
                { id: 40, question: "Which SQL query finds number of employees hired after 2020 grouped by dept?", options: ["SELECT dept, COUNT(*) FROM employees WHERE hire_date>'2020-01-01' GROUP BY dept", "SELECT dept, COUNT(*) FROM employees GROUP BY dept HAVING hire_date>'2020-01-01'", "SELECT dept GROUP BY hire_date", "SELECT COUNT(*) GROUP BY hire_date"], correct: 0 },
                { id: 41, question: "Which SQL clause filters before grouping?", options: ["WHERE", "HAVING", "GROUP BY", "DISTINCT"], correct: 0 },
                { id: 42, question: "Which SQL clause filters after grouping?", options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"], correct: 1 },
                { id: 43, question: "Which SQL query finds departments with total salary > 20000?", options: ["SELECT dept FROM employees GROUP BY dept HAVING SUM(salary) > 20000", "SELECT dept WHERE SUM(salary) > 20000", "SELECT dept HAVING salary > 20000", "SELECT dept FROM employees WHERE SUM(salary) > 20000"], correct: 0 },
                { id: 44, question: "Which SQL function finds average salary per job?", options: ["SELECT job, AVG(salary) FROM employees GROUP BY job", "SELECT AVG(salary) GROUP job", "SELECT job AVG(salary)", "SELECT AVG(salary) jobs"], correct: 0 },
                { id: 45, question: "Which SQL query lists jobs with min salary > 5000?", options: ["SELECT job FROM employees GROUP BY job HAVING MIN(salary) > 5000", "SELECT job WHERE MIN(salary) > 5000", "SELECT job HAVING salary > 5000", "SELECT job GROUP BY MIN(salary)"], correct: 0 },
                { id: 46, question: "Which SQL query shows total employees per dept sorted descending?", options: ["SELECT dept, COUNT(*) FROM employees GROUP BY dept ORDER BY COUNT(*) DESC", "SELECT dept, COUNT(*) FROM employees HAVING dept ORDER BY DESC", "SELECT dept ORDER BY COUNT(*)", "SELECT dept, COUNT(*) DESC employees"], correct: 0 },
                { id: 47, question: "Which SQL query shows departments with avg salary > overall avg?", options: ["SELECT dept FROM employees GROUP BY dept HAVING AVG(salary) > (SELECT AVG(salary) FROM employees)", "SELECT dept HAVING AVG(salary) > AVG()", "SELECT dept, AVG(salary) WHERE AVG()", "SELECT dept GROUP HAVING salary"], correct: 0 },
                { id: 48, question: "Which SQL query finds top salary per department?", options: ["SELECT dept, MAX(salary) FROM employees GROUP BY dept", "SELECT dept, salary WHERE MAX()", "SELECT MAX(salary) GROUP dept", "SELECT dept MAX employees"], correct: 0 },
                { id: 49, question: "Which SQL query counts employees per job and dept?", options: ["SELECT dept, job, COUNT(*) FROM employees GROUP BY dept, job", "SELECT job, dept COUNT(*)", "SELECT COUNT(*) job dept employees", "SELECT dept, job HAVING COUNT(*)"], correct: 0 },
                { id: 50, question: "Which SQL function calculates total sales per region?", options: ["SUM()", "AVG()", "MAX()", "MIN()"], correct: 0 },
                { id: 51, question: "Which SQL query groups sales by year?", options: ["SELECT YEAR(sale_date), SUM(amount) FROM sales GROUP BY YEAR(sale_date)", "SELECT sale_date, SUM(amount)", "SELECT SUM(amount) GROUP BY sale_date", "SELECT sale_date, YEAR GROUP"], correct: 0 },
                { id: 52, question: "Which SQL query finds regions with sales > 1M?", options: ["SELECT region FROM sales GROUP BY region HAVING SUM(amount) > 1000000", "SELECT region WHERE SUM(amount) > 1000000", "SELECT SUM(amount) GROUP region", "SELECT region HAVING amount > 1000000"], correct: 0 },
                { id: 53, question: "Which SQL query lists departments where max salary < 3000?", options: ["SELECT dept FROM employees GROUP BY dept HAVING MAX(salary) < 3000", "SELECT dept WHERE MAX(salary) < 3000", "SELECT dept HAVING salary < 3000", "SELECT dept GROUP MAX"], correct: 0 },
                { id: 54, question: "Which SQL function returns total number of groups?", options: ["COUNT(GROUP)", "COUNT(*) with GROUP BY", "GROUP_COUNT()", "SUM(GROUP)"], correct: 1 },
                { id: 55, question: "Which SQL query lists employees grouped by manager?", options: ["SELECT manager_id, COUNT(*) FROM employees GROUP BY manager_id", "SELECT manager_id COUNT employees", "SELECT manager_id GROUP COUNT()", "SELECT manager_id SUM employees"], correct: 0 },
                { id: 56, question: "Which SQL query finds departments with more than 100 employees?", options: ["SELECT dept FROM employees GROUP BY dept HAVING COUNT(*) > 100", "SELECT dept WHERE COUNT(*) > 100", "SELECT dept HAVING employees > 100", "SELECT dept GROUP COUNT"], correct: 0 },
                { id: 57, question: "Which SQL function ignores null values in calculation?", options: ["AVG()", "COUNT(column)", "SUM()", "All of the above"], correct: 3 },
                { id: 58, question: "Which SQL query finds cities with at least 2 branches?", options: ["SELECT city FROM branches GROUP BY city HAVING COUNT(*) >= 2", "SELECT city HAVING COUNT(*) >= 2", "SELECT city WHERE COUNT(*) >= 2", "SELECT city GROUP COUNT"], correct: 0 },
                { id: 59, question: "Which SQL query finds products with total sales < 5000?", options: ["SELECT product FROM sales GROUP BY product HAVING SUM(amount) < 5000", "SELECT product HAVING SUM(amount) < 5000", "SELECT SUM(amount) GROUP product", "SELECT product WHERE SUM(amount) < 5000"], correct: 0 },
                { id: 60, question: "Which SQL query finds departments ordered by avg salary?", options: ["SELECT dept, AVG(salary) FROM employees GROUP BY dept ORDER BY AVG(salary)", "SELECT dept, salary AVG()", "SELECT dept GROUP ORDER BY", "SELECT AVG(salary) dept"], correct: 0 },
                { id: 61, question: "Which SQL query shows job and total salary per job?", options: ["SELECT job, SUM(salary) FROM employees GROUP BY job", "SELECT job, AVG(salary) employees", "SELECT SUM(salary) GROUP job", "SELECT job SUM"], correct: 0 },
                { id: 62, question: "Which SQL query finds year with highest sales?", options: ["SELECT YEAR(sale_date), SUM(amount) FROM sales GROUP BY YEAR(sale_date) ORDER BY SUM(amount) DESC LIMIT 1", "SELECT sale_date, MAX(amount)", "SELECT YEAR(sale_date) HAVING SUM(amount)", "SELECT sale_date GROUP MAX"], correct: 0 },
                { id: 63, question: "Which SQL query finds department with min employees?", options: ["SELECT dept FROM employees GROUP BY dept ORDER BY COUNT(*) ASC LIMIT 1", "SELECT dept HAVING MIN()", "SELECT dept MIN employees", "SELECT dept ORDER employees"], correct: 0 },
                { id: 64, question: "Which SQL function finds difference between max and min values?", options: ["MAX()-MIN()", "RANGE()", "DIFF()", "GAP()"], correct: 0 },
                { id: 65, question: "Which SQL query counts orders per customer?", options: ["SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id", "SELECT customer_id COUNT orders", "SELECT customer_id GROUP COUNT()", "SELECT orders BY customer"], correct: 0 },
                { id: 66, question: "Which SQL query shows avg order amount per customer?", options: ["SELECT customer_id, AVG(amount) FROM orders GROUP BY customer_id", "SELECT customer_id AVG amount", "SELECT AVG(amount) orders", "SELECT orders GROUP"], correct: 0 },
                { id: 67, question: "Which SQL query lists customers with total orders > 10?", options: ["SELECT customer_id FROM orders GROUP BY customer_id HAVING COUNT(*) > 10", "SELECT customer_id WHERE COUNT(*) > 10", "SELECT customer HAVING orders > 10", "SELECT customer_id COUNT"], correct: 0 },
                { id: 68, question: "Which SQL query finds total sales per product per region?", options: ["SELECT product, region, SUM(amount) FROM sales GROUP BY product, region", "SELECT product, SUM(amount)", "SELECT SUM(amount) GROUP product", "SELECT product, region sales"], correct: 0 },
                { id: 69, question: "Which SQL query lists products with avg sales > 200?", options: ["SELECT product FROM sales GROUP BY product HAVING AVG(amount) > 200", "SELECT product HAVING AVG(amount) > 200", "SELECT AVG(amount) GROUP product", "SELECT product WHERE AVG(amount) > 200"], correct: 0 },
                { id: 70, question: "Which SQL query finds branch with highest employees?", options: ["SELECT branch, COUNT(*) FROM employees GROUP BY branch ORDER BY COUNT(*) DESC LIMIT 1", "SELECT branch HAVING MAX()", "SELECT branch GROUP COUNT()", "SELECT branch ORDER employees"], correct: 0 },
                { id: 71, question: "Which SQL query shows total profit per month?", options: ["SELECT MONTH(date), SUM(profit) FROM sales GROUP BY MONTH(date)", "SELECT date, profit SUM()", "SELECT SUM(profit) GROUP date", "SELECT profit MONTH"], correct: 0 },
                { id: 72, question: "Which SQL query finds month with least sales?", options: ["SELECT MONTH(date), SUM(amount) FROM sales GROUP BY MONTH(date) ORDER BY SUM(amount) ASC LIMIT 1", "SELECT date, MIN(amount)", "SELECT month HAVING MIN()", "SELECT sales GROUP month"], correct: 0 },
                { id: 73, question: "Which SQL query finds employees hired per year?", options: ["SELECT YEAR(hire_date), COUNT(*) FROM employees GROUP BY YEAR(hire_date)", "SELECT hire_date COUNT employees", "SELECT hire_date GROUP COUNT()", "SELECT hire_date YEAR employees"], correct: 0 },
                { id: 74, question: "Which SQL query lists jobs where total salary > 20000?", options: ["SELECT job FROM employees GROUP BY job HAVING SUM(salary) > 20000", "SELECT job HAVING SUM(salary) > 20000", "SELECT job WHERE SUM(salary) > 20000", "SELECT job SUM salary"], correct: 0 },
                { id: 75, question: "Which SQL query finds avg marks per subject?", options: ["SELECT subject, AVG(marks) FROM results GROUP BY subject", "SELECT subject, marks AVG()", "SELECT AVG(marks) GROUP subject", "SELECT subject AVG"], correct: 0 },
                { id: 76, question: "Which SQL query finds subjects with max marks > 90?", options: ["SELECT subject FROM results GROUP BY subject HAVING MAX(marks) > 90", "SELECT subject WHERE MAX(marks) > 90", "SELECT subject HAVING marks > 90", "SELECT subject MAX"], correct: 0 },
                { id: 77, question: "Which SQL query lists subjects with less than 5 students?", options: ["SELECT subject FROM results GROUP BY subject HAVING COUNT(*) < 5", "SELECT subject HAVING COUNT(*) < 5", "SELECT subject WHERE COUNT(*) < 5", "SELECT subject COUNT"], correct: 0 },
                { id: 78, question: "Which SQL query counts students per class?", options: ["SELECT class, COUNT(*) FROM students GROUP BY class", "SELECT class COUNT students", "SELECT class GROUP COUNT()", "SELECT COUNT(class)"], correct: 0 },
                { id: 79, question: "Which SQL query finds classes with avg marks > 60?", options: ["SELECT class FROM results GROUP BY class HAVING AVG(marks) > 60", "SELECT class HAVING marks > 60", "SELECT class WHERE AVG(marks) > 60", "SELECT class AVG"], correct: 0 },
                { id: 80, question: "Which SQL query finds department with highest avg salary?", options: ["SELECT dept, AVG(salary) FROM employees GROUP BY dept ORDER BY AVG(salary) DESC LIMIT 1", "SELECT dept HAVING MAX()", "SELECT dept AVG employees", "SELECT dept GROUP salary"], correct: 0 },
                { id: 81, question: "Which SQL query counts orders per region?", options: ["SELECT region, COUNT(*) FROM orders GROUP BY region", "SELECT region COUNT orders", "SELECT region GROUP COUNT()", "SELECT orders region"], correct: 0 },
                { id: 82, question: "Which SQL query finds regions with total orders > 1000?", options: ["SELECT region FROM orders GROUP BY region HAVING COUNT(*) > 1000", "SELECT region HAVING COUNT(*) > 1000", "SELECT region WHERE COUNT(*) > 1000", "SELECT orders GROUP region"], correct: 0 },
                { id: 83, question: "Which SQL query calculates average age per department?", options: ["SELECT dept, AVG(age) FROM employees GROUP BY dept", "SELECT AVG(age) dept employees", "SELECT dept AVG()", "SELECT AVG(dept)"], correct: 0 },
                { id: 84, question: "Which SQL query lists departments with total salary between 10000 and 50000?", options: ["SELECT dept FROM employees GROUP BY dept HAVING SUM(salary) BETWEEN 10000 AND 50000", "SELECT dept WHERE salary BETWEEN 10000 AND 50000", "SELECT dept HAVING salary BETWEEN 10000 AND 50000", "SELECT dept SUM BETWEEN"], correct: 0 },
                { id: 85, question: "Which SQL query finds max salary per branch?", options: ["SELECT branch, MAX(salary) FROM employees GROUP BY branch", "SELECT branch MAX employees", "SELECT branch HAVING MAX()", "SELECT salary GROUP branch"], correct: 0 },
                { id: 86, question: "Which SQL query lists years with more than 200 hires?", options: ["SELECT YEAR(hire_date) FROM employees GROUP BY YEAR(hire_date) HAVING COUNT(*) > 200", "SELECT hire_date HAVING COUNT(*) > 200", "SELECT YEAR WHERE COUNT()>200", "SELECT hires GROUP"], correct: 0 },
                { id: 87, question: "Which SQL query finds avg marks per student?", options: ["SELECT student, AVG(marks) FROM results GROUP BY student", "SELECT student AVG marks", "SELECT AVG(marks) results", "SELECT student GROUP"], correct: 0 },
                { id: 88, question: "Which SQL query lists students with total marks > 400?", options: ["SELECT student FROM results GROUP BY student HAVING SUM(marks) > 400", "SELECT student WHERE SUM(marks) > 400", "SELECT student HAVING marks > 400", "SELECT student SUM"], correct: 0 },
                { id: 89, question: "Which SQL query finds teachers with less than 10 students?", options: ["SELECT teacher FROM classes GROUP BY teacher HAVING COUNT(student) < 10", "SELECT teacher HAVING COUNT(student) < 10", "SELECT teacher WHERE COUNT(student) < 10", "SELECT teacher COUNT"], correct: 0 },
                { id: 90, question: "Which SQL query shows max marks per class?", options: ["SELECT class, MAX(marks) FROM results GROUP BY class", "SELECT class HAVING MAX(marks)", "SELECT class GROUP MAX", "SELECT class marks MAX"], correct: 0 },
                { id: 91, question: "Which SQL query finds total revenue per month?", options: ["SELECT MONTH(date), SUM(amount) FROM sales GROUP BY MONTH(date)", "SELECT date SUM amount", "SELECT SUM(amount) GROUP month", "SELECT month revenue"], correct: 0 },
                { id: 92, question: "Which SQL query lists months with revenue > 50000?", options: ["SELECT MONTH(date) FROM sales GROUP BY MONTH(date) HAVING SUM(amount) > 50000", "SELECT month HAVING SUM(amount) > 50000", "SELECT SUM(amount) WHERE month > 50000", "SELECT revenue month"], correct: 0 },
                { id: 93, question: "Which SQL query counts orders per product?", options: ["SELECT product, COUNT(*) FROM orders GROUP BY product", "SELECT product COUNT orders", "SELECT product GROUP COUNT()", "SELECT product order"], correct: 0 },
                { id: 94, question: "Which SQL query lists products with orders < 50?", options: ["SELECT product FROM orders GROUP BY product HAVING COUNT(*) < 50", "SELECT product HAVING COUNT(*) < 50", "SELECT product WHERE COUNT(*) < 50", "SELECT product COUNT"], correct: 0 },
                { id: 95, question: "Which SQL query calculates average order value per customer?", options: ["SELECT customer, AVG(amount) FROM orders GROUP BY customer", "SELECT AVG(amount) orders", "SELECT customer AVG()", "SELECT orders GROUP"], correct: 0 },
                { id: 96, question: "Which SQL query lists customers with avg order value > 1000?", options: ["SELECT customer FROM orders GROUP BY customer HAVING AVG(amount) > 1000", "SELECT customer HAVING AVG(amount) > 1000", "SELECT customer WHERE AVG(amount) > 1000", "SELECT customer AVG"], correct: 0 },
                { id: 97, question: "Which SQL query finds suppliers with total supply > 500 units?", options: ["SELECT supplier FROM supplies GROUP BY supplier HAVING SUM(units) > 500", "SELECT supplier HAVING SUM(units) > 500", "SELECT supplier WHERE SUM(units) > 500", "SELECT supplier SUM"], correct: 0 },
                { id: 98, question: "Which SQL query counts employees per branch?", options: ["SELECT branch, COUNT(*) FROM employees GROUP BY branch", "SELECT branch COUNT employees", "SELECT branch GROUP COUNT()", "SELECT employees branch"], correct: 0 },
                { id: 99, question: "Which SQL query lists branches with more than 20 employees?", options: ["SELECT branch FROM employees GROUP BY branch HAVING COUNT(*) > 20", "SELECT branch HAVING COUNT(*) > 20", "SELECT branch WHERE COUNT(*) > 20", "SELECT branch COUNT"], correct: 0 },
                { id: 100, question: "Which SQL query shows avg salary per branch ordered descending?", options: ["SELECT branch, AVG(salary) FROM employees GROUP BY branch ORDER BY AVG(salary) DESC", "SELECT branch AVG employees", "SELECT AVG(salary) ORDER branch", "SELECT branch GROUP salary"], correct: 0 }

            ],
        },
        "Database Design & Architecture": {
            color: "#31572c",
            questions: [
                {
                    "id": 1,
                    "question": "Which of the following is NOT a phase in the database design process?",
                    "options": ["Requirements Analysis", "Logical Design", "Physical Design", "Data Mining"],
                    "correct": 4
                },
                {
                    "id": 2,
                    "question": "In a relational database, what is a 'tuple'?",
                    "options": ["A table", "A column", "A record or row", "A field"],
                    "correct": 3
                },
                {
                    "id": 3,
                    "question": "What is the primary purpose of database normalization?",
                    "options": ["To improve data security", "To increase data redundancy for faster queries", "To reduce data redundancy and improve data integrity", "To convert a relational database to a NoSQL database"],
                    "correct": 3
                },
                {
                    "id": 4,
                    "question": "What does a 'functional dependency' mean?",
                    "options": ["A relationship between two tables", "A relationship where one attribute's value uniquely determines another's", "A relationship where one attribute is a foreign key", "A relationship where multiple attributes have the same value"],
                    "correct": 2
                },
                {
                    "id": 5,
                    "question": "The key difference between a 'candidate key' and a 'primary key' is that:",
                    "options": ["A candidate key can contain null values", "A primary key is chosen from the set of candidate keys", "A candidate key is used to link tables", "A primary key is only used in NoSQL databases"],
                    "correct": 2
                },
                {
                    "id": 6,
                    "question": "Which of the following is an example of an 'update anomaly'?",
                    "options": ["You cannot add a new record until a related record is available", "You delete a record and unintentionally lose other data", "A single piece of data must be updated in multiple places", "A query takes too long to execute"],
                    "correct": 3
                },
                {
                    "id": 7,
                    "question": "Which normal form requires that all non-key attributes are fully functionally dependent on the primary key?",
                    "options": ["1NF", "2NF", "3NF", "BCNF"],
                    "correct": 2
                },
                {
                    "id": 8,
                    "question": "What is a 'transitive dependency'?",
                    "options": ["A dependency on a part of a composite key", "A dependency on a foreign key", "A non-key attribute depends on another non-key attribute", "A dependency on the entire primary key"],
                    "correct": 3
                },
                {
                    "id": 9,
                    "question": "Which of the following describes the 'relational model'?",
                    "options": ["Data is organized in a tree-like structure", "Data is stored in a collection of documents", "Data is organized into tables with rows and columns", "Data is organized as a graph of nodes and edges"],
                    "correct": 3
                },
                {
                    "id": 10,
                    "question": "In an ER diagram, which shape typically represents a 'relationship'?",
                    "options": ["Rectangle", "Oval", "Diamond", "Square"],
                    "correct": 3
                },
                {
                    "id": 11,
                    "question": "The process of moving from 2NF to 3NF involves eliminating:",
                    "options": ["Partial dependencies", "Transitive dependencies", "Multivalued dependencies", "Join dependencies"],
                    "correct": 2
                },
                {
                    "id": 12,
                    "question": "What is the main goal of 'referential integrity'?",
                    "options": ["To ensure a primary key does not contain null values", "To ensure a foreign key value refers to an existing primary key value", "To ensure a column contains only single-valued data", "To ensure all data is unique"],
                    "correct": 2
                },
                {
                    "id": 13,
                    "question": "What is a 'weak entity'?",
                    "options": ["An entity with no attributes", "An entity that cannot be uniquely identified without a related strong entity", "An entity that has no foreign keys", "An entity with a composite primary key"],
                    "correct": 2
                },
                {
                    "id": 14,
                    "question": "Which of the following describes 'cardinality' in a relational database?",
                    "options": ["The number of columns in a table", "The number of rows in a table", "The number of indexes in a table", "The number of foreign keys in a table"],
                    "correct": 2
                },
                {
                    "id": 15,
                    "question": "A table is in First Normal Form (1NF) if it contains:",
                    "options": ["No transitive dependencies", "No repeating groups or multivalued attributes", "No partial dependencies", "No primary key"],
                    "correct": 2
                },
                {
                    "id": 16,
                    "question": "What is the purpose of an 'index' in a database?",
                    "options": ["To ensure data integrity", "To speed up data retrieval", "To prevent unauthorized access", "To create relationships between tables"],
                    "correct": 2
                },
                {
                    "id": 17,
                    "question": "Which of the following is a disadvantage of a centralized database system?",
                    "options": ["Higher data consistency", "Easier to manage", "Single point of failure", "Lower initial cost"],
                    "correct": 3
                },
                {
                    "id": 18,
                    "question": "What is a 'superkey'?",
                    "options": ["A key that uniquely identifies a record", "A key that links two tables", "A key that can have null values", "A key that is a foreign key"],
                    "correct": 1
                },
                {
                    "id": 19,
                    "question": "What is the key difference between 3NF and BCNF?",
                    "options": ["3NF allows transitive dependencies", "BCNF is a stricter version of 3NF", "3NF requires all attributes to be atomic", "BCNF is a less strict form than 3NF"],
                    "correct": 2
                },
                {
                    "id": 20,
                    "question": "A 'data dictionary' is used to store:",
                    "options": ["The actual user data", "Executable queries", "Metadata about the database structure", "Application code"],
                    "correct": 3
                },
                {
                    "id": 21,
                    "question": "Which of the following is an example of 'logical data independence'?",
                    "options": ["Changing the storage media without affecting the application", "Adding a new column to a table without affecting existing applications", "Improving query speed with an index", "Changing the network protocol of the database"],
                    "correct": 2
                },
                {
                    "id": 22,
                    "question": "What is the purpose of a 'view'?",
                    "options": ["To physically store a copy of a table", "To provide a customized and simplified virtual table for users", "To encrypt data in a table", "To create a foreign key"],
                    "correct": 2
                },
                {
                    "id": 23,
                    "question": "What is a 'many-to-many' relationship?",
                    "options": ["A relationship where one entity is associated with exactly one other entity", "A relationship where one entity is associated with many entities, and vice-versa", "A relationship where a table links to itself", "A relationship where multiple tables are joined"],
                    "correct": 2
                },
                {
                    "id": 24,
                    "question": "Which of the following is a component of 'Data Definition Language' (DDL)?",
                    "options": ["SELECT", "UPDATE", "INSERT", "CREATE"],
                    "correct": 4
                },
                {
                    "id": 25,
                    "question": "What is a 'distributed database'?",
                    "options": ["A database stored on a single server", "A database system where data is stored across multiple locations", "A non-relational database", "A database used for data warehousing"],
                    "correct": 2
                },
                {
                    "id": 26,
                    "question": "The 'internal schema' in the three-schema architecture is concerned with:",
                    "options": ["The user's view of the data", "The logical structure of the database", "The physical storage structure of the database", "The security of the database"],
                    "correct": 3
                },
                {
                    "id": 27,
                    "question": "What is 'data fragmentation' in a distributed database?",
                    "options": ["Storing copies of data at multiple sites", "Storing different parts of a relation at different sites", "Transferring data between sites", "Combining data from multiple sites"],
                    "correct": 2
                },
                {
                    "id": 28,
                    "question": "Which of the following is a characteristic of the 'client-server' architecture?",
                    "options": ["All processing is done on a single machine", "The client handles all data storage", "The server provides a service to multiple clients", "It is only used for small databases"],
                    "correct": 3
                },
                {
                    "id": 29,
                    "question": "What is the purpose of a 'composite key'?",
                    "options": ["To link two tables", "To uniquely identify a record using a single attribute", "To uniquely identify a record using a combination of two or more attributes", "To store multiple values in a single column"],
                    "correct": 3
                },
                {
                    "id": 30,
                    "question": "The 'conceptual design' phase is independent of:",
                    "options": ["User requirements", "The specific DBMS to be used", "The number of entities and relationships", "The attributes of entities"],
                    "correct": 2
                },
                {
                    "id": 31,
                    "question": "What is a 'derived attribute'?",
                    "options": ["An attribute that can be used as a primary key", "An attribute whose value is calculated from other attributes", "An attribute that is a foreign key", "An attribute with multiple values"],
                    "correct": 2
                },
                {
                    "id": 32,
                    "question": "Which type of dependency is eliminated when moving to 2NF?",
                    "options": ["Partial dependency", "Transitive dependency", "Multivalued dependency", "Join dependency"],
                    "correct": 1
                },
                {
                    "id": 33,
                    "question": "What does a 'one-to-many' relationship mean?",
                    "options": ["One record in a table can be associated with many records in another table", "One record in a table can be associated with one record in another table", "Many records in a table can be associated with many records in another table", "A record in a table is linked to itself"],
                    "correct": 1
                },
                {
                    "id": 34,
                    "question": "What is the primary key for a table that has been normalized to BCNF?",
                    "options": ["A non-prime attribute", "A foreign key", "A candidate key", "Any attribute in the table"],
                    "correct": 3
                },
                {
                    "id": 35,
                    "question": "Which of the following is a characteristic of a 'hierarchical' data model?",
                    "options": ["Data is organized in a tree-like structure", "Data is stored in independent tables", "Data is stored as a collection of documents", "Data is organized as a graph of nodes"],
                    "correct": 1
                },
                {
                    "id": 36,
                    "question": "What is the purpose of a 'Data Manipulation Language' (DML)?",
                    "options": ["To define the database structure", "To control access to the database", "To manage and query the data within the database", "To create views and indexes"],
                    "correct": 3
                },
                {
                    "id": 37,
                    "question": "Which of the following is a key advantage of a 'distributed database'?",
                    "options": ["Simplified management", "Lower initial cost", "Increased availability and improved performance for local queries", "Elimination of all data redundancy"],
                    "correct": 3
                },
                {
                    "id": 38,
                    "question": "What is a 'denormalized' database?",
                    "options": ["A database that has not been normalized", "A database where tables are combined to improve read performance", "A database with no primary keys", "A database that is in 3NF or higher"],
                    "correct": 2
                },
                {
                    "id": 39,
                    "question": "The three-schema architecture provides what key benefit?",
                    "options": ["Faster data retrieval", "Data independence", "Simplified application code", "Elimination of all anomalies"],
                    "correct": 2
                },
                {
                    "id": 40,
                    "question": "What is the purpose of the 'Physical Design' phase?",
                    "options": ["To gather user requirements", "To model entities and relationships", "To map the logical schema to a specific DBMS and define storage details", "To develop the application interface"],
                    "correct": 3
                },
                {
                    "id": 41,
                    "question": "Which of the following is a valid primary key constraint?",
                    "options": ["It can contain null values", "It can have duplicate values", "It uniquely identifies each record and cannot be null", "It is only used to link tables"],
                    "correct": 3
                },
                {
                    "id": 42,
                    "question": "What is a 'multivalued attribute'?",
                    "options": ["An attribute whose value is derived from another attribute", "An attribute with a single value", "An attribute that has a set of values for a single entity", "An attribute that is part of a composite key"],
                    "correct": 3
                },
                {
                    "id": 43,
                    "question": "A table in 3NF is also always in what other normal forms?",
                    "options": ["Only 1NF", "Only 2NF", "1NF and 2NF", "BCNF"],
                    "correct": 3
                },
                {
                    "id": 44,
                    "question": "What is a 'recursive relationship'?",
                    "options": ["A relationship between two different tables", "A relationship where a table is linked to itself", "A relationship with no foreign key", "A relationship with a many-to-many cardinality"],
                    "correct": 2
                },
                {
                    "id": 45,
                    "question": "What is the process of breaking down a large table into smaller, related tables called?",
                    "options": ["Denormalization", "Decomposition", "Aggregation", "Join"],
                    "correct": 2
                },
                {
                    "id": 46,
                    "question": "Which of the following is a key component of 'Data Control Language' (DCL)?",
                    "options": ["SELECT", "CREATE", "GRANT", "INSERT"],
                    "correct": 3
                },
                {
                    "id": 47,
                    "question": "What is a 'metadata'?",
                    "options": ["The raw data stored in the database", "Data about data", "Data used for encryption", "Data used for reporting"],
                    "correct": 2
                },
                {
                    "id": 48,
                    "question": "What is the role of a 'Database Management System' (DBMS)?",
                    "options": ["To physically store all data files", "To provide an interface for users to interact with and manage the database", "To create user interfaces for applications", "To perform statistical analysis on data"],
                    "correct": 2
                },
                {
                    "id": 49,
                    "question": "In a distributed database, 'data replication' refers to:",
                    "options": ["Storing different parts of a table at different locations", "Creating multiple copies of the data at different sites", "Transferring data from one database to another", "Combining data from multiple sources"],
                    "correct": 2
                },
                {
                    "id": 50,
                    "question": "What is the primary purpose of a 'data model'?",
                    "options": ["To physically store data files", "To provide a set of concepts for describing the structure of a database", "To generate reports and graphs", "To execute queries in a database"],
                    "correct": 2
                },
                {
                    "id": 51,
                    "question": "Which of the following describes the 'Atomicity' property in ACID transactions?",
                    "options": ["Once a transaction is committed, it remains so, even in the event of a system failure.", "Data is always in a valid state after a transaction.", "Each transaction is executed in isolation from other transactions.", "A transaction is treated as a single, indivisible unit of work."],
                    "correct": 4
                },
                {
                    "id": 52,
                    "question": "What type of dependency does Fourth Normal Form (4NF) primarily address?",
                    "options": ["Transitive dependencies", "Partial dependencies", "Join dependencies", "Multivalued dependencies"],
                    "correct": 4
                },
                {
                    "id": 53,
                    "question": "In a distributed database, what is 'data fragmentation'?",
                    "options": ["Storing copies of data at multiple sites", "Breaking a relation into logical partitions and storing them at different sites", "Transferring data between sites", "Combining data from multiple sources"],
                    "correct": 2
                },
                {
                    "id": 54,
                    "question": "Which of the following is NOT a type of database architecture?",
                    "options": ["Client-server", "Centralized", "Distributed", "Un-normalized"],
                    "correct": 4
                },
                {
                    "id": 55,
                    "question": "The 'star schema' is a common model used in which type of database?",
                    "options": ["Online Transaction Processing (OLTP)", "Online Analytical Processing (OLAP)", "Hierarchical", "NoSQL"],
                    "correct": 2
                },
                {
                    "id": 56,
                    "question": "What is the primary purpose of 'concurrency control' in a DBMS?",
                    "options": ["To prevent unauthorized access to data", "To ensure that multiple transactions can execute without interfering with each other", "To define the structure of the database", "To speed up query execution"],
                    "correct": 2
                },
                {
                    "id": 57,
                    "question": "Which of the following is an example of an 'access control' security measure?",
                    "options": ["Encrypting data", "Using a firewall", "Granting a user 'SELECT' privileges on a table", "Backing up a database"],
                    "correct": 3
                },
                {
                    "id": 58,
                    "question": "In relational algebra, which operator removes duplicate rows from the result set?",
                    "options": ["PROJECT", "SELECT", "UNION", "DIFFERENCE"],
                    "correct": 1
                },
                {
                    "id": 59,
                    "question": "What does a 'total participation' constraint in an ER diagram signify?",
                    "options": ["Every entity in the entity set must participate in the relationship", "An entity can participate in at most one relationship instance", "An entity can participate in multiple relationship instances", "Participation is optional for all entities"],
                    "correct": 1
                },
                {
                    "id": 60,
                    "question": "The 'Durability' property of ACID ensures that:",
                    "options": ["All transactions are isolated from each other", "A transaction is an all-or-nothing operation", "Once a transaction is committed, it is permanent", "Data in the database is consistent"],
                    "correct": 3
                },
                {
                    "id": 61,
                    "question": "What is the main purpose of a 'clustered index'?",
                    "options": ["To create multiple copies of a table", "To physically store the data rows in the same order as the index", "To store index entries separately from the data", "To provide a backup of the data"],
                    "correct": 2
                },
                {
                    "id": 62,
                    "question": "Which of the following is a drawback of the 'shared-nothing' parallel database architecture?",
                    "options": ["High contention for shared memory", "Lower scalability", "Higher inter-node communication cost for some operations", "Single point of failure"],
                    "correct": 3
                },
                {
                    "id": 63,
                    "question": "What does the 'P' in the CAP theorem stand for?",
                    "options": ["Persistence", "Partition Tolerance", "Parallelism", "Performance"],
                    "correct": 2
                },
                {
                    "id": 64,
                    "question": "Which type of NoSQL database organizes data in key-value pairs?",
                    "options": ["Document store", "Columnar store", "Key-Value store", "Graph database"],
                    "correct": 3
                },
                {
                    "id": 65,
                    "question": "In the context of database security, 'authentication' is the process of:",
                    "options": ["Restricting a user's access to data", "Verifying the identity of a user", "Encrypting data for storage", "Ensuring data integrity"],
                    "correct": 2
                },
                {
                    "id": 66,
                    "question": "A 'snowflake schema' is a variation of a star schema where:",
                    "options": ["The fact table has no foreign keys", "Dimension tables are further normalized into sub-dimensions", "All tables are denormalized", "There are multiple fact tables"],
                    "correct": 2
                },
                {
                    "id": 67,
                    "question": "Which of the following is a concurrency control technique?",
                    "options": ["Normalization", "Indexing", "Locking", "Aggregation"],
                    "correct": 3
                },
                {
                    "id": 68,
                    "question": "What is the main characteristic of a 'heterogeneous distributed database'?",
                    "options": ["All sites use the same DBMS", "All sites use different DBMSs", "All sites are located in the same geographic region", "All sites use the same hardware"],
                    "correct": 2
                },
                {
                    "id": 69,
                    "question": "In database design, 'aggregation' in ER modeling is used to:",
                    "options": ["Combine attributes into a single entity", "Treat a relationship as a higher-level entity", "Break down a complex entity into simpler ones", "Summarize data for reporting"],
                    "correct": 2
                },
                {
                    "id": 70,
                    "question": "The 'Consistency' property in ACID ensures that:",
                    "options": ["The database remains in a valid state after a transaction", "Transactions are executed in isolation", "Once committed, a transaction is permanent", "A transaction is an all-or-nothing operation"],
                    "correct": 1
                },
                {
                    "id": 71,
                    "question": "What is 'serializability' in transaction management?",
                    "options": ["The ability to run a single transaction sequentially", "A property of a schedule that produces the same result as a serial schedule", "The process of committing a transaction", "A method for encrypting data"],
                    "correct": 2
                },
                {
                    "id": 72,
                    "question": "Which of the following is a common issue that 'optimistic concurrency control' aims to prevent?",
                    "options": ["Lost updates", "Single point of failure", "Data inconsistency", "Slow performance"],
                    "correct": 1
                },
                {
                    "id": 73,
                    "question": "In relational algebra, which operator is equivalent to the SQL 'WHERE' clause?",
                    "options": ["PROJECT", "SELECT", "UNION", "JOIN"],
                    "correct": 2
                },
                {
                    "id": 74,
                    "question": "Which type of index is most suitable for searching on ranges of values?",
                    "options": ["Hash index", "B-tree index", "Bitmap index", "Clustered index"],
                    "correct": 2
                },
                {
                    "id": 75,
                    "question": "What is a 'transaction log' used for?",
                    "options": ["To store a record of all database modifications", "To define the structure of the database", "To store user credentials", "To create backups of the database"],
                    "correct": 1
                },
                {
                    "id": 76,
                    "question": "Which of the following describes 'specialization' in an ER model?",
                    "options": ["Creating a higher-level entity from lower-level entities", "Creating a set of lower-level entities from a higher-level entity", "Treating a relationship as an entity", "Combining two or more entities into one"],
                    "correct": 2
                },
                {
                    "id": 77,
                    "question": "The 'ACID' properties were originally defined for which type of database?",
                    "options": ["NoSQL databases", "Data warehouses", "Relational databases", "Hierarchical databases"],
                    "correct": 3
                },
                {
                    "id": 78,
                    "question": "What is the main goal of a 'data warehouse'?",
                    "options": ["To support day-to-day business operations", "To provide a centralized repository for reporting and analysis", "To manage unstructured data", "To handle high-volume, real-time transactions"],
                    "correct": 2
                },
                {
                    "id": 79,
                    "question": "Which of the following is a feature of 'distributed database transparency'?",
                    "options": ["Location transparency", "Physical data independence", "Logical data independence", "Concurrency control"],
                    "correct": 1
                },
                {
                    "id": 80,
                    "question": "The 'Isolation' property in ACID ensures that:",
                    "options": ["All data is encrypted for security", "The database remains in a valid state", "Concurrent transactions produce a result as if they were executed sequentially", "A transaction is an all-or-nothing operation"],
                    "correct": 3
                },
                {
                    "id": 81,
                    "question": "Which of the following describes 'vertical fragmentation'?",
                    "options": ["Splitting a relation into subsets of rows", "Splitting a relation into subsets of attributes", "Distributing data across different sites", "Creating redundant copies of data"],
                    "correct": 2
                },
                {
                    "id": 82,
                    "question": "What is the primary key for a table that has been normalized to DKNF?",
                    "options": ["A non-prime attribute", "A foreign key", "A candidate key", "Any attribute in the table"],
                    "correct": 3
                },
                {
                    "id": 83,
                    "question": "Which of the following is a challenge of a 'heterogeneous distributed database'?",
                    "options": ["All sites use the same DBMS", "High cost of data integration", "Lower scalability", "Single point of failure"],
                    "correct": 2
                },
                {
                    "id": 84,
                    "question": "In a client-server architecture, where does the 'business logic' reside in a two-tier system?",
                    "options": ["On the client side", "On the server side", "On a separate third tier", "On both the client and server sides"],
                    "correct": 2
                },
                {
                    "id": 85,
                    "question": "The 'Data Manipulation Language' (DML) is used to:",
                    "options": ["Create database objects", "Define security permissions", "Query and modify data", "Manage transaction logs"],
                    "correct": 3
                },
                {
                    "id": 86,
                    "question": "Which of the following is a key feature of 'shared-memory' parallel database architecture?",
                    "options": ["All nodes have their own disks and memory", "All nodes share a common pool of memory", "High scalability", "Low inter-node communication overhead"],
                    "correct": 2
                },
                {
                    "id": 87,
                    "question": "What is the difference between a 'fact table' and a 'dimension table' in a data warehouse?",
                    "options": ["Fact tables store dimension data, while dimension tables store transaction data.", "Fact tables store business metrics, while dimension tables store descriptive attributes.", "Fact tables are denormalized, while dimension tables are normalized.", "Fact tables are used in OLTP, while dimension tables are used in OLAP."],
                    "correct": 2
                },
                {
                    "id": 88,
                    "question": "The 'NoSQL' movement emerged to address the limitations of relational databases in which area?",
                    "options": ["Handling complex schemas", "Scalability for unstructured data", "Enforcing data integrity", "Maintaining ACID properties"],
                    "correct": 2
                },
                {
                    "id": 89,
                    "question": "What is a 'deadlock' in concurrency control?",
                    "options": ["A situation where a transaction cannot be committed", "A state where two or more transactions are waiting for each other to release locks", "A loss of data due to a system crash", "A failure to achieve serializability"],
                    "correct": 2
                },
                {
                    "id": 90,
                    "question": "Which of the following best describes the 'CAP theorem'?",
                    "options": ["A database can only have two of the three properties: Consistency, Availability, and Partition tolerance.", "A database must have all three properties: Consistency, Atomicity, and Durability.", "A database can only have either high Consistency or high Availability.", "A database must be both Consistent and Partition tolerant."],
                    "correct": 1
                },
                {
                    "id": 91,
                    "question": "In the context of database security, 'authorization' is the process of:",
                    "options": ["Verifying a user's identity", "Determining what a user is allowed to do", "Encrypting all data in the database", "Auditing user activity"],
                    "correct": 2
                },
                {
                    "id": 92,
                    "question": "A 'B-tree' index is particularly effective for:",
                    "options": ["Exact match searches on small tables", "Searching on ranges of values", "Unstructured data searches", "Full-text searches"],
                    "correct": 2
                },
                {
                    "id": 93,
                    "question": "What is the main goal of a 'two-phase commit protocol'?",
                    "options": ["To ensure atomicity in distributed transactions", "To prevent deadlocks in concurrent transactions", "To speed up data retrieval", "To enforce referential integrity"],
                    "correct": 1
                },
                {
                    "id": 94,
                    "question": "Which of the following is a key feature of a 'Document store' NoSQL database?",
                    "options": ["Data is stored in key-value pairs", "Data is stored in flexible, semi-structured documents", "Data is stored in columns rather than rows", "Data is stored as nodes and edges"],
                    "correct": 2
                },
                {
                    "id": 95,
                    "question": "What is 'physical data independence'?",
                    "options": ["The ability to change the conceptual schema without affecting the external schemas", "The ability to change the logical schema without affecting the physical schema", "The ability to change the physical schema without affecting the logical schema", "The ability to change the external schemas without affecting the conceptual schema"],
                    "correct": 3
                },
                {
                    "id": 96,
                    "question": "In a database, what is 'temporal data'?",
                    "options": ["Data that is organized geographically", "Data that is related to time", "Data that is unstructured", "Data that is stored in a data warehouse"],
                    "correct": 2
                },
                {
                    "id": 97,
                    "question": "Which of the following is an example of an 'operational database'?",
                    "options": ["A data warehouse for business intelligence", "A database for a banking application to handle daily transactions", "A database for storing historical sales data", "A database for a data mining project"],
                    "correct": 2
                },
                {
                    "id": 98,
                    "question": "What is the purpose of 'Normalization' in a NoSQL database?",
                    "options": ["It is a core principle of NoSQL to reduce redundancy", "Normalization is not a primary concern in most NoSQL databases", "It is required for all NoSQL databases to ensure integrity", "It is a process used to convert a NoSQL database to a relational database"],
                    "correct": 2
                },
                {
                    "id": 99,
                    "question": "What is the difference between an 'OLAP' and an 'OLTP' system?",
                    "options": ["OLAP is used for daily transactions, while OLTP is used for business analysis.", "OLAP is used for business analysis and reporting, while OLTP is used for daily transactions.", "OLAP uses a star schema, while OLTP uses a hierarchical schema.", "OLAP is a type of NoSQL database, while OLTP is a relational database."],
                    "correct": 2
                },
                {
                    "id": 100,
                    "question": "Which of the following is a characteristic of 'shared-disk' parallel database architecture?",
                    "options": ["Each node has its own private disk storage", "All nodes share a common pool of disk storage but have private memory", "All nodes share a common pool of memory and disk", "There is no inter-node communication"],
                    "correct": 2
                },
                {
                    "id": 101,
                    "question": "What is 'serialization' in the context of concurrency?",
                    "options": ["The ability to convert data into a stream of bytes", "A process that ensures concurrent transactions execute in a serial order", "The process of creating a serial port for a database", "A method for encrypting data"],
                    "correct": 2
                },
                {
                    "id": 102,
                    "question": "The 'GRANT' and 'REVOKE' commands are part of which SQL component?",
                    "options": ["Data Definition Language (DDL)", "Data Manipulation Language (DML)", "Data Control Language (DCL)", "Transaction Control Language (TCL)"],
                    "correct": 3
                },
                {
                    "id": 103,
                    "question": "What is the main goal of a 'Columnar' NoSQL database?",
                    "options": ["To store data in flexible, semi-structured documents", "To store data in key-value pairs", "To optimize for queries on specific columns across many rows", "To model data as a graph of nodes and edges"],
                    "correct": 3
                },
                {
                    "id": 104,
                    "question": "What does a 'primary index' refer to?",
                    "options": ["An index that is a foreign key", "An index on a non-key attribute", "An index on the primary key of a file", "An index that is not a clustered index"],
                    "correct": 3
                },
                {
                    "id": 105,
                    "question": "In a database, what is a 'timestamp' used for in concurrency control?",
                    "options": ["To record the time of a transaction", "To prevent deadlocks by assigning a unique timestamp to each transaction", "To ensure all transactions are completed in a fixed time", "To provide a user with a timestamp of the query result"],
                    "correct": 2
                },
                {
                    "id": 106,
                    "question": "What is the main purpose of a 'data dictionary'?",
                    "options": ["To store the actual user data", "To store metadata about the database structure", "To store encrypted passwords", "To store SQL queries"],
                    "correct": 2
                },
                {
                    "id": 107,
                    "question": "Which of the following is a common characteristic of a 'Data Warehouse'?",
                    "options": ["Volatility (data is frequently updated)", "High transaction throughput", "Subject-oriented and time-variant", "Normalized data structure"],
                    "correct": 3
                },
                {
                    "id": 108,
                    "question": "What is a 'heterogeneous distributed database'?",
                    "options": ["A distributed database where all sites run the same DBMS", "A distributed database where different sites run different DBMSs", "A distributed database with no data replication", "A distributed database where data is not fragmented"],
                    "correct": 2
                },
                {
                    "id": 109,
                    "question": "Which of the following is an example of 'specialization' in an ER diagram?",
                    "options": ["A 'VEHICLE' entity is specialized into 'CAR', 'TRUCK', and 'MOTORCYCLE' entities.", "A 'CAR' entity is generalized into a 'VEHICLE' entity.", "A 'HAS_PART' relationship is treated as an entity.", "The attributes of 'CAR' are combined into one entity."],
                    "correct": 1
                },
                {
                    "id": 110,
                    "question": "What is the purpose of 'locking' in concurrency control?",
                    "options": ["To prevent deadlocks", "To ensure that concurrent transactions do not interfere with each other's data access", "To speed up query execution", "To secure a database from unauthorized access"],
                    "correct": 2
                },
                {
                    "id": 111,
                    "question": "What does the 'A' in the CAP theorem stand for?",
                    "options": ["Atomicity", "Availability", "Authorization", "Aggregation"],
                    "correct": 2
                },
                {
                    "id": 112,
                    "question": "A 'Hash index' is particularly effective for:",
                    "options": ["Searching on ranges of values", "Exact match searches on specific keys", "Unstructured data searches", "Full-text searches"],
                    "correct": 2
                },
                {
                    "id": 113,
                    "question": "In a distributed database, 'replication transparency' means:",
                    "options": ["Users are unaware that multiple copies of data exist", "Users are unaware of where the data is physically stored", "Users are unaware of data fragmentation", "Users are unaware of the type of DBMS used at each site"],
                    "correct": 1
                },
                {
                    "id": 114,
                    "question": "What is 'serial execution' in transaction management?",
                    "options": ["Executing all transactions concurrently", "Executing transactions one after another in a fixed order", "Executing transactions in a way that produces the same result as a serial schedule", "Executing transactions in parallel"],
                    "correct": 2
                },
                {
                    "id": 115,
                    "question": "Which of the following is a drawback of 'shared-memory' parallel database architecture?",
                    "options": ["Low inter-node communication overhead", "High scalability for large systems", "High contention for shared memory resources", "Lower cost"],
                    "correct": 3
                },
                {
                    "id": 116,
                    "question": "The 'log-based recovery' technique in a DBMS is used for:",
                    "options": ["Securing the database from unauthorized access", "Rebuilding the database to a consistent state after a system failure", "Optimizing query performance", "Creating a centralized database"],
                    "correct": 2
                },
                {
                    "id": 117,
                    "question": "What is 'schema on read' a characteristic of?",
                    "options": ["Relational databases", "NoSQL document stores", "Hierarchical databases", "OLTP systems"],
                    "correct": 2
                },
                {
                    "id": 118,
                    "question": "What is the primary key for a table that has been normalized to 5NF?",
                    "options": ["A non-prime attribute", "A foreign key", "A candidate key", "Any attribute in the table"],
                    "correct": 3
                },
                {
                    "id": 119,
                    "question": "In relational algebra, what is the purpose of the 'JOIN' operator?",
                    "options": ["To select rows based on a condition", "To combine tuples from two or more relations based on a common attribute", "To remove duplicate rows", "To project a subset of columns from a relation"],
                    "correct": 2
                },
                {
                    "id": 120,
                    "question": "Which of the following is a key feature of 'OLTP' systems?",
                    "options": ["Used for historical analysis and reporting", "Optimized for complex queries", "Handles high-volume, real-time transactions", "Utilizes a star or snowflake schema"],
                    "correct": 3
                },
                {
                    "id": 121,
                    "question": "Which of the following describes 'optimistic concurrency control'?",
                    "options": ["It assumes conflicts are rare and performs checks at the time of commit.", "It uses locks to prevent conflicts before they occur.", "It is a technique used only in distributed databases.", "It requires transactions to acquire locks on all resources at the beginning."],
                    "correct": 1
                },
                {
                    "id": 122,
                    "question": "In a relational schema, what is a 'domain constraint'?",
                    "options": ["A rule that restricts the values of an attribute to a specific data type or set of values.", "A constraint that ensures a foreign key refers to a valid primary key.", "A rule that ensures a primary key is not null.", "A constraint that prevents a user from accessing certain data."],
                    "correct": 1
                },
                {
                    "id": 123,
                    "question": "What is the primary difference between a 'data lake' and a 'data warehouse'?",
                    "options": ["A data lake is used for OLAP, while a data warehouse is used for OLTP.", "A data lake stores structured data, while a data warehouse stores unstructured data.", "A data warehouse stores refined data, while a data lake stores raw, unprocessed data.", "A data lake requires a fixed schema, while a data warehouse does not."],
                    "correct": 3
                },
                {
                    "id": 124,
                    "question": "What is the purpose of a 'trigger' in a database?",
                    "options": ["To define the structure of a table.", "To execute a stored procedure.", "To automatically execute a set of SQL statements in response to a specific event.", "To create a view of a table."],
                    "correct": 3
                },
                {
                    "id": 125,
                    "question": "Which type of join returns all rows from the left table, and the matching rows from the right table?",
                    "options": ["INNER JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "LEFT JOIN"],
                    "correct": 4
                },
                {
                    "id": 126,
                    "question": "The 'disjoint' constraint in a superclass/subclass relationship indicates that:",
                    "options": ["An entity in the superclass must be a member of at least one of the subclasses.", "An entity in the superclass can be a member of multiple subclasses.", "An entity in the superclass can be a member of at most one of the subclasses.", "An entity in the superclass must have a primary key."],
                    "correct": 3
                },
                {
                    "id": 127,
                    "question": "What is 'Polyglot Persistence'?",
                    "options": ["Using a single type of database for all applications.", "Using a variety of databases, each tailored to a specific microservice or application requirement.", "Storing data in multiple, redundant copies.", "Using a single database with multiple schemas."],
                    "correct": 2
                },
                {
                    "id": 128,
                    "question": "Which of the following is a key characteristic of 'multiversion concurrency control' (MVCC)?",
                    "options": ["It uses a single version of data with locks.", "It prevents deadlocks by requiring all locks to be acquired at once.", "It allows transactions to read a consistent snapshot of the database without locking.", "It is only used in distributed databases."],
                    "correct": 3
                },
                {
                    "id": 129,
                    "question": "What does a 'primary key' do in an E-R to relational model mapping?",
                    "options": ["It is always converted to a foreign key.", "It is dropped from the relational table.", "It becomes the unique identifier for the resulting relation.", "It is converted to a non-key attribute."],
                    "correct": 3
                },
                {
                    "id": 130,
                    "question": "What is the primary goal of a 'data governance' framework?",
                    "options": ["To physically store data on servers.", "To manage data backup and recovery.", "To ensure data is usable, accessible, and secure throughout its lifecycle.", "To create and manage database schemas."],
                    "correct": 3
                },
                {
                    "id": 131,
                    "question": "What is a 'stored procedure'?",
                    "options": ["A query that is executed only once.", "A set of SQL statements stored as a single unit on the database server.", "A database file used for logging transactions.", "A type of table in a relational database."],
                    "correct": 2
                },
                {
                    "id": 132,
                    "question": "Which type of integrity constraint ensures that no value of a primary key can be null?",
                    "options": ["Referential integrity", "Domain integrity", "Entity integrity", "Key integrity"],
                    "correct": 3
                },
                {
                    "id": 133,
                    "question": "What is the difference between an 'inner join' and an 'outer join'?",
                    "options": ["Inner join returns matching rows, while outer join returns matching rows plus unmatched rows from one or both tables.", "Inner join returns all rows, while outer join returns only matching rows.", "Inner join is faster than outer join.", "Inner join is used for two tables, while outer join is used for more than two tables."],
                    "correct": 1
                },
                {
                    "id": 134,
                    "question": "The 'total' participation constraint in an E-R model is represented by:",
                    "options": ["A single line connecting an entity to a relationship.", "A double line connecting an entity to a relationship.", "A diamond shape.", "An oval shape."],
                    "correct": 2
                },
                {
                    "id": 135,
                    "question": "In a database, what is the purpose of 'RAID'?",
                    "options": ["To create a logical view of a table.", "To speed up data retrieval with indexes.", "To improve data storage reliability and performance using multiple disks.", "To manage distributed transactions."],
                    "correct": 3
                },
                {
                    "id": 136,
                    "question": "Which of the following is a type of SQL injection attack?",
                    "options": ["A virus that corrupts data.", "A type of denial-of-service attack.", "Inserting malicious SQL code into an input field to manipulate the database.", "Stealing a user's password from the database."],
                    "correct": 3
                },
                {
                    "id": 137,
                    "question": "What is the difference between 'backup' and 'recovery'?",
                    "options": ["Backup is the process of restoring data, while recovery is the process of creating a copy of data.", "Backup is the process of creating a copy of data, while recovery is the process of restoring data after a failure.", "Backup is only for structured data, while recovery is for unstructured data.", "They are two names for the same process."],
                    "correct": 2
                },
                {
                    "id": 138,
                    "question": "Which of the following best describes 'Role-Based Access Control' (RBAC)?",
                    "options": ["Permissions are granted directly to individual users.", "Permissions are granted based on a user's role, and users are assigned to roles.", "Permissions are granted based on the time of day.", "Permissions are granted based on the user's location."],
                    "correct": 2
                },
                {
                    "id": 139,
                    "question": "What is the main purpose of 'indexing' in a database?",
                    "options": ["To reduce data redundancy.", "To speed up data retrieval by providing a quick lookup mechanism.", "To ensure data integrity.", "To create relationships between tables."],
                    "correct": 2
                },
                {
                    "id": 140,
                    "question": "Which of the following is a disadvantage of a 'centralized' database architecture?",
                    "options": ["Potential for a single point of failure.", "Higher management complexity.", "More expensive to set up.", "Slower query performance for local users."],
                    "correct": 1
                },
                {
                    "id": 141,
                    "question": "What is 'ETL' in the context of data warehousing?",
                    "options": ["Easy to Load", "Extract, Transform, Load", "Execute, Test, Log", "Entity, Table, Link"],
                    "correct": 2
                },
                {
                    "id": 142,
                    "question": "Which type of file organization stores records in a specific order based on a key?",
                    "options": ["Heap file organization", "Hash file organization", "Sorted file organization", "Unordered file organization"],
                    "correct": 3
                },
                {
                    "id": 143,
                    "question": "The 'two-phase commit protocol' is used to ensure which of the following?",
                    "options": ["Atomicity in distributed transactions.", "Durability in centralized transactions.", "Serializability in concurrent transactions.", "Data integrity in a single database."],
                    "correct": 1
                },
                {
                    "id": 144,
                    "question": "What is 'serverless computing' in the context of databases?",
                    "options": ["A database that does not run on a server.", "A model where the cloud provider manages the database's infrastructure, scaling, and maintenance.", "A database that is only used for static data.", "A database that runs on a single server."],
                    "correct": 2
                },
                {
                    "id": 145,
                    "question": "What is a 'master data management' (MDM) system used for?",
                    "options": ["To manage day-to-day transactions.", "To create a single, consistent, and trusted view of key business data.", "To handle unstructured data.", "To manage user credentials."],
                    "correct": 2
                },
                {
                    "id": 146,
                    "question": "In a database, what is 'data encryption at rest'?",
                    "options": ["Encrypting data as it is being transmitted over a network.", "Encrypting data while it is stored on a physical storage medium.", "Encrypting data while it is being processed in memory.", "Encrypting data as it is being backed up."],
                    "correct": 2
                },
                {
                    "id": 147,
                    "question": "What is the primary purpose of a 'subquery'?",
                    "options": ["To update data in a table.", "To define a view.", "To embed a query within another query.", "To join two tables."],
                    "correct": 3
                },
                {
                    "id": 148,
                    "question": "Which of the following is an advantage of 'microservices' architecture for databases?",
                    "options": ["It simplifies data management by using a single database.", "It requires a single technology stack for the entire system.", "Each service can use the database technology best suited for its needs.", "It eliminates the need for any database."],
                    "correct": 3
                },
                {
                    "id": 149,
                    "question": "In an E-R model, what is 'generalization'?",
                    "options": ["Creating a higher-level entity from a set of lower-level entities.", "Creating a set of lower-level entities from a higher-level entity.", "Treating a relationship as an entity.", "Combining two or more attributes into a single attribute."],
                    "correct": 1
                },
                {
                    "id": 150,
                    "question": "Which of the following is a benefit of using a 'stored procedure'?",
                    "options": ["It reduces security.", "It can improve performance by reducing network traffic.", "It allows for easier ad-hoc queries.", "It is only available in NoSQL databases."],
                    "correct": 2
                },
                {
                    "id": 151,
                    "question": "What is the purpose of 'database monitoring'?",
                    "options": ["To create a new database.", "To back up data.", "To track database performance and health.", "To normalize a database schema."],
                    "correct": 3
                },
                {
                    "id": 152,
                    "question": "Which of the following is a common strategy for 'disaster recovery'?",
                    "options": ["Normalization", "Indexing", "Backup and restore", "Denormalization"],
                    "correct": 3
                },
                {
                    "id": 153,
                    "question": "What is a 'data swamp'?",
                    "options": ["A clean and organized data lake.", "A data warehouse used for historical data.", "An unmanaged and chaotic data lake that lacks proper governance.", "A database with no primary keys."],
                    "correct": 3
                },
                {
                    "id": 154,
                    "question": "What is the main goal of 'performance tuning' in a database?",
                    "options": ["To reduce the database size.", "To optimize queries and database operations for better speed and efficiency.", "To increase the number of tables.", "To improve data security."],
                    "correct": 2
                },
                {
                    "id": 155,
                    "question": "In an E-R model, 'primary key migration' is the process of:",
                    "options": ["Creating a composite key.", "Migrating a primary key from a strong entity to a weak entity.", "Migrating a primary key from a strong entity to a related foreign key.", "Migrating a primary key from a parent table to a child table."],
                    "correct": 4
                },
                {
                    "id": 156,
                    "question": "Which of the following is an example of 'referential integrity'?",
                    "options": ["A column that cannot contain null values.", "A foreign key value in one table must match a primary key value in another table.", "An attribute's value must fall within a specific range.", "A table must have a primary key."],
                    "correct": 2
                },
                {
                    "id": 157,
                    "question": "Which type of index is most suitable for a table with low cardinality (few distinct values)?",
                    "options": ["B-tree index", "Hash index", "Bitmap index", "Clustered index"],
                    "correct": 3
                },
                {
                    "id": 158,
                    "question": "What does a 'self join' do?",
                    "options": ["It joins a table to itself.", "It joins two different tables.", "It is a type of outer join.", "It is a type of inner join."],
                    "correct": 1
                },
                {
                    "id": 159,
                    "question": "What is the primary difference between a 'full backup' and an 'incremental backup'?",
                    "options": ["A full backup backs up all data, while an incremental backup backs up only data that has changed since the last full backup.", "A full backup is faster than an incremental backup.", "A full backup is only used for OLTP systems.", "A full backup is less secure than an incremental backup."],
                    "correct": 1
                },
                {
                    "id": 160,
                    "question": "Which of the following is a characteristic of a 'Microservices' database architecture?",
                    "options": ["All services share a single, monolithic database.", "Each service has its own independent database.", "Services do not use databases.", "Only NoSQL databases can be used."],
                    "correct": 2
                },
                {
                    "id": 161,
                    "question": "What is the primary purpose of 'Transaction Control Language' (TCL)?",
                    "options": ["To define the database structure.", "To manage and query data.", "To manage transactions and ensure their integrity.", "To control user access."],
                    "correct": 3
                },
                {
                    "id": 162,
                    "question": "Which of the following is a benefit of 'database logging'?",
                    "options": ["It improves query performance.", "It is used for transaction recovery in case of a system crash.", "It eliminates the need for backups.", "It prevents deadlocks."],
                    "correct": 2
                },
                {
                    "id": 163,
                    "question": "What is a 'query optimizer'?",
                    "options": ["A tool that helps users write queries.", "A component of a DBMS that finds the most efficient way to execute a query.", "A tool that monitors database performance.", "A type of index."],
                    "correct": 2
                },
                {
                    "id": 164,
                    "question": "The 'overlapping' constraint in a superclass/subclass relationship indicates that:",
                    "options": ["An entity can be a member of multiple subclasses.", "An entity must be a member of at least one subclass.", "An entity can only be a member of one subclass.", "An entity cannot be a member of any subclass."],
                    "correct": 1
                },
                {
                    "id": 165,
                    "question": "What is a 'Data Swarm'?",
                    "options": ["A collection of decentralized data sources managed independently.", "A centralized data repository.", "A data warehouse for structured data.", "A type of NoSQL database."],
                    "correct": 1
                },
                {
                    "id": 166,
                    "question": "Which type of RAID level provides both data redundancy and improved performance by mirroring and striping data?",
                    "options": ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
                    "correct": 4
                },
                {
                    "id": 167,
                    "question": "What is the primary difference between a 'view' and a 'materialized view'?",
                    "options": ["A view is a stored query, while a materialized view is a stored result set.", "A view is only for security, while a materialized view is for performance.", "A view is a physical table, while a materialized view is a logical table.", "A view is only available in NoSQL databases."],
                    "correct": 1
                },
                {
                    "id": 168,
                    "question": "The 'UNION' set operator in SQL combines the result sets of two or more SELECT statements and:",
                    "options": ["Includes duplicate rows.", "Requires the queries to have different column names.", "Excludes duplicate rows.", "Requires the queries to have different data types."],
                    "correct": 3
                },
                {
                    "id": 169,
                    "question": "What is 'physical data independence'?",
                    "options": ["The ability to change the conceptual schema without affecting the external schemas.", "The ability to change the physical schema without affecting the logical schema.", "The ability to change the logical schema without affecting the physical schema.", "The ability to change the external schemas without affecting the conceptual schema."],
                    "correct": 2
                },
                {
                    "id": 170,
                    "question": "What is the purpose of a 'foreign key' in an E-R to relational model mapping?",
                    "options": ["To uniquely identify each record in a table.", "To define a relationship between two tables.", "To ensure a column is not null.", "To speed up data retrieval."],
                    "correct": 2
                },
                {
                    "id": 171,
                    "question": "What is 'denormalization'?",
                    "options": ["The process of breaking down a large table into smaller tables.", "The process of adding redundant data to a database to improve performance.", "The process of removing all indexes from a table.", "The process of converting a relational database to a NoSQL database."],
                    "correct": 2
                },
                {
                    "id": 172,
                    "question": "What is a 'data lineage'?",
                    "options": ["A map of a database's physical storage.", "A record of the journey of data from its source to its destination.", "A backup of all database transactions.", "A data model for a NoSQL database."],
                    "correct": 2
                },
                {
                    "id": 173,
                    "question": "Which of the following is a benefit of 'data warehousing'?",
                    "options": ["Enables real-time transaction processing.", "Optimized for high-volume data entry.", "Provides a historical view of data for business intelligence.", "Requires no data cleaning or transformation."],
                    "correct": 3
                },
                {
                    "id": 174,
                    "question": "What is the primary purpose of 'database administration'?",
                    "options": ["To design the logical schema of a database.", "To manage and maintain the database to ensure its integrity, performance, and security.", "To write application code that interacts with the database.", "To create reports from the data."],
                    "correct": 2
                },
                {
                    "id": 175,
                    "question": "What is 'database migration'?",
                    "options": ["The process of normalizing a database.", "The process of moving data from one database system to another.", "The process of creating a new database schema.", "The process of backing up a database."],
                    "correct": 2
                },
                {
                    "id": 176,
                    "question": "What is a 'window function' in SQL?",
                    "options": ["A function that operates on a set of rows and returns a single value for the entire set.", "A function that operates on a single row.", "A function that is only available in NoSQL databases.", "A function that performs a join."],
                    "correct": 1
                },
                {
                    "id": 177,
                    "question": "What is the primary purpose of 'domain integrity'?",
                    "options": ["To ensure a primary key is not null.", "To ensure that all foreign keys reference an existing primary key.", "To ensure that all values in a column are from the same defined domain.", "To prevent duplicate data."],
                    "correct": 3
                },
                {
                    "id": 178,
                    "question": "In a distributed database, 'partitioning' is used to:",
                    "options": ["Replicate data across different sites.", "Break a large table into smaller parts and store them in different locations.", "Encrypt data for security.", "Create a backup of the database."],
                    "correct": 2
                },
                {
                    "id": 179,
                    "question": "What is a 'hash file organization'?",
                    "options": ["A file organization where records are sorted by a key.", "A file organization that stores records randomly.", "A file organization that uses a hash function to determine the location of a record.", "A file organization that uses a tree-like structure."],
                    "correct": 3
                },
                {
                    "id": 180,
                    "question": "Which of the following is a key characteristic of 'multiversion concurrency control'?",
                    "options": ["It uses a single version of data.", "It allows multiple versions of a data item to exist simultaneously.", "It requires all transactions to acquire locks on all resources.", "It is only used in centralized databases."],
                    "correct": 2
                },
                {
                    "id": 181,
                    "question": "What is a 'transient transaction'?",
                    "options": ["A long-running transaction.", "A transaction that is read-only.", "A transaction that is not committed to the database.", "A transaction that is part of a distributed system."],
                    "correct": 3
                },
                {
                    "id": 182,
                    "question": "Which of the following is a common method for 'data backup'?",
                    "options": ["Normalization", "Incremental backup", "Indexing", "Performance tuning"],
                    "correct": 2
                },
                {
                    "id": 183,
                    "question": "What is a 'data swamp'?",
                    "options": ["A clean and well-governed data lake.", "A collection of decentralized data sources.", "A chaotic and unmanaged data lake.", "A data warehouse for historical data."],
                    "correct": 3
                },
                {
                    "id": 184,
                    "question": "In a relational database, what is a 'key constraint'?",
                    "options": ["A constraint that ensures a column is not null.", "A constraint that ensures an attribute or set of attributes is a unique identifier.", "A constraint that ensures a foreign key refers to a valid primary key.", "A constraint that limits the data types allowed in a column."],
                    "correct": 2
                },
                {
                    "id": 185,
                    "question": "Which of the following is an example of 'serverless computing' in a database context?",
                    "options": ["Managing a MySQL server on a cloud VM.", "Using a fully managed database service like Amazon DynamoDB or Google Cloud Firestore.", "Running a database on a local server.", "Using a self-hosted NoSQL database."],
                    "correct": 2
                },
                {
                    "id": 186,
                    "question": "What is 'ETL' used for in a data warehouse?",
                    "options": ["To extract, transform, and load data from various sources into the warehouse.", "To encrypt, transmit, and log data.", "To execute, test, and launch queries.", "To establish, terminate, and link tables."],
                    "correct": 1
                },
                {
                    "id": 187,
                    "question": "Which of the following is a characteristic of 'SQL injection'?",
                    "options": ["It exploits a vulnerability in a website's input validation.", "It is a type of denial-of-service attack.", "It only works on NoSQL databases.", "It corrupts the database files."],
                    "correct": 1
                },
                {
                    "id": 188,
                    "question": "What is a 'database log' primarily used for?",
                    "options": ["To monitor user activity.", "To store user credentials.", "To ensure data integrity and enable recovery after a crash.", "To define the database schema."],
                    "correct": 3
                },
                {
                    "id": 189,
                    "question": "Which of the following is a key feature of 'Master Data Management'?",
                    "options": ["It is used to store historical sales data.", "It provides a single source of truth for critical business data.", "It is a type of NoSQL database.", "It is used for real-time transaction processing."],
                    "correct": 2
                },
                {
                    "id": 190,
                    "question": "What is the purpose of 'RAID 1'?",
                    "options": ["To stripe data across multiple disks to improve performance.", "To mirror data on a second disk for redundancy.", "To combine striping with parity for data protection.", "To combine striping and mirroring."],
                    "correct": 2
                },
                {
                    "id": 191,
                    "question": "What is 'Schema on Write' a characteristic of?",
                    "options": ["Relational databases", "NoSQL document stores", "Graph databases", "Data lakes"],
                    "correct": 1
                },
                {
                    "id": 192,
                    "question": "What is the primary purpose of 'OLTP' systems?",
                    "options": ["To support business analysis and reporting.", "To handle high-volume, real-time transactions.", "To store historical data.", "To support data mining."],
                    "correct": 2
                },
                {
                    "id": 193,
                    "question": "Which of the following is a type of 'outer join'?",
                    "options": ["INNER JOIN", "CROSS JOIN", "SELF JOIN", "FULL JOIN"],
                    "correct": 4
                },
                {
                    "id": 194,
                    "question": "In a distributed database, 'location transparency' means:",
                    "options": ["Users are unaware of the physical location of the data.", "Users are unaware of data fragmentation.", "Users are unaware of data replication.", "Users are unaware of the type of DBMS used at each site."],
                    "correct": 1
                },
                {
                    "id": 195,
                    "question": "What is 'column-oriented storage'?",
                    "options": ["Storing data in flexible, semi-structured documents.", "Storing data in rows, with all attributes together.", "Storing data in columns, with all values of a single attribute together.", "Storing data in key-value pairs."],
                    "correct": 3
                },
                {
                    "id": 196,
                    "question": "Which of the following is an example of a 'many-to-many' relationship?",
                    "options": ["A student registers for many courses, and a course has many students.", "A person has one driver's license, and a driver's license belongs to one person.", "A country has many states, but a state belongs to only one country.", "A patient has one doctor, and a doctor has many patients."],
                    "correct": 1
                },
                {
                    "id": 197,
                    "question": "What is the purpose of a 'foreign key'?",
                    "options": ["To uniquely identify a record in a table.", "To establish a link or relationship between two tables.", "To ensure a column is not null.", "To speed up data retrieval."],
                    "correct": 2
                },
                {
                    "id": 198,
                    "question": "What does 'physical data independence' mean in database architecture?",
                    "options": ["The ability to change the logical schema without affecting the physical schema.", "The ability to change the physical schema without affecting the logical schema.", "The ability to change the conceptual schema without affecting the external schemas.", "The ability to change the external schemas without affecting the conceptual schema."],
                    "correct": 2
                },
                {
                    "id": 199,
                    "question": "Which of the following is a characteristic of a 'Document Store' NoSQL database?",
                    "options": ["It uses a rigid, fixed schema.", "It stores data in flexible, semi-structured documents.", "It is a key-value store.", "It is a relational database."],
                    "correct": 2
                },
                {
                    "id": 200,
                    "question": "In a database, what is a 'data swamp'?",
                    "options": ["A clean and organized data lake.", "A data warehouse for business intelligence.", "An unmanaged and chaotic data lake that lacks proper governance.", "A database with no primary keys."],
                    "correct": 3
                }
            ],
        },
        "Transaction Management & ACID Properties": {
            color: "#bc6c25",
            questions: [
                { id: 1, question: "Which command is used to permanently save a transaction?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "GRANT"], correct: 1 },
                { id: 2, question: "Which command undoes changes in a transaction?", options: ["DELETE", "ROLLBACK", "COMMIT", "DROP"], correct: 1 },
                { id: 3, question: "Which command sets a marker in a transaction?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "CHECKPOINT"], correct: 0 },
                { id: 4, question: "What does Atomicity mean in ACID?", options: ["All or nothing execution", "Data must be consistent", "Multiple users can access", "Data survives failure"], correct: 0 },
                { id: 5, question: "What does Consistency mean in ACID?", options: ["Transaction leaves DB in valid state", "All or nothing execution", "Data survives crash", "Multiple users can access"], correct: 0 },
                { id: 6, question: "What does Isolation ensure in ACID?", options: ["Transactions run independently", "Data must survive crash", "All or nothing execution", "Data backup is required"], correct: 0 },
                { id: 7, question: "What does Durability mean in ACID?", options: ["Committed data survives system failure", "Transactions rollback automatically", "Data must be consistent", "Transactions run independently"], correct: 0 },
                { id: 8, question: "Which property ensures database integrity?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 9, question: "Which property ensures committed data is permanent?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 10, question: "Which property ensures parallel transactions don’t conflict?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 11, question: "Which SQL command defines a new transaction?", options: ["BEGIN TRANSACTION", "START TRANSACTION", "OPEN TRANSACTION", "Both A and B"], correct: 3 },
                { id: 12, question: "Which SQL command ends a transaction successfully?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "STOP"], correct: 1 },
                { id: 13, question: "Which SQL command cancels the last transaction?", options: ["ROLLBACK", "COMMIT", "DELETE", "UNDO"], correct: 0 },
                { id: 14, question: "Which command allows rollback to specific point?", options: ["ROLLBACK TO SAVEPOINT", "RESET TO", "UNDO TO", "STOP TO"], correct: 0 },
                { id: 15, question: "Which command deletes a savepoint?", options: ["RELEASE SAVEPOINT", "DROP SAVEPOINT", "REMOVE SAVEPOINT", "CLEAR SAVEPOINT"], correct: 0 },
                { id: 16, question: "Which command creates intermediate checkpoints?", options: ["SAVEPOINT", "COMMIT", "ROLLBACK", "CHECKPOINT"], correct: 0 },
                { id: 17, question: "Which command removes all savepoints?", options: ["ROLLBACK", "COMMIT", "RELEASE SAVEPOINT", "DROP ALL"], correct: 2 },
                { id: 18, question: "Which ACID property prevents dirty reads?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 19, question: "Which ACID property ensures valid state?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 20, question: "Which ACID property protects against crash?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 21, question: "Which command is used to undo changes before commit?", options: ["ROLLBACK", "DELETE", "TRUNCATE", "DROP"], correct: 0 },
                { id: 22, question: "Which command cannot be rolled back?", options: ["DELETE", "TRUNCATE", "ROLLBACK", "UPDATE"], correct: 1 },
                { id: 23, question: "Which command ensures changes are visible to others?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "GRANT"], correct: 1 },
                { id: 24, question: "Which command starts a transaction explicitly?", options: ["START TRANSACTION", "BEGIN TRANSACTION", "OPEN TRANSACTION", "Both A and B"], correct: 3 },
                { id: 25, question: "Which transaction state means still running?", options: ["Active", "Partially Committed", "Failed", "Committed"], correct: 0 },
                { id: 26, question: "Which transaction state means changes written but not committed?", options: ["Active", "Partially Committed", "Failed", "Aborted"], correct: 1 },
                { id: 27, question: "Which transaction state means error occurred?", options: ["Committed", "Failed", "Active", "Partially Committed"], correct: 1 },
                { id: 28, question: "Which transaction state means rollback executed?", options: ["Committed", "Aborted", "Active", "Failed"], correct: 1 },
                { id: 29, question: "Which transaction state means success and permanent?", options: ["Committed", "Failed", "Aborted", "Active"], correct: 0 },
                { id: 30, question: "Which property ensures rollback on failure?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 31, question: "Which property ensures no violation of constraints?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 32, question: "Which property ensures one transaction does not affect another?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 33, question: "Which property ensures committed data is never lost?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 34, question: "Which ACID property fails if money is deducted but not credited?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 35, question: "Which ACID property ensures constraints hold true after execution?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 36, question: "Which ACID property is affected if system crash loses committed data?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 37, question: "Which ACID property is affected if two users overwrite each other’s data?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 38, question: "Which ACID property ensures valid transactions only?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 39, question: "Which ACID property ensures no partial execution?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 40, question: "Which ACID property ensures final database state is reliable?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 41, question: "Which isolation level allows dirty reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 0 },
                { id: 42, question: "Which isolation level avoids dirty reads but not non-repeatable reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 1 },
                { id: 43, question: "Which isolation level avoids dirty and non-repeatable reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 2 },
                { id: 44, question: "Which isolation level provides highest isolation?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 3 },
                { id: 45, question: "Which problem occurs if two transactions read uncommitted data?", options: ["Dirty Read", "Lost Update", "Phantom Read", "Deadlock"], correct: 0 },
                { id: 46, question: "Which problem occurs if two transactions update same row?", options: ["Lost Update", "Dirty Read", "Phantom Read", "Rollback"], correct: 0 },
                { id: 47, question: "Which problem occurs if repeated queries return different results?", options: ["Non-repeatable Read", "Dirty Read", "Lost Update", "Rollback"], correct: 0 },
                { id: 48, question: "Which problem occurs if new rows appear during same query execution?", options: ["Phantom Read", "Lost Update", "Dirty Read", "Rollback"], correct: 0 },
                { id: 49, question: "Which ACID property solves Phantom Read?", options: ["Isolation", "Atomicity", "Consistency", "Durability"], correct: 0 },
                { id: 50, question: "Which SQL isolation level prevents Phantom Reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 3 },
                { id: 51, question: "Which isolation level prevents Lost Updates?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 3 },
                { id: 52, question: "Which command makes changes visible to other sessions?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "GRANT"], correct: 1 },
                { id: 53, question: "Which command is used to revert partial changes?", options: ["ROLLBACK", "UNDO", "DELETE", "REVERT"], correct: 0 },
                { id: 54, question: "Which transaction property ensures success or failure, no in-between?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 55, question: "Which property ensures constraints like primary key always hold?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 56, question: "Which command sets a point to rollback later?", options: ["SAVEPOINT", "ROLLBACK", "COMMIT", "CHECKPOINT"], correct: 0 },
                { id: 57, question: "Which ACID property ensures transactions survive crash?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 58, question: "Which command ends a transaction unsuccessfully?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "END"], correct: 0 },
                { id: 59, question: "Which command is permanent and cannot be undone?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "DELETE"], correct: 0 },
                { id: 60, question: "Which isolation level is best for banking systems?", options: ["Read Committed", "Read Uncommitted", "Serializable", "Repeatable Read"], correct: 2 },
                { id: 61, question: "Which isolation level provides balance of safety and performance?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 0 },
                { id: 62, question: "Which isolation level allows phantom reads?", options: ["Read Committed", "Serializable", "Repeatable Read", "None"], correct: 2 },
                { id: 63, question: "Which transaction problem can cause double deduction of money?", options: ["Lost Update", "Phantom Read", "Dirty Read", "Non-repeatable Read"], correct: 0 },
                { id: 64, question: "Which property is violated if two users book the same ticket?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 65, question: "Which SQL command is always implicit in DDL?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "UNDO"], correct: 0 },
                { id: 66, question: "Which transaction state occurs after ROLLBACK?", options: ["Active", "Aborted", "Committed", "Failed"], correct: 1 },
                { id: 67, question: "Which SQL command is used to remove intermediate checkpoints?", options: ["RELEASE SAVEPOINT", "DROP SAVEPOINT", "DELETE SAVEPOINT", "CANCEL SAVEPOINT"], correct: 0 },
                { id: 68, question: "Which transaction problem is solved by Serializable level?", options: ["Lost Update", "Phantom Read", "Dirty Read", "All of the above"], correct: 3 },
                { id: 69, question: "Which ACID property ensures no half-completed transactions?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 70, question: "Which isolation level avoids dirty and phantom reads?", options: ["Read Committed", "Repeatable Read", "Serializable", "Read Uncommitted"], correct: 2 },
                { id: 71, question: "Which isolation level allows highest concurrency but lowest safety?", options: ["Read Committed", "Read Uncommitted", "Repeatable Read", "Serializable"], correct: 1 },
                { id: 72, question: "Which ACID property ensures system constraints hold?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 73, question: "Which isolation level is default in many DBMS like Oracle?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 0 },
                { id: 74, question: "Which isolation level is default in MySQL (InnoDB)?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 2 },
                { id: 75, question: "Which command is required before issuing SAVEPOINT?", options: ["BEGIN TRANSACTION", "ROLLBACK", "COMMIT", "GRANT"], correct: 0 },
                { id: 76, question: "Which property is most critical for online payments?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 77, question: "Which property ensures balance remains consistent after transfer?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 78, question: "Which property ensures concurrent ticket bookings don’t clash?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 79, question: "Which property ensures data is safe after power outage?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 80, question: "Which isolation level guarantees strictest execution order?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 3 },
                { id: 81, question: "Which isolation level is most performance expensive?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 1 },
                { id: 82, question: "Which command is used to undo only part of a transaction?", options: ["ROLLBACK TO SAVEPOINT", "ROLLBACK", "UNDO PARTIAL", "DELETE"], correct: 0 },
                { id: 83, question: "Which command finalizes transaction results?", options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "TRUNCATE"], correct: 1 },
                { id: 84, question: "Which transaction problem happens if constraints are violated?", options: ["Inconsistency", "Dirty Read", "Deadlock", "Phantom Read"], correct: 0 },
                { id: 85, question: "Which command undoes DML before commit?", options: ["ROLLBACK", "DELETE", "UNDO", "TRUNCATE"], correct: 0 },
                { id: 86, question: "Which isolation level prevents Non-repeatable Reads but not Phantom Reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 2 },
                { id: 87, question: "Which isolation level prevents only Dirty Reads?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 0 },
                { id: 88, question: "Which SQL command makes rollback impossible after execution?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "DELETE"], correct: 0 },
                { id: 89, question: "Which ACID property ensures transaction survives crash logs?", options: ["Durability", "Atomicity", "Consistency", "Isolation"], correct: 0 },
                { id: 90, question: "Which ACID property is violated if transaction updates are half done?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 91, question: "Which isolation level gives highest concurrency?", options: ["Read Committed", "Read Uncommitted", "Repeatable Read", "Serializable"], correct: 1 },
                { id: 92, question: "Which isolation level prevents Lost Updates completely?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correct: 3 },
                { id: 93, question: "Which SQL command is used to release locks after commit?", options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "RELEASE"], correct: 0 },
                { id: 94, question: "Which property ensures either debit and credit both happen?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 0 },
                { id: 95, question: "Which property ensures valid state before and after transfer?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 1 },
                { id: 96, question: "Which property ensures one transaction is not visible to another until committed?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 2 },
                { id: 97, question: "Which property ensures committed changes survive crash?", options: ["Atomicity", "Consistency", "Isolation", "Durability"], correct: 3 },
                { id: 98, question: "Which isolation level is most prone to anomalies?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 3 },
                { id: 99, question: "Which isolation level avoids most anomalies but is slower?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 1 },
                { id: 100, question: "Which isolation level avoids all anomalies completely?", options: ["Read Committed", "Serializable", "Repeatable Read", "Read Uncommitted"], correct: 1 }
            ],
        },
        "Normalization": {
            color: "#a53860",
            questions: [
                {
                    "id": 1,
                    "question": "Which of the following is a key characteristic of First Normal Form (1NF)?",
                    "options": [
                        "All non-key attributes must depend on the primary key.",
                        "There are no partial dependencies.",
                        "Each column contains only atomic, single-valued data.",
                        "Every column in a table has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 2,
                    "question": "A relation is in 2NF if it is in 1NF and what other condition is met?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 3,
                    "question": "What is the primary goal of the normalization process in a relational database?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 4,
                    "question": "What is the key difference between 3NF and Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 5,
                    "question": "Which of the following can lead to a deletion anomaly?",
                    "options": [
                        "A table that is not in 1NF.",
                        "A table with non-key attributes that are not fully dependent on the primary key.",
                        "A table with no foreign keys.",
                        "A table with a single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 6,
                    "question": "What kind of dependency is eliminated in Third Normal Form (3NF)?",
                    "options": [
                        "Partial dependency",
                        "Multivalued dependency",
                        "Join dependency",
                        "Transitive dependency"
                    ],
                    "correct": 4
                },
                {
                    "id": 7,
                    "question": "A table that is in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 8,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 9,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 10,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },

                {
                    "id": 11,
                    "question": "What is the primary key for a table that has been normalized to BCNF?",
                    "options": [
                        "It can be any attribute.",
                        "A non-prime attribute.",
                        "A determinant.",
                        "A candidate key."
                    ],
                    "correct": 4
                },
                {
                    "id": 12,
                    "question": "Which of the following is an example of an insertion anomaly?",
                    "options": [
                        "A student's enrollment record is deleted, and their address is also lost.",
                        "A professor's phone number needs to be updated in multiple records.",
                        "A new department cannot be added to a table until the first professor is hired for it.",
                        "A query takes too long to execute due to unoptimized joins."
                    ],
                    "correct": 3
                },
                {
                    "id": 13,
                    "question": "A relation is in BCNF if it is in 3NF and what other condition is met?",
                    "options": [
                        "There are no partial dependencies.",
                        "It has no transitive dependencies.",
                        "Every non-trivial determinant is a candidate key.",
                        "Every attribute is atomic."
                    ],
                    "correct": 3
                },
                {
                    "id": 14,
                    "question": "What is the primary goal of the normalization process?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 15,
                    "question": "What kind of dependency is eliminated when normalizing to 3NF?",
                    "options": [
                        "Partial dependency",
                        "Transitive dependency",
                        "Multivalued dependency",
                        "Join dependency"
                    ],
                    "correct": 2
                },
                {
                    "id": 16,
                    "question": "A table in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 17,
                    "question": "What is a 'deletion anomaly'?",
                    "options": [
                        "The loss of unrelated data when a single record is deleted.",
                        "The inability to delete a record from a table.",
                        "The difficulty of updating data in a table.",
                        "The inability to add a new record to a table."
                    ],
                    "correct": 1
                },
                {
                    "id": 18,
                    "question": "What is the key difference between 3NF and BCNF?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 19,
                    "question": "A table is in 2NF if it is in 1NF and what else?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 20,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A many-to-many relationship between two tables.",
                        "A relationship where the value of one attribute uniquely determines the value of another.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 2
                },
                {
                    "id": 21,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 22,
                    "question": "What is a 'superkey'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "A set of attributes that uniquely identifies a record.",
                        "A key that links two tables together."
                    ],
                    "correct": 3
                },
                {
                    "id": 23,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 24,
                    "question": "Which normal form requires that every determinant is a candidate key?",
                    "options": [
                        "2NF.",
                        "3NF.",
                        "BCNF.",
                        "4NF."
                    ],
                    "correct": 3
                },
                {
                    "id": 25,
                    "question": "What is an 'update anomaly'?",
                    "options": [
                        "The inability to add a new record to a table.",
                        "The inability to delete a record from a table.",
                        "The need to update multiple rows to change a single piece of data.",
                        "A query that takes too long to execute."
                    ],
                    "correct": 3
                },
                {
                    "id": 26,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 27,
                    "question": "Which of the following is a disadvantage of a denormalized database?",
                    "options": [
                        "Faster data retrieval for reporting and queries.",
                        "Increased storage space due to data redundancy.",
                        "Higher data integrity.",
                        "Increased complexity of joins."
                    ],
                    "correct": 2
                },
                {
                    "id": 28,
                    "question": "The process of moving from 2NF to 3NF involves the elimination of which type of dependency?",
                    "options": [
                        "Partial dependency.",
                        "Transitive dependency.",
                        "Multivalued dependency.",
                        "Join dependency."
                    ],
                    "correct": 2
                },
                {
                    "id": 29,
                    "question": "What is the process of breaking down a large table into multiple smaller, related tables called?",
                    "options": [
                        "Denormalization.",
                        "Decomposition.",
                        "Join operation.",
                        "Aggregation."
                    ],
                    "correct": 2
                },
                {
                    "id": 30,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 31,
                    "question": "What is a 'functional dependency'?",
                    "options": [
                        "A relationship where the value of one attribute uniquely determines the value of another.",
                        "A many-to-many relationship between two tables.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 1
                },
                {
                    "id": 32,
                    "question": "What is the primary key for a table that has been normalized to BCNF?",
                    "options": [
                        "It can be any attribute.",
                        "A non-prime attribute.",
                        "A minimal superkey.",
                        "A determinant of a transitive dependency."
                    ],
                    "correct": 3
                },
                {
                    "id": 33,
                    "question": "When a table has a composite primary key, which of the following is a primary concern for normalization?",
                    "options": [
                        "Transitive dependencies.",
                        "Multivalued dependencies.",
                        "Partial dependencies.",
                        "Non-atomic values."
                    ],
                    "correct": 3
                },
                {
                    "id": 34,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 35,
                    "question": "What is a 'foreign key' in the context of normalization?",
                    "options": [
                        "An attribute that uniquely identifies each record in a table.",
                        "An attribute that is part of a composite key.",
                        "An attribute that links a table to another table by referencing a primary key.",
                        "An attribute that has a transitive dependency."
                    ],
                    "correct": 3
                },
                {
                    "id": 36,
                    "question": "What is the primary purpose of a 'functional dependency'?",
                    "options": [
                        "To define the data types for columns.",
                        "To identify relationships between different tables.",
                        "To describe the relationships between attributes within a single table.",
                        "To enforce data integrity constraints."
                    ],
                    "correct": 3
                },
                {
                    "id": 37,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 38,
                    "question": "Which of the following is an example of a transitive dependency?",
                    "options": [
                        "A(StudentID) -> B(StudentName)",
                        "A(StudentID, CourseID) -> B(CourseName)",
                        "A(AuthorID) -> B(BookTitle) and A(AuthorID) -> C(AuthorNationality)",
                        "A(StudentID) -> B(City) and B(City) -> C(ZipCode)"
                    ],
                    "correct": 4
                },
                {
                    "id": 39,
                    "question": "What is the key benefit of normalizing a database to 3NF?",
                    "options": [
                        "It removes all data redundancy.",
                        "It eliminates insertion, update, and deletion anomalies related to transitive dependencies.",
                        "It makes the database faster.",
                        "It eliminates all forms of functional dependencies."
                    ],
                    "correct": 2
                },
                {
                    "id": 40,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 41,
                    "question": "A relation that is in BCNF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "1NF, 2NF, and 3NF",
                        "3NF, but not necessarily 1NF or 2NF",
                        "None, they are independent."
                    ],
                    "correct": 2
                },
                {
                    "id": 42,
                    "question": "What is a 'candidate key'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "An attribute that is a foreign key in another table.",
                        "A non-prime attribute."
                    ],
                    "correct": 2
                },
                {
                    "id": 43,
                    "question": "What is a 'transitive dependency'?",
                    "options": [
                        "A dependency where a non-key attribute depends on another non-key attribute.",
                        "A dependency that involves more than one table.",
                        "A dependency on only a part of the composite primary key.",
                        "A dependency on a foreign key."
                    ],
                    "correct": 1
                },
                {
                    "id": 44,
                    "question": "Which of the following is NOT a benefit of a normalized database?",
                    "options": [
                        "Elimination of redundant data.",
                        "Better data integrity.",
                        "Reduced storage space.",
                        "Simplified schema for data entry."
                    ],
                    "correct": 4
                },
                {
                    "id": 45,
                    "question": "The process of decomposition is used to achieve which of the following?",
                    "options": [
                        "A lossless join decomposition.",
                        "A single, large table.",
                        "A table with repeating groups.",
                        "A table with no functional dependencies."
                    ],
                    "correct": 1
                },
                {
                    "id": 46,
                    "question": "What is the term for a problem where a table cannot accept a new row because it requires an attribute value that doesn't yet exist?",
                    "options": [
                        "Update anomaly.",
                        "Deletion anomaly.",
                        "Insertion anomaly.",
                        "Redundancy anomaly."
                    ],
                    "correct": 3
                },
                {
                    "id": 47,
                    "question": "What is the purpose of normalizing a database to 3NF?",
                    "options": [
                        "To remove partial dependencies.",
                        "To ensure that every attribute is atomic.",
                        "To eliminate transitive dependencies.",
                        "To make every determinant a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 48,
                    "question": "What is the main advantage of normalizing a database?",
                    "options": [
                        "Faster queries and reports.",
                        "Better data integrity and reduced redundancy.",
                        "Simpler data entry.",
                        "Less storage space is used."
                    ],
                    "correct": 2
                },
                {
                    "id": 49,
                    "question": "If a relation has no non-key attributes, what is the highest normal form it can be in?",
                    "options": [
                        "1NF.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 4
                },
                {
                    "id": 50,
                    "question": "What is the purpose of normalizing a database to BCNF?",
                    "options": [
                        "To eliminate partial dependencies.",
                        "To ensure every determinant is a candidate key.",
                        "To remove transitive dependencies.",
                        "To make all attributes atomic."
                    ],
                    "correct": 2
                },
                {
                    "id": 51,
                    "question": "What is the key characteristic of a 'superkey'?",
                    "options": [
                        "It is a single attribute that uniquely identifies a record.",
                        "It is a set of attributes that uniquely identifies a record.",
                        "It is a foreign key.",
                        "It is a minimal superkey."
                    ],
                    "correct": 2
                },
                {
                    "id": 52,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A relationship where the value of one attribute uniquely determines the value of another attribute.",
                        "A many-to-many relationship between two tables.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 1
                },
                {
                    "id": 53,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 54,
                    "question": "What is a 'normal form'?",
                    "options": [
                        "A standard for database performance.",
                        "A state of a relation that has been designed to minimize redundancy.",
                        "A type of database software.",
                        "A language for querying databases."
                    ],
                    "correct": 2
                },
                {
                    "id": 55,
                    "question": "Which of the following is an example of an insertion anomaly?",
                    "options": [
                        "A student's address is stored in multiple records, and one of them is updated but the others are not.",
                        "A course cannot be added to a table unless a student is enrolled in it.",
                        "A professor's information is deleted when the last student they taught is deleted from a class table.",
                        "A query that retrieves a student's record takes a long time to run."
                    ],
                    "correct": 2
                },
                {
                    "id": 56,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 57,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 58,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 59,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 60,
                    "question": "What is a 'lossless join decomposition'?",
                    "options": [
                        "A decomposition where a new table is created, but data is lost.",
                        "A decomposition that cannot be joined back together.",
                        "A decomposition where no information is lost when the tables are joined back together.",
                        "A decomposition that is not in any normal form."
                    ],
                    "correct": 3
                },
                {
                    "id": 61,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A many-to-many relationship between two tables.",
                        "A relationship where the value of one attribute uniquely determines the value of another.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 2
                },
                {
                    "id": 62,
                    "question": "What is the primary key for a table that has been normalized to BCNF?",
                    "options": [
                        "It can be any attribute.",
                        "A non-prime attribute.",
                        "A determinant.",
                        "A candidate key."
                    ],
                    "correct": 4
                },
                {
                    "id": 63,
                    "question": "What is the primary goal of the normalization process?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 64,
                    "question": "What kind of dependency is eliminated when normalizing to 3NF?",
                    "options": [
                        "Partial dependency",
                        "Transitive dependency",
                        "Multivalued dependency",
                        "Join dependency"
                    ],
                    "correct": 2
                },
                {
                    "id": 65,
                    "question": "A table in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 66,
                    "question": "What is a 'deletion anomaly'?",
                    "options": [
                        "The loss of unrelated data when a single record is deleted.",
                        "The inability to delete a record from a table.",
                        "The difficulty of updating data in a table.",
                        "The inability to add a new record to a table."
                    ],
                    "correct": 1
                },
                {
                    "id": 67,
                    "question": "What is the key difference between 3NF and BCNF?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 68,
                    "question": "A table is in 2NF if it is in 1NF and what else?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 69,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 70,
                    "question": "What is a 'superkey'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "A set of attributes that uniquely identifies a record.",
                        "A key that links two tables together."
                    ],
                    "correct": 3
                },
                {
                    "id": 71,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 72,
                    "question": "Which normal form requires that every determinant is a candidate key?",
                    "options": [
                        "2NF.",
                        "3NF.",
                        "BCNF.",
                        "4NF."
                    ],
                    "correct": 3
                },
                {
                    "id": 73,
                    "question": "What is an 'update anomaly'?",
                    "options": [
                        "The inability to add a new record to a table.",
                        "The inability to delete a record from a table.",
                        "The need to update multiple rows to change a single piece of data.",
                        "A query that takes too long to execute."
                    ],
                    "correct": 3
                },
                {
                    "id": 74,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 75,
                    "question": "Which of the following is a disadvantage of a denormalized database?",
                    "options": [
                        "Faster data retrieval for reporting and queries.",
                        "Increased storage space due to data redundancy.",
                        "Higher data integrity.",
                        "Increased complexity of joins."
                    ],
                    "correct": 2
                },
                {
                    "id": 76,
                    "question": "The process of moving from 2NF to 3NF involves the elimination of which type of dependency?",
                    "options": [
                        "Partial dependency.",
                        "Transitive dependency.",
                        "Multivalued dependency.",
                        "Join dependency."
                    ],
                    "correct": 2
                },
                {
                    "id": 77,
                    "question": "What is the process of breaking down a large table into multiple smaller, related tables called?",
                    "options": [
                        "Denormalization.",
                        "Decomposition.",
                        "Join operation.",
                        "Aggregation."
                    ],
                    "correct": 2
                },
                {
                    "id": 78,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 79,
                    "question": "When a table has a composite primary key, which of the following is a primary concern for normalization?",
                    "options": [
                        "Transitive dependencies.",
                        "Multivalued dependencies.",
                        "Partial dependencies.",
                        "Non-atomic values."
                    ],
                    "correct": 3
                },
                {
                    "id": 80,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 81,
                    "question": "What is a 'foreign key' in the context of normalization?",
                    "options": [
                        "An attribute that uniquely identifies each record in a table.",
                        "An attribute that is part of a composite key.",
                        "An attribute that links a table to another table by referencing a primary key.",
                        "An attribute that has a transitive dependency."
                    ],
                    "correct": 3
                },
                {
                    "id": 82,
                    "question": "What is the primary purpose of a 'functional dependency'?",
                    "options": [
                        "To define the data types for columns.",
                        "To identify relationships between different tables.",
                        "To describe the relationships between attributes within a single table.",
                        "To enforce data integrity constraints."
                    ],
                    "correct": 3
                },
                {
                    "id": 83,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 84,
                    "question": "Which of the following is an example of a transitive dependency?",
                    "options": [
                        "A(StudentID) -> B(StudentName)",
                        "A(StudentID, CourseID) -> B(CourseName)",
                        "A(AuthorID) -> B(BookTitle) and A(AuthorID) -> C(AuthorNationality)",
                        "A(StudentID) -> B(City) and B(City) -> C(ZipCode)"
                    ],
                    "correct": 4
                },
                {
                    "id": 85,
                    "question": "What is the key benefit of normalizing a database to 3NF?",
                    "options": [
                        "It removes all data redundancy.",
                        "It eliminates insertion, update, and deletion anomalies related to transitive dependencies.",
                        "It makes the database faster.",
                        "It eliminates all forms of functional dependencies."
                    ],
                    "correct": 2
                },
                {
                    "id": 86,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 87,
                    "question": "A relation that is in BCNF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "1NF, 2NF, and 3NF",
                        "3NF, but not necessarily 1NF or 2NF",
                        "None, they are independent."
                    ],
                    "correct": 2
                },
                {
                    "id": 88,
                    "question": "What is a 'candidate key'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "An attribute that is a foreign key in another table.",
                        "A non-prime attribute."
                    ],
                    "correct": 2
                },
                {
                    "id": 89,
                    "question": "What is a 'transitive dependency'?",
                    "options": [
                        "A dependency where a non-key attribute depends on another non-key attribute.",
                        "A dependency that involves more than one table.",
                        "A dependency on only a part of the composite primary key.",
                        "A dependency on a foreign key."
                    ],
                    "correct": 1
                },
                {
                    "id": 90,
                    "question": "Which of the following is NOT a benefit of a normalized database?",
                    "options": [
                        "Elimination of redundant data.",
                        "Better data integrity.",
                        "Reduced storage space.",
                        "Simplified schema for data entry."
                    ],
                    "correct": 4
                },
                {
                    "id": 91,
                    "question": "The process of decomposition is used to achieve which of the following?",
                    "options": [
                        "A lossless join decomposition.",
                        "A single, large table.",
                        "A table with repeating groups.",
                        "A table with no functional dependencies."
                    ],
                    "correct": 1
                },
                {
                    "id": 92,
                    "question": "What is the term for a problem where a table cannot accept a new row because it requires an attribute value that doesn't yet exist?",
                    "options": [
                        "Update anomaly.",
                        "Deletion anomaly.",
                        "Insertion anomaly.",
                        "Redundancy anomaly."
                    ],
                    "correct": 3
                },
                {
                    "id": 93,
                    "question": "What is the purpose of normalizing a database to 3NF?",
                    "options": [
                        "To remove partial dependencies.",
                        "To ensure that every attribute is atomic.",
                        "To eliminate transitive dependencies.",
                        "To make every determinant a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 94,
                    "question": "What is the main advantage of normalizing a database?",
                    "options": [
                        "Faster queries and reports.",
                        "Better data integrity and reduced redundancy.",
                        "Simpler data entry.",
                        "Less storage space is used."
                    ],
                    "correct": 2
                },
                {
                    "id": 95,
                    "question": "If a relation has no non-key attributes, what is the highest normal form it can be in?",
                    "options": [
                        "1NF.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 4
                },
                {
                    "id": 96,
                    "question": "What is the purpose of normalizing a database to BCNF?",
                    "options": [
                        "To eliminate partial dependencies.",
                        "To ensure every determinant is a candidate key.",
                        "To remove transitive dependencies.",
                        "To make all attributes atomic."
                    ],
                    "correct": 2
                },
                {
                    "id": 97,
                    "question": "What is the key characteristic of a 'superkey'?",
                    "options": [
                        "It is a single attribute that uniquely identifies a record.",
                        "It is a set of attributes that uniquely identifies a record.",
                        "It is a foreign key.",
                        "It is a minimal superkey."
                    ],
                    "correct": 2
                },
                {
                    "id": 98,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A relationship where the value of one attribute uniquely determines the value of another attribute.",
                        "A many-to-many relationship between two tables.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 1
                },
                {
                    "id": 99,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 100,
                    "question": "What is a 'normal form'?",
                    "options": [
                        "A standard for database performance.",
                        "A state of a relation that has been designed to minimize redundancy.",
                        "A type of database software.",
                        "A language for querying databases."
                    ],
                    "correct": 2
                },
                {
                    "id": 101,
                    "question": "Which of the following is an example of an insertion anomaly?",
                    "options": [
                        "A student's address is stored in multiple records, and one of them is updated but the others are not.",
                        "A course cannot be added to a table unless a student is enrolled in it.",
                        "A professor's information is deleted when the last student they taught is deleted from a class table.",
                        "A query that retrieves a student's record takes a long time to run."
                    ],
                    "correct": 2
                },
                {
                    "id": 102,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 103,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 104,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 105,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 106,
                    "question": "What is a 'lossless join decomposition'?",
                    "options": [
                        "A decomposition where a new table is created, but data is lost.",
                        "A decomposition that cannot be joined back together.",
                        "A decomposition where no information is lost when the tables are joined back together.",
                        "A decomposition that is not in any normal form."
                    ],
                    "correct": 3
                },
                {
                    "id": 107,
                    "question": "What is the primary goal of the normalization process?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 108,
                    "question": "Which of the following is a key characteristic of First Normal Form (1NF)?",
                    "options": [
                        "All non-key attributes must depend on the primary key.",
                        "There are no partial dependencies.",
                        "Each column contains only atomic, single-valued data.",
                        "Every column in a table has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 109,
                    "question": "A relation is in 2NF if it is in 1NF and what other condition is met?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 110,
                    "question": "What is the primary goal of the normalization process in a relational database?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 111,
                    "question": "What is the key difference between 3NF and Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 112,
                    "question": "Which of the following can lead to a deletion anomaly?",
                    "options": [
                        "A table that is not in 1NF.",
                        "A table with non-key attributes that are not fully dependent on the primary key.",
                        "A table with no foreign keys.",
                        "A table with a single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 113,
                    "question": "What kind of dependency is eliminated in Third Normal Form (3NF)?",
                    "options": [
                        "Partial dependency",
                        "Multivalued dependency",
                        "Join dependency",
                        "Transitive dependency"
                    ],
                    "correct": 4
                },
                {
                    "id": 114,
                    "question": "A table that is in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 115,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 116,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 117,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 118,
                    "question": "Which of the following is a disadvantage of a denormalized database?",
                    "options": [
                        "Faster data retrieval for reporting and queries.",
                        "Increased storage space due to data redundancy.",
                        "Higher data integrity.",
                        "Increased complexity of joins."
                    ],
                    "correct": 2
                },
                {
                    "id": 119,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 120,
                    "question": "What is a 'superkey'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "A set of attributes that uniquely identifies a record.",
                        "A key that links two tables together."
                    ],
                    "correct": 3
                },
                {
                    "id": 121,
                    "question": "What is the primary key for a table that has been normalized to BCNF?",
                    "options": [
                        "It can be any attribute.",
                        "A non-prime attribute.",
                        "A determinant.",
                        "A candidate key."
                    ],
                    "correct": 4
                },
                {
                    "id": 122,
                    "question": "Which of the following is an example of an insertion anomaly?",
                    "options": [
                        "A student's enrollment record is deleted, and their address is also lost.",
                        "A professor's phone number needs to be updated in multiple records.",
                        "A new department cannot be added to a table until the first professor is hired for it.",
                        "A query takes too long to execute due to unoptimized joins."
                    ],
                    "correct": 3
                },
                {
                    "id": 123,
                    "question": "A relation is in BCNF if it is in 3NF and what other condition is met?",
                    "options": [
                        "There are no partial dependencies.",
                        "It has no transitive dependencies.",
                        "Every non-trivial determinant is a candidate key.",
                        "Every attribute is atomic."
                    ],
                    "correct": 3
                },
                {
                    "id": 124,
                    "question": "What is the primary goal of the normalization process?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 125,
                    "question": "What kind of dependency is eliminated when normalizing to 3NF?",
                    "options": [
                        "Partial dependency",
                        "Transitive dependency",
                        "Multivalued dependency",
                        "Join dependency"
                    ],
                    "correct": 2
                },
                {
                    "id": 126,
                    "question": "A table in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 127,
                    "question": "What is a 'deletion anomaly'?",
                    "options": [
                        "The loss of unrelated data when a single record is deleted.",
                        "The inability to delete a record from a table.",
                        "The difficulty of updating data in a table.",
                        "The inability to add a new record to a table."
                    ],
                    "correct": 1
                },
                {
                    "id": 128,
                    "question": "What is the key difference between 3NF and BCNF?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 129,
                    "question": "A table is in 2NF if it is in 1NF and what else?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 130,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A many-to-many relationship between two tables.",
                        "A relationship where the value of one attribute uniquely determines the value of another.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 2
                },
                {
                    "id": 131,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 132,
                    "question": "What is a 'superkey'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "A set of attributes that uniquely identifies a record.",
                        "A key that links two tables together."
                    ],
                    "correct": 3
                },
                {
                    "id": 133,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 134,
                    "question": "Which normal form requires that every determinant is a candidate key?",
                    "options": [
                        "2NF.",
                        "3NF.",
                        "BCNF.",
                        "4NF."
                    ],
                    "correct": 3
                },
                {
                    "id": 135,
                    "question": "What is an 'update anomaly'?",
                    "options": [
                        "The inability to add a new record to a table.",
                        "The inability to delete a record from a table.",
                        "The need to update multiple rows to change a single piece of data.",
                        "A query that takes too long to execute."
                    ],
                    "correct": 3
                },
                {
                    "id": 136,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 137,
                    "question": "Which of the following is a disadvantage of a denormalized database?",
                    "options": [
                        "Faster data retrieval for reporting and queries.",
                        "Increased storage space due to data redundancy.",
                        "Higher data integrity.",
                        "Increased complexity of joins."
                    ],
                    "correct": 2
                },
                {
                    "id": 138,
                    "question": "The process of moving from 2NF to 3NF involves the elimination of which type of dependency?",
                    "options": [
                        "Partial dependency.",
                        "Transitive dependency.",
                        "Multivalued dependency.",
                        "Join dependency."
                    ],
                    "correct": 2
                },
                {
                    "id": 139,
                    "question": "What is the process of breaking down a large table into multiple smaller, related tables called?",
                    "options": [
                        "Denormalization.",
                        "Decomposition.",
                        "Join operation.",
                        "Aggregation."
                    ],
                    "correct": 2
                },
                {
                    "id": 140,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 141,
                    "question": "When a table has a composite primary key, which of the following is a primary concern for normalization?",
                    "options": [
                        "Transitive dependencies.",
                        "Multivalued dependencies.",
                        "Partial dependencies.",
                        "Non-atomic values."
                    ],
                    "correct": 3
                },
                {
                    "id": 142,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 143,
                    "question": "What is a 'foreign key' in the context of normalization?",
                    "options": [
                        "An attribute that uniquely identifies each record in a table.",
                        "An attribute that is part of a composite key.",
                        "An attribute that links a table to another table by referencing a primary key.",
                        "An attribute that has a transitive dependency."
                    ],
                    "correct": 3
                },
                {
                    "id": 144,
                    "question": "What is the primary purpose of a 'functional dependency'?",
                    "options": [
                        "To define the data types for columns.",
                        "To identify relationships between different tables.",
                        "To describe the relationships between attributes within a single table.",
                        "To enforce data integrity constraints."
                    ],
                    "correct": 3
                },
                {
                    "id": 145,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 146,
                    "question": "Which of the following is an example of a transitive dependency?",
                    "options": [
                        "A(StudentID) -> B(StudentName)",
                        "A(StudentID, CourseID) -> B(CourseName)",
                        "A(AuthorID) -> B(BookTitle) and A(AuthorID) -> C(AuthorNationality)",
                        "A(StudentID) -> B(City) and B(City) -> C(ZipCode)"
                    ],
                    "correct": 4
                },
                {
                    "id": 147,
                    "question": "What is the key benefit of normalizing a database to 3NF?",
                    "options": [
                        "It removes all data redundancy.",
                        "It eliminates insertion, update, and deletion anomalies related to transitive dependencies.",
                        "It makes the database faster.",
                        "It eliminates all forms of functional dependencies."
                    ],
                    "correct": 2
                },
                {
                    "id": 148,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 149,
                    "question": "A relation that is in BCNF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "1NF, 2NF, and 3NF",
                        "3NF, but not necessarily 1NF or 2NF",
                        "None, they are independent."
                    ],
                    "correct": 2
                },
                {
                    "id": 150,
                    "question": "What is a 'candidate key'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "An attribute that is a foreign key in another table.",
                        "A non-prime attribute."
                    ],
                    "correct": 2
                },
                {
                    "id": 151,
                    "question": "What is a 'transitive dependency'?",
                    "options": [
                        "A dependency where a non-key attribute depends on another non-key attribute.",
                        "A dependency that involves more than one table.",
                        "A dependency on only a part of the composite primary key.",
                        "A dependency on a foreign key."
                    ],
                    "correct": 1
                },
                {
                    "id": 152,
                    "question": "Which of the following is NOT a benefit of a normalized database?",
                    "options": [
                        "Elimination of redundant data.",
                        "Better data integrity.",
                        "Reduced storage space.",
                        "Simplified schema for data entry."
                    ],
                    "correct": 4
                },
                {
                    "id": 153,
                    "question": "The process of decomposition is used to achieve which of the following?",
                    "options": [
                        "A lossless join decomposition.",
                        "A single, large table.",
                        "A table with repeating groups.",
                        "A table with no functional dependencies."
                    ],
                    "correct": 1
                },
                {
                    "id": 154,
                    "question": "What is the term for a problem where a table cannot accept a new row because it requires an attribute value that doesn't yet exist?",
                    "options": [
                        "Update anomaly.",
                        "Deletion anomaly.",
                        "Insertion anomaly.",
                        "Redundancy anomaly."
                    ],
                    "correct": 3
                },
                {
                    "id": 155,
                    "question": "What is the purpose of normalizing a database to 3NF?",
                    "options": [
                        "To remove partial dependencies.",
                        "To ensure that every attribute is atomic.",
                        "To eliminate transitive dependencies.",
                        "To make every determinant a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 156,
                    "question": "What is the main advantage of normalizing a database?",
                    "options": [
                        "Faster queries and reports.",
                        "Better data integrity and reduced redundancy.",
                        "Simpler data entry.",
                        "Less storage space is used."
                    ],
                    "correct": 2
                },
                {
                    "id": 157,
                    "question": "If a relation has no non-key attributes, what is the highest normal form it can be in?",
                    "options": [
                        "1NF.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 4
                },
                {
                    "id": 158,
                    "question": "What is the purpose of normalizing a database to BCNF?",
                    "options": [
                        "To eliminate partial dependencies.",
                        "To ensure every determinant is a candidate key.",
                        "To remove transitive dependencies.",
                        "To make all attributes atomic."
                    ],
                    "correct": 2
                },
                {
                    "id": 159,
                    "question": "What is the key characteristic of a 'superkey'?",
                    "options": [
                        "It is a single attribute that uniquely identifies a record.",
                        "It is a set of attributes that uniquely identifies a record.",
                        "It is a foreign key.",
                        "It is a minimal superkey."
                    ],
                    "correct": 2
                },
                {
                    "id": 160,
                    "question": "Which of the following describes a 'functional dependency'?",
                    "options": [
                        "A relationship where the value of one attribute uniquely determines the value of another attribute.",
                        "A many-to-many relationship between two tables.",
                        "A relationship where multiple attributes have the same value.",
                        "A one-to-one relationship between two tables."
                    ],
                    "correct": 1
                },
                {
                    "id": 161,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 162,
                    "question": "What is a 'normal form'?",
                    "options": [
                        "A standard for database performance.",
                        "A state of a relation that has been designed to minimize redundancy.",
                        "A type of database software.",
                        "A language for querying databases."
                    ],
                    "correct": 2
                },
                {
                    "id": 163,
                    "question": "Which of the following is an example of an insertion anomaly?",
                    "options": [
                        "A student's address is stored in multiple records, and one of them is updated but the others are not.",
                        "A course cannot be added to a table unless a student is enrolled in it.",
                        "A professor's information is deleted when the last student they taught is deleted from a class table.",
                        "A query that retrieves a student's record takes a long time to run."
                    ],
                    "correct": 2
                },
                {
                    "id": 164,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 165,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 166,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 167,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 168,
                    "question": "What is a 'lossless join decomposition'?",
                    "options": [
                        "A decomposition where a new table is created, but data is lost.",
                        "A decomposition that cannot be joined back together.",
                        "A decomposition where no information is lost when the tables are joined back together.",
                        "A decomposition that is not in any normal form."
                    ],
                    "correct": 3
                },
                {
                    "id": 169,
                    "question": "What is the primary goal of the normalization process?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 170,
                    "question": "Which of the following is a key characteristic of First Normal Form (1NF)?",
                    "options": [
                        "All non-key attributes must depend on the primary key.",
                        "There are no partial dependencies.",
                        "Each column contains only atomic, single-valued data.",
                        "Every column in a table has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 171,
                    "question": "A relation is in 2NF if it is in 1NF and what other condition is met?",
                    "options": [
                        "It has no transitive dependencies.",
                        "All non-key attributes are fully functionally dependent on the primary key.",
                        "It has no multi-valued attributes.",
                        "Every determinant is a candidate key."
                    ],
                    "correct": 2
                },
                {
                    "id": 172,
                    "question": "What is the primary goal of the normalization process in a relational database?",
                    "options": [
                        "To increase query execution time.",
                        "To reduce data redundancy and improve data integrity.",
                        "To convert the database from a relational model to a NoSQL model.",
                        "To create a flexible schema that can store any type of data."
                    ],
                    "correct": 2
                },
                {
                    "id": 173,
                    "question": "What is the key difference between 3NF and Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "BCNF allows transitive dependencies, while 3NF does not.",
                        "In BCNF, every determinant must be a candidate key.",
                        "BCNF requires all attributes to be atomic.",
                        "3NF is a stricter form than BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 174,
                    "question": "Which of the following can lead to a deletion anomaly?",
                    "options": [
                        "A table that is not in 1NF.",
                        "A table with non-key attributes that are not fully dependent on the primary key.",
                        "A table with no foreign keys.",
                        "A table with a single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 175,
                    "question": "What kind of dependency is eliminated in Third Normal Form (3NF)?",
                    "options": [
                        "Partial dependency",
                        "Multivalued dependency",
                        "Join dependency",
                        "Transitive dependency"
                    ],
                    "correct": 4
                },
                {
                    "id": 176,
                    "question": "A table that is in 3NF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "2NF and BCNF",
                        "1NF and 2NF",
                        "None, they are independent."
                    ],
                    "correct": 3
                },
                {
                    "id": 177,
                    "question": "What is the key benefit of achieving Second Normal Form (2NF)?",
                    "options": [
                        "Eliminating all data redundancy.",
                        "Making all attributes atomic.",
                        "Eliminating update, insertion, and deletion anomalies caused by partial dependencies.",
                        "Ensuring every determinant is a candidate key."
                    ],
                    "correct": 3
                },
                {
                    "id": 178,
                    "question": "What is the main reason for not normalizing a database beyond a certain point?",
                    "options": [
                        "Normalization always leads to a slower database.",
                        "It becomes too difficult to back up the data.",
                        "The increase in the number of tables can lead to complex and slow queries.",
                        "Normalization only applies to small databases."
                    ],
                    "correct": 3
                },
                {
                    "id": 179,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 180,
                    "question": "Which of the following is a disadvantage of a denormalized database?",
                    "options": [
                        "Faster data retrieval for reporting and queries.",
                        "Increased storage space due to data redundancy.",
                        "Higher data integrity.",
                        "Increased complexity of joins."
                    ],
                    "correct": 2
                },
                {
                    "id": 181,
                    "question": "What is a 'partial dependency'?",
                    "options": [
                        "When a non-key attribute depends on another non-key attribute.",
                        "When an attribute depends on a part of a composite primary key.",
                        "When an attribute depends on the entire primary key.",
                        "When an attribute has a repeating group."
                    ],
                    "correct": 2
                },
                {
                    "id": 182,
                    "question": "What is a 'superkey'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "A set of attributes that uniquely identifies a record.",
                        "A key that links two tables together."
                    ],
                    "correct": 3
                },
                {
                    "id": 183,
                    "question": "Which normal form requires that every determinant is a candidate key?",
                    "options": [
                        "2NF.",
                        "3NF.",
                        "BCNF.",
                        "4NF."
                    ],
                    "correct": 3
                },
                {
                    "id": 184,
                    "question": "What is an 'update anomaly'?",
                    "options": [
                        "The inability to add a new record to a table.",
                        "The inability to delete a record from a table.",
                        "The need to update multiple rows to change a single piece of data.",
                        "A query that takes too long to execute."
                    ],
                    "correct": 3
                },
                {
                    "id": 185,
                    "question": "A table with a single-attribute primary key is automatically in what normal form?",
                    "options": [
                        "1NF only.",
                        "2NF.",
                        "3NF.",
                        "BCNF."
                    ],
                    "correct": 2
                },
                {
                    "id": 186,
                    "question": "The process of moving from 2NF to 3NF involves the elimination of which type of dependency?",
                    "options": [
                        "Partial dependency.",
                        "Transitive dependency.",
                        "Multivalued dependency.",
                        "Join dependency."
                    ],
                    "correct": 2
                },
                {
                    "id": 187,
                    "question": "What is the process of breaking down a large table into multiple smaller, related tables called?",
                    "options": [
                        "Denormalization.",
                        "Decomposition.",
                        "Join operation.",
                        "Aggregation."
                    ],
                    "correct": 2
                },
                {
                    "id": 188,
                    "question": "What is the main principle of Boyce-Codd Normal Form (BCNF)?",
                    "options": [
                        "Every non-key attribute is fully dependent on the primary key.",
                        "Every non-key attribute depends on a primary key, but not on another non-key attribute.",
                        "Every determinant is a candidate key.",
                        "Every attribute has a unique value."
                    ],
                    "correct": 3
                },
                {
                    "id": 189,
                    "question": "When a table has a composite primary key, which of the following is a primary concern for normalization?",
                    "options": [
                        "Transitive dependencies.",
                        "Multivalued dependencies.",
                        "Partial dependencies.",
                        "Non-atomic values."
                    ],
                    "correct": 3
                },
                {
                    "id": 190,
                    "question": "A table in 2NF is guaranteed to be in 3NF if it has what?",
                    "options": [
                        "A composite primary key.",
                        "No transitive dependencies.",
                        "No partial dependencies.",
                        "A single-attribute primary key."
                    ],
                    "correct": 2
                },
                {
                    "id": 191,
                    "question": "What is a 'foreign key' in the context of normalization?",
                    "options": [
                        "An attribute that uniquely identifies each record in a table.",
                        "An attribute that is part of a composite key.",
                        "An attribute that links a table to another table by referencing a primary key.",
                        "An attribute that has a transitive dependency."
                    ],
                    "correct": 3
                },
                {
                    "id": 192,
                    "question": "What is the primary purpose of a 'functional dependency'?",
                    "options": [
                        "To define the data types for columns.",
                        "To identify relationships between different tables.",
                        "To describe the relationships between attributes within a single table.",
                        "To enforce data integrity constraints."
                    ],
                    "correct": 3
                },
                {
                    "id": 193,
                    "question": "A table is said to have an 'insertion anomaly' when what happens?",
                    "options": [
                        "You cannot add a new record without also providing values for an unrelated attribute.",
                        "You can't insert data into a table because it violates a unique constraint.",
                        "You delete one record and unintentionally lose other data.",
                        "You need to update multiple rows to change a single piece of data."
                    ],
                    "correct": 1
                },
                {
                    "id": 194,
                    "question": "Which of the following is an example of a transitive dependency?",
                    "options": [
                        "A(StudentID) -> B(StudentName)",
                        "A(StudentID, CourseID) -> B(CourseName)",
                        "A(AuthorID) -> B(BookTitle) and A(AuthorID) -> C(AuthorNationality)",
                        "A(StudentID) -> B(City) and B(City) -> C(ZipCode)"
                    ],
                    "correct": 4
                },
                {
                    "id": 195,
                    "question": "What is the key benefit of normalizing a database to 3NF?",
                    "options": [
                        "It removes all data redundancy.",
                        "It eliminates insertion, update, and deletion anomalies related to transitive dependencies.",
                        "It makes the database faster.",
                        "It eliminates all forms of functional dependencies."
                    ],
                    "correct": 2
                },
                {
                    "id": 196,
                    "question": "A relation that is in BCNF is also always in what other normal forms?",
                    "options": [
                        "Only 2NF",
                        "1NF, 2NF, and 3NF",
                        "3NF, but not necessarily 1NF or 2NF",
                        "None, they are independent."
                    ],
                    "correct": 2
                },
                {
                    "id": 197,
                    "question": "What is a 'candidate key'?",
                    "options": [
                        "An attribute that uniquely identifies a record.",
                        "A minimal superkey.",
                        "An attribute that is a foreign key in another table.",
                        "A non-prime attribute."
                    ],
                    "correct": 2
                },
                {
                    "id": 198,
                    "question": "What is a 'transitive dependency'?",
                    "options": [
                        "A dependency where a non-key attribute depends on another non-key attribute.",
                        "A dependency that involves more than one table.",
                        "A dependency on only a part of the composite primary key.",
                        "A dependency on a foreign key."
                    ],
                    "correct": 1
                },
                {
                    "id": 199,
                    "question": "Which of the following is NOT a benefit of a normalized database?",
                    "options": [
                        "Elimination of redundant data.",
                        "Better data integrity.",
                        "Reduced storage space.",
                        "Simplified schema for data entry."
                    ],
                    "correct": 4
                },
                {
                    "id": 200,
                    "question": "The process of decomposition is used to achieve which of the following?",
                    "options": [
                        "A lossless join decomposition.",
                        "A single, large table.",
                        "A table with repeating groups.",
                        "A table with no functional dependencies."
                    ],
                    "correct": 1
                }
            ],
        },
        "NoSQL": {
            color: "#e76f51",
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

}
export default DBMS;