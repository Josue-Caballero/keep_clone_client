import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gretting',
  templateUrl: './gretting.component.html',
  styleUrls: ['./gretting.component.css'],
})
export class GrettingComponent implements OnInit {
  message = 'Hello!.';

  constructor() {}

  ngOnInit(): void {}
}
