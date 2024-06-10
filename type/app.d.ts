export type AuthMiddlewareData = {
    id: string
}

export interface IRegister {
    email: string
    password: string
    username: string
}

export interface IChecklist {
    id?: number
    name: string
    userId: number
}

export interface IItem {
    id?: number
    name: string
    checklistId: number
}