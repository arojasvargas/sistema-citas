import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AjustesModule } from './ajustes/ajustes.module';
import { AppComponent } from './app.component';
import { CitasModule } from './citas/citas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CitasModule,
    AjustesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
