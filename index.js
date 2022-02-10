//import
const db = require("./db");
const express = require("express")
//Port
const PORT = 3000

const server = express()
server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});

//Endpoints (routes) are made up of the methods and the path
//GET /
server.get("/", (req, res)=>{
    res.send(db);
});