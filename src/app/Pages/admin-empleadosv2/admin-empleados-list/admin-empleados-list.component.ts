import { Component, OnInit } from '@angular/core';
import { EmpleadoDTO, EmpleadoNuevo } from 'src/app/Models/empleado.model';
import { EmpleadoActualService } from 'src/app/Services/empleado-actual.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-empleados-list',
  templateUrl: './admin-empleados-list.component.html',
  styleUrls: ['./admin-empleados-list.component.css']
})
export class AdminEmpleadosListComponent implements OnInit {

  empleados:EmpleadoDTO[] = [];
  editEmpleado:EmpleadoNuevo = {
    idEmpleado:undefined,
    nombreEmpleado:"",
    apellidosEmpleado:"",
    telefonoEmpleado:"",
    direccionEmpleado:"",
    correoEmpleado:"",
    codigoEmpleado:""
  }
  
  constructor(private empleadoService:EmpleadoService, private currentEmpleado: EmpleadoActualService) { }

  ngOnInit(): void {
    this.empleadoService.getAllEmpleados().subscribe(data=>{
      this.empleados = data;
    });
  }

  cargarEmpleados(){
    setTimeout(
      ()=>{
        this.empleadoService.getAllEmpleados().subscribe(data=>{
          this.empleados = data;
        });
       } , 20
   );
  }

  deleteEmpleado(id:number){
    this.empleadoService.eliminarPorId(id);
    this.cargarEmpleados();
  }

  showModalEliminar(id:number){
    Swal({
      title: 'Eliminar Empleado',
      text: `Deseas eliminar este empleado?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Eliminado!',
          'Empleado eliminado satisfactoriamente.',
          'success'
        )
        //metodo eliminar
        this.deleteEmpleado(id);
      }
    })
  }

  loadEmpleado(index:number){
    this.editEmpleado = {
      idEmpleado: this.empleados[index].idEmpleado,
      nombreEmpleado: this.empleados[index].nombreEmpleado,
      apellidosEmpleado: this.empleados[index].apellidosEmpleado,
      telefonoEmpleado: this.empleados[index].telefonoEmpleado,
      direccionEmpleado: this.empleados[index].direccionEmpleado,
      correoEmpleado: this.empleados[index].correoEmpleado,
      codigoEmpleado: this.empleados[index].codigoEmpleado
    }
    this.currentEmpleado.setEmpleado(this.editEmpleado);
  }

}
