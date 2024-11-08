import { Router } from 'express';
import taxisRouter from './taxis-routes';
import trajectoriesRouter from './trajectories-routes';
import trajectoriesLatestRouter from './trajectories-latest-router';

const rootRouter: Router = Router()

rootRouter.use('/taxis', taxisRouter);
rootRouter.use('/trajectories', trajectoriesRouter);
rootRouter.use('/trajectories/latest', trajectoriesLatestRouter);

export default rootRouter;