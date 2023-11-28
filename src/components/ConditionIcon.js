import React from "react";
import { FaCloudRain, FaCloudSunRain, FaTemperatureHalf } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const ConditionIcon = (props) => {
  const { condition, size, color, showTitle } = props;

  const getConditionIcon = () => {
    switch (condition) {
      case "sunny":
        return <MdSunny size={size} color={color || "yellow"} />;
      case "cloudy":
        return <FaCloudRain size={size} color={color || "white"} />;
      case "rainy":
        return <FaCloudRain size={size} color={color || "white"} />;
      case "cloudRain":
        return <FaCloudSunRain size={size} color={color || "white"} />;
      case "temperature":
        return <FaTemperatureHalf size={size} color={color || "white"} />;

      default:
        break;
    }
  };

  return (
    <div className="condition-el">
      <span className="condition-el__icon">{getConditionIcon()}</span>
      {showTitle && (
        <span className="condition-el__title">{`${condition}`}</span>
      )}
    </div>
  );
};

export default ConditionIcon;
