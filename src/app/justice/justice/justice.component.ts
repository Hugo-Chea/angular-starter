import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable,  map, interval } from 'rxjs';

import { take } from 'rxjs/operators';

interface HttpModelData{
  answer:string
}

@Component({
  selector: 'app-justice',
  templateUrl: './justice.component.html',
  styleUrls: ['./justice.component.scss']
})
export class JusticeComponent implements OnInit {
  public values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public justice$:Observable<any> = this.emitSequentially(this.values);
  
  emitSequentially(list:number[]):Observable<number> {
    return interval(1000).pipe(
      take(list.length),
      map(index => list[index])
    );
  }


  constructor(private httpClient : HttpClient){
    httpClient.get<HttpModelData>("https://yesno.wtf/api").subscribe(obs=>{
      console.log(obs.answer);
    })
  }


  ngOnInit(){

  }

}
