import express from "express";

const server = express();

server.use("/", express.static("./build/app", { index: "index.html" }));

export default server;
