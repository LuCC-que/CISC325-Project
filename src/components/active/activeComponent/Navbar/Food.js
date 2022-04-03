import classes from "./Food.module.css";

const Food = (props) => {
  const foodClick = () => {
    props.onClick(props.id);
    console.log(props.id);
    props.playOn();
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
    <div
      className={foodClass}
      onClick={foodClick}
      style={{
        backgroundColor: props.itemInfo.QLT == "Bad" && "rgb(284, 186, 193)",
      }}
    >
      {!extend && (
        <img
          src={require(`${props.itemInfo.img}`)}
          className={classes.icon}
        ></img>
      )}
      <a className={classes.text}> Name : {props.itemInfo.Name}</a>
      <a className={classes.text}> QLT : {props.itemInfo.QLT}</a>
      <a className={classes.text}> QTY : {props.itemInfo.QTY}</a>
      <a className={classes.text}> Weight : {props.itemInfo.Weight}</a>
      <a className={classes.text}> Cal : {props.itemInfo.Cal}</a>
    </div>
  );
};

export default Food;
