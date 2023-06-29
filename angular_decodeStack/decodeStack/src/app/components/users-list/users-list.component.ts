import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserServicesService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
// import { StoreModule } from '@ngrx/store';
// import { userReducer } from 'src/app/store/reducers/users.reducerusers.reducer';

export interface User{
  dateJoined:string
  id:string
  firstName:string
  lastName:string
  role:string
  userName:string
  github:string
  isActive:number
  email:string
  
}



@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule,NavigationComponent,IonicModule,RouterModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:User[] =[]
  isAdmin!:boolean
  id!:string

  constructor(private userSvc:UserServicesService,private  authSvc:AuthService){}

  ngOnInit(): void {
    
  this.fetchUsers()

   this.isAdmin= this.authSvc.checkAdmin()
  }
  userDelete(id:string){
    this.userSvc.deleteUser(this.id).subscribe(
      res=>{
        console.log(res)
        console.log('user deleted successfully')

      },
      err=>{
        console.log(err)
      }
    )

  }
  fetchUsers(){
    this.userSvc.getAllUsers().subscribe(
      res=>{
        const currentIndex=0
        this.users=res
        this.id=res[currentIndex].id
       
      },
      err=>{
        console.log(err)
      }
    )
  }



}
