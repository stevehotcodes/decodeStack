import express, { json,Request, Response } from "express";
import cors from 'cors'
import userRoutes from './routes/stackOverflowUsersRouter'
import questionRoutes from "./routes/questionsRoutes";
import answerRoutes from "./routes/answerRoutes";
import commentRoutes from "./routes/commentsRoutes";
import voteRoutes from "./routes/votesRoutes";




const app =express();

app.use(cors());
app.use(json());

app.get('/', (req:Request,res:Response)=>{
    return res.status(200).send("hollaholla")
})
app.use('/users',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answers',answerRoutes)
app.use('/comments',commentRoutes)
app.use('/votes',voteRoutes)



export default app


