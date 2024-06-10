import { registerValidation } from "../lib/validation/register";
import { IRegister } from "../type/app";
import db from "../db"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (payload: IRegister) => {
    const { error, value } = registerValidation.validate(payload)
    if (error) {
        throw new Error(error.details[0].message)
    }
    const isExist = await db.user.findFirst({
        where: {
            OR: [
                {
                    username: value.username
                },
                {
                    email: value.email
                },
            ]
        }
    })

    if (isExist) {
        throw new Error("Email/ Username already exist")
    }

    const hashPassword = await bcrypt.hash(value.password, 10)
    value.password = hashPassword

    const user = await db.user.create({
        data: {
            ...value
        }
    })

    return user
}

export const login = async (username: string, password: string): Promise<string> => {
    const user = await db.user.findFirst({
        where: {
            OR: [
                {
                    username,
                },
                {
                    email: username
                },
            ]
        }
    })

    if (!user) {
        throw new Error("Email or Password not valid")
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error("Email or Password not valid")
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, { expiresIn: "1d" })

    return token
}


export const getUsers = async (userId: number) => {
    return await db.user.findMany({
        where: {
            id: userId
        }
    })
}

export const getUser = async (id: number) => {
    return await db.user.findFirst({
        where: {
            id
        }
    })
}