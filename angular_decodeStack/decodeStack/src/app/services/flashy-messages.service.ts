import { Injectable } from '@angular/core';
import { IflashMessage } from '../interfaces/types';


@Injectable({
  providedIn: 'root'
})
export class FlashyMessagesService {
  private messages:IflashMessage[]=[]

  constructor() { }


  getMessages(){
    return this.messages
  }

  exposeMessage(message:IflashMessage){
    this.messages.push(message)
    setTimeout(()=>{
      this.messages.shift()
    },2000)
  }


}
