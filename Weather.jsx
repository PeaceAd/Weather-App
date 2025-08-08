import React, { useEffect } from "react";
import "./Weather.css";
import seacg_icon from "../assets/seacg.png";
import cloudy_icon from "../assets/cloudy.png";
import rainy_icon from "../assets/rainy.png";
import sun_icon from "../assets/sun.png";
import suncloud_icon from "../assets/suncloud.png";
import sunrain_icon from "../assets/sunrain.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img src={seacg_icon} alt="" />
      </div>
      <img src={sun_icon} alt="" className="weather-icon" />
      <p className="temperature">16c</p>
      <p className="location">London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>4.8 Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
