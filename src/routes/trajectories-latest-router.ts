import { Router } from "express";
import { trajectoriesLatest } from "../controllers/trajectories-latest-controller";
import { authenticateToken } from "../middleware/auth-middleware";

const trajectoriesLatestRouter:Router = Router();

trajectoriesLatestRouter.use(authenticateToken);

trajectoriesLatestRouter.get('/', trajectoriesLatest);

export default trajectoriesLatestRouter;