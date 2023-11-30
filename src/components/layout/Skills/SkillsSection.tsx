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
    gsap.set(".h2_skillsSection", {
      opacity: 0,
      y: -60,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".h2_skillsSection",
          start: "top 80%",
          end: "bottom center",
        },
      })
      .to(".h2_skillsSection", {
        duration: 0.4,
        opacity: 1,
        y: 0,
      });

    gsap.set(".card_skillsSection_1", {
      opacity: 0,
      y: -100,
    });
    gsap.set(".card_skillsSection_2", {
      opacity: 0,
      y: -200,
    });
    gsap.set(".card_skillsSection_3", {
      opacity: 0,
      y: -300,
    });
    gsap.set(".card_skillsSection_4", {
      opacity: 0,
      y: -400,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card_skillsSection",
          start: "top 90%",
          end: "bottom center",
          ease: "power4",
        },
      })
      .to(".card_skillsSection", {
        duration: 1,
        opacity: 1,
        y: 0,
      });

    gsap.set(".icon_skillSection", {
      opacity: 0,
      x: -50,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card_skillsSection",
          start: "top 90%",
          end: "bottom center",
          ease: "power4",
        },
      })
      .to(".icon_skillSection", {
        duration: 1,
        opacity: 1,
        x: 0,
      });

    gsap.set(".arrow_skillsSection", {
      opacity: 0,
      x: -100,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".card_skillsSection",
          start: "top 90%",
          end: "bottom center",
          ease: "power4",
        },
      })
      .to(".arrow_skillsSection", {
        duration: 1,
        opacity: 1,
        x: 0,
      })
      .set(".arrow_skillsSection", {
        x: 0,
      })
      .to(".arrow_skillsSection", {
        duration: 0.5,
        x: -7,
        repeat: -1,
        yoyo: true,
      });
  });
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
