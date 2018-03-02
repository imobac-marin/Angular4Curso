import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FacturasService } from './../../facturas.service';

@Component({
  selector: 'app-editfactura',
  templateUrl: './editfactura.component.html',
  styleUrls: ['./editfactura.component.css']
})
export class EditfacturaComponent implements OnInit {

  facturaForm: FormGroup;
  factura: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;

  constructor(private facturaF: FormBuilder,
    private facturasService: FacturasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.facturasService.getFactura(this.id).subscribe(
        factura => this.factura = factura
      );
    });
  }

  ngOnInit() {
    this.facturaForm = this.facturaF.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }

  onChanges(): void {
    this.facturaForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.facturaForm.value.iva = this.base * this.tipo;
      this.facturaForm.value.total = this.base + (this.base * this.tipo);
    });
  }

  onSubmit() {
    this.factura = this.saveFactura();
    this.facturasService.putFactura(this.factura, this.id).subscribe(newFactura => {
      this.router.navigate(['/facturas']);
    });
  }

  saveFactura() {
    const saveFactura = {
      proveedor: this.facturaForm.get('proveedor').value,
      fecha: this.facturaForm.get('fecha').value,
      concepto: this.facturaForm.get('concepto').value,
      base: this.facturaForm.get('base').value,
      tipo: this.facturaForm.get('tipo').value,
      iva: this.facturaForm.get('iva').value,
      total: this.facturaForm.get('total').value
    };
    return saveFactura;
  }

}
