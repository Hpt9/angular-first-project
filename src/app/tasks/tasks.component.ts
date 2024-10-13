import { Component, Input, Output,EventEmitter } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { TasksService } from './tasks.service';
interface TaskOBJ{
  title:string,
  summary:string,
  date:string
}
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
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) userName!:string;
  @Output() taskArray = new EventEmitter();
  isModalOpen = false; 
  constructor(private taskService:TasksService){}
  get userTasks(){
    return this.taskService.getUserTasks(this.id)
  }
  startAddingTask(){
    this.isModalOpen=true;
  }
  endAddingTask(){
    this.isModalOpen=false;
  }
  // submitTaskData(task: TaskOBJ){
  //   this.taskService.addTask(task,this.id)
  //   //console.log(this.tasks)
  // }
}
