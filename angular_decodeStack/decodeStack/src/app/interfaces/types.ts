export interface IflashMessage {
    type: 'error' | 'success' | 'info'
    message:string                      //flash / error handling
}
export interface fetchedUser{
    id:string
    firstName:string
    lastName:string
    username:string
    email:string
    dateJoined:string
    isActive:number
    github:string
    role:string

}


export interface newUserData{
    firstName:string                //used only for signup
    lastName:string
    username:string
    email:string
    github:string
    password:string
    confirmPassword:string
  }

export interface signInUserData{
    email:string                        //for sign in purposes
    token:string
    role: string
}

export interface IuserSigninCredential{
    email:string
    password:string                            //required on sign in
}

export interface IQuestion{

    id:string
    questionTitle:string
    questionDescription:string
    questionTag:string
    isDeleted:number
    isAnswered:number
    dateAsked:string
   
        
}

export interface IAnswer {
    id:string
    answerDescription:string
    isPrefered:number
    userID:string
    voteCount:number

}

export class QuestionBody{
    questionTitle!: string
    questionDescription!: string
    questionTag!: string
}

export class AnswerBody{
    answerDescription!:string
}

export class CommentBody{
    commentDescription!:string
}