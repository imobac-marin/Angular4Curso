import { ProveedoresService } from './../../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any = [];
  cargando = false;

  campoBusqueda: FormControl;
  busqueda: string;
  resultados = false;
  noResultados = false;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges.subscribe(terminoBusqueda => {
      this.busqueda = terminoBusqueda;
      this.cargando = true;
      if (this.busqueda.length !== 0) {
        this.proveedoresService.getProveedoresSearch(this.busqueda).subscribe(proveedores => {
          this.proveedores = [];
          // tslint:disable-next-line:forin
          for (const id$ in proveedores) {
            const p = proveedores[id$];
            p.id$ = id$;
            this.proveedores.push(proveedores[id$]);
          }
          if (this.proveedores.length < 1 && this.busqueda.length >= 1) {
            this.noResultados = true;
          } else {
            this.noResultados = false;
          }
        });
        this.cargando = false;
        this.resultados = true;
      } else {
        this.proveedores = [];
        this.cargando = false;
        this.resultados = false;
      }
    });
  }
}
