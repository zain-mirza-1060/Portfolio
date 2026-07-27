'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Project = { name: string; tagline: string; tech: string; bullets: string[] };

export default function Projects({
  industryProjects,
  personalProjects,
}: {
  industryProjects: Project[];
  personalProjects: Project[];
}) {
  // Merge all projects with type tags
  const allProjects = [
    ...industryProjects.map(p => ({ ...p, type: 'Industry' as const, featured: true })),
    ...personalProjects.map(p => ({ ...p, type: 'Personal' as const, featured: false }))
  ];

  // Featured projects (first 2 industry projects get special treatment)
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 2);
  const regularProjects = [
    ...allProjects.filter(p => p.featured).slice(2),
    ...allProjects.filter(p => !p.featured)
  ];

  return (
    <section id="projects" className="py-20 md:py-28 lg:py-36 relative bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header - left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-3">
            Selected Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Production systems spanning AI/ML platforms, drone fleet management, mental health services, and legal tech
          </p>
        </motion.div>

        {/* Featured Projects - Large format */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project, index) => (
              <Tilt3DCard key={index} index={index}>
                <div className="p-8 md:p-10">
                  {/* Project header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-50">
                          {project.name}
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-md text-cyan-500">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-lg text-slate-400">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(',').map((t, i) => (
                      <span key={i} className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300 font-mono">
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Key achievements */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.bullets.map((bullet, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        <p className="text-slate-300 text-base leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        )}

        {/* Regular Projects - Grid */}
        {regularProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularProjects.map((project, index) => (
              <Tilt3DCard key={index} index={index + featuredProjects.length} smaller>
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Project header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                        {project.name}
                      </h3>
                      <span className="text-xs font-medium px-2 py-0.5 bg-slate-700/50 border border-slate-600/50 rounded text-slate-400">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-slate-400">{project.tagline}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.split(',').map((t, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300 font-mono">
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Key points */}
                  <ul className="space-y-2 flex-1">
                    {project.bullets.slice(0, 3).map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-slate-300 text-sm">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tilt3DCard>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 text-center md:text-left"
        >
          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 3D Tilt Card Component
function Tilt3DCard({
  children,
  index,
  smaller = false,
}: {
  children: React.ReactNode;
  index: number;
  smaller?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 relative group"
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.08), transparent 40%)',
        }}
      />

      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-px bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl" />
      </div>

      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.article>
  );
}
