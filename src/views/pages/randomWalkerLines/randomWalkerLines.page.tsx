import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { createNoise2D } from "simplex-noise";

export const RandomWalkerLines: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const noise2D = createNoise2D();

  function map(number: any, inMin: any, inMax: any, outMin: any, outMax: any) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
  class Walker {
    x: any;
    y: any;
    px: any;
    py: any;
    velocityX: any;
    velocityY: any;

    constructor(x: any, y: any) {
      this.x = 0;
      this.y = 0;
      this.px = x;
      this.py = y;
      this.velocityX = Math.random() * 4 - 2;
      this.velocityY = Math.random() * 4 - 2;
    }

    isOut() {
      return this.x < -width/2 || this.x > width/2 || this.y < -width/2 || this.y > width/2;
    }

    move() {
      this.x += this.velocityX;
      this.y += this.velocityY;
    }

    velocity() {
      const simila = 0.005;
      this.velocityX += map(
        noise2D(this.x * simila, this.y * simila) * 0.5 + 0.5,
        0,
        1,
        -1,
        1
      );
      this.velocityY += map(
        noise2D(this.y * simila, this.x * simila) * 0.5 + 0.5,
        0,
        1,
        -1,
        1
      );
    }

    draw(p5: any) {
      p5.stroke("#0F2C59");
      p5.line(this.x, this.y, this.px, this.py);
      this.px = this.x;
      this.py = this.y;
    }
  }

  let cell = 100;
  let walkers: Array<Walker> = [];
  let size = Math.min(width, width) * 0.9;
  size -= size % cell;
  //   createCanvas(size, size);
  for (let i = 0; i < 20; i++) {
    walkers.push(new Walker(0, 0));
  }
  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);
    var onStart = true;
    p5.draw = () => {
      if (onStart) {
        p5.background("#EADBC8");
        onStart = false;
      }
      //   p5.stroke(0, 0);
      //   p5.rect(this.x, this.y, cell, cell);
      walkers.forEach((walker) => {
        if (!walker.isOut()) {
          walker.velocity();
          walker.move();
          walker.draw(p5);
        }
      });
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
