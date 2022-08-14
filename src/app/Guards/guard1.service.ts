import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../Services/token.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Service implements CanActivate{

  realRol : string = "user";

  constructor(
    private tokenService : TokenService,
    private router : Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let expectedRol = route.data["expectedRol"];
    const roles = this.tokenService.getAuthorities();
    this.realRol = "user";
    roles.forEach(rol=> {
      if(rol === "ROLE_ADMIN"){
        this.realRol = "admin";
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
