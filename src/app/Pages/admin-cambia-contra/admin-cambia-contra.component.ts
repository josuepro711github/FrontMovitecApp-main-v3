import { Component, OnInit } from '@angular/core';
import { Contraseñas } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-admin-cambia-contra',
  templateUrl: './admin-cambia-contra.component.html',
  styleUrls: ['./admin-cambia-contra.component.css']
})
export class AdminCambiaContraComponent implements OnInit {

  flagRespuesta:boolean=false;
  flagCheck:boolean=true;

  contras : Contraseñas = {
    nomUsuario : "",
    passAniguo : "",
    passNuevo : ""
  }

  constructor(private authService : AuthService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.contras.nomUsuario = this.usuarioService.getUsuario().nombreUsuario;
  }

  cambia(){
    this.authService.cambiaContra(this.contras).subscribe(data=>{
      this.enviarCambio(true);
    }, err=>{
      this.enviarCambio(false)
    });
  }

  async enviarCambio(check:boolean){
    if (check){
      this.contras.passAniguo = "";
      this.contras.passNuevo = "";
    }
    this.flagCheck = check;
    this.flagRespuesta = true;
    await new Promise(f => setTimeout(f, 2000));
    this.flagRespuesta = false;
  }
}
