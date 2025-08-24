import express from "express";

const server = express();

server.get('/brother', (req, res) => {

    res.send("URL de prueba rey")
})

export default server;
