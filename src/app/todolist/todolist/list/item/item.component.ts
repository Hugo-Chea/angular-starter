import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/todolist/models/todo-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() 
  public item: TodoItem | undefined;

}
