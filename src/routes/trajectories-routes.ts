import { Router } from "express";
import { trajectories } from "../controllers/trajectories-controller";
import { authenticateToken } from "../middleware/auth-middleware";

const trajectoriesRouter:Router = Router();

trajectoriesRouter.use(authenticateToken);

trajectoriesRouter.get('/', trajectories);

export default trajectoriesRouter;