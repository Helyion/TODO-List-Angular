import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }
/*
  add(newTask: string){
    return this.httpClient.post("http://localhost:4200",{name: newTask});
  }*/

}
