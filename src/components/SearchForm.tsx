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
    <Card className="glass-card p-8 w-full max-w-md mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-gradient-primary animate-glow">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Student Portal
        </h2>
        <p className="text-muted-foreground">
          Enter your details to access your marks and profile
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 bg-secondary/50 border-border focus:border-primary crystal-border"
            disabled={isLoading}
          />
        </div>

        <div className="relative">
          <Hash className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter register number"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
            className="pl-10 bg-secondary/50 border-border focus:border-primary crystal-border"
            disabled={isLoading}
          />
        </div>

        <Button
          type="submit"
          className="w-full btn-premium h-12 text-lg font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Searching...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Access Portal
            </div>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Secure access protected by advanced encryption
        </p>
      </div>
    </Card>
  );
};