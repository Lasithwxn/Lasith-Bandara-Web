import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CallToAction } from "./components/CallToAction";
import { SocialSection } from "./components/SocialSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <CallToAction />
      <SocialSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}