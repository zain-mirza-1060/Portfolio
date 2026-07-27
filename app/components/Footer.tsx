'use client';

import { FaArrowUp } from 'react-icons/fa';

type Intro = { name: string };

export default function Footer({ intro }: { intro: Intro }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {intro?.name || 'Zain Mirza'}. All rights reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-6 p-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-lg transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
} 