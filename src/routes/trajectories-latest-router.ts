import { Router } from "express";
import { trajectoriesLatest } from "../controllers/trajectories-latest-controller";

const trajectoriesLatestRouter:Router = Router();

trajectoriesLatestRouter.get('/', trajectoriesLatest);

export default trajectoriesLatestRouter;