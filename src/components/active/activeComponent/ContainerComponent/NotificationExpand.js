import { Fragment } from "react";
import "./NotificationExpand.css";
import "./TempertureExpand.css";
import NotificationItem from "./NotificationItem";
const predefinedValue = [
  {
    img: "./img/warning.png",
    type: "eme",
    msg: "Salmon has spoiled",
  },
  {
    img: "./img/warning.png",
    type: "eme",
    msg: "Freezer temperture is abnormal",
  },
  {
    img: "./img/warning.png",
    type: "eme",
    msg: "Banana has rotten",
  },
  {
    img: "./img/wifi-disconnect.jpg",
    type: "notib",
    msg: "wifi is disconnected",
  },
  {
    img: "./img/setting-gear.png",
    type: "notib",
    msg: "System updated 1.0.12",
  },
  {
    img: "./img/setting-gear.png",
    type: "notib",
    msg: "Notepad updated n4.1.12",
  },
  {
    img: "./img/setting-gear.png",
    type: "notib",
    msg: "Recipes recommandation updated r3.0.14",
  },
];
const NotiExpand = (props) => {
  let id = 0;
  const notificationItems = predefinedValue.map((Item) => {
    return <NotificationItem itemInfo={Item} key={id++}></NotificationItem>;
  });

  console.log(notificationItems);

  return (
    <div
      className="frame"
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "scroll",
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "140%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <h1 style={{ position: "relative", left: "-35%", top: "1.5%" }}>
          Notification
        </h1>

        {notificationItems}
      </div>
    </div>
  );
};

export default NotiExpand;
