import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  restaurante: string;
  ciudad: string;
  @Output()
  salidaRestaurante = new EventEmitter();
  @Output()
  salidaCiudad = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  limpiarCampos() {
    this.ciudad = '';
    this.restaurante = '';
  }

  guardar(forma: any) {
    console.log(forma);
    if (this.restaurante && this.ciudad) {
      this.salidaRestaurante.emit(this.restaurante);
      this.salidaCiudad.emit(this.ciudad);
      this.limpiarCampos();
    }
  }
}
