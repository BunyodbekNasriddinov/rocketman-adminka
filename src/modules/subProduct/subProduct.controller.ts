import { Request, Response, NextFunction } from "express";
import SubProduct from "./SubProduct";
import { BadRequestError } from "../../utils/errors";


const GET_ALL = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const get_all = await SubProduct.find()
        res.status(200).send({ status: 200, message: "ok", data: get_all })
    } catch (error) {
        console.log(error.message);
    }
}


const CREATE_SUB_PRODUCT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sub_product_name, description, status, price, image, product } = req.body
        const findSub_product = await SubProduct.findOne({ sub_product_name, description, price })
        if (findSub_product) {
            return res.send(new BadRequestError("such a sub_product already exists"))
        }
        const createSubproduct = await SubProduct.create({ sub_product_name, description, status, price, image, product })
        if (!createSubproduct) {
            return res.send(new BadRequestError("There is an error creating"))
        }
        res.status(201).json({ status: 201, message: "success creating sub_product", data: createSubproduct })
    } catch (error) {
        console.log(error.message);

    }
}


const UPDATE_SUB_PRODUCT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sub_product_name, description, status, price, image } = req.body
        const updateSub_Product = await SubProduct.findByIdAndUpdate({ sub_product_name, description, status, price, image })
        if (!updateSub_Product) {
            return res.send(new BadRequestError("There is an error updating"))
        }
        res.status(202).json({ status: 202, message: "success updated product ", data: updateSub_Product })
    } catch (error) {
        console.log(error.message);

    }
}


export default {
    GET_ALL,
    CREATE_SUB_PRODUCT,
    UPDATE_SUB_PRODUCT
}