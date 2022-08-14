import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActualService {

  private currentUser = new BehaviorSubject<UsuarioNuevo>({
    id : 0,
    nombre : "",
    apellidos : "",
    direccion : "",
    tipoDocumento : {
        id :  1
    },
    documento : "",
    estado : true,
    nombreUsuario : "",
    email : "",
    telefono : "",
    password :  "", 
    roles : ["user"]});
  currentUser$ = this.currentUser.asObservable();

  constructor() { }

  setuser(user:UsuarioNuevo){
    this.currentUser.next(user);
  }
}
