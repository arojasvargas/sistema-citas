import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarberosAjustesService } from '../services/barberos-ajustes.service';

@Component({
  selector: 'app-ajustes-barberos',
  templateUrl: './ajustes-barberos.component.html',
  styleUrls: ['./ajustes-barberos.component.css']
})
export class AjustesBarberosComponent implements OnInit {

  barberosForm! : FormGroup
  title : string = "Formulario para registro de barberos"
  alerta : boolean = false

  constructor(private readonly formBuilder : FormBuilder,
              private barberosAjustesService : BarberosAjustesService) { }

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
    this.barberosAjustesService.create(this.barberosForm.value).subscribe(
      (res) => {
        console.log(res)
        this.alerta = true
        this.barberosForm.reset()
      })
  }
}
