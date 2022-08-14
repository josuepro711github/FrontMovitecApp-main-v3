import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoDTO, EmpleadoNuevo } from 'src/app/Models/empleado.model';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-empleados-add',
  templateUrl: './admin-empleados-add.component.html',
  styleUrls: ['./admin-empleados-add.component.css']
})
export class AdminEmpleadosAddComponent implements OnInit {

  formEmpleado!: FormGroup;
  private namePattern: any =
  /^([A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ]((\s)?[A-Za-zñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ])?)+$/; //solo letras
  private numeroPattern: any = /^\d+((.)?\d{1,2})?$/; //solo números
  private correoPattern: any = /^[a-zA-Z0-9_\.-]{3,40}@[a-z]{2,20}\.[a-z]{2,10}(\.[a-z]{2,10}){0,2}$/; // patrón correo

  empleados: EmpleadoDTO[] = [];
  nuevoEmpleado:EmpleadoNuevo = {
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
              private fb: FormBuilder) { }

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

  enviarNuevoEmpleado(): void{

    if(!this.formEmpleado.valid){
      Swal({
        title: 'Formulario invalido',
        text: `Complete los datos por favor`,
        type: 'error',
        confirmButtonColor: '#E02D18',
        confirmButtonText: 'OK'
      })
      console.log("FORMULARIO INVALIDADO");
    } else {
      this.empleadoService.nuevo(this.nuevoEmpleado)
    .subscribe(data=>{
      this.cargarEmpleados();
      this.nuevoEmpleado={
        idEmpleado:undefined,
        nombreEmpleado:"",
        apellidosEmpleado:"",
        telefonoEmpleado:"",
        direccionEmpleado:"",
        correoEmpleado:"",
        codigoEmpleado:""
      }
      this.router.navigate(["/admin/empleados-list"]);
      Swal('Nuevo Empleado', `el empleado a sido creado con éxito!`, 'success');
      },err=>{
      });
    }
  }
}
