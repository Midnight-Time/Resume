import classes from "./SertficateCardList.module.css";
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect } from "react";

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
  // Анимация должна быть без прямой манипуляции DOM
  useLayoutEffect(() => {
    gsap.to(".sertificate", {
      x: 0,
      duration: 1,
      opacity: 1,
      ease: "power4.out",
      stagger: 0.2,
    });
  });

  return (
    <>
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
    </>
  );
};
export default SertificateCardList;
