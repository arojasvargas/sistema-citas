import { Component, OnInit } from '@angular/core';
import { ServiciosInterface } from '../interfaces/servicios.interface';
import { ServiciosAjustesService } from '../services/servicios-ajustes.service';

@Component({
  selector: 'app-ajustes-servicios-lista',
  templateUrl: './ajustes-servicios-lista.component.html',
  styleUrls: ['./ajustes-servicios-lista.component.css']
})
export class AjustesServiciosListaComponent implements OnInit {

  title : string = "Listado de servicios"
  listaServicios : ServiciosInterface[] = []

  constructor(private serviciosAjustesService :  ServiciosAjustesService) { }

  ngOnInit(): void {
    this.serviciosAjustesService.findAll().subscribe( data => this.listaServicios = data )
  }

  deleteRow(id : string){
    this.serviciosAjustesService.delete(id).subscribe(
      (res) => {
        console.log(res)
      })
  }

}
