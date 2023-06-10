import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup,FormControl,ReactiveFormsModule, Validators} from '@angular/forms';

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

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.signupForm=this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.minLength(3),Validators.email]],
      password:['',[Validators.required, Validators.minLength(7)]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]
    })
  }

  onSubmit(signupForm:any){
    
      console.log(this.signupForm.value)
  }
}
