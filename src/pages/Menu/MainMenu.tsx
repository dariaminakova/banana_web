import { useDishContext } from "../../context/hook-dish-context";
import { mainDishes } from "./menuData";
import "./Menu.css";

const MainMenu = () => {
  const { selectedDish, setSelectedDish } = useDishContext();

  return (
    <ul className="dish-list">
      {mainDishes.map((dish) => (
        <li
          key={dish.name}
          className={`dish-item ${selectedDish?.name === dish.name ? "selected" : ""}`}
          onClick={() => setSelectedDish(dish)}
        >
          <div className="dish-icon">
            <img src={dish.image} alt={dish.name} />
          </div>
          <div>
            <strong>{dish.name}</strong>
            <div>{dish.weight}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;