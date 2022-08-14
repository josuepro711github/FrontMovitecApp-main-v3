import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoDTO, EquipoNuevo } from 'src/app/Models/equipo.model';
import { EquipoService } from 'src/app/Services/equipo.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-equipos-add',
  templateUrl: './admin-equipos-add.component.html',
  styleUrls: ['./admin-equipos-add.component.css']
})
export class AdminEquiposAddComponent implements OnInit {

  formEquipo!: FormGroup;
  equipos: EquipoDTO[] = [];
  nuevoEquipo: EquipoNuevo = {
    marcaEquipo:undefined,
    modeloEquipo:undefined
  }
  constructor(private equipoService: EquipoService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formEquipo = this.fb.group({
      equipo: [
        null, 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      modelo: [
        null, 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ]
    });
  }

  cargarEquipos(){
    setTimeout(
      ()=>{
        this.equipoService.listarEquipos().subscribe(data=>{
          this.equipos = data;
        });
       } , 20
   );
  }

  enviarNuevoEquipo(): void{
    this.equipoService.nuevo(this.nuevoEquipo)
    .subscribe(data=>{
      this.cargarEquipos();
      this.nuevoEquipo={
        marcaEquipo:undefined,
        modeloEquipo:undefined
      }
      this.router.navigate(["/admin/equipos-list"]);
      console.log(this.nuevoEquipo)
      Swal('Nuevo Equipo', `el equipo a sido creado con éxito!`, 'success');
    },err=>{
    });
  }

}
