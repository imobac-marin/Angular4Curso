import { FacturasService } from './../../facturas.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addfactura',
  templateUrl: './addfactura.component.html',
  styleUrls: ['./addfactura.component.css']
})
export class AddfacturaComponent implements OnInit {

  facturaForm: FormGroup;
  factura: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  constructor(private facForm: FormBuilder, private facturasService: FacturasService) { }

  ngOnInit() {
    this.facturaForm = this.facForm.group({
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
    this.facturasService.postFactura(this.factura).subscribe(newFactura => {

    });
    this.facturaForm.reset();
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
