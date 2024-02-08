import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PacientesService } from '../services/pacientes.service';
import { PacienteModule } from '../models/paciente/paciente.module';

@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
  styleUrls: ['./form-pacientes.component.css']
})
export class FormPacientesComponent {
  paciente: PacienteModule = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: new Date(),
    genero: '',
    direccion: '',
    telefono: '',
    fecha_ingreso: new Date()
  };

  constructor(private pacienteService: PacientesService) {}

  submitForm() {
    console.log(this.paciente);
    this.pacienteService.guardarPaciente(this.paciente);
    // this.pacienteService.guardarPaciente(this.paciente).subscribe(
    //   res => {
    //     console.log('datos enviados', res);
    //   },
    // )
  }
}
