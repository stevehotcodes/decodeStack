import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterModule,IonicModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

}
