import { Request, Response } from "express";
import { showUsers, crearUser, actualizarUser, eliminarUser} from "../services/users-services";

export const getUsers = async(req: Request, res: Response) => {
    const { page = '1', limit = '10'} = req.query;
    
    try {
        const users = await showUsers({
            page: parseInt(page as string, 10),
            limit: parseInt(limit as string, 10),
        });
        return res.status(200).json(users)
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
};

export const createUser = async(req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const user = await crearUser({
            name,
            email,
            password
        })
        return res.status(201).json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
};

export const updateUser = async(req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, password } = req.body;

    try {
        const user = await actualizarUser(
            Number(id),
            {
                name,
                email,
                password
            });
        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
};

export const deleteUser = async(req: Request, res: Response) => {
    const { id } = req.params

    try {
        const user = await eliminarUser(
            Number(id),
        );
        return res.status(204).json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
};