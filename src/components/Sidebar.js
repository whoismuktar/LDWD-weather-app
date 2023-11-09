const menu = [
  {
    name: "Weather",
    icon: "icon",
  },
  {
    name: "Cities",
    icon: "icon",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__logo">LOGO</div>

        <div className="sidebar__menu">
          {menu.map((item, index) => {
            return (
              <div key={index} className="sidebar__menu-item">
                <div className="sidebar__menu-item-icon">
                  {item.icon}
                </div>
                <div className="sidebar__menu-item-name">
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
