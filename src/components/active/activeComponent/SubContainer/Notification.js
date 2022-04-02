import classes from "../../Active.module.css";
import alarm from "../../alarm.png";
import setting from "../../setting.svg";

const Notification = (props) => {
  return (
    <div
      className={classes.temperture}
      onClick={props.onClick}
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <h1 className={classes.boxText}> Notification</h1>
      <h4 className={classes.boxSubText}> Notify food and system conditions</h4>
      <div className={classes.notiBoxList}>
        <div className={`${classes.alarmBox} ${classes.notiBox}`}>
          <img src={alarm} className={classes.alarmImage} />
          <div className={classes.notiContent}>Salmon</div>
        </div>
        <div className={`${classes.alarmBox} ${classes.notiBox}`}>
          <img src={alarm} className={classes.alarmImage} />
          <div className={classes.notiContent}>Freezer</div>
        </div>
        <div className={classes.notiBox}>
          {/* <img src={setting} className={classes.alarmImage}/> */}
          <div className={classes.notiContent}>Wifi Disconnected</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
