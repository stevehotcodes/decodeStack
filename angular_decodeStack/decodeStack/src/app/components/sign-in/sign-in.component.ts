import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Router} from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormControl,Validators, FormsModule } from '@angular/forms';
import { createPasswordValidator } from 'src/app/validators/validators';
import { UserServicesService } from 'src/app/services/user.service';
import { FlashyMessagesService } from 'src/app/services/flashy-messages.service';



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

constructor(private formBuilder: FormBuilder,private router:Router, private userSvc:UserServicesService, private popMsg:FlashyMessagesService) { }

ngOnInit() {
  this.buildtheForm();
}

buildtheForm() {
  this.signinForm = this.formBuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),createPasswordValidator()]],
   
  });
}

onSubmit() {
  if (this.signinForm.valid) {
    this.userSvc.signIn(this.signinForm.value)
    console.log(this.signinForm.value);    
    this.router.navigate(['/questions'])
  }
  else{
    this.popMsg.exposeMessage({
      type:'error',
      message:'invalid form'
    })
  }
}
  
}
