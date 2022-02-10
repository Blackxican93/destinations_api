//import
const db = require("./db");
const express = require("express");
const cors = require("cors")
//Port
const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

//Endpoints (routes) are made up of the methods and the path
//GET /
server.get("/", (req, res) => {
  res.send(db);
});
