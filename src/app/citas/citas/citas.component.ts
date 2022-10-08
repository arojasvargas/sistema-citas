import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarberosInterface } from 'src/app/ajustes/interfaces/barberos.interface';
import { BarberosAjustesService } from 'src/app/ajustes/services/barberos-ajustes.service';
import { ServiciosInterface } from '../../ajustes/interfaces/servicios.interface';
import { ServiciosAjustesService } from '../../ajustes/services/servicios-ajustes.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})

export class CitasComponent implements OnInit { 

  listaBarberos : BarberosInterface[] = []
  listaServicios : ServiciosInterface[] = []
  title : string = "Formulario para registro de citas"

  constructor(private readonly barberosAjustesService :  BarberosAjustesService,
              private readonly serviciosAjustesService :  ServiciosAjustesService,
              private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    // this.barberosAjustesService.findAll().subscribe( data => this.listaBarberos = data )
    // this.serviciosAjustesService.findAll().subscribe( data => this.listaServicios = data )
    this.listaBarberos = this.activatedRoute.snapshot.data['barberos']
    this.listaServicios = this.activatedRoute.snapshot.data['servicios']

  }

  concatenar(nombre: string, apellido: string){
    return nombre + ' ' + apellido
  }
}
