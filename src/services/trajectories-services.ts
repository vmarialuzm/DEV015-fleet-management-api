import { prisma } from "../app"

export const showTrajectories = async() => {
    const trajectories = await prisma.trajectories.findMany();
    return trajectories;
};