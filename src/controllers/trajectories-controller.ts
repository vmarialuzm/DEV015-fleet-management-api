import { Request, Response } from "express";
import { showTrajectories } from "../services/trajectories-services";

export const trajectories = async(req: Request, res: Response) => {
    try {
        const trajectories = await showTrajectories();
        return res.status(200).json(trajectories);
    } catch (error) {
        console.log("Error al listar los trajectories: ", error);
        return res.status(500).json({
            error: "Error interno del servidor",
        })
    }
}