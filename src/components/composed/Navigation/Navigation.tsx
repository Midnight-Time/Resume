import classes from "./Navigation.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
/////
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import useScrollLock from "../../../hooks/useScrollLock";
/////
import CV from "../../../assets/Polina Filipenko.pdf";

const Navigation = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollLock();
  // Если нажать на лого из любого места страницы, когда не открыта навигации, то перемещение будет сразу
  // Если навигация активна то перемещение будет с такой же как и у всех ссылок задержкой
  const [logoScrollDelay, setLogoScrollDelay] = useState<number>(0);
  const [navPadding, setNavPadding] = useState<number>(0);
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const menuOpenHandler = () => {
    // Не использовала утилиту scrollbarCompensationFn, потому что тут по другому элемент реагирует на изменение ширины экрана
    let isOpera = navigator.userAgentData?.brands[0].brand === "Opera";
    let scrollBarCompensation;
    if (isOpera) {
      scrollBarCompensation =
        window.innerWidth - document.body.offsetWidth + 0.5;
    } else {
      scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    }

    backgroundRef.current?.classList.toggle(`${classes.active}`);
    navRef.current?.classList.toggle(`${classes.active}`);
    if (navRef.current?.classList.contains(`${classes.active}`)) {
      lockScroll();
      setLogoScrollDelay(200);
      setNavPadding(scrollBarCompensation);
      setNavIsOpen(true);
    } else {
      unlockScroll();
      setLogoScrollDelay(200);
      setNavPadding(0);
      setNavIsOpen(false);
    }
  };

  const menuCloseHandler = () => {
    backgroundRef.current?.classList.remove(`${classes.active}`);
    navRef.current?.classList.remove(`${classes.active}`);
    unlockScroll();
    setLogoScrollDelay(0);
    setNavPadding(0);
    setNavIsOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div onClick={menuCloseHandler}>
            <Link
              to="home"
              spy
              smooth
              delay={logoScrollDelay}
              onClick={menuCloseHandler}
            >
              <span className={classes.logo}>PF</span>
            </Link>
          </div>
          <button
            className={classes.btn}
            onClick={menuOpenHandler}
            style={{ paddingRight: navPadding }}
          >
            {navIsOpen ? (
              <FontAwesomeIcon
                icon={faSquareXmark}
                className={`${classes.menuIcon}`}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className={`${classes.menuIcon}`}
              />
            )}
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
              offset={80}
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
