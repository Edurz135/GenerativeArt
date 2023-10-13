import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

// Returns random number between -1 and 1
function getRandom() {
  return Math.random() * 2 - 1;
}

function sketch(p5: P5CanvasInstance) {
  p5.setup = () => p5.createCanvas(500, 500, p5.WEBGL);
  var posX = 20;
  var posY = 20;
  var speed = 10;

  p5.draw = () => {
    // p5.background(0);
    var speedX = getRandom() * speed;
    var speedY = getRandom() * speed;
    posX += speedX;
    posY += speedY;
    p5.ellipse(posX, posY, 100, 100);
  };
}

export const RandomWalker = () => {
  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};
