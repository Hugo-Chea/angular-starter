import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { ListComponent } from './todolist/list/list.component';
import { HeaderComponent } from './todolist/header/header.component';
import { ItemComponent } from './todolist/list/item/item.component';

@NgModule({
  declarations: [
    TodolistComponent,
    ListComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule
  ]
})
export class TodolistModule { }
