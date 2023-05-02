import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://6447a3be50c25337442a6ffe.mockapi.io';

  constructor(private httpClient:HttpClient) { }

  public header(){
    let headers = new HttpHeaders();
    headers.set('content - type', 'application/json');
    return headers
  }

  public get(endpoint:string):Observable<any>{
    let apiPath = `${this.apiUrl}/${endpoint}`;
    return this.httpClient.get(apiPath,{headers:this.header()});
  }

  getProduct() {
    return this.get(`products`);
  }
}
