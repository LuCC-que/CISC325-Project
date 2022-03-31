import classes from "../Active.module.css";
import SubContainer from "./SubContainer/SubContainer";
import "./Container.css";

import { useEffect } from "react";

const Container = (props) => {
  useEffect(() => {
    Date.prototype.format = function (fmt) {
      var o = {
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (this.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    };
    setInterval(
      "document.getElementById('dateTimeHome').innerHTML = (new Date()).format('hh:mm:ss');",
      1000
    );
  }, []);
  return (
    <div className={classes.container} onClick={props.onClicking}>
      <header className={classes.headerdisplay} onClick={props.onClicking}>
        <strong>
          <div id="dateTimeHome"></div>
        </strong>

        <div className="greeting">
          <p>
            <strong>Hello User</strong>
          </p>
        </div>

        <div className="searchBar">
          <div className="imgSearch"></div>
          <input type="text" name="firstName" placeholder="Search" id="searchContent"/>
        </div>
      </header>
      <SubContainer onClicking={props.onClicking}></SubContainer>
    </div>
  );
};

export default Container;
