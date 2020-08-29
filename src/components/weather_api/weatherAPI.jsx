import React from "react";
import "./weatherAPI.scss";
import { useEffect } from "react";
import { useState } from "react";

const WeatherAPI = () => {
  const [temperature, setTemperature] = useState(34);
  const [summary, setSummary] = useState("It's cold");
  const [icon, setIcon] = useState(
    "http://openweathermap.org/img/wn/10d@2x.png"
  );
  const [city, setCity] = useState("City");
  const [sign, setSign] = useState("C");
  const [TEMP, SetTEMP] = useState(34);

  const api_key = "dc86adafdf271b5055a84ce475f8b1f5";

  const loadData = async (api) => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTemperature(Math.floor(data.main.temp - 273));
        SetTEMP(Math.floor(data.main.temp - 273));
        setSummary(data.weather[0].description);
        setIcon(
          `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        setCity(data.name);
        console.log(temperature);
        console.log(summary);
        console.log(icon);
        console.log(city);
      });
  };

  const changeTemperature = () => {
    const farenheit = Math.floor((TEMP * 9) / 5 + 32);
    const celsius = TEMP;

    if (sign === "C") {
      setSign("F");
      setTemperature(farenheit);
    } else {
      setSign("C");
      setTemperature(celsius);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const long = position.coords.longitude;
        const lat = position.coords.latitude;

        const proxy = "http://cors-anywhere.herokuapp.com/";
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
        loadData(api);
      });
    } else {
      setCity(
        "it's  not working because browser don't support  or because you should allow it"
      );
    }
  }, []);

  return (
    <div className="WeatherAPI">
      <div class="location">
        <h1 class="location-city">{city}</h1>
        <img class="icon" src={icon} alt="Icon" />
      </div>
      <div class="temperature-section" onClick={() => changeTemperature()}>
        <div class="degree-section">
          <h2 class="temperature-degree">{temperature}</h2>
          <span>{sign}</span>
        </div>
        <div class="temperature-description">{summary}</div>
      </div>
    </div>
  );
};

export default WeatherAPI;
