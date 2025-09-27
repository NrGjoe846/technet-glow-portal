// Student Database with Python Course Data
export interface Subject {
  name: string;
  code: string;
  marks: number;
  maxMarks: number;
  grade: string;
  credits: number;
}

export interface StudentData {
  name: string;
  registerNumber: string;
  course: string;
  semester: string;
  cgpa: number;
  attendance: number;
  subjects: Subject[];
  batch?: string;
  startDate?: string;
  endDate?: string;
  certificateNumber?: string;
  activeStatus?: string;
  overall?: string;
  viva?: number | string;
}

// Convert Python course data to our format
const pythonStudents: StudentData[] = [
  // Morning Batch (10.45 - 11.45)
  {
    name: "MONISHA.S",
    registerNumber: "V202506C4774",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 8.5,
    attendance: 90,
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3282",
    activeStatus: "90% Completed",
    overall: "Completed",
    viva: 80,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 80, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "SANTHOSH.S",
    registerNumber: "V202505C4701",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 7.8,
    attendance: 75,
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3274",
    activeStatus: "75% Pending",
    overall: "Pending",
    viva: "Absent",
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 0, maxMarks: 100, grade: "F", credits: 1 }
    ]
  },
  {
    name: "PRADEEPA.M",
    registerNumber: "V202503C4707",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 6.8,
    attendance: 80,
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3275",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 65,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 15, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 24, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 65, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  {
    name: "DARSANI.T",
    registerNumber: "V202505C4760",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 7.2,
    attendance: 80,
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3276",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 70,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 30, maxMarks: 50, grade: "B", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 70, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  // Afternoon Batch (3.45 - 4.45)
  {
    name: "SUDIPTIKA.J",
    registerNumber: "V202506C4781",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 9.0,
    attendance: 90,
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3283",
    activeStatus: "90% Completed",
    overall: "Completed",
    viva: 90,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 90, maxMarks: 100, grade: "A+", credits: 1 }
    ]
  },
  {
    name: "DHARSHINI.V",
    registerNumber: "V202506C4773",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 7.0,
    attendance: 75,
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3284",
    activeStatus: "75% Completed",
    overall: "Completed",
    viva: 75,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 10, maxMarks: 50, grade: "F", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 75, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "PRANAV.G",
    registerNumber: "V202506C4776",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 8.2,
    attendance: 80,
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3285",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 70,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 40, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 70, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  // Evening Batch (6.45 - 7.45)
  {
    name: "ROSHINI.S",
    registerNumber: "V202505C4763",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 8.0,
    attendance: 80,
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3278",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 75,
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 75, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  // Morning Batch (9.45 - 11.45)
  {
    name: "ANIRUDH.S",
    registerNumber: "V202506C4771",
    course: "Python Programming",
    semester: "Certificate Course",
    cgpa: 8.5,
    attendance: 90,
    batch: "Morning Batch (9.45 - 11.45)",
    startDate: "JUL.25",
    endDate: "SEP.25",
    certificateNumber: "3287",
    activeStatus: "90% In Progress",
    overall: "In Progress",
    viva: "Pending",
    subjects: [
      { name: "Python Fundamentals", code: "PY101", marks: 45, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Data Structures", code: "PY102", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Object Oriented Programming", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Web Development", code: "PY104", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Final Project", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voce", code: "PY106", marks: 0, maxMarks: 100, grade: "Pending", credits: 1 }
    ]
  }
];

// Original sample students (keeping for backward compatibility)
const originalStudents: StudentData[] = [
  {
    name: "Arjun Patel",
    registerNumber: "21CS001",
    course: "Computer Science Engineering",
    semester: "6",
    cgpa: 8.7,
    attendance: 92,
    subjects: [
      { name: "Data Structures", code: "CS301", marks: 87, maxMarks: 100, grade: "A", credits: 4 },
      { name: "Database Systems", code: "CS302", marks: 92, maxMarks: 100, grade: "A+", credits: 4 },
      { name: "Computer Networks", code: "CS303", marks: 78, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "Software Engineering", code: "CS304", marks: 85, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Algorithm Analysis", code: "CS305", marks: 90, maxMarks: 100, grade: "A+", credits: 4 }
    ]
  },
  {
    name: "Priya Sharma",
    registerNumber: "21EC015",
    course: "Electronics & Communication",
    semester: "4",
    cgpa: 9.1,
    attendance: 88,
    subjects: [
      { name: "Digital Electronics", code: "EC201", marks: 94, maxMarks: 100, grade: "A+", credits: 4 },
      { name: "Signals & Systems", code: "EC202", marks: 89, maxMarks: 100, grade: "A", credits: 4 },
      { name: "Communication Theory", code: "EC203", marks: 91, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Microprocessors", code: "EC204", marks: 86, maxMarks: 100, grade: "A", credits: 3 }
    ]
  }
];

// Combined student database
export const sampleStudents: StudentData[] = [...pythonStudents, ...originalStudents];
