import classes from "./Navigation.module.css";
////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <div>
            <a href="#j">
              <span className={classes.logo}>PF</span>
            </a>
          </div>
          {/* <ul className={classes.navList}>
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
          </ul>  */}
          <button className={classes.btn}>
            <FontAwesomeIcon icon={faBars} className={`${classes.menuIcon}`} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
