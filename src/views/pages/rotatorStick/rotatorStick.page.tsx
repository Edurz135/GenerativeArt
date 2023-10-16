import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { createNoise2D } from "simplex-noise";

export const RotatorStick: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const noise2D = createNoise2D();

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);

    var angnoise = 0,
      radiusnoise = 0;
    var xnoise = 0,
      ynoise = 0;
    var angle = -Math.PI / 2;
    var radius = 50;
    var strokeCol = 254;
    var strokeChange = -1;
    var onStart = true;
    p5.frameRate(200);
    p5.draw = () => {
      if (onStart) {
        p5.background("#0F2C59");
        onStart = false;
      }
      p5.smooth();
      p5.noFill();

      radiusnoise += 0.005;
      radius = (noise2D(radiusnoise, 0) * 0.5 + 0.5) * 250 + 1;
      angnoise += 0.005;
      angle += (noise2D(angnoise, 0) * 0.5 + 0.5) * 6 - 3;
      if (angle > 360) angle -= 360;
      if (angle < 0) angle += 360;

      xnoise += 0.01;
      ynoise += 0.01;

      var centerX = (noise2D(xnoise, 0) * 0.5 + 0.5) * 50;
      var centerY = (noise2D(xnoise, 0) * 0.5 + 0.5) * 50;

      var rad = (angle * Math.PI) / 180;
      var x1 = centerX + radius * Math.cos(rad);
      var y1 = centerY + radius * Math.sin(rad);

      var opprad = rad + Math.PI;
      var x2 = centerX + radius * Math.cos(opprad);
      var y2 = centerY + radius * Math.sin(opprad);

      //   strokeCol += strokeChange;
      //   if (strokeCol > 360) strokeCol -= 1;
      //   if (strokeCol < 0) strokeCol += 1;
      //   p5.stroke(strokeCol, 60);
      p5.stroke("rgba(255, 242, 216, 0.3)");
      p5.strokeWeight(1);
      p5.line(x1, y1, x2, y2);
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
