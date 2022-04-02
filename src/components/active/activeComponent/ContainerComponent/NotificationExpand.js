import { Fragment } from "react";
import "./NotificationExpand.css";
import "./TempertureExpand.css";
import NotificationItem from "./NotificationItem";
const predefinedValue = [
  {
    img: "./img/warning.png",
    type: "eme",
    msg: "Freezer tempature is abnormal",
  },
  {
    img: "./img/warning.png",
    type: "eme",
    msg: "aslkdhksla;hdjlks ad",
  },
  {
    img: "./img/warning.png",
    type: "notib",
    msg: "fdg sfdg fdsg",
  },
  {
    img: "./img/warning.png",
    type: "notib",
    msg: "dsafads f",
  },
];
const NotiExpand = () => {
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
