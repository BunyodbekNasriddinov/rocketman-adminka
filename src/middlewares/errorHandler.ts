import { NextFunction, Request, Response } from "express"
import { BadRequestError } from "../utils/errors"

interface IError {
  status: number
  name: string
  message: string
}

export default (
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status !== 500) {
    return res
      .status(err.status)
      .json({ status: err.status, name: err.name, message: err.message })
  }

  if (process.env.NODE_ENV === "dev") {
    return res
      .status(500)
      .json({ status: 500, name: err.name, message: err.message })
  }

  return res
    .status(500)
    .json({ status: 500, name: err.name, message: "InternalServerError" })
}
