import { Component, EventEmitter, Input, Output } from '@angular/core';
interface TaskOBJ{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Output() complete = new EventEmitter<string>()
  @Input({required:true}) task!:TaskOBJ;

  taskComplete(){
    this.complete.emit(this.task.id)
  }
}
