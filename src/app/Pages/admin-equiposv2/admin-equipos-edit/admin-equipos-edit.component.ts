import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipoDTO, EquipoNuevo } from 'src/app/Models/equipo.model';
import { EquipoActualService } from 'src/app/Services/equipo-actual.service';
import { EquipoService } from 'src/app/Services/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-equipos-edit',
  templateUrl: './admin-equipos-edit.component.html',
  styleUrls: ['./admin-equipos-edit.component.css']
})
export class AdminEquiposEditComponent implements OnInit {

  formEquipo!: FormGroup;
  equipos: EquipoDTO[] = [];
  editEquipo: EquipoNuevo = {
    marcaEquipo:undefined,
    modeloEquipo:undefined
  }
  constructor(private router: Router,
              private equipoService: EquipoService,
              private currentEquipo: EquipoActualService,
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

    this.currentEquipo.$currentEquipo.subscribe(equipo => this.editEquipo = equipo);
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

  editarEquipo(){
    this.equipoService.editar(this.editEquipo).subscribe(data=>{
      this.cargarEquipos();
      this.router.navigate(["/admin/equipos-list"]);
      Swal('Equipo Editado', 'Equipo editado con éxito', 'success');
    },err=>{
    }
    );
  }

}
