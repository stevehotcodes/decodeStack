import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
import { createPasswordValidator } from 'src/app/validators/validators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
[x: string]: any;
  signupForm!:FormGroup
  textColor:string="red"
  fontSize:number=0.7

  constructor(private formBuilder:FormBuilder){}
  passwordMismatch:boolean=false

  ngOnInit():void{
    this.signupForm=this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.minLength(3),Validators.email]],
      password:['',[Validators.required, Validators.minLength(7),createPasswordValidator()]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]
    })
  }
   
  onSubmit(){
    console.log(this.signupForm.value)
    
  }

  get username(){
    return this.signupForm.controls['username']
  }

  get email(){
    return this.signupForm.controls['email' ] 
  }

  get password(){
    return this.signupForm.controls['password']
  }

  get confirmPassword(){
    return this.signupForm.controls['confirmPassword']
  }



}
