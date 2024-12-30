'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeMessageProps {
  show: boolean;
  theme?: string;
}

export function ThemeMessage({ show, theme }: ThemeMessageProps) {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (show) {
      setAnimationClass('animate-in fade-in-0 zoom-in-95');
      const timer = setTimeout(() => setAnimationClass('animate-out fade-out-0 zoom-out-95'), 1000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className={`flex items-center gap-2 rounded-lg bg-background/95 p-6 shadow-lg ${animationClass}`}>
        {theme === 'dark' ? (
          <>
            <Moon className="h-6 w-6" />
            <span className="text-lg font-medium">Dark Mode</span>
          </>
        ) : (
          <>
            <Sun className="h-6 w-6" />
            <span className="text-lg font-medium">Light Mode</span>
          </>
        )}
      </div>
    </div>
  );
}