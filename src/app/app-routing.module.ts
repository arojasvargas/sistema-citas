import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes : Routes = [
  { path: 'dashboard', loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'citas', loadChildren: ()=> import('./citas/citas.module').then(m => m.CitasModule) },
  { path: 'ajustes', loadChildren: ()=> import('./ajustes/ajustes.module').then(m => m.AjustesModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule, 
    RouterModule.forRoot(routes), 
    FormsModule, 
    ReactiveFormsModule 
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
