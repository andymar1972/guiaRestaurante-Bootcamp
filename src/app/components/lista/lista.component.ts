import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  restaurantes: string[] = ['El Soperito'];
  ciudades: string[] = ['La Victoria'];
  validacion: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  agregarRestaurante(restaurant: string) {
    if (!this.restaurantes.includes(restaurant)) {
      this.restaurantes.unshift(restaurant);
    } else {
      this.validacion = false;
    }
  }
  agregarCiudad(ciudad: string) {
    if (this.validacion) {
      this.ciudades.unshift(ciudad);
    }
  }
}
