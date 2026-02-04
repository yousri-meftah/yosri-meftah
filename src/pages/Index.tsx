import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import KonamiCode from '@/components/KonamiCode';
import AntigravityBackground from '@/components/AntigravityBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <AntigravityBackground />
      <div className="relative z-10">
        <CustomCursor />
        
        <KonamiCode />
        
        <Navigation />
        
        <main>
          <div id="hero">
            <HeroSection />
          </div>
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
