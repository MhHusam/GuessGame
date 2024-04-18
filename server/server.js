import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const PORT = 8080;

const app = express();

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

function generateMessages() {
  const messages = [
    { name: "CPU 1", message: "hello guys" },
    { name: "CPU 2", message: "hi mohammed" },
    { name: "CPU 1", message: "let's play togather!" },
  ];

  messages.forEach((message, index) => {
    setTimeout(() => {
      io.emit("chatMessage", message);
    }, (index + 1) * 4000);
  });
}

io.on("chatMessage", ({ name, message }) => {
  socket.broadcast.emit("chatMessage", { name, message });
});

io.on("connection", (socket) => {
  generateMessages();
  console.log("socket");
  io.emit("sad", "asd");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
