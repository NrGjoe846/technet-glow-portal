import React from 'react';
import { Download, Share2, Trophy, Calendar, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Subject {
  name: string;
  code: string;
  marks: number;
  maxMarks: number;
  grade: string;
  credits: number;
}

interface StudentData {
  name: string;
  registerNumber: string;
  course: string;
  semester: string;
  cgpa: number;
  attendance: number;
  subjects: Subject[];
  photo?: string;
}

interface StudentResultProps {
  student: StudentData;
  onBack: () => void;
}

export const StudentResult: React.FC<StudentResultProps> = ({ student, onBack }) => {
  const totalCredits = student.subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const percentage = (student.subjects.reduce((sum, subject) => sum + (subject.marks / subject.maxMarks) * subject.credits, 0) / totalCredits) * 100;

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': case 'A': return 'bg-success text-success-foreground';
      case 'B+': case 'B': return 'bg-warning text-warning-foreground';
      case 'C+': case 'C': return 'bg-accent text-accent-foreground';
      default: return 'bg-destructive text-destructive-foreground';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      {/* Enhanced Header Card with Interactions */}
      <Card className="glass-card p-6 mb-6 group hover:shadow-2xl transition-all duration-500">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0 relative">
            <div className="w-20 h-20 rounded-full crystal-border bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="flex-grow">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {student.name}
            </h1>
            <p className="text-muted-foreground mb-2">
              {student.registerNumber} • {student.course}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="crystal-border hover:scale-105 transition-transform duration-200 cursor-default">
                <Calendar className="w-3 h-3 mr-1" />
                Semester {student.semester}
              </Badge>
              <Badge className="crystal-border hover:scale-105 transition-transform duration-200 cursor-default bg-gradient-to-r from-primary/20 to-primary-glow/20">
                <Trophy className="w-3 h-3 mr-1" />
                CGPA: {student.cgpa}/10
              </Badge>
              <Badge className="crystal-border hover:scale-105 transition-transform duration-200 cursor-default">
                <Target className="w-3 h-3 mr-1" />
                {student.attendance}% Attendance
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="btn-glass ripple group">
              <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              <span>Share</span>
            </Button>
            <Button className="btn-premium ripple group">
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              <span>Download</span>
            </Button>
          </div>
        </div>
        
        {/* Animated Progress Line */}
        <div className="mt-4 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>

      {/* Enhanced Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 cursor-default">
          <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
            {percentage.toFixed(1)}%
          </div>
          <p className="text-muted-foreground mb-3">Overall Score</p>
          <Progress value={percentage} className="h-2 transition-all duration-500 group-hover:h-3" />
          <div className="mt-2 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Excellent Performance! 🎉
          </div>
        </Card>
        
        <Card className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 cursor-default">
          <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
            {student.cgpa}
          </div>
          <p className="text-muted-foreground mb-3">Current CGPA</p>
          <Progress value={student.cgpa * 10} className="h-2 transition-all duration-500 group-hover:h-3" />
          <div className="mt-2 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {student.cgpa >= 9 ? 'Outstanding! 🏆' : student.cgpa >= 8 ? 'Great Work! 👏' : 'Keep Going! 💪'}
          </div>
        </Card>
        
        <Card className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 cursor-default">
          <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
            {student.attendance}%
          </div>
          <p className="text-muted-foreground mb-3">Attendance</p>
          <Progress value={student.attendance} className="h-2 transition-all duration-500 group-hover:h-3" />
          <div className="mt-2 text-xs text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {student.attendance >= 85 ? 'Perfect! ✅' : 'Improve Required ⚠️'}
          </div>
        </Card>
      </div>

      {/* Enhanced Interactive Subjects Table */}
      <Card className="glass-card p-6 group">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Subject-wise Performance
          </h3>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live Data</span>
          </div>
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-gradient-to-r from-primary/5 to-transparent">
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">Subject</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">Code</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">Marks</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">Grade</th>
                  <th className="text-center py-4 px-4 font-semibold text-muted-foreground hover:text-primary transition-colors cursor-default">Credits</th>
                </tr>
              </thead>
              <tbody>
                {student.subjects.map((subject, index) => (
                  <tr 
                    key={subject.code} 
                    className="border-b border-border/50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent transition-all duration-300 group/row hover:scale-[1.01] animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-foreground group-hover/row:text-primary transition-colors duration-300">
                        {subject.name}
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground group-hover/row:text-primary transition-colors duration-300">
                      <code className="bg-secondary/30 px-2 py-1 rounded text-xs font-mono">
                        {subject.code}
                      </code>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-semibold text-foreground group-hover/row:text-primary transition-colors duration-300">
                          {subject.marks}
                        </span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-muted-foreground">{subject.maxMarks}</span>
                      </div>
                      <div className="w-full bg-secondary/30 rounded-full h-1 mt-1 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-500 group-hover/row:scale-x-105"
                          style={{ width: `${(subject.marks / subject.maxMarks) * 100}%` }}
                        />
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Badge className={`${getGradeColor(subject.grade)} font-bold group-hover/row:scale-110 transition-transform duration-300`}>
                        {subject.grade}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex items-center justify-center">
                        <span className="text-muted-foreground group-hover/row:text-primary transition-colors duration-300">
                          {subject.credits}
                        </span>
                        <div className="ml-1 flex">
                          {[...Array(subject.credits)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-primary/30 rounded-full mx-0.5" />
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border bg-gradient-to-r from-transparent via-primary/5 to-transparent">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Trophy className="w-4 h-4" />
              <span>Total Credits: <strong className="text-primary">{totalCredits}</strong></span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onBack}
              className="btn-glass ripple group"
            >
              <span className="mr-2 group-hover:mr-3 transition-all duration-300">←</span>
              <span>Back to Search</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};