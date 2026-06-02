import HeroSection from "@/components/portfolio/HeroSection";
import MarqueeSection from "@/components/portfolio/MarqueeSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <main className="min-h-screen" style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Chatbot />
    </main>
  );
};

export default Index;
