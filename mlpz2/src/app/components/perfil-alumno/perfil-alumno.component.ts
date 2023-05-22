import { Component } from '@angular/core';
import { usuario } from 'src/app/usuarios';

import { USUARIOS } from 'src/app/listaUsuarios';
import { asignatura} from 'src/app/asignaturas';
import { ASIGNATURAS } from 'src/app/listaAsignaturas';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent {
  asignaturas: asignatura[] = ASIGNATURAS;
  contenidoVisible = false;
  contenidoVisibleTabla = true

  toggle() {
    this.contenidoVisible = !this.contenidoVisible;
    this.contenidoVisibleTabla = !this.contenidoVisibleTabla;
  }
}
