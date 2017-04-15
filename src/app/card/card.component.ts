import {Component, Input} from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']

})

export class CardComponent {
  @Input() task: Task;

  statusTaskToggle() {
    this.task.completed = !this.task.completed;
  }
}
