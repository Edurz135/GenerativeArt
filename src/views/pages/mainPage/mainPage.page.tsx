import React from "react";
import duck from "../../../imgs/duck.png";

export const MainPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-screen relative">
        {/* Top navigation */}
        <div className="z-10 relative mt-16 w-screen flex justify-center">
          <div className="flex justify-center space-x-16">
            <div className="text-lg">Main</div>
            <div className="text-lg">Projects</div>
            <div className="text-lg">About</div>
            <div className="text-lg">Contact</div>
          </div>
        </div>
        {/* Main content */}
        <div className="z-10 relative ml-32 mt-16">
          <span className="text-4xl mr-4 tracking-wider">just</span>
          <span className="text-7xl font-bold tracking-wider">GENERATIVE</span>
        </div>

        <div className="z-10 relative w-screen mt-32 pr-16 flex justify-end">
          <span className="text-7xl font-bold tracking-wider inline-block rotate-90">
            ART
          </span>
        </div>
        <div className="z-0 absolute w-screen h-screen pt-40 flex items-center justify-center">
          <img src={duck} alt="Hand with berries" className="w-2/3 h-2/3 animate-bounce" />
        </div>
        {/* Footer */}
        <div className="z-10 absolute bottom-0 ml-32 mb-16 text-xl">
          Eduardo Ramón.
        </div>
      </div>
    </div>
  );
};
