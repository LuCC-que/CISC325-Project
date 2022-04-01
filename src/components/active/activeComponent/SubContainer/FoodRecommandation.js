import classes from "../../Active.module.css";
import food1 from "../../recipe1.jpg";
import food2 from "../../salad.png";
import food3 from "../../banana.jpg";

const FoodRec = (props) => {
  return (
    <div
      className={classes.foodRecommandation}
      onClick={props.onClick}
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <h1 className={classes.boxText}> Recipes</h1>
      <h4 className={classes.boxSubText}> Today's Recipes</h4>
      <div className={classes.foodRe}>
        <img src={food1} className={classes.foodImage} />
      </div>
      <div className={classes.foodRe}>
        <img src={food2} className={classes.foodImage} />
      </div>
      <div className={classes.foodRe}>
        <img src={food3} className={classes.foodImage3} />
      </div>
    </div>
  );
};

export default FoodRec;
