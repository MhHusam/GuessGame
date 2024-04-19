import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { IoAddCircle } from "react-icons/io5";

const PORT = 8080;

const app = express();

const allMessages = new Set();

const messages = [
  { name: "CPU 1", message: "hello guys" },
  { name: "CPU 2", message: "hi mohammed" },
  { name: "CPU 3", message: "let's play together!" },
];

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("socket connected");

  socket.on("disconnect", () => {
    console.log("socket disconnected");
  });

  socket.on("sendMessage", (data) => {
    allMessages.add(data);
    messageShow(data);
  });

  function messageShow(message) {
    socket.emit("chatMessage", message);
  }

  messages.forEach((message, index) => {
    setTimeout(() => {
      if (!allMessages.has(message.name)) {
        allMessages.add(message);
        socket.emit("chatMessage", message);
      }
    }, (index + 1) * 8000); // Delay each message by 8000 milliseconds multiplied by its index
  });
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
