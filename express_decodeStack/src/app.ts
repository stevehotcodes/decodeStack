import express, { json,Request, Response } from "express";
import cors from 'cors'




const app =express();

app.use(cors());
app.use(json());

app.get('/', (req:Request,res:Response)=>{
    return res.status(200).send("hollaholla")
})

export default app


