import React, { useState } from "react";
import { DishContext } from "./hook-dish-context";

export type Dish = {
  name: string;
  weight: string;
  image: string;
};

export const DishProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  return (
    <DishContext.Provider value={{ selectedDish, setSelectedDish }}>
      {children}
    </DishContext.Provider>
  );
};
