import { Component } from '@angular/core';
import { IflashMessage } from './interfaces/types';
import { FlashyMessagesService } from './services/flashy-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'decodeStack';
  messages:IflashMessage[]=[]

  constructor(public flashMsgSvc:FlashyMessagesService){
    this.messages=flashMsgSvc.getMessages()
  }
}
