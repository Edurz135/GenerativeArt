import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

export const RandomWalker: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Returns random number between -1 and 1
  function getRandom() {
    return Math.random() * 2 - 1;
  }

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);
    var posX = 20;
    var posY = 20;
    var speed = 10;
    var onStart = true;
    p5.draw = () => {
      if (onStart) {
        p5.background("#0F2C59");
        onStart = false;
      }

      p5.stroke("#0F2C59")
      p5.fill("#F8F0E5")
      var speedX = getRandom() * speed;
      var speedY = getRandom() * speed;
      posX += speedX;
      posY += speedY;
      p5.ellipse(posX, posY, 100, 100);
    };
  }

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={ref} className="w-full h-full">
      <ReactP5Wrapper className="w-full h-full" sketch={sketch} />
    </div>
  );
};
