import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLoginReturn } from 'src/app/Models/usuario.model';
import { StoreService } from 'src/app/Services/store.service';
import { TokenService } from 'src/app/Services/token.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  usuario! : UsuarioLoginReturn;
  isLogin:boolean = false;

  constructor(private tokenService:TokenService, 
    private storeService:StoreService,
    private usuarioService : UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.storeService.mylog$.subscribe(data=>{
      this.isLogin=data;
    });
    if (this.tokenService.getToken()){
      this.isLogin = true;
      this.usuario = this.usuarioService.getUsuario();
    }
  }

  cerrarSesion(){
    this.tokenService.logOut();
    this.storeService.setLogOut();
    this.usuarioService.removeUsuario();
    this.router.navigate(['/public/login']);
  }
}
