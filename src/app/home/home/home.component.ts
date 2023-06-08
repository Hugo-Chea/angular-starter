import { Component } from '@angular/core';
import { TotoService } from 'src/app/services/toto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public totoService:TotoService){
    console.log(totoService.getTata());

    totoService.setTata("a quité la famille");
  }
}
