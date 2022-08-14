import { Component, OnInit } from '@angular/core';
import { EquipoDTO, EquipoNuevo } from 'src/app/Models/equipo.model';
import { EquipoActualService } from 'src/app/Services/equipo-actual.service';
import { EquipoService } from 'src/app/Services/equipo.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-equipos-list',
  templateUrl: './admin-equipos-list.component.html',
  styleUrls: ['./admin-equipos-list.component.css']
})
export class AdminEquiposListComponent implements OnInit {

  equipos:EquipoDTO[] = [];
  editEquipo:EquipoNuevo = {
    marcaEquipo:undefined,
    modeloEquipo:undefined
  }
  constructor(private equipoService: EquipoService, private currentEquipo: EquipoActualService) { }

  ngOnInit(): void {
    this.equipoService.listarEquipos().subscribe(data=>{
      this.equipos = data;
    });
  }

  showModalEliminar(id:number){
    Swal({
      title: 'Eliminar Equipo',
      text: `Deseas eliminar este Equipo?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Eliminado!',
          'Equipo eliminado satisfactoriamente.',
          'success'
        )
        //metodo eliminar
        this.deleteEquipo(id);
      }
    })
  }

  deleteEquipo(id:number){
    this.equipoService.eliminarPorId(id);
    this.cargarEquipos();
  }

  cargarEquipos(){
    setTimeout(
      ()=>{
        this.equipoService.listarEquipos().subscribe(data=>{
          this.equipos = data;
        });
       } , 100
   );
  }

  loadEquipo(index:number){
    this.editEquipo = {
      idEquipo: this.equipos[index].idEquipo,
      marcaEquipo: this.equipos[index].marcaEquipo,
      modeloEquipo: this.equipos[index].modeloEquipo
    }
    this.currentEquipo.setEquipo(this.editEquipo);
  }

}
