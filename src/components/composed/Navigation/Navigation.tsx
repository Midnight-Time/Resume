import classes from "./Navigation.module.css";
import logo from "../../../assets/logo.png";
////
// Необходимо не только импортировать, но и применить в любом месте страницы, чтобы иконки были везде доступны
import { IconsSpriteContainer } from "../../common/Icon/IconsSpriteContainer";
import { Icon, IconNames, IconSize } from "../../common/Icon/Icon";

const Navigation = () => {
  return (
    <>
      <IconsSpriteContainer />
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
            <Icon
              name={IconNames.ru}
              className={classes.flag}
              size={IconSize.custom}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
