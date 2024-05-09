import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
})
export class SaludoComponent {
  titulo: string = "¡Bienvenido a Angular 16!"
  mensaje: string = "Este es un componente saludo que te saluda desde Angular."
}
