import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

}
