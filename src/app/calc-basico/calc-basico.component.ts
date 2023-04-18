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
}
