import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './presupuestos/addpresupuesto/addpresupuesto.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestosComponent } from './presupuestos/editpresupuestos/editpresupuestos.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { IniciosesionComponent } from './autenticacion/iniciosesion/iniciosesion.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta de inicio
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addproveedor', component: AddproveedorComponent },
  { path: 'addpresupuesto', component: AddpresupuestoComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'editpresupuestos/:id', component: EditpresupuestosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: IniciosesionComponent },
  { path: '**', component: InicioComponent } // Redirige a la página de inicio si no es capaz de resolver la ruta.
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent,
    AddpresupuestoComponent,
    PresupuestosComponent,
    EditpresupuestosComponent,
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
