import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserServicesService } from 'src/app/services/user.service';
import { signInUserData } from 'src/app/interfaces/types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,IonicModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title:string="Header"
loggedUser!: boolean;

constructor(private userSvc:UserServicesService, private authSvc:AuthService){
   
   this.loggedUser=this.authSvc.getUserSignInToken() 
         
 }
 
 signOut(){
    this.authSvc.signOut()
 }


}



