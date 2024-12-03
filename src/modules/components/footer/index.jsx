import React from 'react'
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <div className=" mt-[70px]">
      <div className="max-w-[1440px] mx-auto px-[150px] py-10">
        <div className="flex items-center justify-between">
          <img className="w-[60px]" src={logo} alt="logo" />
          <nav className="flex gap-7 items-center text-sm text-white">
            <h5>Home</h5>
            <h5>Feautures</h5>
            <h5>About</h5>
            <h5>Contact</h5>
          </nav>
        </div>
        <p className="text-center text-white mt-[30px] hover:text-[#8f259b] cursor-pointer transition duration-300">
          © DEFI AI . All Rights Reserved 2024. Licensing
        </p>
      </div>
    </div>
  );
}
