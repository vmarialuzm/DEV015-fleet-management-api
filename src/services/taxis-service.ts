import { prisma } from "../app"

export const showTaxis = async() => {
    const taxis = await prisma.taxis.findMany();
    return taxis;
};