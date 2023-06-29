import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  public containerElementViewRef!: ViewContainerRef;
  
  

  constructor() { }
}
