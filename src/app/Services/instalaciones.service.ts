import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InstalacionDTO } from '../Models/instalacion.model';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesService {

  constructor(private http:HttpClient) { }

  public getAllByClienteId(idCliente : number){
    return this.http.get<InstalacionDTO[]>("http://localhost:8080/api/instalaciones/"+idCliente);
  }
}
