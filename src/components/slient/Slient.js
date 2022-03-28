import "./Slient.css";
import "./clock.css";
import "./weather.css";

import { useEffect } from "react";

const Slient = (props) => {
  useEffect(() => {
    const hr = document.querySelector(".hr");
    const min = document.querySelector(".min");
    const sec = document.querySelector(".sec");
    setInterval(() => {
      let today = new Date();
      let hours = today.getHours() * 30;
      let mins = today.getMinutes() * 6;
      let secs = today.getSeconds() * 6;

      hr.style.transform = `rotateZ(${hours + mins / 12}deg)`;
      min.style.transform = `rotateZ(${mins}deg)`;
      sec.style.transform = `rotateZ(${secs}deg)`;
    });
  }, []);

  return (
    <div className="silent" onClick={props.onClick}>
      <div className="header">
        <a href="#default" className="logo">
          Mon 2022.03.01
        </a>
        <a href="#home" className="title">
          Fridge Ui
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="wifi"
        >
          <path d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z" />
        </svg>
      </div>
      <div className="section">
        <div className="clock">
          <div className="hour">
            <div className="hr"></div>
          </div>
          <div className="minute">
            <div className="min"></div>
          </div>
          <div className="second">
            <div className="sec"></div>
          </div>
        </div>

        <div className="weather">
          <div className="weather-container">
            <div className="weather-icon">
              <img src="icons/unknown.png" alt="" />
            </div>
            <div className="temperature-value">
              <p>
                - °<span>C</span>
              </p>
            </div>
            <div className="temperature-description">
              <p>-</p>
            </div>
            <div className="location">
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="notification">
        <div className="notifyBox">
          <div className="oval">
            <div className="ovalText">Salmon spoliage</div>
            <div className="ovalText">Expiration date: Thu Jan 09, 2022</div>
            <img
              className="salmonPic"
              src={require("./img/salmon.png")}
              alt="324"
            />
          </div>
          <div className="oval">
            <div className="ovalText">Banana Rotten</div>
            <div className="ovalText">Expiration date: Thu Jan 09, 2022</div>
            <img
              className="bananaPic"
              src={require("./img/salmon.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="temperature">
          <div className="tempDigit">F:-10°C | R:5°C</div>
        </div>
      </div>
    </div>
  );
};

export default Slient;
