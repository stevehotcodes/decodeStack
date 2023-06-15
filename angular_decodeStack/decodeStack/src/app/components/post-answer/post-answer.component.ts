import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormGroup, FormsModule ,ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-post-answer',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './post-answer.component.html',
  styleUrls: ['./post-answer.component.css']
})
export class PostAnswerComponent implements OnInit {
  answerForm!:FormGroup

  constructor(private fb:FormBuilder) {}

  ngOnInit(){
      this.answerForm=this.fb.group({
        description:['',[Validators.required,Validators.minLength(6)]]
      })
  }


  onAnswer(){
    console.log(this.answerForm.value)
  }
}
