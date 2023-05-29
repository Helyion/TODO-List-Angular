import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {TaskService} from "./@Shared/services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devWebAngular';

  constructor(private httpClient: HttpClient, private taskService: TaskService) {
  }
  tasks : string[] = [];
  nbTasks: number = 0;

  addTask(newTask: string){
    //this.taskService.add(newTask).subscribe();
    this.tasks.push(newTask);
    this.nbTasks = this.tasks.length;
  }

}
