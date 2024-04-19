import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { IoChatboxEllipses } from "react-icons/io5";

function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any[]>([]);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080", {
      transports: ["websocket"],
    });

    newSocket.on("chatMessage", (data) => {
      setChat((prevChat) => [...prevChat, data]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.off();
    };
  }, []);

  const submitMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (msg === "") {
      return;
    }
    if (!socket) {
      console.error("Socket not initialized");
      return;
    }
    socket.emit("sendMessage", { name: "you", message: msg });
    setMsg("");
  };

  return (
    <div className="h-[88%]">
      <div className="flex items-center gap-1">
        <IoChatboxEllipses size={20} /> Chat{" "}
      </div>
      <div className="w-full h-full bg-card border border-cardborder rounded-lg py-1">
        <div className="h-[130px] overflow-y-scroll p-4">
          {chat.map((message, index) => (
            <div key={index}>
              <div className="flex">
                <div className="text-red-300">{message.name}:</div>
                <div className="pl-1">{message.message}</div>
              </div>
            </div>
          ))}
        </div>
        <form
          className="w-full grid grid-cols-5 px-4 gap-2"
          onSubmit={submitMsg}
        >
          <input
            type="text"
            className="pr-3 pr-md-3 w-full col-span-4 bg-base rounded-md"
            name="message"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button
            type="submit"
            className="px-4 col-span-1 bg-gradient-45deg cursor-pointer text-md text-center py-2 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
