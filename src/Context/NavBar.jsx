import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useSelector } from "react-redux";
import { Link } from "react-router";
const NavBar = () => {
  // const { itemsCount, totalPrice } = useContext(CartContext);
const cart=useSelector((store)=>store.cart)
  return (
    <>
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🛍️ E-Commerce Store</h1>
        <Link to={"/about"}> About </Link>
        <Link to={"/cart"}> Cart </Link>
        <Link to={"/dashboard"}> Dashboard </Link>
        <div className="flex gap-6">
          <span>🛒 Items: <strong>{cart.items.length}</strong></span>
          <span>💰 Total: <strong>${cart.total}</strong></span>
        </div>
      </div>
    </nav>
      
      </>
  );
};

export default NavBar;
