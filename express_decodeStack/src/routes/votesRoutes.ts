import { Router } from "express";
import { upVote, downVote, getUpVotes } from "../controllers/votesContollers";
import { accessRequired } from "../Middlewares/authorization";


const voteRoutes=Router();

voteRoutes.patch('/up/:answerID',upVote);
voteRoutes.patch('/down/:answerID',downVote);
voteRoutes.get('/:answerID',getUpVotes);


export default  voteRoutes