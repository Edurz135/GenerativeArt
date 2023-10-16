import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

export const MasterCircle: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  function drawMaxiCircle(
    px: any,
    py: any,
    separation: any,
    num_circles: any,
    color: any,
    p5: any
  ) {
    p5.stroke(color);
    var factor = 0;
    for (let i = 0; i < num_circles; i++) {
      p5.ellipse(px, py, 70 + separation * i, 70 + separation * i);
      //   p5.circle(px, py, 70 + separation * i + factor);
      factor += 0.037 * i;
    }
  }

  function rotating(cx: any, cy: any, x: any, y: any, angle: any) {
    var radians = (Math.PI / 180) * angle,
      cos = Math.cos(radians),
      sin = Math.sin(radians),
      nx = cos * (x - cx) + sin * (y - cy) + cx,
      ny = cos * (y - cy) - sin * (x - cx) + cy;
    return [nx, ny];
  }

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);

    p5.noLoop();
    const xcenter = 0;
    const ycenter = 0;
    var ang = 0;
    p5.draw = () => {
      p5.noFill();
      p5.strokeWeight(0.8);
      p5.background("#0F2C59");
      let a = rotating(0, 0, -20, +0, ang);
      let b = rotating(0, 0, +20, +0, ang);
      let c = rotating(0, 0, -0, -20, ang);
      let d = rotating(0, 0, +0, +20, ang);
      drawMaxiCircle(xcenter + a[0], ycenter + a[1], 10, 30, "#FFF2D8", p5);
      drawMaxiCircle(xcenter + b[0], ycenter + b[1], 10, 30, "#FFF2D8", p5);
      drawMaxiCircle(xcenter + c[0], ycenter + c[1], 10, 30, "#FFF2D8", p5);
      drawMaxiCircle(xcenter + d[0], ycenter + d[1], 10, 30, "#FFF2D8", p5);
      ang += 1;
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
