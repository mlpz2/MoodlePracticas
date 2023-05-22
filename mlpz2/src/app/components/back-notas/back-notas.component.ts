import { Component } from '@angular/core';
import { usuario } from 'src/app/usuarios';

import { USUARIOS } from 'src/app/listaUsuarios';
import { asignatura} from 'src/app/asignaturas';
import { ASIGNATURAS } from 'src/app/listaAsignaturas';


@Component({
  selector: 'app-back-notas',
  templateUrl: './back-notas.component.html',
  styleUrls: ['./back-notas.component.css']
})
export class BackNotasComponent {
  usuarios: usuario[] = USUARIOS;
  asignaturas: asignatura [] = ASIGNATURAS;

}
