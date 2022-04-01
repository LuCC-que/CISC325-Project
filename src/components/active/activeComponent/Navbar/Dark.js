import classes from "./Setting.module.css";
import "./dark.css";
import { Fragment } from "react";

const Dark = (props) => {
  return (
    <Fragment>
      <div className={classes.settingItem} onClick={props.darkOnClick}>
        <img src={require("./image/darkIcon.png")} className="darkIcon"></img>
      </div>
    </Fragment>
  );
};

export default Dark;
