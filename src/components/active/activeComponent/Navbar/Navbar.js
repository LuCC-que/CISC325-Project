import classes from "./Navbar.module.css";
import WIFI from "./WIFI";
import Dark from "./Dark";
import Food from "./Food";

let predefinedValue = [
  {
    img: "./image/apple.png",
    Name: "Name : Apple",
    QLT: "QLT : 300",
    QTY: "QTY : Bad",
    Weight: "Weight : 3g",
    Cal: "Cal : 400cal",
  },
  {
    img: "./image/bread.png",
    Name: "Name : bread",
    QLT: "QLT : 4",
    QTY: "QTY : Bad",
    Weight: "Weight : 300g",
    Cal: "Cal : 300cal",
  },
  {
    img: "./image/burger.png",
    Name: "Name : burger",
    QLT: "QLT : 1",
    QTY: "QTY : Bad",
    Weight: "Weight : 33g",
    Cal: "Cal : 41200cal",
  },

  {
    img: "./image/carrot.png",
    Name: "Name : carrot",
    QLT: "QLT : 12213",
    QTY: "QTY : Good",
    Weight: "Weight : 33224g",
    Cal: "Cal : 401230cal",
  },
  {
    img: "./image/fish.png",
    Name: "Name : Fish",
    QLT: "QLT : 3",
    QTY: "QTY : GOOD",
    Weight: "Weight : 3g",
    Cal: "Cal : 300cal",
  },

  {
    img: "./image/egg.png",
    Name: "Name : Egg",
    QLT: "QLT : 123",
    QTY: "QTY : Good",
    Weight: "Weight : 3g",
    Cal: "Cal : 400cal",
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
      <div className={classes.foodItems}>{foodList}</div>
    </nav>
  );
};

export default navbar;
