import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajustes-servicios',
  templateUrl: './ajustes-servicios.component.html',
  styleUrls: ['./ajustes-servicios.component.css']
})
export class AjustesServiciosComponent implements OnInit {

  serviciosForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  title : string = "Formulario para registro de servicios"

  ngOnInit(): void {
    this.serviciosForm = this.initForm()
    // this.onPatchValue()
  }

  initForm() : FormGroup{
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['']
    })
  }

  // onPatchValue(){
  //   this.serviciosForm.patchValue({
  //     nombre : 'Corte'
  //   })
  // }

  onSubmit(){
    console.log(this.serviciosForm.value)
  }

}
