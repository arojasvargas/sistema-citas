import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CitasListadoComponent } from './citas-listado/citas-listado.component';
import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas/citas.component';

@NgModule({
    declarations: [ 
        CitasComponent,
        CitasListadoComponent
    ],
    imports : [ 
        CommonModule, 
        FormsModule,
        CitasRoutingModule
    ],
})

export class CitasModule { }