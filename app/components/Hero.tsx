'use client';

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type Intro = { name: string; title: string; tagline: string; yearsExperience: string };

export default function Hero({ intro }: { intro: Intro }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="min-h-[100dvh] flex items-center relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-slate-900 z-[-1]">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            }}
            animate={shouldReduceMotion ? {} : {
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
            }}
            animate={shouldReduceMotion ? {} : {
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.2, 1],
            }}
            transition={shouldReduceMotion ? {} : {
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>
        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20" ref={containerRef}>
        <div className="max-w-4xl">
          {/* Badge entrance */}
          <motion.p
            className="text-cyan-500 text-base md:text-lg font-semibold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Senior Software Engineer • {intro?.yearsExperience || '3+'} Years
          </motion.p>

          {/* Name with character stagger */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6 text-slate-50">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              {intro?.name || 'Zain Ul Abideen'}
            </motion.span>
          </h1>

          {/* Specialization with word reveal */}
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-slate-200 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Building end-to-end AI solutions from GPU-optimized inference to production microservices
          </motion.h2>

          {/* Key differentiators with stagger */}
          <ul className="space-y-2 mb-8 text-slate-300 text-base md:text-lg">
            {[
              'Led teams of 5+ developers through full AI application lifecycle',
              'Architected RAG systems with Milvus, LLM integrations, and multi-lingual support',
              'Migrated monoliths to microservices, GPU deployments, AWS cloud-native services',
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.1,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <span className="text-cyan-500 mt-1">▸</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>

          {/* Magnetic CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <MagneticButton href="#projects" primary>
              View Selected Work
            </MagneticButton>
            <MagneticButton href="#contact">
              Get In Touch
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MagneticButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull effect - stronger on desktop
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-block font-semibold px-8 py-3 rounded-lg overflow-hidden transition-colors duration-200 ${
        primary
          ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
          : 'border-2 border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-500'
      }`}
    >
      {/* Shine effect on hover */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
} 