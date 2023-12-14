import classes from "./Footer.module.css";
/////
import { useRef, useLayoutEffect } from "react";

const Footer = () => {
  const yearRef = useRef<HTMLSpanElement>(null);
  const currentYear = new Date().getFullYear().toString();

  useLayoutEffect(() => {
    yearRef.current!.textContent = currentYear;
  });

  return (
    <div className={classes.footer}>
      <div className={classes.quote}>
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
