import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";

const NavActions = () => {
  return (
    <nav className="flex h-[50px] w-[250px] cursor-pointer items-center justify-center space-x-4 p-4 text-gray-500">
      <Link to="/profile" className="flex flex-col items-center text-xs">
        <FaUser size={20}/>
        <p>Profile</p>
      </Link>
      <Link to="/messages" className="flex flex-col items-center space-x-2 text-xs">
        <span>
          <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg"   height="20px" viewBox="0 0 512 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </span>
        <span>Message</span>
      </Link>
      <Link to="/orders" className="flex flex-col items-center space-x-2 text-xs">
        <FaHeart size={20} />
        <span>Orders</span>
      </Link>
      <Link to="/cart" className="flex flex-col items-center  space-x-2 text-xs">
        <FaShoppingCart size={20} />
        <span className="w-[45px]">My Cart</span>
      </Link>
    </nav>
  );
};

export default NavActions;
