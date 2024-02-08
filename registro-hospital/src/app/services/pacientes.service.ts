import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

   private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  guardarPaciente(paciente: Paciente): Observable<Paciente> {
    console.log('Se recibio en el servicio');
    
    return this.http.post<Paciente>(`${this.apiUrl}/register`, paciente);
  }

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/users`);
=======
  guardarPaciente(paciente: Paciente) {
    console.log('Se recibio en el servicio');
    
    this.http.post<any>(this.apiUrl, {data: paciente}).subscribe(
      res => console.log(res)
    );
>>>>>>> 51d93e7e32428f0455b9989fb19bbe6d8cc5a979
  }

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/pacientes`);
  }
}
