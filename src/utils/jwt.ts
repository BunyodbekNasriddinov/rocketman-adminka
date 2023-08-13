import { sign, verify } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

export default {
  sign: (payload: any) => sign(payload, JWT_SECRET),
  verify: (token: string) => verify(token, JWT_SECRET),
}
