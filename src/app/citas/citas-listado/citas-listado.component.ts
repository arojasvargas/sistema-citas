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
  title : string = "Listado de citas"

  constructor( private citasService : CitaService ){  }
  
   ngOnInit(): void {
    this.citasService.findAll().subscribe( data => this.nuevaListaCitas = data )
  }
  
}
