import classes from "./Navigation.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
/////
import { useRef } from "react";
import { Link } from "react-scroll";
import useScrollLock from "../../../hooks/useScrollLock";
/////
import CV from "../../../assets/Polina Filipenko.pdf";

const Navigation = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  const menuOpenHandler = () => {
    backgroundRef.current?.classList.toggle(`${classes.active}`);
    navRef.current?.classList.toggle(`${classes.active}`);
    if (navRef.current?.classList.contains(`${classes.active}`)) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  const menuCloseHandler = () => {
    backgroundRef.current?.classList.remove(`${classes.active}`);
    navRef.current?.classList.remove(`${classes.active}`);
    unlockScroll();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div onClick={menuCloseHandler}>
            <Link to="home" spy smooth delay={200} onClick={menuCloseHandler}>
              <span className={classes.logo}>PF</span>
            </Link>
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
            <Link
              to="home"
              spy
              smooth
              delay={200}
              className={classes.link}
              onClick={menuCloseHandler}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy
              smooth
              delay={200}
              className={classes.link}
              onClick={menuCloseHandler}
            >
              Проекты
            </Link>
          </li>
          <li>
            <Link
              to="contactMe"
              spy
              smooth
              delay={200}
              className={classes.link}
              onClick={menuCloseHandler}
            >
              Контакты
            </Link>
          </li>
        </ul>
        <a href={CV} className={classes.linkCV} download>
          Скачать CV
        </a>
      </div>
    </>
  );
};

export default Navigation;
