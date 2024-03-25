import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private httpClient: HttpClient) { }

GET(url:string,options:any =''): Observable<any>{
  if(options){
    return this.httpClient.get(url,options)
  } else{
    return this.httpClient.get(url);
  }
}

POST(url: string, data: any ={}, responseType: any= {}): Observable<any>{
  return this.httpClient.post(url, data, responseType);
}

PUT(url: string, data: any ={}, responseType: any= {}): Observable<any>{
  return this.httpClient.put(url, data, responseType);
}

}
