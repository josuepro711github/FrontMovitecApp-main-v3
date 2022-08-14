import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { InstalacionesService } from 'src/app/Services/instalaciones.service';
import { InstalacionDTO } from 'src/app/Models/instalacion.model';
import { InstalacionesActualService } from 'src/app/Services/instalaciones-actual.service';

@Component({
  selector: 'app-admin-usuarios-info',
  templateUrl: './admin-usuarios-info.component.html',
  styleUrls: ['./admin-usuarios-info.component.css']
})
export class AdminUsuariosInfoComponent implements OnInit {

  instalaciones:InstalacionDTO[] = [];
  usuarios:UsuarioListDto[] = [];
  editUsuario:UsuarioNuevo = {
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
    roles : ["user"]
  }

  constructor(private usuarioService:UsuarioService,
    private authService:AuthService,
    private currentInstalaciones: InstalacionesActualService) { }

  ngOnInit(): void {
    this.currentInstalaciones.currentInstalaciones$.subscribe(instalacion => this.instalaciones = instalacion)
  }

}
