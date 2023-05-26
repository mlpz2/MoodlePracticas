import {Component, OnInit} from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuario';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: string = '';


  constructor(private usuariosServices: UsuariosService,
              private router: Router){}

  loginUser(){
    const usuario = new Usuario(this.username, this.password);
    this.usuariosServices.login(usuario).subscribe(
      data => {
        const token = data.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/home']);
      },
        (err: { error: any; }) => {
        console.log(err.error);
      }
    );
  }

  ngOnInit(){
    if(localStorage.getItem('token') !== null){
      this.router.navigate(['/home']);
      this.RememberPassword = localStorage.getItem("checkbox_estado") === "true";

    }
  }

  protected RememberPassword: boolean | String | undefined ;


  onCheckboxChange() {
    // @ts-ignore
    localStorage.setItem("checkbox_estado", this.RememberPassword.toString());
  }
}

