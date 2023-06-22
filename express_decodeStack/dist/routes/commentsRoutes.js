"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsControllers_1 = require("../controllers/commentsControllers");
const authorization_1 = require("../Middlewares/authorization");
const commentRoutes = (0, express_1.Router)();
commentRoutes.post('/:answerID', authorization_1.accessRequired, commentsControllers_1.addComment);
commentRoutes.get('/:answerID', authorization_1.accessRequired, commentsControllers_1.getAllComments);
exports.default = commentRoutes;
