import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  bdURL = 'https://appcompras-9fd9a.firebaseio.com/presupuestos.json';
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

}
