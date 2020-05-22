import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { User } from 'src/app/shared/models/user.account';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService],
})
export class ProfileComponent implements OnInit {
  @ViewChild('form') form;

  public user: User;
  public fileUpload: Array<File>;
  constructor(private serviceProfile: ProfileService) {}

  ngOnInit(): void {
    this.serviceProfile.getUserAuth().subscribe(
      (res) => (this.user = res),
      (error) => console.log(error)
    );
  }

  loadPhoto(file: any) {
    this.fileUpload = <Array<File>>file.target.files;
  }

  uploadPhoto() {
    this.serviceProfile.updatePhoto(this.fileUpload[0]).subscribe(
      (res) => {
        this.user.storageUrl = res['storageUrl'];
        this.fileUpload = [];
        this.form.nativeElement.reset();
      },
      (err) => {
        this.fileUpload = [];
        console.log(err);
      }
    );
  }
}
