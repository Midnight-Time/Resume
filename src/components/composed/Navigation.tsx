import classes from "./Navigation.module.css";
import logo from "../../assets/logo.png";
import ruFlag from "../../assets/ru-flag.svg";
////

const Navigation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div>
          <a href="#j">
            <img src={logo} alt={logo} className={classes.logo} />
          </a>
        </div>
        <ul className={classes.navList}>
          <li>
            <a href="#j" className={classes.link}>
              Главная
            </a>
          </li>
          <li>
            <a href="#j" className={`${classes.link} ${classes.active}`}>
              Проекты
            </a>
          </li>
          <li>
            <a href="#j" className={classes.link}>
              Контакты
            </a>
          </li>
        </ul>
        <button className={classes.changeLanguageBtn}>
          <img src={ruFlag} alt="Russia flag" className={classes.flag} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
