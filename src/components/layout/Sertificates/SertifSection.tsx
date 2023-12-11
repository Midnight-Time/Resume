import classes from "./SertifSection.module.css";
/////
import SertificateCardList from "../../composed/SertificateCardList/SertificateCardList";
import allSertificates from "../../../lib/sertificates";
/////

const SerttifSection = () => {
  return (
    <div className="sertificates">
      <div className={classes.container}>
        <h2 className={classes.heading}>Сертификаты</h2>
        <div className={`${classes.innerContainer}`}>
          <SertificateCardList cards={allSertificates} />
        </div>
      </div>
    </div>
  );
};
export default SerttifSection;
