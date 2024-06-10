import db from "../db"
import { IChecklist } from "../type/app"

export const create = async (payload: IChecklist) => {
    const todos = await db.checklist.create({
        data: {
            name: payload.name,
            userId: payload.userId,
        }
    })

    return todos
}


export const getTodos = async (userId: number) => {
    return await db.checklist.findMany({
        orderBy: {
            id: "desc"
        },
        where: {
            userId
        },
        include: {
            items: true
        }
    })
}

export const updateTodo = async (id: number, name?: string, item?: boolean) => {
    const currentTodo = await db.checklist.findUnique({
        where: { id }
    })

    if (!currentTodo) {
        throw new Error(" To do List Not Found!")
    }

    const updateTodo = await db.checklist.update({
        where: { id },
        data: {
            name: name,
        }
    })
    return updateTodo
}

export const deleteTodo = async (id: number) => {
    return await db.checklist.delete({
        where: { id }
    })
}

// export const checkAllTodos = async (userId: number, data) => {
//     const todos = await db.checklist.findMany({
//         where: {
//             userId
//         }
//     })
//     const updatedTodos = await db.checklist.updateMany({
//         where: { userId },
//         data: { ItemId }
//     })

//     return updatedTodos
// }