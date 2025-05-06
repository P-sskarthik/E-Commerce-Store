import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const NavBar = () => {
  const { itemsCount, totalPrice } = useContext(CartContext);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🛍️ E-Commerce Store</h1>
        <div className="flex gap-6">
          <span>🛒 Items: <strong>{itemsCount}</strong></span>
          <span>💰 Total: <strong>${totalPrice.toFixed(2)}</strong></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
