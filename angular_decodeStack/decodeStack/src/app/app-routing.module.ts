import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'questions', component:QuestionsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
