import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addproveedor',
  templateUrl: './addproveedor.component.html',
  styleUrls: ['./addproveedor.component.css']
})
export class AddproveedorComponent implements OnInit {

  @ViewChild('formprov') formprov: NgForm;
  proveedor: any;
  provincias: string[] = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz',
    'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba',
    'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca',
    'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense',
    'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria',
    'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora', 'Zaragoza'
  ];

  constructor() {
    this.proveedor = {
      nombre: '',
      cif: '',
      direccion: '',
      cp: '',
      localidad: '',
      provincia: '',
      telefono: null,
      email: '',
      contacto: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.proveedor.nombre = this.formprov.value.nombre;
    this.proveedor.cif = this.formprov.value.cif;
    this.proveedor.direccion = this.formprov.value.direccion;
    this.proveedor.cp = this.formprov.value.cp;
    this.proveedor.localidad = this.formprov.value.localidad;
    this.proveedor.provincia = this.formprov.value.provincia;
    this.proveedor.telefono = this.formprov.value.telefono;
    this.proveedor.email = this.formprov.value.email;
    this.proveedor.contacto = this.formprov.value.contacto;

    this.formprov.reset();
  }

}
