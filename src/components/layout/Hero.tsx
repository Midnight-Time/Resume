import classes from "./Hero.module.css";
//////
import video from "../../assets/красно голубой.mp4";
//////
import Navigation from "../composed/Navigation";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

/* Для создания библиотеки иконок
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const coffeeLookup: IconLookup = { prefix: "fas", iconName: "coffee" };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);
*/

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.bgVideo}>
        <video autoPlay muted className={classes.video}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Navigation />
      <div className={classes.textContainer}>
        <h1>
          Front-end <br /> разработка
        </h1>
        <p>
          Меня зовут Полина, мне нравятся интересные идеи <br /> и я знаю как их
          воплотить в жизнь!
        </p>
        <div className={classes.learnMore}>
          <p>Узнать больше</p>
          <FontAwesomeIcon icon={faAngleDown} className={classes.icon} />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
