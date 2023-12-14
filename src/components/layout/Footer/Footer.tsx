import classes from "./Footer.module.css";

const Footer = () => {
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
            (Polina Filipenko) 2023
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
