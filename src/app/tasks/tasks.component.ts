import { Component, Input, Output,EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) userName!:string;
  @Output() taskArray = new EventEmitter();
  tasks=dummyTasks
  get userTasks(){
    return this.tasks.filter((task)=>task.userId===this.id);
  }
}
