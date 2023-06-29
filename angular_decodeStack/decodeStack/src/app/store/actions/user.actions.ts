import { createAction, props } from "@ngrx/store";
import { IuserSigninCredential, newUserData } from "src/app/interfaces/types";



export const logInUser=createAction('[signin] user login',props<{user:IuserSigninCredential}>())

export const logInUserSuccess= createAction('[signin] user login',props<{message:string}>())

export const logInUserFailure=createAction('[signin] user login',props<{error:string}>())


export const registerUser=createAction('[signup] user register',props<{user:newUserData}>())

export const registerUserSuccess= createAction('[signup] user register',props<{message:string}>())

export const registerUserFailure=createAction('[signup] user register',props<{error:string}>())