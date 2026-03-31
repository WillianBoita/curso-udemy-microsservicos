import 'dotenv/config';
import Express from "express";

/*const requiredEnvs = ['JWT_SECRET'] as const

for (const key of requiredEnvs) {
  if (!process.env[key]) {
    throw new Error(`Variável de ambiente ausente: ${key}`)
  }
}*/

export const env = {
  port: Number(process.env.PORT ?? 9092),
  jwtSecret: process.env.JWT_SECRET!,
  nodeEnv: process.env.NODE_ENV ?? 'development',
}

const server = Express();

server.get("/api/status", (req, res) => {
  res.status(200).json({
    service: "Sales-API",
    status: "up",
    httpStatus: 200
  })
})

server.listen(env.port, () => {
  console.log(`Servidor sales rodando em http://localhost:${env.port}`);
})
