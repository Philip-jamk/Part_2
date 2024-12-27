/*export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.exe*/

import { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    console.log(apiKey);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${apiKey}`
      )
      .then((response) => {
        console.log("Weather data:", response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        /* Adding a sucessful Message after submission*/
        console.log(`Api:${apiKey} Country:${country.capital[0]}`);

        /*End of sucessful message*/
      });
  }, [country]);

  if (weather === null) return null;

  return (
    <div className="">
      <h2>{`Weasther in ${country.capital[0]}`}</h2>
      <p>{`temperature ${weather.main.temp - (273.5).toFixed(2)} Celcius`}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="current icon to show weather"
      />
      <p>{`wind ${weather.wind.speed} m/s`}</p>
    </div>
  );
};

export default WeatherInfo;
