import { Injectable } from '@angular/core';
import { usuario } from './usuarios';
//import { USUARIOS } from './usuarios-mock';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './mensaje.service';
import { Observable, of } from 'rxjs';
import { USUARIOS } from './listaUsuarios';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  getUSUARIOS(): Observable < usuario[] > {
    const observableUsuarios = of(USUARIOS);

this.messageService.add('Servicio de Usuarios: Usuarios recuperados');
return observableUsuarios;

  }

  constructor (private messageService: MessageService){}
     
  }

 
 
