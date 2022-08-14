import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpleadoDTO, EmpleadoNuevo } from '../Models/empleado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl: String = "http://localhost:8080/api/empleados/"
  constructor(private http:HttpClient) { }

  getAllEmpleados(){
    return this.http.get<EmpleadoDTO[]>(this.baseUrl+"listar");
  }

  nuevo(empleados:EmpleadoNuevo):Observable<EmpleadoNuevo>{
    return this.http.post<EmpleadoNuevo>(this.baseUrl+"guardar",empleados);
  }

  eliminarPorId(id:number){
    this.http.delete(this.baseUrl+"eliminar/"+id).subscribe(()=>{});
  }

  editar(empleado: EmpleadoNuevo){
    return this.http.put<void>(this.baseUrl+"actualizar",empleado);
  }

}
