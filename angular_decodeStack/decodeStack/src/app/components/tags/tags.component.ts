import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { QuestionsComponent } from '../questions/questions.component';
import { QuestionsService } from 'src/app/services/questions.service';
import { IQuestion } from 'src/app/interfaces/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,NavigationComponent,IonicModule,RouterModule,FormsModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  questions:IQuestion[]=[];
  _filterTag:string="" //watches for user nputs
  filterTagArray:IQuestion[]=[]
      pagination:number=1
    allQuestions:number=0
   

  constructor(public questionSvc:QuestionsService){}

  ngOnInit():void{
    this.fetchQuestions()
  }


  fetchQuestions(){
    this.questionSvc.getAllQuestions(this.pagination).subscribe(
      (data)=>{
        this.questions=data;
        console.log(this.questions)
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  tagFilter(filterBy:string):IQuestion[]{
    filterBy=filterBy.toLowerCase()
    return this.questions.filter((question:IQuestion)=>
     question.questionTag.toLowerCase().includes(filterBy)
    )
    }
    
  get filterTag(){
    return this._filterTag
  }

  set filterTag(value:string){
    this._filterTag=value
    console.log("in the setter we have this value",value);
    this.filterTagArray=this.tagFilter(value);
    console.log('this is the filter array', this.filterTagArray)
  }

}