import { NextFunction,Request,Response } from "express";
import dotenv from'dotenv';
import path from "path";
dotenv.config({path:path.resolve(__dirname,'../../.env')})
import jwt from 'jsonwebtoken'
import { IDecodedData, IRequest } from "../interfaces/types";

function verifyToken(req:IRequest,res:Response,rights: false |'admin'=false){
    try{
        const token = req.headers['token'] as string
        // let message ='Unauthorized'
        if(!token)
        {
            return res.status(401).json({message:'Unauthorized'})
        }

        const decodedData=jwt.verify(token,process.env.SECRET_KEY as string) as IDecodedData
        req.info=decodedData
        if(rights && decodedData.role!==rights){
            return res.status(401).json({warning:"No you are not allowed do this operation"})
        }
        

    }
    catch(error:any){
        return res.status(403).json({message:error.message})

    }
}

export const accessRequired=(req:IRequest,res:Response,next:NextFunction)=>{
    const error =verifyToken(req,res);
    if(error){
        return error
    }
    next()
}

export const adminPrivileges=(req:IRequest,res:Response,next:NextFunction)=>{
    const error =verifyToken(req,res,'admin');
    if(error){
        return error
    }
    next ()
}