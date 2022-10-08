import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AjustesBarberosListaComponent } from './ajustes-barberos-lista/ajustes-barberos-lista.component';
import { AjustesBarberosComponent } from './ajustes-barberos/ajustes-barberos.component';
import { AjustesServiciosListaComponent } from './ajustes-servicios-lista/ajustes-servicios-lista.component';
import { AjustesServiciosComponent } from './ajustes-servicios/ajustes-servicios.component';

const routes: Routes = [
  { path: 'registrarbarbero', component: AjustesBarberosComponent },
  { path: 'listabarberos', component: AjustesBarberosListaComponent },
  { path: 'registrarservicio', component: AjustesServiciosComponent },
  { path: 'listaservicios', component: AjustesServiciosListaComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjustesRoutingModule { }
