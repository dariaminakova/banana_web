import { createContext, useContext } from "react";
import { Dish } from './DishContext';

type Context = {
  selectedDish: Dish | null;
  setSelectedDish: (dish: Dish) => void;
};

export const DishContext = createContext<Context | undefined>(undefined);

export const useDishContext = () => {
  const context = useContext(DishContext);
  if (!context) throw new Error();
  return context;
};
