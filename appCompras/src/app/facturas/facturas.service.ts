import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class FacturasService {

  bdURL = 'https://appcompras-9fd9a.firebaseio.com/facturas.json';
  bdTableURL = 'https://appcompras-9fd9a.firebaseio.com/facturas';
  constructor(private http: Http) { }

  postFactura(factura: any) {
    const newFactura = JSON.stringify(factura);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.bdURL, newFactura, { headers })
      .map(resultado => {
        console.log(resultado.json());
        return resultado.json();
      });
  }

  getFacturas() {
    return this.http.get(this.bdURL).map(resultado => resultado.json());
  }

  getFactura(id$: string) {
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.get(url).map(respuesta => respuesta.json());
  }

  putFactura(presupuesto: any, id$: string) {
    const newPresupuesto = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.put(url, newPresupuesto, { headers }).map(resultado => {
      console.log(resultado.json());
      resultado.json();
    });
  }

  delFactura(id$: string) {
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.delete(url).map(
      respuesta => respuesta.json()
    );
  }
}
