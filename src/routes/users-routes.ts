import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser } from "../controllers/users-controller";

const usersRouter:Router = Router();

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.put('/:id', updateUser);
usersRouter.delete('/:id', deleteUser);

export default usersRouter;