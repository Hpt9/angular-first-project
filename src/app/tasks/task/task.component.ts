import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';
interface TaskOBJ{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required:true}) task!:TaskOBJ;
  private taskService = inject(TasksService)
  taskComplete(){
    this.taskService.removeTask(this.task.id)
  }
}
