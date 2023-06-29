import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { createPasswordValidator } from 'src/app/validators/validators';
import { UserServicesService } from 'src/app/services/user.service';
import { FlashyMessagesService } from 'src/app/services/flashy-messages.service';
import {HttpClient} from '@angular/common/http'
import { newUserData } from 'src/app/interfaces/types';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  signupForm!:FormGroup
  textColor:string="red"
  fontSize:number=0.7
  passwordMismatch:boolean=false

  constructor(private formBuilder:FormBuilder, private router:Router ,private userService:UserServicesService, private flashMsg:FlashyMessagesService){}


  ngOnInit():void{
    this.signupForm=this.formBuilder.group({
      firstName:['',[Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required, Validators.minLength(3)]],
      userName:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.minLength(3),Validators.email]],
      github:['',[Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required, Validators.minLength(7),createPasswordValidator()]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]
    })
  }
   
  onSubmit(){
    if(this.signupForm.valid){
   
      let newUserData=this.signupForm.value;
      delete newUserData.confirmPassword
      this.userService.signUp(newUserData)
      console.log(newUserData);
      this.router.navigate(['./signin'])
      
    }
    else{
      this.flashMsg.exposeMessage({
        type:'error',
        message:'Invalid form due to inappropriate or empty inputs'
      })
      
    }

    
  }
  
  get firstName(){
    return this.signupForm.controls['firstName']
  }
  
  get lastName(){
    return this.signupForm.controls['lastName']
  }

  get userName(){
    return this.signupForm.controls['username']
  }

  get email(){
    return this.signupForm.controls['email']
  }

  get github(){
    return this.signupForm.controls['github']
  }

  get password(){
    return this.signupForm.controls['password']
  }

  get confirmPassword(){
    return this.signupForm.controls['confirmPassword']
  }



}
