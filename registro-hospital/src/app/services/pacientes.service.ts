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

  guardarPaciente(paciente: Paciente): Observable<Paciente> {
    console.log('Se recibio en el servicio');
    
    return this.http.post<Paciente>(`${this.apiUrl}/register`, paciente);
  }

  obtenerPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.apiUrl}/users`);
  }
}
