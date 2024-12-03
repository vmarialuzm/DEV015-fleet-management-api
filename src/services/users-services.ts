import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../app";


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

    // Guarda la contraseña encriptada
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            ...data,
            password: hashedPassword,
        }
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
};

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

// Autenticación con JWT

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRATION = '2h';

export const authenticateUser = async(email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email }});

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Contraseña incorrecta');
    }

    // genera el token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return { token, user: { id: user.id, name: user.name, email: user.email }};
};