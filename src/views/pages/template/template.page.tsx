import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

export const Template: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);
    p5.draw = () => {
        
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
