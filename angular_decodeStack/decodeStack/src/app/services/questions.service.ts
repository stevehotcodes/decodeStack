import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.production';
import { Observable } from 'rxjs';
import { IQuestion, IuserSigninCredential, QuestionBody } from '../interfaces/types';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})



export class QuestionsService {
private baseUrl:string
private token:string | null | undefined

  constructor(private http:HttpClient,private authSvc:AuthService) {
    this.baseUrl=`${environment.apiUrl}questions/`
   
   //get the token
    this.token=this.authSvc.getUserSignIn()?.token
    
   
    
  }
  
getAllQuestions():Observable<any>{
  const headers = new HttpHeaders().set('token', this.token as string)
   return this.http.get<IQuestion[]>(`http://localhost:4000/questions/all`,{headers:headers})
} 
getQuestion(id:string):Observable<IQuestion>{
  const headers= new HttpHeaders().set('token',this.token as string)
  return this.http.get<IQuestion>(`http://localhost:4000/questions/one/` + id,{headers:headers});
}

askQuestion(newQuestion:QuestionBody):Observable<any>{
  const headers =new HttpHeaders().set ('token',this.token as string)

  console.log( newQuestion)
  return this.http.post<IQuestion>('http://localhost:4000/questions/askquestion',newQuestion,{headers:headers})

}
getQuestionByUser(id:string):Observable<any>{
  const headers=new HttpHeaders().set('token', this.token as string);
  return this.http.get<any[]>('http://localhost:4000/questions/user/'+ id,{headers:headers} )

}
deleteQuestion(id:string):Observable<any>{
  const headers=new HttpHeaders().set('token',this.token as string)
  console.log(headers)
  return this.http.delete<any>('http://localhost:4000/questions/delete/'+ id,{headers})
}


}
