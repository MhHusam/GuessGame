import React from "react";
import { useSelector } from "react-redux";
import styles from "./Ranking.module.scss";
import { FaRankingStar } from "react-icons/fa6";
export default function Ranking() {
  let ranking = useSelector((state: any) => state.Game.rankingPlayers);
  const ramkingCopy = [...ranking];
  let gameStatus = useSelector((state: any) => state.Game.GameBegins);

  return (
    <div>
      <h1 className="pb-2 flex gap-1 items-center">
        <FaRankingStar size={20} /> Ranking
      </h1>
      <div className={styles.container}>
        <table className={styles.rank_Table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ramkingCopy
              .sort((p1, p2) => p2.playerScore - p1.playerScore)
              .map((player) => (
                <tr
                  key={player.id}
                  className={player.playerName == "You" ? "bg-[#495b6a]" : ""}
                >
                  <td>{player.id}</td>
                  <td>
                    {gameStatus || player.playerScore == 0
                      ? "-"
                      : player.playerName}
                  </td>
                  <td>
                    {gameStatus || player.playerScore == 0
                      ? "-"
                      : player.playerScore}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
