import { Component, OnInit } from '@angular/core';
import { BarberosInterface } from '../interfaces/barberos.interface';
import { BarberosAjustesService } from '../services/barberos-ajustes.service';

@Component({
  selector: 'app-ajustes-barberos-lista',
  templateUrl: './ajustes-barberos-lista.component.html',
  styleUrls: ['./ajustes-barberos-lista.component.css']
})
export class AjustesBarberosListaComponent implements OnInit {

  title : string = "Listado de barberos"
  listaBarberos : BarberosInterface[] = []
  
  constructor(private readonly barberosAjustesService :  BarberosAjustesService) { }

  ngOnInit(): void {
    this.barberosAjustesService.findAll().subscribe( data => this.listaBarberos = data )
  }

}
