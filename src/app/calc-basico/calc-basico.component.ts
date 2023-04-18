import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-basico',
  templateUrl: './calc-basico.component.html',
  styleUrls: ['./calc-basico.component.css']
})
export class CalcBasicoComponent {
  valorA: number = 0;
  valorB: number = 0;
  resultado: number = 0;

  somar()
  {
    this.resultado = this.valorA + this.valorB;
  }

  subtrair()
  {
    this.resultado = this.valorA - this.valorB;
  }

  multiplicar()
  {
    this.resultado = this.valorA * this.valorB;
  }

  dividir()
  {
    this.resultado = this.valorA / this.valorB;
  }
}

