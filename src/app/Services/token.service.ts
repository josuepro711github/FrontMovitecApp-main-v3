import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private TOKEN_KEY:string = 'AuthToken';
  private USERNAME_KEY:string = 'AuthUsername';
  private AUTHORITIES_KEY:string = 'AuthAuthorities';
  private roles: Array<string> = [];

  constructor() { }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY,token);
  }

  public getToken():string|null{
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public setUsername(username:string):void{
    window.sessionStorage.removeItem(this.USERNAME_KEY);
    window.sessionStorage.setItem(this.USERNAME_KEY,username);
  }

  public getUsername():string|null{
    return sessionStorage.getItem(this.USERNAME_KEY);
  }
  
  public setAuthorities(authorities:string[]):void{
    window.sessionStorage.removeItem(this.AUTHORITIES_KEY);
    window.sessionStorage.setItem(this.AUTHORITIES_KEY,JSON.stringify(authorities));
  }

  public getAuthorities():string[]{
    this.roles = [];
    if(sessionStorage.getItem(this.AUTHORITIES_KEY)){
      (JSON.parse(sessionStorage.getItem(this.AUTHORITIES_KEY)!) as Array<{authority: string}>).forEach(authority => {
          this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut():void{
    window.sessionStorage.clear();
  }
}
