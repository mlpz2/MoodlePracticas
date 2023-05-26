import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Cierra la barra de navegación
  @ViewChild('navbarCollapse', { static: false}) navbarCollapse!: ElementRef;
  cerrarMenu() {
    this.navbarCollapse?.nativeElement.classList.remove('show');
  }

  existsToken(): boolean {
    if (localStorage.getItem('token') == null){
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
