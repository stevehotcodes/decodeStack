import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FlashyMessagesService } from 'src/app/services/flashy-messages.service';
import { IflashMessage } from 'src/app/interfaces/types';

@Component({
  selector: 'app-flash-messages',
  standalone: true,
  imports: [CommonModule,IonicModule ],
  templateUrl: './flash-messages.component.html',
  styleUrls: ['./flash-messages.component.css']
})
export class FlashMessagesComponent {
  @Input() message!:IflashMessage

}
