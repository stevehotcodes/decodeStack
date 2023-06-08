import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{IonicModule} from '@iconic/angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { Routes,RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    IonicModule.forRoot(),
   
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
