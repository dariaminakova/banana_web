import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDishContext } from "../../context/hook-dish-context";
import "./Menu.css";

const tabs = [
  { label: "Main", path: "main" },
  { label: "Starters", path: "starters" },
  { label: "Drinks", path: "drinks" },
];

const Menu = () => {
  const { selectedDish } = useDishContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/menu") {
      navigate("/menu/main");
    }
  }, [location, navigate]);

  return (
    <div className='menu-wrapper'>
      <div className='menu-left'>
        <h2 className='menu-title'>Menu</h2>
        <div className='menu-tabs'>
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={`/menu/${tab.path}`}
              className={({ isActive }) =>
                `menu-tab ${isActive ? "active" : ""}`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
        <div className='menu-content'>
          <Outlet />
        </div>
      </div>
      <div className='menu-right'>
        {selectedDish ? (
          <div className='dish-preview-img'>
            <img src={selectedDish.image} alt={selectedDish.name} />
            <h3>{selectedDish.name}</h3>
            <p>{selectedDish.weight}</p>
          </div>
        ) : (
          <div className='dish-preview preview-placeholder'>
            <p className='preview-placeholder-text'>Select a dish</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
