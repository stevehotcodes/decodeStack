import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [

  {path:'signup', loadComponent:()=> import('./components/sign-up/sign-up.component').then(r=>r.SignUpComponent)},
  {path:'signin', loadComponent:()=>import('./components/sign-in/sign-in.component').then(r=>r.SignInComponent)},
  {path:'users',loadComponent:()=>import('./components/users-list/users-list.component').then(r=>r.UsersListComponent),canActivate:[UserGuard]},  
  {path:'user-profile/:userID', loadComponent:()=>import('./components/user-profile/user-profile.component').then(r=>r.UserProfileComponent),canActivate:[UserGuard]},
  {path:'questions', loadComponent:()=>import('./components/questions/questions.component').then(r=>r.QuestionsComponent) ,canActivate:[UserGuard]},
  {path:'ask-a-question',loadComponent:()=>import('./components/ask-a-public-question/ask-a-public-question.component').then(r=>r.AskAPublicQuestionComponent),canActivate:[UserGuard]},
  {path:'post-answer/:answerID', loadComponent:()=>import('./components/post-answer/post-answer.component').then(r=>r.PostAnswerComponent),canActivate:[UserGuard]},
  {path:'tags', loadComponent:()=>import('./components/tags/tags.component').then(r=>r.TagsComponent),canActivate:[UserGuard]},
  {path:'display-answer/:questionID',loadComponent:()=>import('./components/display-answer/display-answer.component').then(r=>r.DisplayAnswerComponent),canActivate:[UserGuard]},
  {path:'comments/:answerID', loadComponent:()=>import('./components/comments/comments.component').then(r=>r.CommentsComponent),canActivate:[UserGuard]},
  {path:'', loadComponent:()=>import('./components/mainpage/mainpage.component').then(r=>r.MainpageComponent) },
  {path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then(r=>r.NotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
