import { Router } from "express";
import { addQuestion, deleteAQuestion, getAQuestion, getAQuestionByUser, getAllQuestions } from "../controllers/questionsControllers";
import { accessRequired, adminPrivileges } from "../Middlewares/authorization";


const questionRoutes= Router()

questionRoutes.post('/askquestion',accessRequired,addQuestion)
questionRoutes.get('/one/:id',accessRequired,getAQuestion)
questionRoutes.get('/all',accessRequired,getAllQuestions)
questionRoutes.get('/user',accessRequired,getAQuestionByUser)
questionRoutes.patch('/delete/:id',adminPrivileges,deleteAQuestion)

export default questionRoutes