import { AuthorizationError, BadRequestError } from '../utils/errors';
import jwt from '../utils/jwt';
import { Request , Response , NextFunction } from 'express';

// tokeni bormi  yog'ligini tekshirish
export default (req:Request , res:Response, next:NextFunction) => {
  try {
    const { access_token} = req.headers
    
    if(!access_token){ 
      return res.send(new BadRequestError('token required'))
    }
    const { _id  , role}:any = jwt.verify(access_token)
    if(role != "superadmin") {
        throw new AuthorizationError("you are not allowed to do such things")
    }else {
        next()
    }
    
  } catch (error:any) {
    return next(error)
  }
}