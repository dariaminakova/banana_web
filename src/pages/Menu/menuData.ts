import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.jpg";
import menu3 from "../../assets/menu3.jpg";
import menu4 from "../../assets/menu4.jpg";
import menu5 from "../../assets/menu5.jpg";

export type Dish = {
  name: string;
  weight: string;
  image: string;
};

export const mainDishes: Dish[] = [
  { name: "Chocolate-Dipped Banana", weight: "220g", image: menu1 },
  { name: "Fairy Dust Cream Pie", weight: "230g", image: menu2 },
  { name: "Mystical Split", weight: "195g", image: menu3 },
  { name: "Wizard's Banana", weight: "250g", image: menu4 },
  { name: "Mermaid's Pancake", weight: "190g", image: menu5 },
];

export const starterDishes: Dish[] = [
  { name: "Banana Bruschetta", weight: "180g", image: menu3 },
  { name: "Tropical Toast", weight: "150g", image: menu5 },
  { name: "Magic Mango Bites", weight: "160g", image: menu1 },
  { name: "Caramel Swirl Dip", weight: "170g", image: menu4 },
  { name: "Golden Crumble", weight: "155g", image: menu2 },
];

export const drinkDishes: Dish[] = [
  { name: "Banana Berry Smoothie", weight: "300ml", image: menu2 },
  { name: "Vanilla Banana Latte", weight: "250ml", image: menu4 },
  { name: "Sparkling Banana Soda", weight: "330ml", image: menu5 },
  { name: "Frozen Banana Shake", weight: "280ml", image: menu1 },
  { name: "Mystic Juice", weight: "310ml", image: menu3 },
];