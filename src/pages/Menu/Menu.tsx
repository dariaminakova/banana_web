import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

const tabs = [
  { label: "Main", path: "main" },
  { label: "Starters", path: "starters" },
  { label: "Drinks", path: "drinks" },
];

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/menu") {
      navigate("/menu/main");
    }
  }, [location, navigate]);

  return (
    <div className='menu-page'>
      <div className='menu-tabs'>
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={`/menu/${tab.path}`}
            className={({ isActive }) => `menu-tab ${isActive ? "active" : ""}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div className='menu-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Menu;
