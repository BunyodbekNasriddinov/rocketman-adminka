import Joi from 'joi';



export const LoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required()
})



export const CategorySchema = Joi.object({
    category_name: Joi.string().required().min(3).max(20),
    status: Joi.boolean().required()
})