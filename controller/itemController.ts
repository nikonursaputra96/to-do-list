import * as itemService from "../service/item"
import { Request, Response } from "express"

export const create = async (req: Request, res: Response) => {
    try {
        const { body } = req
        body.userId = res.locals.user
        const { checklistId } = req.params

        const todos = await itemService.create(body, +checklistId)
        res.json({
            status: true,
            message: "SUCCESS CREATE TO DO LIST",
            data: todos
        })

    } catch (error) {
        const err = error as unknown as Error
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

// export const getTodos = async (req: Request, res: Response) => {
//     try {
//         const userId = res.locals.user
//         const todo = await itemService.getItem(userId)
//         res.json({
//             status: true,
//             message: "SUCCESS GET DATA",
//             data: todo,
//         })
//     } catch (error) {
//         const err = error as unknown as Error
//         res.status(500).json({
//             status: false,
//             message: err.message
//         })
//     }
// }