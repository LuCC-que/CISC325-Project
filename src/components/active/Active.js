import classes from "./Active.module.css";
import Navbar from "./activeComponent/Navbar/Navbar";
import Container from "./activeComponent/Container";
import Slient from "../slient/Slient";
import { useEffect, useState } from "react";

const Active = (props) => {
  const [isActived, setActive] = useState(false);
  const [isUsing, setUsing] = useState(0);

  const [isExpand, setExpand] = useState("");

  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("asdsad");
      setActive(false);
    }, 1000000);

    return () => {
      clearTimeout(identifier);
      console.log("cleaned");
    };
  }, [isActived, isUsing]);

  const silentOnclick = (onNavbar) => {
    console.log("time rest");
    setUsing(isUsing + 1);
    setActive(true);
    setExpand("");
  };

  const darkOnClick = () => {
    console.log("the dark is" + isDark);
    setDark(!isDark);
  };

  if (!isActived) {
    return <Slient onClick={silentOnclick}></Slient>;
  }
  return (
    <div className={classes.active}>
      <Navbar
        value={isExpand}
        onSetExpand={setExpand}
        darkOnClick={darkOnClick}
        isDark={isDark}
      ></Navbar>
      <Container onClicking={silentOnclick} isDark={isDark}></Container>
    </div>
  );
};

export default Active;
