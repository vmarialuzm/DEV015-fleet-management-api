import { Request, Response } from "express";
import { showTaxis } from "../services/taxis-service";

export const show = async(req: Request, res: Response) => {
    try {
        const { plate, page = '1', limit = '10'} = req.query;
    
        const taxis = await showTaxis({
            plate: plate as string,
            page: parseInt(page as string, 10),
            limit: parseInt(limit as string, 10),
        });
        
        return res.status(200).json(taxis);
    } catch (error) {
        console.error("Error al listar los taxis: ", error);
        return res.status(500).json({
            error: "Error interno del servidor",
        });
    }

};