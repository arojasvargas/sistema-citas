import { NgModule } from "@angular/core";
import { CitasComponent } from "./citas/citas.component";
import { CitasListadoComponent } from './citas-listado/citas-listado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports : [CommonModule, FormsModule],
    declarations: [ CitasComponent, CitasListadoComponent ],
    exports: [ CitasComponent ],
})

export class CitasModule { }