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
    <footer className="relative py-8 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {intro?.name || 'Zain Mirza'}. All rights reserved.
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-8 -top-6 p-3 bg-gradient-primary rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white" />
      </button>
    </footer>
  );
} 