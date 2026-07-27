'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

type TechStacks = { languages: string; databases: string; frameworks: string; tools: string; aiMl: string };

export default function Skills({ techStacks }: { techStacks: TechStacks }) {
  // Parse and tier skills
  const languages = techStacks?.languages?.split(',').map((s) => s.trim()).filter(Boolean) || [];
  const databases = techStacks?.databases?.split(',').map((s) => s.trim()).filter(Boolean) || [];
  const frameworks = techStacks?.frameworks?.split(',').map((s) => s.trim()).filter(Boolean) || [];
  const tools = techStacks?.tools?.split(',').map((s) => s.trim()).filter(Boolean) || [];
  const aiMl = techStacks?.aiMl?.split(',').map((s) => s.trim()).filter(Boolean) || [];

  // Tiered skills (reduced for cognitive load - max 6 per tier)
  const expertSkills = [
    { name: 'Python', category: 'Language' },
    { name: 'FastAPI', category: 'Framework' },
    { name: 'React', category: 'Framework' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'RAG Systems', category: 'AI/ML' },
  ];

  const proficientSkills = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Milvus', category: 'Vector DB' },
    { name: 'GraphQL', category: 'API' },
    { name: 'CI/CD', category: 'DevOps' },
  ];

  return (
    <section id="skills" className="py-12 md:py-20 lg:py-24 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header - left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-3">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Production-tested expertise across full-stack development, AI/ML systems, and cloud architecture
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Expert Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-slate-50">Expert</h3>
              <span className="text-sm text-slate-500">Daily use in production, deep knowledge</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {expertSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-md text-slate-50 font-mono text-sm cursor-default transition-colors hover:bg-cyan-500/20 hover:border-cyan-500/50"
                >
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-xs text-cyan-500/60">·</span>
                  <span className="text-xs text-slate-300">{skill.category}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Proficient Level */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-baseline gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-slate-50">Proficient</h3>
              <span className="text-sm text-slate-500">Shipped projects, comfortable with advanced features</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {proficientSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.04,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300 font-mono text-sm cursor-default transition-colors hover:bg-slate-700/50 hover:border-slate-600/60"
                >
                  <span>{skill.name}</span>
                  <span className="text-xs text-slate-500">·</span>
                  <span className="text-xs text-slate-500">{skill.category}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>


          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="mt-12 pt-12 border-t border-slate-700/50"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'AI/ML Engineering',
                  items: ['RAG systems & vector databases', 'LLM integration & fine-tuning', 'GPU optimization', 'Multi-lingual NLP']
                },
                {
                  title: 'Cloud & DevOps',
                  items: ['AWS architecture & scaling', 'CI/CD pipelines', 'Docker containerization', 'Infrastructure as code']
                },
                {
                  title: 'System Design',
                  items: ['Microservices architecture', 'Event-driven systems', 'API design (REST/GraphQL)', 'Message queues & caching']
                },
                {
                  title: 'Team Leadership',
                  items: ['5+ developers led', 'Code reviews & mentorship', 'Sprint planning', 'Technical decision-making']
                },
              ].map((competency, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileHover={{ y: -4, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 transition-colors duration-300 hover:bg-slate-800/80 group"
                >
                  <h4 className="text-lg font-semibold text-slate-50 mb-3 group-hover:text-cyan-500 transition-colors duration-200">
                    {competency.title}
                  </h4>
                  <ul className="space-y-1">
                    {competency.items.map((item, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: (i * 0.1) + (j * 0.05),
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="text-sm text-slate-400 flex gap-2"
                      >
                        <span className="text-cyan-500">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
