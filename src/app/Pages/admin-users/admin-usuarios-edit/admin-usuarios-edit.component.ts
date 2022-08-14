import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { UsuarioActualService } from 'src/app/Services/usuario-actual.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-admin-usuarios-edit',
  templateUrl: './admin-usuarios-edit.component.html',
  styleUrls: ['./admin-usuarios-edit.component.css']
})
export class AdminUsuariosEditComponent implements OnInit {
  usuarios:UsuarioListDto[] = [];
  editUsuario:UsuarioNuevo = {
    id : 0,
    nombre : "",
    apellidos : "",
    direccion : "",
    tipoDocumento : {
        id :  1
    },
    documento : "",
    estado : true,
    nombreUsuario : "",
    email : "",
    telefono : "",
    password :  "", 
    roles : ["user"]
  }

  constructor( private usuarioService:UsuarioService,
    private currentuser:UsuarioActualService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.currentuser.currentUser$.subscribe(user => this.editUsuario = user)
  }

  cargarUsuarios(){
    setTimeout(
      ()=>{
        this.usuarioService.getAllUsuario().subscribe(data=>{
          this.usuarios = data;
        });
       } , 20
   );
  }

  editarUsuario(){
    this.authService.editar(this.editUsuario).subscribe(data=>{
      this.cargarUsuarios();
      this.router.navigate(['/admin/usuarios-list'])
      Swal('Usuario Editado', `Usuario ${this.editUsuario.nombre} editado con éxito!`, 'success');
    },err=>{
    });
    
  }
}
