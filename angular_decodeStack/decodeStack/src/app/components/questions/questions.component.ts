import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../navigation/navigation.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-questions',
    standalone: true,
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
    imports: [CommonModule, QuestionsComponent, NavigationComponent,RouterModule]
})
export class QuestionsComponent {

}
