import * as todosService from "../service/todos"
import { Request, Response } from "express"

export const create = async (req: Request, res: Response) => {
    try {
        const { body } = req
        body.userId = res.locals.user

        const todos = await todosService.create(body)
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


export const getTodos = async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user
        const todo = await todosService.getTodos(userId)
        res.json({
            status: true,
            message: "SUCCESS GET DATA",
            data: todo,
        })
    } catch (error) {
        const err = error as unknown as Error
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { title, check } = req.body

        const todo = await todosService.updateTodo(Number(id), title, check)
        res.json({
            status: true,
            message: "SUCCESS UPDATED DATA",
            data: todo,
        })
    } catch (error) {
        const err = error as unknown as Error
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteTodo = await todosService.deleteTodo(Number(id))
        res.json({
            status: true,
            message: "SUCCESS DELETED!",
        })
    } catch (error) {
        const err = error as unknown as Error
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
}

// export const checkAllTodos = async (req: Request, res: Response) => {
//     try {
//         const userId = res.locals.user
//         const { check } = req.body

//         const count = await todosService.checkAllTodos(userId, check)
//         console.log(count)
//         res.json({
//             status: true,
//             message: "SUCCESS CHECK ALL TODO LIST",
//             data: count,
//         })
//     } catch (error) {
//         const err = error as unknown as Error
//         res.status(500).json({
//             status: false,
//             message: err.message
//         })
//     }
// }