import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiciosResponse } from '../interfaces/servicios-response';
import { ServiciosInterface } from '../interfaces/servicios.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAjustesService {

  private readonly API = environment.API

  constructor(private http : HttpClient) { }

  // findAll(): Observable<ServiciosInterface[]>{
  //   return this.http.get<ServiciosResponse>(`${this.API}/obtener-servicios`).pipe(
  //     map<ServiciosResponse, ServiciosInterface[]>(res => res.results),
  //     tap(console.log)
  //   )
  // }

  findAll(): Observable<ServiciosInterface[]>{
    return this.http.get<ServiciosInterface>(`${this.API}/obtener-servicios`).pipe(
      tap(console.log)
    )
  }

  create(servicio : ServiciosInterface) : Observable<ServiciosInterface>{
    const body = {
      nombre : servicio.nombre,
      descripcion : servicio.descripcion
    }
    return this.http.post<ServiciosInterface>(`${this.API}/registrar-servicio`, body)
  }

  delete(id : string) : Observable<void>{
    return this.http.delete<void>(`${this.API}/eliminar-servicio/${id}`)
  }
}
