import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  bdProvURL = 'https://appcompras-9fd9a.firebaseio.com/proveedores.json';
  bdProvTableURL = 'https://appcompras-9fd9a.firebaseio.com/proveedores';
  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newProveedor = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.bdProvURL, newProveedor, { headers })
      .map(resultado => {
        return resultado.json();
      });
  }

  getProveedores() { // recuperar todos los Proveedores.
    return this.http.get(this.bdProvURL).map(resultado => resultado.json());
  }

  getProveedor(id$: string) { // recuperar un Proveedor.
    const url = `${this.bdProvTableURL}/${id$}.json`;
    return this.http.get(url).map(respuesta => respuesta.json());
  }

  putProveedor(proveedor: any, id$: string) { // actualizar un presupuesto.
    const newProveedor = JSON.stringify(proveedor);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.bdProvTableURL}/${id$}.json`;
    return this.http.put(url, newProveedor, { headers }).map(resultado => {
      return resultado.json();
    });
  }

  delProveedor(id$: string) {
    const url = `${this.bdProvTableURL}/${id$}.json`;
    return this.http.delete(url).map(
      respuesta => respuesta.json()
    );
  }

  getProveedoresSearch(busqueda: string) {
    const url = `${this.bdProvURL}?orderBy="nombre"&startAt="${busqueda}"&endAt="${busqueda}\uf8ff"`;
    return this.http.get(url).map(respuesta => respuesta.json());
  }

}
