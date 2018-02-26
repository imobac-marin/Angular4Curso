import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  avisos: String[] = ['Aviso1', 'Aviso2', 'Aviso3'];
  texto: String;
  mostrarMensaje(event) {
    this.texto = event + ' marcado como leído';
  }
  constructor() { }

  ngOnInit() {
  }
}
