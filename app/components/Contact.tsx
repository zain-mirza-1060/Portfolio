'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

type ContactInfo = { email: string; phone: string; linkedin: string; github: string };

export default function Contact({ contact }: { contact: ContactInfo }) {
  const contactMethods = [
    {
      name: 'Email',
      icon: <FaEnvelope className="text-2xl" />,
      link: `mailto:${contact?.email || ''}`,
      display: contact?.email || '',
      description: 'Send me an email',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      link: contact?.linkedin || '#',
      display: 'Connect on LinkedIn',
      description: 'Professional network',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      link: contact?.github || '#',
      display: 'View on GitHub',
      description: 'Code repositories',
    },
  ];

  if (contact?.phone) {
    contactMethods.splice(1, 0, {
      name: 'Phone',
      icon: <FaPhone className="text-2xl" />,
      link: `tel:${contact.phone}`,
      display: contact.phone,
      description: 'Give me a call',
    });
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 relative bg-slate-900">
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
            Get In Touch
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            Open to discussing new opportunities, contract work, and freelance projects
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
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                I'm currently available for full-time positions, contract work, and freelance projects.
                Whether you need help architecting AI/ML systems, migrating to cloud infrastructure,
                leading engineering teams, or building production-grade applications, I'd be happy to discuss how I can help.
              </p>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-slate-50 mb-3">What I Can Help With</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span>AI/ML system architecture and RAG implementations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span>Cloud infrastructure and microservices migrations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span>Full-stack development with React, Next.js, FastAPI, Django</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-500 mt-1">▸</span>
                    <span>Technical leadership and team mentorship</span>
                  </li>
                </ul>
              </div>

              {/* Contact methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.name !== 'Email' && method.name !== 'Phone' ? '_blank' : undefined}
                    rel={method.name !== 'Email' && method.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-colors duration-300 group"
                  >
                    <div className="text-cyan-500 group-hover:scale-110 transition-transform duration-200">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">{method.description}</div>
                      <div className="text-base font-medium text-slate-200 group-hover:text-cyan-500 transition-colors duration-200">
                        {method.display}
                      </div>
                    </div>
                  </a>
                ))}
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
            {/* Availability */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-4">Current Status</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300">Available for new opportunities</span>
              </div>
              <p className="text-sm text-slate-400">
                Typically respond within 24 hours
              </p>
            </div>

            {/* Preferred contact */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-50 mb-4">Best Way to Reach</h3>
              <p className="text-sm text-slate-400 mb-4">
                For quickest response, send me an email or connect on LinkedIn.
                I check both regularly and will get back to you as soon as possible.
              </p>
              <a
                href={`mailto:${contact?.email || ''}`}
                className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}