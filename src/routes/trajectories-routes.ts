import { Router } from "express";
import { trajectories } from "../controllers/trajectories-controller";

const trajectoriesRouter:Router = Router();

trajectoriesRouter.get('/', trajectories);

export default trajectoriesRouter;