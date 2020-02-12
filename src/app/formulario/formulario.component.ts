import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  operador1: number;
  operador2: number;
  @Output() resultadoEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSumar(op1: number, op2: number) {

    let resultado: number;
    resultado = +op1 + +op2;

    this.resultadoEvent.emit(resultado);


  }

}
