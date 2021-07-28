import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  height: String = "30%";
  width: String = "30%";
  mobile: boolean;

  constructor() {
    console.log(this.height);
  }

  ngOnInit(): void {
    if (window.screen.width <= 425) { // 768px portrait
      this.mobile = true;
    }
  }

}
