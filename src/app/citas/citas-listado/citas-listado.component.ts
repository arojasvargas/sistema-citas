import { Component, Input } from '@angular/core';
import { CitasInterface } from '../interfaces/citas.interface';

@Component({
  selector: 'app-citas-listado',
  templateUrl: './citas-listado.component.html',
  styleUrls: ['./citas-listado.component.css']
})
export class CitasListadoComponent {

  headers = ["Nombre", "Apellidos", "Teléfono", "Barbero", "Servicios", "Fecha", "Hora"]

  @Input('data') listaCitas : CitasInterface[] = []

  title : string = "Listado de citas"
}
