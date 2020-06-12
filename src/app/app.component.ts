import { Component } from '@angular/core';
//import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-app';

  nombre: string = "Panero";

  matriz = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234; 

  salario: number = 1250.50;

  fecha: Date = new Date();

  heroes = {
    nombre: 'José', apellido: 'Panero', edad: '47', direccion: { calle: 'Bruc', numero: '19', piso: '2º'}
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Se obtuvieron los datos');
    }, 4500);
  });
}