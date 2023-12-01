import classes from "./SertficateCardList.module.css";
/////
import { gsap } from "gsap/gsap-core";
import { useLayoutEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  useLayoutEffect(() => {
    // gsap.set(".card", {
    //   opacity: 0,
    //   x: -60,
    // });
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".card",
    //       start: "top 80%",
    //       end: "bottom center",
    //     },
    //   })
    //   .to(".card", {
    //     duration: 0.4,
    //     opacity: 1,
    //     x: 0,
    //   });
  });
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {props.cards.map((card) => (
        <div className={`card ${card.id} ${classes.card}`} key={card.id}>
          <div className={classes.cardImage}>
            <img src={card.sourse} alt={card.courseName} />
          </div>
          <div className={classes.cardText}>
            <div>
              <h3 className={classes.cardHeading}>{card.courseName}</h3>
              <span>{card.issuedBy}</span>
            </div>
            <p>{card.courseDesc}</p>
            <button>Открыть</button>
            <button className="prev" onClick={clickHandler}>
              Prev
            </button>
            <button className="next">Next</button>
          </div>
        </div>
      ))}
    </>
  );
};
export default SertificateCardList;
