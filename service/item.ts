import db from "../db"
import { IItem } from "../type/app"

export const create = async (payload: IItem, checklistId: number) => {
    const todos = await db.item.create({
        data: {
            name: payload.name,
            checklistId: checklistId
        }
    })

    return todos
}

///////////////////

export const getItem = async (checklistId: number) => {
    return await db.item.findMany({
        orderBy: {
            id: "desc"
        },
        where: {
            checklistId
        }
    })
}

// export const updateTodo = async (checklistId: number, item?: string, item?: boolean) => {
//     const currentTodo = await db.checklist.findUnique({
//         where: { checklistId }
//     })

//     if (!currentTodo) {
//         throw new Error(" To do List Not Found!")
//     }

//     const updateTodo = await db.checklist.update({
//         where: { checklistId },
//         data: {
//             name: name,
//         }
//     })
//     return updateTodo
// }

// export const deleteItem = async (checklistId: number) => {
//     return await db.checklist.delete({
//         where: { id }
//     })
// }
