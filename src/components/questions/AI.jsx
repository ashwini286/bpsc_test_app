const AI = {
    color: "#1F2937",
    subtopics: {
        "Mix all questions": {
            color: "#F5275E",
            questions: [
                {
                    "id": 1,
                    "question": "Who is considered the 'Father of Artificial Intelligence'?",
                    "options": ["Geoffrey Hinton", "Alan Turing", "John McCarthy", "Marvin Minsky"],
                    "correct": 3
                },
                {
                    "id": 2,
                    "question": "Which of the following is a subfield of AI focused on enabling computers to learn from data without being explicitly programmed?",
                    "options": ["Robotics", "Natural Language Processing (NLP)", "Machine Learning", "Expert Systems"],
                    "correct": 3
                },
                {
                    "id": 3,
                    "question": "What is the primary goal of an 'expert system'?",
                    "options": ["To predict future trends", "To mimic the decision-making ability of a human expert", "To translate languages", "To design robots"],
                    "correct": 2
                },
                {
                    "id": 4,
                    "question": "The Turing Test is a method for determining if a machine can exhibit:",
                    "options": ["Consciousness", "Self-awareness", "Intelligent behavior indistinguishable from a human's", "Emotional intelligence"],
                    "correct": 3
                },
                {
                    "id": 5,
                    "question": "Which type of machine learning involves training a model with a labeled dataset?",
                    "options": ["Unsupervised Learning", "Reinforcement Learning", "Deep Learning", "Supervised Learning"],
                    "correct": 4
                },
                {
                    "id": 6,
                    "question": "What is a 'neuron' in the context of a neural network?",
                    "options": ["A biological cell", "A mathematical function that receives inputs and produces an output", "A unit of memory in a computer", "A type of sensor"],
                    "correct": 2
                },
                {
                    "id": 7,
                    "question": "Which of the following is a common application of Natural Language Processing (NLP)?",
                    "options": ["Image recognition", "Self-driving cars", "Spam filtering in email", "Genomic sequencing"],
                    "correct": 3
                },
                {
                    "id": 8,
                    "question": "What is a 'perceptron'?",
                    "options": ["A type of sensor", "A simple linear classifier, the building block of early neural networks", "A type of database", "A computer virus"],
                    "correct": 2
                },
                {
                    "id": 9,
                    "question": "Which AI search algorithm explores a tree or graph by expanding the most promising node first?",
                    "options": ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "A* Search", "Linear Search"],
                    "correct": 3
                },
                {
                    "id": 10,
                    "question": "What is the purpose of a 'training set' in machine learning?",
                    "options": ["To test the final performance of the model", "To provide data for the model to learn from", "To validate the model's parameters", "To store the final model"],
                    "correct": 2
                },
                {
                    "id": 11,
                    "question": "Which of the following is a primary challenge in building an AI that can understand human language?",
                    "options": ["Low computational power", "The existence of synonyms", "The ambiguity and context-dependency of language", "Lack of programming languages"],
                    "correct": 3
                },
                {
                    "id": 12,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset", "Learning by trial and error through rewards and penalties", "Learning to find hidden patterns in data", "Learning from a teacher"],
                    "correct": 2
                },
                {
                    "id": 13,
                    "question": "Which of the following is a characteristic of 'Unsupervised Learning'?",
                    "options": ["The model is trained with labeled data", "The model learns without any labeled output", "The model learns through a system of rewards", "The model requires human intervention at every step"],
                    "correct": 2
                },
                {
                    "id": 14,
                    "question": "In a neural network, what does a 'hidden layer' do?",
                    "options": ["It is the first layer to receive input", "It is the last layer to produce the output", "It is a layer between the input and output layers that processes the data", "It is a layer that is invisible to the programmer"],
                    "correct": 3
                },
                {
                    "id": 15,
                    "question": "Which of the following is a common application of 'Computer Vision'?",
                    "options": ["Speech recognition", "Predicting stock prices", "Medical image analysis", "Language translation"],
                    "correct": 3
                },
                {
                    "id": 16,
                    "question": "What is 'Deep Learning'?",
                    "options": ["A type of machine learning that uses shallow neural networks", "A subset of machine learning that uses multi-layered neural networks to learn from data", "A type of unsupervised learning", "A type of reinforcement learning"],
                    "correct": 2
                },
                {
                    "id": 17,
                    "question": "The primary purpose of a 'knowledge base' in an expert system is to:",
                    "options": ["Store the user's input", "Store data about the problem domain", "Store the rules and facts for problem-solving", "Store the results of a query"],
                    "correct": 3
                },
                {
                    "id": 18,
                    "question": "Which of the following is a component of a 'Robotics' system?",
                    "options": ["A compiler", "Sensors, actuators, and a control system", "A database management system", "A web browser"],
                    "correct": 2
                },
                {
                    "id": 19,
                    "question": "What is 'data mining'?",
                    "options": ["The process of collecting data from the internet", "The process of extracting valuable knowledge and patterns from large datasets", "The process of storing data in a database", "The process of deleting unwanted data"],
                    "correct": 2
                },
                {
                    "id": 20,
                    "question": "In the context of AI, 'heuristic search' is a technique that:",
                    "options": ["Guarantees finding the optimal solution", "Uses a rule of thumb to guide the search towards a probable solution", "Randomly explores the search space", "Requires no knowledge about the problem"],
                    "correct": 2
                },
                {
                    "id": 21,
                    "question": "Which programming language is famously associated with early AI development?",
                    "options": ["Python", "Java", "Lisp", "C++"],
                    "correct": 3
                },
                {
                    "id": 22,
                    "question": "What is the main purpose of a 'decision tree' in machine learning?",
                    "options": ["To categorize data based on a set of rules in a tree-like structure", "To predict continuous values", "To find hidden clusters in data", "To learn from a system of rewards"],
                    "correct": 1
                },
                {
                    "id": 23,
                    "question": "What is a 'chatbot' an example of?",
                    "options": ["Computer Vision", "Reinforcement Learning", "Natural Language Processing (NLP)", "Robotics"],
                    "correct": 3
                },
                {
                    "id": 24,
                    "question": "Which of the following is a common 'loss function' used in machine learning?",
                    "options": ["Activation function", "Sigmoid function", "Mean Squared Error (MSE)", "Relu function"],
                    "correct": 3
                },
                {
                    "id": 25,
                    "question": "What is the 'inference' phase in machine learning?",
                    "options": ["The process of training the model", "The process of deploying the model", "The process of using a trained model to make predictions on new data", "The process of cleaning the data"],
                    "correct": 3
                },
                {
                    "id": 26,
                    "question": "The concept of 'Artificial General Intelligence' (AGI) refers to an AI that:",
                    "options": ["Can only perform a single, specific task", "Can perform any intellectual task that a human can", "Can only play games like chess", "Is more powerful than a human brain"],
                    "correct": 2
                },
                {
                    "id": 27,
                    "question": "What is a 'neural network' inspired by?",
                    "options": ["The human brain", "The internet", "The solar system", "Plant growth"],
                    "correct": 1
                },
                {
                    "id": 28,
                    "question": "Which of the following is a limitation of a simple 'perceptron'?",
                    "options": ["It can solve non-linear problems", "It can only be used for classification", "It cannot solve non-linearly separable problems", "It requires a large amount of data"],
                    "correct": 3
                },
                {
                    "id": 29,
                    "question": "What is 'robotics'?",
                    "options": ["The science of building and programming robots", "A type of expert system", "The study of computer viruses", "The study of human brain"],
                    "correct": 1
                },
                {
                    "id": 30,
                    "question": "What is the primary role of an 'actuator' in a robotics system?",
                    "options": ["To sense the environment", "To provide motion or control a mechanism", "To process information", "To store data"],
                    "correct": 2
                },
                {
                    "id": 31,
                    "question": "The 'ELIZA' program, created in the 1960s, was an early example of:",
                    "options": ["Computer vision", "An expert system", "A chatbot that mimics a psychotherapist", "A self-driving car"],
                    "correct": 3
                },
                {
                    "id": 32,
                    "question": "In machine learning, what is 'overfitting'?",
                    "options": ["When a model performs well on training data but poorly on unseen data", "When a model is too simple to capture the underlying patterns in the data", "When the model's accuracy is too high", "When a model is trained on a small dataset"],
                    "correct": 1
                },
                {
                    "id": 33,
                    "question": "What is the 'backpropagation' algorithm used for in neural networks?",
                    "options": ["To determine the number of layers in a network", "To calculate the error and adjust the weights of the network", "To activate the neurons", "To split the data into training and testing sets"],
                    "correct": 2
                },
                {
                    "id": 34,
                    "question": "Which of the following is a challenge in 'reinforcement learning'?",
                    "options": ["The need for labeled data", "The 'exploration vs. exploitation' dilemma", "The risk of overfitting", "The requirement for a teacher"],
                    "correct": 2
                },
                {
                    "id": 35,
                    "question": "What is 'sentiment analysis'?",
                    "options": ["Analyzing a person's emotions through facial expressions", "Analyzing a person's voice tone", "Using NLP to determine the emotional tone or opinion in a piece of text", "Detecting objects in an image"],
                    "correct": 3
                },
                {
                    "id": 36,
                    "question": "Which of the following is a primary characteristic of a 'knowledge-based system'?",
                    "options": ["It learns from data automatically", "It relies on a pre-programmed set of rules and facts", "It uses trial and error to learn", "It is only used for image recognition"],
                    "correct": 2
                },
                {
                    "id": 37,
                    "question": "What is the 'feature extraction' step in machine learning?",
                    "options": ["The process of creating new features from existing ones to improve model performance", "The process of removing irrelevant features from the dataset", "The process of selecting the best features for a model", "The process of training the model"],
                    "correct": 1
                },
                {
                    "id": 38,
                    "question": "Which of the following is an example of an 'agent' in AI?",
                    "options": ["A database", "A sensor", "A program that perceives its environment and takes actions to maximize its performance", "A simple computer file"],
                    "correct": 3
                },
                {
                    "id": 39,
                    "question": "What is 'Robotics Process Automation' (RPA)?",
                    "options": ["The use of physical robots to perform tasks", "The use of software robots to automate repetitive digital tasks", "The use of AI to analyze data", "The use of robots to build other robots"],
                    "correct": 2
                },
                {
                    "id": 40,
                    "question": "The concept of 'Expert System' is most closely related to:",
                    "options": ["Supervised Learning", "Knowledge-based AI", "Unsupervised Learning", "Reinforcement Learning"],
                    "correct": 2
                },
                {
                    "id": 41,
                    "question": "Which of the following is a common application of 'unsupervised learning'?",
                    "options": ["Image classification", "Spam detection", "Customer segmentation", "Stock price prediction"],
                    "correct": 3
                },
                {
                    "id": 42,
                    "question": "What is 'predictive modeling'?",
                    "options": ["The process of creating a model that describes historical data", "The process of using statistical techniques to predict future outcomes", "The process of cleaning data", "The process of building a new database"],
                    "correct": 2
                },
                {
                    "id": 43,
                    "question": "In AI, 'reasoning' is the ability to:",
                    "options": ["Recognize objects in an image", "Understand natural language", "Draw conclusions from facts and rules", "Learn from labeled data"],
                    "correct": 3
                },
                {
                    "id": 44,
                    "question": "Which of the following is a challenge in 'Computer Vision'?",
                    "options": ["The lack of labeled data", "The inability to perform calculations", "The need to handle variations in lighting, pose, and occlusion", "The inability to connect to the internet"],
                    "correct": 3
                },
                {
                    "id": 45,
                    "question": "What is 'Natural Language Generation' (NLG)?",
                    "options": ["The process of a computer understanding human language", "The process of a computer translating one language to another", "The process of a computer generating human-like text from data", "The process of a computer recognizing speech"],
                    "correct": 3
                },
                {
                    "id": 46,
                    "question": "Which of the following is an ethical consideration in AI development?",
                    "options": ["Overfitting", "Bias in training data", "The type of programming language used", "The speed of the processor"],
                    "correct": 2
                },
                {
                    "id": 47,
                    "question": "What is 'symbolic AI'?",
                    "options": ["AI based on deep learning", "AI that represents knowledge using symbols and rules", "AI that learns from a system of rewards", "AI that is used for image recognition"],
                    "correct": 2
                },
                {
                    "id": 48,
                    "question": "The primary difference between a 'bot' and a 'robot' is:",
                    "options": ["A bot is a physical entity, a robot is not.", "A bot is a software program, a robot is a physical machine.", "A bot can learn, a robot cannot.", "They are the same thing."],
                    "correct": 2
                },
                {
                    "id": 49,
                    "question": "In machine learning, what is a 'hyperparameter'?",
                    "options": ["A parameter that is learned by the model during training", "A parameter whose value is set before the training process begins", "A type of feature in the dataset", "A measure of the model's performance"],
                    "correct": 2
                },
                {
                    "id": 50,
                    "question": "Which of the following is a common application of 'predictive modeling'?",
                    "options": ["Spam detection", "Medical image analysis", "Generating human-like text", "Creating a knowledge base"],
                    "correct": 1
                },
                {
                    "id": 51,
                    "question": "What is the 'exploratory' phase in reinforcement learning?",
                    "options": ["The agent uses its current policy to make decisions to maximize rewards.", "The agent tries new actions to discover which ones are most effective.", "The agent learns from labeled data.", "The agent is given a set of predefined rules to follow."],
                    "correct": 2
                },
                {
                    "id": 52,
                    "question": "Which of the following is a benefit of 'Deep Learning'?",
                    "options": ["Requires less data than traditional machine learning", "Easily interpretable models", "Can automatically learn complex features from raw data", "Requires less computational power"],
                    "correct": 3
                },
                {
                    "id": 53,
                    "question": "The 'ELIZA effect' refers to:",
                    "options": ["The ability of an AI to pass the Turing Test.", "The tendency of people to over-attribute human-like qualities to a computer program.", "The ability of an AI to learn from a system of rewards.", "The ability of an AI to translate languages."],
                    "correct": 2
                },
                {
                    "id": 54,
                    "question": "What is a 'decision boundary' in a classification model?",
                    "options": ["The point where the model stops training.", "The line or surface that separates different classes of data.", "The maximum number of features a model can use.", "The line that separates training data from testing data."],
                    "correct": 2
                },
                {
                    "id": 55,
                    "question": "Which of the following is an example of an 'intelligent agent'?",
                    "options": ["A thermometer", "A search engine algorithm", "A simple calculator", "A spreadsheet"],
                    "correct": 2
                },
                {
                    "id": 56,
                    "question": "What is 'robotics'?",
                    "options": ["The science of building and programming robots.", "A type of expert system.", "The study of computer viruses.", "The study of human brain."],
                    "correct": 1
                },
                {
                    "id": 57,
                    "question": "What is the main purpose of 'data preprocessing' in machine learning?",
                    "options": ["To remove all data from the dataset.", "To prepare the raw data for analysis by cleaning and transforming it.", "To train the model.", "To test the model's accuracy."],
                    "correct": 2
                },
                {
                    "id": 58,
                    "question": "Which of the following is a common application of 'reinforcement learning'?",
                    "options": ["Image recognition", "Playing games like AlphaGo or chess", "Spam filtering", "Customer segmentation"],
                    "correct": 2
                },
                {
                    "id": 59,
                    "question": "What is 'computer vision'?",
                    "options": ["The field of AI that enables computers to interpret and understand visual data.", "The field of AI that deals with robots.", "The field of AI that deals with language.", "The field of AI that deals with data mining."],
                    "correct": 1
                },
                {
                    "id": 60,
                    "question": "The 'expert system' is based on which type of AI?",
                    "options": ["Supervised learning", "Knowledge-based AI", "Reinforcement learning", "Deep learning"],
                    "correct": 2
                },
                {
                    "id": 61,
                    "question": "Which of the following is a common use case for 'Natural Language Processing' (NLP)?",
                    "options": ["Image classification", "Sentiment analysis", "Self-driving cars", "Financial forecasting"],
                    "correct": 2
                },
                {
                    "id": 62,
                    "question": "In a neural network, what is an 'activation function'?",
                    "options": ["A function that calculates the error.", "A function that determines the output of a neuron based on its input.", "A function that splits the data.", "A function that adjusts the weights of the network."],
                    "correct": 2
                },
                {
                    "id": 63,
                    "question": "Which of the following is a key characteristic of 'unsupervised learning'?",
                    "options": ["The model is given a labeled output for each input.", "The model is given a system of rewards.", "The model finds hidden patterns or structures in unlabeled data.", "The model is given a set of rules to follow."],
                    "correct": 3
                },
                {
                    "id": 64,
                    "question": "What is 'Artificial General Intelligence' (AGI)?",
                    "options": ["AI that can only perform a single task.", "AI that is designed for a specific domain.", "AI that can understand, learn, and apply knowledge to solve any problem.", "AI that is more powerful than a human brain."],
                    "correct": 3
                },
                {
                    "id": 65,
                    "question": "The 'Turing Test' was proposed by Alan Turing to test a machine's ability to:",
                    "options": ["Translate languages", "Learn from data", "Exhibit intelligent behavior", "Control a robot"],
                    "correct": 3
                },
                {
                    "id": 66,
                    "question": "What is the 'knowledge acquisition' process in an expert system?",
                    "options": ["The process of gathering data from a database.", "The process of extracting, organizing, and storing knowledge from a human expert.", "The process of a model learning from labeled data.", "The process of a robot gathering information from its sensors."],
                    "correct": 2
                },
                {
                    "id": 67,
                    "question": "Which of the following is a component of 'robotics'?",
                    "options": ["An expert system", "A knowledge base", "Actuators", "A decision tree"],
                    "correct": 3
                },
                {
                    "id": 68,
                    "question": "What is 'predictive analysis'?",
                    "options": ["The process of describing historical data.", "The process of using statistical algorithms to identify patterns and predict future outcomes.", "The process of cleaning data.", "The process of building a new database."],
                    "correct": 2
                },
                {
                    "id": 69,
                    "question": "Which of the following is a common challenge in 'reinforcement learning'?",
                    "options": ["The need for a labeled dataset", "The issue of finding a balance between exploration and exploitation", "The risk of underfitting", "The need for a large amount of unlabeled data"],
                    "correct": 2
                },
                {
                    "id": 70,
                    "question": "What is the 'inference engine' in an expert system?",
                    "options": ["The component that stores the rules.", "The component that processes user queries.", "The component that makes decisions by applying the rules to the facts.", "The component that learns from data."],
                    "correct": 3
                },
                {
                    "id": 71,
                    "question": "Which of the following is a type of 'unsupervised learning' algorithm?",
                    "options": ["Linear Regression", "Decision Tree", "K-Means Clustering", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 72,
                    "question": "What is 'Natural Language Understanding' (NLU)?",
                    "options": ["The process of a computer generating human-like text.", "The process of a computer understanding the meaning and context of human language.", "The process of a computer translating one language to another.", "The process of a computer recognizing speech."],
                    "correct": 2
                },
                {
                    "id": 73,
                    "question": "Which of the following is a key characteristic of 'Deep Learning'?",
                    "options": ["It uses shallow neural networks.", "It relies on manual feature engineering.", "It uses multi-layered neural networks.", "It can only be used for supervised learning."],
                    "correct": 3
                },
                {
                    "id": 74,
                    "question": "In AI, 'reasoning' is the ability to:",
                    "options": ["Recognize objects in an image.", "Draw logical conclusions from facts and rules.", "Learn from data.", "Understand natural language."],
                    "correct": 2
                },
                {
                    "id": 75,
                    "question": "What is a 'feature vector' in machine learning?",
                    "options": ["A single feature in a dataset.", "A vector containing all the features of a single data instance.", "A type of loss function.", "A type of activation function."],
                    "correct": 2
                },
                {
                    "id": 76,
                    "question": "Which of the following is a component of a 'Robotics' system?",
                    "options": ["A knowledge base", "A decision tree", "A control system", "A simple database"],
                    "correct": 3
                },
                {
                    "id": 77,
                    "question": "The 'A*' search algorithm is known for being:",
                    "options": ["Brute-force and slow", "Only useful for small problems", "An informed search algorithm that is both complete and optimal", "A random search algorithm"],
                    "correct": 3
                },
                {
                    "id": 78,
                    "question": "What is 'Computational Linguistics'?",
                    "options": ["The scientific study of language using computers.", "The study of computer programming languages.", "The study of computer viruses.", "The study of robot movements."],
                    "correct": 1
                },
                {
                    "id": 79,
                    "question": "Which of the following is a primary ethical concern related to AI?",
                    "options": ["The cost of AI software.", "The potential for AI to cause job displacement.", "The speed of AI models.", "The color of the robot."],
                    "correct": 2
                },
                {
                    "id": 80,
                    "question": "What is 'Supervised Learning'?",
                    "options": ["A type of learning with labeled data.", "A type of learning with unlabeled data.", "A type of learning with rewards.", "A type of learning with no human intervention."],
                    "correct": 1
                },
                {
                    "id": 81,
                    "question": "Which of the following describes the 'bias-variance trade-off' in machine learning?",
                    "options": ["The trade-off between model simplicity and training time.", "The trade-off between model accuracy and memory usage.", "The trade-off between a model's ability to fit training data and its ability to generalize to new data.", "The trade-off between the number of features and the number of data points."],
                    "correct": 3
                },
                {
                    "id": 82,
                    "question": "What is 'dimensionality reduction'?",
                    "options": ["The process of converting a 2D image into 3D.", "The process of reducing the number of features or variables in a dataset.", "The process of adding more features to a dataset.", "The process of creating new data points."],
                    "correct": 2
                },
                {
                    "id": 83,
                    "question": "Which algorithm is a type of clustering and is used for unsupervised learning?",
                    "options": ["Linear Regression", "K-Means", "Support Vector Machine (SVM)", "Decision Tree"],
                    "correct": 2
                },
                {
                    "id": 84,
                    "question": "What is 'underfitting' in machine learning?",
                    "options": ["When a model is too complex and fits the training data too closely.", "When a model is too simple to capture the underlying patterns in the data.", "When a model performs well on both training and testing data.", "When a model is trained on a very large dataset."],
                    "correct": 2
                },
                {
                    "id": 85,
                    "question": "What is a 'Support Vector Machine' (SVM) primarily used for?",
                    "options": ["Regression tasks", "Clustering tasks", "Classification tasks", "Reinforcement learning"],
                    "correct": 3
                },
                {
                    "id": 86,
                    "question": "Which of the following is a common application of AI in healthcare?",
                    "options": ["Predicting stock market trends", "Automating assembly lines", "Diagnosing diseases from medical images", "Writing news articles"],
                    "correct": 3
                },
                {
                    "id": 87,
                    "question": "What is the primary role of a 'Reinforcement Learning Agent'?",
                    "options": ["To predict values based on labeled data.", "To find patterns in unlabeled data.", "To learn a policy for taking actions in an environment to maximize cumulative reward.", "To classify data into different categories."],
                    "correct": 3
                },
                {
                    "id": 88,
                    "question": "Which of the following is an example of 'Narrow AI' (or Weak AI)?",
                    "options": ["A self-aware, conscious robot.", "An AI that can perform any intellectual task a human can.", "A chess-playing computer program.", "An AI that can design other AIs."],
                    "correct": 3
                },
                {
                    "id": 89,
                    "question": "What is a 'Recurrent Neural Network' (RNN) especially good at?",
                    "options": ["Image classification", "Recognizing objects in a static image", "Processing sequential data like text or time-series data", "Finding hidden patterns in a single dataset"],
                    "correct": 3
                },
                {
                    "id": 90,
                    "question": "In a 'decision tree', what does a 'node' represent?",
                    "options": ["A final prediction", "An input feature to test", "The starting point of the tree", "A single data point"],
                    "correct": 2
                },
                {
                    "id": 91,
                    "question": "Which of the following is a key ethical concern regarding AI development?",
                    "options": ["The speed of AI algorithms.", "The potential for AI to be used for mass surveillance.", "The amount of data required for training.", "The programming language used for development."],
                    "correct": 2
                },
                {
                    "id": 92,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing", "Image and video analysis", "Predicting stock prices", "Generating text"],
                    "correct": 2
                },
                {
                    "id": 93,
                    "question": "Which of the following is a drawback of using a 'decision tree'?",
                    "options": ["It is difficult to interpret.", "It is prone to overfitting if not carefully pruned.", "It cannot handle categorical data.", "It requires a very large dataset."],
                    "correct": 2
                },
                {
                    "id": 94,
                    "question": "What is the primary goal of a 'recommender system'?",
                    "options": ["To predict future stock prices.", "To filter spam emails.", "To suggest items or content to users based on their preferences.", "To control a robot's movements."],
                    "correct": 3
                },
                {
                    "id": 95,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition.", "AI that generates new data, such as images, text, or music.", "AI that learns from a system of rewards.", "AI that makes predictions based on labeled data."],
                    "correct": 2
                },
                {
                    "id": 96,
                    "question": "In 'machine learning', what is a 'feature'?",
                    "options": ["A final output of the model.", "A characteristic or property of the data.", "A type of loss function.", "A programming language."],
                    "correct": 2
                },
                {
                    "id": 97,
                    "question": "Which of the following is an ethical consideration for 'facial recognition' technology?",
                    "options": ["The computational cost.", "The potential for misidentification and privacy infringement.", "The complexity of the algorithm.", "The color of the camera."],
                    "correct": 2
                },
                {
                    "id": 98,
                    "question": "What is 'Transfer Learning'?",
                    "options": ["A method for learning from unlabeled data.", "A technique where a model trained on one task is reused as a starting point for a model on a different but related task.", "A type of reinforcement learning.", "A method for creating new features from old ones."],
                    "correct": 2
                },
                {
                    "id": 99,
                    "question": "Which of the following is a type of 'unsupervised learning'?",
                    "options": ["Classification", "Regression", "Clustering", "Reinforcement"],
                    "correct": 3
                },
                {
                    "id": 100,
                    "question": "What is the 'validation set' used for in machine learning?",
                    "options": ["To train the model.", "To test the final performance of the model.", "To fine-tune the model's hyperparameters and evaluate different models during training.", "To store the final model."],
                    "correct": 3
                },
                {
                    "id": 101,
                    "question": "Which of the following is a characteristic of 'General AI' (Strong AI)?",
                    "options": ["It is limited to a single task.", "It can solve any intellectual task that a human can.", "It cannot reason or plan.", "It requires a massive amount of labeled data."],
                    "correct": 2
                },
                {
                    "id": 102,
                    "question": "In 'Natural Language Processing', what is 'tokenization'?",
                    "options": ["The process of converting text into a numeric format.", "The process of breaking down text into smaller units like words or phrases.", "The process of removing stopwords from text.", "The process of assigning a category to a piece of text."],
                    "correct": 2
                },
                {
                    "id": 103,
                    "question": "What is the purpose of 'Principal Component Analysis' (PCA)?",
                    "options": ["To find clusters in data.", "To reduce the dimensionality of a dataset while retaining most of the variance.", "To classify data into different categories.", "To predict continuous values."],
                    "correct": 2
                },
                {
                    "id": 104,
                    "question": "What is the primary goal of a 'Genetic Algorithm'?",
                    "options": ["To find a solution by mimicking the process of biological evolution.", "To learn from a labeled dataset.", "To find hidden patterns in data.", "To solve problems by trial and error."],
                    "correct": 1
                },
                {
                    "id": 105,
                    "question": "Which of the following is a common application of AI in finance?",
                    "options": ["Diagnosing diseases", "Creating robots", "Fraud detection", "Writing poems"],
                    "correct": 3
                },
                {
                    "id": 106,
                    "question": "What is a 'sentiment analysis' application often used for?",
                    "options": ["To predict stock prices", "To analyze customer reviews and social media comments", "To translate languages", "To recognize faces in images"],
                    "correct": 2
                },
                {
                    "id": 107,
                    "question": "In machine learning, what does 'AUC-ROC' stand for?",
                    "options": ["Average Under Curve - Random Output Classifier", "Area Under the Receiver Operating Characteristic curve", "Activation Under Control - Regression Optimization Curve", "Algorithm Used for Classification - Regression Output Curve"],
                    "correct": 2
                },
                {
                    "id": 108,
                    "question": "Which of the following is a type of 'Supervised Learning'?",
                    "options": ["Clustering", "Reinforcement Learning", "Classification", "Dimensionality Reduction"],
                    "correct": 3
                },
                {
                    "id": 109,
                    "question": "What is the primary purpose of a 'knowledge graph'?",
                    "options": ["To store large amounts of unstructured data.", "To represent a network of real-world entities and their relationships.", "To classify images.", "To predict future events."],
                    "correct": 2
                },
                {
                    "id": 110,
                    "question": "What is a 'Bayesian Network'?",
                    "options": ["A type of neural network.", "A probabilistic graphical model that represents a set of random variables and their conditional dependencies.", "A type of unsupervised learning algorithm.", "A type of reinforcement learning algorithm."],
                    "correct": 2
                },
                {
                    "id": 111,
                    "question": "What is 'robotics'?",
                    "options": ["The science of building and programming robots.", "A type of expert system.", "The study of computer viruses.", "The study of human brain."],
                    "correct": 1
                },
                {
                    "id": 112,
                    "question": "Which of the following is a key characteristic of 'Deep Learning'?",
                    "options": ["It relies on a single layer of neurons.", "It requires a minimal amount of data.", "It automatically learns features from raw data.", "It is a type of symbolic AI."],
                    "correct": 3
                },
                {
                    "id": 113,
                    "question": "What is the purpose of 'data augmentation' in machine learning?",
                    "options": ["To remove unnecessary data from a dataset.", "To increase the size and diversity of a training dataset by creating new variations of existing data.", "To find hidden patterns in data.", "To prepare data for analysis."],
                    "correct": 2
                },
                {
                    "id": 114,
                    "question": "What is 'Active Learning'?",
                    "options": ["A type of supervised learning where the model can ask for more data.", "A type of reinforcement learning.", "A type of unsupervised learning.", "A type of deep learning."],
                    "correct": 1
                },
                {
                    "id": 115,
                    "question": "Which of the following is a common application of AI in the education sector?",
                    "options": ["Automating factory processes.", "Personalized learning paths for students.", "Predicting weather patterns.", "Creating robots for manufacturing."],
                    "correct": 2
                },
                {
                    "id": 116,
                    "question": "What is 'computer vision'?",
                    "options": ["The field of AI that enables computers to interpret and understand visual data.", "The field of AI that deals with robots.", "The field of AI that deals with language.", "The field of AI that deals with data mining."],
                    "correct": 1
                },
                {
                    "id": 117,
                    "question": "Which of the following is a key challenge in 'Natural Language Understanding' (NLU)?",
                    "options": ["Lack of computational power.", "The inability to handle data.", "The ambiguity and context of human language.", "The need for a labeled dataset."],
                    "correct": 3
                },
                {
                    "id": 118,
                    "question": "What is a 'chatbot' an example of?",
                    "options": ["Computer Vision", "Reinforcement Learning", "Natural Language Processing (NLP)", "Robotics"],
                    "correct": 3
                },
                {
                    "id": 119,
                    "question": "The 'Turing Test' was proposed by Alan Turing to test a machine's ability to:",
                    "options": ["Translate languages", "Learn from data", "Exhibit intelligent behavior", "Control a robot"],
                    "correct": 3
                },
                {
                    "id": 120,
                    "question": "What is 'Supervised Learning'?",
                    "options": ["A type of learning with labeled data.", "A type of learning with unlabeled data.", "A type of learning with rewards.", "A type of learning with no human intervention."],
                    "correct": 1
                },
                {
                    "id": 121,
                    "question": "What is the primary purpose of 'Regularization' in machine learning?",
                    "options": ["To speed up the training process", "To prevent overfitting by adding a penalty for model complexity", "To improve model interpretability", "To increase the number of features"],
                    "correct": 2
                },
                {
                    "id": 122,
                    "question": "Which of the following is a key component of 'deep learning' models like neural networks?",
                    "options": ["A single-layer architecture", "The use of symbolic reasoning", "An 'activation function' within neurons", "Manual feature extraction"],
                    "correct": 3
                },
                {
                    "id": 123,
                    "question": "What is the 'confusion matrix' used for?",
                    "options": ["To find hidden clusters in data", "To visualize the performance of a classification model", "To plot the relationship between two variables", "To optimize a model's hyperparameters"],
                    "correct": 2
                },
                {
                    "id": 124,
                    "question": "In the context of AI, what is 'Explainable AI' (XAI)?",
                    "options": ["AI that is able to explain its reasoning and decisions to humans", "AI that can be used to teach humans", "AI that is designed to be very simple", "AI that can generate human-like text"],
                    "correct": 1
                },
                {
                    "id": 125,
                    "question": "Which of the following metrics measures the proportion of positive identifications that were actually correct?",
                    "options": ["Recall", "Precision", "Accuracy", "F1-Score"],
                    "correct": 2
                },
                {
                    "id": 126,
                    "question": "What is a 'Transformer' in the context of deep learning?",
                    "options": ["A type of sensor for robots", "A type of neural network architecture used primarily in NLP for handling sequential data", "A tool for data cleaning", "A type of database"],
                    "correct": 2
                },
                {
                    "id": 127,
                    "question": "What is 'algorithmic bias'?",
                    "options": ["A feature of an algorithm that makes it more efficient", "A systematic and repeatable error in a computer system that creates unfair outcomes", "A type of programming bug", "A method for improving a model's performance"],
                    "correct": 2
                },
                {
                    "id": 128,
                    "question": "Which of the following is an example of an 'ensemble method' in machine learning?",
                    "options": ["Linear Regression", "K-Means Clustering", "Random Forest", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 129,
                    "question": "What is 'transfer learning'?",
                    "options": ["Training a model from scratch on a new dataset", "Using a pre-trained model on a new, but related task", "Using a model for unsupervised learning", "Converting a model from one programming language to another"],
                    "correct": 2
                },
                {
                    "id": 130,
                    "question": "What is the primary role of 'computer vision'?",
                    "options": ["To process and understand human language", "To enable computers to interpret and understand visual information from the world", "To learn from a system of rewards and punishments", "To mimic human decision-making"],
                    "correct": 2
                },
                {
                    "id": 131,
                    "question": "In 'Natural Language Processing', what are 'word embeddings'?",
                    "options": ["The process of breaking down text into words", "The process of removing stopwords from text", "A way to represent words as numerical vectors, capturing their meaning and relationships", "A type of punctuation mark"],
                    "correct": 3
                },
                {
                    "id": 132,
                    "question": "What is a 'Generative Adversarial Network' (GAN)?",
                    "options": ["A model that learns to classify data", "A type of neural network used for time-series forecasting", "A system of two neural networks that compete against each other to generate new data", "A method for clustering data"],
                    "correct": 3
                },
                {
                    "id": 133,
                    "question": "Which of the following is a potential ethical issue with AI in hiring?",
                    "options": ["The high cost of the AI system", "The potential for the AI to perpetuate existing human biases", "The need for a labeled dataset", "The difficulty of explaining the AI's decision"],
                    "correct": 2
                },
                {
                    "id": 134,
                    "question": "What does a 'policy' represent in a 'Reinforcement Learning' model?",
                    "options": ["The set of rules for the training process", "The plan or strategy that the agent uses to determine its next action", "The reward or punishment the agent receives", "The environment in which the agent operates"],
                    "correct": 2
                },
                {
                    "id": 135,
                    "question": "What is 'Q-learning'?",
                    "options": ["A type of supervised learning", "A type of unsupervised learning", "A type of reinforcement learning that learns the value of actions in states", "A type of generative model"],
                    "correct": 3
                },
                {
                    "id": 136,
                    "question": "Which of the following is a primary benefit of using a 'GPU' (Graphics Processing Unit) for AI?",
                    "options": ["Its small size", "Its ability to perform thousands of parallel computations simultaneously, which is ideal for deep learning", "Its low power consumption", "Its ability to store large amounts of data"],
                    "correct": 2
                },
                {
                    "id": 137,
                    "question": "What is a 'Bayesian Network'?",
                    "options": ["A type of neural network", "A probabilistic graphical model representing dependencies among variables", "A type of unsupervised learning algorithm", "A type of search algorithm"],
                    "correct": 2
                },
                {
                    "id": 138,
                    "question": "The 'F1-Score' is the harmonic mean of which two metrics?",
                    "options": ["Accuracy and Precision", "Accuracy and Recall", "Precision and Recall", "Recall and Specificity"],
                    "correct": 3
                },
                {
                    "id": 139,
                    "question": "What is 'Sentiment Analysis'?",
                    "options": ["Analyzing a person's facial expressions", "Using NLP to determine the emotional tone or opinion in a piece of text", "Detecting objects in an image", "Predicting stock prices"],
                    "correct": 2
                },
                {
                    "id": 140,
                    "question": "Which of the following is a common application of AI in the education sector?",
                    "options": ["Diagnosing diseases", "Personalized learning and adaptive tutoring systems", "Automating factory processes", "Predicting weather patterns"],
                    "correct": 2
                },
                {
                    "id": 141,
                    "question": "What is 'Overfitting'?",
                    "options": ["When a model is too simple and fails to capture the data's complexity", "When a model is too complex and fits the training data too closely, performing poorly on new data", "When a model has too many features", "When a model is too accurate"],
                    "correct": 2
                },
                {
                    "id": 142,
                    "question": "What is the primary purpose of 'Batch Normalization' in deep learning?",
                    "options": ["To increase the size of the dataset", "To reduce the training time and stabilize the training process", "To remove irrelevant features", "To make the model more complex"],
                    "correct": 2
                },
                {
                    "id": 143,
                    "question": "What is 'Computer Vision'?",
                    "options": ["The field of AI that deals with robots", "The field of AI that enables computers to interpret and understand visual data", "The field of AI that deals with language", "The field of AI that deals with data mining"],
                    "correct": 2
                },
                {
                    "id": 144,
                    "question": "Which AI search algorithm uses a heuristic to guide its search?",
                    "options": ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Linear Search", "A* Search"],
                    "correct": 4
                },
                {
                    "id": 145,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human", "A test to measure a computer's processing speed", "A test to measure a model's accuracy"],
                    "correct": 2
                },
                {
                    "id": 146,
                    "question": "Which of the following is a common application of 'Unsupervised Learning'?",
                    "options": ["Spam detection", "Customer segmentation", "Image classification", "Stock price prediction"],
                    "correct": 2
                },
                {
                    "id": 147,
                    "question": "What is a 'neural network' inspired by?",
                    "options": ["The human brain", "The internet", "The solar system", "Plant growth"],
                    "correct": 1
                },
                {
                    "id": 148,
                    "question": "What is 'Dropout' used for in a neural network?",
                    "options": ["To add more layers to the network", "To increase the learning rate", "To prevent overfitting by randomly 'dropping' neurons during training", "To increase the network's size"],
                    "correct": 3
                },
                {
                    "id": 149,
                    "question": "Which of the following is an example of an AI application in agriculture?",
                    "options": ["Algorithmic trading", "Disease detection in plants from images", "Personalized recommendations on an e-commerce site", "Creating chatbots for customer service"],
                    "correct": 2
                },
                {
                    "id": 150,
                    "question": "What is 'Supervised Learning'?",
                    "options": ["Learning from a labeled dataset", "Learning from an unlabeled dataset", "Learning from a system of rewards and punishments", "Learning by creating new data"],
                    "correct": 1
                },
                {
                    "id": 151,
                    "question": "What does 'NLP' stand for?",
                    "options": ["Network Learning Protocol", "Natural Language Processing", "Neural Logic Program", "Natural Learning Platform"],
                    "correct": 2
                },
                {
                    "id": 152,
                    "question": "What is 'AI safety'?",
                    "options": ["Ensuring AI systems are not misused and do not cause unintended harm", "Protecting AI systems from hackers", "Making sure AI systems are fast and efficient", "A subfield of AI that deals with robotics"],
                    "correct": 1
                },
                {
                    "id": 153,
                    "question": "What is 'Machine Learning'?",
                    "options": ["A subfield of AI focused on building physical robots", "A subfield of AI focused on creating systems that can learn from data", "A subfield of AI focused on symbolic reasoning", "A subfield of AI focused on generating new data"],
                    "correct": 2
                },
                {
                    "id": 154,
                    "question": "Which of the following is a key component of 'deep learning' models like neural networks?",
                    "options": ["A single-layer architecture", "The use of symbolic reasoning", "An 'activation function' within neurons", "Manual feature extraction"],
                    "correct": 3
                },
                {
                    "id": 155,
                    "question": "Which of the following is an example of 'Reinforcement Learning'?",
                    "options": ["Spam filtering", "A self-driving car learning to navigate a road", "Image classification", "Customer segmentation"],
                    "correct": 2
                },
                {
                    "id": 156,
                    "question": "What is a 'Loss Function'?",
                    "options": ["A function that measures the amount of data lost during training", "A function that measures the model's accuracy", "A function that calculates the error between the predicted and actual output", "A function that determines the model's complexity"],
                    "correct": 3
                },
                {
                    "id": 157,
                    "question": "In a 'Decision Tree', what does an 'internal node' represent?",
                    "options": ["A final decision or prediction", "A test on an attribute or feature", "The end of the tree", "The input data"],
                    "correct": 2
                },
                {
                    "id": 158,
                    "question": "Which of the following is a common ethical concern regarding AI and unemployment?",
                    "options": ["AI models requiring too much data", "AI systems potentially replacing human jobs", "The cost of AI software", "The speed of AI algorithms"],
                    "correct": 2
                },
                {
                    "id": 159,
                    "question": "What is 'data mining'?",
                    "options": ["The process of collecting data from the internet", "The process of extracting valuable knowledge and patterns from large datasets", "The process of storing data in a database", "The process of deleting unwanted data"],
                    "correct": 2
                },
                {
                    "id": 160,
                    "question": "What is a 'chatbot'?",
                    "options": ["A type of robot that can walk and talk", "An AI program that conducts conversations via text or voice", "A program that manages a database", "A program that translates languages"],
                    "correct": 2
                },
                {
                    "id": 161,
                    "question": "What is 'Natural Language Understanding' (NLU)?",
                    "options": ["The process of a computer generating human-like text", "The process of a computer understanding the meaning and context of human language", "The process of a computer translating one language to another", "The process of a computer recognizing speech"],
                    "correct": 2
                },
                {
                    "id": 162,
                    "question": "What is a 'robot'?",
                    "options": ["A software program that automates tasks", "A physical machine that can be programmed to carry out a complex series of actions automatically", "A type of expert system", "A type of AI that learns from data"],
                    "correct": 2
                },
                {
                    "id": 163,
                    "question": "Which of the following is a drawback of a simple 'perceptron'?",
                    "options": ["It can solve non-linear problems", "It cannot solve non-linearly separable problems", "It can only be used for classification", "It requires a large amount of data"],
                    "correct": 2
                },
                {
                    "id": 164,
                    "question": "What is a 'Recurrent Neural Network' (RNN) especially good at?",
                    "options": ["Image classification", "Processing sequential data like text or time-series data", "Finding hidden patterns in a single dataset", "Generating new images"],
                    "correct": 2
                },
                {
                    "id": 165,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition", "AI that generates new data, such as images, text, or music", "AI that learns from a system of rewards", "AI that makes predictions based on labeled data"],
                    "correct": 2
                },
                {
                    "id": 166,
                    "question": "What is the primary purpose of a 'knowledge base' in an expert system?",
                    "options": ["To store the user's input", "To store data about the problem domain", "To store the rules and facts for problem-solving", "To store the results of a query"],
                    "correct": 3
                },
                {
                    "id": 167,
                    "question": "What is a 'Computer Vision' application often used for?",
                    "options": ["Spam filtering", "Medical image analysis", "Generating text", "Language translation"],
                    "correct": 2
                },
                {
                    "id": 168,
                    "question": "What is the 'inference' phase in machine learning?",
                    "options": ["The process of training the model", "The process of deploying the model", "The process of using a trained model to make predictions on new data", "The process of cleaning the data"],
                    "correct": 3
                },
                {
                    "id": 169,
                    "question": "What is a 'Bayesian Network'?",
                    "options": ["A type of neural network", "A probabilistic graphical model representing dependencies among variables", "A type of unsupervised learning algorithm", "A type of search algorithm"],
                    "correct": 2
                },
                {
                    "id": 170,
                    "question": "What is 'Active Learning'?",
                    "options": ["A type of supervised learning where the model can ask for more data to be labeled", "A type of reinforcement learning", "A type of unsupervised learning", "A type of deep learning"],
                    "correct": 1
                },
                {
                    "id": 171,
                    "question": "What is a 'support vector machine' (SVM) primarily used for?",
                    "options": ["Regression tasks", "Clustering tasks", "Classification tasks", "Reinforcement learning"],
                    "correct": 3
                },
                {
                    "id": 172,
                    "question": "Which of the following is an example of an AI application in the finance sector?",
                    "options": ["Predicting weather patterns", "Fraud detection", "Creating robots for manufacturing", "Spam filtering"],
                    "correct": 2
                },
                {
                    "id": 173,
                    "question": "What is 'dimensionality reduction'?",
                    "options": ["The process of converting a 2D image into 3D", "The process of reducing the number of features or variables in a dataset", "The process of adding more features to a dataset", "The process of creating new data points"],
                    "correct": 2
                },
                {
                    "id": 174,
                    "question": "What is a 'decision tree'?",
                    "options": ["A type of neural network", "A model that classifies data based on a series of questions in a tree-like structure", "A type of database", "A type of expert system"],
                    "correct": 2
                },
                {
                    "id": 175,
                    "question": "In AI, what does 'reasoning' refer to?",
                    "options": ["Recognizing objects in an image", "Drawing logical conclusions from facts and rules", "Learning from data", "Understanding natural language"],
                    "correct": 2
                },
                {
                    "id": 176,
                    "question": "Which of the following is a type of 'unsupervised learning' algorithm?",
                    "options": ["Linear Regression", "Decision Tree", "K-Means Clustering", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 177,
                    "question": "What is the primary purpose of 'Reinforcement Learning'?",
                    "options": ["To predict values based on labeled data", "To find patterns in unlabeled data", "To learn a policy for taking actions to maximize cumulative rewards", "To classify data into different categories"],
                    "correct": 3
                },
                {
                    "id": 178,
                    "question": "What is a 'Generative AI' model often used for?",
                    "options": ["Spam filtering", "Creating realistic images and videos", "Predicting stock prices", "Diagnosing diseases"],
                    "correct": 2
                },
                {
                    "id": 179,
                    "question": "Which of the following is a common application of AI in logistics?",
                    "options": ["Medical diagnosis", "Route optimization for delivery trucks", "Language translation", "Sentiment analysis"],
                    "correct": 2
                },
                {
                    "id": 180,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing", "Image and video analysis", "Predicting stock prices", "Generating text"],
                    "correct": 2
                },
                {
                    "id": 181,
                    "question": "The 'F1-Score' is particularly useful when dealing with:",
                    "options": ["Balanced datasets", "Datasets with a high number of features", "Imbalanced datasets, where one class is much more frequent than others", "Datasets with no outliers"],
                    "correct": 3
                },
                {
                    "id": 182,
                    "question": "What is 'Computer Vision'?",
                    "options": ["The field of AI that deals with robots", "The field of AI that enables computers to interpret and understand visual data", "The field of AI that deals with language", "The field of AI that deals with data mining"],
                    "correct": 2
                },
                {
                    "id": 183,
                    "question": "What is 'bias' in a machine learning model?",
                    "options": ["A systematic error in the model's predictions due to an oversimplification of the model", "A random error in the model's predictions", "A measure of the model's complexity", "A type of parameter that is learned during training"],
                    "correct": 1
                },
                {
                    "id": 184,
                    "question": "Which of the following is a key characteristic of 'Generative AI'?",
                    "options": ["It can only classify data.", "It can create new, original content.", "It is only used for supervised learning.", "It is only used for reinforcement learning."],
                    "correct": 2
                },
                {
                    "id": 185,
                    "question": "What is the primary purpose of a 'search algorithm' in AI?",
                    "options": ["To find the most efficient way to perform a query", "To predict future outcomes", "To find a path or solution within a given problem space", "To classify data"],
                    "correct": 3
                },
                {
                    "id": 186,
                    "question": "Which of the following is a potential ethical concern regarding AI and privacy?",
                    "options": ["AI models being too simple", "The use of AI for surveillance and data collection without consent", "The cost of AI hardware", "The lack of labeled data"],
                    "correct": 2
                },
                {
                    "id": 187,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human", "A test to measure a computer's processing speed", "A test to measure a model's accuracy"],
                    "correct": 2
                },
                {
                    "id": 188,
                    "question": "What is a 'Q-table' in Q-learning?",
                    "options": ["A table that stores the rules for a system", "A table that maps states and actions to their Q-values", "A table that stores the data for a model", "A table that stores the model's parameters"],
                    "correct": 2
                },
                {
                    "id": 189,
                    "question": "Which of the following is an example of an AI application in the education sector?",
                    "options": ["Predicting stock prices", "Personalized learning paths for students", "Automating factory processes", "Spam filtering"],
                    "correct": 2
                },
                {
                    "id": 190,
                    "question": "What is a 'Recurrent Neural Network' (RNN) especially good at?",
                    "options": ["Image classification", "Processing sequential data like text or time-series data", "Finding hidden patterns in a single dataset", "Generating new images"],
                    "correct": 2
                },
                {
                    "id": 191,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset", "Learning by trial and error through rewards and penalties", "Learning to find hidden patterns in data", "Learning from a teacher"],
                    "correct": 2
                },
                {
                    "id": 192,
                    "question": "What does a 'policy' represent in a 'Reinforcement Learning' model?",
                    "options": ["The set of rules for the training process", "The plan or strategy that the agent uses to determine its next action", "The reward or punishment the agent receives", "The environment in which the agent operates"],
                    "correct": 2
                },
                {
                    "id": 193,
                    "question": "What is the primary purpose of 'Regularization' in machine learning?",
                    "options": ["To speed up the training process", "To prevent overfitting by adding a penalty for model complexity", "To improve model interpretability", "To increase the number of features"],
                    "correct": 2
                },
                {
                    "id": 194,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing", "Image and video analysis", "Predicting stock prices", "Generating text"],
                    "correct": 2
                },
                {
                    "id": 195,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition", "AI that generates new data, such as images, text, or music", "AI that learns from a system of rewards", "AI that makes predictions based on labeled data"],
                    "correct": 2
                },
                {
                    "id": 196,
                    "question": "What is the 'bias-variance trade-off'?",
                    "options": ["The trade-off between model simplicity and training time", "The trade-off between a model's ability to fit training data and its ability to generalize to new data", "The trade-off between model accuracy and memory usage", "The trade-off between the number of features and the number of data points"],
                    "correct": 2
                },
                {
                    "id": 197,
                    "question": "What is 'dimensionality reduction'?",
                    "options": ["The process of converting a 2D image into 3D", "The process of reducing the number of features or variables in a dataset", "The process of adding more features to a dataset", "The process of creating new data points"],
                    "correct": 2
                },
                {
                    "id": 198,
                    "question": "Which of the following is an example of an 'ensemble method' in machine learning?",
                    "options": ["Linear Regression", "K-Means Clustering", "Random Forest", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 199,
                    "question": "What is a 'Support Vector Machine' (SVM) primarily used for?",
                    "options": ["Regression tasks", "Clustering tasks", "Classification tasks", "Reinforcement learning"],
                    "correct": 3
                },
                {
                    "id": 200,
                    "question": "What is a 'Decision Tree'?",
                    "options": ["A type of neural network", "A model that classifies data based on a series of questions in a tree-like structure", "A type of database", "A type of expert system"],
                    "correct": 2
                },
                {
                    "id": 201,
                    "question": "What is the primary purpose of a 'Loss Function'?",
                    "options": ["To measure the model's accuracy", "To calculate the error between the predicted and actual output", "To determine the model's complexity", "To reduce the training time"],
                    "correct": 2
                },
                {
                    "id": 202,
                    "question": "What is a 'Generative Adversarial Network' (GAN)?",
                    "options": ["A model that learns to classify data", "A type of neural network used for time-series forecasting", "A system of two neural networks that compete against each other to generate new data", "A method for clustering data"],
                    "correct": 3
                },
                {
                    "id": 203,
                    "question": "Which of the following is a key component of 'deep learning' models?",
                    "options": ["The use of symbolic reasoning", "An 'activation function' within neurons", "Manual feature extraction", "Single-layer architecture"],
                    "correct": 2
                },
                {
                    "id": 204,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset", "Learning by trial and error through rewards and penalties", "Learning to find hidden patterns in data", "Learning from a teacher"],
                    "correct": 2
                },
                {
                    "id": 205,
                    "question": "What is 'overfitting' in machine learning?",
                    "options": ["When a model is too complex and fits the training data too closely, performing poorly on new data", "When a model is too simple to capture the underlying patterns in the data", "When a model's accuracy is too high", "When a model is trained on a small dataset"],
                    "correct": 1
                },
                {
                    "id": 206,
                    "question": "In the context of AI, what is 'Explainable AI' (XAI)?",
                    "options": ["AI that is able to explain its reasoning and decisions to humans", "AI that can be used to teach humans", "AI that is designed to be very simple", "AI that can generate human-like text"],
                    "correct": 1
                },
                {
                    "id": 207,
                    "question": "Which of the following metrics measures the proportion of positive identifications that were actually correct?",
                    "options": ["Recall", "Precision", "Accuracy", "F1-Score"],
                    "correct": 2
                },
                {
                    "id": 208,
                    "question": "What is a 'Transformer' in the context of deep learning?",
                    "options": ["A type of sensor for robots", "A type of neural network architecture used primarily in NLP for handling sequential data", "A tool for data cleaning", "A type of database"],
                    "correct": 2
                },
                {
                    "id": 209,
                    "question": "What is 'algorithmic bias'?",
                    "options": ["A feature of an algorithm that makes it more efficient", "A systematic and repeatable error in a computer system that creates unfair outcomes", "A type of programming bug", "A method for improving a model's performance"],
                    "correct": 2
                },
                {
                    "id": 210,
                    "question": "What is the primary purpose of 'Batch Normalization' in deep learning?",
                    "options": ["To increase the size of the dataset", "To reduce the training time and stabilize the training process", "To remove irrelevant features", "To make the model more complex"],
                    "correct": 2
                },
                {
                    "id": 211,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human", "A test to measure a computer's processing speed", "A test to measure a model's accuracy"],
                    "correct": 2
                },
                {
                    "id": 212,
                    "question": "Which of the following is a common application of 'Unsupervised Learning'?",
                    "options": ["Spam detection", "Customer segmentation", "Image classification", "Stock price prediction"],
                    "correct": 2
                },
                {
                    "id": 213,
                    "question": "What is a 'neural network' inspired by?",
                    "options": ["The human brain", "The internet", "The solar system", "Plant growth"],
                    "correct": 1
                },
                {
                    "id": 214,
                    "question": "What is 'Dropout' used for in a neural network?",
                    "options": ["To add more layers to the network", "To increase the learning rate", "To prevent overfitting by randomly 'dropping' neurons during training", "To increase the network's size"],
                    "correct": 3
                },
                {
                    "id": 215,
                    "question": "What is a 'chatbot'?",
                    "options": ["A type of robot that can walk and talk", "An AI program that conducts conversations via text or voice", "A program that manages a database", "A program that translates languages"],
                    "correct": 2
                },
                {
                    "id": 216,
                    "question": "What is 'NLP' stand for?",
                    "options": ["Network Learning Protocol", "Natural Language Processing", "Neural Logic Program", "Natural Learning Platform"],
                    "correct": 2
                },
                {
                    "id": 217,
                    "question": "What is a 'robot'?",
                    "options": ["A software program that automates tasks", "A physical machine that can be programmed to carry out a complex series of actions automatically", "A type of expert system", "A type of AI that learns from data"],
                    "correct": 2
                },
                {
                    "id": 218,
                    "question": "Which of the following is an example of an 'ensemble method' in machine learning?",
                    "options": ["Linear Regression", "K-Means Clustering", "Random Forest", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 219,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing", "Image and video analysis", "Predicting stock prices", "Generating text"],
                    "correct": 2
                },
                {
                    "id": 220,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition", "AI that generates new data, such as images, text, or music", "AI that learns from a system of rewards", "AI that makes predictions based on labeled data"],
                    "correct": 2
                },
                {
                    "id": 221,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset", "Learning by trial and error through rewards and penalties", "Learning to find hidden patterns in data", "Learning from a teacher"],
                    "correct": 2
                },
                {
                    "id": 222,
                    "question": "What is the primary purpose of a 'pooling layer' in a Convolutional Neural Network (CNN)?",
                    "options": ["To apply a filter to the input image.", "To reduce the spatial dimensions of the feature maps, thereby reducing computation.", "To add a new channel to the image.", "To flatten the output into a single vector."],
                    "correct": 2
                },
                {
                    "id": 223,
                    "question": "Which of the following is an example of an 'ensemble method' that uses boosting?",
                    "options": ["Random Forest", "Support Vector Machine (SVM)", "K-Means Clustering", "Gradient Boosting Machine (GBM)"],
                    "correct": 4
                },
                {
                    "id": 224,
                    "question": "What does a 'robot's actuator' do?",
                    "options": ["It processes information from sensors.", "It provides motion or control to a mechanism.", "It stores the robot's memory.", "It provides power to the robot."],
                    "correct": 2
                },
                {
                    "id": 225,
                    "question": "What is 'Named Entity Recognition' (NER) in Natural Language Processing?",
                    "options": ["The process of converting a sentence to a list of words.", "The process of identifying and classifying named entities in a text.", "The process of translating a language.", "The process of generating new sentences."],
                    "correct": 2
                },
                {
                    "id": 226,
                    "question": "Which of the following is a type of 'generative AI'?",
                    "options": ["Decision Tree", "Support Vector Machine", "Generative Adversarial Network (GAN)", "K-Means Clustering"],
                    "correct": 3
                },
                {
                    "id": 227,
                    "question": "What is the primary purpose of 'Backpropagation' in neural networks?",
                    "options": ["To randomly initialize the weights of the network.", "To propagate the error backwards through the network to update weights.", "To generate new data.", "To select the best features for the model."],
                    "correct": 2
                },
                {
                    "id": 228,
                    "question": "Which of the following is a key characteristic of 'Reinforcement Learning'?",
                    "options": ["It uses a labeled dataset.", "It learns through trial and error with a system of rewards.", "It is only used for image recognition.", "It requires a fixed set of rules."],
                    "correct": 2
                },
                {
                    "id": 229,
                    "question": "What does a 'robot's end effector' do?",
                    "options": ["It acts as the robot's brain.", "It provides the power source.", "It is the device at the end of a robotic arm that interacts with the environment.", "It provides mobility to the robot."],
                    "correct": 3
                },
                {
                    "id": 230,
                    "question": "What is a 'semantic network' in the context of AI?",
                    "options": ["A type of neural network.", "A network that represents semantic relations between concepts.", "A type of database for storing images.", "A network that connects computers."],
                    "correct": 2
                },
                {
                    "id": 231,
                    "question": "What is the primary purpose of 'Recurrent Neural Networks' (RNNs)?",
                    "options": ["To classify images.", "To process and analyze sequential data like text or speech.", "To find clusters in data.", "To reduce the dimensionality of data."],
                    "correct": 2
                },
                {
                    "id": 232,
                    "question": "Which of the following is a common application of AI in the agriculture sector?",
                    "options": ["Algorithmic trading.", "Predicting disease in crops from images.", "Creating chatbots for customer service.", "Personalized recommendations for online shopping."],
                    "correct": 2
                },
                {
                    "id": 233,
                    "question": "What is 'Overfitting'?",
                    "options": ["When a model is too simple and fails to capture the data's complexity.", "When a model is too complex and fits the training data too closely, performing poorly on new data.", "When a model has too many features.", "When a model is too accurate."],
                    "correct": 2
                },
                {
                    "id": 234,
                    "question": "What is the 'exploration vs. exploitation' trade-off in Reinforcement Learning?",
                    "options": ["The trade-off between using a simple model and a complex one.", "The trade-off between trying new, potentially better actions and using actions known to yield good rewards.", "The trade-off between training time and memory usage.", "The trade-off between supervised and unsupervised learning."],
                    "correct": 2
                },
                {
                    "id": 235,
                    "question": "What is a 'Linear Regression' model used for?",
                    "options": ["To classify data into different categories.", "To predict a continuous value based on one or more variables.", "To find clusters in data.", "To generate new images."],
                    "correct": 2
                },
                {
                    "id": 236,
                    "question": "Which of the following is a key characteristic of 'Narrow AI' (or Weak AI)?",
                    "options": ["It can perform any intellectual task a human can.", "It is a system that is designed and trained for a particular, single task.", "It has consciousness and self-awareness.", "It can learn without being given any data."],
                    "correct": 2
                },
                {
                    "id": 237,
                    "question": "What is 'robotic process automation' (RPA)?",
                    "options": ["The use of physical robots to perform tasks.", "The use of software robots to automate repetitive digital tasks.", "The use of AI to analyze data.", "The use of robots to build other robots."],
                    "correct": 2
                },
                {
                    "id": 238,
                    "question": "What is a 'Bayesian Network'?",
                    "options": ["A type of neural network.", "A probabilistic graphical model representing dependencies among variables.", "A type of unsupervised learning algorithm.", "A type of search algorithm."],
                    "correct": 2
                },
                {
                    "id": 239,
                    "question": "What is the primary purpose of 'Regularization' in machine learning?",
                    "options": ["To speed up the training process.", "To prevent overfitting by adding a penalty for model complexity.", "To improve model interpretability.", "To increase the number of features."],
                    "correct": 2
                },
                {
                    "id": 240,
                    "question": "Which of the following is an example of 'transfer learning'?",
                    "options": ["Training a model from scratch.", "Using a pre-trained image classification model for a new, but related, task.", "Using an unsupervised learning model for a classification task.", "Converting a model from one programming language to another."],
                    "correct": 2
                },
                {
                    "id": 241,
                    "question": "What is 'sentiment analysis'?",
                    "options": ["Analyzing a person's emotions through facial expressions.", "Using NLP to determine the emotional tone or opinion in a piece of text.", "Detecting objects in an image.", "Predicting stock prices."],
                    "correct": 2
                },
                {
                    "id": 242,
                    "question": "What is a 'Support Vector Machine' (SVM) primarily used for?",
                    "options": ["Regression tasks.", "Clustering tasks.", "Classification tasks.", "Reinforcement learning."],
                    "correct": 3
                },
                {
                    "id": 243,
                    "question": "What is a 'chatbot'?",
                    "options": ["A type of robot that can walk and talk.", "An AI program that conducts conversations via text or voice.", "A program that manages a database.", "A program that translates languages."],
                    "correct": 2
                },
                {
                    "id": 244,
                    "question": "Which of the following is a common ethical concern regarding AI?",
                    "options": ["The cost of AI software.", "The potential for algorithmic bias and discrimination.", "The speed of AI models.", "The amount of data required for training."],
                    "correct": 2
                },
                {
                    "id": 245,
                    "question": "In 'Natural Language Processing', what are 'stopwords'?",
                    "options": ["Words that have a specific meaning in a sentence.", "Common words like 'the', 'a', 'is' that are often removed before processing text.", "Words that are difficult for an AI to understand.", "Words that are used to represent numbers."],
                    "correct": 2
                },
                {
                    "id": 246,
                    "question": "What is 'computer vision'?",
                    "options": ["The field of AI that deals with robots.", "The field of AI that enables computers to interpret and understand visual data.", "The field of AI that deals with language.", "The field of AI that deals with data mining."],
                    "correct": 2
                },
                {
                    "id": 247,
                    "question": "What is 'supervised learning'?",
                    "options": ["Learning from a labeled dataset.", "Learning from an unlabeled dataset.", "Learning from a system of rewards.", "Learning by creating new data."],
                    "correct": 1
                },
                {
                    "id": 248,
                    "question": "What is a 'decision tree'?",
                    "options": ["A type of neural network.", "A model that classifies data based on a series of questions in a tree-like structure.", "A type of database.", "A type of expert system."],
                    "correct": 2
                },
                {
                    "id": 249,
                    "question": "What is the primary purpose of 'Principal Component Analysis' (PCA)?",
                    "options": ["To find clusters in data.", "To reduce the dimensionality of a dataset while retaining most of the variance.", "To classify data into different categories.", "To predict continuous values."],
                    "correct": 2
                },
                {
                    "id": 250,
                    "question": "Which of the following is a common application of AI in the education sector?",
                    "options": ["Predicting stock prices.", "Personalized learning paths for students.", "Automating factory processes.", "Spam filtering."],
                    "correct": 2
                },
                {
                    "id": 251,
                    "question": "What is a 'Generative Adversarial Network' (GAN)?",
                    "options": ["A model that learns to classify data.", "A type of neural network used for time-series forecasting.", "A system of two neural networks that compete against each other to generate new data.", "A method for clustering data."],
                    "correct": 3
                },
                {
                    "id": 252,
                    "question": "What is 'computer vision'?",
                    "options": ["The field of AI that deals with robots.", "The field of AI that enables computers to interpret and understand visual data.", "The field of AI that deals with language.", "The field of AI that deals with data mining."],
                    "correct": 2
                },
                {
                    "id": 253,
                    "question": "Which of the following is a type of 'unsupervised learning' algorithm?",
                    "options": ["Linear Regression", "Decision Tree", "K-Means Clustering", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 254,
                    "question": "What is the primary purpose of 'Reinforcement Learning'?",
                    "options": ["To predict values based on labeled data.", "To find patterns in unlabeled data.", "To learn a policy for taking actions to maximize cumulative rewards.", "To classify data into different categories."],
                    "correct": 3
                },
                {
                    "id": 255,
                    "question": "What is a 'Recurrent Neural Network' (RNN) especially good at?",
                    "options": ["Image classification.", "Processing sequential data like text or time-series data.", "Finding hidden patterns in a single dataset.", "Generating new images."],
                    "correct": 2
                },
                {
                    "id": 256,
                    "question": "What does a 'policy' represent in a 'Reinforcement Learning' model?",
                    "options": ["The set of rules for the training process.", "The plan or strategy that the agent uses to determine its next action.", "The reward or punishment the agent receives.", "The environment in which the agent operates."],
                    "correct": 2
                },
                {
                    "id": 257,
                    "question": "What is the 'F1-Score' used for?",
                    "options": ["To measure the speed of an algorithm.", "To evaluate the performance of a classification model, especially with imbalanced data.", "To find clusters in data.", "To reduce the dimensionality of data."],
                    "correct": 2
                },
                {
                    "id": 258,
                    "question": "What is 'computer vision'?",
                    "options": ["The field of AI that deals with robots.", "The field of AI that enables computers to interpret and understand visual data.", "The field of AI that deals with language.", "The field of AI that deals with data mining."],
                    "correct": 2
                },
                {
                    "id": 259,
                    "question": "Which of the following is a common ethical concern regarding AI?",
                    "options": ["The cost of AI software.", "The potential for AI to cause job displacement.", "The speed of AI models.", "The amount of data required for training."],
                    "correct": 2
                },
                {
                    "id": 260,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength.", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human.", "A test to measure a computer's processing speed.", "A test to measure a model's accuracy."],
                    "correct": 2
                },
                {
                    "id": 261,
                    "question": "What is the primary purpose of a 'Loss Function'?",
                    "options": ["To measure the model's accuracy.", "To calculate the error between the predicted and actual output.", "To determine the model's complexity.", "To reduce the training time."],
                    "correct": 2
                },
                {
                    "id": 262,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition.", "AI that generates new data, such as images, text, or music.", "AI that learns from a system of rewards.", "AI that makes predictions based on labeled data."],
                    "correct": 2
                },
                {
                    "id": 263,
                    "question": "Which of the following is a key component of 'deep learning' models?",
                    "options": ["The use of symbolic reasoning.", "An 'activation function' within neurons.", "Manual feature extraction.", "Single-layer architecture."],
                    "correct": 2
                },
                {
                    "id": 264,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset.", "Learning by trial and error through rewards and penalties.", "Learning to find hidden patterns in data.", "Learning from a teacher."],
                    "correct": 2
                },
                {
                    "id": 265,
                    "question": "What is 'overfitting' in machine learning?",
                    "options": ["When a model is too complex and fits the training data too closely, performing poorly on new data.", "When a model is too simple to capture the underlying patterns in the data.", "When a model's accuracy is too high.", "When a model is trained on a small dataset."],
                    "correct": 1
                },
                {
                    "id": 266,
                    "question": "In the context of AI, what is 'Explainable AI' (XAI)?",
                    "options": ["AI that is able to explain its reasoning and decisions to humans.", "AI that can be used to teach humans.", "AI that is designed to be very simple.", "AI that can generate human-like text."],
                    "correct": 1
                },
                {
                    "id": 267,
                    "question": "Which of the following metrics measures the proportion of positive identifications that were actually correct?",
                    "options": ["Recall", "Precision", "Accuracy", "F1-Score"],
                    "correct": 2
                },
                {
                    "id": 268,
                    "question": "What is a 'Transformer' in the context of deep learning?",
                    "options": ["A type of sensor for robots.", "A type of neural network architecture used primarily in NLP for handling sequential data.", "A tool for data cleaning.", "A type of database."],
                    "correct": 2
                },
                {
                    "id": 269,
                    "question": "What is 'algorithmic bias'?",
                    "options": ["A feature of an algorithm that makes it more efficient.", "A systematic and repeatable error in a computer system that creates unfair outcomes.", "A type of programming bug.", "A method for improving a model's performance."],
                    "correct": 2
                },
                {
                    "id": 270,
                    "question": "What is the primary purpose of 'Batch Normalization' in deep learning?",
                    "options": ["To increase the size of the dataset.", "To reduce the training time and stabilize the training process.", "To remove irrelevant features.", "To make the model more complex."],
                    "correct": 2
                },
                {
                    "id": 271,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength.", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human.", "A test to measure a computer's processing speed.", "A test to measure a model's accuracy."],
                    "correct": 2
                },
                {
                    "id": 272,
                    "question": "Which of the following is a common application of 'Unsupervised Learning'?",
                    "options": ["Spam detection.", "Customer segmentation.", "Image classification.", "Stock price prediction."],
                    "correct": 2
                },
                {
                    "id": 273,
                    "question": "What is a 'neural network' inspired by?",
                    "options": ["The human brain.", "The internet.", "The solar system.", "Plant growth."],
                    "correct": 1
                },
                {
                    "id": 274,
                    "question": "What is 'Dropout' used for in a neural network?",
                    "options": ["To add more layers to the network.", "To increase the learning rate.", "To prevent overfitting by randomly 'dropping' neurons during training.", "To increase the network's size."],
                    "correct": 3
                },
                {
                    "id": 275,
                    "question": "What is a 'chatbot'?",
                    "options": ["A type of robot that can walk and talk.", "An AI program that conducts conversations via text or voice.", "A program that manages a database.", "A program that translates languages."],
                    "correct": 2
                },
                {
                    "id": 276,
                    "question": "What is 'NLP' stand for?",
                    "options": ["Network Learning Protocol", "Natural Language Processing", "Neural Logic Program", "Natural Learning Platform"],
                    "correct": 2
                },
                {
                    "id": 277,
                    "question": "What is a 'robot'?",
                    "options": ["A software program that automates tasks.", "A physical machine that can be programmed to carry out a complex series of actions automatically.", "A type of expert system.", "A type of AI that learns from data."],
                    "correct": 2
                },
                {
                    "id": 278,
                    "question": "Which of the following is an example of an 'ensemble method' in machine learning?",
                    "options": ["Linear Regression", "K-Means Clustering", "Random Forest", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 279,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing.", "Image and video analysis.", "Predicting stock prices.", "Generating text."],
                    "correct": 2
                },
                {
                    "id": 280,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition.", "AI that generates new data, such as images, text, or music.", "AI that learns from a system of rewards.", "AI that makes predictions based on labeled data."],
                    "correct": 2
                },
                {
                    "id": 281,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset.", "Learning by trial and error through rewards and penalties.", "Learning to find hidden patterns in data.", "Learning from a teacher."],
                    "correct": 2
                },
                {
                    "id": 282,
                    "question": "What is the primary purpose of a 'Loss Function'?",
                    "options": ["To measure the model's accuracy.", "To calculate the error between the predicted and actual output.", "To determine the model's complexity.", "To reduce the training time."],
                    "correct": 2
                },
                {
                    "id": 283,
                    "question": "What is 'overfitting' in machine learning?",
                    "options": ["When a model is too complex and fits the training data too closely, performing poorly on new data.", "When a model is too simple to capture the underlying patterns in the data.", "When a model's accuracy is too high.", "When a model is trained on a small dataset."],
                    "correct": 1
                },
                {
                    "id": 284,
                    "question": "Which of the following is a common ethical concern regarding AI?",
                    "options": ["The cost of AI software.", "The potential for AI to cause job displacement.", "The speed of AI models.", "The amount of data required for training."],
                    "correct": 2
                },
                {
                    "id": 285,
                    "question": "In the context of AI, what is 'Explainable AI' (XAI)?",
                    "options": ["AI that is able to explain its reasoning and decisions to humans.", "AI that can be used to teach humans.", "AI that is designed to be very simple.", "AI that can generate human-like text."],
                    "correct": 1
                },
                {
                    "id": 286,
                    "question": "Which of the following metrics measures the proportion of positive identifications that were actually correct?",
                    "options": ["Recall", "Precision", "Accuracy", "F1-Score"],
                    "correct": 2
                },
                {
                    "id": 287,
                    "question": "What is a 'Transformer' in the context of deep learning?",
                    "options": ["A type of sensor for robots.", "A type of neural network architecture used primarily in NLP for handling sequential data.", "A tool for data cleaning.", "A type of database."],
                    "correct": 2
                },
                {
                    "id": 288,
                    "question": "What is 'algorithmic bias'?",
                    "options": ["A feature of an algorithm that makes it more efficient.", "A systematic and repeatable error in a computer system that creates unfair outcomes.", "A type of programming bug.", "A method for improving a model's performance."],
                    "correct": 2
                },
                {
                    "id": 289,
                    "question": "What is the primary purpose of 'Batch Normalization' in deep learning?",
                    "options": ["To increase the size of the dataset.", "To reduce the training time and stabilize the training process.", "To remove irrelevant features.", "To make the model more complex."],
                    "correct": 2
                },
                {
                    "id": 290,
                    "question": "What is a 'Turing Test'?",
                    "options": ["A test to measure a robot's physical strength.", "A test to determine if a machine can exhibit intelligent behavior indistinguishable from a human.", "A test to measure a computer's processing speed.", "A test to measure a model's accuracy."],
                    "correct": 2
                },
                {
                    "id": 291,
                    "question": "Which of the following is a common application of 'Unsupervised Learning'?",
                    "options": ["Spam detection.", "Customer segmentation.", "Image classification.", "Stock price prediction."],
                    "correct": 2
                },
                {
                    "id": 292,
                    "question": "What is a 'neural network' inspired by?",
                    "options": ["The human brain.", "The internet.", "The solar system.", "Plant growth."],
                    "correct": 1
                },
                {
                    "id": 293,
                    "question": "What is 'Dropout' used for in a neural network?",
                    "options": ["To add more layers to the network.", "To increase the learning rate.", "To prevent overfitting by randomly 'dropping' neurons during training.", "To increase the network's size."],
                    "correct": 3
                },
                {
                    "id": 294,
                    "question": "What is a 'chatbot'?",
                    "options": ["A type of robot that can walk and talk.", "An AI program that conducts conversations via text or voice.", "A program that manages a database.", "A program that translates languages."],
                    "correct": 2
                },
                {
                    "id": 295,
                    "question": "What is 'NLP' stand for?",
                    "options": ["Network Learning Protocol", "Natural Language Processing", "Neural Logic Program", "Natural Learning Platform"],
                    "correct": 2
                },
                {
                    "id": 296,
                    "question": "What is a 'robot'?",
                    "options": ["A software program that automates tasks.", "A physical machine that can be programmed to carry out a complex series of actions automatically.", "A type of expert system.", "A type of AI that learns from data."],
                    "correct": 2
                },
                {
                    "id": 297,
                    "question": "Which of the following is an example of an 'ensemble method' in machine learning?",
                    "options": ["Linear Regression", "K-Means Clustering", "Random Forest", "Support Vector Machine"],
                    "correct": 3
                },
                {
                    "id": 298,
                    "question": "What is a 'Convolutional Neural Network' (CNN) primarily used for?",
                    "options": ["Natural Language Processing.", "Image and video analysis.", "Predicting stock prices.", "Generating text."],
                    "correct": 2
                },
                {
                    "id": 299,
                    "question": "What is 'Generative AI'?",
                    "options": ["AI that is only used for image recognition.", "AI that generates new data, such as images, text, or music.", "AI that learns from a system of rewards.", "AI that makes predictions based on labeled data."],
                    "correct": 2
                },
                {
                    "id": 300,
                    "question": "What is 'Reinforcement Learning'?",
                    "options": ["Learning from a labeled dataset.", "Learning by trial and error through rewards and penalties.", "Learning to find hidden patterns in data.", "Learning from a teacher."],
                    "correct": 2
                }
            ],
        }
    }
}
export default AI;