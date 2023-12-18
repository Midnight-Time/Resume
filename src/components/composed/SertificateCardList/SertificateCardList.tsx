import classes from "./SertficateCardList.module.css";
/////
import { sertifSectionAnim } from "../../../animations";
import { useGSAP } from "@gsap/react";

interface SertifCardProps {
  cards: {
    id: string;
    courseName: string;
    issuedBy: string;
    courseDesc: string;
    sourse: string;
  }[];
}

const SertificateCardList: React.FC<SertifCardProps> = (props) => {
  useGSAP(() => {
    sertifSectionAnim();
  });

  return (
    <div className={`sertif_container ${classes.innerContainer}`}>
      {props.cards.map((card) => (
        <a
          href={card.sourse}
          target="blank"
          id={card.id}
          className={`${classes[card.id]} ${classes.card} sertificate`}
          key={card.id}
        >
          <span className={classes.learnMore}>Унать больше</span>
          <span className={classes.courseName}>{card.courseName}</span>
        </a>
      ))}
    </div>
  );
};
export default SertificateCardList;
