import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BarberosInterface } from 'src/app/ajustes/interfaces/barberos.interface';
import { ServiciosInterface } from '../../ajustes/interfaces/servicios.interface';
import { CitaService } from '../services/cita.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})

export class CitasComponent implements OnInit { 

  listaBarberos : BarberosInterface[] = []
  listaServicios : ServiciosInterface[] = []
  title : string = "Formulario para re gistro de citas"
  citasForm! : FormGroup
  alerta : boolean = false
  listaHoras : string[] = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
  ]

  constructor(private readonly formBuilder : FormBuilder,
              private citasServicio : CitaService,
              private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {
    this.listaBarberos = this.activatedRoute.snapshot.data['barberos']
    this.listaServicios = this.activatedRoute.snapshot.data['servicios']
    this.citasForm = this.initForm()
  }

  initForm() : FormGroup{
    return this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.email]],
      telefono: ['', [Validators.required, Validators.minLength(8)]],
      barbero: ['', [Validators.required]],
      servicios: new FormArray([]),
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      comentarios: [''],
    })
  }

  onSubmit(){
    this.citasServicio.create(this.citasForm.value).subscribe(
      (res) => {
        console.log(res)
        this.alerta = true
        this.citasForm.reset()
      })
  }

  onCheckboxChange(event: any) {
    const servicios = (this.citasForm.controls['servicios'] as FormArray)
    if (event.target.checked) {
      servicios.push(new FormControl(event.target.value))
    } else {
      const index = servicios.controls
      .findIndex(x => x.value === event.target.value)
      servicios.removeAt(index)
    }
  }

  concatenar(nombre: string, apellido: string){
    return nombre + ' ' + apellido
  }
}
