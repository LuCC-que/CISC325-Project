import classes from "../Active.module.css";
import Temperture from "./SubContainer/Temperture";
import SubContainer from "./SubContainer/SubContainer";
import { useReducer } from "react";

const container = (props) => {
  return (
    <div className={classes.container} onClick={props.onClicking}>
      <header
        className={classes.headerdisplay}
        onClick={props.onClicking}
      ></header>
      <SubContainer onClicking={props.onClicking}></SubContainer>
    </div>
  );
};

export default container;
