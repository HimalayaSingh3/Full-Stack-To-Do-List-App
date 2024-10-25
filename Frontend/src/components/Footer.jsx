import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-900 p-1 text-white flex flex-col justify-center items-center ">
      <div className="logo font-bold text-white text-2xl">
        <span className="text-green-600"> &lt;</span>
        <span>Todo</span>
        <span className="text-green-600">App/&gt;</span>
      </div>
      <div className="flex justify-center items-center">
        {" "}
        Created by Himalaya Singh{" "}
      </div>
    </div>
  );
};

export default Footer;
