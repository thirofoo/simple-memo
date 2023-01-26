import express from "express";
import userController from "./controllers/userController";

const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use("/users",userController);

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

export default app;