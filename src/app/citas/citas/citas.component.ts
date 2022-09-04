import { Component } from '@angular/core';
import { CitasInterface } from '../interfaces/citas.interface';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})

export class CitasComponent { 

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

  cita : CitasInterface = {
    nombre: "", 
    apellidos : "",
    email : "",
    telefono : "",
    barbero : "",
    servicios : [],
    fecha : "",
    hora : "",
    comentarios : ""
  }

  addCita = (cita: CitasInterface) => {
    this.citasBD.push(cita)
  }

  title : string = "Formulario para registro de citas"

  agregarCita(){
    this.addCita({...this.cita})
    this.cita ={nombre: "", apellidos : "", email : "", telefono : "", barbero : "", servicios : [], fecha : "", hora : "", comentarios : ""}
  }


}
