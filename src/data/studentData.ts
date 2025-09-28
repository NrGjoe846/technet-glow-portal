// ---------- Interfaces ----------
export interface Subject {
  name: string;
  code: string;
  marks: number | string;
  maxMarks: number;
  grade: string;
  credits: number;
}

export interface StudentData {
  name: string;
  registerNumber: string;
  course: string;
  type: string;
  subjects: Subject[];
  batch?: string;
  startDate?: string;
  endDate?: string;
  certificateNumber?: string;
  activeStatus?: string;
  overall?: string;
  viva?: number | string;
  finalGrade?: string;
}

// ---------- Combined Database ----------
export const sampleStudents: StudentData[] = [
  // Morning Batch (10.45 - 11.45)
  {
    name: "MONISHA.S",
    registerNumber: "V202506C4774",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3282",
    activeStatus: "90% Completed",
    overall: "Completed",
    viva: 80,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 80, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "SANTHOSH.S",
    registerNumber: "V202504C4735",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3274",
    activeStatus: "75% Completed",
    overall: "Completed",
    viva: "90",
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 0, maxMarks: 100, grade: "F", credits: 1 }
    ]
  },
  {
    name: "PRADEEPA.M",
    registerNumber: "V202503C4707",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3275",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 65,
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 15, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 24, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 65, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  {
    name: "DARSANI.T",
    registerNumber: "V202505C4760",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Morning Batch (10.45 - 11.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3276",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 70,
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 30, maxMarks: 50, grade: "B", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 70, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  {
    name: "SAMEERA BANU.M",
    registerNumber: "V202506C4779",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3277",
    activeStatus: "75% Completed",
    overall: "Completed",
    viva: 60,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 38, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 25, maxMarks: 50, grade: "C+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 60, maxMarks: 100, grade: "B", credits: 1 }
    ]
  },

  // Afternoon Batch (3.45 - 4.45)
  {
    name: "SUDIPTIKA.J",
    registerNumber: "V202506C4781",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3283",
    activeStatus: "90% Completed",
    overall: "Completed",
    viva: 90,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 90, maxMarks: 100, grade: "A+", credits: 1 }
    ]
  },
  {
    name: "DHARSHINI.V",
    registerNumber: "V202506C4773",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3284",
    activeStatus: "75% Completed",
    overall: "Completed",
    viva: 75,
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 10, maxMarks: 50, grade: "F", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 75, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "PRANAV.G",
    registerNumber: "V202506C4776",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3285",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 70,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 40, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 70, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  {
    name: "YOGESH KUMAR.S",
    registerNumber: "V202506C4778",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "JUN.25",
    endDate: "AUG.25",
    certificateNumber: "3279",
    activeStatus: "95% Completed",
    overall: "Completed",
    viva: 95,
    finalGrade: "O",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 45, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 95, maxMarks: 100, grade: "A+", credits: 1 }
    ]
  },
  {
    name: "JAYAKARTHICK.A",
    registerNumber: "V202504C4757",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Afternoon Batch (3.45 - 4.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3289",
    activeStatus: "75% Completed",
    overall: "Completed",
    viva: "50",
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 30, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 30, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 15, maxMarks: 50, grade: "F", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 15, maxMarks: 50, grade: "F", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 0, maxMarks: 50, grade: "F", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 0, maxMarks: 100, grade: "F", credits: 1 }
    ]
  },

  // Evening Batch
  {
    name: "ROSHINI.S",
    registerNumber: "V202505C4763",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3278",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 75,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 45, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 75, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "KEERTHI VARSHA.G",
    registerNumber: "V202505C4769",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3281",
    activeStatus: "90% Completed",
    overall: "Completed",
    viva: 80,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 40, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 45, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 48, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 80, maxMarks: 100, grade: "A", credits: 1 }
    ]
  },
  {
    name: "MOHIT KUMAR.A",
    registerNumber: "V202404C4611",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3286",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: 70,
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 50, maxMarks: 50, grade: "A+", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 25, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 30, maxMarks: 50, grade: "B", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 40, maxMarks: 50, grade: "A", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 70, maxMarks: 100, grade: "B+", credits: 1 }
    ]
  },
  {
    name: "ZAFAR KHAN.D",
    registerNumber: "V202504C4748",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3288",
    activeStatus: "50% Completed",
    overall: "Completed",
    viva: "25",
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 10, maxMarks: 50, grade: "F", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 20, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 20, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 20, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 25, maxMarks: 50, grade: "C", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 0, maxMarks: 100, grade: "F", credits: 1 }
    ]
  },
  {
    name: "SAMUNDEESWARI.S",
    registerNumber: "V202505C4756",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Evening Batch (6.45 - 7.45)",
    startDate: "MAY.25",
    endDate: "JUL.25",
    certificateNumber: "3280",
    activeStatus: "80% Completed",
    overall: "Completed",
    viva: "50",
    finalGrade: "B",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 30, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 30, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 20, maxMarks: 50, grade: "D", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 30, maxMarks: 50, grade: "C", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 0, maxMarks: 50, grade: "F", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 0, maxMarks: 100, grade: "F", credits: 1 }
    ]
  },

  // Morning Batch (9.45 - 11.45)
  {
    name: "ANIRUDH.S",
    registerNumber: "V202506C4771",
    course: "Python Programming",
    type: "Certificate Course",
    batch: "Morning Batch (9.45 - 11.45)",
    startDate: "JUL.25",
    endDate: "SEP.25",
    certificateNumber: "3287",
    activeStatus: "90% In Progress",
    overall: "In Progress",
    viva: "Completed",
    finalGrade: "A",
    subjects: [
      { name: "Test 1", code: "PY101", marks: 45, maxMarks: 50, grade: "A", credits: 2 },
      { name: "Test 2", code: "PY102", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 3", code: "PY103", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 4", code: "PY104", marks: 35, maxMarks: 50, grade: "B+", credits: 2 },
      { name: "Test 5", code: "PY105", marks: 50, maxMarks: 50, grade: "A+", credits: 3 },
      { name: "Viva Voice", code: "PY106", marks: 0, maxMarks: 100, grade: "Completed", credits: 1 }
    ]
  }
];

// AI Course Students
export const aiStudents: StudentData[] = [
  {
    name: "DARSANI.T",
    registerNumber: "V202505C4760",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3290",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "B",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 85, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 80, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 82, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 78, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 85, maxMarks: 100, grade: "B+", credits: 3 }
    ]
  },
  {
    name: "KEERTHI VARSHA.G",
    registerNumber: "V202505C4769",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3291",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "A",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 92, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 88, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 90, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 85, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 89, maxMarks: 100, grade: "A", credits: 3 }
    ]
  },
  {
    name: "PRADEEPA.M",
    registerNumber: "V202503C4707",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3292",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "B",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 80, maxMarks: 100, grade: "B", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 75, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 78, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 82, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 79, maxMarks: 100, grade: "B", credits: 3 }
    ]
  },
  {
    name: "ROSHINI.S",
    registerNumber: "V202505C4763",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3293",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "A",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 90, maxMarks: 100, grade: "A", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 87, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 89, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 86, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 88, maxMarks: 100, grade: "A", credits: 3 }
    ]
  },
  {
    name: "SAMEERA BANU.M",
    registerNumber: "V202506C4779",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3294",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "B",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 83, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 79, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 81, maxMarks: 100, grade: "B+", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 77, maxMarks: 100, grade: "B", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 84, maxMarks: 100, grade: "B+", credits: 3 }
    ]
  },
  {
    name: "SAMUNDEESWARI.S",
    registerNumber: "V202505C4756",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3295",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "A",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 91, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 86, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 88, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 89, maxMarks: 100, grade: "A", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 87, maxMarks: 100, grade: "A", credits: 3 }
    ]
  },
  {
    name: "SANTHOSH.S",
    registerNumber: "V202504C4735",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3296",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "O",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 98, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 95, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 97, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 94, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 96, maxMarks: 100, grade: "A+", credits: 3 }
    ]
  },
  {
    name: "YOGESH KUMAR.S",
    registerNumber: "V202506C4778",
    course: "Artificial Intelligence",
    type: "Certificate Course",
    batch: "AI Batch (AUG - OCT)",
    startDate: "AUG.25",
    endDate: "OCT.25",
    certificateNumber: "3297",
    activeStatus: "100% Completed",
    overall: "Completed",
    finalGrade: "O",
    subjects: [
      { name: "Titanic Survival Prediction", code: "AI101", marks: 99, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "IMDB Movie Rating Prediction", code: "AI102", marks: 96, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Iris Flower Classifier", code: "AI103", marks: 98, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Sales Prediction", code: "AI104", marks: 97, maxMarks: 100, grade: "A+", credits: 3 },
      { name: "Credit Card Fraud Classification", code: "AI105", marks: 95, maxMarks: 100, grade: "A+", credits: 3 }
    ]
  }
];

// Combined database for search
export const allStudents: StudentData[] = [...sampleStudents, ...aiStudents];
