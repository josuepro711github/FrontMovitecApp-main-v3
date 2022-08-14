import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan, PlanesNuevo } from 'src/app/Models/plan.model';
import { PlanesService } from 'src/app/Services/planes.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-planes-add',
  templateUrl: './admin-planes-add.component.html',
  styleUrls: ['./admin-planes-add.component.css']
})
export class AdminPlanesAddComponent implements OnInit {

  errores: string[] = [];
  planes:Plan[] = [];  
  nuevoPlanes:PlanesNuevo = {
    precioPlan: undefined,
    velocidadPlan: undefined
  }

  constructor(private planesService: PlanesService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  cargarPLanes(){
    setTimeout(
      ()=>{
        this.planesService.getAllPlanes().subscribe(data=>{
          this.planes = data;
        });
       } , 20
   );
  }

  enviarNuevoPlanes(): void{
    this.planesService.nuevo(this.nuevoPlanes)
    .subscribe(data=>{
      this.cargarPLanes();
      this.nuevoPlanes={
        precioPlan: undefined,
        velocidadPlan: undefined
      }
      this.router.navigate(["/admin/planes-list"]);
      Swal('Nuevo plan', `el plan a sido creado con éxito!`, 'success');
    },err=>{
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: ' + err.status);
      console.error(err.error.errors);
    });
  }
  

}
