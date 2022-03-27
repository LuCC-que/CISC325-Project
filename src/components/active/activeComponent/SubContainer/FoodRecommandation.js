import classes from "../../Active.module.css";

const FoodRec = (props) => {
  return (
    <div className={classes.foodRecommandation} onClick={props.onClick}>
      <h1>your cursine</h1>
    </div>
  );
};

export default FoodRec;
