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

  constructor(private readonly formBuilder : FormBuilder,
              private serviciosAjustesService :  ServiciosAjustesService) { }

  title : string = "Formulario para registro de servicios"

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
    var formData : any = new FormData();
    formData.append("nombre", this.serviciosForm.get('nombre').value)
    formData.append("descripcion", this.serviciosForm.get('descripcion').value)
    this.serviciosAjustesService.create(formData).subscribe(
      (res) => console.log(res)
    )
  }

}
