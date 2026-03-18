'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaRobot, FaCloud } from 'react-icons/fa';

type Intro = { name: string; summary: string; yearsExperience: string };

export default function About({ intro }: { intro: Intro }) {
  const stats = [
    { id: 1, label: 'Years Experience', value: intro?.yearsExperience || '3+' },
    { id: 2, label: 'Industry Projects', value: '5+' },
    { id: 3, label: 'Personal Projects', value: '3+' },
    { id: 4, label: 'Technologies', value: '20+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3a] via-[#0f172a] to-[#0a0e27] z-[-1]"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 text-white">Hello, I&apos;m <span className="text-gradient">{intro?.name || 'Zain'}</span></h3>
              <p className="text-gray-300 whitespace-pre-line">{intro?.summary || ''}</p>
            </div>
          </motion.div>
          
          <div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 grid grid-cols-2 gap-4"
            >
              <a 
                href="#contact" 
                className="bg-gradient-primary text-white py-3 px-6 rounded-xl text-center font-medium"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-6 rounded-xl text-center font-medium"
              >
                View Work
              </a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCode className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Full Stack Development</h3>
            <p className="text-gray-400">Building modern web applications with React, Next.js, Node.js, and cloud technologies.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRobot className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Integration</h3>
            <p className="text-gray-400">Seamlessly integrating AI/ML models into production applications with modern APIs.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaDatabase className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">ML & Data Engineering</h3>
            <p className="text-gray-400">Designing scalable data pipelines and training ML models for real-world applications.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCloud className="text-2xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Cloud & DevOps</h3>
            <p className="text-gray-400">Deploying and managing AI applications on AWS, GCP, and Azure with CI/CD pipelines.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 