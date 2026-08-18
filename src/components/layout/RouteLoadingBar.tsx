import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface RouteLoadingBarProps {
  isLoading: boolean;
  progress?: number;
}

export const RouteLoadingBar: React.FC<RouteLoadingBarProps> = ({ isLoading, progress = 70 }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-route-loader-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
          className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1 overflow-hidden"
          id="global-route-loading-bar"
        >
          {/* Main animated progress beam */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.8)] relative"
          >
            {/* Glowing lead edge tip */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/90 shadow-[0_0_16px_#60A5FA]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
