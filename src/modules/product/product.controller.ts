import { Request, Response, NextFunction } from "express";
import Product from "./Product";
import { BadRequestError, NotFoundError } from "../../utils/errors";


const CREATE_PRODUCT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { product_name, status, sub_category } = req.body
        const create_product = await Product.create({ product_name, count: 0, status, sub_category, created_at: new Date() })
        if (!create_product) {
            return res.send(new BadRequestError("There is an error creating"))
        }
        res.status(201).json({ status: 201, message: "success created product", data: create_product })
    } catch (error) {
        console.log(error.message);

    }
}


const UPDATE_PRODUCT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { product_name, status } = req.body
        const updated_product = await Product.findByIdAndUpdate(id, { product_name, status })
        if (!updated_product) {
            return res.send(new BadRequestError("There is an error updating"))
        }
        res.status(202).json({ status: 202, message: "success updated product" })
    } catch (error) {
        console.log(error.message);

    }
}


const BYID_PRODUCT = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const find_product = await Product.findById(id)
        if (!find_product) {
            return res.send(new NotFoundError("Product Not Found"))
        }
        res.status(200).json({ status: 200, message: "ok", data: find_product })
    } catch (error) {
        console.log(error.message);

    }
}


const GET_ALL = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const findproducts = await Product.find()
        res.status(200).send({ status: 200, message: "ok", data: findproducts })
    } catch (error) {
        console.log(error.message);
    }
}


export default {
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    BYID_PRODUCT,
    GET_ALL
}