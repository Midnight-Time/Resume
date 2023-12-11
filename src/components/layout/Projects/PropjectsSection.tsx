import classes from "./ProjectsSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/////
// import { gsap } from "gsap/gsap-core";
// import { useLayoutEffect } from "react";

const ProjectsSection = () => {
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
