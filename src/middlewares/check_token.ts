import jwt from '../utils/jwt';
import { Request , Response , NextFunction } from 'express';

// tokeni bormi  yog'ligini tekshirish
export default (req:Request , res:Response, next:NextFunction) => {
  try {
    const { access_token } = req.headers
    if(!access_token){
      throw new Error('token required')
    }
    const { _Id } = jwt.verify(access_token)
    next()
  } catch (error) {
    return next(error)
  }
}