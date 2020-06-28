import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  classTitle = 'ACE Summer Song / Monlogue Classes';
  classTeacher = '';
  classDescription = `Checkout: <span class="accent-text bold">$75</span>`

  constructor() { }

  ngOnInit() {
  }

}
