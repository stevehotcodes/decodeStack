import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormGroup, FormsModule ,ReactiveFormsModule, Validators} from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';
import {AnswersService} from 'src/app/services/answers.service'
import { IQuestion } from 'src/app/interfaces/types';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-answer',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './post-answer.component.html',
  styleUrls: ['./post-answer.component.css']
})
export class PostAnswerComponent implements OnInit {
  answerForm!:FormGroup
  // question!:IQuestion
  id!:string

  constructor(private fb:FormBuilder, private questionSvc:QuestionsService, private answerSvc:AnswersService,private route:ActivatedRoute, private router:Router) {}

  ngOnInit(){
    // this.id=this.route.snapshot.params['questionID'];
      this.answerForm=this.fb.group({
        answerDescription:['',[Validators.required,Validators.minLength(6)]]
      })
      // this.answerSvc.postAnswer()
      this.id=this.route.snapshot.params['questionID'];
      console.log(this.id);
      
      // this.questionSvc.getQuestion(this.id).subscribe(data=>{
      //   this.question=data
      // })

     

  
  
      
  }


  onAnswer(){
    console.log(this.answerForm.value)
    this.answerSvc.postAnswer(this.id,this.answerForm.value).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/display-answer',this.id])
        this.answerForm.reset()
        window.location.reload()
      },
      err=>{
        console.log(err)
        this.answerForm.reset()
        // this.router.navigate(['./display-answer/:questionID'])
      }

    
    )
  }
}
