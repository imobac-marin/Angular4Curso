import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  bdURL = 'https://appcompras-9fd9a.firebaseio.com/presupuestos.json';
  bdTableURL = 'https://appcompras-9fd9a.firebaseio.com/presupuestos';
  constructor(private http: Http) { }

  postPresupuesto(presupuesto: any) {
    const newPresupuesto = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.bdURL, newPresupuesto, { headers })
      .map(resultado => {
        console.log(resultado.json());
        return resultado.json();
      });
  }

  getPresupuestos() { // recuperar todos los presupuestos.
    return this.http.get(this.bdURL).map(resultado => resultado.json());
  }

  getPresupuesto(id$: String) { // recuperar un presupuesto.
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.get(url).map(respuesta => respuesta.json());
  }

  putPresupuesto(presupuesto: any, id$: String) { // actualizar un presupuesto.
    const newPresupuesto = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.put(url, newPresupuesto, { headers }).map(resultado => {
      console.log(resultado.json());
      return resultado.json();
    });
  }

  delPresupuesto(id$: String) {
    const url = `${this.bdTableURL}/${id$}.json`;
    return this.http.delete(url).map(
      respuesta => respuesta.json()
    );
  }

}
