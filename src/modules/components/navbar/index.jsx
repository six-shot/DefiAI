import React from "react";
import logo from "../../../assets/logo.png";
export default function Navbar() {
  return (
    <div className="fixed top-5 z-[100000] md:w-auto w-full px-5 md:px-0">
      <div className=" md:w-[600px]  w-full flex  justify-between items-center  bg-[#ffffff1a] border border-gray-600/20  backdrop-blur-[100px] p-1.5  rounded-full">
        <div className="w-[40px] h-[40px] flex justify-center items-center border border-[#8f259b] rounded-full">
          <img className="w-[30px]" src={logo} alt="logo" />
        </div>
        <nav className="md:flex hidden gap-7 items-center text-sm">
          <h5>Home</h5>
          <h5>Feautures</h5>
          <h5>About</h5>
          <h5>Contact</h5>
        </nav>
        <button className="bg-[#8f259b] px-5 h-[40px] text-sm rounded-full ">
          Try now
        </button>
        
      </div>
    </div>
  );
}
