import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";

export const GameOfLife: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  class CA {
    w: any;
    generation: any;
    cells: any;
    ruleset: any;

    constructor() {
      this.w = 4;
      this.generation = 0;
      this.cells = new Array(Math.floor((width) / this.w));
      for (let i = 0; i < this.cells.length; i++) {
        this.cells[i] = 0; //Math.floor(Math.random() * 2);
      }
      this.ruleset = [0, 1, 0, 1, 1, 0, 1, 0];
      // for(let i=0; i < this.ruleset.length; i++) {
      //     this.ruleset[i] = Math.floor(Math.random() * 2);
      // }
      console.log(this.ruleset);
      this.cells[Math.floor(this.cells.length / 2)] = 1;
    }

    rules(a: any, b: any, c: any) {
      if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
      if (a == 1 && b == 1 && c == 0) return this.ruleset[1];
      if (a == 1 && b == 0 && c == 1) return this.ruleset[2];
      if (a == 1 && b == 0 && c == 0) return this.ruleset[3];
      if (a == 0 && b == 1 && c == 1) return this.ruleset[4];
      if (a == 0 && b == 1 && c == 0) return this.ruleset[5];
      if (a == 0 && b == 0 && c == 1) return this.ruleset[6];
      if (a == 0 && b == 0 && c == 0) return this.ruleset[7];
    }

    generate() {
      var nextGen = new Array(this.cells.length);
      for (let i = 0; i < this.cells.length; i++) {
        let a = this.cells[i - 1] || 0;
        let b = this.cells[i];
        let c = this.cells[i + 1] || 0;

        let newValue = this.rules(a, b, c);
        nextGen[i] = newValue;
      }
      this.cells = nextGen;
      this.generation++;
    }

    draw(p5: any) {
      for (let i = 0; i < this.cells.length; i++) {
        let cell = this.cells[i];
        if (cell == 1) {
          p5.fill("#0F2C59");
        } else {
          p5.fill("#EADBC8");
        }
        p5.rect(i * this.w - width/2, this.generation * this.w - width/2, this.w, this.w);
      }
    }
  }

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.WEBGL);
    var ca = new CA();
    var onStart = true;
    p5.draw = () => {
      if (onStart) {
        p5.background("#EADBC8");
        onStart = false;
      }
      p5.noStroke();
      ca.draw(p5);
      ca.generate();
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
