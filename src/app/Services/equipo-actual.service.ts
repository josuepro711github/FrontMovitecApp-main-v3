import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EquipoNuevo } from '../Models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoActualService {

  private currentEquipo = new BehaviorSubject<EquipoNuevo>({
    idEquipo:undefined,
    marcaEquipo:undefined,
    modeloEquipo:undefined
  });

  $currentEquipo = this.currentEquipo.asObservable();

  constructor() { }

  setEquipo(equipo: EquipoNuevo){
    this.currentEquipo.next(equipo);
  }

}
