import Joi from 'joi';



export const LoginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required()
})