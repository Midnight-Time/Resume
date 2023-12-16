import classes from "./Hero.module.css";
import Navigation from "../../composed/Navigation/Navigation";
import Video from "../../common/Video/Video";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
/////
import { useRef } from "react";
/////
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { CSSPlugin } from "gsap/CSSPlugin";
import { learnMoreAnim } from "../../../animations";
gsap.registerPlugin(CSSPlugin);
/////

const Hero = () => {
  const iconRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    learnMoreAnim(iconRef);
  });

  return (
    <div className={classes.hero}>
      <Navigation />
      <Video />
      <div className={classes.textContainer}>
        <h1>
          Front-end <br /> developer
        </h1>
        <p>
          Меня зовут Полина, мне нравятся интересные идеи и я знаю как воплотить
          их в жизнь!
        </p>
        <div className={classes.learnMore}>
          <span>Узнать больше</span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={classes.icon}
            ref={iconRef}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
