import { prisma } from "../app"

export const showTrajectories = async() => {
    const trajectories = await prisma.trajectories.findMany({
        include: {
            taxi: true
        }
    });
    return trajectories;
};