import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.production';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotesService {
  baseUrl!:string
  token?:string | null |undefined


  constructor(private http:HttpClient ,private authSvc:AuthService) {
    this.baseUrl=`${environment.apiUrl}votes`
    this.token=this.authSvc.getUserSignIn()?.token
   }

   upVote(id:string):Observable<any>{
    const headers =new HttpHeaders().set('token',this.token as string)
    
    return this.http.patch<any>(this.baseUrl+`/up/${id}`,{headers:headers})
   }

   downVote(id:string):Observable<any>{
    const headers =new HttpHeaders().set('token',this.token as string)
    console.log('this is token:',headers)
    return this.http.patch<any>(this.baseUrl+`/down/${id}`,{headers:headers})
   }
   
   getUpVotes(id:string):Observable<any>{
    const headers =new HttpHeaders().set('token',this.token as string)
    console.log('this is token:',headers)
    return this.http.get<any>(this.baseUrl+`/${id}`,{headers:headers})
   }
 


}
