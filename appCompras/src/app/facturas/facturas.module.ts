import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FacturasComponent } from './facturas/facturas/facturas.component';
import { AddfacturaComponent } from './facturas/addfactura/addfactura.component';
import { EditfacturaComponent } from './facturas/editfactura/editfactura.component';

import { FacturasService } from './facturas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [AddfacturaComponent, EditfacturaComponent, FacturasComponent],
  providers: [FacturasService]
})
export class FacturasModule { }
