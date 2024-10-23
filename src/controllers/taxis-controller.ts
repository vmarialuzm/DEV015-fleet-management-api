import { Request, Response } from "express";
import { showTaxis } from "../services/taxis-service";

export const show = async(req: Request, res: Response) => {
    const taxis = await showTaxis();
    
    return res.status(200).json({
        message: "List Data Taxis",
        data: taxis,
    });
};