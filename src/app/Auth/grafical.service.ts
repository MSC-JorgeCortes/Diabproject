import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficalService {

  constructor(private http : HttpClient){}
  

  obtenDatos(form:any):Observable <any> {
    return this.http.post("http://localhost:8000/tempanual/temperatura/",form);
  }

  Agregar(form:any):Observable<any>{
    return this.http.post("http://localhost:8000/tempanual/temperatura/",form);
  }

  listarDatos(form:any):Observable<any>{
    return this.http.post('http://localhost:8000/tempanual/temperatura/',form);
  }

  updateDatos(form:any):Observable<any>{
    return this.http.post('http://localhost:8000/tempanual/temperatura/',form);
  }

  eliminarRegistro(form:any):Observable<any>{
    return this.http.post('http://localhost:8000/tempanual/temperatura/',form);
  }

}
