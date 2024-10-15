import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor,NgIf } from '@angular/common';
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  err = {name:"Select User to show tasks"}
  selectedID:string="u1";
  newName = ''
  get userNameForID (){
      return this.users.find((user)=>user.id===this.selectedID)!
  }
  userClicked (id:string){
    this.selectedID=id
  }
  
}
