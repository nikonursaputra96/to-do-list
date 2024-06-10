import joi from "joi";
import { IRegister } from "../../type/app"

export const registerValidation = joi.object<IRegister>({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required()
})
