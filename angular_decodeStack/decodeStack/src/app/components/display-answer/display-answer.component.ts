import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostAnswerComponent } from '../post-answer/post-answer.component';
import { IAnswer, IQuestion } from 'src/app/interfaces/types';
import { QuestionsService } from 'src/app/services/questions.service';
import { AnswersService } from 'src/app/services/answers.service';
import { VotesService } from 'src/app/services/votes.service';
@Component({
  selector: 'app-display-answer',
  standalone: true,
  imports: [CommonModule,NavigationComponent, IonicModule,RouterModule,PostAnswerComponent],
  templateUrl: './display-answer.component.html',
  styleUrls: ['./display-answer.component.css']
})
export class DisplayAnswerComponent implements OnInit {
  id!:string
  question!:IQuestion
  answers:IAnswer[]=[]
  votes:any[]=[]
  answerID?:string | null |undefined

  constructor(private questionSvc:QuestionsService ,private route:ActivatedRoute, private answerSvc:AnswersService,public voteSvc:VotesService){}

  ngOnInit(){
    this.id=this.route.snapshot.params['questionID'];
    console.log(this.id);
    
    this.questionSvc.getQuestion(this.id).subscribe(data=>{
      this.question=data
      console.log(this.question)
      //get added answer

    },
    err=>{
      console.log(err)
    }
    )


     this.answerSvc.getAnswers(this.id).subscribe(data=>{
      this.answers=data
    
      
    },
    
    err=>{
      console.log(err)
    })
    this.getUpVotes()

    

  }

  upVote(id:string){
    this.voteSvc.upVote(id).subscribe(
      (res)=>{
        console.log('upvoted successfully',res)
      },
      (err)=>{
        console.log(err)
      }


    )
  }
  
  downVote(id:string){
    this.voteSvc.downVote(id).subscribe(

      (res)=>{
        console.log('downvoted successfully', res)
      },
      (err)=>{
        console.log(err)
      }
    )
  }
  getUpVotes(){
    this.voteSvc.getUpVotes(this.answerID as string).subscribe(

      (res)=>{
        this.votes=res
        console.log(res)

      },
      (err)=>{
        console.log(err)
      }
    )
  }

}
