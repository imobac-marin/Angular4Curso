import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaactualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
