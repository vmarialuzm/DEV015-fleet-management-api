import { prisma } from "../app"

interface showTaxisParams {
    plate?: string;
    page: number;
    limit: number;
}

export const showTaxis = async({plate, page, limit}: showTaxisParams) => {
    const where: any = {};

    if (plate) {
        where.plate = {
            contains: plate,
            mode: 'insensitive',
        };
    }

    const skip = (page - 1) * limit;
    const take = limit;

    const taxis = await prisma.taxis.findMany({
        where,
        skip,
        take
    });
    return taxis;
};