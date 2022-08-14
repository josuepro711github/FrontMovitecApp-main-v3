import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { UsuarioListDto, UsuarioLoginReturn } from '../Models/usuario.model';

import { map, delay, mergeMap, filter } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headerCustom: HttpHeaders = new HttpHeaders;

  constructor(private http:HttpClient) { }

  getAllUsuario(){
    return this.http.get<UsuarioListDto[]>("http://localhost:8080/api/usuarios");
  }

  deleteById(id:number){
    this.http.delete("http://localhost:8080/api/usuarios/"+id).subscribe(()=>{});
  }

  setUsuario(usuario:UsuarioLoginReturn){
    window.sessionStorage.removeItem("ulg");
    window.sessionStorage.setItem("ulg",JSON.stringify(usuario));
  }

  removeUsuario(){
    window.sessionStorage.removeItem("ulg");
  }

  getUsuario(){
    return JSON.parse(sessionStorage.getItem("ulg")!);
  }
  
}
