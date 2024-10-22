import { Request, Response } from "express";
import { prisma } from "../app";

export const taxis = async(req: Request, res: Response) => {
    const taxis = await prisma.taxis.findMany()
    res.send(taxis)
}