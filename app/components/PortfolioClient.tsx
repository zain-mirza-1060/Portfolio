'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Loading from './Loading';

type Intro = { name: string; title: string; tagline: string; summary: string; yearsExperience: string };
type ContactInfo = { email: string; phone: string; linkedin: string; github: string };
type Job = { role: string; company: string; location: string; period: string; bullets: string[] };
type Project = { name: string; tagline: string; tech: string; bullets: string[] };
type TechStacks = { languages: string; databases: string; frameworks: string; tools: string; aiMl: string };

type Props = {
  intro: Intro;
  contact: ContactInfo;
  experience: Job[];
  industryProjects: Project[];
  personalProjects: Project[];
  techStacks: TechStacks;
};

export default function PortfolioClient({ intro, contact, experience, industryProjects, personalProjects, techStacks }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading intro={intro} />;

  return (
    <main className="min-h-screen">
      <Navbar intro={intro} />
      <Hero intro={intro} />
      <About intro={intro} />
      <Experience jobs={experience} />
      <Skills techStacks={techStacks} />
      <Projects industryProjects={industryProjects} personalProjects={personalProjects} />
      <Contact contact={contact} />
      <Footer intro={intro} />
    </main>
  );
}
