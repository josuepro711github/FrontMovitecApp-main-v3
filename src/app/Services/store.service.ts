import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myLog = new BehaviorSubject<boolean>(false);
  mylog$ = this.myLog.asObservable();

  constructor(
    private tokenService:TokenService
  ) {}
    
  setLog(){
    this.myLog.next(true);
  }
  setLogOut(){
    this.myLog.next(false);
  }
}
