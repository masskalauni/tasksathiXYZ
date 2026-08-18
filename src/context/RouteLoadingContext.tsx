import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteLoadingContextType {
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  stopLoading: () => void;
  setCustomProgress: (val: number) => void;
}

const RouteLoadingContext = createContext<RouteLoadingContextType | undefined>(undefined);

export const RouteLoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setProgress(25);
    setTimeout(() => {
      setProgress((prev) => (prev < 80 ? 75 : prev));
    }, 120);
  }, []);

  const stopLoading = useCallback(() => {
    setProgress(100);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 220);
    return () => clearTimeout(timeout);
  }, []);

  const setCustomProgress = useCallback((val: number) => {
    setProgress(Math.min(Math.max(val, 0), 100));
  }, []);

  // Automatic route transition listener
  useEffect(() => {
    setIsLoading(true);
    setProgress(35);

    const timer1 = setTimeout(() => {
      setProgress(85);
    }, 60);

    const timer2 = setTimeout(() => {
      setProgress(100);
    }, 180);

    const timer3 = setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 320);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [location.pathname, location.search]);

  return (
    <RouteLoadingContext.Provider
      value={{
        isLoading,
        progress,
        startLoading,
        stopLoading,
        setCustomProgress,
      }}
    >
      {children}
    </RouteLoadingContext.Provider>
  );
};

export const useRouteLoading = (): RouteLoadingContextType => {
  const context = useContext(RouteLoadingContext);
  if (!context) {
    throw new Error('useRouteLoading must be used within a RouteLoadingProvider');
  }
  return context;
};
