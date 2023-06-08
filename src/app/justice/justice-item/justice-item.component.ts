import { Component, Input } from '@angular/core';
import { TotoService } from 'src/app/services/toto.service';

@Component({
  selector: 'app-justice-item',
  templateUrl: './justice-item.component.html',
  styleUrls: ['./justice-item.component.scss']

})
export class JusticeItemComponent {
  @Input()
  public dataEmited : number = 0;

  public yesno : string = "0";

  constructor(public totoService:TotoService){
    totoService.getYesOrNo().subscribe((obs)=>{this.yesno = obs.answer});
  }

}
