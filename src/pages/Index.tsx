import ThemeToggle from '@/components/ThemeToggle';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
};

export default Index;
