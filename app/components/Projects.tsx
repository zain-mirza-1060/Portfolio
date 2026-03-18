'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Project = { name: string; tagline: string; tech: string; bullets: string[] };

export default function Projects({
  industryProjects,
  personalProjects,
}: {
  industryProjects: Project[];
  personalProjects: Project[];
}) {
  const [activeTab, setActiveTab] = useState<'industry' | 'personal'>('industry');
  const projects = activeTab === 'industry' ? industryProjects : personalProjects;

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f172a] to-[#1a1f3a] z-[-1]" />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'industry' ? 'bg-gradient-primary text-white' : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              Industry Projects
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'personal' ? 'bg-gradient-primary text-white' : 'bg-white/5 hover:bg-white/10 text-gray-300'
              }`}
            >
              Personal Projects
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.tagline}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(',').map((t, i) => (
                  <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {t.trim()}
                  </span>
                ))}
              </div>
              <ul className="space-y-1 text-gray-300 text-sm flex-1">
                {project.bullets.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="bg-gradient-primary inline-block px-8 py-3 rounded-full text-white font-medium">
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
