import dotenv from 'dotenv';
dotenv.config();

import express, { Application, Request, Response } from 'express';
import rootRouter from './routes/index';
import { PrismaClient } from '@prisma/client'

const app: Application = express();
const PORT: number = 5000;

app.use(express.json());
app.use(rootRouter);

export const prisma = new PrismaClient()

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});