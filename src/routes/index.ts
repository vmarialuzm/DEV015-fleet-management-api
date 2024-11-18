import { Router } from 'express';
import taxisRouter from './taxis-routes';
import trajectoriesRouter from './trajectories-routes';
import trajectoriesLatestRouter from './trajectories-latest-router';
import usersRouter from './users-routes';

const rootRouter: Router = Router()

rootRouter.use('/taxis', taxisRouter);
rootRouter.use('/trajectories', trajectoriesRouter);
rootRouter.use('/trajectories/latest', trajectoriesLatestRouter);
rootRouter.use('/users', usersRouter);

export default rootRouter;