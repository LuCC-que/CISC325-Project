import { Fragment, useState } from "react";
import classes from "./Setting.module.css";
import ListingItem from "./ListingItem";

const Storage = (props) => {
  const [Storage, setStorge] = useState(false);
  const StorageClick = () => {
    if (!Storage) {
      props.playOn();
    } else {
      props.playOff();
    }
    setStorge(!Storage);
  };
  let id = 1;
  const foodList = props.predefinedValue.map((food) => {
    return <ListingItem key={id++} id={id} itemInfo={food} />;
  });

  return (
    <Fragment>
      <div className={classes.settingItem} onClick={StorageClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          style={{
            width: "80%",
            margin: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
        </svg>
      </div>
      {Storage && (
        <div className={classes.backdrop} onClick={StorageClick}>
          <div
            className="frame2"
            style={{
              overflow: "scroll",
              display: "flex",
              justifyContent: "center",
              width: "25%",
              marginLeft: "25%",
              backgroundColor: props.isDark && "#B9B9B9",
              boxShadow: props.isDark && "none",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "120%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
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
