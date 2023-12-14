import classes from "./Hero.module.css";
//////
import Navigation from "../../composed/Navigation/Navigation";
import Video from "../../common/Video/Video";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect, useRef } from "react";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);
/////

const Hero = () => {
  const iconRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    gsap.to(iconRef.current, {
      duration: 0.5,
      y: -10,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className={classes.hero}>
      <Video />
      <Navigation />
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
