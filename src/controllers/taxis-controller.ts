import { Request, Response } from "express";
import { showTaxis } from "../services/taxis-service";
import { Prisma } from "@prisma/client";

export const show = async(req: Request, res: Response) => {
    try {
        const { plate, page = '1', limit = '10'} = req.query;
        const where: Prisma.taxisWhereInput = {};
        const pageNumber = parseInt(page as string, 10);
        const limitNumber = parseInt(limit as string, 10);

        const skip = (pageNumber - 1) * limitNumber
        const take = limitNumber
    
        if (plate) {
            where.plate = String(plate);
        }
    
        const taxis = await showTaxis(
            where,
            skip,
            take
        );
        
        return res.status(200).json({
            message: "List Data Taxis",
            data: taxis,
        });
    } catch (error) {
        console.error("Error al listar los taxis: ", error);
        return res.status(500).json({
            message: "Error interno del servidor",
        })
    }

};