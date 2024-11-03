import { Request, Response } from "express";
import { showTrajectories } from "../services/trajectories-services";

export const trajectories = async(req: Request, res: Response) => {
    try {
        const { taxiId, date } = req.query;

        // Convertir taxiId a número
        const parsedTaxiId = taxiId ? parseInt(taxiId as string, 10) : undefined;

        // Validar y convertir la fecha de DD-MM-YYYY a YYYY-MM-DD
        let formattedDate: string | undefined = undefined;
        if (date) {
            const [day, month, year] = (date as string).split("-");
            if (day && month && year) {
                formattedDate = `${year}-${month}-${day}`;
            } else {
                return res.status(400).json({ error: "Formato de fecha incorrecto, debe ser DD-MM-YYYY"});
            }
        }

        const trajectories = await showTrajectories({
            taxiId: parsedTaxiId,
            date: formattedDate,
        });

        return res.status(200).json(trajectories);
    } catch (error) {
        console.log("Error al listar los trajectories: ", error);
        return res.status(500).json({
            error: "Error interno del servidor",
        })
    }
}