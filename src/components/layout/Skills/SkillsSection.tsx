import classes from "./SkillsSection.module.css";
/////
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/////

const SkillsSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={`h2_skillsSection ${classes.heading}`}>Навыки и умения</h2>
      <div className={classes.innerContainer}>
        <div
          className={`card_skillsSection card_skillsSection_1 ${classes.skillCard}`}
        >
          <h3>Чистый код</h3>
          <p>
            Мой код легко читать и легко модифицировать. Аккуратность и внимание
            к деталям.
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_1 ${classes.skillCard}`}
        >
          <h3>Создание приложений</h3>
          <p>
            Реализация бизнес-логики разной сложности: поиск, сортировка,
            взаимодействие с сервером.
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_3 ${classes.skillCard}`}
        >
          <h3>UI/UX</h3>
          <p>
            Реализация продуманного и функционального пользовательского
            интерфейса.
          </p>
        </div>
        <div
          className={`card_skillsSection card_skillsSection_4 ${classes.skillCard}`}
        >
          <h3>Грамотность</h3>
          <p>
            Отличный уровень разговорного английского, грамотная устная и
            письменная речь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
