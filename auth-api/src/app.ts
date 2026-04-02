import 'dotenv/config';
import Express from "express";

import * as db from './config/db/initialData.js';

const server = Express();

db.createInitialData()

server.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "Auth-API",
    status: "up",
    httpStatus: 200
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor auth rodando em http://localhost:${process.env.PORT}`);
})
