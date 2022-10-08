import { Component, OnInit } from '@angular/core';
import { CitaService } from '../citas/services/cita.service';
import { CitasInterface } from '../citas/interfaces/citas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  title : string = "Dashboard"
  citas : CitasInterface[] = []

  constructor(private readonly citasDashboardService :  CitaService){}

  ngOnInit(): void {
    this.citasDashboardService.findAll().subscribe(data => this.citas = data)
  }
}