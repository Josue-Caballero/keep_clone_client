import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private _location: Location, private serviceAuth: AuthService) {}

  canActivate() {
    if (!this.serviceAuth.getLoggedIn()) {
      return true;
    } else {
      this._location.back();
      return false;
    }
  }
}
