import React from "react";
import logo from "../assets/images/logo-colored.svg";
import SearchBar from "../utils/SearchBar";
import NavActions from "../utils/NavActions";

const Header = () => {
  return (
    <div className=" flex h-20 w-screen justify-evenly bg-white border-b-2 border-gray-200 items-center">
      <a href="/" >
        <img src={logo} alt="logo" className=" w-[150px] h-[46px] " />
      </a>
      <SearchBar />
      <NavActions />
    </div>
  );
};

export default Header;
