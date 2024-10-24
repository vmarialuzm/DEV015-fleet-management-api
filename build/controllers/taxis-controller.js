"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const taxis_service_1 = require("../services/taxis-service");
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    const { plate, page = '1', limit = '10' } = req.query;
    const where = {};
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);
    const skip = (pageNumber - 1) * limitNumber;
    const take = limitNumber;
    if (plate) {
        where.plate = String(plate);
    }
    const taxis = yield (0, taxis_service_1.showTaxis)(where, skip, take);
    return res.status(200).json({
        message: "List Data Taxis",
        data: taxis,
    });
    // } catch (error) {
    //     console.log("*****************************************************")
    //     console.error("Error al listar los taxis: ", error);
    //     return res.status(500).json({
    //         message: "Error interno del servidor",
    //     })
    // }
});
exports.show = show;
