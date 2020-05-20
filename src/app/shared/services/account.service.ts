import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../../api.keep';
import { User } from '../models/user.account';

@Injectable()
export class AccountService {
  public api: string = Api;

  constructor(private http: HttpClient) {}

  createAccount(user: User) {
    return this.http.post(this.api + '/auth/account', user);
  }

  resendVerification(email: string) {
    const user = new User();
    user.email = email;
    return this.http.post(this.api + '/auth/resend-verification', user);
  }

  verifyAccount(token: string) {
    return this.http.post(this.api + '/auth/verify-account?token=' + token, {});
  }
}
