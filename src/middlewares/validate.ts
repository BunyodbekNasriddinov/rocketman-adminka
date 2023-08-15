import { CategorySchema, LoginSchema } from "../utils/validation"
import { Request , Response , NextFunction } from "express"



export default (req:Request, res:Response, next:NextFunction) => {
  try {
    // admin uchun validate
    if(req.url == '/login' && req.method == 'POST'){
      const { error }:any = LoginSchema.validate(req.body)
      if(error) throw Error(error)
    }

    if(req.url == '/category' && req.method == 'POST'){
      const { error }:any = CategorySchema.validate(req.body)
      if(error) throw Error(error)
    }
    next()
  } catch (error) {
    return next(error)
  }
}
