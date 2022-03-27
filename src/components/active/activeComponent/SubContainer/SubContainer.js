import classes from "../../Active.module.css";
import Temperture from "./Temperture";
import Notification from "./Notification";
import FoodRec from "./FoodRecommandation";

import NotiExpand from "../ContainerComponent/NotificationExpand";
import TempExpand from "../ContainerComponent/TempertureExpand";
import { useState, useReducer } from "react";

const SubContainer = (props) => {
  const [display, setDisplay] = useState("");
  const TempertureClickHandler = () => {
    props.onClicking();
    setDisplay("temp");
  };

  const NotificationClickHandler = () => {
    props.onClicking();
    setDisplay("Noti");
  };

  const FoodRecClickHandler = () => {
    props.onClicking();
    setDisplay("FoodRec");
  };

  const returnToHomeClickHandler = () => {
    props.onClicking();
    setDisplay("");
  };

  console.log(display);

  if (display !== "") {
    return (
      <div className={classes.Expand}>
        <div className={classes.ExpandContent}>
          {display === "Noti" && <NotiExpand></NotiExpand>}
          {display === "temp" && <TempExpand></TempExpand>}
        </div>
        <div
          className={classes.returnToHome}
          onClick={returnToHomeClickHandler}
        >
          return to home
        </div>
      </div>
    );
  }

  return (
    <div className={classes.subContainer}>
      <div className={classes.item}>
        <Temperture onClick={TempertureClickHandler}></Temperture>
        <Notification onClick={NotificationClickHandler}></Notification>
      </div>
      <div className={classes.item}>
        <FoodRec onClick={FoodRecClickHandler}></FoodRec>
      </div>
      <div className={classes.item}></div>
    </div>
  );
};

export default SubContainer;
