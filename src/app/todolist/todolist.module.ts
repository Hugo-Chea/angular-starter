import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodolistRoutingModule } from './todolist-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './list/item.component';

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
