import React from "react";
import { FaCloudRain, FaCloudSunRain } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";

const ConditionIcon = (props) => {
  const { condition, size, color } = props;

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

      default:
        break;
    }
  };

  return <div className="condition-icon">{getConditionIcon()}</div>;
};

export default ConditionIcon;
