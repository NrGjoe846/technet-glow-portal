import React, { useState } from 'react';
import { Search, User, Hash, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface SearchFormProps {
  onSearch: (data: { name: string; registerNumber: string }) => void;
  isLoading?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [name, setName] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !registerNumber.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both name and register number.",
        variant: "destructive",
      });
      return;
    }

    onSearch({ name: name.trim(), registerNumber: registerNumber.trim() });
  };

  return (
    <div className="relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <Card className="glass-card p-8 w-full max-w-md mx-auto animate-fade-in relative z-10 group">
        {/* Header with Enhanced Glassmorphism */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative p-4 rounded-full bg-gradient-primary animate-glow group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <h2 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            Student Portal
          </h2>
          <p className="text-muted-foreground">
            Enter your details to access your marks and profile
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Enhanced Input Fields */}
          <div className="relative group">
            <div className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <User className="w-full h-full" />
            </div>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 glass-input h-12 transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
              disabled={isLoading}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-3 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
              <Hash className="w-full h-full" />
            </div>
            <Input
              type="text"
              placeholder="Enter register number"
              value={registerNumber}
              onChange={(e) => setRegisterNumber(e.target.value)}
              className="pl-10 glass-input h-12 transition-all duration-300 hover:scale-[1.02] focus:scale-[1.02]"
              disabled={isLoading}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Enhanced Submit Button */}
          <Button
            type="submit"
            className="w-full btn-premium h-12 text-lg font-semibold ripple group"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                <span className="animate-pulse">Searching...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Access Portal</span>
              </div>
            )}
          </Button>
        </form>

        {/* Interactive Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-2 glass-card rounded-full text-xs text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300 cursor-default">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Secure access protected by advanced encryption
          </div>
        </div>

        {/* Animated Border Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
             style={{ 
               background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)',
               animation: 'shimmer 3s ease-in-out infinite'
             }} />
      </Card>
    </div>
  );
};