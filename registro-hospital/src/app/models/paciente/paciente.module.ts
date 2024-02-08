import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PacienteModule {
    nombre: String = ''
		apellido: String = '';
		fecha_nacimiento: Date = new Date();
		genero: String = '';
		direccion: String = '';
		telefono: String = '';
		fecha_ingreso: Date = new Date();
}
