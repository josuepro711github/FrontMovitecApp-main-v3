import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { UsuarioListDto, UsuarioNuevo } from 'src/app/Models/usuario.model';
import { AuthService } from 'src/app/Services/auth.service';
import { throttleTime } from 'rxjs';
import { InstalacionesService } from 'src/app/Services/instalaciones.service';
import { InstalacionDTO } from 'src/app/Models/instalacion.model';
import { NotificacionService } from 'src/app/Services/notificacion.service';
import { UsuarioActualService } from 'src/app/Services/usuario-actual.service';
import Swal from 'sweetalert2'; 
import { InstalacionesActualService } from 'src/app/Services/instalaciones-actual.service';

@Component({
  selector: 'app-admin-usuarios-list',
  templateUrl: './admin-usuariosv2.component.html',
  styleUrls: ['./admin-usuariosv2.component.css']
})
export class AdminUsuariosv2Component implements OnInit {

  usuarios:UsuarioListDto[] = [];
  instalaciones:InstalacionDTO[] = [];
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

  constructor(
    private usuarioService:UsuarioService,
    private currentInstalaciones:InstalacionesActualService,
    private authService:AuthService,
    private instalacionesService:InstalacionesService,
    private notificacionService:NotificacionService,
    private currentUser:UsuarioActualService) { }

  ngOnInit(): void {
    this.usuarioService.getAllUsuario().subscribe(data=>{
      this.usuarios = data;
      this.cargarUsuarios();
    });
  }

  showModalEliminar(id:number){
    Swal({
      title: 'Eliminar Usuario',
      text: `Deseas eliminar al usuario?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Eliminado!',
          'Usuario eliminado satisfactoriamente.',
          'success'
        )
        //metodo eliminar
        this.deleteUser(id);
      }
    })
  }

  deleteUser(id:number){
    this.usuarioService.deleteById(id);
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    setTimeout(
      ()=>{
        this.usuarioService.getAllUsuario().subscribe(data=>{
          this.usuarios = data;
        });
       } , 100
   );
  }

  detailUser(index:number){
    this.instalacionesService.getAllByClienteId(this.usuarios[index].id).subscribe(data=>{
      this.instalaciones = data;
      this.currentInstalaciones.setInstalacion(this.instalaciones);
      console.log(this.instalaciones);
    });
  }

  enviarCorreo(){
    this.notificacionService.enviarCorreo().subscribe(data=>{
      Swal('Mensaje ', `Mensaje enviado con éxito!`, 'success')
      console.log(data?"Se notificó correctamente a los clientes":"Lo siento, ocurrió un error");
      
    });
  }

  
  loadUsuario(index:number){
    this.editUsuario = {
      id : this.usuarios[index].id,
      nombre : this.usuarios[index].nombre,
      apellidos : this.usuarios[index].apellidos,
      direccion : this.usuarios[index].direccion,
      tipoDocumento : {
          id :  this.usuarios[index].tipo==="DNI"?1:2
      },
      documento : this.usuarios[index].documento,
      estado : this.usuarios[index].estado,
      nombreUsuario : this.usuarios[index].nombre_Usuario,
      email : this.usuarios[index].correo,
      telefono : this.usuarios[index].telefono,
      password : "",
      roles : ["user"]
    }
    this.currentUser.setuser(this.editUsuario);
  }

}
