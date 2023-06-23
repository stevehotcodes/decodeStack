import { Router } from "express";
import { upVote, downVote } from "../controllers/votesContollers";
import { accessRequired } from "../Middlewares/authorization";


const voteRoutes=Router();

voteRoutes.patch('/up/:answerID',accessRequired,upVote);
voteRoutes.patch('/down/:answerID',accessRequired,downVote);


export default  voteRoutes