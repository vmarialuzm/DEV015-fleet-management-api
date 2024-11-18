import { Request, Response } from "express";
import { showTrajectoriesLatest } from "../services/trajectories-latest-service";

export const trajectoriesLatest = async(req: Request, res: Response) => {
    try {

        const trajectories = await showTrajectoriesLatest();
        return res.status(200).json(trajectories);

    } catch (error) {
        console.error("Error al listar las últimas trayectorias de los taxis: ", error);
        return res.status(500).json({
            error: "Error interno del servidor",
        })
    }
}