import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

function readFile(name: string) {
  const filePath = path.join(contentDir, `${name}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return matter(raw);
}

export function getIntro() {
  const { data } = readFile('intro');
  return {
    name: data.name as string,
    title: data.title as string,
    tagline: data.tagline as string,
    summary: data.summary as string,
    yearsExperience: data.years_experience as string,
  };
}

export function getContact() {
  const { data } = readFile('contact');
  return {
    email: data.email as string,
    phone: data.phone as string,
    linkedin: data.linkedin as string,
    github: data.github as string,
  };
}

export function getExperience() {
  const { data } = readFile('experience');
  return (data.jobs || []) as Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
  }>;
}

export function getIndustryProjects() {
  const { data } = readFile('industry-projects');
  return (data.projects || []) as Array<{
    name: string;
    tagline: string;
    tech: string;
    bullets: string[];
  }>;
}

export function getPersonalProjects() {
  const { data } = readFile('personal-projects');
  return (data.projects || []) as Array<{
    name: string;
    tagline: string;
    tech: string;
    bullets: string[];
  }>;
}

export function getTechStacks() {
  const { data } = readFile('tech-stacks');
  return {
    languages: (data.languages as string) || '',
    databases: (data.databases as string) || '',
    frameworks: (data.frameworks as string) || '',
    tools: (data.tools as string) || '',
    aiMl: (data.ai_ml as string) || '',
  };
}
