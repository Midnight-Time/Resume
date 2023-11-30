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
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/////

const SkillsSection = () => {
  useLayoutEffect(() => {
    gsap.set(".h2", {
      opacity: 0,
      y: -30,
    });
    gsap.set(".card_1_right", {
      opacity: 0,
      x: 10,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".h2",
          start: "top 80%",
          end: "bottom center",
        },
      })
      .to(".h2", {
        duration: 0.6,
        opacity: 1,
        y: 0,
      });
  });
  return (
    <div className={classes.container}>
      <h2 className={`h2 ${classes.heading}`}>Личные качества</h2>
      <div className={classes.innerContainer}>
        <FontAwesomeIcon icon={faCode} className={classes.iconSkill} />
        <FontAwesomeIcon icon={faPlay} className={classes.iconRight} />
        <div className={`cardText ${classes.skillCard}`}>
          <h3>Чистый код</h3>
          <p>
            Мой код легко читать и легко модифицировать, аккуратность и внимание
            к деталям
          </p>
        </div>
        <FontAwesomeIcon icon={faMedal} className={classes.iconSkill} />
        <FontAwesomeIcon icon={faPlay} className={classes.iconRight} />
        <div className={`cardText ${classes.skillCard}`}>
          <h3>Лучшие практики</h3>
          <p>
            Ставлю в приоритет современные подходы к оптимизации кода и
            улучшению производительности
          </p>
        </div>

        <FontAwesomeIcon
          icon={faHandshakeAngle}
          className={classes.iconSkill}
        />
        <FontAwesomeIcon icon={faPlay} className={classes.iconRight} />
        <div className={`cardText ${classes.skillCard}`}>
          <h3>Командная работа</h3>
          <p>
            Я хорошо умею делиться знаниями и ценю взаимопомощь. Строго соблюдаю
            дедлайны, умею качественно организовать использование рабочего
            времени
          </p>
        </div>
        <FontAwesomeIcon icon={faPalette} className={classes.iconSkill} />
        <FontAwesomeIcon icon={faPlay} className={classes.iconRight} />
        <div className={`cardText ${classes.skillCard}`}>
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
