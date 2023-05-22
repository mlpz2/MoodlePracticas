import { Component } from '@angular/core';

import { UsuariosService } from '../usuarios.service';
import {Observable,of} from 'rxjs';
import { USUARIOS } from '../listaUsuarios';
import { MessageService } from '../mensaje.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
USUARIOS : any =[];
  getUSUARIOS(): void {
    this.UsuariosService.getUSUARIOS()
        .subscribe(this.USUARIOS = this.USUARIOS);
  }

 

  ngOnInit(): void {
    this.getUSUARIOS();
  }


  
  constructor(private UsuariosService: UsuariosService, private messageService: MessageService) { }
}

