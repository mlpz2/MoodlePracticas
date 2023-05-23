import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {AppComponent} from "./app.component";


function CanActivateDashboard() {

}

//Rutas
const routes: Routes = [
  {path:'root',component:AppComponent},
  {path:'iniciarSesion',component: LoginComponent},
  {path: 'perfil', component: PerfilAlumnoComponent, canActivate: [CanActivateDashboard], },
  {path: 'back-notas', component: BackNotasComponent},
  {path:'notificaciones',component:NotificacionesComponent},
  {path:'alumnos',component:UsuarioComponent},


]


@NgModule({

  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, LoginComponent]
