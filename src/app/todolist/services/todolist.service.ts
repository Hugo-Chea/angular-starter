import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todoList: TodoItem[] = [
    {
      name: 'Hit the gym',
      checked: false
    },
    {
      name: 'Pay bills',
      checked: true
    },
    {
      name: 'Meet George',
      checked: true
    }
  ];

  constructor() { }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
