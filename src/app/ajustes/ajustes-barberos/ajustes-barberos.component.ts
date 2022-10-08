import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberosInterface } from '../interfaces/barberos.interface';

@Component({
  selector: 'app-ajustes-barberos',
  templateUrl: './ajustes-barberos.component.html',
  styleUrls: ['./ajustes-barberos.component.css']
})
export class AjustesBarberosComponent implements OnInit {

  barberosForm! : FormGroup

  constructor(private readonly formBuilder : FormBuilder) { }

  title : string = "Formulario para registro de barberos"

  ngOnInit(): void {
    this.barberosForm = this.initForm()
  }

  initForm() : FormGroup{
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      edad: ['', [Validators.required, Validators.minLength(2)]]
    })
  }
  onSubmit(){
    console.log(this.barberosForm.value)
  }
}
