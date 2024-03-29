import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPacientesComponent } from './form-pacientes/form-pacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPacientesComponent,
    HeaderComponent,
    AvisoPrivacidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
