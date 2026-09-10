import { Component } from '@angular/core';
import { ConversorComponent } from './conversor/conversor';

@Component({
  selector: 'app-root',
  imports: [ConversorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}