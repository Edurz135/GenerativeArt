import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

export const PerfectCircle: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  function drawSemiCircle(
    p5: any,
    pos_x: any,
    pos_y: any,
    radius: any,
    num_circles: any,
    x_factor: any,
    y_factor: any
  ) {
    var px = pos_x;
    var py = pos_y;
    for (let i = 1; i < num_circles / 2; i++) {
      var theta = (i * Math.PI) / (num_circles / 2);
      py += y_factor * ((Math.sin(theta) * Math.PI * radius) / num_circles);
      px += x_factor * ((Math.cos(theta) * Math.PI * radius) / num_circles);
      p5.ellipse(px, py, radius, radius);
    }
  }

  var pos_x = 0;
  var pos_y = -60;
  const num_circles = 50;
  const radius = 120;

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);
    p5.noLoop();
    p5.draw = () => {
      p5.background("#0F2C59");
      p5.stroke("#F8F0E5");
      p5.noFill();
      drawSemiCircle(p5, pos_x, pos_y - 60, radius, num_circles, 1, 1);
      drawSemiCircle(p5, pos_x, pos_y + 60, radius, num_circles, -1, 1);
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
