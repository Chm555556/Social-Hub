'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { ThemeMessage } from './ThemeMessage';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [showMessage, setShowMessage] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setShowMessage(true);
    setTheme(newTheme);
    setTimeout(() => setShowMessage(false), 1500);
  };

  if (!mounted) return null;

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="relative w-10 h-10 rounded-full transition-colors hover:bg-accent"
        onClick={toggleTheme}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
        <div className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100">
          <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
          <div className="absolute inset-[-4px] rounded-full bg-primary/5 animate-pulse delay-75" />
          <div className="absolute inset-[-8px] rounded-full bg-primary/5 animate-pulse delay-150" />
        </div>
      </Button>
      <ThemeMessage show={showMessage} theme={theme} />
    </>
  );
}