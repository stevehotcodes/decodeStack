import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'signup', loadComponent:()=> import('./components/sign-up/sign-up.component').then(r=>r.SignUpComponent)},
  {path:'signin', loadComponent:()=>import('./components/sign-in/sign-in.component').then(r=>r.SignInComponent)},
  {path:'user-profile', loadComponent:()=>import('./components/user-profile/user-profile.component').then(r=>r.UserProfileComponent)},
  {path:'questions', loadComponent:()=>import('./components/questions/questions.component').then(r=>r.QuestionsComponent)},
  {path:'ask-a-question',loadComponent:()=>import('./components/ask-a-public-question/ask-a-public-question.component').then(r=>r.AskAPublicQuestionComponent)},
  {path:'post-answer', loadComponent:()=>import('./components/post-answer/post-answer.component').then(r=>r.PostAnswerComponent)},
  {path:'tags', loadComponent:()=>import('./components/tags/tags.component').then(r=>r.TagsComponent)},
  {path:'display-answer',loadComponent:()=>import('./components/display-answer/display-answer.component').then(r=>r.DisplayAnswerComponent)},
  {path:'comments', loadComponent:()=>import('./components/comments/comments.component').then(r=>r.CommentsComponent)},
  {path:'users',loadComponent:()=>import('./components/users-list/users-list.component').then(r=>r.UsersListComponent)},
  {path:'', loadComponent:()=>import('./components/mainpage/mainpage.component').then(r=>r.MainpageComponent)},
  {path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then(r=>r.NotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
