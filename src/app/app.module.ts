import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent,
    CopyrightComponent,
    ViewmodeloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
