import { Component } from '@angular/core';

export interface TodoItem {
  name: string,
  checked: boolean,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  input: string= '';

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

}
