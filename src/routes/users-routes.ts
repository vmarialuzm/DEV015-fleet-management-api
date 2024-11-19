import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser } from "../controllers/users-controller";

const usersRouter:Router = Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.patch('/:uid', updateUser);
usersRouter.delete('/:uid', deleteUser);

export default usersRouter;