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
    
}
export default OperatingSystem;