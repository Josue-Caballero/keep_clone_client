import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.account';
import { LoginService } from './services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(
    private serviceLogin: LoginService,
    private serviceAuth: AuthService,
    private router: Router
  ) {
    this.user = new User();
  }

  ngOnInit(): void {}

  signin(form) {
    this.serviceLogin.login(this.user).subscribe(
      (res) => {
        console.log(res.body);
        const token = res.headers.get('Authorization');
        this.serviceAuth.setLoggedIn(token);
      },
      (error) => {
        console.log(error);
      },
      () => this.router.navigateByUrl('/keep')
    );
  }
}
