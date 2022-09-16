import { Component, OnInit } from '@angular/core';
import { CitasInterface } from '../interfaces/citas.interface';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-citas-listado',
  templateUrl: './citas-listado.component.html',
  styleUrls: ['./citas-listado.component.css']
})
export class CitasListadoComponent implements OnInit {

  nuevaListaCitas : CitasInterface[] = []

  constructor( private citasService : CitaService ){  }


  title : string = "Listado de citas"
  headers = ["Nombre", "Apellidos", "Teléfono", "Barbero", "Servicios", "Fecha", "Hora"]

  ngOnInit(): void {
    this.citasService.getAll().subscribe( data => this.nuevaListaCitas = data )
  }
  
}
