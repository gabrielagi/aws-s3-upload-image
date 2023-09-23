const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  res.send("Welcome to the server");
});

route.post("/upload", (req, res) => {
  console.log(req.files);
  res.send("File uploaded");
});
