import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isLoggedIn: Boolean;
  public accessToken: string;

  constructor() {
    this.isLoggedIn = false;
  }

  setLoggedIn(token: string) {
    this.isLoggedIn = true;
    this.accessToken = token;
    localStorage.setItem('accessToken', JSON.stringify(this.accessToken));
  }

  getLoggedIn() {
    return JSON.parse(localStorage.getItem('accessToken'));
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.isLoggedIn = false;
  }
}
