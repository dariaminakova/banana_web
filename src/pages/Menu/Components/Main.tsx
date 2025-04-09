import { useState } from "react";
import "./MenuItems.css";

const items = [
  {
    name: "Chocolate-Dipped Banana",
    weight: "220g",
    image: "/images/banana1.png",
  },
  {
    name: "Fairy Dust Cream Pie",
    weight: "230g",
    image: "/images/banana2.png",
  },
  {
    name: "Mystical Split",
    weight: "195g",
    image: "/images/banana3.png",
  },
  {
    name: "Wizard's Banana",
    weight: "250g",
    image: "/images/banana4.png",
  },
  {
    name: "Mermaid's Pancake",
    weight: "190g",
    image: "/images/banana5.png",
  },
];

const Main = () => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className='menu-items-container'>
      <div className='menu-list'>
        {items.map((item) => (
          <div
            key={item.name}
            className={`menu-item ${
              selected.name === item.name ? "selected" : ""
            }`}
            onClick={() => setSelected(item)}
          >
            <div>{item.name}</div>
            <div className='item-weight'>{item.weight}</div>
          </div>
        ))}
      </div>
      <div className='menu-image'>
        <img src={selected.image} alt={selected.name} />
      </div>
    </div>
  );
};

export default Main;
