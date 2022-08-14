import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { StoreService } from 'src/app/Services/store.service';
import { TokenService } from 'src/app/Services/token.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginFail = false;
  loginUsuario:UsuarioLogin = {
    nombreUsuario:"",
    password:""
  };
  roles:string[]= [];

  constructor(
    private router : Router,
    private authService : AuthService,
    private tokenService : TokenService,
    private storeService : StoreService,
    private usuarioService : UsuarioService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.roles = this.tokenService.getAuthorities();
      if (this.roles.indexOf("ROLE_ADMIN")!==-1){
        this.router.navigate(["../../admin"]);
      }else if (this.roles.indexOf("ROLE_USER")!==-1){
        this.router.navigate(["../../client"]);
      }
    }
  }

  onLogin():void{
    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.storeService.setLog();
      this.isLoginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = this.tokenService.getAuthorities();
      this.usuarioService.setUsuario(data);
      if (this.roles.indexOf("ROLE_ADMIN")!==-1){
        this.router.navigate(["../../admin"]);
      }else if (this.roles.indexOf("ROLE_USER")!==-1){
        this.router.navigate(["../../client"]);
      }
    },err=> {
      this.isLoginFail = true;
    })
  }
}
