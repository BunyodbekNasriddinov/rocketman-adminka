import { Request, Response, NextFunction } from "express";
import Admin from "./Admin";
import { AuthorizationError, BadRequestError, InternalServerError, NotFoundError } from "../../utils/errors";
import jwt from "../../utils/jwt";


const LOGIN = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body
        const findAdmin = await Admin.findOne({ username, password })
        if (!findAdmin) {
            return res.send(new NotFoundError("Admin Not Found"))
        }
        delete findAdmin.password
        res.status(201).json({
            status: 201,
            message: "success logined",
            access_token: jwt.sign({ id: findAdmin.id, role: findAdmin.role }),
            data: findAdmin,

        })
    } catch (error) {
        return new InternalServerError("InternalServerError")
    }
}


const CREATE_ADMIN = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password, role } = req.body
        if (role == "superadmin") {
            return res.send(new BadRequestError("Unable to add super admin"))
        }
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
        return res.send(new InternalServerError("InternalServerError"))
    }
}


const UPDATE_ADMIN = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { access_token } = req.headers
        const { id } = req.params
        const { username, password } = req.body
        const update_admin = await Admin.findByIdAndUpdate(id, { username, password })

    } catch (error) {
        console.log(error.message);

    }
}


const DELETE = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const delete_admin = await Admin.findByIdAndDelete(id)
        res.status(204).json({ status: 204, message: "success deleted admin", data: delete_admin })
    } catch (error) {
        console.log(error.message);

    }
}


export default {
    LOGIN,
    CREATE_ADMIN,
    UPDATE_ADMIN,
    DELETE
}