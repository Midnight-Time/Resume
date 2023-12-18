import classes from "./SertifSection.module.css";
/////
import SertificateCardList from "../../composed/SertificateCardList/SertificateCardList";
import allSertificates from "../../../lib/sertificates";
/////
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { sertifSectionHeadingAnim } from "../../../animations";

const SerttifSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    sertifSectionHeadingAnim(headingRef);
  });

  return (
    <div className="sertif_section">
      <div className={classes.container}>
        <h2 className={classes.heading} ref={headingRef}>
          Сертификаты
        </h2>
        <div>
          <SertificateCardList cards={allSertificates} />
        </div>
      </div>
    </div>
  );
};
export default SerttifSection;
