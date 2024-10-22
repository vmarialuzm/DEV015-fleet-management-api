import { Router } from 'express';
import taxisRouter from './taxis.routes';

const rootRouter: Router = Router()

rootRouter.use('/taxis', taxisRouter)

export default rootRouter;