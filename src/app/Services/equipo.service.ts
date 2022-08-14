import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpleadoNuevo } from '../Models/empleado.model';
import { EquipoDTO, EquipoNuevo } from '../Models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  baseUrl: String = "http://localhost:8080/api/equipos/"
  constructor(private http:HttpClient) { }

  listarEquipos(){
    return this.http.get<EquipoDTO[]>(this.baseUrl+"listar");
  }

  nuevo(equipo:EquipoNuevo):Observable<EquipoNuevo>{
    return this.http.post<EquipoNuevo>(this.baseUrl+"guardar",equipo);
  }

  eliminarPorId(id:number){
    this.http.delete(this.baseUrl+"eliminar/"+id).subscribe(()=>{});
  }

  editar(equipo: EquipoNuevo){
    return this.http.put<void>(this.baseUrl+"actualizar",equipo);
  }

}
