import classes from "./ProjectsSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
/////
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { projSectionAnim } from "../../../animations";

const ProjectsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      projSectionAnim();
    },
    { scope: container }
  );

  return (
    <div className={classes.container} id="projects" ref={container}>
      <h2 className="h2_projSection">Проекты</h2>
      <div className={classes.innerContainer}>
        <a href="https://note-app-crud.netlify.app/" target="blank">
          <div className={`image_projSection ${classes.imageLink}`}>
            <span>Notes App</span>
          </div>
        </a>
        <div className={classes.descContainer}>
          <div className="text_projSection">
            <a
              href="https://github.com/Midnight-Time/Notes-App-CRUD"
              target="blank"
            >
              <h3>Онлайн редактор заметок</h3>
            </a>
            <span>вэб-приложение (desktop)</span>
          </div>
          <article className="text_projSection">
            Cозданиe, редактирование и удаление заметок. Поиск по тэгу. Тэги
            формируются корректно как на русском, так и на анлийском языке, нет
            лишних символов.
            <br />
            <h4>UI/UX:</h4>
            Сообщение, если поиск по тэгу не дал результатов. Поиск происходит
            при клике на тэг (один или несколько), а также при вводе тэгов
            вручную. При сохранении новой заметки поле поиска очищается
            автоматически.
            <br />
            <h4>Технические аспекты:</h4>
            React-приложение, написанное на Typescript (типизация 95-100%).
            Контроль состояний: React Redux toolkit. Интерфейс: библиотека
            MaterialUI. База данных: Firebase.
          </article>

          <div className={`text_projSection ${classes.tagsContainer}`}>
            <button className={classes.btn__tag}>React</button>
            <button className={classes.btn__tag}>Typescript</button>
            <button className={classes.btn__tag}>MaterialUI</button>
          </div>

          <a
            href="https://github.com/Midnight-Time/Notes-App-CRUD"
            target="blank"
            className={`btn_github ${classes.btn__github}`}
          >
            Перейти на GitHub
            <FontAwesomeIcon
              icon={faArrowRight}
              className={classes.arrowIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
