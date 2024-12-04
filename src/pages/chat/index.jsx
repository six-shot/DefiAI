import React from "react";
import { IoSend } from "react-icons/io5";
import logo from "../../assets/logo.png"
import { GrConnectivity } from "react-icons/gr";
import { CiMicrophoneOn } from "react-icons/ci";
import { AiOutlineSend } from "react-icons/ai";

export default function Chat() {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center h-screen">
      <div className=" w-full h-[70vh] rounded-[10px] btn">
        <div className="bg-black w-full h-full rounded-[10px] flex flex-col gap-[20px] justify-between p-8">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-4">
              <button className="bg-[#8f259b] px-6 text-white h-[43px] rounded-[8px]">
                Delete Chat History
              </button>
            </div>
            <img className="w-[50px]" src={logo} alt="logo" />
            <div className="flex items-center gap-4">
              <button className=" px-6 text-white/50 h-[43px] rounded-[8px]">
                About
              </button>
              <button className=" border border-white/50 px-6 text-white/50 h-[43px] rounded-[8px] flex items-center gap-2">
                <GrConnectivity className="text-[18px]" />
                Connect Wallet
              </button>
            </div>
          </div>
          <div className="w-full h-full border border-[#8f259b] rounded-[10px] flex justify-center items-center flex-col">
            <h4 className="text-white text-[24px] font-semibold">
              Ask "DEFI AI" with your prompt.
            </h4>
            <p className="text-[white]/70 mt-2 text-[20px]">
              AI Powered Conversational User Interface for Cryptocurrency.
            </p>
          </div>
          <div className="flex justify-between  items-center border border-white/50 rounded-[10px] px-5">
            {" "}
            <input
              className="w-full h-[50px]   bg-transparent outline-none text-white/50"
              type="text"
              placeholder="Ask me Anything."
            />
            <div className="flex items-center gap-5">
              <CiMicrophoneOn className="text-[#8f259b] text-[25px]" />
              <AiOutlineSend className="text-[#8f259b] text-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );}