import { Router } from 'express';
import taxisRouter from './taxis-routes';
import trajectoriesRouter from './trajectories-routes';
import usersRouter from './users-routes';

const rootRouter: Router = Router()

rootRouter.use('/taxis', taxisRouter);
rootRouter.use('/trajectories', trajectoriesRouter);
rootRouter.use('/users', usersRouter);

export default rootRouter;