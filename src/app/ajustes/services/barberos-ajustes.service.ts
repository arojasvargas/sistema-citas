import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BarberosResponse } from '../interfaces/barberos-response';
import { BarberosInterface } from '../interfaces/barberos.interface';

@Injectable({
  providedIn: 'root'
})
export class BarberosAjustesService {

  private readonly API = environment.API

  constructor(private readonly http : HttpClient) { }

  // findAll(): Observable<BarberosInterface[]>{
  //   return this.http.get<BarberosResponse>(`${this.API}/obtener-barberos`).pipe(
  //     map<BarberosResponse, BarberosInterface[]>(res => res.results),
  //     tap(console.log)
  //   )
  // }

  findAll(): Observable<BarberosInterface[]>{
    return this.http.get<BarberosInterface>(`${this.API}/obtener-barberos`).pipe(
      tap(console.log)
    )
  }
}
