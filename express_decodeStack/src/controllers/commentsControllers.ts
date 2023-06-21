import { Request,Response } from "express";
import {v4 as uid} from'uuid';
import DatabaseHelper from "../helpers/DatabaseHelper";
import { IAnswer, ICommment, IRequest } from "../interfaces/types";


const db=DatabaseHelper.getInstance();


export const addComment=async (req:IRequest,res:Response)=>{
    try {
        const id =uid();
        const userID=req.info?.id as string      
        const {answerID}=req.params 
        const{commentDescription}=req.body
        await db.exec('addComment',{id,userID,answerID,commentDescription});
        return res.status(201).json({message:'comment successfully added'})
        
    } catch (error:any) {
        res.status(500).json(error.message)
        
    }
}

export const getAllComments= async (req:Request,res:Response)=>{
    try {
        
        const{answerID}=req.params
        const comments:ICommment[]=(await db.exec('getAllComments',{answerID})).recordset
        return res.status(200).json({comments})
    } 
    catch (error:any) {
        return res.status(500).json(error.message)
    }

}