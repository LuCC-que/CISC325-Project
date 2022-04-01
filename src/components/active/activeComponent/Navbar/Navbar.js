import classes from "./Navbar.module.css";
import WIFI from "./WIFI";
import Dark from "./Dark";
import Food from "./Food";
import Storage from "./Storage.js";

let predefinedValue = [
  {
    img: "./image/apple.png",
    Name: "Apple",
    QTY: "300",
    QLT: "Good",
    Weight: "3g",
    Cal: "400cal",
  },
  {
    img: "./image/bread.png",
    Name: "Bread",
    QTY: "300",
    QLT: "Bad",
    Weight: "300g",
    Cal: "300cal",
  },
  {
    img: "./image/burger.png",
    Name: "Burger",
    QTY: "300",
    QLT: "Good",
    Weight: "33g",
    Cal: "41200cal",
  },

  {
    img: "./image/carrot.png",
    Name: "Carrot",
    QTY: "300",
    QLT: "Good",
    Weight: "33224g",
    Cal: "401230cal",
  },
  {
    img: "./image/fish.png",
    Name: "Fish",
    QTY: "300",
    QLT: "Good",
    Weight: "3g",
    Cal: "300cal",
  },

  {
    img: "./image/egg.png",
    Name: "Egg",
    QTY: "300",
    QLT: "Bad",
    Weight: "3g",
    Cal: "400cal",
  },
];

const navbar = (props) => {
  const expandClick = (id) => {
    props.onSetExpand(id);
  };
  let navClass = "";
  if (!props.value) {
    navClass = classes.navbar;
  } else {
    navClass = classes.navbar + " " + classes.navbarExpand;
  }
  let id = 1;
  const foodList = predefinedValue.map((food) => {
    return (
      <Food
        key={id++}
        id={id}
        value={props.value}
        onClick={expandClick}
        itemInfo={food}
      />
    );
  });
  console.log(foodList);

  return (
    <nav className={navClass}>
      <div className={classes.settingItems}>
        <WIFI></WIFI>
        <Dark></Dark>
      </div>
      <div className={classes.foodItems}>
        {foodList}
        <Storage predefinedValue={predefinedValue}></Storage>
      </div>
    </nav>
  );
};

export default navbar;
