import { Request } from "express"

export interface IUser{
    id:string
    firstName:string
    lastName:string
    username:string
    email:string
    password:string
    role:string
    isDeleted:number;
    dateJoined:string
    
}

export interface IQuestion{
    id:string
    questionTitle:string
    questionDescription:string
    questionTag:string
    isDeleted:number
    isAnswered:number
    
    
}

export interface IAnswer {
    id:string
    answerDescription:string
    isPrefered:number

}

export interface ICommment {
    id:string
    commentDescription:string
    dateID:string

}

export interface IVotes{
    id:string
    isUpvoted:string
    answerID:string
    userID:string

}

export interface IDecodedData{
    info: any
    id:string
    name:string
    email:string
    role:'user'|'admin'
    
}

export interface IRequest extends Request{
    info?:IDecodedData
}

export interface Itags{
    id:string
    tagTitle:string
    questionID:string
}

export type TfilterType = 'id' | 'email'
