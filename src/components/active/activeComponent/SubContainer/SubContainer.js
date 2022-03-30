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
          <div className={classes.imgHome}></div>
          <div className={classes.textHome}>Home</div>
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
      <div className={classes.item}>
        <div className={classes.notePad}>
          <h1 className={classes.boxText}> NotePad</h1>
          <div className={classes.listBox1}>
            <h2 className={classes.listTitle}>Shopping List 1</h2>
            <table>
              <tr>
                <td>Chocolate</td>
                <td>Strawberries</td>
              </tr>
              <tr>
                <td>Butter</td>
                <td>Ketchup</td>
              </tr>
              <tr>
                <td>Milk</td>
                <td>Bacon</td>
              </tr>
              <tr>
                <td>Honey</td>
                <td>Ice Cream</td>
              </tr>
              <tr>
                <td>Tomatoes</td>
                <td>Carrots</td>
              </tr>
            </table>
          </div>
          <div className={classes.listBox2}>
            <h2 className={classes.listTitle}>Shopping List 2</h2>
            <table>
              <tr>
                <td>Onion</td>
                <td>Broccoli</td>
              </tr>
              <tr>
                <td>Eggs</td>
                <td>Cucumber</td>
              </tr>
              <tr>
                <td>Cheese</td>
                <td>Celery</td>
              </tr>
              <tr>
                <td>Mushroom</td>
                <td>Pepper</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubContainer;
