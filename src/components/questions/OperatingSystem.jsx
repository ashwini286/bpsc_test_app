const OperatingSystem = {
    color: "#064E3B",
    subtopics: {
        "Functions of OS; user interface concepts": {
            color: "#e28743",
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
        "Mix OS questions part 1": {
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
        },
        "Mix OS questions part 2": {
            color: "#FBBF24",
            questions: [
                {
                    "id": 1,
                    "question": "Which is NOT a primary function of an operating system?",
                    "options": ["Process management", "Memory management", "Compiler optimization", "File system management"],
                    "correct": 3
                },
                {
                    "id": 2,
                    "question": "Which transition is valid in the standard five-state process model?",
                    "options": ["Running → New", "Ready → Terminated", "Blocked → Ready", "New → Blocked"],
                    "correct": 3
                },
                {
                    "id": 3,
                    "question": "Which statement best distinguishes a process from a thread?",
                    "options": ["Threads have separate virtual address spaces", "Processes share the same stack", "Threads share process resources like address space", "Processes cannot run concurrently"],
                    "correct": 3
                },
                {
                    "id": 4,
                    "question": "Round Robin primarily improves which metric compared to FCFS?",
                    "options": ["CPU utilization", "Response time", "Throughput", "Context switch overhead"],
                    "correct": 2
                },
                {
                    "id": 5,
                    "question": "SJF scheduling is optimal for minimizing which metric?",
                    "options": ["Average waiting time", "Response time", "CPU utilization", "Turnaround time variance"],
                    "correct": 1
                },
                {
                    "id": 6,
                    "question": "Which condition is NOT one of Coffman’s deadlock conditions?",
                    "options": ["Mutual exclusion", "Preemption", "Hold and wait", "Circular wait"],
                    "correct": 2
                },
                {
                    "id": 7,
                    "question": "Banker’s algorithm is used for:",
                    "options": ["Deadlock detection", "Deadlock avoidance via safe-state check", "Deadlock prevention by resource duplication", "Recovery after deadlock"],
                    "correct": 2
                },
                {
                    "id": 8,
                    "question": "A critical section refers to:",
                    "options": ["Code that must run in kernel mode", "Code segment accessing shared data requiring mutual exclusion", "Interrupt service routine region", "Any I/O-bound portion of code"],
                    "correct": 2
                },
                {
                    "id": 9,
                    "question": "Binary semaphore differs from counting semaphore because it:",
                    "options": ["Allows negative values", "Only takes 0/1 values for mutual exclusion", "Is implemented only in hardware", "Does not require atomic operations"],
                    "correct": 2
                },
                {
                    "id": 10,
                    "question": "Which paging component caches recent page table entries?",
                    "options": ["MMU", "Cache controller", "TLB", "Swap space"],
                    "correct": 3
                },
                {
                    "id": 11,
                    "question": "Internal fragmentation is typical in which allocation scheme?",
                    "options": ["Variable-sized partitions", "Paging with fixed-size frames", "Segmentation", "Linked allocation in disks"],
                    "correct": 2
                },
                {
                    "id": 12,
                    "question": "On a page fault, which step happens first?",
                    "options": ["Replace a page using a replacement policy", "Locate page on disk", "Update TLB with new mapping", "Restart the instruction"],
                    "correct": 2
                },
                {
                    "id": 13,
                    "question": "Which page replacement policy may suffer Belady’s anomaly?",
                    "options": ["LRU", "Optimal", "FIFO", "Clock (Second Chance)"],
                    "correct": 3
                },
                {
                    "id": 14,
                    "question": "Which directory structure allows the same file to appear in multiple directories without duplication?",
                    "options": ["Single-level", "Two-level", "Tree", "Acyclic graph"],
                    "correct": 4
                },
                {
                    "id": 15,
                    "question": "Indexed file allocation uses what to locate file blocks?",
                    "options": ["Contiguous block ranges", "Linked block pointers in each data block", "An index block of pointers to data blocks", "A bitmap of free blocks only"],
                    "correct": 3
                },
                {
                    "id": 16,
                    "question": "Which disk scheduling algorithm minimizes average seek time by moving the head in one direction then reversing?",
                    "options": ["FCFS", "SSTF", "SCAN (Elevator)", "C-LOOK"],
                    "correct": 3
                },
                {
                    "id": 17,
                    "question": "DMA improves I/O performance by:",
                    "options": ["Bypassing device drivers", "Transferring data between device and memory without CPU for each word", "Eliminating interrupts", "Using larger caches"],
                    "correct": 2
                },
                {
                    "id": 18,
                    "question": "Access matrix in protection represents:",
                    "options": ["Scheduling priorities", "Mapping of subjects to objects with allowed operations", "User-password pairs", "Memory page ownership"],
                    "correct": 2
                },
                {
                    "id": 19,
                    "question": "Which is a valid Linux command to change file permissions?",
                    "options": ["chperm 755 file", "chmod 755 file", "permset 755 file", "chown 755 file"],
                    "correct": 2
                },
                {
                    "id": 20,
                    "question": "Which system call creates a new process in UNIX-like systems?",
                    "options": ["spawn()", "exec()", "fork()", "clonefs()"],
                    "correct": 3
                },
                {
                    "id": 21,
                    "question": "Which model maps a logical address into page number and offset?",
                    "options": ["Segmentation", "Paging", "Swapping", "Demand segmentation"],
                    "correct": 2
                },
                {
                    "id": 22,
                    "question": "Starvation is most commonly associated with which scheduling?",
                    "options": ["Round Robin", "FCFS", "Non-preemptive SJF with frequent short jobs", "Priority with aging"],
                    "correct": 3
                },
                {
                    "id": 23,
                    "question": "Which IPC mechanism naturally supports message boundaries?",
                    "options": ["Shared memory", "Signals", "Message passing (message queues)", "Memory-mapped files only"],
                    "correct": 3
                },
                {
                    "id": 24,
                    "question": "In multilevel feedback queue scheduling, a process that uses too much CPU is:",
                    "options": ["Moved to a higher-priority queue", "Moved to a lower-priority queue", "Terminated", "Blocked permanently"],
                    "correct": 2
                },
                {
                    "id": 25,
                    "question": "Which best prevents deadlock among identical resources?",
                    "options": ["Release resources randomly", "Impose a total ordering on resource acquisition", "Disable interrupts", "Increase time quantum"],
                    "correct": 2
                },
                {
                    "id": 26,
                    "question": "Effective Access Time (EAT) improves when:",
                    "options": ["TLB hit ratio increases", "Page fault rate increases", "Context switches increase", "Disk latency increases"],
                    "correct": 1
                },
                {
                    "id": 27,
                    "question": "An inode in UNIX-like file systems stores:",
                    "options": ["File name and path", "File data blocks only", "Metadata like permissions, owner, and block pointers", "Only timestamps"],
                    "correct": 3
                },
                {
                    "id": 28,
                    "question": "Which is TRUE about user mode vs kernel mode?",
                    "options": ["User mode can execute privileged instructions", "Kernel mode restricts access to system calls", "User mode restricts privileged instructions for protection", "Both modes allow direct I/O port access"],
                    "correct": 3
                },
                {
                    "id": 29,
                    "question": "The primary purpose of the MMU is to:",
                    "options": ["Schedule CPU cores", "Map virtual addresses to physical addresses", "Control disk arm positioning", "Encrypt files at rest"],
                    "correct": 2
                },
                {
                    "id": 30,
                    "question": "Which Linux command shows running processes with CPU/memory usage interactively?",
                    "options": ["ps -A", "jobs -l", "top", "who"],
                    "correct": 3
                },
                { "id": 31, "question": "Which component translates logical addresses to physical addresses during execution?", "options": ["DMA controller", "MMU", "I/O scheduler", "Disk controller"], "correct": 2 },
                { "id": 32, "question": "Which scheduling algorithm can cause starvation without aging?", "options": ["FCFS", "Round Robin", "Preemptive Priority", "Multilevel Feedback Queue with aging"], "correct": 3 },
                { "id": 33, "question": "In UNIX-like systems, exec() primarily does what?", "options": ["Creates a new process tree", "Replaces the current process image", "Clones a new thread", "Terminates the parent process"], "correct": 2 },
                { "id": 34, "question": "Which is NOT an IPC mechanism?", "options": ["Message queues", "Shared memory", "Semaphores", "DMA transfers"], "correct": 4 },
                { "id": 35, "question": "Time quantum too small in Round Robin leads to:", "options": ["Poor response time", "Increased context switching overhead", "Starvation of short jobs", "No effect on throughput"], "correct": 2 },
                { "id": 36, "question": "Peterson’s solution addresses:", "options": ["Deadlock detection", "Mutual exclusion for two processes", "CPU scheduling", "Memory compaction"], "correct": 2 },
                { "id": 37, "question": "Which is a necessary condition for deadlock?", "options": ["Spooling", "No preemption", "Time slicing", "Paging"], "correct": 2 },
                { "id": 38, "question": "Resource Allocation Graph with a cycle in single-instance resources implies:", "options": ["No deadlock", "Possible starvation only", "Definite deadlock", "Only unsafe state"], "correct": 3 },
                { "id": 39, "question": "Demand paging loads pages:", "options": ["At program load time", "Only when referenced", "All at once on first reference", "Only on TLB miss"], "correct": 2 },
                { "id": 40, "question": "TLB miss with valid page table entry causes:", "options": ["Page fault always", "Context switch", "Page table walk and TLB update", "Process termination"], "correct": 3 },
                { "id": 41, "question": "Which replacement policy needs future knowledge for optimality?", "options": ["LRU", "FIFO", "Optimal (MIN)", "Clock"], "correct": 3 },
                { "id": 42, "question": "External fragmentation occurs in:", "options": ["Paging", "Segmentation", "Fixed partitions", "TLB"], "correct": 2 },
                { "id": 43, "question": "Buddy system is used for:", "options": ["CPU scheduling", "Deadlock prevention", "Dynamic memory allocation", "Disk scheduling"], "correct": 3 },
                { "id": 44, "question": "Which directory organization simplifies name collisions but reduces flexibility?", "options": ["Single-level", "Two-level", "Tree", "Acyclic graph"], "correct": 2 },
                { "id": 45, "question": "Journaling in file systems primarily helps with:", "options": ["Compression", "Faster reads", "Crash recovery and consistency", "Encryption"], "correct": 3 },
                { "id": 46, "question": "FAT file systems locate file blocks via:", "options": ["Inodes", "Extent lists", "Linked entries in a table", "B+ tree indices"], "correct": 3 },
                { "id": 47, "question": "Elevator algorithm is another name for:", "options": ["SSTF", "SCAN", "LOOK", "C-SCAN"], "correct": 2 },
                { "id": 48, "question": "RAID 1 provides:", "options": ["Striping with parity", "Mirroring", "Double parity", "Triple parity"], "correct": 2 },
                { "id": 49, "question": "Interrupt-driven I/O improves performance by:", "options": ["Polling frequently", "Allowing CPU to do other work until device signals", "Disabling DMA", "Reducing device latency"], "correct": 2 },
                { "id": 50, "question": "Access control implemented as per-object lists is called:", "options": ["Capability lists", "ACLs", "Access matrix rows", "Role-based encryption"], "correct": 2 },
                { "id": 51, "question": "Which is a protection mechanism that grants rights per subject?", "options": ["ACL entries", "Capabilities", "User passwords", "Salting"], "correct": 2 },
                { "id": 52, "question": "Which Linux command finds lines matching a pattern in files?", "options": ["awk", "sed", "grep", "find -type f"], "correct": 3 },
                { "id": 53, "question": "Which command shows current working directory?", "options": ["pwd", "cwd", "dir", "ls -pwd"], "correct": 1 },
                { "id": 54, "question": "Which best describes a kernel?", "options": ["GUI manager", "Core part managing resources and hardware", "User-space library", "Bootloader"], "correct": 2 },
                { "id": 55, "question": "System calls are invoked via:", "options": ["Regular function calls only", "Traps/soft interrupts into kernel", "Direct device register writes", "DMA requests"], "correct": 2 },
                { "id": 56, "question": "Spinlocks are preferred when:", "options": ["Critical section is long", "Threads can sleep", "Critical section is very short", "In user mode always"], "correct": 3 },
                { "id": 57, "question": "Monitor is a:", "options": ["Hardware lock", "High-level synchronization construct with condition variables", "Filesystem checker", "Scheduling policy"], "correct": 2 },
                { "id": 58, "question": "Priority inversion occurs when:", "options": ["Lower priority preempts higher priority", "Higher priority waits for lower priority holding a resource", "Aging increases priority", "FCFS reorders jobs"], "correct": 2 },
                { "id": 59, "question": "A safe sequence in Banker’s algorithm means:", "options": ["No starvation", "No deadlock possible if followed", "Maximum throughput", "Minimum waiting time"], "correct": 2 },
                { "id": 60, "question": "Working set model relates to:", "options": ["CPU pipeline", "Set of pages actively used by a process", "Set of processes in ready queue", "Set of open files"], "correct": 2 },
                { "id": 61, "question": "Thrashing is primarily caused by:", "options": ["Too many CPU-bound jobs", "High page fault rate due to insufficient frames", "Excessive I/O interrupts", "Long time quantum"], "correct": 2 },
                { "id": 62, "question": "Copy-on-write is used to:", "options": ["Duplicate pages on fork immediately", "Defer copying pages until modified", "Prevent page sharing", "Disable virtual memory"], "correct": 2 },
                { "id": 63, "question": "Segmented paging means:", "options": ["Paging without segments", "Each segment has its own page table", "Pages have segments as offsets", "Two-level TLB only"], "correct": 2 },
                { "id": 64, "question": "Effective Access Time mainly depends on:", "options": ["TLB hit ratio and memory access times", "CPU frequency only", "Disk rotational latency", "Number of processes"], "correct": 1 },
                { "id": 65, "question": "UNIX hard link characteristic:", "options": ["Spans file systems", "References inode directly; same inode number", "Stores path to target", "Requires special permissions"], "correct": 2 },
                { "id": 66, "question": "Symbolic link characteristic:", "options": ["Cannot dangle", "Same inode as target", "Stores pathname; can become dangling", "Needs same filesystem"], "correct": 3 },
                { "id": 67, "question": "Which allocation minimizes external fragmentation for files?", "options": ["Contiguous allocation", "Linked allocation", "Indexed allocation", "Extent-based contiguous only"], "correct": 3 },
                { "id": 68, "question": "Which command modifies file owner in Linux?", "options": ["chmod", "chgrp", "chown", "usermod"], "correct": 3 },
                { "id": 69, "question": "Which is NOT a disk scheduling algorithm?", "options": ["SSTF", "SCAN", "LRU", "C-LOOK"], "correct": 3 },
                { "id": 70, "question": "DMA requires coordination with:", "options": ["MMU only", "CPU and memory bus arbitration", "Filesystem driver only", "Scheduler only"], "correct": 2 },
                { "id": 71, "question": "Kernel preemption allows:", "options": ["User processes to preempt hardware", "High-priority tasks to preempt kernel code at safe points", "No preemption ever in kernel", "I/O devices to be preempted"], "correct": 2 },
                { "id": 72, "question": "Which is typical of a hard real-time system?", "options": ["Best-effort deadlines", "Occasional misses acceptable", "Strict deadlines must be met", "FCFS only"], "correct": 3 },
                { "id": 73, "question": "Dispatcher in CPU scheduling does:", "options": ["Selects next process", "Performs context switch and transfers control to user mode", "Handles page faults", "Manages disk head"], "correct": 2 },
                { "id": 74, "question": "Context switch saves and restores:", "options": ["Only program counter", "CPU registers and process state", "Only stack pointer", "Only page table"], "correct": 2 },
                { "id": 75, "question": "Which best reduces starvation in priority scheduling?", "options": ["Smaller quantum", "Aging", "FIFO queues", "Random priorities"], "correct": 2 },
                { "id": 76, "question": "Producer-Consumer with bounded buffer needs:", "options": ["One binary semaphore only", "Two counting semaphores and a mutex", "Only spinlocks", "Only monitors"], "correct": 2 },
                { "id": 77, "question": "Readers-Writers problem goal:", "options": ["Writers starve readers", "Readers starve writers", "Allow multiple readers, exclusive writers", "Allow multiple writers concurrently"], "correct": 3 },
                { "id": 78, "question": "Atomicity is guaranteed by:", "options": ["Non-blocking I/O", "Interrupt disabling in user mode", "Hardware primitives and proper synchronization", "Longer quantum"], "correct": 3 },
                { "id": 79, "question": "Memory compaction addresses:", "options": ["Internal fragmentation", "External fragmentation", "TLB misses", "Stack overflow"], "correct": 2 },
                { "id": 80, "question": "Page table entry typically contains:", "options": ["File name", "Process ID only", "Frame number and status bits", "CPU register set"], "correct": 3 },
                { "id": 81, "question": "In two-level paging, the benefit is:", "options": ["Larger pages", "Smaller page tables in memory via hierarchy", "No TLB needed", "No page faults"], "correct": 2 },
                { "id": 82, "question": "Swap space is primarily used for:", "options": ["Storing executables permanently", "Backing store for pages/segments", "Caching file system metadata", "Kernel logs"], "correct": 2 },
                { "id": 83, "question": "fsck/e2fsck is used for:", "options": ["Network diagnostics", "Filesystem consistency check and repair", "Process scheduling", "Memory defragmentation"], "correct": 2 },
                { "id": 84, "question": "Disk formatting that creates file system structures is called:", "options": ["Low-level format", "Partitioning", "High-level format", "Zero-fill"], "correct": 3 },
                { "id": 85, "question": "Cylinders, heads, sectors refer to:", "options": ["CPU pipeline stages", "Disk geometry", "Memory hierarchy", "Network layers"], "correct": 2 },
                { "id": 86, "question": "SELinux/AppArmor primarily provide:", "options": ["Packet filtering", "Mandatory access control", "Antivirus scanning", "Compression"], "correct": 2 },
                { "id": 87, "question": "Setuid bit on an executable means:", "options": ["Runs with caller’s UID", "Runs with file owner’s effective UID", "Blocks execution by others", "Enables sticky behavior"], "correct": 2 },
                { "id": 88, "question": "Sticky bit on directories means:", "options": ["Files are immutable", "Only owner/root can delete contained files", "Directory is read-only", "Executes in place"], "correct": 2 },
                { "id": 89, "question": "Which Linux command shows file permissions and inode info?", "options": ["ls -l", "ls", "stat", "file"], "correct": 3 },
                { "id": 90, "question": "Which is TRUE about user-level vs kernel-level threads?", "options": ["User-level threads always run on multiple CPUs", "Kernel-level threads are scheduled by OS kernel", "User-level threads are visible to scheduler", "Kernel threads cannot block"], "correct": 2 },
                { "id": 91, "question": "IPC shared memory typically requires:", "options": ["No synchronization", "Synchronization primitives to avoid races", "Only signals", "Only sockets"], "correct": 2 },
                { "id": 92, "question": "Preemptive scheduling allows:", "options": ["Running to completion without interruption", "Higher priority to interrupt running process", "Processes to disable interrupts in user space", "No context switches"], "correct": 2 },
                { "id": 93, "question": "Page fault service time increase will:", "options": ["Decrease EAT", "Increase EAT", "Not affect EAT", "Only affect TLB hit rate"], "correct": 2 },
                { "id": 94, "question": "Belady’s anomaly is seen in:", "options": ["Stack algorithms", "Non-stack algorithms like FIFO", "LRU", "Optimal"], "correct": 2 },
                { "id": 95, "question": "Extent-based file allocation:", "options": ["Stores fixed-size blocks only", "Uses contiguous runs of blocks", "Uses indirect blocks only", "Cannot grow files"], "correct": 2 },
                { "id": 96, "question": "Which disk algorithm provides more uniform wait than SSTF?", "options": ["FCFS", "SCAN/LOOK family", "Random", "SSTF with tie-breaking"], "correct": 2 },
                { "id": 97, "question": "Which syscall pair loads a new program in the child process after fork?", "options": ["open, read", "wait, exit", "fork, exec", "clone, kill"], "correct": 3 },
                { "id": 98, "question": "Zombie process means:", "options": ["Uninterruptible sleep", "Terminated but parent hasn’t collected exit status", "Kernel thread", "Daemon process"], "correct": 2 },
                { "id": 99, "question": "Which command sends a signal to terminate a process by PID?", "options": ["kill", "endproc", "stop", "halt"], "correct": 1 },
                { "id": 100, "question": "Which best characterizes a microkernel?", "options": ["All services in kernel space", "Minimal kernel with user-space servers", "No IPC support", "Monolithic drivers only"], "correct": 2 },
                { "id": 101, "question": "Which system component decides which process gets the CPU next?", "options": ["Dispatcher", "Long-term scheduler", "Short-term scheduler", "Medium-term scheduler"], "correct": 3 },
                { "id": 102, "question": "Which state indicates a process waiting for an event such as I/O completion?", "options": ["Ready", "Running", "Blocked (Waiting)", "New"], "correct": 3 },
                { "id": 103, "question": "CPU burst refers to:", "options": ["Time spent waiting for I/O", "Time spent executing on CPU", "Time to complete a job", "Time to switch context"], "correct": 2 },
                { "id": 104, "question": "A context switch does NOT save/restore which of the following?", "options": ["Program counter", "General registers", "Page table base register", "Disk arm position"], "correct": 4 },
                { "id": 105, "question": "Which scheduling algorithm is best suited for time-sharing systems?", "options": ["FCFS", "Round Robin", "Non-preemptive Priority", "SJF"], "correct": 2 },
                { "id": 106, "question": "Aging is used to:", "options": ["Prevent deadlocks", "Improve cache hit rate", "Prevent starvation in priority scheduling", "Reduce page fault service time"], "correct": 3 },
                { "id": 107, "question": "Which is true for preemptive SJF (SRTF)?", "options": ["Processes run to completion once started", "A new shorter job can preempt the running job", "No starvation possible", "Same as Round Robin with large quantum"], "correct": 2 },
                { "id": 108, "question": "Critical section problem requirements include:", "options": ["Mutual exclusion, progress, bounded waiting", "Mutual exclusion only", "No preemption", "Non-blocking I/O"], "correct": 1 },
                { "id": 109, "question": "Test-and-Set instruction helps implement:", "options": ["Paging", "Spinlocks", "Disk scheduling", "DMA"], "correct": 2 },
                { "id": 110, "question": "Which is NOT a classical synchronization problem?", "options": ["Dining Philosophers", "Readers-Writers", "Sleeping Barber", "Banker’s problem"], "correct": 4 },
                { "id": 111, "question": "Deadlock prevention strategy often used is:", "options": ["Circular wait enforcement by ordering resources", "Always preempt resources", "Randomly kill processes", "Ignore the problem"], "correct": 1 },
                { "id": 112, "question": "Unsafe state in Banker’s algorithm indicates:", "options": ["System is deadlocked", "Deadlock may occur if allocation proceeds", "All processes will finish", "No process can request more resources"], "correct": 2 },
                { "id": 113, "question": "Paging eliminates which fragmentation?", "options": ["Internal", "External", "Both", "Neither"], "correct": 2 },
                { "id": 114, "question": "In paging, the offset determines:", "options": ["Frame number", "Page number", "Displacement within page", "Segment number"], "correct": 3 },
                { "id": 115, "question": "A TLB hit means:", "options": ["The referenced page is in RAM", "The mapping is found in TLB", "No page fault can occur", "The cache must be updated"], "correct": 2 },
                { "id": 116, "question": "Optimal page replacement requires:", "options": ["Recent history", "Future knowledge", "Random choices", "LRU approximation"], "correct": 2 },
                { "id": 117, "question": "Clock (Second-Chance) algorithm uses:", "options": ["Reference bit", "Dirty bit only", "Age counter", "Frequency count"], "correct": 1 },
                { "id": 118, "question": "Thrashing can be mitigated by:", "options": ["Decreasing degree of multiprogramming", "Increasing time quantum", "Turning off DMA", "Using FCFS scheduling"], "correct": 1 },
                { "id": 119, "question": "Segmentation provides:", "options": ["Fixed-size blocks", "Logical view with variable-size segments", "No protection bits", "Fewer page faults"], "correct": 2 },
                { "id": 120, "question": "Memory-mapped I/O means:", "options": ["Devices use separate I/O instructions", "Device registers mapped into address space", "DMA disabled", "Interrupts disabled"], "correct": 2 },
                { "id": 121, "question": "Which file attribute typically stores type/permissions?", "options": ["Data blocks", "Inode/metadata", "Directory entry only", "Superblock"], "correct": 2 },
                { "id": 122, "question": "Directory entry usually stores:", "options": ["File name and inode number", "All block pointers", "Full path of file", "Owner password"], "correct": 1 },
                { "id": 123, "question": "Linked file allocation drawback:", "options": ["External fragmentation", "Sequential access only efficient; poor random access", "Need of extra index blocks", "No free-space management"], "correct": 2 },
                { "id": 124, "question": "Journaling logs:", "options": ["User passwords", "Pending metadata updates for crash recovery", "Process priorities", "DMA channel usage"], "correct": 2 },
                { "id": 125, "question": "SSTF may cause:", "options": ["Head starvation for far requests", "Highest throughput always", "No seeks", "Cyclic head motion"], "correct": 1 },
                { "id": 126, "question": "C-SCAN differs from SCAN by:", "options": ["Serving only inner tracks", "Unidirectional servicing and jump back to start", "Choosing shortest seek next", "No reversal of direction"], "correct": 2 },
                { "id": 127, "question": "Spooling stands for:", "options": ["Simultaneous Peripheral Operations On-Line", "Special Peripheral Operations On-Line", "System Peripheral On-Line", "Serial Peripheral Off-Line"], "correct": 1 },
                { "id": 128, "question": "Interrupt priority ensures:", "options": ["Lowest priority served first", "Higher priority interrupts can preempt lower ones", "No nesting allowed", "FIFO only"], "correct": 2 },
                { "id": 129, "question": "Trap instruction is used to:", "options": ["Enter kernel mode for system calls", "Handle DMA", "Schedule processes", "Disable paging"], "correct": 1 },
                { "id": 130, "question": "Race condition occurs when:", "options": ["Execution order affects outcome on shared data", "No interrupt occurs", "Only one process exists", "All operations are atomic"], "correct": 1 },
                { "id": 131, "question": "Mutex is best for:", "options": ["Multiple readers simultaneous access", "Mutual exclusion of a single critical region", "Signaling events without exclusion", "Avoiding context switches"], "correct": 2 },
                { "id": 132, "question": "Condition variables are used with:", "options": ["Monitors or mutexes for waiting/signaling", "Disk scheduling", "DMA", "Page replacement"], "correct": 1 },
                { "id": 133, "question": "Livelock means:", "options": ["Processes blocked waiting for each other", "Processes change state but make no progress", "CPU halted", "No interrupts"], "correct": 2 },
                { "id": 134, "question": "Copy-on-write pages are initially marked:", "options": ["Read-only and shared", "Writable and private", "No-access", "Dirty"], "correct": 1 },
                { "id": 135, "question": "Dirty bit in a PTE indicates:", "options": ["Page not present", "Page modified and must be written back", "TLB invalid", "Shared page"], "correct": 2 },
                { "id": 136, "question": "Frame allocation policies include:", "options": ["Equal, proportional, priority-based", "Only equal", "Only global", "Only local"], "correct": 1 },
                { "id": 137, "question": "Global page replacement allows:", "options": ["A process to replace only its own frames", "A process to steal frames from others", "No replacement", "Optimal behavior"], "correct": 2 },
                { "id": 138, "question": "Local page replacement confines:", "options": ["Replacement within process’s allocated frames", "Replacement across all processes", "Replacement only in kernel", "No replacement policy"], "correct": 1 },
                { "id": 139, "question": "Unix file permissions rwxr-xr-- in octal are:", "options": ["764", "754", "744", "654"], "correct": 2 },
                { "id": 140, "question": "umask 022 results in default file mode:", "options": ["777", "755 for dirs, 644 for files", "700", "666 always"], "correct": 2 },
                { "id": 141, "question": "Pipes provide:", "options": ["Bidirectional IPC always", "Unidirectional byte stream by default", "Message boundaries preserved", "Network communication only"], "correct": 2 },
                { "id": 142, "question": "Named pipe (FIFO) differs from anonymous pipe by:", "options": ["Requires parent-child relationship", "Exists in filesystem namespace", "Supports network", "Kernel bypass"], "correct": 2 },
                { "id": 143, "question": "Select the best for preserving message boundaries:", "options": ["Shared memory", "Pipes", "Message queues", "Signals"], "correct": 3 },
                { "id": 144, "question": "Signals in UNIX are used to:", "options": ["Transfer large data", "Notify/interrupt processes with small codes", "Replace semaphores", "Schedule tasks"], "correct": 2 },
                { "id": 145, "question": "Which is NOT a valid Linux signal name?", "options": ["SIGKILL", "SIGSTOP", "SIGSPEED", "SIGTERM"], "correct": 3 },
                { "id": 146, "question": "nice value affects:", "options": ["I/O priority only", "CPU scheduling priority in user space", "Disk scheduling", "Memory allocation"], "correct": 2 },
                { "id": 147, "question": "ps aux | grep httpd does:", "options": ["Shows CPU temperature", "Lists processes and filters lines containing httpd", "Kills httpd", "Opens log"], "correct": 2 },
                { "id": 148, "question": "Which command changes group ownership?", "options": ["chown", "chmod", "chgrp", "setfacl"], "correct": 3 },
                { "id": 149, "question": "Which best describes a monolithic kernel?", "options": ["Most services in kernel space", "All services in user space", "No device drivers", "Microkernel with modules"], "correct": 1 },
                { "id": 150, "question": "Hybrid kernels (e.g., XNU) combine:", "options": ["Microkernel ideas with monolithic components", "Only microkernel", "Only monolithic", "Exokernel"], "correct": 1 },
                { "id": 151, "question": "Exokernel approach focuses on:", "options": ["High-level abstractions in kernel", "Exposing hardware to user-space libraries", "No protection", "Only GUI support"], "correct": 2 },
                { "id": 152, "question": "DMA transfers data between:", "options": ["CPU and disk only", "Device and memory with minimal CPU intervention", "Cache and CPU", "MMU and TLB"], "correct": 2 },
                { "id": 153, "question": "Interrupt coalescing primarily aims to:", "options": ["Increase interrupt rate", "Reduce interrupt overhead by batching", "Disable interrupts", "Improve paging"], "correct": 2 },
                { "id": 154, "question": "Disk rotational latency is the time to:", "options": ["Move head to track", "Wait for sector to rotate under head", "Transfer bits to memory", "Update directory entries"], "correct": 2 },
                { "id": 155, "question": "fsync() ensures:", "options": ["Close file", "Data and metadata flushed to stable storage", "Rename file", "Lock file"], "correct": 2 },
                { "id": 156, "question": "Memory barrier (fence) ensures:", "options": ["Faster CPU", "Ordering of memory operations across cores", "No cache misses", "No interrupts"], "correct": 2 },
                { "id": 157, "question": "Producer-Consumer: which semaphore tracks empty slots?", "options": ["Mutex", "Full", "Empty", "Spin"], "correct": 3 },
                { "id": 158, "question": "Readers-Writers: Writer preference variant may cause:", "options": ["Writer starvation", "Reader starvation", "Deadlock always", "No starvation"], "correct": 2 },
                { "id": 159, "question": "A process image includes:", "options": ["Text, data, heap, stack, registers", "Stack only", "PC only", "Filesystem only"], "correct": 1 },
                { "id": 160, "question": "Orphan process is:", "options": ["Parent exits, child continues adopted by init/systemd", "Child exits, parent continues", "Zombie", "Kernel thread"], "correct": 1 },
                { "id": 161, "question": "wait() system call:", "options": ["Terminates process", "Blocks parent until child exits and collects status", "Sends signal to child", "Creates process"], "correct": 2 },
                { "id": 162, "question": "Which improves small interactive job response?", "options": ["Large time quantum", "Short time quantum", "Non-preemptive SJF", "FIFO"], "correct": 2 },
                { "id": 163, "question": "Virtual memory enables:", "options": ["Programs bigger than physical memory", "No page faults", "No swapping", "Direct device access"], "correct": 1 },
                { "id": 164, "question": "Page fault occurs when:", "options": ["TLB hit", "Page not in memory upon access", "Disk full", "File missing"], "correct": 2 },
                { "id": 165, "question": "Which is a stack algorithm (no Belady’s anomaly)?", "options": ["FIFO", "LRU", "Random", "Second-Chance"], "correct": 2 },
                { "id": 166, "question": "Free-space management technique:", "options": ["Bitmaps", "Extent trees only", "Directory entries", "Journals"], "correct": 1 },
                { "id": 167, "question": "UNIX inode does NOT store:", "options": ["Permissions", "Owner UID/GID", "File name", "Block pointers"], "correct": 3 },
                { "id": 168, "question": "Hard link count reaches zero when:", "options": ["File opened", "All directory entries removed; data freed if no open refs", "File renamed", "System reboot"], "correct": 2 },
                { "id": 169, "question": "Sticky bit is commonly used on:", "options": ["/tmp to restrict deletions", "/var/log to compress", "/home to disable writes", "/etc to lock config"], "correct": 1 },
                { "id": 170, "question": "Which command recursively changes permissions on a directory tree?", "options": ["chmod -R", "permset -r", "chown -d", "setperm -R"], "correct": 1 },
                { "id": 171, "question": "chroot changes:", "options": ["User ID", "Root directory for a process", "Kernel version", "Filesystem type"], "correct": 2 },
                { "id": 172, "question": "Cgroup in Linux is used for:", "options": ["User authentication", "Resource control and accounting", "Filesystem journaling", "Network routing"], "correct": 2 },
                { "id": 173, "question": "Namespaces in Linux provide:", "options": ["Memory allocation", "Isolation of resources like PIDs, mounts, net", "Disk encryption", "CPU overclocking"], "correct": 2 },
                { "id": 174, "question": "Which command lists open files by process?", "options": ["lsof", "netstat", "strace", "file"], "correct": 1 },
                { "id": 175, "question": "strace primarily traces:", "options": ["Kernel logs", "System calls and signals of a process", "Network packets", "File contents"], "correct": 2 },
                { "id": 176, "question": "nice +10 generally makes a process:", "options": ["Higher priority", "Lower priority (more nice)", "Real-time", "I/O bound"], "correct": 2 },
                { "id": 177, "question": "Realtime scheduling policy SCHED_FIFO is:", "options": ["Round Robin with quantum", "First-in first-out without time slice for same priority", "Completely fair scheduler", "Priority inverted"], "correct": 2 },
                { "id": 178, "question": "Which syscall pair is used for memory mapping files?", "options": ["open, read", "mmap, munmap", "fork, exec", "brk, sbrk"], "correct": 2 },
                { "id": 179, "question": "Page cache in OS primarily caches:", "options": ["Virtual addresses", "File data pages and block device pages", "Inode tables only", "Swap pages only"], "correct": 2 },
                { "id": 180, "question": "Write-back cache policy means:", "options": ["Writes go directly to disk", "Writes update cache and flush later", "No caching", "Only metadata cached"], "correct": 2 },
                { "id": 181, "question": "fsync on a directory is used to:", "options": ["Flush file data only", "Ensure directory metadata (like new entries) is durable", "Resize directory", "Change permissions"], "correct": 2 },
                { "id": 182, "question": "Page coloring aims to:", "options": ["Improve TLB hit rate", "Reduce cache conflicts by controlling physical page color", "Reduce disk latency", "Increase swap size"], "correct": 2 },
                { "id": 183, "question": "NUMA-aware allocation tries to:", "options": ["Disable multiple CPUs", "Allocate memory close to the CPU that uses it", "Swap more often", "Ignore locality"], "correct": 2 },
                { "id": 184, "question": "Kernel module can be loaded using:", "options": ["lsmod", "insmod/modprobe", "rmmod only", "modinfo only"], "correct": 2 },
                { "id": 185, "question": "init/systemd role at boot:", "options": ["Loads BIOS", "First user-space process managing services", "Sets CPU frequency", "Formats disks"], "correct": 2 },
                { "id": 186, "question": "OOM killer triggers when:", "options": ["CPU 100%", "Kernel cannot reclaim enough memory; kills a process", "Disk full", "Too many PIDs"], "correct": 2 },
                { "id": 187, "question": "Swappiness controls:", "options": ["CPU frequency", "Tendency to swap out anonymous pages vs file cache", "Network buffers", "Process priority"], "correct": 2 },
                { "id": 188, "question": "SELinux enforcing mode means:", "options": ["Policies logged only", "Policies enforced; denials prevent access", "SELinux disabled", "Kernel panic on violation"], "correct": 2 },
                { "id": 189, "question": "Access control list (ACL) extends:", "options": ["POSIX permissions with per-user/group entries", "Only root access", "Encryption keys", "Disk quotas"], "correct": 1 },
                { "id": 190, "question": "FUSE allows:", "options": ["Filesystem in kernel only", "Filesystems implemented in user space", "No caching", "Only network FS"], "correct": 2 },
                { "id": 191, "question": "Symbolic link loop detection prevents:", "options": ["Hard link count overflow", "Infinite pathname resolution loops", "TLB shootdown", "Journaling"], "correct": 2 },
                { "id": 192, "question": "VFS layer provides:", "options": ["Virtual memory", "Filesystem abstraction layer for diverse FS types", "Process scheduling", "DMA control"], "correct": 2 },
                { "id": 193, "question": "Mount option noexec does:", "options": ["Disallows reading", "Disallows executing binaries on that filesystem", "Disallows writing", "Disables opening files"], "correct": 2 },
                { "id": 194, "question": "sync command does:", "options": ["Kills processes", "Flushes filesystem buffers to disk", "Unmounts filesystems", "Rescans PCI"], "correct": 2 },
                { "id": 195, "question": "Which is a characteristic of RTOS?", "options": ["Best average performance", "Deterministic scheduling with bounded latency", "Max throughput only", "No interrupts"], "correct": 2 },
                { "id": 196, "question": "Tickless kernel reduces:", "options": ["Context switches", "Periodic timer interrupts when idle to save power", "Disk seeks", "TLB shoots"], "correct": 2 },
                { "id": 197, "question": "Huge pages (e.g., 2MB) primarily reduce:", "options": ["TLB misses for large memory workloads", "Disk latency", "Context switch time", "Interrupt latency"], "correct": 1 },
                { "id": 198, "question": "Kernel-space vs user-space address separation provides:", "options": ["Performance only", "Protection and isolation", "No benefits", "Faster I/O"], "correct": 2 },
                { "id": 199, "question": "Interrupt masking is acceptable when:", "options": ["Long critical sections", "Very short critical sections that must be atomic", "User mode code", "Disk I/O operations"], "correct": 2 },
                { "id": 200, "question": "Which best describes loadable kernel modules?", "options": ["Require reboot to add features", "Dynamically add/remove kernel functionality at runtime", "User-space libraries", "Replace BIOS"], "correct": 2 }
            ]
        }
    },


}
export default OperatingSystem;