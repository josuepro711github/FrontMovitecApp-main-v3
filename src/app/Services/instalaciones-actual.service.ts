import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InstalacionDTO } from '../Models/instalacion.model';

@Injectable({
  providedIn: 'root'
})
export class InstalacionesActualService {

  private currentInstalaciones = new BehaviorSubject<InstalacionDTO[]>([]);

  currentInstalaciones$ = this.currentInstalaciones.asObservable();

  constructor() { }

  setInstalacion(instalacion:InstalacionDTO[]){
    this.currentInstalaciones.next(instalacion);
  }
  
}
