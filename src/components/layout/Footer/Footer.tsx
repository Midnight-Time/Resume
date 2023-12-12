import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.quote}>
        <blockquote>
          “Always code as if the guy who ends up maintaining your code will be a
          violent psychopath who knows where you live.”
        </blockquote>
        <span>-Martin Golding</span>
      </div>
      <div className={classes.underline}>
        <div className={classes.textGroup}>
          <span>Полина Филипенко</span>
          <span>2023</span>
        </div>
        <div className={classes.downloadCV}>
          <button>Скачать CV</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
