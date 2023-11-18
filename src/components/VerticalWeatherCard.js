import React from "react";

const VerticalWeatherCard = (props) => {
  const { title } = props;
  return (
    <div className="weather-card weather-card__vertical">
      I am a vertical card {title}
    </div>
  );
};

export default VerticalWeatherCard;
