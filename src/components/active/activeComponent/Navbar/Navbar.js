import classes from "./Navbar.module.css";
import WIFI from "./WIFI";
import Dark from "./Dark";
import Food from "./Food";
import Storage from "./Storage.js";
import useSound from "use-sound";

let predefinedValue = [
  {
    img: "./image/apple.png",
    Name: "Apple",
    QTY: "5",
    QLT: "Good",
    Weight: "3g",
    Cal: "400cal",
  },
  {
    img: "./image/bread.png",
    Name: "Bread",
    QTY: "30",
    QLT: "Bad",
    Weight: "300g",
    Cal: "300cal",
  },
  {
    img: "./image/burger.png",
    Name: "Burger",
    QTY: "3",
    QLT: "Good",
    Weight: "33g",
    Cal: "41200cal",
  },

  {
    img: "./image/carrot.png",
    Name: "Carrot",
    QTY: "5",
    QLT: "Good",
    Weight: "33224g",
    Cal: "401230cal",
  },
  {
    img: "./image/fish.png",
    Name: "Fish",
    QTY: "3",
    QLT: "Good",
    Weight: "3g",
    Cal: "300cal",
  },

  {
    img: "./image/egg.png",
    Name: "Egg",
    QTY: "7",
    QLT: "Bad",
    Weight: "3g",
    Cal: "400cal",
  },
];

const Navbar = (props) => {
  const [pop] = useSound(require("./sound/soundEffect.mp3"), { volume: 0.2 });
  const [playOn] = useSound(require("./sound/On1.mp3"), { volume: 0.8 });
  const [playOff] = useSound(require("./sound/Off1.mp3"), { volume: 0.8 });
  const [toDark] = useSound(require("./sound/switchToDark.mp3"), {
    volume: 0.8,
  });
  const [toSun] = useSound(require("./sound/switchToSun.mp3"), {
    volume: 0.8,
  });

  const expandClick = (id) => {
    if (id === props.value) {
      props.onSetExpand("");
    } else {
      props.onSetExpand(id);
    }
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
        playOn={pop}
      />
    );
  });
  console.log(foodList);

  return (
    <nav
      className={navClass}
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <div className={classes.settingItems}>
        <WIFI playOn={playOn} playOff={playOff} isDark={props.isDark}></WIFI>
        <Dark
          darkOnClick={props.darkOnClick}
          isDark={props.isDark}
          toDark={toDark}
          toSun={toSun}
        ></Dark>
      </div>
      <span className={classes.navbarDivder}>Food List</span>
      <div className={classes.foodItems}>
        {foodList}
        <Storage
          predefinedValue={predefinedValue}
          playOn={playOn}
          playOff={playOff}
          isDark={props.isDark}
        ></Storage>
      </div>
    </nav>
  );
};

export default Navbar;
