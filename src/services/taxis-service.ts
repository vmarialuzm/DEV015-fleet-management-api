import { prisma } from "../app"

export const showTaxis = async(where:any, skip:number, take:number) => {
    const taxis = await prisma.taxis.findMany({
        where,
        skip,
        take
    });
    return taxis;
};