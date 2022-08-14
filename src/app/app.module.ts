import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Components/body/body.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { PublicComponent } from './Pages/public/public.component';
import { ClientComponent } from './Pages/client/client.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { interceptorProvider } from './Interceptors/interceptor1.service';
import { MenuAdminComponent } from './Components/menu-admin/menu-admin.component';
import { UsuariosAdminComponent } from './Components/usuarios-admin/usuarios-admin.component';
import { AdminCambiaContraComponent } from './Pages/admin-cambia-contra/admin-cambia-contra.component';
import { MenuClientComponent } from './Components/menu-client/menu-client.component';
import { ClientInicioComponent } from './Pages/client-inicio/client-inicio.component';
import { AcercaDeNosotrosComponent } from './Pages/acerca-de-nosotros/acerca-de-nosotros.component';
import { Headerv2Component } from './Components/headerv2/headerv2.component';
import { HeaderPrincipalComponent } from './Components/header-principal/header-principal.component';
import { HomeComponent } from './Pages/home/home.component';
import { PlanesComponent } from './Pages/planes/planes.component';
import { AdminUsuariosv2Component } from './Pages/admin-users/admin-usuariosv2/admin-usuariosv2.component';
import { AdminUsuariosAddComponent } from './Pages/admin-users/admin-usuarios-add/admin-usuarios-add.component';
import { AdminUsuariosEditComponent } from './Pages/admin-users/admin-usuarios-edit/admin-usuarios-edit.component';
import { AdminUsuariosInfoComponent } from './Pages/admin-users/admin-usuarios-info/admin-usuarios-info.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AdminPlanesListComponent } from './Pages/admin-planesv2/admin-planes-list/admin-planes-list.component';
import { AdminPlanesAddComponent } from './Pages/admin-planesv2/admin-planes-add/admin-planes-add.component';
import { AdminPlanesEditComponent } from './Pages/admin-planesv2/admin-planes-edit/admin-planes-edit.component';
import { ClientReciboComponent } from './Pages/client-recibo/client-recibo.component';
import { AdminEmpleadosAddComponent } from './Pages/admin-empleadosv2/admin-empleados-add/admin-empleados-add.component';
import { AdminEmpleadosEditComponent } from './Pages/admin-empleadosv2/admin-empleados-edit/admin-empleados-edit.component';
import { AdminEmpleadosListComponent } from './Pages/admin-empleadosv2/admin-empleados-list/admin-empleados-list.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AdminEquiposAddComponent } from './Pages/admin-equiposv2/admin-equipos-add/admin-equipos-add.component';
import { AdminEquiposListComponent } from './Pages/admin-equiposv2/admin-equipos-list/admin-equipos-list.component';
import { AdminEquiposEditComponent } from './Pages/admin-equiposv2/admin-equipos-edit/admin-equipos-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    PublicComponent,
    ClientComponent,
    AdminComponent,
    MenuAdminComponent,
    UsuariosAdminComponent,
    AdminCambiaContraComponent,
    MenuClientComponent,
    ClientInicioComponent,
    AcercaDeNosotrosComponent,
    Headerv2Component,
    HeaderPrincipalComponent,
    HomeComponent,
    ContactComponent,
    PlanesComponent,
    AdminUsuariosv2Component,
    AdminUsuariosAddComponent,
    AdminUsuariosEditComponent,
    AdminUsuariosInfoComponent,
    AdminPlanesListComponent,
    AdminPlanesAddComponent,
    AdminPlanesEditComponent,
    ClientReciboComponent,
    AdminEmpleadosAddComponent,
    AdminEmpleadosEditComponent,
    AdminEmpleadosListComponent,
    AdminEquiposAddComponent,
    AdminEquiposListComponent,
    AdminEquiposEditComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule,
    AppRoutingModule,
    NgxCaptchaModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
