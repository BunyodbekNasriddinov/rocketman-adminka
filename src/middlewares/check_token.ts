import { BadRequestError } from '../utils/errors';
import jwt from '../utils/jwt';
import { Request , Response , NextFunction } from 'express';

// tokeni bormi  yog'ligini tekshirish
export default (req:Request , res:Response, next:NextFunction) => {
  try {
    const { access_token } = req.headers
    if(!access_token){ 
      return res.send(new BadRequestError('token required'))
    }
    const { _id }:any = jwt.verify(access_token)
    next()
  } catch (error:any) {
    return next(error.message)
  }
}