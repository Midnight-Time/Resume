import HeroSection from "../components/layout/Hero";
import TechStack from "../components/composed/TechStack/TechStack";
import SkillsSection from "../components/composed/Skills/SkillsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <SkillsSection />
    </>
  );
};
export default HomePage;
