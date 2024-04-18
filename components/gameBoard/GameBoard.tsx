import React, { useEffect } from "react";
import { TopBar } from "./topBar/TopBar";
import LineChart from "./lineChart/LineAnimate";

export const GameBoard = () => {
  return (
    <div className="space-y-3">
      <TopBar />
      <LineChart />
    </div>
  );
};
