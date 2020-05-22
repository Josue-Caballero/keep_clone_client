import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../../api.keep';
import { User } from '../../../shared/models/user.account';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  public api: string = Api;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.api + '/auth/login', user, {
      observe: 'response',
    });
  }
}
