import 'dotenv/config';
import Express from "express";
import cors from 'cors'

import * as db from './config/db/initialData.js';
import UserRoutes from './modules/user/routes/UserRoutes.js'

const server = Express();

server.use(Express.json())
server.use(cors())

db.createInitialData()

server.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "Auth-API",
    status: "up",
    httpStatus: 200
  })
})

server.use('/api', UserRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor auth rodando em http://localhost:${process.env.PORT}`);
})
