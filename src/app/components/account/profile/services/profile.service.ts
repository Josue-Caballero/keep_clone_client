import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../../../api.keep';
import { User } from '../../../../shared/models/user.account';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  public api: string = Api;
  constructor(private http: HttpClient) {}

  private transform(str: string) {
    const tmp = str.split(' ');
    let text = '';
    for (let i = 0; i < tmp.length; i++) {
      text += `${tmp[i].charAt(0).toUpperCase()}${tmp[i].slice(1)} `;
    }
    return text;
  }

  getUserAuth(): Observable<User> {
    return this.http.get<User>(this.api + '/auth/profile').pipe(
      map((resp) => {
        let user = resp as User;
        user.name = this.transform(user.name);
        user.lastname = this.transform(user.lastname);
        return user;
      })
    );
  }

  updatePhoto(file: File) {
    const formData = new FormData();
    formData.append('img', file, file.name);
    return this.http.post(`${this.api}/uploads/image-account`, formData);
  }
}
