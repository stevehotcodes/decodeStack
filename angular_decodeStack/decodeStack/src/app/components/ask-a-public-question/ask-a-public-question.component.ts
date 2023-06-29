import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';
import { Route, Router, RouterModule } from '@angular/router';
import { FlashyMessagesService } from 'src/app/services/flashy-messages.service';

@Component({
  selector: 'app-ask-a-public-question',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FormsModule,RouterModule,ReactiveFormsModule],
  templateUrl: './ask-a-public-question.component.html',
  styleUrls: ['./ask-a-public-question.component.css']
})
export class AskAPublicQuestionComponent implements OnInit{
  questionForm!:FormGroup

  constructor(private fb:FormBuilder, private questionSvc:QuestionsService ,private router:Router ,private flashMsg:FlashyMessagesService){}

  ngOnInit(): void {
    this.questionForm=this.fb.group({
      questionTitle:['',Validators.required],
      questionDescription:['',Validators.required],
      questionTag:['',Validators.required]
    })
  }
  
  onSubmit(){
    if(this.questionForm.valid){
   
      let newQuestion=this.questionForm.value;
      
      this.questionSvc.askQuestion(newQuestion).subscribe(
        res=>{

          res=newQuestion
          console.log(res)
          this.router.navigate(['./questions'])
        }
        
      )
    
      
      
    }
    
  }



  get questionTitle(){
    return this.questionForm.controls['questionTitle']
  }
  
  get questionDescription(){
    return this.questionForm.controls['questionDescription']
  }

  get  questionTag(){
    return this.questionForm.controls['questionTag']
  }
  

  


}
