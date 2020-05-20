import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../shared/services/account.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {
  public token: string;
  public message: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.token = params['token'];
      this.accountService.verifyAccount(this.token).subscribe(
        (res) => {
          this.message = res['message'];
        },
        (error) => {
          this.message = error['error']['message'];
        }
      );
    });
  }
}
