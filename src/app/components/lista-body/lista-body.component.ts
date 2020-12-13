import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-body',
  templateUrl: './lista-body.component.html',
  styleUrls: ['./lista-body.component.css'],
})
export class ListaBodyComponent implements OnInit {
  @Input()
  restaurantes: string[];
  @Input()
  ciudades: string[];

  constructor() {}

  ngOnInit(): void {}
}
