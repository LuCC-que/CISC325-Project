import classes from "../../Active.module.css";
import Temperture from "./Temperture";
import Notification from "./Notification";
import FoodRec from "./FoodRecommandation";

import NotiExpand from "../ContainerComponent/NotificationExpand";
import TempExpand from "../ContainerComponent/TempertureExpand";
import FoodrecExpand from "../ContainerComponent/FoodrecExpand";
import { useState } from "react";

const SubContainer = (props) => {
  console.log(props.isDark);
  const [display, setDisplay] = useState("");
  const TempertureClickHandler = () => {
    props.onClicking();
    props.playOn();
    setDisplay("temp");
  };

  const NotificationClickHandler = () => {
    props.onClicking();
    props.playOn();
    setDisplay("Noti");
  };

  const FoodRecClickHandler = () => {
    props.onClicking();
    props.playOn();
    setDisplay("FoodRec");
  };

  const returnToHomeClickHandler = () => {
    props.onClicking();
    props.playOff();
    setDisplay("");
  };

  console.log(display);

  if (display !== "") {
    return (
      <div
        className={classes.Expand}
        style={{
          backgroundColor: props.isDark && "#292F2A",
        }}
      >
        <div
          className={classes.ExpandContent}
          style={{
            backgroundColor: props.isDark && "#292F2A",
          }}
        >
          {display === "Noti" && (
            <NotiExpand isDark={props.isDark}></NotiExpand>
          )}
          {display === "temp" && (
            <TempExpand isDark={props.isDark}></TempExpand>
          )}
          {display === "FoodRec" && (
            <FoodrecExpand isDark={props.isDark}></FoodrecExpand>
          )}
        </div>
        <div
          className={classes.returnToHome}
          onClick={returnToHomeClickHandler}
          style={{
            backgroundColor: props.isDark && "#B9B9B9",
            boxShadow: props.isDark && "none",
          }}
        >
          <div className={classes.imgHome}></div>
          <div className={classes.textHome}>Home</div>
        </div>
      </div>
    );
  }

  const shoppingList = props.isDark
    ? "shoppingListDark.jpg"
    : "shoppingList.jpg";

  return (
    <div className={classes.subContainer}>
      <div
        className={classes.item}
        style={{
          backgroundColor: props.isDark && "#292F2A",
        }}
      >
        <Temperture
          onClick={TempertureClickHandler}
          isDark={props.isDark}
        ></Temperture>
        <Notification
          onClick={NotificationClickHandler}
          isDark={props.isDark}
        ></Notification>
      </div>
      <div
        className={classes.item}
        style={{
          backgroundColor: props.isDark && "#292F2A",
        }}
      >
        <FoodRec onClick={FoodRecClickHandler} isDark={props.isDark}></FoodRec>
      </div>
      <div
        className={classes.item}
        style={{
          backgroundColor: props.isDark && "#292F2A",
        }}
      >
        <div
          className={classes.notePad}
          style={{
            backgroundColor: props.isDark && "#B9B9B9",
            boxShadow: props.isDark && "none",
          }}
        >
          <h1
            className={classes.boxText}
            style={{
              backgroundColor: props.isDark && "#B9B9B9",
            }}
          >
            {" "}
            NotePad
          </h1>
          {/* <div className={classes.listBox1}>
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
          </div> */}
          <img
            className={classes.shoppingListImg}
            src={require(`../img/${shoppingList}`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SubContainer;
