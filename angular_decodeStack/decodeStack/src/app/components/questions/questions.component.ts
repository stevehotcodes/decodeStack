import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { IAnswer, IQuestion } from 'src/app/interfaces/types';
import { AnswersService } from 'src/app/services/answers.service';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { PopupService } from 'src/app/services/popup.service';

@Component({
    selector: 'app-questions',
    standalone: true,
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
    imports: [CommonModule, QuestionsComponent, NavigationComponent,RouterModule,IonicModule]
})
export class QuestionsComponent implements OnInit {
    questions!:IQuestion[] 
    answers:IAnswer[]=[]
    id!:string 
    isAdmin!:boolean
    

    constructor(public questionsSvc:QuestionsService, private answerSvc:AnswersService, private route:ActivatedRoute,private authSvc:AuthService,private popUpSvc:PopupService, public viewRef:ViewContainerRef){
       this.id as string
       
    }

    ngOnInit(){
        this.id=this.route.snapshot.params['questionID'];
        this.fetchQuestions()
        this.answerSvc.getAnswers(this.id).subscribe(data=>{
            this.answers=data
            console.log('these answers',this.answers);
          },
          
          err=>{
            console.log(err)
          })
     
        
    this.isAdmin=this.authSvc.checkAdmin()

    }

    fetchQuestions(){
        this.questionsSvc.getAllQuestions().subscribe(
            res=>{
                const currentIndex=0
                this.questions=res
                this.id=res[currentIndex].id
                
           
                console.log(this.questions)
      
            },
            (error)=>{
                
                console.log(error);
            }
        )
    }

    questionDelete(){
        
            this.questionsSvc.deleteQuestion(this.id).subscribe(
                res=>{
                    console.log(res)
                    
                },
                err=>{
                    console.log(err)
                }
            )
            window.location.reload()
        
        
    }

   

}
