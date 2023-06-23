import { Router } from "express";
import { addAnswer, getAnswer } from "../controllers/answersControllers";
import { accessRequired } from "../Middlewares/authorization";


const answerRoutes=Router();

answerRoutes.post('/:questionID',accessRequired,addAnswer)
answerRoutes.get('/:questionID',accessRequired,getAnswer)

export default answerRoutes