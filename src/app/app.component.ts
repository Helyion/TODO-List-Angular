import { Component } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devWebAngular';

  constructor(private httpClient: HttpClient) {
  }
  tasks : string[] = [];

  addTask(newTask: string){
    this.httpClient.post("http://localhost:3000/tasks",{name: newTask}).subscribe();
    //this.tasks.push(newTask);
  }
}
