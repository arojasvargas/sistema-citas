import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CitasResponse } from '../interfaces/citas-response';
import { CitasInterface } from '../interfaces/citas.interface';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private readonly API = environment.API
  
  constructor(private readonly http : HttpClient) { }

  findAll() : Observable<CitasInterface[]> {
    return this.http.get<CitasResponse>(`${this.API}/obtener-citas`).pipe(
            // map<CitasResponse, CitasInterface[]>(res => res.results),
            tap(console.log)
    )
  }

  create(cita : CitasInterface) : Observable<CitasInterface>{
    const body = {
      telefono : cita.telefono,
      nombre : cita.nombre,
      apellidos : cita.apellidos,
      email : cita.email,
      barbero : cita.barbero,
      servicios : cita.servicios,
      fecha : cita.fecha,
      hora : cita.hora,
      comentarios : cita.comentarios
    }
    return this.http.post<CitasInterface>(`${this.API}/registrar-cita`, body)
  }
}

