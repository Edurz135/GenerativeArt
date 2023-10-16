import React, { useEffect, useState } from "react";
import { MainSection } from "../mainSection/mainSection.page";
import { Card } from "../../../components/card.component";
import { RandomWalker } from "../randomWalker/randomWalker.page";
import { DrugCircle } from "../drugCircle/drugCircle.page";
import { PerfectCircle } from "../perfectCircle/perfectCircle.page";
import { RandomWalkerLines } from "../randomWalkerLines/randomWalkerLines.page";
import { MasterCircle } from "../masterCircle/masterCircle.page";
import { GameOfLife } from "../gameOfLife/gameOfLife.page";

export const MainPage = () => {
  return (
    <div className="w-screen" style={{ backgroundColor: "#F8F0E5" }}>
      <MainSection />
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <Card childComponent={<RandomWalker />} />
        <Card childComponent={<DrugCircle />} />
        <Card childComponent={<PerfectCircle />} />
        <Card childComponent={<RandomWalkerLines />} />
        <Card childComponent={<MasterCircle />} />
        <Card childComponent={<GameOfLife />} />
      </div>
    </div>
  );
};
