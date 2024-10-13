import { Injectable } from "@angular/core";

interface TaskOBJ{
    title:string,
    summary:string,
    date:string
  }
@Injectable ({providedIn:"root"})
export class TasksService{
    tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
            id: 't4',
            userId: 'u1',
            title: 'Master Angular2',
            summary:
              'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
          },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u4',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
        {
            id: 't5',
            userId: 'u5',
            title: 'Task For User5',
            summary:
              'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
          },{
            id: 't6',
            userId: 'u6',
            title: 'Task For User6',
            summary:
              'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
          },{
            id: 't7',
            userId: 'u2',
            title: 'Task For User2',
            summary:
              'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
          },{
            id: 't8',
            userId: 'u5',
            title: 'Task For User5',
            summary:
              'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
          }
      ]
    constructor (){
        const tasks = localStorage.getItem("tasks")

        if(tasks){
            this.tasks=JSON.parse(tasks)
        }
    }
    getUserTasks (userId:string){
       return this.tasks.filter((task)=>task.userId===userId);
    }
    addTask(taskData:TaskOBJ,userId:string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
          })
        this.saveTasks()
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((task)=>task.id!==id)
        this.saveTasks()
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}