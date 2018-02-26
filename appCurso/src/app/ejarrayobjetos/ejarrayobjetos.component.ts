import { Alumno } from './../modelos/alumno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Pepe', apellidos: 'Pérez', ciudad: 'Madrid' },
    { id: 2, nombre: 'Juan', apellidos: 'Pérez', ciudad: 'Barcelona' },
    { id: 3, nombre: 'Pedro', apellidos: 'López', ciudad: 'Sevilla' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
