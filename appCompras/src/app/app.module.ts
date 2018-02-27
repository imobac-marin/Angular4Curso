import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta de inicio
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addproveedor', component: AddproveedorComponent },
  { path: '**', component: InicioComponent } // Redirige a la página de inicio si no es capaz de resolver la ruta.
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
