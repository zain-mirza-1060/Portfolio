import { getIntro, getContact, getExperience, getIndustryProjects, getPersonalProjects, getTechStacks } from '@/lib/content';
import PortfolioClient from './components/PortfolioClient';

export default function Home() {
  const intro = getIntro();
  const contact = getContact();
  const experience = getExperience();
  const industryProjects = getIndustryProjects();
  const personalProjects = getPersonalProjects();
  const techStacks = getTechStacks();

  return (
    <PortfolioClient
      intro={intro}
      contact={contact}
      experience={experience}
      industryProjects={industryProjects}
      personalProjects={personalProjects}
      techStacks={techStacks}
    />
  );
}
