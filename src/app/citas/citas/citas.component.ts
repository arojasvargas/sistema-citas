import { Component } from '@angular/core';
import { CitasInterface } from '../interfaces/citas.interface';
import { CitasBDService } from '../services/citas-bd.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})

export class CitasComponent { 

  constructor(public citasBDService : CitasBDService){

  }

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
    this.citasBDService.citasBD.push(cita)
  }

  title : string = "Formulario para registro de citas"

  agregarCita(){
    this.addCita({...this.cita})
    this.cita ={nombre: "", apellidos : "", email : "", telefono : "", barbero : "", servicios : [], fecha : "", hora : "", comentarios : ""}
  }


}
