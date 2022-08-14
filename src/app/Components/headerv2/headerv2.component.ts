import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/Services/store.service';
import { TokenService } from 'src/app/Services/token.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-headerv2',
  templateUrl: './headerv2.component.html',
  styleUrls: ['./headerv2.component.css']
})
export class Headerv2Component implements OnInit {

  isLogin:boolean = false;

  constructor(private tokenService:TokenService, private storeService:StoreService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.storeService.mylog$.subscribe(data=>{
      this.isLogin=data;
    });
    if(this.tokenService.getToken()){
      this.isLogin = true;
    }
  }

  cerrarSesion(){
    this.tokenService.logOut();
    this.storeService.setLogOut();
    this.usuarioService.removeUsuario();
  }
}
