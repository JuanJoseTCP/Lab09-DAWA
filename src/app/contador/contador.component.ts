import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  valor: number = 0

  incrementar(): void {
    this.valor++;
  }

  disminuir(): void {
    this.valor--;
  }
}
