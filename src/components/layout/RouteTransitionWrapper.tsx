import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { RouteLoadingBar } from './RouteLoadingBar';
import { useRouteLoading } from '@/src/context/RouteLoadingContext';

export interface RouteTransitionWrapperProps {
  children: React.ReactNode;
}

export const RouteTransitionWrapper: React.FC<RouteTransitionWrapperProps> = ({ children }) => {
  const location = useLocation();
  const { isLoading, progress } = useRouteLoading();

  return (
    <>
      {/* Global Top Progress Beam */}
      <RouteLoadingBar isLoading={isLoading} progress={progress} />

      {/* Route Animation Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
