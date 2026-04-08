import { Request, Response, NextFunction } from 'express'
import AuthException from '../middleware/AuthException.js'
import jwt from 'jsonwebtoken'

export default async function authentication(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.headers?.authorization?.split(" ");

    const [, token] = auth ?? ["Bearer", '']

    
    if(!token) {
      throw new AuthException(401, "Token não informado.")
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    req.authUser = decoded.id
    
    return next();
  } catch (err: any) {
    const status = err.status ? err.status : 500
    return res.status(status).json({
      status,
      message: err.message 
    })
  }
}