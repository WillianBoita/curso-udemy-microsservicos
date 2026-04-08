import 'dotenv/config';
import Express from "express";
import cors from 'cors'

import * as db from './config/db/initialData.js';

const server = Express();

server.use(Express.json())
server.use(cors())

db.createInitialData()
server.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "Product-API",
    status: "up",
    httpStatus: 200
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor product rodando em http://localhost:${process.env.PORT}`);
})
