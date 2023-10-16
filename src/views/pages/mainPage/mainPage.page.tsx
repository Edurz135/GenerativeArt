import React, { useEffect, useState } from "react";
import { MainSection } from "../mainSection/mainSection.page";
import { Card } from "../../../components/card.component";
import { RandomWalker } from "../randomWalker/randomWalker.page";
import { DrugCircle } from "../drugCircle/drugCircle.page";
import { PerfectCircle } from "../perfectCircle/perfectCircle.page";
import { RandomWalkerLines } from "../randomWalkerLines/randomWalkerLines.page";
import { MasterCircle } from "../masterCircle/masterCircle.page";
import { GameOfLife } from "../gameOfLife/gameOfLife.page";
import { RotatorStick } from "../rotatorStick/rotatorStick.page";

export const MainPage = () => {
  return (
    <div className="w-screen" style={{ backgroundColor: "#F8F0E5"}}>
      <MainSection />
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <Card childComponent={<RandomWalker />} />
        <Card childComponent={<DrugCircle />} />
        <Card childComponent={<PerfectCircle />} />
        <Card childComponent={<RandomWalkerLines />} />
        <Card childComponent={<MasterCircle />} />
        <Card childComponent={<GameOfLife />} />
        <Card childComponent={<RotatorStick />} />
      </div>
      <footer className="py-4 mt-8" style={{backgroundColor: "#0F2C59", color: "#FFF2D8"}}>
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Eduardo Ramón. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
