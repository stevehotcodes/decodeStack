// import DatabaseHelper from "../helpers/DatabaseHelper";
// import {v4 as uid} from 'uuid';
// import { IQuestion, Itags } from "../interfaces/types";
// import { Request, Response } from "express";

// //create the database instance
// const db=DatabaseHelper.getInstance()

// function filterQuestionInfo(questions:IQuestion[]):void{
//     questions.forEach((questions:Partial<IQuestion>)=>{
//         delete questions.isDeleted
//         delete questions.isAnswered
//     })
// }

// export const getTags= async (req:Request,res:Response)=>{
//     try{
//         const tagName=req.params
//         //fetch get all the questions
//         const questions:IQuestion[]=(await db.exec('getAllQuestions')).recordset
//         //remove deleted questions
//         filterQuestionInfo(questions)
//         req.params=question

        


//     }
//     catch(error:any){

//     }
// }