import classes from "./ProjectsSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/////

const ProjectsSection = () => {
  return (
    <div className={classes.container}>
      <h2>Проекты</h2>
      <div className={classes.innerContainer}>
        <div className={classes.image}></div>
        <div className={classes.descContainer}>
          <div>
            <h3>вэб-приложение</h3>
            <span>Онлайн редактор кода</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consequuntur similique modi eum doloremque reiciendis ex earum
            tempore animi ducimus perferendis soluta eveniet, ut officiis non
            quia deserunt aspernatur! Est! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consequuntur similique modi eum doloremque reiciendis ex earum
          </p>

          <div className={classes.tagsContainer}>
            <button className={classes.btn__tag}>React</button>
          </div>

          <button className={classes.btn__github}>
            Перейти на GitHub
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`arrow_ProjectsSection ${classes.arrowIcon}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
