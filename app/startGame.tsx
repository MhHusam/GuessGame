import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentRound } from "../components/currentRound/CurrentRound";
import { PlayerInputs } from "../components/playerInputs/PlayerInputs";
import { SpeedSlider } from "../components/speedSlider/SpeedSlider";
import { Welcome } from "../components/welcomeSection/Welcome";
import {
  setStatusGame,
  setUpdateBalanceValue,
  setUsersRanking,
  setMultiplierValue,
  setPointsValue,
  setfreezValue,
} from "@/redux/features/user/GameSlice";
import { PlayersGenerator, generateGuessValue } from "@/utils/utils";

function StartGame() {
  const dispatch = useDispatch();
  const GameBegins = useSelector((state: any) => state.Game.GameBegins);
  const isUserHere = useSelector((state: any) => state.Game.userName);
  const totalBalance = useSelector((state: any) => state.Game.totalBalance);
  const multiplier = useSelector((state: any) => state.Game.multiplier);
  const points = useSelector((state: any) => state.Game.points);

  const runGame = () => {
    dispatch(setStatusGame(true));
    const newFreezValue = generateGuessValue(1, 10);

    dispatch(setfreezValue(newFreezValue));

    dispatch(setUpdateBalanceValue(totalBalance - points));
    const generatedPlayers = PlayersGenerator(
      points,
      multiplier,
      newFreezValue
    );
    dispatch(setUsersRanking(generatedPlayers));

    if (totalBalance === 0) {
      if (
        confirm(
          "All your points are lost. Game over! Do you want to play again?"
        )
      ) {
        dispatch(setUpdateBalanceValue(1000));
        dispatch(setMultiplierValue(1));
        dispatch(setPointsValue(50));
      } else {
        location.reload();
      }
    }
  };

  return (
    <div>
      {isUserHere ? (
        <div className="space-y-4 animate-fade">
          <PlayerInputs />
          <div
            onClick={() => runGame()}
            className={`w-full ${
              GameBegins ? "bg-[#606671]" : "bg-gradient-45deg cursor-pointer"
            } text-md text-center py-2 rounded-md `}
          >
            <button disabled={GameBegins} type="button">
              {GameBegins ? "Started" : "Start"}
            </button>
          </div>
          <CurrentRound />
          <SpeedSlider />
        </div>
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default StartGame;
