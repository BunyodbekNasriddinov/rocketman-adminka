import { Request, Response, NextFunction } from "express"
import Category from "./Category";
import { BadRequestError } from "../../utils/errors";


const GET = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categories = await Category.find()
        res.status(200).send({ status: 200, message: "ok", data: categories })
    } catch (error) {
        console.log(error.message);

    }
}

const CREATE_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { category_name, status } = req.body
        const created_at = new Date()
        const findcategory = await Category.findOne({ category_name })
        if (!findcategory) {
            return res.send(new BadRequestError("such a category already exists"))
        }
        const createcategory = await Category.create({ category_name, count: 0, created_at, status })
        if (!createcategory) {
            return res.send(new BadRequestError("There is an error creating"))
        }
        res.status(201).json({ status: 201, message: "success create category", data: createcategory })
    } catch (error: any) {
        console.log(error.message);
    }
}


const UPDATE_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { category_name, status } = req.body
        const updateCategory = await Category.findByIdAndUpdate(id, { category_name, status })
        res.status(202).json({ status: 202, message: "success updated category" })
    } catch (error) {
        console.log(error.message);

    }
}


const DELETE_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const delteCategory = await Category.findByIdAndDelete(id)
        res.status(204).json({status:204 , message: "success deleted category"})
    } catch (error) {
        console.log(error.message);

    }
}

export default {
    GET,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY

}