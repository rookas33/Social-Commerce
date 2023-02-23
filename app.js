require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} 포트가 열렸습니다`);
});
