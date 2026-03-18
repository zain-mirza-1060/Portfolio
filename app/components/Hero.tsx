'use client';

import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

type Intro = { name: string; title: string; tagline: string };

export default function Hero({ intro }: { intro: Intro }) {
  const initials = intro?.name?.split(' ').map((n) => n[0]).join('').slice(0, 2) || 'ZM';

  return (
    <section id="home" className="h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f172a] to-[#1a1f3a] z-[-1]" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-float" />

      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-lg shadow-primary/30 border-2 border-white/10"
        >
          {initials}
        </motion.div>
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-300">Hello, I&apos;m</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">{intro?.name || 'Zain'}</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{intro?.title || 'Full Stack AI Engineer'}</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">{intro?.tagline || ''}</p>            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary px-6 py-3 rounded-full text-white font-medium cursor-pointer"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-medium cursor-pointer"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex items-center justify-center text-gray-400 hover:text-primary">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <FaArrowDown />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
} 