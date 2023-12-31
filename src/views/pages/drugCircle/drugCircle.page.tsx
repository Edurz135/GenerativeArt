import React, { useLayoutEffect, useRef, useState } from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { createNoise3D } from "simplex-noise";

export const DrugCircle: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const noise3D = createNoise3D();

  function w(val: any) {
    if (val == null) return width;
    return val * width;
  }

  function h(val: any) {
    if (val == null) return width;
    return val * width;
  }

  function makeCircle(numSides: any, radius: any) {
    const points = [];
    const radiansPerStep = (Math.PI * 2) / numSides;
    for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
      const x = 0.5 + radius * Math.cos(theta);
      const y = 0.5 + radius * Math.sin(theta);
      points.push([x, y]);
    }
    return points;
  }

  function chaikin(arr: any, num: any): any {
    if (num === 0) return arr;
    const l = arr.length;
    const smooth = arr
      .map((c: any, i: any) => {
        return [
          [
            0.75 * c[0] + 0.25 * arr[(i + 1) % l][0],
            0.75 * c[1] + 0.25 * arr[(i + 1) % l][1],
          ],
          [
            0.25 * c[0] + 0.75 * arr[(i + 1) % l][0],
            0.25 * c[1] + 0.75 * arr[(i + 1) % l][1],
          ],
        ];
      })
      .flat();
    return num === 1 ? smooth : chaikin(smooth, num - 1);
  }

  function dist(x1: any, y1: any, x2: any, y2: any): any {
    const a = x2 - x1;
    const b = y2 - y1;
    const distance = Math.sqrt(a * a + b * b);
    return distance;
  }
  function distortPolygon(polygon: any, frameCount: any): any {
    return polygon.map((point: any) => {
      const x = point[0];
      const y = point[1];
      const distance = dist(0.5, 0.5, x, y);
      const z = frameCount / 500;
      const z2 = frameCount / 200;
      const noiseFn = (x: any, y: any) => {
        const noiseX = x * distance * 2 + z2;
        const noiseY = y * distance * 2 + z2;
        return noise3D(noiseX, noiseY, z) * 0.5 + 0.5;
      };
      const theta = (noiseFn(x, y) ) * Math.PI * 2;

      const amountToNudge = 0.3;
      const newX = x + amountToNudge * Math.cos(theta);
      const newY = y + amountToNudge * Math.sin(theta);

      return [newX, newY];
    });
  }

  function sketch(p5: P5CanvasInstance) {
    p5.setup = () => p5.createCanvas(width, width, p5.HSB);
    p5.draw = () => {
      p5.background("#EADBC8"); // white background
      p5.noFill(); // no fill
      p5.stroke("#0F2C59"); // black stroke
      p5.strokeWeight(w(0.001)); // light stroke weight(255);
      for (let radius = 0.1; radius <= 0.5; radius += 0.015) {
        const circle = makeCircle(5, radius);
        const distortedCircle = distortPolygon(circle, p5.frameCount);
        const smoothCircle = chaikin(distortedCircle, 3);
        p5.beginShape();
        smoothCircle.forEach((point: any) => {
          p5.vertex(w(point[0]), h(point[1]));
        });
        p5.endShape(p5.CLOSE);
      }
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
