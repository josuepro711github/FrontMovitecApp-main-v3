import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmpleadoNuevo } from '../Models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoActualService {

  private currentEmpleado = new BehaviorSubject<EmpleadoNuevo>({
    idEmpleado:undefined,
    nombreEmpleado:undefined,
    apellidosEmpleado:undefined,
    telefonoEmpleado:undefined,
    direccionEmpleado:undefined,
    correoEmpleado:undefined,
    codigoEmpleado:undefined
  });

  $currentEmpleado = this.currentEmpleado.asObservable();

  constructor() { }

  setEmpleado(empleado: EmpleadoNuevo){
    this.currentEmpleado.next(empleado);
  }

}
