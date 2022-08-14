import { Component, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/Services/planes.service';
import { Plan, PlanesNuevo } from 'src/app/Models/plan.model';
import Swal from 'sweetalert2'; 
import { PlanActualService } from 'src/app/Services/plan-actual.service';

@Component({
  selector: 'app-admin-planes-list',
  templateUrl: './admin-planes-list.component.html',
  styleUrls: ['./admin-planes-list.component.css']
})
export class AdminPlanesListComponent implements OnInit {

  planes:Plan[] = [];
  editPlanes:PlanesNuevo = {
    precioPlan: undefined,
    velocidadPlan: undefined
  }

  constructor(private planesService:PlanesService, private currentPlan: PlanActualService) { }

  ngOnInit(): void {
    this.planesService.getAllPlanes().subscribe(data=>{
      this.planes = data;
    });
  }

  showModalEliminar(id:number){
    Swal({
      title: 'Eliminar Plan',
      text: `Deseas eliminar este plan?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Eliminado!',
          'Plan eliminado satisfactoriamente.',
          'success'
        )
        //metodo eliminar
        this.deletePlan(id);
      }
    })
  }

  deletePlan(id:number){
    this.planesService.deleteById(id);
    this.cargarPlanes();
  }

  cargarPlanes(){
    setTimeout(
      ()=>{
        this.planesService.getAllPlanes().subscribe(data=>{
          this.planes = data;
        });
       } , 100
   );
  }

  loadPlan(index: number){
    this.editPlanes = {
      id: this.planes[index].id,
      precioPlan: this.planes[index].precio,
      velocidadPlan: this.planes[index].velocidad
    }
    this.currentPlan.setPlan(this.editPlanes);
  }

}
