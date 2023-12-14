import classes from "./Navigation.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/////
import { useRef } from "react";
/////
import CV from "../../../assets/Polina Filipenko.pdf";

const Navigation = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const menuOpenHandler = () => {
    backgroundRef.current?.classList.toggle(`${classes.active}`);
    navRef.current?.classList.toggle(`${classes.active}`);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div>
            <a href="#home">
              <span className={classes.logo}>PF</span>
            </a>
          </div>
          <button className={classes.btn} onClick={menuOpenHandler}>
            <FontAwesomeIcon icon={faBars} className={`${classes.menuIcon}`} />
          </button>
        </div>
      </div>
      <div className={classes.background} ref={backgroundRef}></div>
      <div className={classes.navContainer} ref={navRef}>
        <ul className={classes.navList}>
          <li>
            <a href="#home" className={classes.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#projects" className={`${classes.link} ${classes.active}`}>
              Проекты
            </a>
          </li>
          <li>
            <a href="#contactMe" className={classes.link}>
              Контакты
            </a>
          </li>
          <li>
            <a href={CV} className={classes.link} download>
              Скачать CV
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
