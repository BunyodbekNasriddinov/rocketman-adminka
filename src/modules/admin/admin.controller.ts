import { Request, Response, NextFunction } from "express";
import Admin from "./Admin";
import { AuthorizationError, InternalServerError, NotFoundError } from "../../utils/errors";


const LOGIN = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const findAdmin = await Admin.findOne({ username, password })
        if (!findAdmin) {
            return res.send(new NotFoundError("Admin Not Found"))
        }
        res.status(201).json({
            status: 201,
            message: "success logined",
            data: findAdmin

        })
    } catch (error) {
        return new InternalServerError("InternalServerError")
    }
}


const CREATE_ADMIN = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, role } = req.body
        const findadmin = await Admin.findOne({ username, password })
        if (findadmin) {
            return res.send(new AuthorizationError("such an admin already exists"))
        }
        const admin_create = await Admin.create({ username, password, role })
        if (!admin_create) {
            return res.send(new AuthorizationError("There is an error creating admin"))
        }
        res.status(201).json({ status: 201, message: "created admin", data: admin_create })
    } catch (error) {
        console.log(error.message);
        
        return res.send(new InternalServerError("InternalServerError"))
    }
}


export default {
    LOGIN,
    CREATE_ADMIN
}