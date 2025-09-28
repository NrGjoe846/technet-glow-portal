import React, { useState } from 'react';
import { SearchForm } from '@/components/SearchForm';
import { StudentResult } from '@/components/StudentResult';
import { allStudents, StudentData } from '@/data/studentData';
import { toast } from '@/hooks/use-toast';

export const MarksPortal: React.FC = () => {
  const [currentStudent, setCurrentStudent] = useState<StudentData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchData: { name: string; registerNumber: string }) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Search for student in the database
      const student = allStudents.find(s => 
        s.name.toLowerCase().includes(searchData.name.toLowerCase()) &&
        s.registerNumber.toLowerCase() === searchData.registerNumber.toLowerCase()
      );

      if (student) {
        setCurrentStudent(student);
        toast({
          title: "Student Found!",
          description: `Welcome ${student.name}. Your results are ready.`,
        });
      } else {
        toast({
          title: "Student Not Found",
          description: "Please check your name and register number and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Search Error",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setCurrentStudent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technet Portal
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium Student Marks System
          </p>
          <div className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Powered by <span className="font-semibold text-primary">Technet Soft Systems</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {currentStudent ? (
            <StudentResult student={currentStudent} onBack={handleBack} />
          ) : (
            <div className="flex items-center justify-center min-h-[60vh]">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-4 inline-block">
            <p className="text-sm text-muted-foreground">
              © 2025 Technet Soft Systems. All rights reserved. | Developed by Nehemiah Nesanathan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
