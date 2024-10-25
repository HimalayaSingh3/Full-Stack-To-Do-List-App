import React from "react";
import logo from "/public/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-green-900 p-1 text-white ">
      <div className="flex justify-between items-center h-14">
        <div className="logo font-bold text-white text-2xl flex items-center">
          <img src={logo} alt="" className="h-10 m-4" />
          <span className="text-green-600"> &lt;</span>
          <span>Todo</span>
          <span className="text-green-600">App/&gt;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
