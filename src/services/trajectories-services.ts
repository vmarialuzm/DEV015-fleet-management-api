import { prisma } from "../app"

interface showTrajectoriesParams {
    taxiId?: number;
    date?: string
}

export const showTrajectories = async({taxiId, date}: showTrajectoriesParams) => {
    const where: any = {};

    // Agrega condiciones al objeto where si existen los filtros

    if (taxiId) {
        where.taxiId = taxiId;
    }

    if (date) {
        const startDate = new Date(date);
        const endDate = new Date(date);

        endDate.setDate(endDate.getDate() + 1);

        where.date = {
            gte : startDate,
            lt : endDate,
        }
    }

    
    const trajectories = await prisma.trajectories.findMany({
        where,
        select: {
            id: true,
            date: true,
            latitude: true,
            longitude: true,
            taxiId: true,
            taxi: {
                select: {
                    plate: true,
                },
            },
        },
    });
    return trajectories.map((trajectory) => ({
        id: trajectory.id,
        plate: trajectory.taxi?.plate || null,
        taxiId: trajectory.taxiId,
        date: trajectory.date,
        latitude: trajectory.latitude,
        longitude: trajectory.longitude,
    }));
};