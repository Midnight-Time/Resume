import classes from "./SertifSection.module.css";
/////
import imageUI from "../../../assets/UI-UX-sertificate.jpg";
/////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SerttifSection = () => {
  return (
    <div>
      <div className={classes.container}>
        <h2 className="h2_projSection">Сертификаты</h2>
        <p className={classes.headText}>
          Я отдаю предпочтение онлайн обучению и Udemy моя любимая платформа.
          Крепкая теория и грамотные учебные проекты
        </p>
        <div className={classes.innerContainer}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={imageUI} alt="UI" />
            </div>
            <div className={classes.cardText}>
              <div>
                <h3 className={classes.cardHeading}>UI/UX design</h3>
                <span>Udemy</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                voluptate ipsam deleniti excepturi, corporis.
              </p>
              <button>Открыть</button>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={imageUI} alt="UI" />
            </div>
            <div className={classes.cardText}>
              <div>
                <h3 className={classes.cardHeading}>UI/UX design</h3>
                <span>Udemy</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                voluptate ipsam deleniti excepturi, corporis.
              </p>
              <button>Открыть</button>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={imageUI} alt="UI" />
            </div>
            <div className={classes.cardText}>
              <div>
                <h3 className={classes.cardHeading}>UI/UX design</h3>
                <span>Udemy</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                voluptate ipsam deleniti excepturi, corporis.
              </p>
              <button>Открыть</button>
            </div>
          </div>

          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={imageUI} alt="UI" />
            </div>
            <div className={classes.cardText}>
              <div>
                <h3 className={classes.cardHeading}>UI/UX design</h3>
                <span>Udemy</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                voluptate ipsam deleniti excepturi, corporis.
              </p>
              <button>Открыть</button>
            </div>
          </div>
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
