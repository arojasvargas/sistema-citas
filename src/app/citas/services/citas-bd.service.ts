import { Injectable } from '@angular/core';
import { CitasInterface } from '../interfaces/citas.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasBDService {

  public citasBD : CitasInterface[] = [
    {
      nombre: "Alexander", 
      apellidos : "Rojas Vargas",
      email : "alexander@outlook.com",
      telefono : "8855-6644",
      barbero : "Alonso Aguilar",
      servicios : ["Corte", "Depilacion"],
      fecha : "2022-09-03",
      hora : "6:00PM",
      comentarios : ""
    }
  ]

  constructor() { }
}
