import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerfilAlumnoComponent } from './components/perfil-alumno/perfil-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { BackNotasComponent } from './components/back-notas/back-notas.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    PerfilAlumnoComponent,
    LoginComponent,
    NotificacionesComponent,
    BackNotasComponent,
    UsuarioComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
