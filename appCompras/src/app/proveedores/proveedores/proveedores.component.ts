import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  mensaje: String;
  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getProveedores();
  }

}
