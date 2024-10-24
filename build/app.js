"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use('/api', index_1.default);
exports.prisma = new client_1.PrismaClient();
app.listen(PORT, () => {
    console.log('SERVER IS UP ON PORT:', PORT);
});
