import classes from "./Active.module.css";
import Navbar from "./activeComponent/Navbar/Navbar";
import Container from "./activeComponent/Container";
import Slient from "../slient/Slient";
import { useEffect, useState } from "react";
import useSound from "use-sound";

const Active = (props) => {
  const [isActived, setActive] = useState(false);
  const [isUsing, setUsing] = useState(0);

  const [isExpand, setExpand] = useState("");

  const [isDark, setDark] = useState(false);

  const [playOn] = useSound(require("./activeComponent/Navbar/sound/On1.mp3"), {
    volume: 0.8,
  });
  const [playOff] = useSound(
    require("./activeComponent/Navbar/sound/Off1.mp3"),
    { volume: 0.8 }
  );
  const [toDark] = useSound(
    require("./activeComponent/Navbar/sound/switchToDark.mp3"),
    {
      volume: 0.8,
    }
  );
  const [toSun] = useSound(
    require("./activeComponent/Navbar/sound/switchToSun.mp3"),
    {
      volume: 0.8,
    }
  );

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("asdsad");
      setActive(false);
    }, 3 * 60 * 1000);

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
    if (isDark) {
      toSun();
    } else {
      toDark();
    }
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
      <Container
        onClicking={silentOnclick}
        isDark={isDark}
        playOn={playOn}
        playOff={playOff}
      ></Container>
    </div>
  );
};

export default Active;
