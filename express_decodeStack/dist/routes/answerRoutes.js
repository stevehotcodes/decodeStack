"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const answersControllers_1 = require("../controllers/answersControllers");
const authorization_1 = require("../Middlewares/authorization");
const answerRoutes = (0, express_1.Router)();
answerRoutes.post('/:questionID', authorization_1.accessRequired, answersControllers_1.addAnswer);
answerRoutes.get('/:questionID', authorization_1.accessRequired, answersControllers_1.getAnswer);
exports.default = answerRoutes;
