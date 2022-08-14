import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoDTO, EmpleadoNuevo } from 'src/app/Models/empleado.model';
import { EmpleadoActualService } from 'src/app/Services/empleado-actual.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-empleados-edit',
  templateUrl: './admin-empleados-edit.component.html',
  styleUrls: ['./admin-empleados-edit.component.css']
})
export class AdminEmpleadosEditComponent implements OnInit {

  formEmpleado!: FormGroup;
  private namePattern: any =
  /^([A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ]((\s)?[A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ])?)+$/; //solo letras
  private numeroPattern: any = /^\d+((.)?\d{1,2})?$/; //solo números
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo
  empleados: EmpleadoDTO[] = [];
  editEmpleado:EmpleadoNuevo = {
    idEmpleado:undefined,
    nombreEmpleado:"",
    apellidosEmpleado:"",
    telefonoEmpleado:"",
    direccionEmpleado:"",
    correoEmpleado:"",
    codigoEmpleado:""
  }

    constructor(private empleadoService: EmpleadoService, 
                private router: Router,
                private fb: FormBuilder,
                private currenEmpleado: EmpleadoActualService) { }

  ngOnInit(): void {
    this.formEmpleado = this.fb.group({
      nombre: [
        null, 
        [
          Validators.required,
          Validators.pattern(this.namePattern)
        ]
      ],
      apellido: [
        null, 
        [
          Validators.required,
          Validators.pattern(this.namePattern)
        ]
      ],
      telefono: [
        null, 
        [
          Validators.required,
          Validators.minLength(9),
          Validators.pattern(this.numeroPattern)
        ]
      ],
      direccion: [
        null,[Validators.required]
      ],
      correo: [
        null,
        [
          Validators.required,
          Validators.pattern(this.correoPattern)
        ]
      ],
      codigo: [
        null, 
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ]
    });

    this.currenEmpleado.$currentEmpleado.subscribe(empleado => this.editEmpleado = empleado);
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

  editarEmpleado(){
    this.empleadoService.editar(this.editEmpleado).subscribe(data=>{
      this.cargarEmpleados();
      this.router.navigate(["/admin/empleados-list"]);
      Swal('Empleado Editado', 'Empleado editado con éxito', 'success');
    },err=>{
    }
    );
  }

}
