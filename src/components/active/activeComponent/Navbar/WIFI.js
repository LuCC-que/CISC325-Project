import classes from "./Setting.module.css";
import "./wifi.css";
import { Fragment, useState } from "react";

const WIFI = (props) => {
  const [wifi, setWifi] = useState(false);
  const wifiClick = () => {
    setWifi(!wifi);
  };

  return (
    <Fragment>
      <div className={classes.settingItem} onClick={wifiClick}>
        <img src={require("./image/wifilogo.png")} className="icon"></img>
      </div>
      {wifi && (
        <div className={classes.backdrop} onClick={wifiClick}>
          <div className="frame2">
            <div className="subHeader">
              <strong>Select a WiFi from list</strong>
            </div>

            <div className="innerFrame1">
              <div className="innerText">
                <strong>BELL248</strong>
                <div className="imgB248"></div>
              </div>
            </div>

            <div className="innerFrame2">
              <div className="innerText">
                <strong>BELL741</strong>
                <div className="imgB248"></div>
              </div>
            </div>

            <div className="innerFrame3">
              <div className="innerText">
                <strong>VIRGIN280</strong>
                <div className="imgB248"></div>
              </div>
            </div>

            <div className="innerFrame4">
              <div className="innerText">
                <strong>VIRGIN829</strong>
                <div className="imgB248"></div>
              </div>
            </div>

            <div className="innerFrame5">
              <div className="innerText">
                <strong>VIRGIN999</strong>
                <div className="imgB248"></div>
              </div>
            </div>

            <div className="qrCodeText">
              <strong>QR code to connect Wifi</strong>
            </div>

            <img src={require("./image/gg.jpg")} className="qrCode" />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default WIFI;
