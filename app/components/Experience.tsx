'use client';

import { motion } from 'framer-motion';

type Job = { role: string; company: string; location: string; period: string; bullets: string[] };

export default function Experience({ jobs }: { jobs: Job[] }) {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0f172a] to-[#0a0e27] z-[-1]" />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-primary text-sm font-medium">{job.period}</span>
              </div>
              <p className="text-gray-400 mb-4">
                {job.company} · {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-gray-300 flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
