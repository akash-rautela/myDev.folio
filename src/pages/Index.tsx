import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import QuickConnect from '@/components/QuickConnect';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import { useTheme } from '@/hooks/useTheme';

const Index = () => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative z-10 min-h-screen text-foreground">
      <CursorGlow />
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <StatsSection />
      <ResumeSection />
      <ContactSection />
      <QuickConnect />
      <Footer />
    </div>
  );
};

export default Index;
