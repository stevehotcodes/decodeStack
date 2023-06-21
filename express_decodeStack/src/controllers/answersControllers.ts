import { Request,Response } from "express";
import DatabaseHelper from "../helpers/DatabaseHelper";
import {v4 as uid} from 'uuid';
import { IAnswer, IRequest } from "../interfaces/types";




const db=DatabaseHelper.getInstance()


export const addAnswer = async(req:IRequest,res:Response)=>{
    try {
        const id=uid();
        const voteID=uid()
    
        let userID=req.info?.id as string
        const {questionID}=req.params
        const{answerDescription}=req.body
        await db.exec('addAnswer',{id,userID,answerDescription,questionID,voteID});
        return res.status(201).json({message:'answer added to the database'});
    } 
    catch (error:any) {
        res.status(500).json(error.message)
    }

}

export const getAnswer =async (req:Request,res:Response)=>{
    try{
        const{questionID}=req.params
        const answer:IAnswer[]=(await db.exec('getAllAnswers',{questionID})).recordset;
        res.status(200).json(answer)
    }
    catch(error:any){
        res.status(500).json(error.message)
    }
}


