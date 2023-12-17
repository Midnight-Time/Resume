import classes from "./ContactsSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
/////
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { contactsSectionAnim } from "../../../animations";

const ContactsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      contactsSectionAnim();
    },
    { scope: container }
  );

  return (
    <div className={classes.container} id="contactMe" ref={container}>
      <h2 className={`h2_contacts ${classes.heading}`}>Связаться со мной</h2>
      <div className={classes.socials}>
        <a href="https://www.linkedin.com/in/polina-filipenko/" target="blank">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={`icon_socials ${classes.icon}`}
          />
        </a>
        <a href="https://t.me/Mid_night_time" target="blank">
          <FontAwesomeIcon
            icon={faTelegram}
            className={`icon_socials ${classes.icon}`}
          />
        </a>
        <a href="mailto:p_v_filipenko@mail.ru" target="blank">
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
