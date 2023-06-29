import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { UserServicesService } from 'src/app/services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { IQuestion } from 'src/app/interfaces/types';
import { AuthService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';

export interface IUser{
  id:string
  firstName:string
  github:string
  lastName:string
  userName:string | 'userName'
  dateJoined:string
  role:string
  email:string
  isDeleted:number
  isActive:number
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,NavigationComponent,IonicModule,RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  id!:string | 'userID'
  user!:IUser
  questions:IQuestion[] = []
  isAdmin!:boolean
  
  constructor(private userSvc:UserServicesService,private route:ActivatedRoute,private questionSvc:QuestionsService, private authSvc:AuthService){}

 ngOnInit(): void {
   this.id=this.route.snapshot.params['userID'];
    console.log(this.id)

    this.userSvc.getAUser(this.id).subscribe(
      res=>{
        this.user=res
        console.log(this.user)

      },
      err=>{
        console.log(err)
      }
    )

    this.questionSvc.getQuestionByUser(this.id).subscribe(
      res=>{
        this.questions=res
      },
      err=>{
        console.log(err)
      }
    )

 


 }

  

}
