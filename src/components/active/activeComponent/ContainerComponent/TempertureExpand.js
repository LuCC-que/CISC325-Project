import "./TempertureExpand.css";
import { useEffect } from "react";

const TempExpand = (props) => {
  useEffect(() => {
    var range = document.getElementById("range");
    var thumb = document.getElementById("thumb");
    var track = document.getElementById("track-inner");
    var selectValue = document.getElementById("selectValue");
    var rangeF = document.getElementById("rangeF");
    var thumbF = document.getElementById("thumbF");
    var trackF = document.getElementById("track-innerF");
    var selectValueF = document.getElementById("selectValueF");

    range.oninput = function () {
      thumb.style.left = this.value + "%";
      thumb.style.transform = "translate(-" + this.value + "%, -50%)";
      track.style.width = this.value + "%";
      selectValue.innerHTML = parseInt(this.value / 10) - 5 + "°C";
    };

    rangeF.oninput = function () {
      thumbF.style.left = this.value + "%";
      thumbF.style.transform = "translate(-" + this.value + "%, -50%)";
      trackF.style.width = this.value + "%";
      selectValueF.innerHTML = parseInt(this.value / 10) - 15 + "°C";
    };
  }, []);

  return (
    <div
      className="frame"
      style={{
        backgroundColor: props.isDark && "#B9B9B9",
        boxShadow: props.isDark && "none",
      }}
    >
      <div id="sub-title">Temperature</div>

      <div className="wrap">
        <input
          type="range"
          className="range"
          min="0"
          max="100"
          step="0.01"
          value="0"
          id="range"
        />
        <div className="track">
          <div className="track-inner" id="track-inner"></div>
        </div>
        <div className="thumb" id="thumb">
          <div id="selectValue">-5°C</div>
        </div>
      </div>

      <div className="img-refri"></div>
      <div className="refri">Refridgerator</div>

      <div className="wrapF">
        <input
          type="range"
          className="rangeF"
          min="0"
          max="100"
          step="0.01"
          value="0"
          id="rangeF"
        />
        <div className="trackF">
          <div className="track-innerF" id="track-innerF"></div>
        </div>
        <div className="thumbF" id="thumbF">
          <div id="selectValueF">-15°C</div>
        </div>
      </div>

      <div className="img-freezer"></div>
      <div className="freezer">Freezer</div>
    </div>
  );
};

export default TempExpand;
