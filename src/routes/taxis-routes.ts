import { Router } from "express";
import { show } from "../controllers/taxis-controller";

const taxisRouter:Router = Router();

taxisRouter.get('/', show);

export default taxisRouter;