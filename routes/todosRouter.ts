import { Router } from "express";
import authentication from "../middleware/authentication";
import { create, deleteTodo, getTodos, updateTodo } from "../controller/todosController";

const todosRouter = Router()

todosRouter.post("/checklist", authentication, create)
todosRouter.get("/checklist", authentication, getTodos)
todosRouter.patch("/checklist/:id", authentication, updateTodo)
todosRouter.delete("/checklist/:id", authentication, deleteTodo)


export default todosRouter