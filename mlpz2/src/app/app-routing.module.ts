import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';
import { UsuarioComponent } from './usuario/usuario.component';


//Rutas
const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path: 'perfil', component: PerfilAlumnoComponent},
  {path: 'back-notas', component: BackNotasComponent},
  {path:'notificaciones',component:NotificacionesComponent},
  {path:'alumnos',component:UsuarioComponent},


]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
