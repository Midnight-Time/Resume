import Hero from "../components/layout/Hero/Hero";
import TechStackSection from "../components/layout/TechStack/TechStackSection";
import SkillsSection from "../components/layout/Skills/SkillsSection";
import ProjectsSection from "../components/layout/Projects/PropjectsSection";
import SerttifSection from "../components/layout/Sertificates/SertifSection";
import ContactsSection from "../components/layout/Contacts/ContactsSection";
import Footer from "../components/layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TechStackSection />
      <SkillsSection />
      <ProjectsSection />
      <SerttifSection />
      <ContactsSection />
      <Footer />
    </>
  );
};
export default HomePage;
