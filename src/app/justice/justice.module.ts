import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JusticeRoutingModule } from './justice-routing.module';
import { JusticeComponent } from './justice/justice.component';
import { JusticeItemComponent } from './justice-item/justice-item.component';
import { HttpClientModule } from '@angular/common/http';
import { TotoService } from '../services/toto.service';


@NgModule({
  declarations: [
    JusticeComponent,
    JusticeItemComponent
  ],
  imports: [
    CommonModule,
    JusticeRoutingModule,
    HttpClientModule
  ],
  providers:[TotoService]
})
export class JusticeModule { }
