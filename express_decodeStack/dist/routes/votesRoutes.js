"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const votesContollers_1 = require("../controllers/votesContollers");
const voteRoutes = (0, express_1.Router)();
voteRoutes.patch('/up/:answerID', votesContollers_1.upVote);
voteRoutes.patch('/down/:answerID', votesContollers_1.downVote);
voteRoutes.get('/:answerID', votesContollers_1.getUpVotes);
exports.default = voteRoutes;
