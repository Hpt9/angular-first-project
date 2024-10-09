import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedID:string = 'u1';
  newName = ''
  get userNamefID (){
    if (this.users.find((user)=>user.id===this.selectedID)===undefined) {
      return "No this user"
    } else {
      return this.users.find((user)=>user.id===this.selectedID)!.name
      
    };
  }
  userClicked (id:string){
    this.selectedID=id
  }
  
}
