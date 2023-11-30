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

const HeroSection = () => {
  const iconRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    gsap.to(iconRef.current, {
      duration: 0.5,
      y: -7,
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
          Front-end <br /> разработка
        </h1>
        <p>
          Меня зовут Полина, мне нравятся интересные идеи <br /> и я знаю как
          воплотить их в жизнь!
        </p>
        <div className={classes.learnMore}>
          <p>Узнать больше</p>
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
export default HeroSection;