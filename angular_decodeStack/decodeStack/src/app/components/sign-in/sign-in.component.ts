import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormControl,Validators, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

// 
export class SignInComponent implements OnInit {
  

 textColor:string="red"
 fontSize:number=0.7

signinForm!: FormGroup;

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.buildtheForm();
}

buildtheForm() {
  this.signinForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.email]],
   
  });
}

onSubmit() {
  if (this.signinForm.valid) {
    
    console.log(this.signinForm.value);
    // Handle form submission
  }
}
  
}
