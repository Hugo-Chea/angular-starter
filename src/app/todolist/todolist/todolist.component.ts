import { Component , OnInit} from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { TodoItem } from '../models/todo-item.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit{

  public listTodo : TodoItem[] ;

  

  constructor(public todolistService :TodolistService){
    this.listTodo = [];

  }
 
  ngOnInit(){
    this.listTodo = this.todolistService.getTodoList()
  }
  

  onNewItemAdded(item:any){
    console.log("tototoot",item);
  }

  
}
