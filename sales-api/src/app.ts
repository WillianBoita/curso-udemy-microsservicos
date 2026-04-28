import 'dotenv/config';
import Express from "express";

const server = Express();

server.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "Sales-API",
    status: "up",
    httpStatus: 200
  })
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor sales rodando em http://localhost:${process.env.PORT}`);
})
