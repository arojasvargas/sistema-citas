import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjustesRoutingModule } from './ajustes-routing.module';
import { AjustesBarberosComponent } from './ajustes-barberos/ajustes-barberos.component';
import { AjustesServiciosComponent } from './ajustes-servicios/ajustes-servicios.component';
import { AjustesBarberosListaComponent } from './ajustes-barberos-lista/ajustes-barberos-lista.component';
import { AjustesServiciosListaComponent } from './ajustes-servicios-lista/ajustes-servicios-lista.component';

@NgModule({
  declarations: [
    AjustesBarberosComponent,
    AjustesServiciosComponent,
    AjustesBarberosListaComponent,
    AjustesServiciosListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AjustesRoutingModule
  ]
})
export class AjustesModule { }
