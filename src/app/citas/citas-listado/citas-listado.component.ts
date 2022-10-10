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
  alerta : boolean = false

  constructor( private citasService : CitaService ){  }
  
   ngOnInit(): void {
    this.citasService.findAll().subscribe( data => this.nuevaListaCitas = data )
  }

  deleteRow(id : string){
    this.citasService.delete(id).subscribe(
      (res) => {
        console.log(res)
        this.alerta = true
        this.ngOnInit()
      })
  }
  
}
