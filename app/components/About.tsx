'use client';

import { motion } from 'framer-motion';

type Intro = { name: string; summary: string; yearsExperience: string };

export default function About({ intro }: { intro: Intro }) {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section header - left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-3">
            About
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Background, approach, and technical focus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content - 2/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {intro?.summary || ''}
              </p>

              {/* Specializations - evidence-based */}
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">Current Focus</h3>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1">▸</span>
                      <span>Leading engineering teams through AI/ML application development lifecycle</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1">▸</span>
                      <span>GPU-optimized model deployments and cloud-native ML infrastructure</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-500 mt-1">▸</span>
                      <span>Production RAG systems, vector databases, and LLM integrations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-50 mb-3">Technical Approach</h3>
                  <p className="text-slate-300 leading-relaxed">
                    I prioritize scalability, maintainability, and measurable impact. Whether migrating monoliths to microservices,
                    implementing CI/CD pipelines, or architecting multi-lingual AI systems, I focus on sustainable solutions that
                    deliver business value while maintaining code quality and team velocity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - 1/3 width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Quick stats */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-4">Experience</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-cyan-500">{intro?.yearsExperience || '3+'}</div>
                  <div className="text-sm text-slate-400">Years in Industry</div>
                </div>
                <div className="border-t border-slate-700/50 pt-3">
                  <div className="text-2xl font-bold text-cyan-500">5+</div>
                  <div className="text-sm text-slate-400">Production AI Projects</div>
                </div>
                <div className="border-t border-slate-700/50 pt-3">
                  <div className="text-2xl font-bold text-cyan-500">5+</div>
                  <div className="text-sm text-slate-400">Developers Led</div>
                </div>
              </div>
            </div>

            {/* Key domains */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-4">Domains</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300">AI/ML</span>
                <span className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300">Cloud</span>
                <span className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300">Full-Stack</span>
                <span className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300">DevOps</span>
                <span className="text-sm px-3 py-1 bg-slate-700/30 border border-slate-600/40 rounded-md text-slate-300">Architecture</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 