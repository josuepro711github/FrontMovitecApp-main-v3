import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-client-inicio',
  templateUrl: './client-inicio.component.html',
  styleUrls: ['./client-inicio.component.css']
})
export class ClientInicioComponent implements OnInit {
  
  estado!:boolean;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.estado = this.usuarioService.getUsuario().estado;
  }
}
