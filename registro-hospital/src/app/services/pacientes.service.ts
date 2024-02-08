import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PacienteModule } from '../models/paciente/paciente.module';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

   private apiUrl = 'http://localhost:3000/api/register/';

  constructor(private http: HttpClient) { }

  guardarPaciente(paciente: PacienteModule) {
    console.log('Se recibio en el servicio');
    
    this.http.post<any>(this.apiUrl, {data: paciente}).subscribe(
      res => console.log(res)
      
    );
  }
}
