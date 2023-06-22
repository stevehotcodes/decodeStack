import { Router } from "express";
import { addVote, downVote } from "../controllers/votesContollers";
import { accessRequired } from "../Middlewares/authorization";


const voteRoutes=Router();

voteRoutes.patch('/up/:answerID',accessRequired,addVote)
voteRoutes.patch('/down/:answerID',accessRequired,downVote)


export default  voteRoutes