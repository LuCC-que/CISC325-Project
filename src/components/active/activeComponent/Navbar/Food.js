import classes from "./Food.module.css";

const Food = (props) => {
  const foodClick = () => {
    props.onClick(props.id);
    console.log(props.id);
  };

  let foodClass = "";
  let extend = false;
  if (props.value === props.id) {
    foodClass = classes.food + " " + classes.foodExpand;
    extend = true;
  } else {
    foodClass = classes.food;
  }
  console.log(props.itemInfo.img);

  return (
    <div className={foodClass} onClick={foodClick}>
      {!extend && (
        <img
          src={require(`${props.itemInfo.img}`)}
          className={classes.icon}
        ></img>
      )}
      <a className={classes.text}> {props.itemInfo.Name}</a>
      <a className={classes.text}> {props.itemInfo.QLT}</a>
      <a className={classes.text}> {props.itemInfo.QTY}</a>
      <a className={classes.text}> {props.itemInfo.Weight}</a>
      <a className={classes.text}> {props.itemInfo.Cal}</a>
    </div>
  );
};

export default Food;
