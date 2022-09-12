import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas/citas/citas.component';
import { CitasListadoComponent } from './citas/citas-listado/citas-listado.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  { path: '', component: DashboardComponent},
  { path: 'registrarcita', component: CitasComponent },
  { path: 'listadocitas', component: CitasListadoComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes) ],
  declarations: [CitasListadoComponent],
  exports: [RouterModule]
})

export class AppRoutingModule { }
