import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { FormPacientesComponent } from './form-pacientes/form-pacientes.component';

const routes: Routes = [
  { path: '', component: FormPacientesComponent },
  { path: 'privacidad', component: AvisoPrivacidadComponent },
  // Otras rutas aquí...
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
