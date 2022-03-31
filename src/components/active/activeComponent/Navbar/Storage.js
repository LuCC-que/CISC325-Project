import { Fragment, useState } from "react";
import classes from "./Setting.module.css";
import ListingItem from "./ListingItem";

const Storage = (props) => {
  const [Storage, setStorge] = useState(false);
  const StorageClick = () => {
    setStorge(!Storage);
  };
  let id = 1;
  const foodList = props.predefinedValue.map((food) => {
    return <ListingItem key={id++} id={id} itemInfo={food} />;
  });

  return (
    <Fragment>
      <div className={classes.settingItem} onClick={StorageClick}>
        <img src={require("./image/wifiLogo.png")} className="icon"></img>
      </div>
      {Storage && (
        <div className={classes.backdrop} onClick={StorageClick}>
          <div
            className="frame2"
            style={{
              overflow: "scroll",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "120%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {foodList}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Storage;
