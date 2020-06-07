import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  classTitle = 'Shakespeare Monologues Made Easy';
  classTeacher = 'Coach: Jay Apking';
  classDescription = `Checkout: <span class="accent-text bold">$75</span>`

  constructor() { }

  ngOnInit() {
  }

}
