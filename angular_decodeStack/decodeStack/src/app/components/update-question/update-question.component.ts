import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {
  public childComponentType:any
  public onClose$:Subject<boolean>=new Subject ()

}
