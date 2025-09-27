import React, { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { StudentResult } from '@/components/StudentResult';
import { Sparkles, Shield, Zap } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

// Sample data - in real app this would come from API
const sampleStudents = [
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

export const MarksPortal: React.FC = () => {
  const [currentStudent, setCurrentStudent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchData: { name: string; registerNumber: string }) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Find student (case-insensitive search)
    const student = sampleStudents.find(s => 
      s.name.toLowerCase().includes(searchData.name.toLowerCase()) ||
      s.registerNumber.toLowerCase() === searchData.registerNumber.toLowerCase()
    );
    
    if (student) {
      setCurrentStudent(student);
    } else {
      // No student found - you could show an error state here
      setCurrentStudent(null);
    }
    
    setIsLoading(false);
  };

  const handleBack = () => {
    setCurrentStudent(null);
  };

  if (currentStudent) {
    return (
      <div className="min-h-screen bg-gradient-hero p-4 md:p-8">
        <div className="container mx-auto">
          <StudentResult student={currentStudent} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Crystalline blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200" />
      
      {/* 3D Glass Crystal Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-400/30 to-blue-600/50 backdrop-blur-sm border border-blue-300/40 rounded-lg shadow-lg animate-float"
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${10 + Math.floor(i / 4) * 30}%`,
              transform: `rotate(${i * 30}deg) rotateY(${i * 45}deg)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i % 3)}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-primary animate-glow">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-2">
              Technet <span className="text-primary">Portal</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium student marks portal with secure access and beautiful results display
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 pb-8">
          <div className="w-full max-w-md">
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </main>

        {/* Features */}
        <section className="pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center animate-fade-in" style={{animationDelay: '200ms'}}>
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Secure Access</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced encryption protects your academic data
                </p>
              </div>
              
              <div className="glass-card p-6 text-center animate-fade-in" style={{animationDelay: '400ms'}}>
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get your marks and transcripts in seconds
                </p>
              </div>
              
              <div className="glass-card p-6 text-center animate-fade-in" style={{animationDelay: '600ms'}}>
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-2">Beautiful Design</h3>
                <p className="text-sm text-muted-foreground">
                  Premium interface with stunning visual effects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-6 px-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Technet Soft Systems. All rights reserved.
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            Demo users: "Arjun Patel" (21CS001) • "Priya Sharma" (21EC015)
          </div>
        </footer>
      </div>
    </div>
  );
};