import classes from "./SkillsSection.module.css";
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    gsap.set(".card_2_left", {
      opacity: 0,
      x: -10,
    });
    gsap.set(".card_3_right", {
      opacity: 0,
      x: 5,
    });
    gsap.set(".card_4_left", {
      opacity: 0,
      x: -5,
    });
    gsap.set(".card_5_right", {
      opacity: 0,
      x: 5,
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

    gsap
      .timeline({
        duration: 0.3,
        scrollTrigger: {
          trigger: ".innerContainer",
          start: "top center",
          end: "bottom 100%",
          markers: true,
        },
      })
      .to(".card_1_right", {
        opacity: 1,
        x: 0,
      })
      .to(".card_2_left", {
        opacity: 1,
        x: 0,
      })
      .to(".card_3_right", {
        opacity: 1,
        x: 0,
      })
      .to(".card_4_left", {
        opacity: 1,
        x: 0,
      })
      .to(".card_5_right", {
        opacity: 1,
        x: 0,
      });
  });
  return (
    <div className={classes.container}>
      <h2 className={`h2 ${classes.heading}`}>Профессиональные навыки</h2>
      <div className={`line ${classes.line}`}></div>
      <div className={classes.innerContainer}>
        <div className={`card_1_right ${classes.skillCard}`}>
          <h3>Чистый код</h3>
          <p>
            Мой код легко читать и легко модифицировать, аккуратность и внимание
            к деталям
          </p>
        </div>
        <div className={`card_2_left ${classes.skillCard}`}>
          <h3>Лучшие практики</h3>
          <p>
            Ставлю в приоритет современные подходы к оптимизации кода и
            улучшению производительности
          </p>
        </div>
        <div className={`card_3_right ${classes.skillCard}`}>
          <h3>Креативность</h3>
          <p>
            Функциональность важна также как и визуальная составляющая, я уделяю
            большое внимание UI/UX дизайну
          </p>
        </div>
        <div className={`card_4_left ${classes.skillCard}`}>
          <h3>Решение проблем</h3>
          <p>
            Сложные задачи – это основа профессионального роста, я с азартом
            выполняю нестандартные задания
          </p>
        </div>
        <div className={`card_5_right ${classes.skillCard}`}>
          <h3>Работа в команде</h3>
          <p>
            Я хорошо умею делиться знаниями и ценю взаимопомощь. Строго соблюдаю
            дедлайны, умею качественно организовать использование рабочего
            времени
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
