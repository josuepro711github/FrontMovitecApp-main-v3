import { Component, ElementRef, ViewChild } from '@angular/core';

import { StoreService } from 'src/app/Services/store.service';
import { TokenService } from 'src/app/Services/token.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'MovitecFrontApp';
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


