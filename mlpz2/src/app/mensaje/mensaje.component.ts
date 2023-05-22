import { Component } from '@angular/core';
import { MessageService } from '../mensaje.service'; 

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  constructor(public messageService: MessageService) {}

}

