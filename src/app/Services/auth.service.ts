import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contraseñas, UsuarioLogin, UsuarioLoginReturn, UsuarioNuevo } from '../Models/usuario.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:8080/auth/";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http : HttpClient
  ) { }
  
  nuevo(usuario: UsuarioNuevo) : Observable<UsuarioNuevo>{
    return this.http.post(this.baseUrl+"nuevo", usuario, {headers: this.httpHeaders}).pipe(
      map( (response: any) => response.usuario as UsuarioNuevo),
      catchError((e) => {

        if(e.status==400){
          return throwError(() => e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );
  }


  login(usuario : UsuarioLogin){
    return this.http.post<UsuarioLoginReturn>(this.baseUrl+"login", usuario);
  }

  editar(usuario : UsuarioNuevo){
    return this.http.put<void>(this.baseUrl+"editar/"+usuario.id,usuario);
  }

  cambiaContra(contras:Contraseñas){
    return this.http.put<void>(this.baseUrl+"cambiar",contras);
  }
}