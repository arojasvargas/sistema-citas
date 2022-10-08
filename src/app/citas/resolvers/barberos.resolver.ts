import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BarberosAjustesService } from '../../ajustes/services/barberos-ajustes.service';
import { BarberosInterface } from '../../ajustes/interfaces/barberos.interface';

@Injectable({
  providedIn: 'root'
})
export class BarberosResolver implements Resolve<BarberosInterface[]> {

  constructor(private readonly barberosService : BarberosAjustesService){}

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<BarberosInterface[]> {
    return this.barberosService.findAll()
  }
}
