import classes from "./Video.module.css";
import video from "../../../assets/красно голубой.mp4";

const Video = () => {
  return (
    <div className={classes.bgVideo}>
      <video autoPlay muted loop className={classes.video}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
