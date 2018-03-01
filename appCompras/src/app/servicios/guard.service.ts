import { AutenticacionService } from './autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticacionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticacionService.isAuthenticated();
  }

}
