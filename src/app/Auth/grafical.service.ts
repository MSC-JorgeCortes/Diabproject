import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficalService {

  constructor(private graftHTTP : HttpClient){
  }


  public grafical(req:any):Observable<any> {
    return this.graftHTTP.post('http://localhost:8000/api/diabetes/',req);
  }
}
