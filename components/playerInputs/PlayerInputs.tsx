import React from "react";
import { BsPlayFill } from "react-icons/bs";
import styles from "./PlayerInputs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setPointsValue,
  setMultiplierValue,
} from "@/redux/features/user/GameSlice";

export const PlayerInputs = () => {
  const dispatch = useDispatch();

  const points = useSelector((state: any) => state.Game.points);
  const multiplier = useSelector((state: any) => state.Game.multiplier);
  const totalBalance = useSelector((state: any) => state.Game.totalBalance);

  const decrementPoints = () => {
    const newPoints = points - 25;
    if (newPoints >= 0 && newPoints <= totalBalance) {
      dispatch(setPointsValue(newPoints));
    } else if (newPoints < 0) {
      dispatch(setPointsValue(0));
    }
  };

  const incrementPoints = () => {
    const newPoints = points + 25;
    if (newPoints <= totalBalance) {
      dispatch(setPointsValue(newPoints));
    } else {
      dispatch(setPointsValue(totalBalance));
    }
  };

  const decrementMultiplier = () => {
    if (multiplier > 1) dispatch(setMultiplierValue(multiplier - 0.25));
  };

  const incrementMultiplier = () => {
    if (10 > multiplier) dispatch(setMultiplierValue(multiplier + 0.25));
  };
  return (
    <div className="flex justify-between pb-2 gap-4">
      <div className="bg-gradient-timedeg px-2 py-1  w-full rounded-lg flex justify-center    border  border-cardborder   ">
        <div className="flex flex-col items-center">
          <span className="text-[10px]  text-gray-400">points</span>
          <div className="flex items-center gap-1">
            <div
              onClick={() => decrementPoints()}
              className="bg-gradient-timedeg p-1 cursor-pointer  rounded-lg  flex border  border-cardborder "
            >
              <BsPlayFill size={15} fill="#dfe1e6" className="rotate-90" />
            </div>
            <div className={styles.input}>
              <input
                type="number"
                min="1"
                max="10"
                step="0.25"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                value={points}
                readOnly
              />
            </div>
            <div
              onClick={() => incrementPoints()}
              className="bg-gradient-timedeg p-1 cursor-pointer  rounded-lg  flex justify-center border  border-cardborder "
            >
              <BsPlayFill size={15} fill="#dfe1e6" className="-rotate-90" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-timedeg px-2 py-1   rounded-lg  w-full flex justify-center border  border-cardborder   ">
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-gray-400">multiplier</span>
          <div className="flex items-center gap-1">
            <div
              onClick={() => decrementMultiplier()}
              className="bg-gradient-timedeg p-1 cursor-pointer  rounded-lg  flex border  border-cardborder "
            >
              <BsPlayFill size={15} fill="#dfe1e6" className="rotate-90" />
            </div>
            <div className={styles.input}>
              <input
                type="number"
                min="1"
                max="10"
                step="0.25"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
                value={multiplier}
                readOnly
              />
            </div>
            <div
              onClick={() => incrementMultiplier()}
              className="bg-gradient-timedeg p-1 cursor-pointer  rounded-lg  flex border  border-cardborder "
            >
              <BsPlayFill size={15} fill="#dfe1e6" className="-rotate-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
