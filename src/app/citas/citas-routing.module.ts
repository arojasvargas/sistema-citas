import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasListadoComponent } from './citas-listado/citas-listado.component';
import { CitasComponent } from './citas/citas.component';
import { BarberosResolver } from './resolvers/barberos.resolver';
import { ServiciosResolver } from './resolvers/servicios.resolver';

const routes: Routes = [
  { path: 'registrarcita', component: CitasComponent, resolve: {barberos: BarberosResolver, servicios : ServiciosResolver} },
  { path: 'listadocitas', component: CitasListadoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
