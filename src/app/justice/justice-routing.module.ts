import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JusticeComponent } from './justice/justice.component';

const routes: Routes = [
 
  {
    path: '',
    component:JusticeComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JusticeRoutingModule { }
