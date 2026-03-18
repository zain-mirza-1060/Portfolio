'use client';

import { motion } from 'framer-motion';

type TechStacks = { languages: string; databases: string; frameworks: string; tools: string; aiMl: string };

export default function Skills({ techStacks }: { techStacks: TechStacks }) {
  const categories = [
    { title: 'Languages', items: techStacks?.languages?.split(',').map((s) => s.trim()).filter(Boolean) || [] },
    { title: 'Databases', items: techStacks?.databases?.split(',').map((s) => s.trim()).filter(Boolean) || [] },
    { title: 'Frameworks', items: techStacks?.frameworks?.split(',').map((s) => s.trim()).filter(Boolean) || [] },
    { title: 'Tools & Integrations', items: techStacks?.tools?.split(',').map((s) => s.trim()).filter(Boolean) || [] },
    { title: 'AI/ML', items: techStacks?.aiMl?.split(',').map((s) => s.trim()).filter(Boolean) || [] },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg border border-primary/20"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
