import classes from "../../Active.module.css";
import fridge from "../../R.png";
import freezer from "../../F.png";

const Temperture = (props) => {
  return (
    <div
      className={classes.temperture}
      onClick={props.onClick}
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <h1 className={classes.boxText}> Temperature</h1>
      <h4 className={classes.boxSubText}> Temperature adjustment</h4>
      <div className={classes.f1}>
        <img src={fridge} className={classes.fridgeImage} />
        <div className={classes.fridgeVal}>-5°C</div>
      </div>
      <div className={classes.f1}>
        <img src={freezer} className={classes.fridgeImage} />
        <div className={classes.fridgeVal}>-15°C</div>
      </div>
    </div>
  );
};

export default Temperture;
