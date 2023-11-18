import logo from "../logo.svg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTreeCity } from "react-icons/fa6";
import { useState } from "react";

function Sidebar() {
  const defMenu = [
    {
      name: "Weather",
      icon: <TiWeatherPartlySunny />,
      active: true,
    },
    {
      name: "Cities",
      icon: <FaTreeCity />,
    },
  ];

  const [menu, setMenu] = useState(defMenu);

  const changeMenu = (menuItemName) => {
    const updatedMenu = menu.map((item) => {
      const menu = item;

      if (menu.active) {
        menu.active = false;
      }

      if (menuItemName === item.name) {
        menu.active = true;
      }

      return item;
    });

    setMenu(updatedMenu);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <img src={logo} className="sidebar__logo" alt="logo" />

        <div className="sidebar__menu">
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className={`sidebar__menu-item ${item.active && "active"}`}
                onClick={() => changeMenu(item.name)}
              >
                <div className="sidebar__menu-item-icon">{item.icon}</div>
                <div className="sidebar__menu-item-name">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
