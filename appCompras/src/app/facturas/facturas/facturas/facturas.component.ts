import { FacturasService } from './../../facturas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas: any = [];

  constructor(private facturasService: FacturasService) {
    this.facturasService.getFacturas().subscribe(facturas => {
      // tslint:disable-next-line:forin
      for (const id$ in facturas) {
        const p = facturas[id$];
        p.id$ = id$;
        this.facturas.push(facturas[id$]);
      }
    });
  }

  ngOnInit() {
  }

  eliminarFactura(id: string) {
    this.facturasService.delFactura(id).subscribe(resultado => {
      this.facturas = [];
      this.facturasService.getFacturas().subscribe(facturas => {
        // tslint:disable-next-line:forin
        for (const id$ in facturas) {
          const p = facturas[id$];
          p.id$ = id$;
          this.facturas.push(facturas[id$]);
        }
      });
    });
  }

}
