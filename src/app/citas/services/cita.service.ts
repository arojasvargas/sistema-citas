import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CitasInterface } from '../interfaces/citas.interface';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private baseUrl : string = 'https://sistema-citas-api.azurewebsites.net/api'
  //Nota: Puede que la data de esta API no esté disponible al momento de accesarla porque está hosteada usando un plan Free en Azure y da un limite diario de uptime
  //Enlace al repositorio de la API https://github.com/arojasvargas/sistema-citas-api

  constructor(private http : HttpClient) { }

  getAll() : Observable<CitasInterface[]> {
    const url = `${this.baseUrl}/obtener-citas`
    return this.http.get<CitasInterface[]>(url)
  }
}
