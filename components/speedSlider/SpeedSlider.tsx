import styles from "./SpeedSlider.module.scss";
import { setSpeedLevel } from "@/redux/features/user/GameSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const SpeedSlider = () => {
  const dispatch = useDispatch();
  const speedValue = useSelector((state: any) => state.Game.speedLevel);
  return (
    <div>
      <h1 className="pb-2">Speed</h1>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          className={styles.speed}
          min="1"
          max="5"
          step="1"
          onChange={(e) =>
            dispatch(setSpeedLevel(parseInt(e.target.value, 10)))
          }
          value={speedValue}
        />

        <div className={styles.levels}>
          <div className={speedValue <= 1 ? `${styles.selected}` : ""}>5x</div>
          <div className={speedValue <= 2 ? `${styles.selected}` : ""}>4x</div>
          <div className={speedValue <= 3 ? `${styles.selected}` : ""}>3x</div>
          <div className={speedValue <= 4 ? `${styles.selected}` : ""}>2x</div>
          <div className={speedValue <= 5 ? `${styles.selected}` : ""}>1x</div>
        </div>
      </div>
    </div>
  );
};
