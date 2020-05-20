import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../shared/services/account.service';
import { User } from 'src/app/shared/models/user.account';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public user: User;
  public resendVerify: boolean = false;

  constructor(private accountService: AccountService) {
    this.user = new User();
  }

  ngOnInit(): void {}

  signup(form) {
    this.accountService.createAccount(this.user).subscribe(
      (res) => {
        console.log(res);
        alert('Verifica tu correo ' + res['username']);
        this.resendVerify = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resendVerification($event) {
    if (
      this.user.email != null &&
      this.user.email != '' &&
      this.user.email != undefined
    ) {
      this.accountService.resendVerification(this.user.email).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
