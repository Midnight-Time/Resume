import classes from "./ContactsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const ContactsSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Связаться со мной</h2>
      <div className={classes.socials}>
        <a href="#r">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={`icon_socials ${classes.icon}`}
          />
        </a>
        <a href="#r">
          <FontAwesomeIcon
            icon={faTelegram}
            className={`icon_socials ${classes.icon}`}
          />
        </a>
        <a href="#r">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`icon_socials ${classes.icon}`}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactsSection;
