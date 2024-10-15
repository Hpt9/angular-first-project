import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TaskComponent,TasksComponent,NewTaskComponent],
    exports:[TasksComponent],
    imports:[CommonModule,FormsModule]
})

export class TasksModule{}