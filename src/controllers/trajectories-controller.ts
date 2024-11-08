import { Request, Response } from "express";
import { showTrajectories } from "../services/trajectories-services";

export const trajectories = async(req: Request, res: Response) => {
    try {
        const { taxiId, date } = req.query;

        if (!taxiId) {
            return res.status(400).json({ error: "El parámetro taxiId es obligatorio"});
        }

        // Convertir taxiId a número
        const parsedTaxiId = parseInt(taxiId as string, 10);

        if (!date) {
            return res.status(400).json({ error: "El parámetro date es obligatorio"});
        }

        // Validar y convertir la fecha de DD-MM-YYYY a YYYY-MM-DD
        const dateRegex = /^\d{2}-\d{2}-\d{4}$/;  // Expresión regular para validar DD-MM-YYYY
        if (!dateRegex.test(date as string)) {
            return res.status(400).json({ error: "Formato de fecha incorrecto, debe ser DD-MM-YYYY"});
        }

        // Convertir la fecha al formato YYYY-MM-DD para la consulta
        const [day, month, year] = (date as string).split("-");
        const formattedDate = `${year}-${month}-${day}`;

        const trajectories = await showTrajectories({
            taxiId: parsedTaxiId,
            date: formattedDate,
        });

        // Verificar si no se encontraron resultados
        if (trajectories.length === 0) {
            return res.status(404).json({ error: "No se encontraron datos para el taxiId y date especificados"})
        }

        return res.status(200).json(trajectories);
    } catch (error) {
        console.error("Error al listar los trajectories: ", error);
        return res.status(500).json({
            error: "Error interno del servidor",
        })
    }
}