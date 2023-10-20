import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import DropDown from "../utils/DropDown";

const NavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Help");
  const categories = ["Help", "Category 1", "Category 2", "Category 3"]; // Add more categories as needed

  return (
    <nav className="flex h-14 w-full items-center justify-between, border-b-2 border-gray-200 bg-white px-6 font-inter text-black">
      <div className="flex items-center">
        <FaBars />
        <ul className="flex items-center space-x-4">
          <li>All Categories</li>
          <li>Hot Offers</li>
          <li>Gift Boxes</li>
          <li>Projects</li>
          <li>Menu Items</li>
        </ul>
        <div className="w-auto">
          <DropDown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={categories}
          />
        </div>
      </div>
      <div>
        <div className="w-8">
          <DropDown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={categories}
          />
        </div>
        <div className="w-8">
          <DropDown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={categories}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
