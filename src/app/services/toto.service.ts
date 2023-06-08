import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HttpModelData{
  answer:string
}

@Injectable()
export class TotoService {
  
  private tata:string = "la famille de tata";

  setTata(tata:string){
    this.tata = tata;
  }

  getTata(){
    return this.tata;
  }


  getYesOrNo(){
    return this.httpClient.get<HttpModelData>("https://yesno.wtf/api");
  }

  constructor(private httpClient : HttpClient){

  }

}
