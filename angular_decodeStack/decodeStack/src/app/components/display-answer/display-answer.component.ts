import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-display-answer',
  standalone: true,
  imports: [CommonModule,NavigationComponent, IonicModule,RouterModule],
  templateUrl: './display-answer.component.html',
  styleUrls: ['./display-answer.component.css']
})
export class DisplayAnswerComponent {

}
