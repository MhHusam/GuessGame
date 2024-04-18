import { setUserName } from "@/redux/features/user/GameSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";

export const Welcome = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  // const userName = useSelector((state: any) => state.reduxStore.userName);

  const acceptUserName = () => {
    // Socket.emit("user nickname", nickname);
    dispatch(setUserName(username));
  };

  return (
    <div className="bg-card p-10  flex flex-col gap-6 border border-gray-600  justify-center  rounded-lg h-full   animate-fade">
      <h1 className="  font-bold text-[#a0a8b9] text-xl  text-center">
        Welcome
      </h1>
      <div className="  space-y-2  h-full py-[6rem]">
        <p className="pb-3 text-[#9096a4] text-xs text-center">
          Please Insert Your Name{" "}
        </p>
        <input
          type="text"
          value={username}
          className="bg-base outline-none w-full py-2 rounded-md px-3"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div
          onClick={() => {
            acceptUserName();
          }}
          className={`w-full        ${
            username?.length < 2
              ? "bg-[#606671]"
              : "bg-gradient-45deg cursor-pointer"
          } text-md text-center py-2 rounded-md `}
        >
          <button type="button">Accept</button>
        </div>
      </div>
    </div>
  );
};
