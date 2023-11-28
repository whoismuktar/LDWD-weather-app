import React from "react";
import ConditionIcon from "./ConditionIcon";

const chanceOfRain = {
  title: "Chance of rain",
  subtitle: "10%",
  icon: "temperature",
};

const WeatherUnit = ({unit}) => {
  const { title, subtitle, icon } = unit;
  return (
    <div className="weather-unit">
      {/* <div className="weather-unit__icon">{icon}</div> */}
      <ConditionIcon
        condition={icon}
        size={20}
        color="grey"
      />

      <div>
        <div className="weather-unit__title">{title}</div>
        <div className="weather-unit__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

const WeatherUnitSummary = ({ title, btnTitle }) => {
  return (
    <div className="weather-card weather-unit-summary">
      <div className="d-flex align-center justify-space-between">
        <div className="weather-card__title" style={{ marginBottom: 0 }}>
          {title}
        </div>
        <button className="weather-card__btn">{btnTitle}</button>
      </div>

      <WeatherUnit unit={chanceOfRain} />
    </div>
  );
};

export default WeatherUnitSummary;
