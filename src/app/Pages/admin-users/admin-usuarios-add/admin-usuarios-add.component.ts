import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-usuarios-add',
  templateUrl: './admin-usuarios-add.component.html',
  styleUrls: ['./admin-usuarios-add.component.css']
})
export class AdminUsuariosAddComponent implements OnInit {

  form!: FormGroup;
  errores: string[] = [];
  error_user: string = "";
  error_email: string = "";
  bandera:boolean = false;

  usuarios:UsuarioListDto[] = [];
  nuevoUsuario:UsuarioNuevo = {
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

  constructor( 
    private usuarioService:UsuarioService,
    private authService:AuthService,
    private router: Router,
    private fb: FormBuilder) {}

  ngOnInit(): void {
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

  enviarNuevoUsuario(): void{
      this.authService.nuevo(this.nuevoUsuario)
      .subscribe(data=>{
          this.cargarUsuarios();
          this.nuevoUsuario={
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
        this.router.navigate(['/admin/usuarios-list'])
        Swal('Nuevo Usuario', `Usuario ${this.nuevoUsuario.nombre} creado con éxito!`, 'success')
      },err=>{
          this.bandera = true
          this.error_user = err.error.error_user as string;
          this.errores = err.error.errors as string[];   
          this.error_email = err.error.error_email as string;
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);

          console.error(err.error.error_user);
          console.error(err.error.error_email);
      }); 
  }    

}
