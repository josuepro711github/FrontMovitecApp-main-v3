import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan, PlanesNuevo } from 'src/app/Models/plan.model';
import { PlanActualService } from 'src/app/Services/plan-actual.service';
import { PlanesService } from 'src/app/Services/planes.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-planes-edit',
  templateUrl: './admin-planes-edit.component.html',
  styleUrls: ['./admin-planes-edit.component.css']
})
export class AdminPlanesEditComponent implements OnInit {

  errores: string[] = [];
  planes:Plan[] = [];  
  editPlanes:PlanesNuevo = {
    precioPlan: undefined,
    velocidadPlan: undefined
  }

  constructor(private planesService: PlanesService, 
              private currentPlan: PlanActualService,
              private router: Router) { }

  ngOnInit(): void {
    this.currentPlan.currentPlan$.subscribe(plan => this.editPlanes = plan);
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

  editarPlan(){
    this.planesService.editar(this.editPlanes).subscribe(data => {
      this.cargarPLanes();
      this.router.navigate(["/admin/planes-list"]);
      Swal('Plan Editado', 'Plan editado con éxito', 'success');
    },err=>{
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: ' + err.status);
      console.error(err.error.errors);
    });  
  }

}
