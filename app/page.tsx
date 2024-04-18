"use client";

import { GameBoard } from "@/components/gameBoard/GameBoard";
import Ranking from "@/components/rankingTable/Ranking";
import ReduxProvider from "@/redux/redux-provider";

import React from "react";
import StartGame from "./startGame";
import Chat from "@/components/chat/Chat";

export default function Home() {
  return (
    <ReduxProvider>
      <div className="xl:container animate-fade  space-y-4">
        <div className="grid  md:grid-cols-3 grid-cols-1    gap-4">
          <div className=" col-span-1">
            <StartGame />
          </div>

          <div className="col-span-2">
            <GameBoard />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1  gap-4">
          <div>
            <Ranking />
          </div>
          <div>
            <Chat />
          </div>
        </div>
      </div>
    </ReduxProvider>
  );
}
