import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostContactDTO } from '../Models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseURL = "http://localhost:8080/api/contactos";

  constructor(
    private http : HttpClient
  ) { }

  create(contacto : PostContactDTO){
    return this.http.post<PostContactDTO>(`${this.baseURL}`, contacto);
  }
}
