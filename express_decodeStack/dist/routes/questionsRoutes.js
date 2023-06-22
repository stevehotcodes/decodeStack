"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionsControllers_1 = require("../controllers/questionsControllers");
const authorization_1 = require("../Middlewares/authorization");
const questionRoutes = (0, express_1.Router)();
questionRoutes.post('/askquestion', authorization_1.accessRequired, questionsControllers_1.addQuestion);
questionRoutes.get('/one/:id', authorization_1.accessRequired, questionsControllers_1.getAQuestion);
questionRoutes.get('/all', authorization_1.accessRequired, questionsControllers_1.getAllQuestions);
questionRoutes.get('/user', authorization_1.accessRequired, questionsControllers_1.getAQuestionByUser);
questionRoutes.patch('/delete/:id', authorization_1.adminPrivileges, questionsControllers_1.deleteAQuestion);
exports.default = questionRoutes;
