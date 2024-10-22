"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_1 = require("../controllers/taxis");
const taxisRouter = (0, express_1.Router)();
taxisRouter.get('/list', taxis_1.taxis);
exports.default = taxisRouter;
