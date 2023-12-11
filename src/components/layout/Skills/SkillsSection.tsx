import classes from "./SkillsSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCode,
  faMedal,
  faPalette,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
////
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/////

const SkillsSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={`h2_skillsSection ${classes.heading}`}>Личные качества</h2>
      <div className={classes.innerContainer}>
        <FontAwesomeIcon
          icon={faCode}
          className={`icon_skillSection ${classes.iconSkill}`}
        />
        <FontAwesomeIcon
          icon={faPlay}
          className={`arrow_skillsSection ${classes.iconRight}`}
        />
        <div
          className={`card_skillsSection card_skillsSection_1 ${classes.skillCard}`}
        >
          <h3>Чистый код</h3>
          <p>
            Мой код легко читать и легко модифицировать, аккуратность и внимание
            к деталям
          </p>
        </div>
        <FontAwesomeIcon
          icon={faMedal}
          className={`icon_skillSection ${classes.iconSkill}`}
        />
        <FontAwesomeIcon
          icon={faPlay}
          className={`arrow_skillsSection ${classes.iconRight}`}
        />
        <div
          className={`card_skillsSection card_skillsSection_2 ${classes.skillCard}`}
        >
          <h3>Лучшие практики</h3>
          <p>
            Ставлю в приоритет современные подходы к оптимизации кода и
            улучшению производительности
          </p>
        </div>

        <FontAwesomeIcon
          icon={faHandshakeAngle}
          className={`icon_skillSection ${classes.iconSkill}`}
        />
        <FontAwesomeIcon
          icon={faPlay}
          className={`arrow_skillsSection ${classes.iconRight}`}
        />
        <div
          className={`card_skillsSection card_skillsSection_3 ${classes.skillCard}`}
        >
          <h3>Командная работа</h3>
          <p>
            Я хорошо умею делиться знаниями и ценю взаимопомощь. Строго соблюдаю
            дедлайны, умею качественно организовать использование рабочего
            времени
          </p>
        </div>
        <FontAwesomeIcon
          icon={faPalette}
          className={`icon_skillSection ${classes.iconSkill}`}
        />
        <FontAwesomeIcon
          icon={faPlay}
          className={`arrow_skillsSection ${classes.iconRight}`}
        />
        <div
          className={`card_skillsSection card_skillsSection_4 ${classes.skillCard}`}
        >
          <h3>Креативность</h3>
          <p>
            Функциональность важна также как и визуальная составляющая, я уделяю
            большое внимание UI/UX дизайну
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
