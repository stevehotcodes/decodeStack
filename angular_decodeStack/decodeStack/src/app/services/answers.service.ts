import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.production';
import { Observable } from 'rxjs';
import { AnswerBody ,IAnswer} from '../interfaces/types';



@Injectable({
  providedIn: 'root'
})
export class AnswersService {

   token:string | null | undefined
   baseUrl!:string
  
  constructor(private authSvc:AuthService,private http:HttpClient) { 
    this.baseUrl=`${environment.apiUrl}answers`
    this.token=authSvc.getUserSignIn()?.token as string

    // this.authSvc.getUserSignIn().subscribe(
    //   res=>{
    //      this.token=res.token //checking whether the token exist
    //   },
    //   err=>{
    //     console.log('no token assigned to the user',err)
    //   }
    // )
    
  
}
postAnswer(id:string,newAnswer:AnswerBody):Observable<any>{
  const headers= new HttpHeaders().set('token', this.token as string)
  return this.http.post<IAnswer>(`http://localhost:4000/answers/` + id,newAnswer,{headers})
}
getAnswers(id:string):Observable<any>{
  const headers= new HttpHeaders().set('token', this.token as string)
  return this.http.get<any>(`http://localhost:4000/answers/`+ id, {headers})
}


}
