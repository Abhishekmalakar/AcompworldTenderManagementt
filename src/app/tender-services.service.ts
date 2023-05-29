import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { TenderModel } from './tender-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TenderServicesService {
private REST_SERVER="https://localhost:44369/api";
  constructor( private httpClient:HttpClient) { }

  public getTender() {
    return this.httpClient.get(this.REST_SERVER + "/TenderMasters");
  }

  public getDetailbytitle(TenderKey:number){
    return this.httpClient.get<TenderModel> (this.REST_SERVER + "/TenderMasters/" + TenderKey);
  }
}
