import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiciosAjustesService } from '../services/servicios-ajustes.service';

@Component({
  selector: 'app-ajustes-servicios',
  templateUrl: './ajustes-servicios.component.html',
  styleUrls: ['./ajustes-servicios.component.css']
})
export class AjustesServiciosComponent implements OnInit {

  serviciosForm! : FormGroup
  title : string = "Formulario para registro de servicios"
  alerta : boolean = false

  constructor(private readonly formBuilder : FormBuilder,
              private serviciosAjustesService :  ServiciosAjustesService) { }

  ngOnInit(): void {
    this.serviciosForm = this.initForm()
  }

  initForm() : FormGroup{
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['']
    })
  }

  onSubmit(){
    this.serviciosAjustesService.create(this.serviciosForm.value).subscribe(
      (res) => {
        console.log(res)
        this.alerta = true
        this.serviciosForm.reset()
      })
  }

}
