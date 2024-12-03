import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser, loginUser } from "../controllers/users-controller";

const usersRouter:Router = Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.patch('/:uid', updateUser);
usersRouter.delete('/:uid', deleteUser);
usersRouter.post('/login', loginUser);

export default usersRouter;