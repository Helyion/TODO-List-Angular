import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devWebAngular';

  tasks : string[] = [];

  addTask(newTask: string){
    this.tasks.push(newTask);
  }
}
