import { prisma } from "../app"

export const showTrajectoriesLatest = async() => {
    const latestDates = await prisma.trajectories.groupBy({
        by: ['taxiId'],
        _max: {
            date: true
        },
    });

    const taxiLatest = latestDates.map(item => ({
        taxiId: item.taxiId,
        date: item._max.date
    }))
    //console.log(taxiLatest)

    const trajectoriesLatest = await prisma.trajectories.findMany({
        where: {
            OR: taxiLatest,
        },
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

    let arraySinDuplicados: any[] = []

    // console.log(trajectoriesLatest)
    trajectoriesLatest.forEach(trayectory => {
        const existe = arraySinDuplicados.some(item => item.taxiId === trayectory.taxiId);
        if (!existe) {
            arraySinDuplicados.push(trayectory);
        }
    });
    
    //console.log(arraySinDuplicados);

    return arraySinDuplicados.map((trajectory) => ({
        id: trajectory.id,
        plate: trajectory.taxi?.plate || null,
        taxiId: trajectory.taxiId,
        timestamp: trajectory.date,
        latitude: trajectory.latitude,
        longitude: trajectory.longitude,
    }));
};