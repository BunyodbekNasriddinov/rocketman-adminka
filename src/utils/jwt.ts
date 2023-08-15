import { sign, verify } from "jsonwebtoken"


const JWT_SECRET = "olma"

export default {
  sign: (payload: any) => sign(payload, JWT_SECRET),
  verify: (token: any) => verify(token, JWT_SECRET),
}
