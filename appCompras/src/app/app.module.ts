import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacturasModule } from './facturas/facturas.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './config/firebase.config';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './presupuestos/addpresupuesto/addpresupuesto.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestosComponent } from './presupuestos/editpresupuestos/editpresupuestos.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { IniciosesionComponent } from './autenticacion/iniciosesion/iniciosesion.component';
import { FacturasComponent } from './facturas/facturas/facturas/facturas.component';
import { EditfacturaComponent } from './facturas/facturas/editfactura/editfactura.component';
import { AddfacturaComponent } from './facturas/facturas/addfactura/addfactura.component';

import { ProveedoresService } from './servicios/proveedores.service';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { GuardService } from './servicios/guard.service';

const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta de inicio
  { path: 'proveedores', component: ProveedoresComponent, canActivate: [GuardService] },
  { path: 'addproveedor', component: AddproveedorComponent, canActivate: [GuardService] },
  { path: 'addpresupuesto', component: AddpresupuestoComponent, canActivate: [GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate: [GuardService] },
  { path: 'editpresupuestos/:id', component: EditpresupuestosComponent, canActivate: [GuardService] },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: IniciosesionComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'addfactura', component: AddfacturaComponent },
  { path: 'editfactura/:id', component: EditfacturaComponent },
  { path: '**', component: InicioComponent } // Redirige al componente de inicio si no es capaz de resolver la ruta.
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
    HttpModule,
    FacturasModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService,
    GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
