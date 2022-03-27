import classes from "../../Active.module.css";

const Notification = (props) => {
  return (
    <div className={classes.temperture} onClick={props.onClick}>
      <h1>Notification</h1>
      <div></div>
      <p>asdsadsadsadas</p>
    </div>
  );
};

export default Notification;
