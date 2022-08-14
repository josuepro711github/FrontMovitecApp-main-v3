import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Plan, PlanesNuevo } from 'src/app/Models/plan.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  private baseUrl:string = "http://localhost:8080/api/planes/";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(
    private http:HttpClient
  ) { }

  getAllPlanes(){
    return this.http.get<Plan[]>(this.baseUrl);
  }

  nuevo(plan: PlanesNuevo): Observable<PlanesNuevo>{
    return this.http.post(this.baseUrl+"nuevo", plan, {headers: this.httpHeaders}).pipe(
      map( (response: any) => response.plan as PlanesNuevo),
      catchError((e) => {

        if(e.status==400){
          return throwError(() => e);
        }

        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );
  }

  deleteById(id:number){
    this.http.delete(this.baseUrl+id).subscribe(()=>{});
  }

  editar(plan: PlanesNuevo){
    return this.http.put<void>(this.baseUrl+"editar/"+plan.id,plan);
  }

}
