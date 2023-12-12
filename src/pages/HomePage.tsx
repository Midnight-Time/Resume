import HeroSection from "../components/layout/HeroSection/Hero";
import TechStack from "../components/layout/TechStack/TechStack";
import SkillsSection from "../components/layout/Skills/SkillsSection";
import ProjectsSection from "../components/layout/Projects/PropjectsSection";
import SerttifSection from "../components/layout/Sertificates/SertifSection";
import ContactsSection from "../components/layout/Contacts/ContactsSection";
import Footer from "../components/layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <SkillsSection />
      <ProjectsSection />
      <SerttifSection />
      <ContactsSection />
      <Footer />
    </>
  );
};
export default HomePage;
