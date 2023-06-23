import {Request, RequestHandler, Response} from "express"
import{v4 as uid} from 'uuid'
import bcrypt  from 'bcrypt'
import mssql from 'mssql'
import { sqlConfig } from "../config"
import DatabaseHelper from "../helpers/DatabaseHelper"
import { IRequest, IUser } from "../interfaces/types"
import { registrationSchema } from "../helpers/Validators";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.resolve(__dirname,'../../.env')})


const db=DatabaseHelper.getInstance()
function filterUserInfo(users:IUser[]):void{
    users.forEach((users:Partial<IUser>)=>{
        delete users.password
        delete users.isDeleted
    })
    
}



export const addUser =async (req:Request,res:Response)=>{
    
    try{
        const db=DatabaseHelper.getInstance()
        let id=uid()
        let {firstName,lastName,userName,email,password,github}=req.body;
        //validate first
        const{error}=registrationSchema.validate(req.body);
        if(error){
            return res.status(400).json({error:error.details[0].message})
        }
        const hashedPassword= await bcrypt.hash(password,10);
        // console.log(hashedPassword)

        const pool=await mssql.connect(sqlConfig);
        await pool.request()
        .input('id',mssql.VarChar,id)
        .input('firstName',mssql.VarChar,firstName)
        .input('lastName',mssql.VarChar,lastName)
        .input('userName',mssql.VarChar,userName)
        .input('email',mssql.VarChar,email)
        .input('password',mssql.VarChar,hashedPassword) 
        .input('github',mssql.VarChar,github)              
        .execute('addUser')
      // await db.exec('addStackOverflowUser',{id,firstName,lastName,userName,email,hashedPassword})

        await db.query(`UPDATE stackOverflowUsers SET isActive=1 WHERE id=${id}`)
        return res.status(201).json({message:`user${firstName} has been created successfully`})

    }
    
     catch(error:any) {
        return res.status(500).json(error.message)
     }
}


export const getAllUsers= async (req:Request,res:Response)=>{
    const db =DatabaseHelper.getInstance()
    try{
        
        let users:IUser[]=(await db.exec('getAllStackOverflowUsers')).recordset
        filterUserInfo(users)
         return res.status(200).json(users)

    }
    catch(error:any){
        return res.status(500).json(error.message)

    }
}
export const deleteUser =async (req:IRequest , res:Response)=>{
    try{
        
        const id=req.params.id
        const {recordset}= await db.exec('getStackOverUserBy',{id})
        filterUserInfo(recordset)
        if(!recordset[0]){
            res.status(404).json({message:"user does not exist"})
        }
        else{
           
            await db.exec('deleteStackOverflowUser',{id});
            res.status(200).json({message:"user deleted"})
        }
    }
    catch(error:any){
        res.json(error.message)

    }
    
}

export const updateUser =async (req:IRequest , res:Response)=>{
    try{
        const id = req.info?.id as string
        const {userName,email}=req.body
        
        const result:IUser= (await db.exec('getStackOverUserBy',{id})).recordset[0]
        
        
        if(!result){
           return res.status(404).json({message:"user not found"})
        }
        else{
                await db.exec('updateStackOverflowUser',{id,userName,email});
                return res.status(200).json({message:"user updated successfully"})      
        }
    }
    catch(error:any){
       return  res.json(error.message)

    }
    
}

export const getOneUser =async (req:Request,res:Response)=>{
    try{
        const{id}=req.params
        const user=(await db.exec('getStackOverUserById',{id})).recordset[0]
        if(!user){
            return res.status(404).json({message:'user does not exist'})
        }
        return res.status(200).json(user)
    }
    catch(error:any){
        return res.status(404).json({message:error.message})

    }
}
export const getSignedInUser =async (req:IRequest,res:Response)=>{
    try{
        const id=req.info?.id as string
        const user=(await db.exec('getStackOverUserById',{id})).recordset[0]
        if(!user){
            return res.status(404).json({message:'user does not exist'})
        }
        return res.status(200).json(user)
    }
    catch(error:any){
        return res.status(404).json({message:error.message})

    }
}


export const signIn= async(req:Request, res:Response)=>{
    try{
        const{email,password}=req.body
        const user:IUser =(await db.exec('getUserBy',{filter_type:'email',filter_value:email})).recordset[0];
        if(!user){return res.status(404).json({message:'user not found'})}
        
        const validPassword= await bcrypt.compare(password,user.password)
        if(!validPassword){return res.status(404).json({message:`invalid credentials for <${email}>`})};
        
        //generate token 
        const name =user.firstName +' '+ user.lastName;
        const payload ={id:user.id, role:user.role, name, email:user.email}
        const token =jwt.sign(payload,process.env.SECRET_KEY as string, {expiresIn:'63600s'});
        // await db.query('UPDATE stackOverflowUsers SET isActive=1')
        return res.status(200).json({message:'Signin successful',email,token})

    }   
    catch(error:any){
        return res.status(500).json({error:error.message})
    }
}

