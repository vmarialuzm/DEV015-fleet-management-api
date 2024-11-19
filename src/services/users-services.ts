import { prisma } from "../app"

interface showUsersParams {
    page: number;
    limit: number;
}

export const showUsers = async({page, limit}: showUsersParams) => {

    const skip = (page - 1) * limit;
    const take = limit;

    const users = await prisma.user.findMany({
        skip,
        take
    });
    return users;
}

export const crearUser = async(data: any) => {
    const user = await prisma.user.create({
        data
    });
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

export const actualizarUser = async(id: number, data: any) => {

    const user = await prisma.user.update({
        where: {
            id: id,
        },
        data
    });
    return user
}

export const eliminarUser = async(id: number) => {

    const user = await prisma.user.delete({
        where: {
            id: id,
        }
    });
    return user
}