import classes from "./SertficateCardList.module.css";
/////
// import { sertifSectionAnim } from "../../../animations";
import { useLayoutEffect } from "react";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  // Через useLayoutEffect потому что динамически выводятся данные и до построения мы не можем использовать useRef для каждого элемента
  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sertif_container",
          start: "-=300 +=500",
          end: "bottom center",
        },
      })
      .fromTo(
        ".sertificate",
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        }
      );
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
