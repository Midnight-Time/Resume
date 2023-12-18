import classes from "./Video.module.css";
import video from "../../../assets/bgVideo.mp4";
import videoWebm from "../../../assets/bgVideo.webm";
/////

const Video = () => {
  return (
    <div className={classes.bgVideo}>
      <video autoPlay muted loop className={classes.video}>
        <source src={video} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
      </video>
    </div>
  );
};

export default Video;
