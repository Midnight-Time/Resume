import classes from "./SertifSection.module.css";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
/////
import SertificateCardList from "../../composed/SertificateCardList/SertificateCardList";
import allSertificates from "../../../lib/sertificates";
/////

const SerttifSection = () => {
  return (
    <div>
      <div className={classes.container}>
        <h2 className="h2_sertSection">Сертификаты</h2>
        <p className={classes.headText}>
          Я отдаю предпочтение онлайн обучению и Udemy моя любимая платформа.
          Крепкая теория и грамотные учебные проекты
        </p>
        <div className={classes.innerContainer}>
          <SertificateCardList cards={allSertificates} />
        </div>

        <div className={classes.btnContainer}>
          <button className={classes.btnPrev}>
            <FontAwesomeIcon icon={faAngleLeft} className={classes.arrowIcon} />
          </button>
          <button className={classes.btnNext}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={classes.arrowIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SerttifSection;
