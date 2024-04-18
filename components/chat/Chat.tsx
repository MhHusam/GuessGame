import socket from "@/utils/socket";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { IoChatboxEllipses } from "react-icons/io5";

function Chat() {
  const [nickname, setNickname] = useState("");
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  useEffect(() => {
    const socket = io("ws://localhost:8080", {
      transports: ["websocket"],
    });
    socket.on("sad", (data) => {
      console.log("Received sad event:", data);
    });

    socket.on("chatMessage", ({ nickname, msg }) => {
      setChat([...chat, { nickname, msg }]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const submitMsg = (e: any) => {
    e.preventDefault();
    if (msg === "") {
    } else {
      socket.emit("chatMessage", { nickname, msg });

      setChat([...chat, { nickname, msg }]);
      setMsg("");
    }
  };
  console.log(chat);
  return (
    <div className="h-[88%]">
      <div className="flex items-center gap-1">
        <IoChatboxEllipses size={20} /> Chat{" "}
      </div>
      <div className="w-full h-full bg-card border border-cardborder   rounded-lg  py-1">
        <div className="h-[130px] overflow-y-scroll p-4  ">
          {chat.map((p, index) => (
            <div key={index}>
              {typeof p === "object" && p.nickname != null ? (
                <div className="flex">
                  <div className="text-red-300 ">{p.nickname}:</div>
                  <div className="pl-1">{p.msg}</div>
                </div>
              ) : (
                <p className="">{p}</p>
              )}
            </div>
          ))}
        </div>
        <form className="w-full grid grid-cols-5 px-4  gap-2">
          <input
            type="text"
            className="pr-3 pr-md-3 w-full col-span-4 bg-base rounded-md"
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button
            className={` px-4 col-span-1 bg-gradient-45deg cursor-pointer 
          text-md text-center py-2 rounded-md `}
            onClick={(e) => submitMsg(e)}
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
