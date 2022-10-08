import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiciosInterface } from '../../ajustes/interfaces/servicios.interface';
import { ServiciosAjustesService } from '../../ajustes/services/servicios-ajustes.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosResolver implements Resolve<ServiciosInterface[]> {

  constructor(private readonly serviciosService : ServiciosAjustesService){}

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<ServiciosInterface[]> {
    return this.serviciosService.findAll()
  }
}
