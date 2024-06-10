import { Router } from "express";
import authentication from "../middleware/authentication";
import { create } from "../controller/itemController";


const itemRouter = Router()

itemRouter.post("/checklist/:checklistId/item", authentication, create)
export default itemRouter