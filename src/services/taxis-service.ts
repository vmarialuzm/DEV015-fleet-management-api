// import { prisma } from "../app"
import { Prisma } from "@prisma/client";
import { PrismaClient } from '@prisma/client'



export const showTaxis = async(where:Prisma.taxisWhereInput, skip:number, take:number) => {
    const prisma = new PrismaClient()
    const taxis = await prisma.taxis.findMany({
        where,
        skip,
        take
    });
    return taxis;
};