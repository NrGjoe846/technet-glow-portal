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
      {/* Header Card */}
      <Card className="glass-card p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full crystal-border bg-gradient-secondary flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <div className="flex-grow">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-1">
              {student.name}
            </h1>
            <p className="text-muted-foreground mb-2">
              {student.registerNumber} • {student.course}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="crystal-border">
                <Calendar className="w-3 h-3 mr-1" />
                Semester {student.semester}
              </Badge>
              <Badge className="crystal-border">
                <Trophy className="w-3 h-3 mr-1" />
                CGPA: {student.cgpa}/10
              </Badge>
              <Badge className="crystal-border">
                <Target className="w-3 h-3 mr-1" />
                {student.attendance}% Attendance
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="btn-glass">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button className="btn-premium">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </Card>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {percentage.toFixed(1)}%
          </div>
          <p className="text-muted-foreground">Overall Score</p>
          <Progress value={percentage} className="mt-3 h-2" />
        </Card>
        
        <Card className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {student.cgpa}
          </div>
          <p className="text-muted-foreground">Current CGPA</p>
          <Progress value={student.cgpa * 10} className="mt-3 h-2" />
        </Card>
        
        <Card className="glass-card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">
            {student.attendance}%
          </div>
          <p className="text-muted-foreground">Attendance</p>
          <Progress value={student.attendance} className="mt-3 h-2" />
        </Card>
      </div>

      {/* Subjects Table */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-heading font-bold mb-4 text-foreground">
          Subject-wise Performance
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-semibold text-muted-foreground">Subject</th>
                <th className="text-center py-3 px-2 font-semibold text-muted-foreground">Code</th>
                <th className="text-center py-3 px-2 font-semibold text-muted-foreground">Marks</th>
                <th className="text-center py-3 px-2 font-semibold text-muted-foreground">Grade</th>
                <th className="text-center py-3 px-2 font-semibold text-muted-foreground">Credits</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((subject, index) => (
                <tr 
                  key={subject.code} 
                  className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="py-4 px-2">
                    <div className="font-medium text-foreground">{subject.name}</div>
                  </td>
                  <td className="text-center py-4 px-2 text-muted-foreground">
                    {subject.code}
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="font-semibold text-foreground">
                      {subject.marks}/{subject.maxMarks}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <Badge className={`${getGradeColor(subject.grade)} font-bold`}>
                      {subject.grade}
                    </Badge>
                  </td>
                  <td className="text-center py-4 px-2 text-muted-foreground">
                    {subject.credits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Total Credits: {totalCredits}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onBack}
              className="btn-glass"
            >
              ← Back to Search
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};