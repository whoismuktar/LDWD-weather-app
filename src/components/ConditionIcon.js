import React from "react";
import { MdSunny } from "react-icons/md";

const ConditionIcon = (prop) => {
  const { condition, size, color } = prop;

  const getConditionIcon = () => {
    switch (condition) {
      case "sunny":
        return <MdSunny size={size} color={color} />;

      default:
        break;
    }
  };

  return <div className="condition-icon">{getConditionIcon()}</div>;
};

export default ConditionIcon;
