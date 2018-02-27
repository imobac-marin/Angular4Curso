import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any = [
    {
      nombre: 'Timofónica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellita, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 911111111,
      email: 'info@timofonica.com',
      contacto: 'Juan Pérez'
    },
    {
      nombre: 'Ibertrola',
      cif: 'B87654321',
      direccion: 'Príncipe de Verga, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: 922222222,
      email: 'info@ibertrola.com',
      contacto: 'Laura Martínez'
    }
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }

}
