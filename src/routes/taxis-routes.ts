import { Router } from "express";
import { show } from "../controllers/taxis-controller";
import { authenticateToken } from "../middleware/auth-middleware";

const taxisRouter:Router = Router();

// Proteger todas las rutas de este router
taxisRouter.use(authenticateToken);

taxisRouter.get('/', show);

export default taxisRouter;