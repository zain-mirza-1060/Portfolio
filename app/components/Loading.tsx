'use client';

import { motion } from 'framer-motion';

type Intro = { name: string };

export default function Loading({ intro }: { intro: Intro }) {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-dark">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="text-gradient">Welcome</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          {intro?.name || 'Portfolio'}
        </motion.h2>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <div className="w-16 h-16 border-t-4 border-primary border-solid rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    </div>
  );
} 