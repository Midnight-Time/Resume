import classes from "./Footer.module.css";
/////
import { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { footerAnim } from "../../../animations";

const Footer = () => {
  const yearRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear().toString();

  useGSAP(
    () => {
      footerAnim();
    },
    { scope: container }
  );

  useLayoutEffect(() => {
    yearRef.current!.textContent = currentYear;
  });

  return (
    <div className={classes.footer} ref={container}>
      <div className={`footer ${classes.quote}`}>
        <blockquote>
          “Always code as if the guy who ends up maintaining your code will be a
          violent psychopath who knows where you live.”
        </blockquote>
        <cite>-Martin Golding</cite>
      </div>
      <div className={classes.underline}>
        <div>
          <span>
            Полина Филипенко <br />
            (Polina Filipenko){" "}
            <span id="year" ref={yearRef}>
              2023
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
