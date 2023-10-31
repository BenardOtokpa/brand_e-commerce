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
  const currencies = [
    { title: 'Japan, YEN', link: '#' },
    { title: 'British, POUNDS', link: '#' },
    { title: 'Swiss, FRANC', link: '#' },
  ];
  const cities = [
    { title: 'United Kingdom', link: '#' },
    { title: 'China', link: '#' },
    { title: 'Spain', link: '#' },
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
        <div className="w-auto mx-4">
        </div>
        <ReusableDropdown value={'Help'} options={dropdownOptions} />
      </div>
      <div className=" w-72 h-[60px] flex mr-9 justify-between pr-16 whitespace-pre space-x-1">
      <ReusableDropdown value={'English, USD'} options={currencies} />
      <ReusableDropdown value={'Ship to '} image={<img  src={flag} alt="flag" /> } options={cities} />
      </div>
    </nav>
  );
};

export default NavBar;
