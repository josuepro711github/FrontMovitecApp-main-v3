import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private http: HttpClient) { }

  public enviarCorreo(){
    return this.http.get<boolean>("http://localhost:8080/api/notificaciones");
  }
}
