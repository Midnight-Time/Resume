import classes from "./Video.module.css";
import video from "../../../assets/красно голубой.mp4";
/////

const Video = () => {
  // Компенсирует ширину фонового видео, когда при блокировке скролла скролл-бар убираем, чтобы не было подергивания
  let videoWidth = window.innerWidth + 20;

  return (
    <div className={classes.bgVideo} style={{ width: videoWidth }}>
      <video autoPlay muted loop className={classes.video}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
