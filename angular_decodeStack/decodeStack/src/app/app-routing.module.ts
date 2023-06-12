import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AskAPublicQuestionComponent } from './components/ask-a-public-question/ask-a-public-question.component';
import { PostAnswerComponent } from './components/post-answer/post-answer.component';
import { TagsComponent } from './components/tags/tags.component';
import { DisplayAnswerComponent } from './components/display-answer/display-answer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'signup', component:SignUpComponent},
  {path:'signin', component:SignInComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'questions', component:QuestionsComponent},
  {path:'ask-a-question', component:AskAPublicQuestionComponent},
  {path:'post-answer', component:PostAnswerComponent},
  {path:'tags', component:TagsComponent},
  {path:'display-answer', component:DisplayAnswerComponent},
  {path:'comments',component:CommentsComponent},
  {path:'users',component:UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
