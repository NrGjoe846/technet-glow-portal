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
      
      {/* Enhanced 3D Glass Crystal Elements with Interactive Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-blue-400/20 to-blue-600/40 backdrop-blur-sm border border-blue-300/30 rounded-lg shadow-xl floating-element cursor-pointer hover:scale-110 transition-transform duration-300"
            style={{
              width: `${16 + (i % 3) * 8}px`,
              height: `${16 + (i % 3) * 8}px`,
              left: `${15 + (i % 5) * 18}%`,
              top: `${8 + Math.floor(i / 5) * 25}%`,
              transform: `rotate(${i * 25}deg) rotateY(${i * 30}deg)`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${5 + (i % 4)}s`,
              boxShadow: `
                0 8px 32px rgba(59, 130, 246, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 1px 0 rgba(255, 255, 255, 0.05)
              `
            }}
            onClick={(event) => {
              // Add ripple effect on click
              const target = event.currentTarget as HTMLElement;
              const ripple = document.createElement('div');
              ripple.className = 'absolute inset-0 bg-white/30 rounded-lg animate-ping';
              ripple.style.animation = 'ping 0.6s cubic-bezier(0, 0, 0.2, 1)';
              target.appendChild(ripple);
              setTimeout(() => ripple.remove(), 600);
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

        {/* Enhanced Interactive Features Section */}
        <section className="pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center group cursor-default" style={{animationDelay: '200ms'}}>
                <div className="mb-4 relative">
                  <Shield className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Secure Access
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Advanced encryption protects your academic data
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="glass-card p-6 text-center group cursor-default" style={{animationDelay: '400ms'}}>
                <div className="mb-4 relative">
                  <Zap className="w-8 h-8 text-primary mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Instant Results
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Get your marks and transcripts in seconds
                </p>
                <div className="mt-3 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 text-center group cursor-default" style={{animationDelay: '600ms'}}>
                <div className="mb-4 relative">
                  <Sparkles className="w-8 h-8 text-primary mx-auto group-hover:scale-110 group-hover:rotate-180 transition-all duration-500" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Beautiful Design
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Premium interface with stunning visual effects
                </p>
                <div className="mt-3 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
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