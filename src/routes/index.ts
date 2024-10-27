import { Router } from 'express';
import taxisRouter from './taxis-routes';
import trajectoriesRouter from './trajectories-routes';

const rootRouter: Router = Router()

rootRouter.use('/taxis', taxisRouter);
rootRouter.use('/trajectories', trajectoriesRouter);

export default rootRouter;