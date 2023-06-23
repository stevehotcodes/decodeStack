"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const votesContollers_1 = require("../controllers/votesContollers");
const authorization_1 = require("../Middlewares/authorization");
const voteRoutes = (0, express_1.Router)();
voteRoutes.patch('/up/:answerID', authorization_1.accessRequired, votesContollers_1.upVote);
voteRoutes.patch('/down/:answerID', authorization_1.accessRequired, votesContollers_1.downVote);
exports.default = voteRoutes;
