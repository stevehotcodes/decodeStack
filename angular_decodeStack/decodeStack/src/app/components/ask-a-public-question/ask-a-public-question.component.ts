import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ask-a-public-question',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './ask-a-public-question.component.html',
  styleUrls: ['./ask-a-public-question.component.css']
})
export class AskAPublicQuestionComponent implements OnInit{
  questionForm!:FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.questionForm=this.fb.group({
      questionTitle:['',Validators.required],
      description:['',Validators.required],
      tag:['',Validators.required]
    })
  }
  get questionTitle(){
    return this.questionForm.controls['questionTitle']
  }
  
  get description(){
    return this.questionForm.controls['description']
  }

  get tag(){
    return this.questionForm.controls['tag']
  }


}
