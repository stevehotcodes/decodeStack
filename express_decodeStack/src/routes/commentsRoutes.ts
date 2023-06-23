import { Router } from "express";
import { addComment, getAllComments } from "../controllers/commentsControllers";
import { accessRequired } from "../Middlewares/authorization";

const commentRoutes=Router();

commentRoutes.post('/:answerID',accessRequired,addComment)
commentRoutes.get('/all/:answerID',accessRequired,getAllComments)


export default commentRoutes