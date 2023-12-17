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
import { heroAnim } from "../../../animations";
gsap.registerPlugin(CSSPlugin);
/////

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      heroAnim();
    },
    { scope: container }
  );

  return (
    <div className={classes.hero} ref={container}>
      <Navigation />
      <Video />
      <div className={`hero_text-container ${classes.textContainer}`}>
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
            className={`icon_hero ${classes.icon}`}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
