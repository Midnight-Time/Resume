import classes from "./ProjectsSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect } from "react";

const ProjectsSection = () => {
  useLayoutEffect(() => {
    // heading
    gsap.set(".h2_projSection", {
      opacity: 0,
      y: -60,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".h2_projSection",
          start: "top 80%",
          end: "bottom center",
        },
      })
      .to(".h2_projSection", {
        duration: 0.4,
        opacity: 1,
        y: 0,
      });

    // image
    gsap.set(".image_projSection", {
      opacity: 0,
    });
    gsap.set(".btn_github", {
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".h2_projSection",
          start: "top 80%",
          end: "bottom center",
        },
      })
      .to(".image_projSection", {
        duration: 1,
        opacity: 1,
      })
      .to(".btn_github", {
        duration: 0.3,
        opacity: 1,
      });

    // inner container
    gsap.set(".text_projSection", {
      opacity: 0,
      x: 200,
    });
    gsap.set(".tags_projSection", {
      opacity: 0,
      x: 50,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".h2_projSection",
          start: "top 80%",
          end: "bottom center",
          ease: "power4",
        },
      })
      .to(".text_projSection", {
        duration: 1,
        opacity: 1,
        x: 0,
      })
      .to(".tags_projSection", {
        duration: 1,
        opacity: 1,
        x: 0,
      });
  });
  return (
    <div className={classes.container}>
      <h2 className="h2_projSection">Проекты</h2>
      <div className={classes.innerContainer}>
        <div className={`image_projSection ${classes.image}`}></div>
        <div className={classes.descContainer}>
          <div className="text_projSection">
            <h3>вэб-приложение</h3>
            <span>Онлайн редактор кода</span>
          </div>
          <p className="text_projSection">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consequuntur similique modi eum doloremque reiciendis ex earum
            tempore animi ducimus perferendis soluta eveniet, ut officiis non
            quia deserunt aspernatur! Est! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consequuntur similique modi eum doloremque reiciendis ex earum
          </p>

          <div className={`tags_projSection ${classes.tagsContainer}`}>
            <button className={classes.btn__tag}>React</button>
            <button className={classes.btn__tag}>Typescript</button>
            <button className={classes.btn__tag}>CSS</button>
          </div>

          <button className={`btn_github ${classes.btn__github}`}>
            Перейти на GitHub
            <FontAwesomeIcon
              icon={faArrowRight}
              className={classes.arrowIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
