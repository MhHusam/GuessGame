import React, { useEffect } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { GoPersonFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { FaMedal } from "react-icons/fa6";
import styles from "./TopBar.module.scss";

export const TopBar = () => {
  const userName = useSelector((state: any) => state.Game.userName);
  const totalBalance = useSelector((state: any) => state.Game.totalBalance);

  const date = new Date();
  let showTime =
    date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0");

  useEffect(() => {
    showTime =
      date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0");
  }, [showTime]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <FaMedal size={25} fill={`${userName ? "#e4d654" : "#8f1f32"} `} />
          <span className="pl-10">{userName && totalBalance}</span>
        </div>
        <div className={styles.card}>
          <GoPersonFill
            size={25}
            fill={`${userName ? "#e4d654" : "#8f1f32"} `}
          />
          <span className="pl-10">{userName}</span>
        </div>
        <div className={styles.card}>
          <FcAlarmClock size={25} />
          <span className="pl-10"> {userName && showTime}</span>
        </div>
      </div>
    </div>
  );
};
