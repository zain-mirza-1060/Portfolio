'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

type Intro = { name: string; title: string };

export default function Navbar({ intro }: { intro: Intro }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 border-b border-slate-800 py-3' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xl font-semibold text-slate-50 hover:text-cyan-500 transition-colors duration-200 focus-visible:outline-cyan-500"
        >
          {intro?.name?.split(' ')[0] || 'Portfolio'}
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === link.id
                    ? 'text-cyan-500'
                    : 'text-slate-300 hover:text-slate-50'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-500" />
                )}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-50 hover:text-cyan-500 transition-colors duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-slate-900/95 border-t border-slate-800"
        >
          <ul className="py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`block text-base font-medium transition-colors duration-200 py-3 min-h-[44px] flex items-center ${
                    activeSection === link.id
                      ? 'text-cyan-500'
                      : 'text-slate-300 hover:text-slate-50'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
} 