import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { IAnswer, IQuestion } from 'src/app/interfaces/types';
import { AnswersService } from 'src/app/services/answers.service';
import { IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

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
    // oneQuestion!:IQuestion

    constructor(private questionsSvc:QuestionsService, private answerSvc:AnswersService, private route:ActivatedRoute,private authSvc:AuthService){
       this.id as string
    }

    ngOnInit(){
        this.id=this.route.snapshot.params['questionID'];
        this.questionsSvc.getAllQuestions().subscribe(
            res=>{

            //   console.log('quest',res)

                const currentIndex=1
                this.questions=res
                this.id=res[currentIndex].id
                 console.log(this.questions)


            },
            (error)=>{
                
                console.log(error);
            }
        )
        // this.questionsSvc.getQuestion(id:string).subscribe
        this.answerSvc.getAnswers(this.id).subscribe(data=>{
            this.answers=data
            console.log('these answers',this.answers);
          },
          
          err=>{
            console.log(err)
          })

          //get one quest
        //   this.id=this.route.snapshot.params['questionID'];
        //   console.log(this.id);
          
        //   this.questionsSvc.getQuestion(this.id).subscribe(res=>{
        //     this.oneQuestion=res
        //     console.log(this.oneQuestion)
            
      
        //   },
        //   err=>{
        //     console.log(err)
        //   }
        //   )
        
        
    this.isAdmin=this.authSvc.checkAdmin()

    }
    questionDelete(id:string){
        this.questionsSvc.deleteQuestion(this.id).subscribe(
            res=>{
                console.log(res)
                
            },
            err=>{
                console.log(err)
            }
        )
    }


}
