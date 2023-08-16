import { Request, Response, NextFunction } from "express";
import SubCategory from "./SubCategory";
import { BadRequestError } from "../../utils/errors";



const CREATE_SUB_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { sub_category_name, long, lang, location, status, category } = req.body
        const findSubcategory = await SubCategory.findOne({ sub_category_name, category, location })
        if (findSubcategory) {
            return res.send(new BadRequestError("such a sub_category already exists"))
        }
        const createSubCategory = await SubCategory.create({ sub_category_name, count: 0, location, long, lang, status, category, created_at: new Date() })
        if (!createSubCategory) {
            return res.send(new BadRequestError("There is an error creating"))
        }
        res.status(201).json({ status: 201, message: "success created sub_category", data: createSubCategory })
    } catch (error) {
        console.log(error.message);

    }
}

const UPDATE_SUB_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { sub_category_name, long, lang, location, status } = req.body
        const update_subcategory = await SubCategory.findByIdAndUpdate(id, { sub_category_name, long, lang, location, status })
        res.status(202).json({ status: 202, message: "success updated sub_category" })

    } catch (error) {
        console.log(error.message);

    }
}


const BYID_SUB_CATEGORY = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const findOneSubCategory = await SubCategory.findById(id)
        if (!findOneSubCategory) {
            return res.send(new BadRequestError("Subcategory not found"))
        }
        res.status(200).json({ status: 200, message: "ok", data: findOneSubCategory })
    } catch (error) {
        console.log(error.message);

    }
}



const GET_ALL = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sucategories = await SubCategory.find()
        res.status(200).send({ status: 200, message: "ok", data: sucategories })
    } catch (error) {
        console.log(error.message);

    }
}

export default {
    CREATE_SUB_CATEGORY,
    UPDATE_SUB_CATEGORY,
    BYID_SUB_CATEGORY,
    GET_ALL
}