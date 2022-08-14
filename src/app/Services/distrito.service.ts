import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distrito } from '../Models/distrito.model';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(private http:HttpClient) { }

  public getDistritos(){
    return this.http.get<Distrito[]>("http://localhost:8080/api/distritos");
  }
}
