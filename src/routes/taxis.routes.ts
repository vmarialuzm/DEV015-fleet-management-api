import { Router } from "express";
import { taxis } from "../controllers/taxis";

const taxisRouter:Router = Router();

taxisRouter.get('/list', taxis)

export default taxisRouter;