import { Alumno } from './../modelos/alumno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {

  alumno1 = new Alumno(1, 'Pepe', 'Pérez', 'Madrid');

  constructor() { }

  ngOnInit() {
  }

}
