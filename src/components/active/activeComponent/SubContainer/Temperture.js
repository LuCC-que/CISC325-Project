import classes from "../../Active.module.css";
import fridge from '../../R.png';
import freezer from '../../F.png';


const Temperture = (props) => {
  return (
    <div className={classes.temperture} onClick={props.onClick}>
      <h1 className={classes.boxText}> Fridge</h1>
      <h4 className={classes.boxSubText}> Temperature adjustment</h4>
      <div className={classes.f1}>
        <img src={fridge} className={classes.fridgeImage}/>
        <div className={classes.fridgeVal}>5°C</div>
      </div>
      <div className={classes.f1}>
        <img src={freezer} className={classes.fridgeImage}/>
        <div className={classes.fridgeVal}>-10°C</div>
      </div>
    </div>
  );
};

export default Temperture;
