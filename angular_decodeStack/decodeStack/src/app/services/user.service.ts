

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment.production';
import { Observable } from 'rxjs';
import { FlashyMessagesService } from './flashy-messages.service';
import { Router } from '@angular/router';
import { IuserSigninCredential, newUserData, signInUserData } from '../interfaces/types';
import { AuthService } from './auth.service';
import { IUser } from '../components/user-profile/user-profile.component';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  private baseUrl:string
  token:string | null |undefined

  constructor(private http:HttpClient , private flashMessagingService:FlashyMessagesService, private router:Router,private authService:AuthService) {
    this.baseUrl=`${environment.apiUrl}users`
    this.token =this.authService.getUserSignIn()?.token
   }

   signUp(newClientData:newUserData){
    this.http.post(this.baseUrl + '/signup',newClientData).subscribe((res:any)=>{
      this.flashMessagingService.exposeMessage({
        type:'success',
        message:res.message
      })
      // this.router.navigate(['/signin'])
    },
    (error:any)=>{
      switch(error.status){
        case 400:
            this.flashMessagingService.exposeMessage({
              type:'error',
              message:'client error: '+ error.error.message
          })
        break
          default:
            this.flashMessagingService.exposeMessage({
              type:'error',
              message:'Server error:'+error.error.message
            })
          }
    }
    )
  }

  signIn(signedInUser:IuserSigninCredential){
    this.http.post(this.baseUrl + '/signin',signedInUser).subscribe(
      (res:any)=>{
        this.authService.signin({email:res.email,token:res.token,role:res.role})
        this.flashMessagingService.exposeMessage({
          type:'success',
          message:res.message
        })

    },
    
    (error:any)=>{
      this.flashMessagingService.exposeMessage({
        type:'error',
        message: error.error.message
      })
    }


    )

  }
  getSignedInUser(){
    
  }

  getAllUsers():Observable<any>{
    const headers = new HttpHeaders().set('token',this.token as string)
    return this.http.get<any[]>(`http://localhost:4000/users/all`,{headers});
  }
  getAUser(id:string):Observable<any>{
    const headers =new HttpHeaders().set('token',this.token as string)
    return this.http.get<IUser>('http://localhost:4000/users/one/'+ id ,{headers})
  }

  signOut(){
    this.authService.signOut
  }
  deleteUser(id:string):Observable<any>{
    const headers=new HttpHeaders().set('token',this.token as string);
    return this.http.delete<any>('http://localhost:4000/users/delete/' + id, {headers:headers})
    // return this .http.delete<any>

  }

 }