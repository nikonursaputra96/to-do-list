import { Router } from "express";
import userRouter from "./userRouter";
import todosRouter from "./todosRouter";
import itemRouter from "./itemRouter";

const router = Router()

router.use("/", userRouter)
router.use("/", todosRouter)
router.use("/", itemRouter)

export default router