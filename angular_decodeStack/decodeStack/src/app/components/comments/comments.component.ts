import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { AnswersService } from 'src/app/services/answers.service';

export interface IComment {
  id:string
  commentDescription:string
  date:string
  userID:string
  answerID:string

}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule,NavigationComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})




export class CommentsComponent implements OnInit{
  commentForm!:FormGroup
  id!:string
  comments:IComment[]=[]

  constructor(private fb:FormBuilder, private route:ActivatedRoute,private commentSvc:CommentsService,private answerSvc:AnswersService){
    
  }

  ngOnInit(){
    this.commentForm=this.fb.group({
      commentDescription:['',[Validators.required,Validators.min(1)]]
    })
    this.id=this.route.snapshot.params['answerID']
    console.log(this.id)

 
    this.commentSvc.getComments(this.id).subscribe(

      res=>{
        this.comments=res
        console.log(res)
        this.commentForm.reset()
      },
      
      err=>{
        console.log(err)
        this.commentForm.reset()
      }

    )
   

    
  }


onComment(){
  this.commentSvc.postComment(this.id,this.commentForm.value).subscribe(
    res=>{
      console.log(res)
      this.commentForm.reset
    },
    err=>{
      console.log(err)
      this.commentForm.reset
    }
  )

}


}
