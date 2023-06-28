import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { IComment } from '../components/comments/comments.component';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  token!:string |null |undefined
  


  constructor(private http:HttpClient,private authSvc:AuthService) {
  
    this.token=this.authSvc.getUserSignIn()?.token as string
    
   }
  postComment(id:string,newComment:any):Observable<any>{
    const headers= new HttpHeaders().set('token', this.token as string)
    return this.http.post<any>(`http://localhost:4000/comments/`+ id,newComment,{headers})
  }
  getComments(id:string):Observable<any>{
    const headers=new HttpHeaders().set('token',this.token as string)
    return this.http.get<IComment[]>(`http://localhost:4000/comments/`+id,{headers})
  }

}
