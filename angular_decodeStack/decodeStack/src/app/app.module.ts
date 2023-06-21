import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{IonicModule} from '@iconic/angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { Routes,RouterModule } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AskAPublicQuestionComponent } from './components/ask-a-public-question/ask-a-public-question.component';
import { PostAnswerComponent } from './components/post-answer/post-answer.component';
import { TagsComponent } from './components/tags/tags.component';
import { DisplayAnswerComponent } from './components/display-answer/display-answer.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    SignUpComponent,
    SignInComponent,
    NavigationComponent,
    QuestionsComponent,
    AskAPublicQuestionComponent,
    PostAnswerComponent,
    TagsComponent,
    DisplayAnswerComponent,
    CommentsComponent,
    UsersListComponent,
    NotFoundComponent,
    IonicModule.forRoot(),
    FormsModule
   
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
