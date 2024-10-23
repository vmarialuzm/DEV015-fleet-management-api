import { Router } from "express";
import { show } from "../controllers/taxis-controller";

const taxisRouter:Router = Router();

taxisRouter.get('/list', show);

export default taxisRouter;