import { Request, Response } from "express";
import { showUsers, crearUser, actualizarUser, eliminarUser} from "../services/users-services";
import { prisma } from "../app"

export const getUsers = async(req: Request, res: Response) => {
    const { page = '1', limit = '10'} = req.query;
    
    const positiveIntegerRegex = /^[1-9]\d*$/;

    if (!positiveIntegerRegex.test(page as string)) {
        return res.status(400).json({ error: "Page debe ser un número entero positivo"})
    }

    if (!positiveIntegerRegex.test(limit as string)) {
        return res.status(400).json({ error: "Limit debe ser un número entero positivo"})
    }

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
        const existingUser = await prisma.user.findUnique({
            where:{email}
        });
        if (existingUser) {
            return res.status(409).json({ error: "Usuario con ese email ya existe"})
        }

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
    const { uid } = req.params
    const { name } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where:{id: Number(uid)}
        });
        if (!existingUser) {
            return res.status(404).json({ error: "El Usuario no existe"})
        }

        if (!name) {
            return res.status(400).json({ error: "Debe proporcionar el name para actualizar"})
        }

        const user = await actualizarUser(
            Number(uid),
            {
                name
            });
        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
};

export const deleteUser = async(req: Request, res: Response) => {
    const { uid } = req.params

    try {
        const existingUser = await prisma.user.findUnique({
            where:{id: Number(uid)}
        });
        if (!existingUser) {
            return res.status(404).json({ error: "El Usuario no existe"})
        }
        
        const user = await eliminarUser(
            Number(uid),
        );
        return res.status(200).json(user)
    } catch (error: any) {
        return res.status(400).json({ error: error.message })
    }
};