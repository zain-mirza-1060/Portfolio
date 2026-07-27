'use client';

import { motion } from 'framer-motion';

type Job = { role: string; company: string; location: string; period: string; bullets: string[] };

export default function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 relative bg-slate-800">
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
            Experience
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Engineering journey from full-stack development to senior leadership, AI/ML specialization, and cloud architecture
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-slate-700/50" />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-slate-800" />

                {/* Job card */}
                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-cyan-500/50 transition-colors duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-1">
                        {job.role}
                      </h3>
                      <p className="text-slate-400">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="inline-block text-sm font-medium text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-300 flex gap-3 text-base leading-relaxed">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progression summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 p-6 md:p-8 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-slate-50 mb-3">Career Progression</h3>
          <p className="text-slate-300 leading-relaxed">
            Progression from Software Engineer to Senior Software Engineer with increasing ownership:
            started with full-stack development and AI integrations, grew into team leadership (5+ developers),
            now architecting cloud-native AI systems with GPU deployments, microservices migrations, and
            production ML/AI solutions serving real users.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
