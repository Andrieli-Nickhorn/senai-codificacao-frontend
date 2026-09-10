import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [CommonModule, FormsModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css'
})
export class ConversorComponent {

  valor: number = 0;
  resultado: number = 0;
  calculado: boolean = false;
  mensagemErro: string = '';

  paraFahrenheit() {
    this.resultado = this.valor * 9 / 5 + 32;
    this.mensagemErro = '';
    this.calculado = true;
  }

  paraKelvin() {
    if (this.valor < -273.15) {
      this.mensagemErro = 'Temperatura abaixo do zero absoluto!';
      this.calculado = false;
      return;
    }

    this.mensagemErro = '';
    this.resultado = this.valor + 273.15;
    this.calculado = true;
  }

  paraReaumur() {
    this.resultado = this.valor * 4 / 5;
    this.mensagemErro = '';
    this.calculado = true;
  }

  limpar() {
    this.valor = 0;
    this.resultado = 0;
    this.calculado = false;
    this.mensagemErro = '';
  }
}