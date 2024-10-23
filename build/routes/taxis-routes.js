"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_controller_1 = require("../controllers/taxis-controller");
const taxisRouter = (0, express_1.Router)();
taxisRouter.get('/list', taxis_controller_1.show);
exports.default = taxisRouter;
