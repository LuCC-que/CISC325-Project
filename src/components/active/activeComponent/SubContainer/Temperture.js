import classes from "../../Active.module.css";

const Temperture = (props) => {
  return (
    <div className={classes.temperture} onClick={props.onClick}>
      <h1>temperture</h1>
    </div>
  );
};

export default Temperture;
