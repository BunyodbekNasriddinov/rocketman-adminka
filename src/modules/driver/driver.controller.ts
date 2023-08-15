import { Request, Response, NextFunction } from "express";
import Driver from "./Driver";
import { BadRequestError, ForbiddenError } from "../../utils/errors";



const CREATE_DRIVER = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { driver_full_name, driver_birthday, phone, status } = req.body
        const createDriver = await Driver.create({ driver_full_name, driver_birthday, phone, status })
        if (!createDriver) {
            return res.send(new ForbiddenError("There is an error creating driver"))
        }
        res.status(201).json({ status: 201, message: "success created driver", data: createDriver })
    } catch (error) {
        console.log(error.message);
    }
}


const UPDATE_DRIVER = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { driver_full_name, phone } = req.body
        const updated_driver = await Driver.findByIdAndUpdate(id, { driver_full_name, phone })
        res.status(202).json({ status: 202, message: 'success updated driver' })
    } catch (error) {
        console.log(error.message);

    }
}


const DELETE_DRIVER = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const delete_driver = await Driver.findByIdAndDelete(id)
        if(!delete_driver) {
            return res.send(new BadRequestError("There is an error deleting driver"))
        }
        res.status(204).json({ status: 204, message: "success deleted driver" })
    } catch (error) {
        console.log(error.message);

    }
}




export default {
    CREATE_DRIVER,
    UPDATE_DRIVER,
    DELETE_DRIVER
}