import classes from "./Setting.module.css";
import "./dark.css";
import { Fragment } from "react";

const Dark = (props) => {
  let icon = "darkIcon";
  if (props.isDark) {
    icon = "sunIcon";
  }
  return (
    <Fragment>
      <div className={classes.settingItem} onClick={props.darkOnClick}>
        <img src={require(`./image/${icon}.png`)} className="darkIcon"></img>
      </div>
    </Fragment>
  );
};

export default Dark;
