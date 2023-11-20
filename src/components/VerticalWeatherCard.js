import React from "react";
import ConditionIcon from "./ConditionIcon";

const WeatherItem = ({ weather }) => {
  return (
    <div className="weather-item">
      <div className="weather-item__time">{weather.time}</div>
      <div className="weather-item__icon">
        <ConditionIcon condition={weather.condition} size={60} />
      </div>
      <div className="weather-item__temperature">
        <span>{weather.temperature}</span>
        <span className="degree-icon">o</span>
      </div>
    </div>
  );
};

const weatherData = [
  {
    city: "Madrid",
    chanceOfRain: 0,
    temperature: -10,
    condition: "sunny",
    time: "6:00 AM",
  },
  {
    city: "Turin",
    chanceOfRain: 0,
    temperature: 31,
    condition: "sunny",
    time: "9:00 AM",
  },
  {
    city: "Lagos",
    chanceOfRain: 0,
    temperature: 31,
    condition: "rainy",
    time: "12:00 AM",
  },
  {
    city: "Paris",
    chanceOfRain: 20,
    temperature: 33,
    condition: "cloudRain",
    time: "3:00 PM",
  },
  {
    city: "Madrid",
    chanceOfRain: 10,
    temperature: 50,
    condition: "rainy",
    time: "6:00 PM",
  },
  {
    city: "Mbuntu",
    chanceOfRain: 100,
    temperature: -4,
    condition: "sunny",
    time: "9:00 PM",
  },
];

const VerticalWeatherCard = (props) => {
  const { title } = props;

  return (
    <div className="weather-card weather-card__vertical">
      <div className="weather-card__title">{title}</div>

      <div className="weather-card__content">
        {weatherData.map((item, i) => {
          return (
            <>
              <WeatherItem weather={item} key={i} />
              {i !== weatherData.length - 1 && <hr className="weather-card__hr" />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default VerticalWeatherCard;
