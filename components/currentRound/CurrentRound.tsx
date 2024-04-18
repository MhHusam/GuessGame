import React from "react";
import { useSelector } from "react-redux";
import styles from "./CurrentRound.module.scss";
import { TfiCup } from "react-icons/tfi";
export const CurrentRound = () => {
  const players = [1, 2, 3, 4];
  let currentRound = useSelector((state: any) => state.Game.rankingPlayers);
  let currentCOPY = [...currentRound];
  let gameStatus = useSelector((state: any) => state.Game.GameBegins);

  return (
    <div>
      <h1 className="pb-2 flex gap-1 items-center">
        <TfiCup size={20} /> Current Round
      </h1>
      <div className={styles.container}>
        <table className={styles.Rank_Table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>point</th>
              <th>multiplier</th>
            </tr>
          </thead>
          <tbody>
            {currentCOPY.map((player) => (
              <tr
                key={player.id}
                className={player.playerName == "You" ? "bg-[#304c61]" : ""}
              >
                <td>{player.playerName}</td>
                <td>
                  {gameStatus && player.playerScore == 0
                    ? "-"
                    : player.totalPoint}
                </td>
                <td>
                  {gameStatus && player.playerScore == 0
                    ? "-"
                    : player.multiplier}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
