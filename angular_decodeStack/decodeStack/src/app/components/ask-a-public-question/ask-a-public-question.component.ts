import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-ask-a-public-question',
  standalone: true,
  imports: [CommonModule,NavigationComponent],
  templateUrl: './ask-a-public-question.component.html',
  styleUrls: ['./ask-a-public-question.component.css']
})
export class AskAPublicQuestionComponent {

}
