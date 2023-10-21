import React from "react";
import { FaBars } from "react-icons/fa";
import ReusableDropdown from "../utils/DropDown";
import flag from "../assets/images/icon.png";

const NavBar = () => {

  const dropdownOptions = [
    { title: 'Option 1', link: '#' },
    { title: 'Option 2', link: '#' },
    { title: 'Option 3', link: '#' },
  ];



  return (
    <nav className="flex justify-between h-14 w-full items-center border-b-2 border-gray-200 bg-white px-6 font-inter text-black">
      <div className="flex justify-between items-center ml-[90px] text-[14px] ">
        <FaBars />
        <ul className="flex items-center ml-1 space-x-4">
          <li>All Categories</li>
          <li>Hot Offers</li>
          <li>Gift Boxes</li>
          <li>Projects</li>
          <li>Menu Items</li>
        </ul>
        <div className="w-auto ml-4">
        </div>
        <ReusableDropdown value={'Help'} options={dropdownOptions} />
      </div>
      <div className=" w-80 h-[60px] text-base   flex justify-between">
      <ReusableDropdown value={'Enlisgh,USD'} options={dropdownOptions} />
      <ReusableDropdown value={`Ship to`} image={<img src={flag} alt="flag" />} options={dropdownOptions} />
      </div>
    </nav>
  );
};

export default NavBar;
