import {Request, RequestHandler, Response} from "express"
import{v4 as uid} from 'uuid'
import bcrypt  from 'bcrypt'
import mssql from 'mssql'
import { sqlConfig } from "../config"
import DatabaseHelper from "../helpers/DatabaseHelper"
import { IQuestion, IRequest, IUser } from "../interfaces/types"
import { questionInputValidators } from "../helpers/Validators"
const db= DatabaseHelper.getInstance()


export const addQuestion =async (req:IRequest, res:Response)=>{
    try{ 
        console.log(req.body)
        const id= uid();
        // const tagId=uid()
        //user must be signed in
        const userID=req.info?.id as string
        const {questionTitle,questionDescription,questionTag}=req.body
        const{error}=questionInputValidators.validate(req.body)
        if(error){
            return res.status(400).json({error:error.details[0].message})
        }
        // await db.exec('addQuestion',{id,questionTitle,questionDescription,questionTag,userID,tagId});
        // await db.exec('addTag',{tagId,questionTag,tagTitle});
        const pool=await mssql.connect(sqlConfig);
        pool.request()
        .input('id',mssql.VarChar,id)
        .input('questionTitle',mssql.VarChar,questionTitle)
        .input('questionDescription',mssql.VarChar,questionDescription)
        .input('questionTag',mssql.VarChar,questionTag)
        .input('userID',mssql.VarChar,userID)
        // .input('tagID',mssql.VarChar,tagId)

        .execute('addQuestion')
    
        return res.status(200).json({message:"question added successfully"})
    }
    catch(error:any){
        return res.status(500).json(error.message)
    }
}

export const getAQuestion=async(req:IRequest, res:Response)=>{
    try{
        const{id}=req.params
        const question:IQuestion[]=(await db.exec('getAQuestionById',{id})).recordset[0];

        return res.status(200).json(question)
        

    }
    catch(error:any){
       return res.status(500).json(error.message)

    }
}

export const getAllQuestions =async(req:Request, res:Response)=>{
    try{
        
        const questions:IQuestion[]=(await db.exec('getAllQuestions')).recordset
       return res.status(200).json(questions);
    }

    catch(error:any){
        return res.status(500).json(error.message)
    
    }

}
export const deleteAQuestion=async(req:IRequest, res:Response)=>{
    try{

        const{questionID}=req.params;
        await db.exec('deleteQuestion',{id:questionID})
    
       return  res.status(201).json({message:'message deleted successfully'});

    }
    catch(error:any){
        return res.status(500).json(error.message)
    }
}

export const getAQuestionByUser=async(req:IRequest, res:Response)=>{
    try{
        const {userID}=req.params ///user must sign in or log in
        const question:IQuestion[]=(await db.exec('getAQuestionByUserId',{userID})).recordset
        console.log(question)
       return res.status(200).json(question)
    }
    catch(error:any){
       return  res.status(404).json(error.message)

    }
}