import { Request,Response } from "express";
import{v4 as uid} from 'uuid';
import DatabaseHelper from "../helpers/DatabaseHelper";
import { IRequest, IVotes,  } from "../interfaces/types";

const db= DatabaseHelper.getInstance();

export const upVote=async (req:IRequest,res:Response)=>{
    try {
        const{answerID}=req.params
        const userID=req.info?.id as string
        let voted='1'
        //fetch vote details
        const voteDetails:IVotes= await (await db.exec('getVoteByAnswerId',{answerID ,userID})).recordset[0]
        let voteID =voteDetails?.id
        //check if the vote exists
        if(voteDetails?.isUpvoted=='0'){
            // delete downvote before upvote
            await db.exec('removeVote',{id:voteID})
        }
        //check if the vote status is voted 
        if(voteDetails?.isUpvoted==voted){
            return res.status(409).json({message:"Already voted"})
        }
        await db.exec('upVote',{answerID,userID,id:uid()})
      
       return  res.status(201).json({message:"voted successfully"})
        
    } 
    catch (error:any) {
        res.status(500).json(error.message)
    }
}

export const downVote =async (req:IRequest,res:Response)=>{
    try{
        const {answerID}=req.params;
        const userID=req.info?.id as string
        let voted='0'
        //fetch vote Details
        const voteDetails:IVotes= await (await db.exec('getVoteByAnswerId',{answerID,userID})).recordset[0]
        let voteID =voteDetails?.id
        if(voteDetails?.isUpvoted=='0'){
            return res.status(409).json({message:"Can't vote"});
        }
        //check if the vote status is voted 
        if(voteDetails?.isUpvoted=='1'){
            //revert the upvote
            await db.exec('removeVote',{id:voteID})
        }
        await db.exec('downVote',{answerID,userID,id:uid()})
        return res.status(200).json({message:'the answer has been downvoted'})
        

        
    }
    catch(error:any){
        return res.status(500).json({message:error.message})

    }
}