import React, { useEffect, useRef } from "react";
import Navbar from "./navbar";
import settings from "../../assets/settings.png"
import shield from "../../assets/shield.png";
import Marquee from "react-fast-marquee";
import { GiRocketThruster } from "react-icons/gi";
import { VscGraph } from "react-icons/vsc";
const InteractiveBlocks = () => {
  const blockContainerRef = useRef(null);
  const blockSize = 70;

  useEffect(() => {
    const blockContainer = blockContainerRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;

    // Create blocks
    for (let i = 0; i < numBlocks; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.dataset.index = i;
      block.addEventListener("mousemove", highlightRandomNeighbors);
      blockContainer.appendChild(block);
    }

    function highlightRandomNeighbors(event) {
      const block = event.target;
      const index = parseInt(block.dataset.index);
      const neighbors = [
        index - 1,
        index + 1,
        index - numCols,
        index + numCols,
        index - numCols - 1,
        index - numCols + 1,
        index + numCols - 1,
        index + numCols + 1,
      ].filter(
        (i) =>
          i >= 0 &&
          i < numBlocks &&
          Math.abs((i % numCols) - (index % numCols)) <= 1
      );

      block.classList.add("highlight");
      setTimeout(() => {
        block.classList.remove("highlight");
      }, 500);

      shuffleArray(neighbors)
        .slice(0, 1)
        .forEach((nIndex) => {
          const neighbor = blockContainer.children[nIndex];
          if (neighbor) {
            neighbor.classList.add("highlight");
            setTimeout(() => {
              neighbor.classList.remove("highlight");
            }, 500);
          }
        });
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    return () => {
      blockContainer.innerHTML = "";
    };
  }, []);

  return (
    <div className="blocks-container relative">
      <div id="blocks" ref={blockContainerRef}></div>
      <div className="text-white content flex-col">
        <div className="flex items-center justify-center">
          <Navbar />
        </div>
        <div className="mt-[60px] flex flex-col items-center">
          <p className="px-6 h-[38px] border border-white/20 rounded-full flex justify-center items-center  text-xs">
            Welcome to DEFI AI
          </p>
          <h1 className="text-[50px] text-center leading-[52px] mt-6">
            Unclock Potential with Cutting-Edge <br /> Machine Learning
            Technologies
          </h1>
          <p className="text-sm text-[#ffffff]/50 mt-4">
            Comprehensive resources, tutorials, and real-world applications.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 px-[150px] mt-[50px] max-w-[1440px] mx-auto">
          <div className="col-span-1 flex gap-5 flex-col">
            <div className="relative bg-[#1c1c1c] p-5 rounded-[12px] h-[250px] overflow-hidden ">
              <h4 className="text-[24px]">Swap</h4>
              <p className="text-sm w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                incidunt ti.
              </p>
              <img
                src={settings}
                className="absolute -bottom-[40px] -right-[40px] w-[220px]"
                alt="settings"
              />
            </div>
            <div className="bg-[#1c1c1c] p-5 rounded-[12px] h-[250px]">
              <h4 className="text-[24px]">Token details</h4>
              <p className="text-sm w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                incidunt ti.
              </p>
            </div>
          </div>
          <div className="relative col-span-1 bg-[#1c1c1c] p-5 rounded-[12px] h-full overflow-hidden">
            <div className="flex justify-between items-center">
              {" "}
              <h4 className="text-[24px]">Get gas fee</h4>
              <div className="w-[50px] h-[30px] bg-[#0f0f0f] relative rounded-full py-[3px] ">
                <div className="w-[24px] h-[24px] bg-[#8f259b] rounded-full absolute right-[3px] "></div>
              </div>
            </div>
            <p className="text-sm w-[300px] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              incidunt ti.dipisicing elit. Ipsum incidunt ti.
            </p>
            <div className="absolute -bottom-[110px] -right-[110px]   ">
              <div className="w-[400px] h-[400px] border border-[#8f259b] rounded-full p-6">
                <div className="w-full h-full border border-[#8f259b] rounded-full p-6">
                  <div className="w-full h-full border border-[#8f259b] rounded-full p-6">
                    <div className="w-full h-full border border-[#8f259b] rounded-full p-6">
                      <img
                        src={shield}
                        className="absolute right- w-[200px]"
                        alt="shield"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <img
              src={shield}
              className="absolute -bottom-[40px] -right-[60px] w-[300px]"
              alt="shield"
            /> */}
          </div>
          <div className="col-span-1 flex gap-5 flex-col">
            <div className="bg-[#1c1c1c]  rounded-[12px] h-[250px]">
              <div className="p-5">
                <h4 className="text-[24px]">Transfer (including ens)</h4>
                <p className="text-sm w-[300px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum incidunt ti.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {" "}
                <Marquee speed={40} direction="right">
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                </Marquee>
                <Marquee speed={40} direction="left">
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <GiRocketThruster />
                    <p className="text-[10px] text-white font-medium">
                      High performance
                    </p>
                  </div>
                  <div className="w-[150px] h-[45px] rounded-[10px] border border-[#8f259b] text-[#8f259b] text-[22px] flex gap-2 px-3 items-center mx-1">
                    <VscGraph />
                    <p className="text-[10px] text-white font-medium">
                      Performance
                    </p>
                  </div>
                </Marquee>
              </div>
            </div>
            <div className="bg-[#1c1c1c] p-5 rounded-[12px] h-[250px]">
              <div className="flex items-center gap-3">
                <h4 className="text-[24px]">Voice feautures</h4>
                <p className="text-[10px] bg-[#8f259b] px-2 py-[3px] rounded-full">
                  New
                </p>
              </div>
              <p className="text-sm w-[300px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
                incidunt ti.\ Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ipsum incidunt ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBlocks;
