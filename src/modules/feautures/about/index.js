import React from 'react'
import about from "../../../assets/about.png"

export default function About() {
  return (
    <div className="flex items-center  mt-20">
      <img src={about} alt="about" />
      <div className="pl-20 text-white ">
        <h6>About DEFI AI</h6>
        <h2 className="text-[38px] leading-[45px] mt-2">
          Unlock the Future: <br /> Experience the Power Of <br /> Our Web3
          Platform
        </h2>
        <p className="text-sm w-[400px] mt-4">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          incidunt ti.\ Lorem ipsum dolor sit, amet consectetur adipisicing
        </p>
        <button className="h-[38px] px-5 bg-[#8f259b] mt-6 rounded-full text-sm">Get Started</button>
      </div>
    </div>
  );
}
