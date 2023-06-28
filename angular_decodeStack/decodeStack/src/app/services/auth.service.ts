import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.production';
import { HttpClient } from '@angular/common/http';
import { signInUserData } from '../interfaces/types';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string
  constructor(private http:HttpClient, private router:Router) {
    this.baseUrl=`${environment.apiUrl}users/`
   }

   signin(loggedUser:signInUserData){
    localStorage.setItem('decodeStackUserEmail', loggedUser.email);
    localStorage.setItem('decodeStackUserToken', loggedUser.token)
    localStorage.setItem('decodeStackUserRole', loggedUser.role)

    this.router.navigate(['/questions'])
   }
   
  getUserSignIn(){
    const email=localStorage.getItem('decodeStackUserEmail');
    const token=localStorage.getItem('decodeStackUserToken');

    const signinedUser = email && token?{email,token} : null
    
    // return new Observable(observer=>{
    //   observer.next(signinedUser)
    // })
   return signinedUser
  
  }
  signOut(){
    localStorage.removeItem('decodeStackUserEmail')
    localStorage.removeItem('decodeStackUserToken')
    localStorage.removeItem('decodeStackUserRole')
    window.location.reload()
  }
   




     
  getUserSignInToken(){
    const email=localStorage.getItem('decodeStackUserEmail');
    const token=localStorage.getItem('decodeStackUserToken');
    
    const signinedUser =  token?true : false
    console.log(signinedUser)
    return signinedUser
    
  
  }

  checkAdmin(){
    let userRole=localStorage.getItem('decodeStackUserRole');
    console.log
      return userRole==='admin'? true : false
  
  }

}
