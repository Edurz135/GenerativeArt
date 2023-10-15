import React, { useEffect, useState } from "react";
import duck from "../../../imgs/duck.png";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5: P5CanvasInstance) {
  p5.setup = () => p5.createCanvas(500, 500, p5.WEBGL);
  // p5.noLoop();
  
  var sleepTime = 0.1;
  var r = 0;
  var a = 0;
  const centerX = 0;
  const centerY = 0;
  p5.draw = () => {
    p5.noStroke();
    p5.fill("#0F2C59");
    if (r < 200) {
        var xCos = Math.cos(a);
        var x1 = centerX + r * xCos;
        var y1 = centerY + r * Math.sin(a);
  
        a -= 1;
        r += 0.03;
  
        p5.ellipse(x1, y1, xCos * 6, xCos * 6);
    }
  };
}

export const MainPage = () => {
  return (
    <div className="w-screen h-screen" style={{backgroundColor: "#F8F0E5"}}>
      <div className="flex flex-col h-screen relative">
        {/* just GENERATIVE */}
        <div className="z-10 relative ml-32 mt-16" style={{color: "#0F2C59"}}>
          <span className="text-4xl mr-4 tracking-wider" style={{textShadow: "3px 3px #DAC0A3"}}>just</span>
          <span className="text-7xl font-bold tracking-wider" style={{textShadow: "5px 5px #DAC0A3"}}>GENERATIVE</span>
        </div>

        {/* ART */}
        <div className="z-10 relative w-screen mt-64 pr-16 flex justify-end" style={{color: "#0F2C59"}}>
          <span className="text-7xl font-bold tracking-wider inline-block rotate-90" style={{textShadow: "5px -5px #DAC0A3"}}>
            ART
          </span>
        </div>

        {/* ABSTRACT IMAGE */}
        <div className="z-0 absolute w-screen h-screen flex items-center justify-center">
          <ReactP5Wrapper sketch={sketch} />
        </div>

        {/* Footer */}
        <div className="z-10 absolute bottom-0 ml-32 mb-16 text-xl" style={{color: "#0F2C59", textShadow: "3px 3px #DAC0A3"}}>
          Eduardo Ramón.
        </div>
      </div>
    </div>
  );
};
